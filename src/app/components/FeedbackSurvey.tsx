"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Rating = "positive" | "negative" | null;

export function FeedbackSurvey({ page }: { page: string }) {
  const [rating, setRating] = useState<Rating>(null);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit() {
    if (!rating) return;
    setSending(true);
    try {
      await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating, comment, page }),
      });
      setSubmitted(true);
    } catch {
      // Silently fail — don't block the user
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-8 text-center"
          >
            <p className="text-sm font-medium text-white/60">
              Thanks for the feedback.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
          >
            {/* Label */}
            <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.08em] text-white/25">
              Feedback
            </p>
            <p className="mb-5 text-sm font-medium text-white/60">
              How was your experience?
            </p>

            {/* Face buttons */}
            <div className="mb-5 flex gap-3">
              <button
                onClick={() => setRating("positive")}
                className={`group flex h-14 flex-1 items-center justify-center gap-2.5 rounded-xl border transition-all duration-200 ${
                  rating === "positive"
                    ? "border-emerald-500/30 bg-emerald-500/10"
                    : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04]"
                }`}
              >
                <span className="text-2xl">😊</span>
                <span
                  className={`text-xs font-medium ${
                    rating === "positive"
                      ? "text-emerald-400/80"
                      : "text-white/30"
                  }`}
                >
                  Good
                </span>
              </button>

              <button
                onClick={() => setRating("negative")}
                className={`group flex h-14 flex-1 items-center justify-center gap-2.5 rounded-xl border transition-all duration-200 ${
                  rating === "negative"
                    ? "border-red-500/30 bg-red-500/10"
                    : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04]"
                }`}
              >
                <span className="text-2xl">😞</span>
                <span
                  className={`text-xs font-medium ${
                    rating === "negative"
                      ? "text-red-400/80"
                      : "text-white/30"
                  }`}
                >
                  Not great
                </span>
              </button>
            </div>

            {/* Comment box — only shows after rating */}
            <AnimatePresence>
              {rating && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Anything you'd like to share? (optional)"
                    rows={3}
                    className="mb-4 w-full resize-none rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm text-white/80 placeholder:text-white/20 focus:border-white/[0.12] focus:outline-none"
                  />

                  <button
                    onClick={handleSubmit}
                    disabled={sending}
                    className="w-full rounded-xl bg-white/[0.08] py-2.5 text-sm font-medium text-white/70 transition-all duration-200 hover:bg-white/[0.12] hover:text-white/90 disabled:opacity-40"
                  >
                    {sending ? "Sending..." : "Submit"}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
