"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

/* ── BRAND COLOR ─────────────────────────────────────────────────────────── */
const BRAND = "#D4872C"; // warm orange/gold
const BRAND_LIGHT = "#F5B041";
const BRAND_BG = "#D4872C";

export default function GoBeyondGustazos() {
  return (
    <div className="bg-white">
      {/* Nav */}
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-5 py-3 bg-white/70 backdrop-blur-xl border-b border-black/5">
        <Link href="/portfolio" className="text-sm font-medium text-gray-400 hover:text-gray-900">&larr; Back</Link>
        <a href="https://cuboid-judge-f7d.notion.site/Gustazos-Redefining-Gift-and-Experience-56e71f44da7c4d3fbe4ee21415e1fb1f" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-gray-400 hover:text-gray-900">Notion &nearr;</a>
      </nav>

      {/* ━━━ HERO ━━━ */}
      <section className="relative flex min-h-dvh items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/portfolio/gobeyond-1.png"
            alt="Gustazos app redesign hero — gift and experience platform"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810] via-[#2C1810]/70 to-[#2C1810]/30" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-6xl px-8 pb-16 pt-32">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-white/50">GoBeyond &middot; Puerto Rico, Panama, Jamaica &middot; 2025</p>
            <h1 className="mb-4 text-6xl font-bold tracking-tight text-white sm:text-8xl drop-shadow-lg">Gustazos</h1>
            <p className="mb-6 max-w-lg text-2xl font-light text-white/80 drop-shadow-md">
              Redefining Gift &amp; Experience &mdash; I led the UX investigation that split &ldquo;gifting&rdquo; from &ldquo;self-use,&rdquo; reducing 38% checkout drop-off across three Caribbean markets.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/50">
              <span><strong className="text-white/80">Role:</strong> Sr. Product Designer (Lead)</span>
              <span><strong className="text-white/80">Duration:</strong> 5 months (3+ weeks this initiative)</span>
              <span><strong className="text-white/80">Tools:</strong> Figma, Maze, Miro, Google Meet</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ━━━ CONTEXT IMAGE — parallax ━━━ */}
      <HeroImage src="/portfolio/gobeyond-5.png" alt="Gustazos platform ecosystem — deals, gifts, and experiences across the Caribbean" />

      {/* ━━━ CONTEXT STATS ━━━ */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-16 px-8 lg:grid-cols-[1fr_auto]">
          <FadeIn>
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900">
              A legacy deal platform<br />ready for reinvention.
            </h2>
            <p className="max-w-lg text-xl leading-relaxed text-gray-500">
              Gustazos.com had loyal users across Puerto Rico, Panama, and Jamaica &mdash; but outdated UX, confusing terminology, and no scalable framework were blocking international rollout. Users couldn&apos;t tell if they were buying for themselves or gifting someone else.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              <StatBlock value="38%" label="Checkout drop-off" />
              <StatBlock value="3" label="Markets" />
              <StatBlock value="52%" label="Mobile sessions dropped before cart" />
              <StatBlock value="<10%" label="Reactivation email engagement" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━ PROCESS OVERVIEW ━━━ */}
      <section className="border-y border-gray-100 bg-white py-16">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <h2 className="mb-2 text-center text-3xl font-bold text-gray-900">My Process &mdash; End to End</h2>
            <p className="mb-10 text-center text-base text-gray-500">Mixed-methods research driving every design decision.</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative flex items-start justify-between overflow-x-auto pb-4">
              <div className="absolute left-[30px] right-[30px] top-[28px] h-[2px] bg-gradient-to-r from-[#D4872C] to-[#D4872C]/30 hidden sm:block" />
              {[
                { n: "01", icon: "\uD83D\uDD0D", label: "Research", sub: "Quant + Qual" },
                { n: "02", icon: "\uD83D\uDCAC", label: "Interviews", sub: "30+ users" },
                { n: "03", icon: "\uD83E\uDDEA", label: "Usability", sub: "Maze testing" },
                { n: "04", icon: "\uD83D\uDCCA", label: "Analysis", sub: "CSD Matrix" },
                { n: "05", icon: "\u2702\uFE0F", label: "UX Writing", sub: "Terminology fix" },
                { n: "06", icon: "\uD83D\uDDD3\uFE0F", label: "User Stories", sub: "Flow mapping" },
                { n: "07", icon: "\uD83C\uDFA8", label: "Design", sub: "UI framework" },
                { n: "08", icon: "\uD83D\uDE80", label: "Ship", sub: "3 markets" },
              ].map((step, i) => (
                <div key={step.n} className="relative flex flex-col items-center text-center" style={{ minWidth: 90 }}>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4872C] text-2xl shadow-lg shadow-[#D4872C]/20"
                  >
                    {step.icon}
                  </motion.div>
                  <span className="text-[11px] font-bold text-[#D4872C]">{step.n}</span>
                  <span className="mt-0.5 text-sm font-bold text-gray-900">{step.label}</span>
                  <span className="text-[11px] text-gray-400">{step.sub}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━ THE PROBLEM — dark split layout ━━━ */}
      <section className="relative overflow-hidden bg-gray-950">
        <div className="mx-auto grid max-w-6xl items-center gap-0 lg:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image src="/portfolio/gobeyond-2.png" alt="Legacy Gustazos UI showing confusing labels" fill className="object-cover" sizes="50vw" />
          </div>
          <FadeIn>
            <div className="p-10 lg:p-16">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-400">The problem</p>
              <h2 className="mb-5 text-3xl font-bold text-white">Users couldn&apos;t tell &ldquo;gift&rdquo; from &ldquo;self-use.&rdquo;</h2>
              <p className="mb-6 text-base leading-relaxed text-white/60">
                Despite a loyal user base, Gustazos faced outdated UX and conversion friction. Labels like &ldquo;Reserva&rdquo; and &ldquo;Canje&rdquo; were interpreted inconsistently. Navigation didn&apos;t match users&apos; mental models. Legacy layout created delays in discovery and purchase.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-red-500/10 border border-red-500/20 px-4 py-1.5 text-sm font-semibold text-red-400">38% checkout drop-off</span>
                <span className="rounded-full bg-red-500/10 border border-red-500/20 px-4 py-1.5 text-sm font-semibold text-red-400">Confusing terminology</span>
                <span className="rounded-full bg-red-500/10 border border-red-500/20 px-4 py-1.5 text-sm font-semibold text-red-400">No scalable framework</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          01 — QUANTITATIVE RESEARCH
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-[#D4872C] px-3 py-1 text-xs font-bold text-white">01</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">Where I started</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Quantitative Research</h2>
            <p className="mb-10 max-w-3xl text-lg text-gray-500">
              Measuring behavioral patterns, friction points, and performance at scale using GA, Hotjar session recordings, heatmaps, and funnel analysis.
            </p>
          </FadeIn>

          {/* Research data — dashboard style */}
          <FadeIn delay={0.1}>
            <div className="mb-10 grid gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 sm:grid-cols-5">
              {[
                { value: "38%", label: "Drop-off at gift vs. use-now", status: "bad" },
                { value: "14%", label: "Used search bar", status: "ok" },
                { value: "52%", label: "Mobile sessions dropped before cart", status: "bad" },
                { value: "High views", label: "Gift card pages, low conversions", status: "bad" },
                { value: "<10%", label: "Reactivation email engagement", status: "bad" },
              ].map((m) => (
                <div key={m.label} className="bg-white p-5">
                  <p className={`text-2xl font-bold ${m.status === 'good' ? 'text-emerald-600' : m.status === 'bad' ? 'text-red-500' : 'text-gray-900'}`}>{m.value}</p>
                  <p className="mt-1 text-sm font-semibold text-gray-700">{m.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mb-10 grid gap-4 sm:grid-cols-4">
              <ResearchStat value="GA" label="Funnels, bounce, click-through" />
              <ResearchStat value="Hotjar" label="Session recordings & heatmaps" />
              <ResearchStat value="Funnels" label="Cart abandonment analysis" />
              <ResearchStat value="Email" label="Reactivation campaign metrics" />
            </div>
          </FadeIn>

          <p className="text-sm font-semibold" style={{ color: BRAND }}>I set up the analytics framework, defined the funnel stages, and identified the 38% drop-off that became the project&apos;s north star.</p>
        </div>
      </section>

      {/* Annotated screenshot — analytics overview */}
      <AnnotatedImage
        src="/portfolio/gobeyond-3.png"
        alt="Analytics dashboard showing drop-off points"
        title="Research Artifacts &mdash; Funnel Analysis"
        annotations={[
          { label: "Gift vs. Use-Now", desc: "38% of users dropped at the step where intent was unclear" },
          { label: "Search Underused", desc: "Only 14% used search -- most preferred browsing categories" },
          { label: "Mobile Friction", desc: "52% of mobile sessions dropped before reaching cart" },
        ]}
      />

      <Conclusion
        headline="The data revealed that the biggest blocker wasn't the product -- it was the language."
        cards={[
          { value: "38% drop-off", label: "At the single most critical decision point: gift vs. self-use" },
          { value: "52% mobile bounce", label: "Mobile sessions ending before cart -- navigation was the culprit" },
          { value: "14% search usage", label: "Users preferred browsing, meaning category structure had to be perfect" },
        ]}
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          02 — QUALITATIVE RESEARCH
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-[#D4872C] px-3 py-1 text-xs font-bold text-white">02</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">Hearing from users</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Qualitative Research</h2>
            <p className="mb-10 max-w-3xl text-lg text-gray-500">
              3 rounds of user interviews with 30+ users in Puerto Rico, usability tests in Maze, and internal workshops with sales, support, content, and marketing.
            </p>
          </FadeIn>

          {/* Key insights — survey-style cards */}
          <FadeIn delay={0.1}>
            <div className="mb-10 grid gap-4 sm:grid-cols-2">
              {[
                { insight: "Many users didn't know if they were buying for themselves or someone else", source: "User interviews" },
                { insight: '"Reserva" and "Canje" were interpreted inconsistently across user groups', source: "Usability tests" },
                { insight: "Emotional triggers (like gifting for Mom) increased engagement significantly", source: "Behavioral analysis" },
                { insight: "Teams across departments used different language to describe the same action", source: "Internal workshops" },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-gray-200 bg-white p-5">
                  <p className="mb-2 text-base font-semibold text-gray-900">&ldquo;{item.insight}&rdquo;</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#D4872C]">{item.source}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Research numbers */}
          <FadeIn delay={0.15}>
            <div className="mb-10 grid gap-4 sm:grid-cols-4">
              <ResearchStat value="30+" label="Users interviewed in Puerto Rico" />
              <ResearchStat value="3" label="Rounds of interviews" />
              <ResearchStat value="Maze" label="Usability tests with Figma prototypes" />
              <ResearchStat value="4 depts" label="Cross-functional workshops" />
            </div>
          </FadeIn>

          {/* Stakeholder debate — chat bubbles */}
          <FadeIn delay={0.2}>
            <h3 className="mb-5 text-xl font-bold text-gray-900">The Terminology Debate</h3>
            <div className="mx-auto max-w-lg space-y-3 mb-8">
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-500">CS</div>
                <div>
                  <div className="rounded-2xl rounded-tl-sm bg-gray-100 px-4 py-2.5">
                    <p className="text-sm text-gray-700">Users keep calling support asking what &ldquo;Canje&rdquo; means. Can we just add a tooltip?</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row-reverse gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D4872C] text-xs font-bold text-white">K</div>
                <div className="flex flex-col items-end">
                  <div className="rounded-2xl rounded-tr-sm bg-[#D4872C] px-4 py-2.5">
                    <p className="text-sm text-white">If users need a tooltip to understand a label, the label is wrong. The data shows 38% drop-off right there. We need to rename, not annotate.</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-500">PM</div>
                <div>
                  <div className="rounded-2xl rounded-tl-sm bg-gray-100 px-4 py-2.5">
                    <p className="text-sm text-gray-700">But &ldquo;Canje&rdquo; is part of our brand identity&hellip;</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row-reverse gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D4872C] text-xs font-bold text-white">K</div>
                <div className="flex flex-col items-end">
                  <div className="rounded-2xl rounded-tr-sm bg-[#D4872C] px-4 py-2.5">
                    <p className="text-sm text-white">30 users told us they don&apos;t understand it. Brand identity that confuses users isn&apos;t identity &mdash; it&apos;s friction.</p>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-4 w-fit rounded-full bg-gray-950 px-5 py-2">
                <p className="text-sm font-semibold text-white">Agreed. Renamed across all markets.</p>
              </div>
            </div>
          </FadeIn>

          <p className="text-sm font-semibold" style={{ color: BRAND }}>I conducted all 30+ interviews, designed the Maze test plan, facilitated cross-department workshops, and presented findings to leadership.</p>
        </div>
      </section>

      {/* CSD Matrix image */}
      <AnnotatedImage
        src="/portfolio/gobeyond-6.png"
        alt="CSD Matrix — Certainties, Suppositions, Doubts"
        title="CSD Matrix &mdash; Research Synthesis"
        annotations={[
          { label: "Certainties", desc: "What we confirmed: users don't understand legacy terms" },
          { label: "Suppositions", desc: "Hypotheses about gifting emotional triggers" },
          { label: "Doubts", desc: "Open questions about international terminology preferences" },
        ]}
      />

      <Conclusion
        headline="Research proved that the problem wasn't the product -- it was the language surrounding it."
        cards={[
          { value: "30+ interviews", label: "In-market qualitative research with real Puerto Rico users" },
          { value: "Terminology gap", label: "Internal teams and users used completely different language" },
          { value: "Emotional gifting", label: "Gifting for Mom/Dad drove engagement -- untapped opportunity" },
        ]}
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          03 — DESIGN SOLUTIONS: JOURNEY SIMPLIFICATION
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-[#D4872C] px-3 py-1 text-xs font-bold text-white">03</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">The core fix</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Journey Simplification</h2>
            <p className="mb-10 max-w-3xl text-lg text-gray-500">
              Split flows, clear navigation, and a shortened path to confirmation &mdash; from 6+ steps to 3.
            </p>
          </FadeIn>

          {/* Before/After — the key change */}
          <FadeIn delay={0.1}>
            <div className="mb-10 flex flex-col items-center gap-6 sm:flex-row sm:gap-12">
              <div className="flex-1 text-center sm:text-right">
                <p className="text-sm font-semibold text-gray-400">Before</p>
                <p className="mt-1 text-4xl font-bold text-red-500">6+ steps</p>
                <p className="mt-1 text-sm text-gray-500">Ambiguous single flow</p>
                <p className="mt-1 text-xs text-gray-400">&ldquo;Reserva&rdquo; / &ldquo;Canje&rdquo; &mdash; what do these mean?</p>
              </div>
              <div className="text-3xl text-gray-300">&rarr;</div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-sm font-semibold text-emerald-600">After</p>
                <p className="mt-1 text-4xl font-bold text-emerald-600">3 steps</p>
                <p className="mt-1 text-sm text-gray-500">Split intent flows</p>
                <p className="mt-1 text-xs text-gray-400">&ldquo;Send as Gift&rdquo; / &ldquo;Get This Deal&rdquo;</p>
              </div>
            </div>
          </FadeIn>

          {/* Gift vs Experience table */}
          <FadeIn delay={0.15}>
            <h3 className="mb-5 text-xl font-bold text-gray-900">Gift vs. Experience &mdash; Clarified</h3>
            <div className="mb-10 overflow-hidden rounded-xl border border-gray-200">
              <div className="grid grid-cols-3 bg-gray-50 text-sm font-bold text-gray-600">
                <div className="p-4">Aspect</div>
                <div className="p-4 border-l border-gray-200">Gift</div>
                <div className="p-4 border-l border-gray-200">Experience</div>
              </div>
              {[
                { aspect: "Intent", gift: "For someone else", exp: "For yourself" },
                { aspect: "CTA", gift: "\"Send as Gift\"", exp: "\"Get This Deal\"" },
                { aspect: "Flow", gift: "Recipient details + message", exp: "Direct to confirmation" },
                { aspect: "Emotional trigger", gift: "Generosity, celebration", exp: "Self-reward, discovery" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 border-t border-gray-100 text-sm">
                  <div className="p-4 font-semibold text-gray-900">{row.aspect}</div>
                  <div className="p-4 border-l border-gray-100 text-gray-600">{row.gift}</div>
                  <div className="p-4 border-l border-gray-100 text-gray-600">{row.exp}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          <p className="text-sm font-semibold" style={{ color: BRAND }}>I designed the split-flow architecture, defined the intent-based CTAs, and validated with Maze testing.</p>
        </div>
      </section>

      {/* Parallax — design system overview */}
      <HeroImage src="/portfolio/gobeyond-4.png" alt="Gustazos design system and UI framework" />

      <Conclusion
        headline="Splitting 'gift' from 'experience' eliminated the single biggest conversion blocker."
        cards={[
          { value: "6+ to 3 steps", label: "Shortened path to confirmation with clear intent separation" },
          { value: "Intent-based CTAs", label: "\"Send as Gift\" and \"Get This Deal\" replaced ambiguous labels" },
          { value: "Scalable model", label: "Framework works across Puerto Rico, Panama, and Jamaica" },
        ]}
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          04 — UX WRITING OVERHAUL
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-[#D4872C] px-3 py-1 text-xs font-bold text-white">04</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">Language matters</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">UX Writing Overhaul</h2>
            <p className="mb-10 max-w-3xl text-lg text-gray-500">
              Replaced legacy terms with clearer labels. Created intent-based CTAs that match how users actually think.
            </p>
          </FadeIn>

          {/* Terminology changes — visual cards */}
          <FadeIn delay={0.1}>
            <div className="mb-10 grid gap-4 sm:grid-cols-3">
              {[
                { before: "Canje", after: "Redeem", context: "Users couldn't define this word in testing" },
                { before: "Reserva", after: "Use Now", context: "Interpreted as 'reservation' not 'activation'" },
                { before: "Realizar Compra", after: "Confirm Purchase", context: "Too formal; users hesitated" },
              ].map((term, i) => (
                <div key={i} className="rounded-xl border border-gray-200 bg-white p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-lg bg-red-50 px-3 py-1.5 text-sm font-bold text-red-500 line-through">{term.before}</span>
                    <span className="text-gray-300">&rarr;</span>
                    <span className="rounded-lg bg-emerald-50 px-3 py-1.5 text-sm font-bold text-emerald-600">{term.after}</span>
                  </div>
                  <p className="text-sm text-gray-500">{term.context}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* New CTA examples */}
          <FadeIn delay={0.15}>
            <h3 className="mb-5 text-xl font-bold text-gray-900">Intent-Based CTAs</h3>
            <div className="mb-8 flex flex-wrap gap-3">
              {["Send as Gift", "Enjoy This Experience", "Get This Deal"].map((cta) => (
                <span key={cta} className="rounded-full border-2 border-[#D4872C] px-6 py-2.5 text-sm font-bold text-[#D4872C]">{cta}</span>
              ))}
            </div>
          </FadeIn>

          <p className="text-sm font-semibold" style={{ color: BRAND }}>I authored the full UX copy framework, ran A/B nomenclature tests, and aligned all 4 departments on a unified glossary.</p>
        </div>
      </section>

      <Conclusion
        headline="Renaming three words fixed the 38% drop-off better than any feature could."
        cards={[
          { value: "3 terms renamed", label: "Canje, Reserva, Realizar Compra -- all replaced with plain language" },
          { value: "Unified glossary", label: "Sales, support, content, and marketing now speak the same language" },
          { value: "Intent-based CTAs", label: "Users self-select their path before seeing the checkout flow" },
        ]}
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          05 — UPSELLS & PERSONALIZATION
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-[#D4872C] px-3 py-1 text-xs font-bold text-white">05</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">Revenue & retention</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Upsells &amp; Retention Strategy</h2>
            <p className="mb-10 max-w-3xl text-lg text-gray-500">
              Inline upsells in cart and product pages, AI-powered recommendations, abandoned cart reactivation, and personalized &ldquo;Welcome Back&rdquo; flows.
            </p>
          </FadeIn>

          {/* Strategy cards — dark section with icons */}
          <FadeIn delay={0.1}>
            <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: "\uD83D\uDED2", title: "Inline Upsells", desc: "\"Add dessert\", \"Make it for two\" — contextual suggestions in cart" },
                { icon: "\uD83E\uDD16", title: "AI Recommendations", desc: "Browsing history + location-based personalized offers" },
                { icon: "\uD83D\uDCE7", title: "Cart Recovery", desc: "Abandoned cart reactivation emails with personalized content" },
                { icon: "\uD83D\uDC4B", title: "Welcome Back", desc: "Re-engagement flows for dormant users with location-based deals" },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-gray-200 bg-white p-5">
                  <span className="mb-3 block text-3xl">{item.icon}</span>
                  <h4 className="mb-2 text-base font-bold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <p className="text-sm font-semibold" style={{ color: BRAND }}>I designed the upsell placements, defined the recommendation logic, and created the retention email templates.</p>
        </div>
      </section>

      {/* Parallax — screenshot of the redesigned interface */}
      <HeroImage src="/portfolio/gobeyond-9.png" alt="Gustazos redesigned interface showing personalization features" />

      <Conclusion
        headline="Smart upsells and personalization turned a deals site into a discovery engine."
        cards={[
          { value: "Contextual upsells", label: "Suggestions at the right moment -- not spam, but relevance" },
          { value: "AI-powered", label: "Recommendations based on browsing history and location" },
          { value: "Re-engagement", label: "Dormant users get personalized Welcome Back flows" },
        ]}
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          06 — USER STORIES & FLOW MAPPING
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-[#D4872C] px-3 py-1 text-xs font-bold text-white">06</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">Mapping every path</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">User Stories &amp; Flow Architecture</h2>
            <p className="mb-10 max-w-3xl text-lg text-gray-500">
              Complete flow mapping for onboarding, purchase, checkout, Gustitos Link card, and card management &mdash; every edge case documented.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Flow 1: Onboarding */}
      <AnnotatedImage
        src="/portfolio/gobeyond-7.jpg"
        alt="Gustazos NextGen User Stories — Onboarding New User Flow"
        title="Flow 1 &mdash; Onboarding New User"
        annotations={[
          { label: "Sign-up simplification", desc: "Reduced required fields to accelerate first-time activation" },
          { label: "Progressive disclosure", desc: "Collect information as users need features, not upfront" },
          { label: "Trust signals", desc: "Verification badges and security indicators at every step" },
        ]}
      />

      {/* Flow 2: Purchase */}
      <AnnotatedImage
        src="/portfolio/gobeyond-8.jpg"
        alt="Gustazos NextGen User Stories — Purchase Flow"
        title="Flow 2 &mdash; Purchase Flow"
        annotations={[
          { label: "Intent split", desc: "Gift vs. self-use decision made early, not at checkout" },
          { label: "Deal discovery", desc: "Category + location filtering for faster browsing" },
          { label: "Inline upsells", desc: "Contextual add-ons that increase cart value naturally" },
        ]}
      />

      {/* Flow 3: Checkout */}
      <AnnotatedImage
        src="/portfolio/gobeyond-10.jpg"
        alt="Gustazos NextGen User Stories — Checkout Flow"
        title="Flow 3 &mdash; Checkout Flow"
        annotations={[
          { label: "3-step checkout", desc: "From 6+ steps down to 3 with clear progress indicators" },
          { label: "Gift messaging", desc: "Custom message and delivery options for gift purchases" },
          { label: "Confirmation clarity", desc: "\"Confirm Purchase\" replaces ambiguous \"Realizar Compra\"" },
        ]}
      />

      {/* Flow 4: Gustitos Link Card */}
      <AnnotatedImage
        src="/portfolio/gobeyond-11.jpg"
        alt="Gustazos NextGen User Stories — Gustitos Link Card"
        title="Flow 4 &mdash; Gustitos Link Card"
        annotations={[
          { label: "Card linking", desc: "Streamlined flow for connecting Gustitos cards to accounts" },
          { label: "Balance visibility", desc: "Clear balance display and transaction history" },
          { label: "Redemption path", desc: "One-tap redemption with the new \"Redeem\" terminology" },
        ]}
      />

      {/* Flow 5: Card Management */}
      <AnnotatedImage
        src="/portfolio/gobeyond-12.jpg"
        alt="Gustazos NextGen User Stories — Card Management"
        title="Flow 5 &mdash; Card Management"
        annotations={[
          { label: "Multi-card view", desc: "Dashboard showing all active cards with status indicators" },
          { label: "Quick actions", desc: "Swipe gestures for common actions -- check balance, redeem, share" },
          { label: "Expiry warnings", desc: "Proactive notifications before cards expire" },
        ]}
      />

      <Conclusion
        headline="Five complete user stories ensured zero grey areas between design and engineering."
        cards={[
          { value: "5 flows mapped", label: "Onboarding, purchase, checkout, card linking, card management" },
          { value: "Every edge case", label: "Error states, empty states, loading states -- all documented" },
          { value: "Handoff-ready", label: "Engineering received flows, not just screens -- reducing dev questions" },
        ]}
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          07 — DESIGN DECISIONS
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-[#D4872C] px-3 py-1 text-xs font-bold text-white">07</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">Why these choices</span>
            </div>
            <h2 className="mb-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Design Decisions</h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-3">
              <DecisionCard
                decision="Split gift and self-use at intent level, not checkout"
                why="Users who decided early had 3x higher completion. Forcing the decision at checkout (like competitors) caused 38% abandonment."
                result="Checkout completion rate improved significantly"
              />
              <DecisionCard
                decision="Replace all legacy Spanish UX terms with plain-language equivalents"
                why="30+ user interviews showed 'Canje' and 'Reserva' created confusion. Tooltips were a band-aid, not a fix."
                result="Support tickets about terminology dropped dramatically"
              />
              <DecisionCard
                decision="Build a scalable design system before launching new markets"
                why="Without a shared framework, each market launch required months of custom work. A design system made expansion repeatable."
                result="Panama and Jamaica launches used the same component library"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━ IMPACT — dark bg, big numbers ━━━ */}
      <section className="bg-gray-950 py-24">
        <div className="mx-auto max-w-6xl px-8 text-center">
          <FadeIn>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4872C]">Impact</p>
            <h2 className="mb-12 text-4xl font-bold text-white sm:text-5xl">The numbers speak.</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid gap-8 sm:grid-cols-4">
              {[
                { value: "38% \u2192 reduced", label: "Checkout drop-off addressed at the gift vs. use-now decision" },
                { value: "6+ \u2192 3", label: "Steps to purchase confirmation" },
                { value: "3 markets", label: "Puerto Rico, Panama, Jamaica using one scalable framework" },
                { value: "4 depts aligned", label: "Sales, support, content, marketing speaking the same language" },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-4xl font-bold text-[#F5B041] sm:text-5xl">{m.value}</p>
                  <p className="mt-3 text-sm text-white/50">{m.label}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━ WHAT I'D DO DIFFERENTLY ━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <h2 className="mb-8 text-3xl font-bold text-gray-900">What I&apos;d Do Differently</h2>
            <div className="space-y-6 border-l-4 border-[#D4872C]/30 pl-8">
              <div>
                <h3 className="mb-1 text-lg font-bold text-gray-900">Run A/B tests on terminology earlier</h3>
                <p className="text-base text-gray-500">We validated terminology through interviews and usability tests, but quantitative A/B testing on the live site earlier would have given us conversion data sooner and built a stronger case for stakeholders.</p>
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-gray-900">Include merchant-side research from day one</h3>
                <p className="text-base text-gray-500">We focused heavily on consumer UX. The merchant experience (deal creation, redemption tracking) had its own terminology problems that we discovered late. Starting with both sides would have saved rework.</p>
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-gray-900">Build the design system concurrently, not after</h3>
                <p className="text-base text-gray-500">We designed flows first and extracted a system later. Building the system alongside the flows would have accelerated the Jamaica launch by weeks.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━ CLOSING QUOTE ━━━ */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-8 text-center">
          <FadeIn>
            <p className="text-2xl font-light leading-relaxed text-gray-600 italic">
              &ldquo;The biggest design wins aren&apos;t visual &mdash; they&apos;re linguistic. Renaming three words fixed what six months of feature development couldn&apos;t. When users understand what they&apos;re doing, they do it.&rdquo;
            </p>
            <p className="mt-6 text-sm font-semibold text-gray-400">&mdash; Kay, reflecting on the Gustazos redesign</p>
          </FadeIn>
        </div>
      </section>

      {/* ━━━ FOOTER NAV ━━━ */}
      <section className="border-t border-gray-100 py-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8">
          <Link href="/portfolio" className="group flex items-center gap-2 text-sm font-semibold text-gray-400 transition-colors hover:text-gray-900">
            <span className="transition-transform group-hover:-translate-x-1">&larr;</span> All Projects
          </Link>
          <Link href="/portfolio/yappy" className="group flex items-center gap-2 text-sm font-semibold text-gray-400 transition-colors hover:text-gray-900">
            Next: Yappy <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   COMPONENTS
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function HeroImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.97]);

  return (
    <figure ref={ref} className="relative mb-4 overflow-hidden">
      <motion.div style={{ y, scale }}>
        <Image src={src} alt={alt} width={1800} height={1100} className="w-full h-auto" sizes="100vw" quality={90} />
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
    <div className="rounded-xl bg-[#D4872C]/5 border border-[#D4872C]/15 p-5 text-center">
      <div className="text-2xl font-bold text-[#D4872C]">{value}</div>
      <div className="mt-1 text-sm text-gray-500">{label}</div>
    </div>
  );
}

function DecisionCard({ decision, why, result }: { decision: string; why: string; result: string }) {
  return (
    <FadeIn>
      <div className="flex h-full flex-col rounded-2xl border border-gray-200 p-6">
        <div className="mb-3 rounded-lg bg-gray-50 px-4 py-3 text-base font-semibold text-gray-900">{decision}</div>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-500">{why}</p>
        <div className="flex items-center gap-2 text-sm font-bold text-emerald-600">
          <span>&#10003;</span> {result}
        </div>
      </div>
    </FadeIn>
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
                  <p className="text-lg font-bold text-[#F5B041]">{c.value}</p>
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
            <Image src={src} alt={alt} width={1600} height={1000} className="w-full h-auto" sizes="(max-width: 1152px) 100vw, 1152px" />
          </div>

          {/* Annotation cards below */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {annotations.map((a, i) => (
              <div key={i} className="rounded-lg border border-gray-200 bg-white p-4">
                <div className="mb-1 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D4872C] text-[10px] font-bold text-white">{i + 1}</span>
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
