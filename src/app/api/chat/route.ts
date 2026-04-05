import { streamText, stepCountIs, convertToModelMessages } from "ai";
import { google } from "@ai-sdk/google";
import { portfolioTools } from "@/lib/ai/tools";
import { buildSystemPrompt } from "@/lib/ai/prompts";
import { getProfile } from "@/lib/sanity/queries";
import { addEntry, isDuplicate } from "@/lib/knowledge";
import type { KnowledgeEntry } from "@/lib/knowledge/types";

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Fetch profile to personalize the system prompt
  const profile = await getProfile();

  const systemPrompt = profile
    ? buildSystemPrompt({
        name: profile.name,
        title: profile.title,
        ownerType: profile.ownerType || "developer",
      })
    : buildSystemPrompt();

  const modelMessages = await convertToModelMessages(messages);

  // Extract the user's latest question for auto-learning
  const lastUserMessage = [...messages]
    .reverse()
    .find((m: { role: string }) => m.role === "user");

  const result = streamText({
    model: google("gemini-2.5-flash"),
    system: systemPrompt,
    messages: modelMessages,
    tools: portfolioTools,
    stopWhen: stepCountIs(5),
    onFinish: async ({ text }) => {
      // Auto-learn: store the Q&A pair if meaningful
      if (!lastUserMessage || !text || text.length < 50) return;

      const question =
        lastUserMessage.parts
          ?.find((p: { type: string }) => p.type === "text")
          ?.text ?? "";

      if (question.length < 10) return;

      // Skip bad responses (off-topic redirects, apologies, failure messages)
      if (text.includes("I'd love to focus on my work")) return;
      if (text.includes("I apologize")) return;
      if (text.includes("I don't have")) return;
      if (text.includes("I can't find")) return;
      if (text.includes("unable to retrieve")) return;

      if (isDuplicate(question)) return;

      try {
        await addEntry({
          question,
          answer: text,
          category: inferCategory(question),
          tags: extractTags(question),
          source: "auto",
        });
      } catch {
        // Silent — auto-learning should never break chat
      }
    },
  });

  return result.toUIMessageStreamResponse();
}

function inferCategory(
  question: string
): KnowledgeEntry["category"] {
  const q = question.toLowerCase();
  if (/project|portfolio|case.?study|work|built|shipped/.test(q))
    return "projects";
  if (/lead|mentor|team|manage|coach|critique/.test(q)) return "leadership";
  if (/process|approach|method|how do you|workflow/.test(q)) return "process";
  if (/skill|tool|figma|tech|stack|react|design system/.test(q))
    return "skills";
  if (/experience|background|career|role|tell me about|yourself/.test(q))
    return "experience";
  if (/education|degree|certif|school|university/.test(q)) return "education";
  return "general";
}

function extractTags(question: string): string[] {
  const stopWords = new Set([
    "the", "a", "an", "is", "are", "was", "were", "what", "how",
    "why", "when", "where", "who", "your", "you", "can", "could",
    "would", "about", "with", "from", "have", "has", "had", "this",
    "that", "for", "and", "but", "not", "tell", "me", "do", "does",
  ]);

  return [
    ...new Set(
      question
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .split(/\s+/)
        .filter((w) => w.length > 2 && !stopWords.has(w))
    ),
  ].slice(0, 5);
}
