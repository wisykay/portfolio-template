import { NextResponse } from "next/server";
import { getAllEntries, updateQualityScore } from "@/lib/knowledge";

export async function POST(req: Request) {
  const { answerSnippet, vote } = await req.json();

  if (!answerSnippet || !vote || !["up", "down"].includes(vote)) {
    return NextResponse.json(
      { error: "answerSnippet (string) and vote ('up' | 'down') are required" },
      { status: 400 }
    );
  }

  const delta = vote === "up" ? 1 : -1;

  // Find entry by matching beginning of the answer
  const snippet = answerSnippet.slice(0, 100).toLowerCase();
  const entries = getAllEntries();
  const match = entries.find((e) =>
    e.answer.toLowerCase().startsWith(snippet)
  );

  if (!match) {
    return NextResponse.json({ matched: false });
  }

  const updated = await updateQualityScore(match.id, delta);
  return NextResponse.json({ matched: true, entry: updated });
}
