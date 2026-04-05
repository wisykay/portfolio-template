"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HexRadar } from "./components/HexRadar";
import Globe from "./components/Globe";

const experiences = [
  {
    id: "chat",
    title: "Ask Me Anything",
    description:
      "AI-powered interview. Ask about my process, design decisions, or any project — I'll answer like I'm in the room.",
    href: "/chat",
    icon: <ChatIcon />,
    accent: "rgba(147, 130, 255, 1)",
    accentGlow: "rgba(147, 130, 255, 0.15)",
  },
  {
    id: "game",
    title: "Learn Spanish, Build a Village",
    description:
      "A 3D isometric game where you learn Spanish vocabulary by matching words, pronouncing them, and building a forest town.",
    href: "/game",
    icon: <GameIcon />,
    accent: "rgba(80, 220, 180, 1)",
    accentGlow: "rgba(80, 220, 180, 0.15)",
  },
  {
    id: "portfolio",
    title: "Case Studies & Projects",
    description:
      "12 projects across healthcare, FinTech, retail AI & agency — full case studies with process, decisions, and impact.",
    href: "/portfolio",
    icon: <PortfolioIcon />,
    accent: "rgba(255, 180, 80, 1)",
    accentGlow: "rgba(255, 180, 80, 0.15)",
  },
];

export default function HubPage() {
  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-[#09090b] px-6">
      {/* Subtle radial gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />

      {/* Top subtle line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center">
        {/* Avatar / Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"
        >
          <span className="text-2xl font-semibold tracking-tight text-white">
            K
          </span>
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-center"
        >
          <h1 className="text-5xl leading-tight font-bold tracking-tight text-white sm:text-6xl">
            Hey, I&apos;m Kay
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-2 text-center text-xl font-medium text-white"
        >
          Senior UX Designer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 max-w-lg text-center text-base leading-relaxed text-white/70"
        >
          This isn&apos;t your typical portfolio. Pick how you want to
          experience my work — no PDFs, no boring scroll.
        </motion.p>

        {/* Globe */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <Globe />
        </motion.div>

        {/* Experience Cards */}
        <div className="flex w-full flex-col gap-4 sm:flex-row">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.55 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex-1"
            >
              <ExperienceCard experience={exp} />
            </motion.div>
          ))}
        </div>

        {/* Bottom hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10 text-xs text-white/60"
        >
          Choose your experience
        </motion.p>
      </div>
    </div>
  );
}

function ExperienceCard({
  experience,
}: {
  experience: (typeof experiences)[number];
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={experience.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative block overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]"
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(300px circle at 50% 0%, ${experience.accentGlow}, transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        <div
          className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300"
          style={{
            backgroundColor: hovered
              ? experience.accentGlow
              : "rgba(255,255,255,0.04)",
            color: hovered ? experience.accent : "rgba(255,255,255,0.4)",
          }}
        >
          {experience.icon}
        </div>

        <h2 className="mb-1.5 text-base font-semibold text-white">
          {experience.title}
        </h2>
        <p className="mb-4 text-[13px] leading-relaxed text-white/70">
          {experience.description}
        </p>

        <div
          className="flex items-center gap-1.5 text-[13px] font-medium transition-all duration-300"
          style={{
            color: hovered ? experience.accent : "rgba(255,255,255,0.7)",
          }}
        >
          <span>Enter</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

function ChatIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function GameIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M6 12h4" />
      <path d="M8 10v4" />
      <circle cx="15" cy="11" r="1" />
      <circle cx="18" cy="13" r="1" />
    </svg>
  );
}

function PortfolioIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}
