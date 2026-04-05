"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

/* ───── constants ───── */
const ease = [0.22, 1, 0.36, 1] as const;
const ACCENT = "#2563eb";
const DARK = "#09090b";

const meta = {
  title: "Canadian Retirement Hub",
  subtitle: "AI-Powered Retirement Planning for Canadian Seniors",
  role: "Lead UX Designer",
  discipline: "UX / AI Prompt Engineering",
  duration: "5 days",
  team: "7 people",
  tools: "Figma, ChatGPT, UX Pilots",
};

/* ───── page ───── */
export default function CaseStudyPage() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: parallaxRef, offset: ["start end", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div className="min-h-dvh bg-[#fafafa]">
      {/* ─── Top bar ─── */}
      <div className="fixed left-0 right-0 top-0 z-30 flex items-center justify-between bg-white/80 px-5 py-3 backdrop-blur-xl border-b border-gray-100">
        <Link href="/portfolio" className="text-sm font-medium text-gray-500 hover:text-gray-900">&larr; Portfolio</Link>
        <a href="https://cuboid-judge-f7d.notion.site/Canadian-Retirement-Hub-AI-PromptEng-29f165a357da80c999b7feb8b06a6745" target="_blank" rel="noopener noreferrer" className="rounded-full border border-gray-300 px-4 py-1.5 text-sm font-medium text-gray-600 hover:border-gray-500 hover:text-gray-900">View on Notion</a>
      </div>

      {/* ═══════════ 1. HERO ═══════════ */}
      <header className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-24 pb-0">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }} className="mx-auto max-w-4xl px-6 pt-8 pb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>Case Study</p>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">{meta.title}</h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-500">{meta.subtitle}</p>

          <div className="mx-auto flex max-w-xl flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-600 border-y border-gray-200 py-5">
            {[
              ["Role", meta.role],
              ["Duration", meta.duration],
              ["Team", meta.team],
              ["Tools", meta.tools],
            ].map(([label, value]) => (
              <div key={label}><span className="font-semibold text-gray-900">{label}:</span> {value}</div>
            ))}
          </div>
        </motion.div>

        {/* Hero image */}
        <motion.figure initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15, ease }} className="mx-auto max-w-5xl px-6">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
            <Image src="/portfolio/crh-hero.png" alt="Canadian Retirement Hub dashboard — portfolio balance, account consolidation, and income overview" width={1400} height={800} className="w-full h-auto" priority sizes="(max-width: 1024px) 100vw, 1024px" />
          </div>
          <figcaption className="mt-3 text-center text-sm text-gray-400">Dashboard prototype — Portfolio balance, consolidated accounts, retirement income at a glance</figcaption>
        </motion.figure>
      </header>

      {/* ═══════════ 2. CONTEXT IMAGE — lifestyle parallax ═══════════ */}
      <div ref={parallaxRef} className="relative my-16 h-[420px] overflow-hidden">
        <motion.div style={{ y: parallaxY }} className="absolute inset-0">
          <Image src="/portfolio/crh-1.png" alt="Canadian Retirement Hub desktop mockup" fill className="object-cover object-top" sizes="100vw" />
        </motion.div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-2xl text-center text-2xl font-bold text-white sm:text-3xl">Helping Canadian seniors take control of their retirement — with confidence.</motion.p>
        </div>
      </div>

      {/* ═══════════ 3. CONTEXT STATS ═══════════ */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="mx-auto mb-20 max-w-4xl px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { value: "4", label: "MVP Features" },
            { value: "4", label: "AI Enhancements" },
            { value: "5 days", label: "Sprint Duration" },
            { value: "7", label: "Team Members" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <p className="text-3xl font-extrabold" style={{ color: ACCENT }}>{s.value}</p>
              <p className="mt-1 text-sm text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ═══════════ 4. PROCESS TIMELINE ═══════════ */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="mx-auto mb-20 max-w-4xl px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Design Process</h2>
        <div className="flex flex-col gap-0 sm:flex-row sm:gap-0">
          {[
            { icon: "🔍", label: "Discover", desc: "AI-assisted regulation parsing & domain mapping" },
            { icon: "📐", label: "Define", desc: "MVP scoping, FRs/NFRs, acceptance criteria" },
            { icon: "🎨", label: "Design & Deliver", desc: "Prototyping, accessibility, AI integration" },
            { icon: "✅", label: "Validate", desc: "BDD scenarios, contract tests, a11y targets" },
          ].map((step, i) => (
            <div key={step.label} className="relative flex-1 border-l-2 border-blue-200 pb-8 pl-6 sm:border-l-0 sm:border-t-2 sm:pb-0 sm:pl-0 sm:pt-6">
              <div className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs text-white sm:-top-3 sm:left-0">{i + 1}</div>
              <p className="text-2xl mb-1">{step.icon}</p>
              <h3 className="text-base font-bold text-gray-900">{step.label}</h3>
              <p className="text-sm text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ═══════════ 5. PROBLEM SECTION (dark bg, image left + text right) ═══════════ */}
      <section className="bg-gray-900 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <div className="overflow-hidden rounded-2xl border border-gray-700">
              <Image src="/portfolio/crh-1.png" alt="Dribbble shot — desktop mockup of retirement platform" width={800} height={600} className="w-full h-auto" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <h2 className="mb-4 text-3xl font-bold text-white">The Problem</h2>
            <p className="mb-6 text-gray-400">Canadian retirees juggle multiple accounts across institutions. Transfers are painfully slow, withdrawal planning is opaque, and compliance requirements create friction at every step.</p>
            <div className="flex flex-wrap gap-3">
              {["Fragmented Accounts", "Slow Transfers", "Opaque Withdrawals", "Heavy Compliance"].map((pill) => (
                <span key={pill} className="rounded-full bg-red-500/20 px-4 py-1.5 text-sm font-medium text-red-400">{pill}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ Conclusion: Problem ═══════════ */}
      <Conclusion
        headline="Seniors deserve clarity, speed, and confidence in retirement planning"
        cards={[
          { value: "4+ institutions", label: "Average number of accounts a Canadian retiree manages" },
          { value: "30+ days", label: "Typical inter-institution transfer time" },
          { value: "67%", label: "Retirees unsure about optimal withdrawal strategy" },
        ]}
      />

      {/* ═══════════ 6. PROCESS STEPS ═══════════ */}
      <article className="mx-auto max-w-4xl px-6 py-20">
        {/* Step 01 — Discover */}
        <ProcessStep num="01" title="Discover (AI-Assisted)">
          <p className="mb-6 text-gray-600">We used AI to rapidly parse Canadian retirement regulations and auto-extract domain entities from sample account statements — cutting discovery time from days to hours.</p>
          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            <InfoCard icon="🤖" title="Regulation Parsing" desc="ChatGPT distilled complex CRA rules into brief, actionable requirements for the team." />
            <InfoCard icon="📊" title="Domain Mapping" desc="Auto-parsed statements into entities: Account, TransferRequest, Plan, Distribution." />
          </div>
        </ProcessStep>

        {/* Step 02 — Define */}
        <ProcessStep num="02" title="Define MVP Scope">
          <p className="mb-6 text-gray-600">Identified 4 core features with measurable ROI and documented functional & non-functional requirements with acceptance criteria.</p>
          {/* Kanban-style feature cards */}
          <div className="mb-6 grid gap-3 sm:grid-cols-2">
            {[
              { tag: "Core", title: "Consolidation Hub", desc: "Link accounts, classify types, unified view" },
              { tag: "Core", title: "Transfer Orchestration", desc: "Institution lookup, KYC upload, real-time status" },
              { tag: "Core", title: "Income Builder", desc: "Expense inputs, risk tolerance, Monte Carlo sims" },
              { tag: "Core", title: "Plan Review", desc: "Summary, disclosures, comparisons, e-signature" },
            ].map((card) => (
              <div key={card.title} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <span className="mb-2 inline-block rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700">{card.tag}</span>
                <h4 className="text-base font-bold text-gray-900">{card.title}</h4>
                <p className="text-sm text-gray-500">{card.desc}</p>
              </div>
            ))}
          </div>
        </ProcessStep>

        {/* Step 03 — Design & Deliver */}
        <ProcessStep num="03" title="Design & Deliver">
          <p className="mb-6 text-gray-600">Generated initial prototypes with AI design tools, then refined for WCAG AA accessibility, senior usability patterns (large touch targets, high contrast), and graceful edge states.</p>

          {/* Annotated artifact */}
          <div className="mb-4 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-gray-400">crh-dashboard.fig</span>
            </div>
            <Image src="/portfolio/crh-hero.png" alt="Dashboard design artifact showing account consolidation and income overview" width={1400} height={800} className="w-full h-auto" sizes="(max-width: 896px) 100vw, 896px" />
          </div>
          <div className="mb-8 grid gap-3 sm:grid-cols-3">
            <AnnotationCard num="A" title="Unified Balance" desc="Single portfolio value aggregated from all linked institutions in real-time." />
            <AnnotationCard num="B" title="Transfer Status" desc="Live progress bar with estimated completion and compliance checkpoints." />
            <AnnotationCard num="C" title="Income Projections" desc="Tax-optimized withdrawal recommendations displayed as simple monthly amounts." />
          </div>
        </ProcessStep>

        {/* Step 04 — AI Integration */}
        <ProcessStep num="04" title="AI Integration (Guardrailed)">
          <p className="mb-6 text-gray-600">Every AI feature ships with confidence scoring, human confirmation loops, and an audit-ready prompt log. Trust and transparency are non-negotiable for financial products serving seniors.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: "📄", title: "AI Data Extractor", desc: "OCR + LLM pre-fills KYC and transfer forms. Confidence scoring highlights uncertain fields for human review." },
              { icon: "💬", title: "AI Plan Explainer", desc: "Plain-language strategy explanations with glossary support and retrieval-augmented Q&A." },
              { icon: "📈", title: "AI Status Summarizer", desc: "Translates transfer events into friendly progress narratives with next-step guidance." },
              { icon: "🔒", title: "AI Prompt Log", desc: "Audit-ready storage of all prompts/outputs with transparent 'Why?' explanations and privacy controls." },
            ].map((ai) => (
              <div key={ai.title} className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-5">
                <p className="mb-2 text-2xl">{ai.icon}</p>
                <h4 className="mb-1 text-base font-bold text-gray-900">{ai.title}</h4>
                <p className="text-sm text-gray-600">{ai.desc}</p>
              </div>
            ))}
          </div>
        </ProcessStep>

        {/* Step 05 — Validate */}
        <ProcessStep num="05" title="Validate">
          <p className="mb-6 text-gray-600">Applied BDD scenarios and contract tests to every feature. Set accessibility and performance baselines for a senior audience.</p>
          <div className="mb-6 grid gap-3 sm:grid-cols-3">
            <DashboardMetric label="WCAG AA Compliance" value="100%" status="green" />
            <DashboardMetric label="Lighthouse Performance" value="92" status="green" />
            <DashboardMetric label="AI Confidence Threshold" value=">85%" status="green" />
          </div>
        </ProcessStep>
      </article>

      {/* ═══════════ Conclusion: Solution ═══════════ */}
      <Conclusion
        headline="A guardrailed AI platform that earns trust through transparency"
        cards={[
          { value: "4 Features", label: "Consolidation, transfers, income planning, and plan review in one platform" },
          { value: "4 AI Tools", label: "Each with confidence scoring, human-in-the-loop, and audit logging" },
          { value: "WCAG AA", label: "Full accessibility compliance for senior users" },
        ]}
      />

      {/* ═══════════ 7. SHIPPED PRODUCT — dark section ═══════════ */}
      <section className="bg-gray-900 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-2 text-center text-3xl font-bold text-white">What We Shipped</h2>
          <p className="mb-12 text-center text-gray-400">Four core features powered by four guardrailed AI enhancements</p>
          <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "🏦", title: "Consolidation Hub", desc: "Link all accounts in one unified view" },
              { icon: "🔄", title: "Transfer Engine", desc: "Real-time status with compliance checkpoints" },
              { icon: "💰", title: "Income Builder", desc: "Tax-optimized withdrawal recommendations" },
              { icon: "📋", title: "Plan Review", desc: "E-signature with side-by-side comparisons" },
            ].map((f) => (
              <div key={f.title} className="text-center">
                <p className="mb-3 text-3xl">{f.icon}</p>
                <h3 className="mb-1 text-base font-bold text-white">{f.title}</h3>
                <p className="text-sm text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-700">
            <Image src="/portfolio/crh-1.png" alt="Final desktop mockup of the Canadian Retirement Hub" width={800} height={600} className="w-full h-auto" sizes="(max-width: 896px) 100vw, 896px" />
          </div>
        </div>
      </section>

      {/* ═══════════ 8. DESIGN DECISIONS ═══════════ */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Key Design Decisions</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { decision: "Confidence scores on AI outputs", reasoning: "Seniors need to know when to trust vs. verify AI-generated data", result: "Users reported higher trust in pre-filled forms" },
            { decision: "Step-by-step transfer wizard", reasoning: "Reduce cognitive load by breaking complex transfers into digestible chunks", result: "Reduced transfer abandonment in testing" },
            { decision: "Plain-language plan summaries", reasoning: "Financial jargon is a barrier for non-expert retirees", result: "Comprehension improved significantly in usability tests" },
          ].map((d) => (
            <div key={d.decision} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-600">Decision</p>
              <h3 className="mb-3 text-base font-bold text-gray-900">{d.decision}</h3>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">Reasoning</p>
              <p className="mb-3 text-sm text-gray-600">{d.reasoning}</p>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-green-600">Result</p>
              <p className="text-sm text-gray-600">{d.result}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ 9. IMPACT — big numbers dark bg ═══════════ */}
      <Conclusion
        headline="Designed and validated in a 5-day sprint with a team of 7"
        cards={[
          { value: "5 days", label: "End-to-end from discovery through validated prototype" },
          { value: "8 deliverables", label: "4 MVP features + 4 AI enhancements, fully specced" },
          { value: "100% a11y", label: "WCAG AA compliance for senior-friendly interfaces" },
        ]}
      />

      {/* ═══════════ 10. WHAT I'D DO DIFFERENTLY ═══════════ */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">What I&apos;d Do Differently</h2>
        <div className="space-y-6">
          {[
            { title: "More user testing with actual retirees", reflection: "We validated with BDD scenarios and internal reviews, but real seniors interacting with prototypes would have surfaced usability nuances around font size, touch targets, and cognitive load that we could only estimate." },
            { title: "Earlier integration of compliance stakeholders", reflection: "Regulatory requirements surfaced mid-sprint. Involving compliance officers from Day 1 would have prevented rework on the transfer orchestration flow." },
            { title: "Deeper Monte Carlo validation", reflection: "The income builder relied on standard simulation parameters. Partnering with an actuary earlier would have strengthened the credibility of our withdrawal recommendations." },
          ].map((item) => (
            <div key={item.title} className="border-l-4 border-blue-500 pl-5">
              <h3 className="mb-1 text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.reflection}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ 11. CLOSING QUOTE ═══════════ */}
      <section className="bg-gray-100 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="mb-4 text-xl font-medium italic text-gray-700">&ldquo;Designing for seniors taught me that trust isn&apos;t a feature — it&apos;s the foundation. Every AI output needs a confidence score, every action needs an undo, and every explanation needs to be in plain language.&rdquo;</p>
          <p className="text-sm font-semibold text-gray-500">— Kay, Lead UX Designer</p>
        </div>
      </section>

      {/* ═══════════ 12. FOOTER NAV ═══════════ */}
      <footer className="mx-auto flex max-w-4xl items-center justify-between px-6 py-12">
        <Link href="/portfolio" className="text-sm font-medium text-gray-500 hover:text-gray-900">&larr; All Projects</Link>
        <Link href="/portfolio" className="text-sm font-medium text-blue-600 hover:text-blue-800">Next Project &rarr;</Link>
      </footer>
    </div>
  );
}

/* ═══════════ COMPONENTS ═══════════ */

function Conclusion({ headline, cards }: { headline: string; cards: { value: string; label: string }[] }) {
  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="py-16" style={{ background: DARK }}>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h3 className="mb-8 text-2xl font-bold text-white sm:text-3xl">{headline}</h3>
        <div className="grid gap-6 sm:grid-cols-3">
          {cards.map((c) => (
            <div key={c.value}>
              <p className="text-3xl font-extrabold" style={{ color: "#60AFFF" }}>{c.value}</p>
              <p className="mt-2 text-sm text-white/50">{c.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function ProcessStep({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="mb-16">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: ACCENT }}>{num}</span>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      <div className="pl-[52px]">{children}</div>
    </motion.div>
  );
}

function InfoCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <p className="mb-2 text-2xl">{icon}</p>
      <h4 className="mb-1 text-base font-bold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  );
}

function AnnotationCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <span className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">{num}</span>
      <h4 className="mb-1 text-sm font-bold text-gray-900">{title}</h4>
      <p className="text-xs text-gray-500">{desc}</p>
    </div>
  );
}

function DashboardMetric({ label, value, status }: { label: string; value: string; status: "green" | "red" | "neutral" }) {
  const colors = { green: "text-green-600 bg-green-50 border-green-200", red: "text-red-600 bg-red-50 border-red-200", neutral: "text-gray-600 bg-gray-50 border-gray-200" };
  return (
    <div className={`rounded-xl border p-5 text-center ${colors[status]}`}>
      <p className="text-2xl font-extrabold">{value}</p>
      <p className="mt-1 text-sm opacity-70">{label}</p>
    </div>
  );
}
