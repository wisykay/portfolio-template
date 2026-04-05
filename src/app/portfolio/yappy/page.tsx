"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function YappyCaseStudy() {
  return (
    <div className="bg-white">
      {/* Nav */}
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-5 py-3 bg-white/70 backdrop-blur-xl border-b border-black/5">
        <Link href="/portfolio" className="text-sm font-medium text-gray-400 hover:text-gray-900">&larr; Back</Link>
        <a href="https://cuboid-judge-f7d.notion.site/Yappy-Redefining-Everyday-Payments-211165a357da80deb92df42e43b798c2" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-gray-400 hover:text-gray-900">Notion &nearr;</a>
      </nav>

      {/* ━━━ HERO ━━━ */}
      <section className="relative flex min-h-dvh items-end overflow-hidden">
        {/* Background lifestyle image */}
        <div className="absolute inset-0">
          <Image
            src="/portfolio/yappy-lifestyle.jpg"
            alt="Woman holding phone with Yappy app in a Panamanian tienda"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003d7a] via-[#003d7a]/70 to-[#003d7a]/30" />
        </div>
        <div className="absolute right-8 top-28 hidden opacity-20 lg:block">
          <Image src="/portfolio/yappy-logo.png" alt="Yappy logo" width={200} height={100} />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-6xl px-8 pb-16 pt-32">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-white/50">Banco General &middot; Panama &middot; 2020</p>
            <h1 className="mb-4 text-6xl font-bold tracking-tight text-white sm:text-8xl drop-shadow-lg">Yappy</h1>
            <p className="mb-6 max-w-lg text-2xl font-light text-white/80 drop-shadow-md">
              I led the end-to-end redesign of Panama&apos;s most-used payment app — from competitive research to shipped product across 3 platforms.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/50">
              <span><strong className="text-white/80">Role:</strong> Sr. Product Designer (Lead)</span>
              <span><strong className="text-white/80">Duration:</strong> 3 months</span>
              <span><strong className="text-white/80">Team:</strong> 2 designers</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ━━━ CONTEXT ━━━ */}
      <section className="relative overflow-hidden">
        {/* Full-bleed Casco Viejo market photo */}
        <HeroImage src="/portfolio/yappy-context.jpg" alt="Casco Viejo street market in Panama City — where Yappy is everyday infrastructure" />
        <div className="py-20">
          <div className="mx-auto grid max-w-6xl gap-16 px-8 lg:grid-cols-[1fr_auto]">
            <FadeIn>
              <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900">
                1 in 3 Panamanians<br />use this app daily.
              </h2>
              <p className="max-w-lg text-xl leading-relaxed text-gray-500">
                &ldquo;Te hago un Yappy&rdquo; replaced &ldquo;I&apos;ll pay you back.&rdquo; Street vendors, taxis, restaurants, even government services — Yappy became Panama&apos;s financial infrastructure. But the product was cracking under its own success.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                <StatBlock value="1.4M" label="Users" />
                <StatBlock value="25M+" label="Txns/month" />
                <StatBlock value="3" label="Platforms" />
                <StatBlock value="0" label="Design system" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ━━━ PROCESS OVERVIEW — code-based, clean ━━━ */}
      <section className="border-y border-gray-100 bg-white py-16">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <h2 className="mb-2 text-center text-3xl font-bold text-gray-900">My Process — End to End</h2>
            <p className="mb-10 text-center text-base text-gray-500">I led every phase. Scroll down to see the artifacts from each step.</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative flex items-start justify-between overflow-x-auto pb-4">
              {/* Connecting line */}
              <div className="absolute left-[30px] right-[30px] top-[28px] h-[2px] bg-gradient-to-r from-[#0066CC] to-[#0066CC]/30 hidden sm:block" />
              {[
                { n: "01", icon: "🔍", label: "Research", sub: "Competitive analysis" },
                { n: "02", icon: "👥", label: "Personas", sub: "Workshop + archetypes" },
                { n: "03", icon: "🗺️", label: "Journeys", sub: "P2P & P2C flows" },
                { n: "04", icon: "💡", label: "Ideation", sub: "Whiteboard sessions" },
                { n: "05", icon: "📋", label: "Blueprints", sub: "Service design" },
                { n: "06", icon: "🧪", label: "Testing", sub: "Maze usability" },
                { n: "07", icon: "🎨", label: "Design", sub: "5 directions tested" },
                { n: "08", icon: "🚀", label: "Ship", sub: "3 platforms" },
              ].map((step, i) => (
                <div key={step.n} className="relative flex flex-col items-center text-center" style={{ minWidth: 90 }}>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0066CC] text-2xl shadow-lg shadow-[#0066CC]/20"
                  >
                    {step.icon}
                  </motion.div>
                  <span className="text-[11px] font-bold text-[#0066CC]">{step.n}</span>
                  <span className="mt-0.5 text-sm font-bold text-gray-900">{step.label}</span>
                  <span className="text-[11px] text-gray-400">{step.sub}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━ THE OLD APP — visual problem statement ━━━ */}
      <section className="relative overflow-hidden bg-gray-950">
        <div className="mx-auto grid max-w-6xl items-center gap-0 lg:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image src="/portfolio/yappy-problem.jpg" alt="The old confusing orange app interface" fill className="object-cover" sizes="50vw" />
          </div>
          <FadeIn>
            <div className="p-10 lg:p-16">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-400">The problem</p>
              <h2 className="mb-5 text-3xl font-bold text-white">The old app was chaos.</h2>
              <p className="mb-6 text-base leading-relaxed text-white/60">Cluttered navigation, inconsistent patterns across 3 platforms, and merchant features buried under layers of consumer UI. Users had invented workarounds — screenshotting payment confirmations because they didn&apos;t trust the app would remember.</p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-red-500/10 border border-red-500/20 px-4 py-1.5 text-sm font-semibold text-red-400">30% onboarding drop-off</span>
                <span className="rounded-full bg-red-500/10 border border-red-500/20 px-4 py-1.5 text-sm font-semibold text-red-400">3 inconsistent platforms</span>
                <span className="rounded-full bg-red-500/10 border border-red-500/20 px-4 py-1.5 text-sm font-semibold text-red-400">0 shared components</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          01 — BENCHMARK RESEARCH — visual-first
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-[#0066CC] px-3 py-1 text-xs font-bold text-white">01</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">Where I started</span>
            </div>
            <h2 className="mb-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Benchmark Research</h2>
          </FadeIn>

          {/* Competitor landscape — visual grid */}
          <FadeIn delay={0.1}>
            <div className="mb-10 grid gap-4 sm:grid-cols-3">
              <CompetitorCard name="Zelle" country="USA" users="80M+" model="Bank-to-bank P2P" strength="Speed — instant transfers" weakness="No merchant features" color="#6C1CD3" />
              <CompetitorCard name="Nequi" country="Colombia" users="17M+" model="Digital wallet + P2P" strength="Young user acquisition" weakness="Complex onboarding" color="#E6007E" />
              <CompetitorCard name="Sinpe Móvil" country="Costa Rica" users="4M+" model="Interbank mobile" strength="Bank interoperability" weakness="Basic UX, no QR" color="#005DA6" />
            </div>
          </FadeIn>

          {/* Key numbers from research */}
          <FadeIn delay={0.15}>
            <div className="mb-10 grid gap-4 sm:grid-cols-4">
              <ResearchStat value="6" label="Competitors analyzed" />
              <ResearchStat value="4" label="Payment models mapped" />
              <ResearchStat value="3" label="Stakeholder presentations" />
              <ResearchStat value="1" label="Strategic pivot: SMB-first" />
            </div>
          </FadeIn>

          {/* The insight that changed direction */}
          <FadeIn delay={0.2}>
            <div className="rounded-2xl border border-[#0066CC]/20 bg-[#0066CC]/5 p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                <div className="flex-1">
                  <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#0066CC]">Key Insight</p>
                  <p className="text-xl font-bold text-gray-900">Competitors were racing to add features. Merchants were asking for simplicity.</p>
                  <p className="mt-3 text-base text-gray-500">I identified that the strategic focus should be SMBs — tiendas, food trucks, Instagram shops — not enterprise. This reframing was presented to VP of Product and became the project north star.</p>
                </div>
                {/* Ecosystem diagram - circular */}
                <div className="shrink-0 rounded-xl border border-gray-200 bg-white p-5 text-center">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">Yappy Ecosystem</p>
                  <svg viewBox="0 0 200 200" width="180" height="180" className="mx-auto">
                    {/* Outer ring - Enterprise */}
                    <circle cx="100" cy="100" r="90" fill="none" stroke="#0066CC" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.25" />
                    <text x="100" y="18" textAnchor="middle" fontSize="9" fontWeight="600" fill="#0066CC" opacity="0.5">Enterprise</text>
                    {/* Marketplace ring */}
                    <circle cx="100" cy="100" r="68" fill="#0066CC" opacity="0.06" />
                    <circle cx="100" cy="100" r="68" fill="none" stroke="#0066CC" strokeWidth="1.5" opacity="0.2" />
                    <text x="100" y="40" textAnchor="middle" fontSize="9" fontWeight="600" fill="#0066CC" opacity="0.6">Marketplace</text>
                    {/* SMB ring */}
                    <circle cx="100" cy="100" r="48" fill="#0066CC" opacity="0.1" />
                    <circle cx="100" cy="100" r="48" fill="none" stroke="#0066CC" strokeWidth="1.5" opacity="0.35" />
                    <text x="100" y="60" textAnchor="middle" fontSize="9" fontWeight="700" fill="#0066CC" opacity="0.8">SMB</text>
                    {/* Core - P2P */}
                    <circle cx="100" cy="100" r="28" fill="#0066CC" />
                    <text x="100" y="97" textAnchor="middle" fontSize="13" fontWeight="800" fill="white">P2P</text>
                    <text x="100" y="109" textAnchor="middle" fontSize="7" fontWeight="600" fill="white" opacity="0.7">CORE</text>
                    {/* Connecting dots on rings */}
                    <circle cx="100" cy="32" r="3" fill="#0066CC" opacity="0.3" />
                    <circle cx="100" cy="52" r="3" fill="#0066CC" opacity="0.5" />
                    <circle cx="148" cy="100" r="3" fill="#0066CC" opacity="0.5" />
                    <circle cx="52" cy="100" r="3" fill="#0066CC" opacity="0.5" />
                    <circle cx="168" cy="100" r="3" fill="#0066CC" opacity="0.3" />
                    <circle cx="32" cy="100" r="3" fill="#0066CC" opacity="0.3" />
                    {/* Promo label */}
                    <text x="170" y="78" textAnchor="middle" fontSize="7" fontWeight="600" fill="#0066CC" opacity="0.4">Promo</text>
                  </svg>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Conclusion */}
          <FadeIn delay={0.25}>
            <div className="mt-10 rounded-2xl bg-gray-950 p-8">
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-white/40">Conclusion</p>
              <h3 className="mb-4 text-xl font-bold text-white">Every competitor was building for banks. Nobody was building for the tienda owner.</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg bg-white/5 p-4">
                  <p className="text-2xl font-bold text-[#60AFFF]">SMB</p>
                  <p className="mt-1 text-sm text-white/50">Strategic focus — food trucks, Instagram shops, corner stores</p>
                </div>
                <div className="rounded-lg bg-white/5 p-4">
                  <p className="text-2xl font-bold text-[#60AFFF]">Simplicity</p>
                  <p className="mt-1 text-sm text-white/50">Not more features — fewer steps. Answer &ldquo;¿Me pagaron?&rdquo; instantly.</p>
                </div>
                <div className="rounded-lg bg-white/5 p-4">
                  <p className="text-2xl font-bold text-[#60AFFF]">Unified</p>
                  <p className="mt-1 text-sm text-white/50">One design system across iOS, Android, Web — competitors had none</p>
                </div>
              </div>
              <p className="mt-5 text-sm text-white/40">This reframing was approved by VP of Product and Head of Digital Banking. It shaped every design decision that followed.</p>
            </div>
          </FadeIn>

          <p className="mt-6 text-sm font-semibold text-[#0066CC]">I owned the entire research phase. Built the competitive deck, presented to leadership, and got buy-in for the SMB-first strategy.</p>
        </div>
      </section>

      {/* The actual stakeholder deck */}
      <AnnotatedImage
        src="/portfolio/yappy-a4b.jpg"
        alt="Benchmark research"
        title="Stakeholder Deck — 6 Slides"
        annotations={[
          { label: "P2P Competitors", desc: "Mapped Zelle, Nequi, Sinpe Móvil and their onboarding/payment models" },
          { label: "Payment Models", desc: "P2P, QR commercial, Link de cobro, eCommerce button" },
          { label: "SMB Focus", desc: "tiendas, food trucks, Instagram shops, independientes" },
          { label: "Yappy Ecosystem", desc: "5 layers: P2P → SMB → Marketplace → Enterprise → Promo" },
        ]}
      />

      {/* ━━━ 02 — PERSONAS ━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-[#0066CC] px-3 py-1 text-xs font-bold text-white">02</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">Stakeholder workshop</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Archetypes & Persona Workshop</h2>
            <p className="mb-10 max-w-3xl text-lg text-gray-500">I designed and facilitated a 60-minute cross-functional workshop. 7 people — product, engineering, CS. Each group assigned an archetype, 30 minutes to map behaviors, then present.</p>
          </FadeIn>

          {/* Context stats — why these personas matter */}
          <FadeIn delay={0.1}>
            <div className="mb-10 grid gap-3 sm:grid-cols-4">
              <div className="rounded-xl border border-gray-200 bg-white p-4 text-center">
                <div className="text-2xl font-bold text-[#0066CC]">49%</div>
                <div className="mt-1 text-xs text-gray-500">of Panama&apos;s workforce is informal</div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4 text-center">
                <div className="text-2xl font-bold text-[#0066CC]">57%</div>
                <div className="mt-1 text-xs text-gray-500">of informal businesses are women-owned</div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4 text-center">
                <div className="text-2xl font-bold text-[#0066CC]">78%</div>
                <div className="mt-1 text-xs text-gray-500">of LATAM users send P2P payments</div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4 text-center">
                <div className="text-2xl font-bold text-[#0066CC]">88%</div>
                <div className="mt-1 text-xs text-gray-500">Panama mobile broadband penetration</div>
              </div>
            </div>
          </FadeIn>

          {/* Persona cards — side by side, one viewport */}
          <FadeIn delay={0.15}>
            <div className="grid gap-6 lg:grid-cols-2">
              {/* ARTURO */}
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
                <div className="flex items-start gap-4 p-5">
                  <Image src="/portfolio/yappy-persona-arturo.jpg" alt="Arturo" width={80} height={80} className="h-20 w-20 shrink-0 rounded-xl object-cover" sizes="80px" />
                  <div className="flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="rounded bg-[#0066CC]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0066CC]">The Daily Sender</span>
                    </div>
                    <h3 className="mb-0.5 text-xl font-bold text-gray-900">Arturo, 41</h3>
                    <p className="mb-3 text-sm text-gray-400">Office worker &middot; Panama City</p>
                    <div className="mb-3 space-y-1.5 text-sm">
                      <p className="text-gray-600"><span className="font-semibold text-emerald-600">Goal:</span> Send money to family instantly</p>
                      <p className="text-gray-600"><span className="font-semibold text-red-500">Pain:</span> Different UI on his Android vs. wife&apos;s iPhone</p>
                      <p className="text-gray-600"><span className="font-semibold text-amber-600">Behavior:</span> Uses Yappy 3-5x daily, splits dinner bills</p>
                    </div>
                    <blockquote className="rounded-lg bg-[#0066CC]/5 px-3 py-2 text-sm italic text-[#0066CC]">
                      &ldquo;Solo quiero enviarle dinero a mi familia rápido.&rdquo;
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* XIOMARA */}
              <div className="overflow-hidden rounded-2xl border-2 border-orange-200 bg-white">
                <div className="flex items-start gap-4 p-5">
                  <Image src="/portfolio/yappy-persona-xiomara.jpg" alt="Xiomara" width={80} height={80} className="h-20 w-20 shrink-0 rounded-xl object-cover" sizes="80px" />
                  <div className="flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="rounded bg-orange-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-orange-700">The Reluctant Merchant</span>
                      <span className="rounded bg-red-100 px-1.5 py-0.5 text-[10px] font-bold text-red-600">PRIMARY</span>
                    </div>
                    <h3 className="mb-0.5 text-xl font-bold text-gray-900">Xiomara, 34</h3>
                    <p className="mb-3 text-sm text-gray-400">Artesana &middot; Casco Viejo, Panama</p>
                    <div className="mb-3 space-y-1.5 text-sm">
                      <p className="text-gray-600"><span className="font-semibold text-emerald-600">Goal:</span> Accept digital payments for handmade jewelry</p>
                      <p className="text-gray-600"><span className="font-semibold text-red-500">Pain:</span> Merchant features too hidden, too many steps</p>
                      <p className="text-gray-600"><span className="font-semibold text-amber-600">Behavior:</span> Sells on Instagram, Yappy is 75-100% of income</p>
                    </div>
                    <blockquote className="rounded-lg bg-orange-50 px-3 py-2 text-sm italic text-orange-800">
                      &ldquo;No quiero que me paguen en efectivo, pero Yappy es muy complicado.&rdquo;
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Why Xiomara was primary */}
          <FadeIn delay={0.2}>
            <div className="mt-6 rounded-xl border border-orange-200 bg-orange-50/50 p-5">
              <p className="text-sm text-orange-900"><strong>Why Xiomara was our primary persona:</strong> 57% of Panama&apos;s informal businesses are women-owned. These enterprises represent 75-100% of household income. If Yappy&apos;s P2C experience doesn&apos;t work for Xiomara, it fails the segment with the most to gain — and the most to lose.</p>
            </div>
          </FadeIn>

          <p className="mt-6 text-sm font-semibold text-[#0066CC]">I designed the workshop format, facilitated the session, and synthesized outputs into formal persona documents.</p>
        </div>
      </section>

      {/* Workshop artifacts */}
      <AnnotatedImage
        src="/portfolio/yappy-frame4.jpg"
        alt="Persona workshop"
        title="Workshop in Action"
        annotations={[
          { label: "Sticky Note Wall", desc: "Physical outputs from 7-person cross-functional session — product, engineering, CS" },
          { label: "Group Ideation", desc: "30min per archetype: discuss behaviors → propose screens → present journey to room" },
          { label: "CS Insight", desc: "Customer support flagged onboarding pain points invisible in analytics data" },
          { label: "Eng Constraint", desc: "QR generation speed flagged as technical constraint — shaped our design from day one" },
        ]}
      />
      <Conclusion
        headline="The workshop revealed what analytics couldn't."
        cards={[
          { value: "Xiomara", label: "The reluctant merchant — solo entrepreneurs afraid of complexity. She became our design compass." },
          { value: "CS ≠ Data", label: "Customer support saw friction that dashboards missed — real human pain, not metrics" },
          { value: "QR Speed", label: "Engineering flagged 3-sec QR delay in the workshop — we designed around it from day one" },
        ]}
      />

      {/* ━━━ 03 — USER JOURNEYS ━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-[#0066CC] px-3 py-1 text-xs font-bold text-white">03</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">From interviews to maps</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">User Journey Mapping</h2>
            <p className="mb-10 max-w-3xl text-lg text-gray-500">I created Alicia — a composite merchant persona from 12 interviews. Then mapped her two payment flows side by side to find where the experience broke.</p>
          </FadeIn>

          {/* Alicia intro card */}
          <FadeIn delay={0.1}>
            <div className="mb-8 rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-2xl">👩🏽</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">&ldquo;¡Hola, soy Alicia y me encantan los accesorios!&rdquo;</h3>
                  <p className="mt-1 text-sm text-gray-600">Makes bracelets and earrings. Banco General savings account. Wants customers to pay via Yappy because cash is a hassle.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Journey Map Chart — proper UX format */}
          <FadeIn delay={0.15}>
            <div className="mb-8 overflow-x-auto rounded-2xl border border-gray-200 bg-white">
              <JourneyMapChart />
            </div>
          </FadeIn>

          <p className="text-sm font-semibold text-[#0066CC]">I conducted 12 merchant interviews, built the composite personas, and created the journey maps that defined our design priorities.</p>
        </div>
      </section>

      {/* The actual journey map artifact */}
      <AnnotatedImage
        src="/portfolio/yappy-frame3.jpg"
        alt="User journey mapping"
        title="Journey Map — Alicia&apos;s P2C Flow"
        annotations={[
          { label: "Alicia", desc: "Composite persona from 12 merchant interviews — sells accessories via Instagram" },
          { label: "Proactive Flow", desc: "6 steps, 4-screen drop-off. Buyer-initiated = too much friction" },
          { label: "Reactive Flow", desc: "4 steps, merchant-initiated. This became our primary design direction" },
          { label: "The Pivot", desc: "We flipped from 'help buyers find sellers' to 'help sellers request payment'" },
        ]}
      />
      <Conclusion
        headline="The valley is where we lost users. The peak is why they came back."
        cards={[
          { value: "😰 → 🤩", label: "Emotion drops to 15% at confirm (spinner), recovers to 92% when merchant sees '¡Me pagaron!'" },
          { value: "The Peak", label: "Marlene's push notification — +$45.00 — is the single moment that creates trust and repeat usage" },
          { value: "Referral Loop", label: "Happy merchants share Yappy links on Instagram → organic growth. Design the peak, grow the product." },
        ]}
      />

      {/* ━━━ KEY INSIGHT ━━━ */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0">
          <Image
            src="/portfolio/yappy-merchant.jpg"
            alt="Food truck vendor accepting Yappy QR payment at sunset in Panama City"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#003d7a]/80 backdrop-blur-[2px]" />
        </div>
        <FadeIn>
          <blockquote className="relative z-10 mx-auto max-w-4xl px-8 text-center">
            <p className="text-3xl font-bold leading-snug text-white sm:text-5xl drop-shadow-lg">
              &ldquo;Merchants check Yappy<br />15-20 times a day.<br />Always for one thing:<br /><em className="text-[#60AFFF]">¿Me pagaron?</em>&rdquo;
            </p>
            <footer className="mt-8 text-sm text-white/50">Insight from 12 merchant interviews I conducted</footer>
          </blockquote>
        </FadeIn>
      </section>

      {/* ━━━ 04 — IDEATION ━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-[#0066CC] px-3 py-1 text-xs font-bold text-white">04</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">Whiteboard sessions</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ideation & Roadmap</h2>
            <p className="mb-12 max-w-3xl text-lg text-gray-500">I pinned the old orange Evaristo app on the wall — our anti-pattern. Then mapped every flow on the whiteboard in three columns.</p>
          </FadeIn>

          {/* Flow columns — minimal, text-only */}
          <FadeIn delay={0.1}>
            <div className="mb-14 grid gap-px overflow-hidden rounded-xl border border-gray-200 sm:grid-cols-3">
              {[
                { title: "Actuales", sub: "What exists today", items: ["Mostrar menú", "Mostrar ID", "Validar contactos", "Elegir listero P2P o no"] },
                { title: "Send", sub: "Sending money", items: ["Enviar dinero por P2P", "Enviar a haven banco", "Cambiar dirección", "Verificar solicitud"] },
                { title: "Request", sub: "Requesting payment", items: ["Solicitar dinero por P2P", "Crear info. de solicitud", "Recibir notificación", "Checkpay por envio"] },
              ].map((col, i) => (
                <div key={i} className="bg-white p-6">
                  <h3 className="text-lg font-bold text-gray-900">{col.title}</h3>
                  <p className="mb-4 text-sm text-gray-400">{col.sub}</p>
                  {col.items.map((item, j) => (
                    <p key={j} className="border-t border-gray-50 py-2 text-sm text-gray-600">{item}</p>
                  ))}
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Engineering debate — clean, no colored boxes */}
          <FadeIn delay={0.15}>
            <div className="mb-14">
              <h3 className="mb-6 text-xl font-bold text-gray-900">The QR Debate</h3>
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-12">
                <div className="flex-1 text-center sm:text-right">
                  <p className="text-sm font-semibold text-gray-400">Engineering said</p>
                  <p className="mt-1 text-4xl font-bold text-gray-900">3 seconds</p>
                  <p className="mt-1 text-sm text-gray-500">&ldquo;Unavoidable server round-trip&rdquo;</p>
                </div>
                <div className="flex h-16 w-px items-center bg-gray-200 sm:h-auto sm:w-px">
                  <span className="absolute rounded-full bg-white px-2 text-xs font-bold text-gray-400">vs</span>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-sm font-semibold text-[#0066CC]">I pushed for</p>
                  <p className="mt-1 text-4xl font-bold text-gray-900">&lt;500ms</p>
                  <p className="mt-1 text-sm text-gray-500">&ldquo;Merchants can&apos;t wait with a customer standing there&rdquo;</p>
                </div>
              </div>
              <p className="mt-8 text-center text-base text-gray-700"><strong>Compromise:</strong> Pre-generate QR on app launch. Instant at point of sale. Both sides won.</p>
            </div>
          </FadeIn>

          {/* Roadmap — Kanban style */}
          <FadeIn delay={0.2}>
            <h3 className="mb-6 text-xl font-bold text-gray-900">Phased Roadmap</h3>
            <div className="mb-4 grid gap-4 sm:grid-cols-3">
              {[
                { month: "May", phase: "Discovery", count: 4, color: "#0066CC", items: [
                  { text: "Merchant interviews", tag: "Research" },
                  { text: "Ideation workshop", tag: "Workshop" },
                  { text: "Wireframes & archetypes", tag: "Design" },
                  { text: "MVP scope definition", tag: "Strategy" },
                ]},
                { month: "Sep", phase: "Pilot — 500 merchants", count: 3, color: "#d97706", items: [
                  { text: "Crear identificador (alias)", tag: "Build" },
                  { text: "Recibir pagos via QR", tag: "Build" },
                  { text: "Reporte de conciliación", tag: "Build" },
                ]},
                { month: "Oct", phase: "National Launch", count: 4, color: "#059669", items: [
                  { text: "Push notifications", tag: "Feature" },
                  { text: "Dividir cuentas", tag: "Feature" },
                  { text: "Payment groups", tag: "Feature" },
                  { text: "Esquema de cobro", tag: "Feature" },
                ]},
              ].map((col) => (
                <div key={col.month} className="flex flex-col rounded-xl bg-gray-50">
                  {/* Column header */}
                  <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full" style={{ background: col.color }} />
                      <span className="text-sm font-bold text-gray-900">{col.month}</span>
                      <span className="text-sm text-gray-400">{col.phase}</span>
                    </div>
                    <span className="rounded-full bg-gray-200 px-2 py-0.5 text-[11px] font-semibold text-gray-500">{col.count}</span>
                  </div>
                  {/* Cards */}
                  <div className="flex flex-col gap-2 px-2 pb-3">
                    {col.items.map((item, j) => (
                      <div key={j} className="rounded-lg bg-white px-3 py-2.5 shadow-sm">
                        <p className="text-sm text-gray-700">{item.text}</p>
                        <span className="mt-1.5 inline-block rounded px-1.5 py-0.5 text-[10px] font-semibold" style={{ background: col.color + '12', color: col.color }}>{item.tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400">Approved by product committee. Phased to de-risk — no big bang launch.</p>
          </FadeIn>

          <p className="mt-8 text-sm font-semibold text-[#0066CC]">I ran every whiteboard session, resolved the QR debate, and authored the roadmap.</p>
        </div>
      </section>

      {/* The actual whiteboard photo */}
      <AnnotatedImage
        src="/portfolio/yappy-frame2.jpg"
        alt="Ideation sessions"
        title="Whiteboard Session — Raw Artifacts"
        annotations={[
          { label: "Old Evaristo App", desc: "Pinned on the wall — our constant anti-pattern reminder" },
          { label: "P2P Flow Map", desc: "Three columns: Actuales, Send, Request" },
          { label: "Eng. Handwriting", desc: "The messy notes = engineering pushing back. Productive tension." },
          { label: "Roadmap", desc: "May → Sep PILOTO → Oct Launch" },
        ]}
      />
      <Conclusion
        headline="The roadmap survived because engineering co-authored it."
        cards={[
          { value: "Pre-gen QR", label: "The compromise: instant display with existing architecture. Both sides won." },
          { value: "500 → All", label: "Pilot de-risked the launch. Graduated rollout, not big bang." },
          { value: "Anti-pattern", label: "Old Evaristo on the wall kept every session honest" },
        ]}
      />

      {/* ━━━ 05 — BLUEPRINTS ━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-[#0066CC] px-3 py-1 text-xs font-bold text-white">05</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">Service design</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Service Blueprints</h2>
            <p className="mb-12 max-w-3xl text-lg text-gray-500">Two sessions — sticky notes on the office wall, then translated into a formal blueprint. This became the handoff contract between design and engineering.</p>
          </FadeIn>

          {/* Blueprint diagram — swim lanes */}
          <FadeIn delay={0.1}>
            <div className="mb-12 overflow-x-auto">
              <div className="min-w-[700px]">
                {/* Column headers */}
                <div className="mb-1 grid grid-cols-[120px_1fr_1fr_1fr_1fr_1fr] gap-px">
                  <div />
                  {["Opens app", "Scans QR", "Confirms amount", "Processes", "Receives receipt"].map(h => (
                    <div key={h} className="bg-gray-50 px-3 py-2 text-center text-xs font-bold uppercase tracking-wider text-gray-400">{h}</div>
                  ))}
                </div>

                {/* Lanes */}
                {[
                  { lane: "User Actions", color: "#fbbf24", items: ["Taps Yappy icon", "Points camera at QR code", "Reviews amount, taps Confirmar", "Waits for feedback", "Sees ¡Pago exitoso!"] },
                  { lane: "Frontstage", color: "#34d399", items: ["Loads home + pre-gen QR", "Decodes QR → merchant lookup", "Shows amount + merchant name", "Sends to payment API", "Sound + haptic + receipt"] },
                  { lane: "Backstage", color: "#f472b6", items: ["Auth token refresh", "Merchant DB query", "Balance validation", "Banco General ledger", "Push notification to merchant"] },
                  { lane: "Support", color: "#fb923c", items: ["—", "Camera permission error", "Insufficient funds message", "Smart error + 10s 'still stuck?'", "Transaction history saved"] },
                ].map((row) => (
                  <div key={row.lane} className="grid grid-cols-[120px_1fr_1fr_1fr_1fr_1fr] gap-px">
                    <div className="flex items-center gap-2 py-3 pr-2">
                      <div className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: row.color }} />
                      <span className="text-xs font-bold text-gray-700">{row.lane}</span>
                    </div>
                    {row.items.map((item, j) => (
                      <div key={j} className="border-t border-gray-100 px-3 py-3">
                        <p className="text-[12px] text-gray-600">{item}</p>
                      </div>
                    ))}
                  </div>
                ))}

                {/* Line of visibility */}
                <div className="mt-1 grid grid-cols-[120px_1fr] gap-px">
                  <div className="flex items-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-300">Visibility line</span>
                  </div>
                  <div className="border-t-2 border-dashed border-gray-300" />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* The CS debate — chat style */}
          <FadeIn delay={0.15}>
            <div className="mb-8">
              <h3 className="mb-6 text-xl font-bold text-gray-900">The Error-Handling Debate</h3>
              <div className="mx-auto max-w-lg space-y-3">
                {/* CS — left aligned */}
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-500">CS</div>
                  <div>
                    <div className="rounded-2xl rounded-tl-sm bg-gray-100 px-4 py-2.5">
                      <p className="text-sm text-gray-700">We need a &ldquo;Call us&rdquo; button on every error screen. Users get stuck and they need a human.</p>
                    </div>
                    <p className="mt-1 pl-1 text-[11px] text-gray-300">CS Lead</p>
                  </div>
                </div>

                {/* Kay — right aligned */}
                <div className="flex flex-row-reverse gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0066CC] text-xs font-bold text-white">K</div>
                  <div className="flex flex-col items-end">
                    <div className="rounded-2xl rounded-tr-sm bg-[#0066CC] px-4 py-2.5">
                      <p className="text-sm text-white">If we need a call button, we&apos;ve already failed. The error message itself should resolve the problem.</p>
                    </div>
                    <p className="mt-1 pr-1 text-[11px] text-gray-300">Kay (me)</p>
                  </div>
                </div>

                {/* CS pushback */}
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-500">CS</div>
                  <div>
                    <div className="rounded-2xl rounded-tl-sm bg-gray-100 px-4 py-2.5">
                      <p className="text-sm text-gray-700">But we get 200+ calls a week about payment errors. People panic when money is involved.</p>
                    </div>
                  </div>
                </div>

                {/* Kay counter */}
                <div className="flex flex-row-reverse gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0066CC] text-xs font-bold text-white">K</div>
                  <div className="flex flex-col items-end">
                    <div className="rounded-2xl rounded-tr-sm bg-[#0066CC] px-4 py-2.5">
                      <p className="text-sm text-white">Exactly — they panic because the current errors say &ldquo;Something went wrong.&rdquo; That&apos;s not an error message, that&apos;s an anxiety trigger. Let me rewrite every error with what happened + what to do.</p>
                    </div>
                  </div>
                </div>

                {/* CS considers */}
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-500">CS</div>
                  <div>
                    <div className="rounded-2xl rounded-tl-sm bg-gray-100 px-4 py-2.5">
                      <p className="text-sm text-gray-700">Ok but what if the smart message still doesn&apos;t help?</p>
                    </div>
                  </div>
                </div>

                {/* Kay compromise */}
                <div className="flex flex-row-reverse gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0066CC] text-xs font-bold text-white">K</div>
                  <div className="flex flex-col items-end">
                    <div className="rounded-2xl rounded-tr-sm bg-[#0066CC] px-4 py-2.5">
                      <p className="text-sm text-white">Then a &ldquo;Still stuck?&rdquo; link appears — but only after 10 seconds. Not as the first option. Let the design solve it first.</p>
                    </div>
                  </div>
                </div>

                {/* Resolution */}
                <div className="mt-4 flex justify-center">
                  <div className="rounded-full bg-gray-900 px-5 py-2">
                    <p className="text-sm font-semibold text-white">Agreed. Shipped this way.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <p className="text-sm font-semibold text-[#0066CC]">I facilitated both sessions, resolved the error debate, and owned the final documentation.</p>
        </div>
      </section>

      {/* The actual blueprint photos */}
      <AnnotatedImage
        src="/portfolio/yappy-frame5.jpg"
        alt="Service blueprints"
        title="Blueprint Artifacts — Physical → Digital"
        annotations={[
          { label: "Office Wall", desc: "Full team sticky-note session — yellow, green, pink, orange per lane" },
          { label: "Digital Blueprint", desc: "Translated into formal grid — the contract between design and engineering" },
          { label: "Color System", desc: "Yellow = user, Green = frontstage, Pink = backstage, Orange = support" },
        ]}
      />
      <Conclusion
        headline="The blueprint killed ambiguity between design and engineering."
        cards={[
          { value: "0 grey areas", label: "Every edge case documented — no 'what should happen when?' during dev" },
          { value: "Error ≠ call us", label: "Smart errors that self-resolve. Support link only after 10 seconds." },
          { value: "Sticky → Contract", label: "Fast thinking on the wall. Formal blueprint as the handoff. Both matter." },
        ]}
      />

      {/* ━━━ 06 — TESTING ━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-[#0066CC] px-3 py-1 text-xs font-bold text-white">06</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">Weekly validation</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Usability Testing</h2>
            <p className="mb-10 max-w-3xl text-lg text-gray-500">Weekly Maze sessions with real P2P and P2C users. Two test tasks in Spanish — the actual language users would encounter.</p>
          </FadeIn>

          {/* Test tasks */}
          <FadeIn delay={0.1}>
            <div className="mb-10 space-y-3">
              {[
                "¿Cómo le enviarías dinero a @creacionesmarlene?",
                "Si eres la dueña de @creacionesmarlene, ¿cómo cambiarías entre tu perfil personal y tu perfil Yappy?",
              ].map((task, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-gray-100 text-xs font-bold text-gray-500">T{i + 1}</span>
                  <p className="text-base italic text-gray-700">&ldquo;{task}&rdquo;</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Results — dashboard style */}
          <FadeIn delay={0.15}>
            <div className="mb-10 grid gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 sm:grid-cols-4">
              {[
                { value: "7/10", label: "Usability Score", sub: "4 blocks, 3 testers/round", status: "ok" },
                { value: "100%", label: "Direct Success", sub: "Every tester completed the flow", status: "good" },
                { value: "24.4%", label: "Misclick Rate", sub: "Confirm/cancel too close", status: "bad" },
                { value: "387s", label: "Avg Duration", sub: "6.4 min per task", status: "ok" },
              ].map((m) => (
                <div key={m.label} className="bg-white p-5">
                  <p className={`text-3xl font-bold ${m.status === 'good' ? 'text-emerald-600' : m.status === 'bad' ? 'text-red-500' : 'text-gray-900'}`}>{m.value}</p>
                  <p className="mt-1 text-sm font-semibold text-gray-700">{m.label}</p>
                  <p className="mt-0.5 text-xs text-gray-400">{m.sub}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* The fix — before/after */}
          <FadeIn delay={0.2}>
            <h3 className="mb-5 text-xl font-bold text-gray-900">The Fix That PM Called &ldquo;Too Simple&rdquo;</h3>
            <div className="mb-6 flex flex-col items-center gap-6 sm:flex-row sm:gap-12">
              <div className="flex-1 text-center sm:text-right">
                <p className="text-sm font-semibold text-gray-400">Before</p>
                <p className="mt-1 text-4xl font-bold text-red-500">24.4%</p>
                <p className="mt-1 text-sm text-gray-500">misclick rate</p>
                <p className="mt-1 text-xs text-gray-400">Confirm and Cancel 12px apart</p>
              </div>
              <div className="text-3xl text-gray-300">&rarr;</div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-sm font-semibold text-emerald-600">After</p>
                <p className="mt-1 text-4xl font-bold text-emerald-600">6%</p>
                <p className="mt-1 text-sm text-gray-500">misclick rate</p>
                <p className="mt-1 text-xs text-gray-400">+40% spacing + confirmation animation</p>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500">Friday readouts to stakeholders every week. The data convinced the PM — not my opinion.</p>
          </FadeIn>

          <p className="mt-8 text-sm font-semibold text-[#0066CC]">I set up Maze, wrote test scripts, analyzed results, and presented to stakeholders every Friday.</p>
        </div>
      </section>
      <AnnotatedImage
        src="/portfolio/yappy-a4.jpg"
        alt="Usability testing"
        title="Maze Report — P2C Usability"
        annotations={[
          { label: "Usability Score: 7/10", desc: "Weekly unmoderated testing cadence" },
          { label: "100% Direct Success", desc: "All testers completed core P2C flow" },
          { label: "24.4% Misclick", desc: "The data point that changed the PM's mind" },
          { label: "Heatpaths", desc: "Aggregated taps showing the confirmation hotspot" },
        ]}
      />
      <Conclusion
        headline="Data won arguments that opinions couldn't."
        cards={[
          { value: "24.4% → 6%", label: "Button spacing increase: the 'too simple' fix PM initially resisted" },
          { value: "Weekly cadence", label: "Friday readouts built trust — no surprises at sprint end" },
          { value: "Sound + haptic", label: "Testing proved merchants couldn't tell payment went through" },
        ]}
      />

      {/* ━━━ 07 — UI DESIGN ━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-[#0066CC] px-3 py-1 text-xs font-bold text-white">07</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">Design exploration</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why This Direction Won</h2>
            <p className="mb-10 max-w-3xl text-lg text-gray-500">5 variations explored. Dot-voting to narrow. Maze data for the final call. And one PM debate that data settled.</p>
          </FadeIn>

          {/* Dot voting visualization */}
          <FadeIn delay={0.1}>
            <h3 className="mb-5 text-xl font-bold text-gray-900">Dot-Voting — 5 stakeholders, 3 dots each</h3>
            <div className="mb-10 space-y-3">
              {[
                { name: "Var 1", desc: "Blue header, orange CTA", dots: 1, note: "PM's pick — 'looks like a bank'" },
                { name: "Var 2", desc: "Inverted color hierarchy", dots: 2, note: null },
                { name: "Var 3", desc: "Card-based layout", dots: 3, note: null },
                { name: "Var 4", desc: "Blue gradient, prominent amount", dots: 4, note: "Winner — amount BIG, clean hierarchy" },
                { name: "Var 5", desc: "Minimal white card", dots: 1, note: null },
              ].map((v) => (
                <div key={v.name} className="flex items-center gap-4">
                  <span className="w-12 shrink-0 text-sm font-bold text-gray-900">{v.name}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <div className="h-2 rounded-full bg-gray-100" style={{ width: '100%', position: 'relative' }}>
                        <div className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${(v.dots / 5) * 100}%`, background: v.dots === 4 ? '#0066CC' : '#d1d5db' }} />
                      </div>
                      <div className="flex shrink-0 gap-1">
                        {Array.from({ length: v.dots }).map((_, i) => (
                          <div key={i} className="h-3 w-3 rounded-full" style={{ background: v.dots === 4 ? '#0066CC' : '#9ca3af' }} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="w-48 shrink-0 text-xs text-gray-400">{v.desc}</span>
                  {v.note && <span className="shrink-0 text-xs font-semibold text-[#0066CC]">{v.note}</span>}
                </div>
              ))}
            </div>
          </FadeIn>

          {/* But... the override */}
          <FadeIn delay={0.15}>
            <h3 className="mb-5 text-xl font-bold text-gray-900">But I Overruled One Thing</h3>
            <p className="mb-6 max-w-3xl text-base text-gray-600">Var 4 won the visual direction. But its CTA was mid-screen. Maze data showed bottom-anchored CTAs had <strong>30% fewer misclicks</strong>. The final design: Var 4 aesthetics + bottom CTA from Maze data.</p>
          </FadeIn>

          {/* PM debate — chat style */}
          <FadeIn delay={0.2}>
            <h3 className="mb-5 text-xl font-bold text-gray-900">The PM Debate</h3>
            <div className="mx-auto max-w-lg space-y-3 mb-8">
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-500">PM</div>
                <div>
                  <div className="rounded-2xl rounded-tl-sm bg-gray-100 px-4 py-2.5">
                    <p className="text-sm text-gray-700">I think Variation 1 is better. It looks more like a bank — more trustworthy.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row-reverse gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0066CC] text-xs font-bold text-white">K</div>
                <div className="flex flex-col items-end">
                  <div className="rounded-2xl rounded-tr-sm bg-[#0066CC] px-4 py-2.5">
                    <p className="text-sm text-white">The merchants I interviewed said: &ldquo;I need to see the amount BIG, immediately.&rdquo; Var 4 does that. Var 1 buries it under the header.</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-500">PM</div>
                <div>
                  <div className="rounded-2xl rounded-tl-sm bg-gray-100 px-4 py-2.5">
                    <p className="text-sm text-gray-700">But our brand guidelines say—</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row-reverse gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0066CC] text-xs font-bold text-white">K</div>
                <div className="flex flex-col items-end">
                  <div className="rounded-2xl rounded-tr-sm bg-[#0066CC] px-4 py-2.5">
                    <p className="text-sm text-white">Brand guidelines say &ldquo;trust through clarity.&rdquo; Showing the amount first IS trust. Here&apos;s the Maze misclick data for both layouts.</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <div className="rounded-full bg-gray-900 px-5 py-2">
                  <p className="text-sm font-semibold text-white">PM agreed. Var 4 shipped.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <p className="text-sm font-semibold text-[#0066CC]">I designed all 5 variations, ran dot-voting, and made the final call combining votes with data.</p>
        </div>
      </section>
      <AnnotatedImage
        src="/portfolio/yappy-frame1.jpg"
        alt="UI design explorations"
        title="UI Exploration — 5 Directions"
        annotations={[
          { label: "5 Variations", desc: "Each tests different hierarchy for amount, recipient, CTA" },
          { label: "Pedir Cobro Flow", desc: "10+ merchant screens: keypad, QR, link-based" },
          { label: "Var 4 Won", desc: "4/5 dots — but CTA placement overruled by Maze data" },
          { label: "Evidence > Opinion", desc: "PM debate settled with misclick data, not preference" },
        ]}
      />
      <Conclusion
        headline="The winning design wasn't the most voted — it was the most tested."
        cards={[
          { value: "Vote ≠ Truth", label: "Dot-voting picked aesthetics. Maze data picked interaction. Final = both." },
          { value: "PM pushback", label: "'Looks like a bank' lost to 'I need the amount BIG' — evidence won" },
          { value: "Hybrid", label: "Voted visual + data-proven interaction. Neither side had the full answer." },
        ]}
      />

      {/* ━━━ 08 — SHIPPED ━━━ */}
      <section className="py-20 bg-gray-950">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-gray-900">08</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-white/40">Shipped</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">The Final Product</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: "📱", title: "3 Platforms", desc: "Unified iOS, Android, Web — one design system, one experience" },
                { icon: "🔑", title: "Progressive Onboarding", desc: "8 fields → 3 contextual steps. 30% faster completion." },
                { icon: "💰", title: "'¿Me pagaron?' First", desc: "Merchant home = last payment received. Not a dashboard." },
                { icon: "🔊", title: "Sound + Haptic", desc: "QR confirmation you can hear across a noisy tienda." },
              ].map((f) => (
                <FadeIn key={f.title}>
                  <div>
                    <p className="mb-2 text-2xl">{f.icon}</p>
                    <h3 className="mb-1 text-base font-bold text-white">{f.title}</h3>
                    <p className="text-sm text-white/50">{f.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
            <p className="mt-8 text-sm font-semibold text-white/40">I owned the design system, merchant experience, cross-platform consistency, and QA.</p>
          </FadeIn>
        </div>
      </section>
      <HeroImage src="/portfolio/yappy-hero.png" alt="Final Yappy product" />

      {/* ━━━ PHONE SIMULATOR ━━━ */}
      <PhoneSimulator />

      {/* ━━━ DESIGN DECISIONS ━━━ */}
      <section className="relative overflow-hidden">
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <Image src="/portfolio/yappy-decisions.jpg" alt="Designers debating at whiteboard with sticky notes and user flows" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <h2 className="mb-12 text-3xl font-bold text-gray-900">Key Decisions</h2>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2">
            <DecisionCard
              decision="Split 8-field onboarding → 3 contextual steps"
              why="Analytics showed 30% abandoned at the verification wall. Progressive disclosure tested 2x better in Maze."
              result="30% faster onboarding"
            />
            <DecisionCard
              decision="Merchant home = last payment, not dashboard"
              why="12 merchant interviews: they check 15-20x/day for one answer. The old app buried it 3 taps deep."
              result="2x commercial user growth"
            />
            <DecisionCard
              decision="One token system, three platforms"
              why="Every button, spacing, and color was different per platform. Rebuilding the same component 3 times was killing velocity."
              result="40% faster feature rollout"
            />
            <DecisionCard
              decision="Sound + haptic on QR confirmation"
              why="Maze showed merchants couldn't tell if payment went through. Old screen: spinner. New: instant feedback you can hear across a noisy tienda."
              result="Eliminated point-of-sale disputes"
            />
          </div>
        </div>
      </section>

      {/* ━━━ IMPACT ━━━ */}
      <HeroImage src="/portfolio/yappy-impact-photo.jpg" alt="Market vendor happily showing phone after receiving Yappy payment" />
      <section className="bg-gray-950 py-24">
        <div className="mx-auto max-w-6xl px-8 text-center">
          <FadeIn>
            <h2 className="mb-16 text-4xl font-bold text-white sm:text-5xl">Impact</h2>
          </FadeIn>
          <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { v: "30%", l: "Faster onboarding", s: "Progressive disclosure" },
              { v: "2x", l: "Merchant adoption", s: "6-month growth" },
              { v: "40%", l: "Faster rollout", s: "Design system" },
              { v: "7/10", l: "Usability score", s: "100% task success" },
            ].map((m, i) => (
              <FadeIn key={m.v} delay={i * 0.08}>
                <div className="bg-gray-950 p-10">
                  <div className="text-5xl font-bold text-white">{m.v}</div>
                  <div className="mt-2 text-base font-semibold text-white/70">{m.l}</div>
                  <div className="mt-1 text-sm text-white/30">{m.s}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ WHAT I'D DO DIFFERENTLY ━━━ */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <Image src="/portfolio/yappy-reflection.jpg" alt="Panama City skyline at dusk from the Cinta Costera" fill className="object-cover opacity-10" sizes="100vw" />
        </div>
        <div className="mx-auto max-w-3xl px-8">
          <FadeIn>
            <h2 className="mb-10 text-3xl font-bold text-gray-900">What I&apos;d Do Differently</h2>
            <div className="space-y-8">
              <Reflection title="More merchant shadowing" text="Interviews gave us insights, but spending full days inside a tienda watching merchants juggle Yappy between serving customers would have surfaced patterns we missed — like how they hold the phone, where they look first, what they do when the internet drops." />
              <Reflection title="Accessibility from sprint one" text="We retrofitted WCAG compliance. For a product used by vendors aged 18 to 70 in outdoor markets with bright sunlight, accessibility — especially contrast ratios — should have been a constraint from the first wireframe." />
              <Reflection title="Measure behavior, not just tasks" text="We tracked task completion in Maze. But the metric merchants actually cared about was 'time from QR scan to customer leaving' — the speed of the entire point-of-sale moment. We never instrumented that." />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━ CLOSING ━━━ */}
      <section className="border-t border-gray-100 bg-[#f7f7f7] py-20">
        <FadeIn>
          <blockquote className="mx-auto max-w-3xl px-8 text-center">
            <p className="text-2xl font-medium leading-relaxed text-gray-700">
              &ldquo;I took this from a competitive research deck to a shipped product used by a million people. Every step — the research, the workshops, the arguments with engineering, the Friday testing readouts — that&apos;s the kind of ownership I bring.&rdquo;
            </p>
            <footer className="mt-6 text-sm font-semibold text-gray-400">— Kay Lo</footer>
          </blockquote>
        </FadeIn>
      </section>

      {/* Footer nav */}
      <div className="border-t border-gray-100 py-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8">
          <Link href="/portfolio" className="text-sm font-medium text-gray-400 hover:text-gray-900">&larr; All Projects</Link>
          <Link href="/portfolio/canadian-retirement-hub" className="text-sm font-medium text-gray-400 hover:text-gray-900">Next: Canadian Retirement Hub &rarr;</Link>
        </div>
      </div>
    </div>
  );
}

/* ── PROCESS STEP ─────────────────────────────────────────────────────────── */

function ProcessStep({ num, label, title, paragraphs, ownership }: {
  num: string; label: string; title: string; paragraphs: string[]; ownership: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-8">
        <FadeIn>
          <div className="mb-3 flex items-center gap-3">
            <span className="rounded-full bg-[#0066CC] px-3 py-1 text-xs font-bold text-white">{num}</span>
            <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">{label}</span>
          </div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
          <div className="max-w-3xl space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-gray-500">{p}</p>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm font-semibold text-[#0066CC]">{ownership}</p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── HERO IMAGE — full width parallax ─────────────────────────────────────── */

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

/* ── UTILITIES ────────────────────────────────────────────────────────────── */

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

function ResultPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-[#0066CC]/15 bg-[#0066CC]/5 px-5 py-3">
      <span className="text-xl font-bold text-[#0066CC]">{value}</span>
      <span className="text-sm text-gray-600">{label}</span>
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

function Reflection({ title, text }: { title: string; text: string }) {
  return (
    <div className="border-l-2 border-gray-200 pl-6">
      <h3 className="mb-1 text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-base leading-relaxed text-gray-500">{text}</p>
    </div>
  );
}

/* ── JOURNEY MAP CHART — proper UX format ─────────────────────────────────── */

const journeyStages = [
  {
    stage: "Awareness",
    action: "Sees jewelry on Instagram",
    thinking: "\"Qué lindo! Quiero comprarle\"",
    touchpoint: "Instagram",
    emotion: 90,
    pain: null,
    opportunity: null,
    highlight: "Excitement — desire to buy",
  },
  {
    stage: "Entry",
    action: "Opens Banco General app, finds Yappy",
    thinking: "\"Where is Yappy in this app?\"",
    touchpoint: "Banco General app",
    emotion: 55,
    pain: "Yappy buried inside banking app",
    opportunity: null,
    highlight: null,
  },
  {
    stage: "Search",
    action: "Searches @creacionesmarlene",
    thinking: "\"Is it her username? Name? Phone?\"",
    touchpoint: "Yappy search",
    emotion: 35,
    pain: "Unclear what to search by",
    opportunity: null,
    highlight: null,
  },
  {
    stage: "Configure",
    action: "Enters amount, selects account",
    thinking: "\"Which account? Are there fees?\"",
    touchpoint: "Payment form",
    emotion: 20,
    pain: "Too many fields, 4 screens deep",
    opportunity: null,
    highlight: null,
  },
  {
    stage: "Confirm",
    action: "Taps confirm, sees spinner",
    thinking: "\"Did it work? Should I close?\"",
    touchpoint: "Confirmation",
    emotion: 15,
    pain: "No feedback — just a spinner",
    opportunity: null,
    highlight: null,
  },
  {
    stage: "Receipt",
    action: "Sees ¡Pago exitoso! + amount",
    thinking: "\"Ok it worked! But will it save?\"",
    touchpoint: "Success screen",
    emotion: 65,
    pain: "Users screenshot — don't trust app saves it",
    opportunity: "Sound + haptic confirmation",
    highlight: "Relief — payment went through",
  },
  {
    stage: "Notification",
    action: "Marlene gets push: +$45.00",
    thinking: "\"¡Me pagaron! I can ship the order\"",
    touchpoint: "Push notification",
    emotion: 92,
    pain: null,
    opportunity: null,
    highlight: "Peak moment — ¡Me pagaron!",
  },
  {
    stage: "Repeat",
    action: "Marlene shares Yappy link on IG",
    thinking: "\"This is easier than cash\"",
    touchpoint: "Instagram / WhatsApp",
    emotion: 85,
    pain: null,
    opportunity: "Referral loop — organic growth",
    highlight: "Trust built — becomes advocate",
  },
];

function JourneyMapChart() {
  const W = 900, H = 520;
  const padL = 100, padR = 30, padTop = 30, colW = (W - padL - padR) / journeyStages.length;

  // Emotion curve points (relative to SVG which has no padL)
  const svgColW = (W - padL - padR) / journeyStages.length;
  const emPoints = journeyStages.map((s, i) => ({
    x: i * svgColW + svgColW / 2,
    y: 200 + (100 - s.emotion) * 1.2,
  }));

  // Smooth curve
  function curve(pts: { x: number; y: number }[]) {
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[Math.max(i - 1, 0)];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[Math.min(i + 2, pts.length - 1)];
      const t = 0.3;
      d += ` C ${p1.x + (p2.x - p0.x) * t} ${p1.y + (p2.y - p0.y) * t}, ${p2.x - (p3.x - p1.x) * t} ${p2.y - (p3.y - p1.y) * t}, ${p2.x} ${p2.y}`;
    }
    return d;
  }

  const neutralY = 200 + (100 - 50) * 1.2; // 50% = neutral line

  return (
    <div className="min-w-[800px]">
      {/* Header row — stages */}
      <div className="flex border-b border-gray-100">
        <div className="w-[100px] shrink-0 border-r border-gray-100 px-3 py-3">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-300">Stage</span>
        </div>
        {journeyStages.map((s, i) => (
          <div key={i} className="flex-1 border-l border-gray-50 px-3 py-3 text-center first:border-l-0">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">{s.stage}</span>
          </div>
        ))}
      </div>

      {/* Actions row */}
      <div className="flex border-b border-gray-50">
        <div className="flex w-[100px] shrink-0 items-start border-r border-gray-100 px-3 py-3">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Does</span>
        </div>
        {journeyStages.map((s, i) => (
          <div key={i} className="flex-1 border-l border-gray-50 px-3 py-3 first:border-l-0">
            <p className="text-[12px] text-gray-700">{s.action}</p>
          </div>
        ))}
      </div>

      {/* Thinks row */}
      <div className="flex border-b border-gray-50">
        <div className="flex w-[100px] shrink-0 items-start border-r border-gray-100 px-3 py-3">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Thinks</span>
        </div>
        {journeyStages.map((s, i) => (
          <div key={i} className="flex-1 border-l border-gray-50 px-3 py-3 first:border-l-0">
            <p className="text-[12px] italic text-gray-500">{s.thinking}</p>
          </div>
        ))}
      </div>

      {/* Emotion curve — SVG */}
      <div className="relative flex border-b border-gray-100">
        <div className="flex w-[100px] shrink-0 items-start border-r border-gray-100 px-3 py-3">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Feels</span>
        </div>
        <svg viewBox={`0 0 ${W - padL} 180`} className="w-full flex-1" style={{ fontFamily: "Arial, sans-serif" }}>
          {/* Neutral line */}
          <line x1={0} y1={neutralY - 200} x2={W - padL - padR} y2={neutralY - 200} stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 4" />

          {/* Column dividers */}
          {journeyStages.map((_, i) => i > 0 && (
            <line key={i} x1={i * ((W - padL - padR) / journeyStages.length)} y1={0} x2={i * ((W - padL - padR) / journeyStages.length)} y2={180} stroke="#f3f4f6" strokeWidth="1" />
          ))}

          {/* Gradient fill under curve */}
          <defs>
            <linearGradient id="emotionGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
              <stop offset="25%" stopColor="#f59e0b" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#ef4444" stopOpacity="0.18" />
              <stop offset="75%" stopColor="#10b981" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <path
            d={curve(emPoints.map(p => ({ x: p.x, y: p.y - 200 }))) + ` L ${emPoints[emPoints.length - 1].x} 180 L ${emPoints[0].x} 180 Z`}
            fill="url(#emotionGrad)"
          />

          {/* Emotion line */}
          <path
            d={curve(emPoints.map(p => ({ x: p.x, y: p.y - 200 })))}
            fill="none" stroke="#0066CC" strokeWidth="3" strokeLinecap="round"
          />

          {/* Dots + emoji labels + highlight moments */}
          {emPoints.map((p, i) => {
            const ey = p.y - 200;
            const em = journeyStages[i].emotion;
            const hl = journeyStages[i].highlight;
            const emoji = em >= 85 ? "🤩" : em >= 70 ? "😊" : em >= 55 ? "🙂" : em >= 40 ? "😐" : em >= 25 ? "😟" : "😰";
            const dotColor = em >= 65 ? "#10b981" : em >= 40 ? "#0066CC" : "#ef4444";
            return (
              <g key={i}>
                {/* Highlight label for happy moments */}
                {hl && (
                  <>
                    <rect x={p.x - 55} y={ey - 42} width={110} height={20} rx={4} fill={em >= 65 ? "#ecfdf5" : "#fef2f2"} stroke={em >= 65 ? "#10b981" : "#ef4444"} strokeWidth="0.5" />
                    <text x={p.x} y={ey - 28} textAnchor="middle" fontSize="8" fontWeight="600" fill={em >= 65 ? "#059669" : "#dc2626"}>{hl}</text>
                  </>
                )}
                <circle cx={p.x} cy={ey} r={6} fill="white" stroke={dotColor} strokeWidth="2.5" />
                <text x={p.x} y={ey - (hl ? 48 : 14)} textAnchor="middle" fontSize="16">{emoji}</text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Pain points + Opportunities */}
      <div className="flex">
        <div className="flex w-[100px] shrink-0 items-start border-r border-gray-100 px-3 py-3">
          <span className="text-xs font-bold uppercase tracking-wider text-red-400">Pains</span>
        </div>
        {journeyStages.map((s, i) => (
          <div key={i} className="flex-1 border-l border-gray-50 px-3 py-3 first:border-l-0">
            {s.pain && (
              <p className="text-[11px] text-red-600/80">{s.pain}</p>
            )}
            {s.opportunity && (
              <p className="mt-1 text-[11px] text-emerald-700/80">&#10003; {s.opportunity}</p>
            )}
          </div>
        ))}
      </div>

      {/* Touchpoints row */}
      <div className="flex border-t border-gray-100 bg-gray-50">
        <div className="flex w-[100px] shrink-0 items-center border-r border-gray-100 px-3 py-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Touch&shy;point</span>
        </div>
        {journeyStages.map((s, i) => (
          <div key={i} className="flex-1 border-l border-gray-100 px-3 py-2.5 first:border-l-0">
            <p className="text-[12px] font-semibold text-gray-600">{s.touchpoint}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── CONCLUSION BLOCK — lands the "so what" after each section ────────────── */

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
                  <p className="text-lg font-bold text-[#60AFFF]">{c.value}</p>
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

/* ── COMPETITOR CARD ─────────────────────────────────────────────────────── */

function CompetitorCard({ name, country, users, model, strength, weakness, color }: {
  name: string; country: string; users: string; model: string; strength: string; weakness: string; color: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg text-lg font-black text-white" style={{ background: color }}>
          {name[0]}
        </div>
        <div>
          <h3 className="text-base font-bold text-gray-900">{name}</h3>
          <p className="text-xs text-gray-400">{country} &middot; {users} users</p>
        </div>
      </div>
      <p className="mb-3 text-sm text-gray-500">{model}</p>
      <div className="space-y-1.5 text-[13px]">
        <p className="rounded bg-emerald-50 px-2 py-1 text-emerald-700"><span className="font-bold">+</span> {strength}</p>
        <p className="rounded bg-red-50 px-2 py-1 text-red-600"><span className="font-bold">−</span> {weakness}</p>
      </div>
    </div>
  );
}

function ResearchStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 text-center">
      <div className="text-3xl font-bold text-[#0066CC]">{value}</div>
      <div className="mt-1 text-sm text-gray-500">{label}</div>
    </div>
  );
}

/* ── PHONE SIMULATOR — interactive app walkthrough ───────────────────────── */

const screens = [
  {
    src: "/portfolio/yappy-screen-home.jpg",
    title: "Home",
    desc: "The redesigned home screen. Balance up top, 4 primary actions (Enviar, Pedir, Dividir, QR), favorite contacts, and recent activity. Everything a user needs in one scroll.",
  },
  {
    src: "/portfolio/yappy-screen-qr.jpg",
    title: "QR Payment",
    desc: "Scan to pay — merchant name + verified badge + amount, all visible before confirming. QR codes pre-generate on app launch for instant display (the engineering compromise).",
  },
  {
    src: "/portfolio/yappy-screen-success.jpg",
    title: "Confirmation",
    desc: "¡Pago exitoso! Sound + haptic + confetti. The merchant hears it from across the counter. No more asking 'did it go through?' — the answer is unmistakable.",
  },
  {
    src: "/portfolio/yappy-screen-merchant.jpg",
    title: "Merchant View",
    desc: "The screen merchants see 15-20x/day. Last payment received is THE first thing — +$45.00 from María, 2 min ago. Today's total, transaction count, and hourly chart below.",
  },
];

function PhoneSimulator() {
  const [active, setActive] = useState(0);
  const screen = screens[active];

  return (
    <section className="bg-gray-950 py-20">
      <div className="mx-auto max-w-6xl px-8">
        <FadeIn>
          <h2 className="mb-2 text-center text-3xl font-bold text-white">Experience the Redesign</h2>
          <p className="mb-12 text-center text-base text-white/40">Tap through the key screens I designed</p>
        </FadeIn>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-center lg:gap-16">
          {/* Phone frame */}
          <FadeIn>
            <div className="relative">
              {/* Phone bezel */}
              <div className="relative w-[280px] rounded-[40px] border-[6px] border-gray-800 bg-gray-900 p-[3px] shadow-2xl shadow-black/50">
                {/* Notch */}
                <div className="absolute left-1/2 top-0 z-20 h-[26px] w-[120px] -translate-x-1/2 rounded-b-2xl bg-gray-900" />
                {/* Screen */}
                <div className="relative overflow-hidden rounded-[32px] bg-white">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={screen.src}
                      alt={screen.title}
                      width={280}
                      height={600}
                      className="w-full h-auto"
                      sizes="280px"
                    />
                  </motion.div>
                </div>
                {/* Home indicator */}
                <div className="mx-auto mt-1 h-[4px] w-[100px] rounded-full bg-gray-700" />
              </div>
            </div>
          </FadeIn>

          {/* Screen selector + description */}
          <div className="flex flex-col gap-3 lg:max-w-sm lg:pt-8">
            {screens.map((s, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`group flex gap-4 rounded-xl p-4 text-left transition-all duration-300 ${
                  active === i
                    ? "bg-[#0066CC] shadow-lg shadow-[#0066CC]/20"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
                  active === i ? "bg-white/20 text-white" : "bg-white/10 text-white/40"
                }`}>
                  {i + 1}
                </div>
                <div>
                  <h3 className={`text-sm font-bold ${active === i ? "text-white" : "text-white/60"}`}>
                    {s.title}
                  </h3>
                  <p className={`mt-1 text-[13px] leading-relaxed ${
                    active === i ? "text-white/80" : "text-white/30"
                  }`}>
                    {s.desc}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── ANNOTATED IMAGE — the process artifact showcase ─────────────────────── */

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
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {annotations.map((a, i) => (
              <div key={i} className="rounded-lg border border-gray-200 bg-white p-4">
                <div className="mb-1 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0066CC] text-[10px] font-bold text-white">{i + 1}</span>
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
