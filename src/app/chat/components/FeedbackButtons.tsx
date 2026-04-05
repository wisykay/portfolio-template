"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FeedbackButtons({ answerText }: { answerText: string }) {
  const [voted, setVoted] = useState<"up" | "down" | null>(null);

  async function handleVote(vote: "up" | "down") {
    if (voted) return;
    setVoted(vote);

    try {
      await fetch("/api/knowledge/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answerSnippet: answerText.slice(0, 100),
          vote,
        }),
      });
    } catch {
      // Silent
    }
  }

  return (
    <div className="mt-1 flex items-center gap-0.5">
      <AnimatePresence mode="wait">
        {voted ? (
          <motion.span
            key="thanks"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[11px] text-white/25"
          >
            {voted === "up" ? "Thanks!" : "Noted"}
          </motion.span>
        ) : (
          <>
            <motion.button
              key="up"
              onClick={() => handleVote("up")}
              className="rounded p-1 text-white/15 transition-colors hover:bg-white/5 hover:text-green-400"
              aria-label="Good answer"
              whileTap={{ scale: 0.9 }}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 10v12" />
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
              </svg>
            </motion.button>
            <motion.button
              key="down"
              onClick={() => handleVote("down")}
              className="rounded p-1 text-white/15 transition-colors hover:bg-white/5 hover:text-red-400"
              aria-label="Poor answer"
              whileTap={{ scale: 0.9 }}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 14V2" />
                <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" />
              </svg>
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
