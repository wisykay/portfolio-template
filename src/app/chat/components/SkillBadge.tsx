"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  category?: string;
  level?: number;
}

const categoryColors: Record<string, string> = {
  frontend: "bg-blue-500/20 text-blue-300",
  backend: "bg-green-500/20 text-green-300",
  design: "bg-pink-500/20 text-pink-300",
  devops: "bg-orange-500/20 text-orange-300",
  music: "bg-purple-500/20 text-purple-300",
  other: "bg-white/10 text-white/60",
};

export function SkillBadge({ name, category, level }: SkillBadgeProps) {
  const colorClass = categoryColors[category || "other"] || categoryColors.other;

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm ${colorClass}`}
    >
      {name}
      {level && (
        <span className="ml-1 opacity-50">
          {"●".repeat(level)}{"○".repeat(5 - level)}
        </span>
      )}
    </motion.span>
  );
}
