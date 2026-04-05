"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { ProjectCard } from "./ProjectCard";
import { SkillBadge } from "./SkillBadge";
import { FeedbackButtons } from "./FeedbackButtons";
import type { UIMessage } from "ai";

interface MessageBubbleProps {
  message: UIMessage;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[85%] ${
          isUser
            ? "rounded-2xl rounded-br-md bg-indigo-600 px-4 py-3 text-white"
            : "space-y-3"
        }`}
      >
        {message.parts.map((part, i) => {
          if (part.type === "text" && part.text) {
            if (isUser) {
              return <p key={i}>{part.text}</p>;
            }
            return (
              <div
                key={i}
                className="rounded-2xl rounded-bl-md bg-white/5 px-4 py-3 text-white/90 backdrop-blur-sm"
              >
                <ReactMarkdown
                  components={{
                    p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                    strong: ({ children }) => (
                      <strong className="font-semibold text-white">{children}</strong>
                    ),
                    ul: ({ children }) => (
                      <ul className="mb-2 ml-4 list-disc space-y-1">{children}</ul>
                    ),
                    li: ({ children }) => (
                      <li className="text-white/80">{children}</li>
                    ),
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 underline hover:text-indigo-300"
                      >
                        {children}
                      </a>
                    ),
                  }}
                >
                  {part.text}
                </ReactMarkdown>
                <FeedbackButtons answerText={part.text} />
              </div>
            );
          }

          // Tool result parts are typed as `tool-{toolName}`
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const anyPart = part as any;
          if (part.type.startsWith("tool-") && anyPart.output != null) {
            const toolName = part.type.replace("tool-", "");
            return (
              <ToolResult
                key={i}
                toolName={toolName}
                result={anyPart.output as Record<string, unknown>}
              />
            );
          }

          return null;
        })}
      </div>
    </motion.div>
  );
}

function ToolResult({
  toolName,
  result,
}: {
  toolName: string;
  result: Record<string, unknown>;
}) {
  if (toolName === "searchProjects" && result.projects) {
    const projects = result.projects as Array<{
      title: string;
      slug: string;
      description?: string;
      tags?: string[];
      url?: string;
      repo?: string;
      category?: string;
      date?: string;
    }>;

    if (projects.length === 0) return null;

    return (
      <div className="space-y-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} {...p} />
        ))}
      </div>
    );
  }

  if (toolName === "getProjectDetail" && !result.error) {
    const p = result as {
      title: string;
      slug: string;
      description?: string;
      tags?: string[];
      url?: string;
      repo?: string;
      category?: string;
      date?: string;
    };
    return <ProjectCard {...p} />;
  }

  if (toolName === "getSkills" && result.skills) {
    const skills = result.skills as Array<{
      name: string;
      category?: string;
      level?: number;
    }>;
    return (
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <SkillBadge key={s.name} {...s} />
        ))}
      </div>
    );
  }

  if (toolName === "getContactInfo" && !result.error) {
    const { email, socials } = result as {
      email?: string;
      socials?: Array<{ platform: string; url: string }>;
    };
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
        {email && (
          <a
            href={`mailto:${email}`}
            className="block text-sm text-indigo-400 hover:text-indigo-300"
          >
            {email}
          </a>
        )}
        {socials && (
          <div className="flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/10 px-3 py-1.5 text-xs capitalize text-white/70 transition-colors hover:bg-white/20 hover:text-white"
              >
                {s.platform}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  return null;
}
