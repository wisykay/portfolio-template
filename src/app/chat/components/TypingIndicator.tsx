"use client";

import { motion } from "framer-motion";

export function TypingIndicator({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-2 text-white/40">
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-indigo-400"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
      <span className="text-xs">{label || "Thinking..."}</span>
    </div>
  );
}
