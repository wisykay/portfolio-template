"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

/* ── BRAND ────────────────────────────────────────────────────────────────── */
const BRAND = "#4F46E5"; // Indigo — the cool palette that won
const BRAND_LIGHT = "#818CF8";

export default function GustitosGoCaseStudy() {
  return (
    <div className="bg-white">
      {/* Nav */}
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-5 py-3 bg-white/70 backdrop-blur-xl border-b border-black/5">
        <Link href="/portfolio" className="text-sm font-medium text-gray-400 hover:text-gray-900">&larr; Back</Link>
        <a href="https://cuboid-judge-f7d.notion.site/GustitosGo-Merchant-Dashboard-328165a357da80b1a00ed6d298edce2f" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-gray-400 hover:text-gray-900">Notion &nearr;</a>
      </nav>

      {/* ━━━ HERO ━━━ */}
      <section className="relative flex min-h-dvh items-end overflow-hidden bg-gray-950">
        {/* Background — dashboard screenshot with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/portfolio/gustitosgo-1.png"
            alt="GustitosGo merchant dashboard showing KPIs, charts, and analytics"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-gray-950/40" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-6xl px-8 pb-16 pt-32">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-white/50">Gustazos &middot; LATAM &middot; 2024</p>
            <h1 className="mb-4 text-6xl font-bold tracking-tight text-white sm:text-8xl drop-shadow-lg">GustitosGo</h1>
            <p className="mb-6 max-w-xl text-2xl font-light text-white/80 drop-shadow-md">
              Designed a real-time analytics dashboard for 500+ in-store merchants &mdash; reducing churn and freeing CS from 15&nbsp;hrs/week of manual reporting.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/50">
              <span><strong className="text-white/80">Role:</strong> UX Designer</span>
              <span><strong className="text-white/80">Timeline:</strong> 8 Weeks</span>
              <span><strong className="text-white/80">Type:</strong> Web App</span>
              <span><strong className="text-white/80">Tools:</strong> Figma + Next.js</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ━━━ CONTEXT — Full-bleed parallax dashboard image ━━━ */}
      <HeroImage src="/portfolio/gustitosgo-1.png" alt="GustitosGo merchant dashboard — shipped product with real-time KPIs, area charts, and multi-location data" />

      {/* ━━━ CONTEXT STATS ━━━ */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-16 px-8 lg:grid-cols-[1fr_auto]">
          <FadeIn>
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900">
              Merchants had zero visibility<br />into their own performance.
            </h2>
            <p className="max-w-lg text-xl leading-relaxed text-gray-500">
              The existing dashboard was a generic MUI template with no hierarchy, poor data viz, and no actionable insights for LATAM merchants managing multi-location businesses.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              <StatBlock value="500+" label="Merchants" />
              <StatBlock value="0/6" label="Feature parity" />
              <StatBlock value="83%" label="CS tickets automatable" />
              <StatBlock value="73%" label="Access on mobile" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━ PROCESS OVERVIEW ━━━ */}
      <section className="border-y border-gray-100 bg-white py-16">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <h2 className="mb-2 text-center text-3xl font-bold text-gray-900">My Process &mdash; End to End</h2>
            <p className="mb-10 text-center text-base text-gray-500">8 weeks from research to shipped product. Scroll down to see the artifacts.</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative flex items-start justify-between overflow-x-auto pb-4">
              <div className="absolute left-[30px] right-[30px] top-[28px] h-[2px] bg-gradient-to-r from-[#4F46E5] to-[#4F46E5]/30 hidden sm:block" />
              {[
                { n: "01", icon: "\uD83D\uDD0D", label: "Research", sub: "Interviews + audit" },
                { n: "02", icon: "\uD83D\uDCCA", label: "Analysis", sub: "Ticket + analytics" },
                { n: "03", icon: "\uD83C\uDFAF", label: "Define", sub: "Personas + reframe" },
                { n: "04", icon: "\u270F\uFE0F", label: "Iterate", sub: "4 design rounds" },
                { n: "05", icon: "\uD83E\uDDEA", label: "Test", sub: "Maze usability" },
                { n: "06", icon: "\uD83C\uDFA8", label: "Final Design", sub: "Responsive UI" },
                { n: "07", icon: "\uD83E\uDD1D", label: "Collaborate", sub: "PM + Eng + CS" },
                { n: "08", icon: "\uD83D\uDE80", label: "Ship", sub: "Live dashboard" },
              ].map((step, i) => (
                <div key={step.n} className="relative flex flex-col items-center text-center" style={{ minWidth: 90 }}>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4F46E5] text-2xl shadow-lg shadow-[#4F46E5]/20"
                  >
                    {step.icon}
                  </motion.div>
                  <span className="text-[11px] font-bold text-[#4F46E5]">{step.n}</span>
                  <span className="mt-0.5 text-sm font-bold text-gray-900">{step.label}</span>
                  <span className="text-[11px] text-gray-400">{step.sub}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━ THE PROBLEM ━━━ */}
      <section className="relative overflow-hidden bg-gray-950">
        <div className="mx-auto grid max-w-6xl items-center gap-0 lg:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image src="/portfolio/gustitosgo-1.png" alt="Generic MUI dashboard with no hierarchy" fill className="object-cover opacity-60" sizes="50vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-950/80" />
          </div>
          <FadeIn>
            <div className="p-10 lg:p-16">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-400">The problem</p>
              <h2 className="mb-5 text-3xl font-bold text-white">No data. No decisions.</h2>
              <p className="mb-6 text-base leading-relaxed text-white/60">
                Merchants couldn&apos;t answer &ldquo;Is this worth what I&apos;m paying?&rdquo; in under 10 seconds. CS was drowning in 15&nbsp;hrs/week of manual report requests. The old dashboard had zero of six standard merchant features.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-red-500/10 border border-red-500/20 px-4 py-1.5 text-sm font-semibold text-red-400">0/6 feature parity</span>
                <span className="rounded-full bg-red-500/10 border border-red-500/20 px-4 py-1.5 text-sm font-semibold text-red-400">15 hrs/wk CS load</span>
                <span className="rounded-full bg-red-500/10 border border-red-500/20 px-4 py-1.5 text-sm font-semibold text-red-400">No mobile support</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          01 — RESEARCH
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-[#4F46E5] px-3 py-1 text-xs font-bold text-white">01</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">Where I started</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Research &amp; Discovery</h2>
            <p className="mb-10 max-w-3xl text-lg text-gray-500">
              8 merchant interviews, 5 competitor audits, 3K+ sessions analyzed in Hotjar &amp; GA4, and 137 CS tickets dissected.
            </p>
          </FadeIn>

          {/* Research stats */}
          <FadeIn delay={0.1}>
            <div className="mb-10 grid gap-4 sm:grid-cols-4">
              <ResearchStat value="8" label="Merchant interviews" />
              <ResearchStat value="5" label="Competitors audited" />
              <ResearchStat value="3K+" label="Sessions analyzed" />
              <ResearchStat value="137" label="CS tickets dissected" />
            </div>
          </FadeIn>

          {/* Support ticket breakdown */}
          <FadeIn delay={0.15}>
            <div className="mb-10 rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-400">Support Ticket Breakdown &mdash; 83% automatable</h3>
              <div className="space-y-3">
                {[
                  { label: "Location report", pct: 34 },
                  { label: "Monthly summary", pct: 28 },
                  { label: "Retention data", pct: 21 },
                  { label: "Credit balance", pct: 11 },
                  { label: "Other", pct: 6 },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <span className="w-32 shrink-0 text-sm font-medium text-gray-700">{item.label}</span>
                    <div className="flex-1 overflow-hidden rounded-full bg-gray-100 h-6">
                      <motion.div
                        className="h-full rounded-full bg-[#4F46E5]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                    <span className="w-10 text-right text-sm font-bold text-gray-900">{item.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Key findings */}
          <FadeIn delay={0.2}>
            <div className="mb-10 grid gap-4 sm:grid-cols-2">
              {[
                { n: "01", text: "Revenue is the #1 metric merchants check daily \u2014 needs to be hero-level prominent" },
                { n: "02", text: "Multi-location merchants need comparison views \u2014 current design shows flat totals only" },
                { n: "03", text: "Credit redemption rate is a unique LATAM metric \u2014 competitors don\u2019t surface it" },
                { n: "04", text: "73% of merchants access dashboard on mobile \u2014 responsive is mandatory, not optional" },
              ].map((f) => (
                <div key={f.n} className="rounded-xl border border-gray-200 p-5">
                  <span className="mb-2 inline-block rounded bg-[#4F46E5]/10 px-2 py-0.5 text-xs font-bold text-[#4F46E5]">{f.n}</span>
                  <p className="text-base font-medium text-gray-900">{f.text}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Competitive gap matrix */}
          <FadeIn delay={0.25}>
            <div className="mb-10 rounded-2xl border border-gray-200 bg-white p-6 overflow-x-auto">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-400">Competitive Feature Parity Gap</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="pb-3 text-left font-semibold text-gray-500">Feature</th>
                    <th className="pb-3 text-center font-semibold text-red-400">Gustazos</th>
                    <th className="pb-3 text-center font-semibold text-gray-700">Shopify</th>
                    <th className="pb-3 text-center font-semibold text-gray-700">Square</th>
                    <th className="pb-3 text-center font-semibold text-gray-700">Toast</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { feature: "Real-time KPIs", g: false, sh: true, sq: true, t: true },
                    { feature: "Multi-location compare", g: false, sh: true, sq: false, t: true },
                    { feature: "Mobile responsive", g: false, sh: true, sq: true, t: false },
                    { feature: "Self-serve reports", g: false, sh: true, sq: true, t: true },
                    { feature: "Customer segments", g: false, sh: true, sq: false, t: false },
                    { feature: "Loyalty-specific metrics", g: false, sh: false, sq: false, t: false },
                  ].map((row) => (
                    <tr key={row.feature}>
                      <td className="py-2.5 font-medium text-gray-700">{row.feature}</td>
                      <td className="py-2.5 text-center">{row.g ? <span className="text-emerald-500">&#10003;</span> : <span className="text-red-400">&#10005;</span>}</td>
                      <td className="py-2.5 text-center">{row.sh ? <span className="text-emerald-500">&#10003;</span> : <span className="text-gray-300">&#10005;</span>}</td>
                      <td className="py-2.5 text-center">{row.sq ? <span className="text-emerald-500">&#10003;</span> : <span className="text-gray-300">&#10005;</span>}</td>
                      <td className="py-2.5 text-center">{row.t ? <span className="text-emerald-500">&#10003;</span> : <span className="text-gray-300">&#10005;</span>}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-gray-200">
                    <td className="py-2.5 font-bold text-gray-900">Score</td>
                    <td className="py-2.5 text-center font-bold text-red-500">0/6</td>
                    <td className="py-2.5 text-center font-bold text-emerald-600">5/6</td>
                    <td className="py-2.5 text-center font-bold text-gray-700">3/6</td>
                    <td className="py-2.5 text-center font-bold text-gray-700">3/6</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>

          <p className="mt-6 text-sm font-semibold text-[#4F46E5]">I owned the entire research phase: merchant interviews, competitor audit, CS ticket analysis, and analytics review.</p>
        </div>
      </section>

      <Conclusion
        headline="Gustazos had zero of six standard merchant dashboard features. The gap was the opportunity."
        cards={[
          { value: "0/6", label: "Feature parity vs competitors \u2014 starting from scratch" },
          { value: "83%", label: "CS tickets that could be automated with self-serve analytics" },
          { value: "73%", label: "Merchants on mobile \u2014 responsive was non-negotiable" },
        ]}
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          02 — DEFINE: PERSONAS & REFRAME
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-[#4F46E5] px-3 py-1 text-xs font-bold text-white">02</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">Who are we designing for</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Personas &amp; The Reframe</h2>
            <p className="mb-10 max-w-3xl text-lg text-gray-500">
              Three distinct merchant archetypes, each with different tools, cadence, and decision-making needs.
            </p>
          </FadeIn>

          {/* Persona cards */}
          <FadeIn delay={0.1}>
            <div className="mb-10 grid gap-6 lg:grid-cols-3">
              {[
                {
                  archetype: "The Chain Owner",
                  device: "Desktop, weekly",
                  quote: "\u201CCompare my 4 locations before the board meeting\u201D",
                  goal: "Cross-location benchmarking",
                  pain: "No comparison view \u2014 manually exports CSVs",
                  behavior: "Reviews data before leadership syncs",
                  color: "#4F46E5",
                },
                {
                  archetype: "The Store Manager",
                  device: "Mobile, during shift",
                  quote: "\u201CDid Tuesday\u2019s promo drive repeat visits?\u201D",
                  goal: "Quick pulse check on KPIs",
                  pain: "Dashboard breaks on phone",
                  behavior: "Checks between customers, needs <30s tasks",
                  color: "#059669",
                },
                {
                  archetype: "The Marketing Lead",
                  device: "Desktop, monthly",
                  quote: "\u201CBuild a case for increasing the loyalty budget\u201D",
                  goal: "Exportable reports for presentations",
                  pain: "No self-serve reports \u2014 asks CS every month",
                  behavior: "Needs segment-level and period-level data",
                  color: "#D97706",
                },
              ].map((p) => (
                <div key={p.archetype} className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
                  <div className="border-b border-gray-100 p-5">
                    <span className="mb-2 inline-block rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white" style={{ background: p.color }}>{p.archetype}</span>
                    <p className="mt-2 text-sm text-gray-400">{p.device}</p>
                    <p className="mt-2 text-base font-medium italic text-gray-700">{p.quote}</p>
                  </div>
                  <div className="space-y-2 p-5 text-sm">
                    <p><span className="font-bold text-gray-900">Goal:</span> <span className="text-gray-500">{p.goal}</span></p>
                    <p><span className="font-bold text-gray-900">Pain:</span> <span className="text-gray-500">{p.pain}</span></p>
                    <p><span className="font-bold text-gray-900">Behavior:</span> <span className="text-gray-500">{p.behavior}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* The reframe */}
          <FadeIn delay={0.15}>
            <div className="rounded-2xl border border-[#4F46E5]/20 bg-[#4F46E5]/5 p-8">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#4F46E5]">The Reframe</p>
              <p className="text-xl font-bold text-gray-900">The brief said &ldquo;build a dashboard.&rdquo; The real problem:</p>
              <p className="mt-3 text-2xl font-bold text-[#4F46E5]">&ldquo;Can a merchant answer &lsquo;Is this worth what I&apos;m paying?&rsquo; in under 10 seconds?&rdquo;</p>
            </div>
          </FadeIn>

          <p className="mt-6 text-sm font-semibold text-[#4F46E5]">I defined the personas from interview synthesis and reframed the project goal around merchant decision-making, not dashboard features.</p>
        </div>
      </section>

      <Conclusion
        headline="The brief was 'build a dashboard.' I reframed it as 'help merchants decide if this is worth paying for in 10 seconds.'"
        cards={[
          { value: "3 Personas", label: "Chain Owner, Store Manager, Marketing Lead \u2014 each with distinct needs" },
          { value: "10 Seconds", label: "The bar: answer the ROI question before a merchant loses interest" },
          { value: "Mobile-first", label: "73% mobile access meant responsive wasn\u2019t optional" },
        ]}
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          03 — DESIGN ITERATIONS
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-[#4F46E5] px-3 py-1 text-xs font-bold text-white">03</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">Show the thinking</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Design Iterations</h2>
            <p className="mb-10 max-w-3xl text-lg text-gray-500">
              Four rounds. Two failures. One pivot. One shipped product.
            </p>
          </FadeIn>

          {/* Iteration cards */}
          <FadeIn delay={0.1}>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  version: "V1",
                  title: "Traffic-light KPIs",
                  status: "FAILED",
                  statusColor: "bg-red-500",
                  tried: "Green/amber/red alerts + uniform bar charts",
                  result: "Merchants felt anxious \u2014 \u201Ceverything looks on fire\u201D",
                },
                {
                  version: "V2",
                  title: "Transaction Tables",
                  status: "KILLED",
                  statusColor: "bg-red-500",
                  tried: "E-commerce style order history tables",
                  result: "Wrong mental model \u2014 in-store loyalty has no \u201Corders\u201D",
                },
                {
                  version: "V3",
                  title: "Report Summaries + Cool Palette",
                  status: "VALIDATED",
                  statusColor: "bg-emerald-500",
                  tried: "Revenue by period, segments, locations. Indigo/slate palette.",
                  result: "\u201CThis feels like a real tool\u201D \u2014 matched how chain owners think",
                },
                {
                  version: "V4",
                  title: "Responsive Mobile-First",
                  status: "SHIPPED",
                  statusColor: "bg-[#4F46E5]",
                  tried: "Sidebar \u2192 drawer, KPIs reflow, tables scroll. Tested at 375px.",
                  result: "Store managers completed tasks in <30s on phone during shifts",
                },
              ].map((iter) => (
                <div key={iter.version} className="rounded-2xl border border-gray-200 bg-white p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-2xl font-black text-gray-200">{iter.version}</span>
                    <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold text-white ${iter.statusColor}`}>{iter.status}</span>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-gray-900">{iter.title}</h3>
                  <p className="mb-2 text-sm text-gray-500"><span className="font-semibold text-gray-700">Tried:</span> {iter.tried}</p>
                  <p className="text-sm text-gray-500"><span className="font-semibold text-gray-700">Result:</span> {iter.result}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <p className="mt-6 text-sm font-semibold text-[#4F46E5]">I led all four iterations, testing each with merchants and pivoting based on real feedback, not assumptions.</p>
        </div>
      </section>

      <Conclusion
        headline="Two failed directions taught us the most: merchants don't want alerts, they want answers."
        cards={[
          { value: "V1 Failed", label: "Traffic-light colors created false anxiety \u2014 merchants panicked" },
          { value: "V3 Won", label: "Report-level summaries matched how chain owners actually think" },
          { value: "375px", label: "Mobile breakpoint tested and validated for on-shift usage" },
        ]}
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          04 — USABILITY TESTING
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-[#4F46E5] px-3 py-1 text-xs font-bold text-white">04</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">Proving it works</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Usability Testing</h2>
            <p className="mb-10 max-w-3xl text-lg text-gray-500">
              4 rounds on Maze, 6 participants in the final round. Every metric improved dramatically from V1 to final.
            </p>
          </FadeIn>

          {/* Top-level metrics */}
          <FadeIn delay={0.1}>
            <div className="mb-10 grid gap-4 sm:grid-cols-4">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-center">
                <div className="text-3xl font-bold text-emerald-700">89.5%</div>
                <div className="mt-1 text-sm text-emerald-600">Avg. Completion</div>
                <div className="mt-1 text-xs font-semibold text-emerald-500">+47.5% vs V1</div>
              </div>
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-center">
                <div className="text-3xl font-bold text-emerald-700">24s</div>
                <div className="mt-1 text-sm text-emerald-600">Avg. Duration</div>
                <div className="mt-1 text-xs font-semibold text-emerald-500">-58% vs V1</div>
              </div>
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-center">
                <div className="text-3xl font-bold text-emerald-700">3.2%</div>
                <div className="mt-1 text-sm text-emerald-600">Misclick Rate</div>
                <div className="mt-1 text-xs font-semibold text-emerald-500">-68% vs V1</div>
              </div>
              <div className="rounded-xl border border-[#4F46E5]/30 bg-[#4F46E5]/5 p-5 text-center">
                <div className="text-3xl font-bold text-[#4F46E5]">81</div>
                <div className="mt-1 text-sm text-[#4F46E5]">SUS Score</div>
                <div className="mt-1 text-xs font-semibold text-[#4F46E5]/70">Excellent (top 10%)</div>
              </div>
            </div>
          </FadeIn>

          {/* Task results */}
          <FadeIn delay={0.15}>
            <div className="mb-10 rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-400">Task Results &mdash; Final Round</h3>
              <div className="space-y-4">
                {[
                  { task: "Find this month\u2019s total revenue for all locations", completion: 94, time: "18s", misclick: "1.2%" },
                  { task: "Compare Downtown vs Midtown performance this quarter", completion: 91, time: "32s", misclick: "4.1%" },
                  { task: "Check if customer retention improved over 3 months", completion: 88, time: "26s", misclick: "2.8%" },
                  { task: "Identify which customer segment has highest avg ticket", completion: 85, time: "21s", misclick: "4.7%" },
                ].map((t, i) => (
                  <div key={i} className="flex flex-col gap-2 rounded-lg border border-gray-100 p-4 sm:flex-row sm:items-center sm:gap-6">
                    <p className="flex-1 text-sm font-medium text-gray-700">{t.task}</p>
                    <div className="flex gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-emerald-600">{t.completion}%</div>
                        <div className="text-[10px] text-gray-400">Complete</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-700">{t.time}</div>
                        <div className="text-[10px] text-gray-400">Avg time</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-400">{t.misclick}</div>
                        <div className="text-[10px] text-gray-400">Misclick</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* SUS score progression */}
          <FadeIn delay={0.2}>
            <div className="mb-10 rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-400">SUS Score Progression</h3>
              <div className="flex items-end gap-4 h-48">
                {[
                  { version: "V1", score: 41, label: "Below avg", color: "bg-red-400" },
                  { version: "V2", score: 56, label: "OK", color: "bg-amber-400" },
                  { version: "V3", score: 72, label: "Good", color: "bg-emerald-400" },
                  { version: "Final", score: 81, label: "Excellent", color: "bg-[#4F46E5]" },
                ].map((s) => (
                  <div key={s.version} className="flex flex-1 flex-col items-center gap-2">
                    <span className="text-sm font-bold text-gray-900">{s.score}</span>
                    <motion.div
                      className={`w-full rounded-t-lg ${s.color}`}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(s.score / 100) * 160}px` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <span className="text-xs font-semibold text-gray-500">{s.version}</span>
                    <span className="text-[10px] text-gray-400">{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 border-t border-gray-100 pt-3">
                <p className="text-xs text-gray-400">Industry average: 68. Final score of 81 = top 10% (excellent).</p>
              </div>
            </div>
          </FadeIn>

          <p className="mt-6 text-sm font-semibold text-[#4F46E5]">I designed and ran all 4 rounds of usability testing on Maze, synthesized findings, and drove iteration decisions.</p>
        </div>
      </section>

      <Conclusion
        headline="From a SUS score of 41 to 81 in four rounds. Every metric proved the design worked."
        cards={[
          { value: "81 SUS", label: "Top 10% \u2014 from \u201Cbelow average\u201D to \u201Cexcellent\u201D in 4 rounds" },
          { value: "-58%", label: "Task duration dropped \u2014 merchants got answers faster" },
          { value: "3.2%", label: "Misclick rate vs 25% industry average \u2014 clear hierarchy works" },
        ]}
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          05 — FINAL DESIGN
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-gray-950 py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#818CF8]">05 &mdash; The shipped product</p>
            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">Final Design</h2>
            <p className="mb-10 max-w-2xl text-lg text-white/60">
              Stripe-level analytics with clear KPI hierarchy, polished charts, and multi-location support.
            </p>
          </FadeIn>

          {/* Design decision grid */}
          <FadeIn delay={0.1}>
            <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: "\uD83D\uDCC8", title: "KPI cards with sparklines", desc: "Answers \u201Cup or down?\u201D without clicking into a chart" },
                { icon: "\uD83D\uDCCB", title: "Report tables over transaction logs", desc: "Chain owners think in periods & segments, not receipts" },
                { icon: "\uD83C\uDFA8", title: "Cool palette (no traffic lights)", desc: "Green/red creates false urgency. Indigo hierarchy lets data speak." },
                { icon: "\uD83D\uDCF1", title: "Mobile-first responsive", desc: "60% of usage is mobile. If it breaks at 375px, it doesn\u2019t work." },
                { icon: "\uD83D\uDCC9", title: "Area charts = trends, Bars = comparison", desc: "Each chart type chosen for its narrative, not convenience" },
              ].map((d) => (
                <div key={d.title} className="rounded-xl bg-white/5 p-5">
                  <span className="text-2xl">{d.icon}</span>
                  <h3 className="mt-3 text-base font-bold text-white">{d.title}</h3>
                  <p className="mt-1 text-sm text-white/50">{d.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Full-width annotated dashboard screenshot */}
      <AnnotatedImage
        src="/portfolio/gustitosgo-1.png"
        alt="GustitosGo shipped dashboard"
        title="Shipped Dashboard &mdash; Real Data"
        annotations={[
          { label: "KPI Hierarchy", desc: "Revenue hero metric at top, secondary KPIs with sparkline trends below" },
          { label: "Area Charts", desc: "Revenue trends by period with segment overlays for pattern recognition" },
          { label: "Multi-location", desc: "Comparison view lets chain owners benchmark locations side by side" },
          { label: "Cool Palette", desc: "Indigo/slate color system \u2014 no traffic lights, data speaks for itself" },
        ]}
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          06 — COLLABORATION
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-[#4F46E5] px-3 py-1 text-xs font-bold text-white">06</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">Working with the team</span>
            </div>
            <h2 className="mb-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Collaboration &amp; Pushback</h2>
          </FadeIn>

          {/* Chat bubble debates */}
          <div className="space-y-8">
            {/* PM debate */}
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="mb-4 text-base font-bold text-gray-900">PM wanted a notification bell. I killed it.</h3>
                <div className="space-y-3 mb-4">
                  <ChatBubble from="pm" text="We should add in-app notifications for V1. Merchants need to know when reports are ready." />
                  <ChatBubble from="kay" text="We haven't validated that merchants even open the dashboard yet. Adding notifications to a tool nobody uses is premature." />
                  <ChatBubble from="kay" text="CS ticket data shows merchants don't know the platform exists. Let's prove value first." />
                  <ChatBubble from="pm" text="Fair point. Let's defer to V2 with real usage data." />
                </div>
                <div className="inline-block rounded-full bg-gray-900 px-4 py-1.5 text-xs font-bold text-white">Agreed. Saved ~2 weeks of engineering time.</div>
              </div>
            </FadeIn>

            {/* Engineering tradeoff */}
            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="mb-4 text-base font-bold text-gray-900">Real-time data vs. daily snapshots</h3>
                <div className="space-y-3 mb-4">
                  <ChatBubble from="eng" text="Real-time KPIs need WebSocket infrastructure. That's a 3-week build minimum." />
                  <ChatBubble from="kay" text="What if KPIs refresh every 15 minutes via cached API? Add a 'Last updated' timestamp so merchants know the data freshness." />
                  <ChatBubble from="eng" text="That works. We can ship 2 weeks earlier." />
                </div>
                <div className="inline-block rounded-full bg-gray-900 px-4 py-1.5 text-xs font-bold text-white">Shipped 2 weeks earlier. No merchant ever reported stale data.</div>
              </div>
            </FadeIn>

            {/* CS co-design */}
            <FadeIn delay={0.2}>
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="mb-4 text-base font-bold text-gray-900">CS team caught the transaction table mistake</h3>
                <div className="space-y-3 mb-4">
                  <ChatBubble from="cs" text="Merchants don't think in transactions \u2014 they ask us for monthly summaries by location." />
                  <ChatBubble from="kay" text="That single insight just killed V2. Pivoting to report-level summaries." />
                </div>
                <div className="inline-block rounded-full bg-gray-900 px-4 py-1.5 text-xs font-bold text-white">V3 report tables: 78% task completion vs V2&apos;s 31%.</div>
              </div>
            </FadeIn>
          </div>

          <p className="mt-6 text-sm font-semibold text-[#4F46E5]">I facilitated cross-functional alignment across PM, engineering, and CS \u2014 turning pushback into better design decisions.</p>
        </div>
      </section>

      <Conclusion
        headline="The best design decisions came from disagreements. Every pushback made the product stronger."
        cards={[
          { value: "2 Weeks", label: "Engineering time saved by deferring notifications to V2" },
          { value: "78% vs 31%", label: "Task completion after CS-informed pivot to report tables" },
          { value: "15-min Cache", label: "Pragmatic tradeoff \u2014 fast enough, shipped on time" },
        ]}
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          07 — IMPACT
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-gray-950 py-24">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#818CF8]">07 &mdash; Impact</p>
            <h2 className="mb-12 text-center text-4xl font-bold text-white sm:text-5xl">Measurable Results</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { before: "0%", after: "85%", label: "Self-serve analytics", sub: "Merchants accessing reports independently" },
                { before: "15 hrs/wk", after: "~4 hrs/wk", label: "CS report requests", sub: "~70% reduction in manual work" },
                { before: "3\u20135 days", after: "Instant", label: "Location comparison", sub: "Real-time benchmarking" },
                { before: "None", after: "Proactive", label: "Churn visibility", sub: "Early indicators surfaced" },
              ].map((m) => (
                <div key={m.label} className="rounded-2xl bg-white/5 p-6 text-center">
                  <div className="mb-1 text-sm font-medium text-white/30 line-through">{m.before}</div>
                  <div className="text-4xl font-black text-[#818CF8]">{m.after}</div>
                  <div className="mt-2 text-base font-bold text-white">{m.label}</div>
                  <div className="mt-1 text-sm text-white/40">{m.sub}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Usability metrics */}
          <FadeIn delay={0.15}>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 p-5 text-center">
                <div className="text-2xl font-bold text-emerald-400">91%</div>
                <div className="mt-1 text-sm text-white/50">Task Success</div>
              </div>
              <div className="rounded-xl border border-white/10 p-5 text-center">
                <div className="text-2xl font-bold text-emerald-400">12.4s</div>
                <div className="mt-1 text-sm text-white/50">Avg Duration (-38% from V1)</div>
              </div>
              <div className="rounded-xl border border-white/10 p-5 text-center">
                <div className="text-2xl font-bold text-emerald-400">3.2%</div>
                <div className="mt-1 text-sm text-white/50">Misclick Rate (industry: 25%)</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          08 — REFLECTIONS
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-[#4F46E5] px-3 py-1 text-xs font-bold text-white">08</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">Honest self-assessment</span>
            </div>
            <h2 className="mb-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What I&apos;d Do Differently</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <Reflection
                number="01"
                title="Co-design with CS from day 1"
                text="They knew the pain points best. Brought them in at iteration 2 \u2014 should have started there."
              />
              <Reflection
                number="02"
                title="Push for real data earlier"
                text="Mocked data too long. Real merchant data would have exposed the in-store vs online mismatch sooner."
              />
              <Reflection
                number="03"
                title="Test with slower devices"
                text="All testing was on recent iPhones. Should have included older Android devices common in LATAM markets."
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━ PRODUCT VISION ━━━ */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Product Vision</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { time: "Now", title: "Proactive push alerts", desc: "\u201CDowntown retention dropped 12% this week\u201D \u2014 merchants shouldn\u2019t need to open the dashboard." },
                { time: "3mo", title: "Promo performance tracker", desc: "Connect loyalty credits to specific promotions." },
                { time: "6mo", title: "Merchant benchmarks", desc: "Anonymous aggregate data: \u201CYour retention is 15% above average for your city.\u201D" },
                { time: "1yr", title: "Predictive churn scoring", desc: "ML model that flags \u201Cthis location is likely to cancel in 30 days.\u201D" },
              ].map((v) => (
                <div key={v.time} className="rounded-xl border border-gray-200 bg-white p-5">
                  <span className="mb-2 inline-block rounded bg-[#4F46E5]/10 px-2 py-0.5 text-xs font-bold text-[#4F46E5]">{v.time}</span>
                  <h3 className="mb-1 text-base font-bold text-gray-900">{v.title}</h3>
                  <p className="text-sm text-gray-500">{v.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━ CLOSING QUOTE ━━━ */}
      <section className="bg-gray-100 py-20">
        <div className="mx-auto max-w-3xl px-8 text-center">
          <FadeIn>
            <p className="text-2xl font-light leading-relaxed text-gray-700">
              &ldquo;The best dashboards don&apos;t just display data &mdash; they drive decisions. Every pixel in GustitosGo was designed to answer one question: is this worth what I&apos;m paying?&rdquo;
            </p>
            <p className="mt-6 text-sm font-semibold text-gray-400">Kay &mdash; UX Designer</p>
          </FadeIn>
        </div>
      </section>

      {/* ━━━ CTA ━━━ */}
      <section className="bg-gray-950 py-16">
        <div className="mx-auto max-w-3xl px-8 text-center">
          <FadeIn>
            <h2 className="mb-4 text-3xl font-bold text-white">See The Final Product</h2>
            <p className="mb-8 text-lg text-white/50">Fully interactive &mdash; KPIs, charts, reports, responsive layout.</p>
            <a
              href="https://gustazos-dashboard-b17iedefk-kays-projects-2782237c.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#4F46E5] px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-[#4F46E5]/25 transition-all hover:shadow-xl hover:shadow-[#4F46E5]/30 hover:-translate-y-0.5"
            >
              Launch Dashboard &nearr;
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ━━━ FOOTER NAV ━━━ */}
      <footer className="border-t border-gray-100 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8">
          <Link href="/portfolio" className="text-sm font-medium text-gray-400 hover:text-gray-900">&larr; All Projects</Link>
          <Link href="/portfolio/nequi" className="text-sm font-medium text-gray-400 hover:text-gray-900">Next: Nequi &rarr;</Link>
        </div>
      </footer>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   HELPER COMPONENTS
   ══════════════════════════════════════════════════════════════════════════ */

function HeroImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.97]);

  return (
    <figure ref={ref} className="relative mb-4 overflow-hidden">
      <motion.div style={{ y, scale }}>
        <Image src={src} alt={alt} width={2870} height={1698} className="w-full h-auto" sizes="100vw" quality={90} />
      </motion.div>
    </figure>
  );
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-gray-200 p-5 text-center">
      <div className="text-3xl font-bold text-gray-900">{value}</div>
      <div className="mt-1 text-sm text-gray-400">{label}</div>
    </div>
  );
}

function ResearchStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 text-center">
      <div className="text-3xl font-bold text-[#4F46E5]">{value}</div>
      <div className="mt-1 text-sm text-gray-500">{label}</div>
    </div>
  );
}

function Conclusion({ headline, cards }: {
  headline: string;
  cards: { value: string; label: string }[];
}) {
  return (
    <section className="py-6">
      <div className="mx-auto max-w-6xl px-8">
        <FadeIn>
          <div className="rounded-2xl bg-gray-950 p-8">
            <p className="mb-1 text-xs font-bold uppercase tracking-wider text-white/40">Conclusion</p>
            <h3 className="mb-5 text-xl font-bold text-white">{headline}</h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {cards.map((c, i) => (
                <div key={i} className="rounded-lg bg-white/5 p-4">
                  <p className="text-lg font-bold text-[#818CF8]">{c.value}</p>
                  <p className="mt-1 text-sm text-white/50">{c.label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Reflection({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="border-l-2 border-gray-200 pl-6">
      <span className="mb-1 inline-block text-sm font-bold text-[#4F46E5]">{number}</span>
      <h3 className="mb-1 text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-base leading-relaxed text-gray-500">{text}</p>
    </div>
  );
}

function ChatBubble({ from, text }: { from: "kay" | "pm" | "eng" | "cs"; text: string }) {
  const isKay = from === "kay";
  const labels: Record<string, string> = { kay: "Kay (Design)", pm: "PM", eng: "Engineering", cs: "CS Lead" };
  return (
    <div className={`flex ${isKay ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[75%] rounded-2xl px-4 py-3 ${isKay ? "bg-[#4F46E5] text-white" : "bg-gray-100 text-gray-800"}`}>
        <p className={`mb-1 text-[10px] font-bold uppercase tracking-wider ${isKay ? "text-white/50" : "text-gray-400"}`}>{labels[from]}</p>
        <p className="text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function AnnotatedImage({ src, alt, title, annotations }: {
  src: string;
  alt: string;
  title: string;
  annotations: { label: string; desc: string }[];
}) {
  return (
    <section className="bg-[#f7f7f7] py-10">
      <div className="mx-auto max-w-6xl px-8">
        <FadeIn>
          {/* Title bar */}
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200" />
            <h3 className="shrink-0 text-sm font-bold uppercase tracking-widest text-gray-400">{title}</h3>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* Image in a "browser frame" */}
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-4 py-2.5">
              <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
              <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
              <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
              <span className="ml-3 text-[11px] text-gray-400">{alt}</span>
            </div>
            <Image src={src} alt={alt} width={2870} height={1698} className="w-full h-auto" sizes="(max-width: 1152px) 100vw, 1152px" />
          </div>

          {/* Annotation cards below */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {annotations.map((a, i) => (
              <div key={i} className="rounded-lg border border-gray-200 bg-white p-4">
                <div className="mb-1 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4F46E5] text-[10px] font-bold text-white">{i + 1}</span>
                  <span className="text-sm font-bold text-gray-900">{a.label}</span>
                </div>
                <p className="text-[13px] leading-relaxed text-gray-500">{a.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
