"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FeedbackSurvey } from "../components/FeedbackSurvey";

/* ── DATA ─────────────────────────────────────────────────────────────────── */

type Category =
  | "all"
  | "healthcare"
  | "fintech"
  | "retail"
  | "agency"
  | "ecommerce";

interface Project {
  title: string;
  company: string;
  role: string;
  year: string;
  category: Category;
  tags: string[];
  description: string;
  impact?: string;
  thumbnail?: string;
  thumbnailAlt?: string;
  accentFrom: string;
  accentVia: string;
  liveUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "XITE Sleep Study Platform",
    company: "Philips / Amaris Consulting",
    role: "UX Engineer",
    year: "2026",
    category: "healthcare",
    tags: ["React 18", "AI", "Design System", "FDA/HIPAA"],
    impact: "3.5h → 45min processing",
    description:
      "Cloud-native migration of Philips' legacy Somnolyzer sleep scoring software. Designed & built a 7-step guided flow with AI-assisted channel mapping across 17+ physiological signals.",
    thumbnail: "/portfolio/xite-clinician.jpg",
    thumbnailAlt: "Sleep clinician reviewing XITE platform on laptop in hospital office",
    accentFrom: "#2563eb",
    accentVia: "#0891b2",
    liveUrl: "https://case-study-lime.vercel.app",
    featured: true,
  },
  {
    title: "Wisy AI Retail Execution",
    company: "Wisy",
    role: "Product & UX Designer",
    year: "2025–Present",
    category: "retail",
    tags: ["Mobile", "Computer Vision", "B2B SaaS", "Human-in-the-loop"],
    impact: "AI shelf analysis for CPG",
    description:
      "AI-powered retail execution platform for CPG brands. Designed the B2B portal and Wisy Pulse mobile app — guided store visits with photo capture, AI shelf analysis, and review flows.",
    thumbnail: "/portfolio/wisy-og.jpg",
    thumbnailAlt: "Wisy field rep in store aisle with AI prep briefing on phone",
    accentFrom: "#059669",
    accentVia: "#16a34a",
    liveUrl: "https://site-murtu7h29-kays-projects-2782237c.vercel.app",
    featured: true,
  },
  {
    title: "GustitosGo Merchant Dashboard",
    company: "Gustazos / LATAM",
    role: "UX Designer",
    year: "2024",
    category: "fintech",
    tags: ["Analytics", "Dashboard", "Data Viz", "KPI"],
    impact: "SUS 41 → 81",
    description:
      "Merchant analytics dashboard for a LATAM deals platform. 4 design iterations, usability testing, and a SUS score that doubled.",
    thumbnail: "/portfolio/gustazos-merchant.jpg",
    thumbnailAlt: "LATAM restaurant owner viewing merchant analytics on tablet",
    accentFrom: "#d97706",
    accentVia: "#ea580c",
    liveUrl: "/portfolio/gustitosgo",
    featured: true,
  },
  {
    title: "Gustazos — Redefining Gifts",
    company: "GoBeyond Group",
    role: "UX Lead",
    year: "2023–2025",
    category: "ecommerce",
    tags: ["E-Commerce", "Gift Flow", "UX Writing", "Retention"],
    impact: "38% drop-off eliminated",
    description:
      "Full redesign of a legacy deal platform across Puerto Rico, Panama, and Jamaica. Split flows, UX writing overhaul, and a scalable framework for new markets.",
    thumbnail: "/portfolio/gobeyond-1.png",
    thumbnailAlt: "Gustazos redesigned gift and experience platform",
    accentFrom: "#D4872C",
    accentVia: "#F5B041",
    liveUrl: "/portfolio/gobeyond-gustazos",
  },
  {
    title: "eBanking Platform",
    company: "Banco General",
    role: "Senior UX Designer",
    year: "2019–2021",
    category: "fintech",
    tags: ["Onboarding", "KYC", "Compliance"],
    impact: "Panama's largest bank",
    description:
      "Led web journeys for onboarding, KYC, credit acquisition, and servicing. Established trust-first copy and defined analytics taxonomy.",
    thumbnail: "/portfolio/ebanking-thumbnail.jpg",
    thumbnailAlt: "Banco General eBanking dashboard with onboarding wizard",
    accentFrom: "#0284c7",
    accentVia: "#2563eb",
  },
  {
    title: "Credit Card Application Redesign",
    company: "Banco General",
    role: "Senior Product Designer",
    year: "2018–2019",
    category: "fintech",
    tags: ["Progressive Disclosure", "A/B Testing", "Funnel"],
    impact: "+40% completion rate",
    description:
      "Redesigned the credit card application with progressive disclosure. A/B tested against the 15-field legacy form — 40% higher completion.",
    thumbnail: "/portfolio/creditcard-thumbnail.jpg",
    thumbnailAlt: "Credit card application form with step-by-step progress",
    accentFrom: "#4f46e5",
    accentVia: "#2563eb",
  },
  {
    title: "Nequi P2P Expansion",
    company: "Banistmo",
    role: "UX/UI Designer",
    year: "2016–2018",
    category: "fintech",
    tags: ["Digital Banking", "P2P", "Mobile", "User Research"],
    impact: "Reduced 10-15% drop-off",
    description:
      "Redesigned P2P transfers for Colombia's fastest-growing digital banking app. Conducted research with 120+ users, reduced transfer errors, and boosted confidence with smart confirmation screens.",
    thumbnail: "/portfolio/nequi-thumbnail.jpg",
    thumbnailAlt: "Nequi digital banking app on smartphone",
    accentFrom: "#db2777",
    accentVia: "#e11d48",
    liveUrl: "/portfolio/nequi",
  },
  {
    title: "Yappy — Redefining Payments",
    company: "Banco General / Panama",
    role: "Sr. Product Designer",
    year: "2020",
    category: "fintech",
    tags: ["Mobile", "P2P", "Design System", "1.4M Users"],
    impact: "30% faster onboarding, 2x merchants",
    description:
      "Redesigned Panama's #1 payment app used by 1.4M+ users. Built a cross-platform design system, revamped onboarding, and designed a merchant dashboard with QR payments.",
    thumbnail: "/portfolio/yappy-thumbnail.jpg",
    thumbnailAlt: "Yappy payment app — home screen and QR payment mockup",
    accentFrom: "#059669",
    accentVia: "#10b981",
    liveUrl: "/portfolio/yappy",
  },
  {
    title: "Canadian Retirement Hub",
    company: "AI PromptEng Project",
    role: "Lead UX Designer",
    year: "2025",
    category: "fintech",
    tags: ["AI", "FinTech", "WCAG AA", "Senior UX"],
    impact: "AI-powered retirement planning",
    description:
      "Senior-friendly desktop platform consolidating retirement accounts with AI-assisted transfers, Monte Carlo income planning, and guardrailed AI explanations.",
    thumbnail: "/portfolio/crh-thumbnail.jpg",
    thumbnailAlt: "Senior couple reviewing retirement planning on tablet",
    accentFrom: "#2563eb",
    accentVia: "#0891b2",
    liveUrl: "/portfolio/canadian-retirement-hub",
  },
  {
    title: "Profit.co Revamp",
    company: "AI PromptEng Sprint",
    role: "UX/UI Designer",
    year: "2025",
    category: "ecommerce",
    tags: ["AI Sprint", "OKR Platform", "Vibe Coding"],
    impact: "2-day AI design sprint",
    description:
      "Rapid AI-augmented redesign of Profit.co's OKR platform. Used prompt engineering to compress discovery, generate design variations, and build interactive prototypes.",
    thumbnail: "/portfolio/profitco-thumbnail.jpg",
    thumbnailAlt: "Profit.co OKR dashboard with strategy alignment map",
    accentFrom: "#7c3aed",
    accentVia: "#6d28d9",
    liveUrl: "/portfolio/profit-co-revamp",
  },
  {
    title: "Nike 'Own the Night'",
    company: "DigitasLBi Hong Kong",
    role: "UX Designer",
    year: "2013",
    category: "agency",
    tags: ["Campaign", "Mobile Integration"],
    impact: "Gold Award Winner",
    thumbnail: "/portfolio/nike-thumbnail.jpg",
    thumbnailAlt: "Nike night running event in Hong Kong with tracking app",
    description:
      "Nike Hong Kong running campaign — real-time tracking, social features, and gamification. Won Gold for Best Integration of Mobile.",
    accentFrom: "#ea580c",
    accentVia: "#dc2626",
  },
  {
    title: "Pizza Hut 'Light Up' App",
    company: "DigitasLBi Hong Kong",
    role: "UX Designer",
    year: "2012",
    category: "agency",
    tags: ["iOS", "Android", "Gamification"],
    thumbnail: "/portfolio/pizzahut-thumbnail.jpg",
    thumbnailAlt: "Pizza Hut gamified mobile ordering app",
    description:
      "Prototyped onboarding, game loops, and UI states for a campaign-driven mobile app on iOS and Android.",
    accentFrom: "#dc2626",
    accentVia: "#ea580c",
  },
];

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "healthcare", label: "Healthcare" },
  { id: "fintech", label: "FinTech" },
  { id: "retail", label: "Retail & AI" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "agency", label: "Agency" },
];

const timeline = [
  { year: "2012", place: "Hong Kong", role: "UX Designer", company: "DigitasLBi", flag: "🇭🇰" },
  { year: "2013", place: "Hong Kong", role: "UX Designer", company: "Ogilvy & Mather", flag: "🇭🇰" },
  { year: "2016", place: "Panama", role: "UX Analyst", company: "Banistmo", flag: "🇵🇦" },
  { year: "2018", place: "Panama", role: "Sr. Product Designer", company: "Banco General", flag: "🇵🇦" },
  { year: "2022", place: "Canada", role: "UX Designer", company: "CI&T", flag: "🇨🇦" },
  { year: "2023", place: "Canada", role: "UX Lead", company: "GoBeyond Group", flag: "🇨🇦" },
  { year: "2025", place: "Remote", role: "Product & UX Designer", company: "Wisy", flag: "🌐" },
  { year: "2026", place: "Canada", role: "UX Engineer", company: "Amaris / Philips", flag: "🇨🇦" },
];

const ease = [0.22, 1, 0.36, 1] as const;

/* ── PAGE ──────────────────────────────────────────────────────────────────── */

export default function PortfolioPage() {
  const [filter, setFilter] = useState<Category>("all");
  const featured = projects.filter((p) => p.featured);
  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="relative min-h-dvh bg-[#fafafa] text-gray-900">
      {/* Top bar */}
      <div className="fixed left-0 right-0 top-0 z-30 flex items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="rounded-lg bg-white/80 px-3 py-1.5 text-sm font-medium text-gray-500 shadow-sm backdrop-blur-sm transition-colors hover:text-gray-900"
        >
          &larr; Back
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href="/cv"
            className="rounded-full border border-gray-300 bg-white/80 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm backdrop-blur-sm transition-all hover:border-gray-500 hover:text-gray-900 active:scale-95"
          >
            CV
          </Link>
          <HireMeButton />
        </div>
      </div>

      {/* ── HERO ── */}
      <header className="relative mx-auto max-w-6xl px-6 pt-24 pb-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-3 text-sm font-semibold tracking-wide uppercase text-gray-400"
        >
          Selected Work
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="mb-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
        >
          12 years across 3 continents
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease }}
          className="max-w-xl text-xl leading-relaxed text-gray-500"
        >
          Healthcare, FinTech, Retail AI, E-Commerce &amp; Agency — from Hong
          Kong to Panama to Canada.
        </motion.p>
      </header>

      {/* ── FEATURED PROJECTS — big hero cards ── */}
      <section className="mx-auto max-w-6xl px-6 pt-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease }}
            >
              <FeaturedCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <motion.nav
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease }}
        className="sticky top-0 z-20 border-y border-gray-200 bg-[#fafafa]/80 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-6xl gap-1.5 overflow-x-auto px-6 py-3">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                filter === c.id
                  ? "bg-gray-900 text-white"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </motion.nav>

      {/* ── ALL PROJECTS GRID ── */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ── AI SKYLINE TIMELINE ── */}
      <SkylineTimeline />

      {/* ── FEEDBACK ── */}
      <section className="bg-[#09090b] py-16">
        <FeedbackSurvey page="Portfolio" />
      </section>

      {/* ── CONTACT ── */}
      <footer className="border-t border-gray-200 bg-white py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-md"
        >
          <p className="mb-3 text-xl font-bold text-gray-900">
            Let&apos;s work together
          </p>
          <p className="mb-6 text-base text-gray-500">
            12 years designing products people love. Currently open to senior
            product design roles.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm">
            <a
              href="mailto:hello.kaykay@gmail.com"
              className="rounded-full bg-gray-900 px-6 py-2.5 font-medium text-white transition-all duration-300 hover:bg-gray-700"
            >
              Email me
            </a>
            <a
              href="https://linkedin.com/in/kaylo"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-300 px-6 py-2.5 font-medium text-gray-700 transition-all duration-300 hover:border-gray-500 hover:text-gray-900"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/productkay"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-300 px-6 py-2.5 font-medium text-gray-700 transition-all duration-300 hover:border-gray-500 hover:text-gray-900"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

/* ── FEATURED CARD ────────────────────────────────────────────────────────── */

function FeaturedCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  const card = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-gray-300"
    >
      {/* Thumbnail */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        {project.thumbnail ? (
          <>
            <Image
              src={project.thumbnail}
              alt={project.thumbnailAlt || project.title}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </>
        ) : (
          <div className="relative h-full w-full overflow-hidden">
            <div
              className="absolute inset-0 transition-all duration-700 group-hover:scale-110"
              style={{
                background: `
                  radial-gradient(ellipse at 30% 20%, ${project.accentFrom}18 0%, transparent 60%),
                  radial-gradient(ellipse at 70% 80%, ${project.accentVia}12 0%, transparent 50%),
                  linear-gradient(135deg, ${project.accentFrom}08 0%, ${project.accentVia}06 100%)
                `,
              }}
            />
            {/* Mock UI */}
            <div className="absolute inset-5 rounded-xl border border-gray-200/80 bg-white/60 shadow-sm">
              <div className="flex gap-1.5 border-b border-gray-100 p-3">
                <div className="h-2 w-2 rounded-full bg-gray-300" />
                <div className="h-2 w-2 rounded-full bg-gray-300" />
                <div className="h-2 w-2 rounded-full bg-gray-300" />
              </div>
              <div className="flex gap-2 p-3">
                <div className="h-8 w-1/3 rounded-lg bg-gray-100" />
                <div className="h-8 w-1/3 rounded-lg bg-gray-50" />
                <div className="h-8 w-1/3 rounded-lg bg-gray-100" />
              </div>
              <div className="mt-1 flex gap-2 px-3">
                <div className="h-14 w-1/2 rounded-lg bg-gray-50" />
                <div className="h-14 w-1/2 rounded-lg bg-gray-100" />
              </div>
            </div>
          </div>
        )}

        {/* Impact badge */}
        {project.impact && (
          <div className="absolute bottom-3 left-4 z-10">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-[12px] font-bold text-white backdrop-blur-md"
              style={{
                background: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentVia})`,
              }}
            >
              {project.impact}
            </span>
          </div>
        )}

        {/* Year */}
        <div className="absolute top-3 right-4 z-10">
          <span className="rounded-md bg-white/90 px-2 py-0.5 text-[12px] font-bold text-gray-600 shadow-sm backdrop-blur-sm">
            {project.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-1 text-lg font-bold text-gray-900">
          {project.title}
        </h3>
        <p className="mb-2 text-sm font-medium text-gray-400">
          {project.company} &middot; {project.role}
        </p>
        <p className="mb-4 flex-1 text-[15px] leading-relaxed text-gray-600">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-gray-100 px-2.5 py-1 text-[12px] font-medium text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        {project.liveUrl && (
          <div
            className="flex items-center gap-1.5 text-sm font-semibold transition-colors duration-300"
            style={{
              color: hovered ? project.accentFrom : "#9ca3af",
            }}
          >
            <span>View case study</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );

  if (project.liveUrl) {
    const isInternal = project.liveUrl.startsWith("/");
    if (isInternal) {
      return <Link href={project.liveUrl} className="block h-full">{card}</Link>;
    }
    return (
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
        {card}
      </a>
    );
  }
  return card;
}

/* ── PROJECT CARD ─────────────────────────────────────────────────────────── */

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  const inner = (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-gray-300"
    >
      {/* Visual header */}
      <div className="relative h-40 overflow-hidden bg-gray-100">
        {project.thumbnail ? (
          <>
            <Image
              src={project.thumbnail}
              alt={project.thumbnailAlt || project.title}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </>
        ) : (
          <div className="relative h-full w-full">
            <div
              className="absolute inset-0 transition-all duration-700 group-hover:scale-110"
              style={{
                background: `
                  radial-gradient(ellipse at 25% 30%, ${project.accentFrom}15 0%, transparent 55%),
                  radial-gradient(ellipse at 75% 70%, ${project.accentVia}10 0%, transparent 50%),
                  linear-gradient(135deg, ${project.accentFrom}06 0%, ${project.accentVia}04 100%)
                `,
              }}
            />
            {/* Mini UI */}
            <div className="absolute inset-4 rounded-lg border border-gray-200/80 bg-white/60 shadow-sm">
              <div className="flex gap-1 border-b border-gray-100 p-2">
                <div className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                <div className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                <div className="h-1.5 w-1.5 rounded-full bg-gray-300" />
              </div>
              <div className="flex gap-1.5 p-2">
                <div className="h-5 w-1/4 rounded bg-gray-100" />
                <div className="h-5 w-1/4 rounded bg-gray-50" />
                <div className="h-5 w-1/4 rounded bg-gray-100" />
                <div className="h-5 w-1/4 rounded bg-gray-50" />
              </div>
              <div className="mt-1 flex gap-1.5 px-2">
                <div className="h-10 w-1/2 rounded bg-gray-50" />
                <div className="h-10 w-1/2 rounded bg-gray-100" />
              </div>
            </div>
          </div>
        )}

        {/* Badges */}
        <div className="absolute bottom-2.5 left-3 right-3 z-10 flex items-end justify-between">
          {project.impact ? (
            <span
              className="rounded-full px-2.5 py-0.5 text-[11px] font-bold text-white backdrop-blur-md"
              style={{
                background: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentVia})`,
              }}
            >
              {project.impact}
            </span>
          ) : (
            <span />
          )}
          <span className="rounded bg-white/90 px-1.5 py-0.5 text-[11px] font-bold text-gray-600 shadow-sm backdrop-blur-sm">
            {project.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-1 text-base font-bold text-gray-900">
          {project.title}
        </h3>
        <p className="mb-2 text-[13px] font-medium text-gray-400">
          {project.company} &middot; {project.role}
        </p>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-500"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="rounded bg-gray-50 px-2 py-0.5 text-[11px] font-medium text-gray-400">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* CTA */}
        {project.liveUrl ? (
          <div
            className="flex items-center gap-1 text-sm font-semibold transition-colors duration-300"
            style={{
              color: hovered ? project.accentFrom : "#9ca3af",
            }}
          >
            <span>View case study</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </div>
        ) : (
          <div className="text-[12px] font-medium text-gray-300">Internal project</div>
        )}
      </div>
    </motion.div>
  );

  if (project.liveUrl) {
    const isInternal = project.liveUrl.startsWith("/");
    if (isInternal) {
      return <Link href={project.liveUrl} className="block h-full">{inner}</Link>;
    }
    return (
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
        {inner}
      </a>
    );
  }
  return inner;
}

/* ── SKYLINE TIMELINE ─────────────────────────────────────────────────────── */

const skylineData = [
  { year: 2012, label: "Pizza Hut App", role: "UX Designer", place: "Hong Kong", ai: 0, cat: "agency", desc: "iOS/Android gamification app", flag: "🇭🇰" },
  { year: 2013, label: "Nike Own the Night", role: "UX Designer", place: "Hong Kong", ai: 0, cat: "agency", desc: "Gold Award, mobile integration", flag: "🇭🇰" },
  { year: 2017, label: "Nequi P2P", role: "UX/UI Designer", place: "Panama", ai: 0, cat: "fintech", desc: "P2P redesign, reduced 10-15% drop-off", flag: "🇵🇦" },
  { year: 2018.5, label: "Credit Card Redesign", role: "Sr. Product Designer", place: "Panama", ai: 5, cat: "fintech", desc: "+40% completion via A/B testing", flag: "🇵🇦" },
  { year: 2019.5, label: "eBanking Platform", role: "Sr. UX Designer", place: "Panama", ai: 8, cat: "fintech", desc: "Onboarding, KYC, analytics taxonomy", flag: "🇵🇦" },
  { year: 2020, label: "Yappy Payments", role: "Sr. Product Designer", place: "Panama", ai: 5, cat: "fintech", desc: "1.4M users, P2P/P2C, design system", flag: "🇵🇦" },
  { year: 2023, label: "Gustazos Gifts", role: "UX Lead", place: "LATAM", ai: 15, cat: "ecommerce", desc: "38% drop-off eliminated, 3 markets", flag: "🌎" },
  { year: 2023.5, label: "GustitosGo Dashboard", role: "UX Designer", place: "LATAM", ai: 25, cat: "fintech", desc: "SUS 41→81, 4 design iterations", flag: "🌎" },
  { year: 2024.5, label: "Canadian Retirement Hub", role: "Lead UX Designer", place: "Canada", ai: 75, cat: "fintech", desc: "AI retirement planning, Monte Carlo", flag: "🇨🇦" },
  { year: 2025, label: "Wisy AI Retail", role: "Product Designer", place: "Remote", ai: 85, cat: "retail", desc: "Computer vision, AI shelf analysis", flag: "🌐" },
  { year: 2025.3, label: "Profit.co Revamp", role: "UX/UI Designer", place: "Remote", ai: 90, cat: "ecommerce", desc: "AI sprint, prompt engineering", flag: "🌐" },
  { year: 2026, label: "XITE Sleep Platform", role: "UX Engineer", place: "Canada", ai: 95, cat: "healthcare", desc: "AI channel mapping, 92% faster", flag: "🇨🇦" },
];

const catColors: Record<string, string> = {
  agency: "#f97316",
  fintech: "#3b82f6",
  enterprise: "#6366f1",
  ecommerce: "#a855f7",
  retail: "#10b981",
  healthcare: "#0ea5e9",
};

function SkylineTimeline() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="overflow-hidden bg-gray-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">AI Evolution</h2>
          <p className="mb-10 text-base text-white/40">How AI shaped my work over 12 years — from zero to AI-native</p>
        </motion.div>
      </div>

      {/* Horizontal scroll container */}
      <div className="relative">
        {/* Glowing line behind cards */}
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="flex gap-4 overflow-x-auto px-6 pb-6 pt-2 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: "none" }}>
          {/* Left spacer */}
          <div className="w-8 shrink-0" />

          {skylineData.map((d, i) => {
            const color = catColors[d.cat] || "#666";
            const isActive = active === i;
            const barH = Math.max(20, (d.ai / 100) * 180);

            return (
              <motion.div
                key={d.year + d.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="group relative flex w-[140px] shrink-0 snap-center flex-col items-center cursor-pointer"
              >
                {/* AI bar — grows from bottom */}
                <div className="relative mb-3 flex h-[200px] items-end">
                  <div
                    className="relative w-16 rounded-t-lg transition-all duration-500"
                    style={{
                      height: barH,
                      background: `linear-gradient(to top, ${color}, ${color}88)`,
                      opacity: isActive ? 1 : 0.6,
                      boxShadow: isActive ? `0 0 30px ${color}40` : "none",
                    }}
                  >
                    {/* AI percentage inside bar */}
                    <div className="absolute inset-x-0 top-2 text-center">
                      <span className="text-xs font-bold text-white/90">{d.ai}%</span>
                    </div>

                    {/* Glowing dot at top */}
                    <div
                      className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-gray-950 transition-all duration-300"
                      style={{
                        background: color,
                        boxShadow: isActive ? `0 0 12px ${color}` : "none",
                      }}
                    />
                  </div>
                </div>

                {/* Ground line */}
                <div className="mb-3 h-px w-full bg-white/10" />

                {/* Label */}
                <div className="text-center">
                  <p className="text-xs font-bold text-white/30">{Math.floor(d.year)}</p>
                  <p className={`mt-0.5 text-sm font-bold transition-colors duration-200 ${isActive ? "text-white" : "text-white/60"}`}>
                    {d.label}
                  </p>
                  <p className="mt-0.5 text-[11px] text-white/25">{d.flag} {d.place}</p>
                </div>

                {/* Hover card */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-4 left-1/2 z-20 w-48 -translate-x-1/2 -translate-y-full rounded-xl p-3 text-center"
                    style={{ background: color }}
                  >
                    <p className="text-xs font-bold text-white">{d.label}</p>
                    <p className="mt-0.5 text-[11px] text-white/70">{d.desc}</p>
                    <p className="mt-1 text-[10px] font-semibold text-white/50">{d.role}</p>
                    {/* Arrow */}
                    <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45" style={{ background: color }} />
                  </motion.div>
                )}

                {/* Category dot */}
                <div className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: color, opacity: 0.5 }} />
              </motion.div>
            );
          })}

          {/* Right spacer */}
          <div className="w-8 shrink-0" />
        </div>
      </div>

      {/* Legend */}
      <div className="mx-auto mt-6 flex max-w-6xl flex-wrap justify-center gap-x-6 gap-y-2 px-6">
        {[
          { label: "Agency", color: catColors.agency },
          { label: "FinTech", color: catColors.fintech },
          { label: "E-Commerce", color: catColors.ecommerce },
          { label: "Retail AI", color: catColors.retail },
          { label: "Healthcare", color: catColors.healthcare },
        ].map(leg => (
          <div key={leg.label} className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full" style={{ background: leg.color, opacity: 0.7 }} />
            <span className="text-xs text-white/30">{leg.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── HIRE ME BUTTON ──────────────────────────────────────────────────────── */

function HireMeButton() {
  const [copied, setCopied] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText("hello.kaykay@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <button
      onClick={handleClick}
      className="relative rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition-all hover:bg-gray-700 active:scale-95"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.span
            key="copied"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="flex items-center gap-1.5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Email copied!
          </motion.span>
        ) : (
          <motion.span
            key="cta"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="flex items-center gap-1.5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Let&apos;s talk
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
