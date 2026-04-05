"use client";

import { motion } from "framer-motion";

interface SuggestedPromptsProps {
  onSelect: (prompt: string) => void;
}

const prompts = [
  "Show me your projects",
  "Tell me about yourself",
  "What's your tech stack?",
  "Show me featured work",
  "How can I contact you?",
];

export function SuggestedPrompts({ onSelect }: SuggestedPromptsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {prompts.map((prompt, i) => (
        <motion.button
          key={prompt}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          onClick={() => onSelect(prompt)}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition-all hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-white"
        >
          {prompt}
        </motion.button>
      ))}
    </div>
  );
}
