"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const meta = {
  title: "Profit.co Revamp",
  subtitle:
    "Redesigning an AI-powered OKR platform in a 2-day sprint using prompt engineering, competitor analysis, and structured design thinking.",
  role: "UX/UI Designer",
  discipline: "UI/UX",
  duration: "2 days",
  team: "Solo (Vibe coding)",
  tools: "Figma, UX Pilots, Magic Patterns",
  complexity: "Level 6",
  accent: "#7c3aed",
  demoUrl: "https://www.magicpatterns.com/c/r8pmcs27y4vr5kjfdu4iew",
  notionUrl:
    "https://cuboid-judge-f7d.notion.site/Profit-co-Revamp-with-AI-PromptEng-29b165a357da80ca9065c675bed84257",
};

/* ------------------------------------------------------------------ */
/*  Shared Components                                                  */
/* ------------------------------------------------------------------ */

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.97]);
  return (
    <figure ref={ref} className="relative mb-4 overflow-hidden">
      <motion.div style={{ y, scale }}>
        <Image
          src={src}
          alt={alt}
          width={1800}
          height={1100}
          className="h-auto w-full"
          sizes="100vw"
          quality={90}
        />
      </motion.div>
    </figure>
  );
}

function AnnotatedImage({
  src,
  alt,
  title,
  annotations,
}: {
  src: string;
  alt: string;
  title: string;
  annotations: { label: string; desc: string }[];
}) {
  return (
    <section className="bg-[#f7f7f7] py-10">
      <div className="mx-auto max-w-6xl px-8">
        <FadeIn>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200" />
            <h3 className="shrink-0 text-sm font-bold uppercase tracking-widest text-gray-400">
              {title}
            </h3>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-4 py-2.5">
              <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
              <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
              <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
              <span className="ml-3 text-[11px] text-gray-400">{alt}</span>
            </div>
            <Image
              src={src}
              alt={alt}
              width={2448}
              height={1438}
              className="h-auto w-full"
              sizes="(max-width: 1152px) 100vw, 1152px"
            />
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {annotations.map((a, i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-200 bg-white p-4"
              >
                <div className="mb-1 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    {a.label}
                  </span>
                </div>
                <p className="text-[13px] leading-relaxed text-gray-500">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Conclusion({
  headline,
  cards,
}: {
  headline: string;
  cards: { value: string; label: string }[];
}) {
  return (
    <section className="bg-[#09090b] py-16">
      <div className="mx-auto max-w-5xl px-8">
        <FadeIn>
          <h3 className="mb-10 text-center text-2xl font-bold leading-snug text-white sm:text-3xl">
            {headline}
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {cards.map((c, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-6 text-center"
              >
                <p className="text-2xl font-bold text-purple-400">{c.value}</p>
                <p className="mt-2 text-sm text-white/50">{c.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function StepBadge({ num, label }: { num: string; label: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">
        {num}
      </span>
      <span className="text-sm font-bold uppercase tracking-widest text-purple-600">
        {label}
      </span>
    </div>
  );
}

function CompetitorCard({
  name,
  approach,
  problem,
  lesson,
}: {
  name: string;
  approach: string;
  problem: string;
  lesson: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <h4 className="mb-2 text-base font-bold text-gray-900">{name}</h4>
      <div className="space-y-2 text-sm">
        <p>
          <span className="font-semibold text-purple-600">Approach:</span>{" "}
          <span className="text-gray-600">{approach}</span>
        </p>
        <p>
          <span className="font-semibold text-red-500">Problem:</span>{" "}
          <span className="text-gray-600">{problem}</span>
        </p>
        <p>
          <span className="font-semibold text-green-600">Lesson:</span>{" "}
          <span className="text-gray-600">{lesson}</span>
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function ProfitCoCaseStudy() {
  return (
    <div className="bg-white">
      {/* ━━━ NAV ━━━ */}
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-black/5 bg-white/70 px-5 py-3 backdrop-blur-xl">
        <Link
          href="/portfolio"
          className="text-sm font-medium text-gray-400 hover:text-gray-900"
        >
          &larr; Back
        </Link>
        <div className="flex gap-3">
          <a
            href={meta.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-purple-600 px-4 py-1.5 text-sm font-semibold text-white hover:bg-purple-700"
          >
            Live Demo
          </a>
          <a
            href={meta.notionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gray-300 px-4 py-1.5 text-sm font-medium text-gray-600 hover:border-gray-500 hover:text-gray-900"
          >
            Notion
          </a>
        </div>
      </nav>

      {/* ━━━ HERO ━━━ */}
      <section
        className="relative flex min-h-[70vh] items-end overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1e0533 0%, #7c3aed 50%, #a78bfa 100%)",
        }}
      >
        <div className="relative z-10 mx-auto w-full max-w-6xl px-8 pb-16 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-white/50">
              AI-Augmented Design Sprint &middot; 2 Days
            </p>
            <h1 className="mb-4 text-6xl font-bold tracking-tight text-white sm:text-8xl">
              Profit.co
            </h1>
            <p className="mb-6 max-w-xl text-2xl font-light text-white/80">
              {meta.subtitle}
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/50">
              <span>
                <strong className="text-white/80">Role:</strong> {meta.role}
              </span>
              <span>
                <strong className="text-white/80">Team:</strong> {meta.team}
              </span>
              <span>
                <strong className="text-white/80">Tools:</strong> {meta.tools}
              </span>
              <span>
                <strong className="text-white/80">Duration:</strong>{" "}
                {meta.duration}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ━━━ HERO IMAGE — parallax ━━━ */}
      <ParallaxImage
        src="/portfolio/profitco-hero.png"
        alt="Profit.co redesigned dashboard — AI suggestions, strategy health, alignment map"
      />

      {/* ━━━ CONTEXT STATS ━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900">
              The Challenge
            </h2>
            <p className="mb-10 max-w-3xl text-xl leading-relaxed text-gray-500">
              The primary cause of poor day-1 retention in OKR software is the
              &ldquo;fear of white canvas&rdquo; &mdash; users face empty
              dashboards without clear direction on how to achieve immediate
              value. This audit identifies specific UX problems and provides
              evidence-based solutions.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 sm:grid-cols-4">
              {[
                {
                  value: "75%",
                  label: "Users abandon week 1",
                  sub: "If onboarding is confusing (Userpilot)",
                },
                {
                  value: "50%",
                  label: "Trialists never activate",
                  sub: "End of trial without core setup",
                },
                {
                  value: "22.6%",
                  label: "Average day-1 retention",
                  sub: "SaaS mobile benchmark (Eleken)",
                },
                {
                  value: "2 days",
                  label: "Sprint duration",
                  sub: "Research to interactive prototype",
                },
              ].map((m) => (
                <div key={m.label} className="bg-white p-6">
                  <p className="text-3xl font-bold text-gray-900">{m.value}</p>
                  <p className="mt-1 text-sm font-semibold text-gray-700">
                    {m.label}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-400">{m.sub}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━ PROCESS TIMELINE ━━━ */}
      <section className="border-y border-gray-200 bg-[#fafafa] py-16">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <h2 className="mb-10 text-center text-sm font-bold uppercase tracking-widest text-gray-400">
              2-Day Sprint Process
            </h2>
            <div className="grid gap-6 sm:grid-cols-4">
              {[
                {
                  icon: "🔍",
                  label: "AI-Powered Discovery",
                  desc: "Competitor analysis & research synthesis",
                },
                {
                  icon: "🧠",
                  label: "Prompt Engineering",
                  desc: "SDD to BDD to TDD structured prompts",
                },
                {
                  icon: "🎨",
                  label: "Rapid Prototyping",
                  desc: "AI-assisted code generation & iteration",
                },
                {
                  icon: "📄",
                  label: "Documentation",
                  desc: "Comprehensive design-to-tech handoff",
                },
              ].map((step, i) => (
                <div key={i} className="relative text-center">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
                    {step.icon}
                  </div>
                  <p className="text-sm font-bold text-gray-900">
                    {step.label}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">{step.desc}</p>
                  {i < 3 && (
                    <div className="absolute right-0 top-7 hidden h-px w-6 translate-x-full bg-gray-300 sm:block" />
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━ PROBLEM SECTION — dark bg ━━━ */}
      <section className="bg-[#09090b] py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-8 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/portfolio/profitco-hero.png"
                alt="Current Profit.co dashboard showing complexity"
                width={1200}
                height={700}
                className="h-auto w-full"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mb-6 text-3xl font-bold text-white">
              The Core Problem
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-white/60">
              Day-1 retention is the single largest drop-off in the user
              activation journey. Users open Profit.co, see an empty canvas, and
              leave &mdash; not because the product lacks features, but because
              the onboarding experience overwhelms rather than guides.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Empty State Problem",
                "No Personalization",
                "High Cognitive Load",
                "No Clear Success Path",
              ].map((pill) => (
                <span
                  key={pill}
                  className="rounded-full bg-red-500/15 px-4 py-1.5 text-sm font-medium text-red-400"
                >
                  {pill}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━ 01 — RESEARCH FINDINGS ━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <StepBadge num="01" label="Key Research Findings" />
            <p className="mb-8 max-w-2xl text-lg text-gray-500">
              AI-accelerated research surfaced critical industry benchmarks and
              four compounding factors that destroy first-session retention.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Empty State Problem",
                  desc: "Blank slates are intimidating, not inspiring. Users need pre-populated templates and guided starting points.",
                  metric: "75%",
                  metricLabel: "abandon in week 1",
                },
                {
                  title: "Lack of Personalization",
                  desc: "Generic onboarding fails users in different roles. ICs and Managers need fundamentally different first experiences.",
                  metric: "50%",
                  metricLabel: "never activate core features",
                },
                {
                  title: "High Cognitive Load",
                  desc: "Presenting too many options and configurations upfront paralyzes the user. Progressive disclosure is essential.",
                  metric: "22.6%",
                  metricLabel: "avg day-1 retention (mobile)",
                },
                {
                  title: "No Clear Success Path",
                  desc: "Users lack clarity on what constitutes a successful first session. Define and deliver a 'first win' within minutes.",
                  metric: "25.6%",
                  metricLabel: "avg day-1 retention (iOS)",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-gray-200 bg-white p-6"
                >
                  <div className="mb-3 flex items-baseline justify-between">
                    <h4 className="text-base font-bold text-gray-900">
                      {card.title}
                    </h4>
                    <span className="rounded-full bg-red-50 px-3 py-0.5 text-sm font-bold text-red-500">
                      {card.metric}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {card.desc}
                  </p>
                  <p className="mt-2 text-xs text-gray-400">
                    {card.metricLabel}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <Conclusion
        headline="Day-1 retention is where OKR products win or lose. The 'fear of white canvas' is the enemy."
        cards={[
          {
            value: "4 Factors",
            label:
              "Empty states, no personalization, cognitive overload, no success path",
          },
          {
            value: "Industry Data",
            label:
              "Sourced from Userpilot, ProductBoard, Eleken, and Autopilot studies",
          },
          {
            value: "AI Research",
            label:
              "Compressed weeks of manual research into hours of structured analysis",
          },
        ]}
      />

      {/* ━━━ 02 — COMPETITOR ANALYSIS ━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <StepBadge num="02" label="Competitor Analysis" />
            <p className="mb-8 max-w-2xl text-lg text-gray-500">
              Deep competitive analysis covering 21 aspects of time-to-value
              patterns across the OKR and goal-management market.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              <CompetitorCard
                name="Lattice"
                approach="15-step narrative tour"
                problem="Delays value until steps 4-6"
                lesson="Storytelling engages users, but shouldn't be the primary mechanism for demonstrating immediate value"
              />
              <CompetitorCard
                name="Weekdone"
                approach="6-dimension configuration setup"
                problem="High front-door friction before value"
                lesson="Structural organization matters, but deferring comprehensive setup allows faster initial wins"
              />
              <CompetitorCard
                name="Quantive / WorkBoard"
                approach="Sales-led, demo-gated"
                problem="No self-service first win"
                lesson="Executive dashboards deliver significant value; accelerating their delivery improves adoption"
              />
              <CompetitorCard
                name="ClickUp Goals"
                approach="Task-centric within project management"
                problem="Goals secondary to tasks"
                lesson="Integrating new features within established user workflows facilitates faster adoption"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <Conclusion
        headline="Lengthy onboarding kills activation. Value must be delivered in the first interaction, not the fifth."
        cards={[
          {
            value: "21 Aspects",
            label:
              "Analyzed across the OKR/goal-management competitive landscape",
          },
          {
            value: "4 Competitors",
            label:
              "Lattice, Weekdone, Quantive/WorkBoard, ClickUp Goals deep-dived",
          },
          {
            value: "Key Insight",
            label:
              "Self-service first wins outperform gated demos every time",
          },
        ]}
      />

      {/* ━━━ 03 — REDESIGNED DASHBOARD (annotated artifact) ━━━ */}
      <AnnotatedImage
        src="/portfolio/profitco-1.png"
        alt="Profit.co redesigned dashboard — full view"
        title="Redesigned Dashboard"
        annotations={[
          {
            label: "AI Suggestion Banner",
            desc: "Strategic opportunity cards powered by AI that surface actionable insights on first login, eliminating the empty canvas problem.",
          },
          {
            label: "Strategy Health Score",
            desc: "67% health indicator with at-a-glance metrics so users immediately understand where they stand without navigating deeper.",
          },
          {
            label: "Revenue & Risk Widgets",
            desc: "Pipeline value ($4.2M) and risk indicators surface business-critical data that executives need on day one.",
          },
          {
            label: "Strategic Alignment Map",
            desc: "Visual tree/graph showing how company objectives cascade to team-level key results, making the OKR structure tangible.",
          },
        ]}
      />

      {/* ━━━ 04 — PROMPT ENGINEERING METHODOLOGY ━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <StepBadge num="03" label="Prompt Engineering: SDD to TDD" />
            <p className="mb-8 max-w-2xl text-lg text-gray-500">
              A structured 3-layer prompting methodology that prevents
              misalignment between strategic goals and technical execution.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  layer: "SDD",
                  title: "Strategy-Driven Design",
                  desc: "Establishes business context, defines success metrics, maps stakeholder needs. Prevents building the wrong thing.",
                  color: "bg-purple-600",
                },
                {
                  layer: "BDD",
                  title: "Behavior-Driven Design",
                  desc: "Creates testable user scenarios and acceptance criteria. Ensures every feature maps to real user behavior.",
                  color: "bg-purple-500",
                },
                {
                  layer: "TDD",
                  title: "Technical-Driven Design",
                  desc: "Enables precise implementation with specific code changes. Connects decisions to engineering execution.",
                  color: "bg-purple-400",
                },
              ].map((layer) => (
                <div
                  key={layer.layer}
                  className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6"
                >
                  <div
                    className={`mb-4 inline-flex items-center rounded-lg ${layer.color} px-3 py-1 text-xs font-bold text-white`}
                  >
                    {layer.layer}
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-gray-900">
                    {layer.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {layer.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━ Chat-bubble debate section ━━━ */}
      <section className="bg-[#fafafa] py-16">
        <div className="mx-auto max-w-3xl px-8">
          <FadeIn>
            <h3 className="mb-8 text-center text-sm font-bold uppercase tracking-widest text-gray-400">
              Internal Design Debate
            </h3>
            <div className="space-y-4">
              {/* Left bubble — challenge */}
              <div className="flex justify-start">
                <div className="max-w-[75%] rounded-2xl rounded-bl-md bg-gray-200 px-5 py-3">
                  <p className="text-sm font-semibold text-gray-500">
                    Inner Critic
                  </p>
                  <p className="mt-1 text-sm text-gray-700">
                    &ldquo;Can you really redesign an entire OKR platform in 2
                    days? That sounds like surface-level work.&rdquo;
                  </p>
                </div>
              </div>
              {/* Right bubble — Kay */}
              <div className="flex justify-end">
                <div className="max-w-[75%] rounded-2xl rounded-br-md bg-purple-600 px-5 py-3">
                  <p className="text-sm font-semibold text-white/70">Kay</p>
                  <p className="mt-1 text-sm text-white">
                    &ldquo;The point isn&apos;t shipping production code in 2
                    days. It&apos;s proving that structured AI prompting can
                    compress discovery and generate defensible design decisions
                    at speed.&rdquo;
                  </p>
                </div>
              </div>
              {/* Left */}
              <div className="flex justify-start">
                <div className="max-w-[75%] rounded-2xl rounded-bl-md bg-gray-200 px-5 py-3">
                  <p className="text-sm font-semibold text-gray-500">
                    Inner Critic
                  </p>
                  <p className="mt-1 text-sm text-gray-700">
                    &ldquo;But without user testing, how do you validate any of
                    this?&rdquo;
                  </p>
                </div>
              </div>
              {/* Right */}
              <div className="flex justify-end">
                <div className="max-w-[75%] rounded-2xl rounded-br-md bg-purple-600 px-5 py-3">
                  <p className="text-sm font-semibold text-white/70">Kay</p>
                  <p className="mt-1 text-sm text-white">
                    &ldquo;Every decision is grounded in competitor data and
                    industry benchmarks. The SDD-BDD-TDD chain creates
                    traceability. Next step would be usability testing, but the
                    foundation is evidence-based.&rdquo;
                  </p>
                </div>
              </div>
              {/* Resolution pill */}
              <div className="flex justify-center pt-2">
                <span className="rounded-full bg-gray-900 px-5 py-1.5 text-sm font-semibold text-white">
                  Shipped as interactive prototype.
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Conclusion
        headline="Think in layers: strategy to behavior to execution. This prevents misalignment and produces coordinated, specific changes."
        cards={[
          {
            value: "3 Layers",
            label:
              "SDD (Strategy) to BDD (Behavior) to TDD (Technical) chain",
          },
          {
            value: "40 Insights",
            label:
              "Documented learnings from platform analysis, all traceable to decisions",
          },
          {
            value: "No Silos",
            label:
              "Connected decision-making replaces vague, siloed implementation",
          },
        ]}
      />

      {/* ━━━ 05 — DESIGN DECISIONS ━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <StepBadge num="04" label="Key Design Decisions" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  decision: "AI Suggestion Banner on Dashboard",
                  reasoning:
                    "Eliminates 'fear of white canvas' by giving users an immediate next action based on their company data.",
                  result: "First-session engagement increased conceptually",
                },
                {
                  decision: "Strategy Health Score Widget",
                  reasoning:
                    "Executives need a single number to understand OKR health. Reduces 3+ clicks to instant visibility.",
                  result: "Flattened IA for executive persona",
                },
                {
                  decision: "Progressive Disclosure Onboarding",
                  reasoning:
                    "Competitors force 6-15 steps upfront. We defer config and deliver value in the first interaction.",
                  result: "Reduced cognitive load by removing upfront decisions",
                },
                {
                  decision: "Strategic Alignment Map",
                  reasoning:
                    "OKR cascade is abstract. A visual tree makes hierarchy tangible and reduces the learning curve.",
                  result: "Made OKR structure approachable for new users",
                },
                {
                  decision: "Role-Based Personalization",
                  reasoning:
                    "ICs vs Managers have different mental models. Generic onboarding fails both groups equally.",
                  result: "Two distinct first-run experiences",
                },
                {
                  decision: "Risk Indicator Dashboard",
                  reasoning:
                    "Missing owners, no cadences, unbound data — surfacing risks prevents silent failures.",
                  result: "Proactive health monitoring vs reactive debugging",
                },
              ].map((d, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-200 bg-white p-5"
                >
                  <h4 className="mb-2 text-sm font-bold text-gray-900">
                    {d.decision}
                  </h4>
                  <p className="mb-3 text-[13px] leading-relaxed text-gray-500">
                    {d.reasoning}
                  </p>
                  <div className="rounded-lg bg-purple-50 px-3 py-2 text-xs font-medium text-purple-700">
                    {d.result}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━ DEMO SECTION — dark ━━━ */}
      <section className="bg-[#09090b] py-20">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <FadeIn>
            <h2 className="mb-4 text-3xl font-bold text-white">
              Interactive Prototype
            </h2>
            <p className="mb-8 text-lg text-white/50">
              Built with Magic Patterns using AI-assisted vibe coding. Explore
              the redesigned dashboard, onboarding flow, and alignment
              visualizations.
            </p>
            <a
              href={meta.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-purple-600 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-purple-700 active:scale-95"
            >
              Launch Interactive Demo &rarr;
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ━━━ IMPACT ━━━ */}
      <section className="bg-[#09090b] py-16">
        <div className="mx-auto max-w-5xl px-8">
          <FadeIn>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  value: "2 Days",
                  label: "From blank canvas to interactive prototype",
                },
                {
                  value: "40+",
                  label: "Documented insights from platform analysis",
                },
                {
                  value: "21",
                  label: "Competitor TTV aspects analyzed",
                },
              ].map((m, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center"
                >
                  <p className="text-4xl font-bold text-purple-400">
                    {m.value}
                  </p>
                  <p className="mt-3 text-sm text-white/50">{m.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━ WHAT I'D DO DIFFERENTLY ━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-8">
          <FadeIn>
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              What I&apos;d Do Differently
            </h2>
            <div className="space-y-6 border-l-2 border-purple-200 pl-6">
              <div>
                <h4 className="text-base font-bold text-gray-900">
                  Validate with real users earlier
                </h4>
                <p className="mt-1 text-sm text-gray-500">
                  The research is grounded in industry data and competitor
                  analysis, but nothing replaces 5 real users testing the
                  prototype. In a longer sprint, I would run usability tests
                  after day 1.
                </p>
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900">
                  Deeper persona segmentation
                </h4>
                <p className="mt-1 text-sm text-gray-500">
                  IC vs Manager is a start, but OKR champions (admins who
                  configure the tool) are a distinct persona with unique needs
                  around batch operations and rollout planning.
                </p>
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900">
                  Measure AI prompt efficiency
                </h4>
                <p className="mt-1 text-sm text-gray-500">
                  I used structured prompts (SDD/BDD/TDD) but didn&apos;t
                  systematically track which prompts saved the most time vs
                  manual research. Building that feedback loop would make the
                  methodology reproducible.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━ CLOSING QUOTE ━━━ */}
      <section className="bg-gray-100 py-20">
        <div className="mx-auto max-w-3xl px-8 text-center">
          <FadeIn>
            <blockquote className="text-2xl font-light leading-relaxed text-gray-700">
              &ldquo;AI doesn&apos;t replace design thinking &mdash; it
              compresses the time between insight and artifact. The SDD-BDD-TDD
              chain gave me strategic clarity, coordinated changes, and specific
              code &mdash; all in 48 hours.&rdquo;
            </blockquote>
            <p className="mt-6 text-sm font-semibold text-purple-600">
              Kay &mdash; UX/UI Designer
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ━━━ FOOTER NAV ━━━ */}
      <footer className="border-t border-gray-200 py-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8">
          <Link
            href="/portfolio"
            className="text-sm font-medium text-gray-400 hover:text-gray-900"
          >
            &larr; All Projects
          </Link>
          <Link
            href="/portfolio/nequi"
            className="text-sm font-medium text-gray-400 hover:text-gray-900"
          >
            Next: Nequi &rarr;
          </Link>
        </div>
      </footer>
    </div>
  );
}
