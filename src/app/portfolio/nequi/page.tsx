"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay, ease }}>
      {children}
    </motion.div>
  );
}

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

function AnnotatedImage({ src, alt, title, annotations }: { src: string; alt: string; title: string; annotations: { label: string; desc: string }[] }) {
  return (
    <section className="bg-[#f7f7f7] py-10">
      <div className="mx-auto max-w-6xl px-8">
        <FadeIn>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200" />
            <h3 className="shrink-0 text-sm font-bold uppercase tracking-widest text-gray-400">{title}</h3>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-4 py-2.5">
              <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
              <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
              <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
              <span className="ml-3 text-[11px] text-gray-400">{alt}</span>
            </div>
            <Image src={src} alt={alt} width={1600} height={1000} className="w-full h-auto" sizes="(max-width: 1152px) 100vw, 1152px" />
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {annotations.map((a, i) => (
              <div key={i} className="rounded-lg border border-gray-200 bg-white p-4">
                <div className="mb-1 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E6007E] text-[10px] font-bold text-white">{i + 1}</span>
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

export default function NequiCaseStudy() {
  return (
    <div className="bg-white">
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-5 py-3 bg-white/70 backdrop-blur-xl border-b border-black/5">
        <Link href="/portfolio" className="text-sm font-medium text-gray-400 hover:text-gray-900">&larr; Back</Link>
      </nav>

      {/* ━━━ HERO ━━━ */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden" style={{ background: "linear-gradient(135deg, #20004B 0%, #E6007E 100%)" }}>
        <div className="relative z-10 mx-auto w-full max-w-6xl px-8 pb-16 pt-32">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease }}>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-white/50">Bancolombia Group &middot; Colombia</p>
            <h1 className="mb-4 text-6xl font-bold tracking-tight text-white sm:text-8xl">Nequi</h1>
            <p className="mb-6 max-w-lg text-2xl font-light text-white/80">
              Redesigning P2P transfers for Colombia&apos;s fastest-growing digital banking app — reducing errors, building trust, making finance approachable.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/50">
              <span><strong className="text-white/80">Role:</strong> UX/UI Designer</span>
              <span><strong className="text-white/80">Team:</strong> 1 UX, 1 PM, 2 Devs</span>
              <span><strong className="text-white/80">Tools:</strong> Figma, Maze, Miro, Google Forms</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero app mockup */}
      <HeroImage src="/portfolio/nequi-img-001.png" alt="Nequi app hero — case study overview with phone mockup and tools" />

      {/* ━━━ CONTEXT ━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900">The Challenge</h2>
            <p className="mb-10 max-w-3xl text-xl leading-relaxed text-gray-500">
              Nequi targets millennials (20–35) in Colombia. The P2P transfer flow had a 10–15% drop-off during recipient selection. Users mistyped account numbers and didn&apos;t trust the confirmation screen.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 sm:grid-cols-3">
              {[
                { value: "10–15%", label: "Drop-off rate", sub: "During recipient selection" },
                { value: "N=120", label: "Survey + interviews", sub: "50 survey + 10 interviews" },
                { value: "20–35", label: "Target age range", sub: "Colombian millennials" },
              ].map(m => (
                <div key={m.label} className="bg-white p-6">
                  <p className="text-3xl font-bold text-gray-900">{m.value}</p>
                  <p className="mt-1 text-sm font-semibold text-gray-700">{m.label}</p>
                  <p className="mt-0.5 text-xs text-gray-400">{m.sub}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━ DESIGN PROCESS ━━━ */}
      <HeroImage src="/portfolio/nequi-img-002.png" alt="Design process — Discover, Define, Design, Test" />

      {/* ━━━ 01 RESEARCH ━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-[#E6007E] px-3 py-1 text-xs font-bold text-white">01</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">Discover</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Quantitative Research</h2>
            <p className="mb-6 max-w-3xl text-lg text-gray-500">Google Forms survey with 50 participants — understanding usage patterns, pain points, and what users actually want from the app.</p>
          </FadeIn>
        </div>
      </section>

      {/* Survey results — real charts from PDF */}
      <AnnotatedImage
        src="/portfolio/nequi-img-003.png"
        alt="Survey results — usage frequency and primary purpose"
        title="Survey Results — Usage Patterns"
        annotations={[
          { label: "42.6% weekly", desc: "Most users aren't daily — they open Nequi for specific transfers" },
          { label: "80.9% P2P", desc: "Transfers are THE use case. Everything else is secondary." },
        ]}
      />

      <AnnotatedImage
        src="/portfolio/nequi-img-004.png"
        alt="Survey results — design quality, colors, icons, layout"
        title="Survey Results — UI Perception"
        annotations={[
          { label: "46% Excellent design", desc: "But 44.7% said just 'Good' — room for improvement" },
          { label: "48.9% confusing layout", desc: "Almost half found the UI 'somewhat confusing but manageable'" },
          { label: "44.7% unclear icons", desc: "Partial clarity — icons need better visual affordance" },
          { label: "66% like colors", desc: "Brand colors work, but 34% disagree" },
        ]}
      />

      <AnnotatedImage
        src="/portfolio/nequi-img-005.png"
        alt="Survey results — usability, personalization, animations"
        title="Survey Results — Feature Demand"
        annotations={[
          { label: "89.4% want personalization", desc: "Dark mode, themes — overwhelming demand" },
          { label: "59.6% 'más o menos'", desc: "Majority feel only 'sort of' comfortable — not confident" },
          { label: "80.9% want animations", desc: "Subtle visual feedback would increase perceived quality" },
        ]}
      />

      {/* Key insights image */}
      <HeroImage src="/portfolio/nequi-img-006.png" alt="Key insights derived from survey — personalization, usability, iconography, transaction history" />

      {/* ━━━ 02 PERSONA ━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-[#E6007E] px-3 py-1 text-xs font-bold text-white">02</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">Define</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Persona & Problem Framing</h2>
            <p className="mb-6 max-w-3xl text-lg text-gray-500">Juan Pérez — 27, entrepreneur from Medellín. Uses Nequi primarily for business payments to suppliers. Needs speed, security, and clear transaction history.</p>
          </FadeIn>
        </div>
      </section>

      <AnnotatedImage
        src="/portfolio/nequi-img-007.png"
        alt="Juan Pérez persona card"
        title="Primary Persona — Juan Pérez"
        annotations={[
          { label: "27, Emprendedor", desc: "Medellín, Colombia. Runs his own business, pays suppliers via Nequi" },
          { label: "Pain: No personalization", desc: "Frustrated by lack of customization options in the app" },
          { label: "Pain: Tracking difficulty", desc: "Can't easily find or filter specific transactions" },
          { label: "Motivation: Speed + security", desc: "Wants fast access from anywhere + data protection guarantees" },
        ]}
      />

      {/* HMW */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <div className="rounded-xl bg-[#20004B] p-8 text-center">
              <p className="text-sm font-semibold text-white/50">How Might We...</p>
              <p className="mt-2 text-xl font-bold text-white">...reduce entry errors and boost user confidence during P2P transfers?</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━ 03 DESIGN ━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-[#E6007E] px-3 py-1 text-xs font-bold text-white">03</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">Design</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Design System & Wireframes</h2>
            <p className="mb-6 max-w-3xl text-lg text-gray-500">Established the visual foundation — typography (Mulish), color palette, and low-fidelity wireframes mapping every screen before going high-fidelity.</p>
          </FadeIn>
        </div>
      </section>

      {/* Typography & Colors */}
      <AnnotatedImage
        src="/portfolio/nequi-img-013.png"
        alt="Typography and color system"
        title="Design System — Typography & Color"
        annotations={[
          { label: "Mulish", desc: "Clean, modern sans-serif. Legible on mobile at small sizes." },
          { label: "#20004B", desc: "Deep purple — primary brand, headers, nav" },
          { label: "#FE2F75", desc: "Hot pink — CTAs, accents, active states" },
          { label: "#070A22 + #707070", desc: "Dark navy for text, gray for secondary content" },
        ]}
      />

      {/* Wireframes */}
      <AnnotatedImage
        src="/portfolio/nequi-img-008.png"
        alt="Wireframes with phone mockup"
        title="Wireframes — Low to High Fidelity"
        annotations={[
          { label: "Screen mapping", desc: "Every screen laid out before visual design — Inicio, Movimientos, Servicios, Ajustes" },
          { label: "3D phone mockup", desc: "High-fi render showing the final home screen in context" },
          { label: "Opciones para enviar", desc: "Transfer options: Nequi (phone), Transfiya, Bancos — simplified selection" },
        ]}
      />

      {/* Final UI screens */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <h3 className="mb-6 text-xl font-bold text-gray-900">Final UI — All Screens</h3>
          </FadeIn>
        </div>
      </section>

      <AnnotatedImage
        src="/portfolio/nequi-img-009.png"
        alt="UI screens — Inicio, Servicios, Movimientos, Categorías"
        title="Core Screens — Navigation & Services"
        annotations={[
          { label: "Inicio", desc: "Home with balance, quick actions, favorite services" },
          { label: "Servicios", desc: "Categorized services menu — expandable, clean" },
          { label: "Movimientos", desc: "Transaction history with amounts and timestamps" },
          { label: "Categorías & Filtros", desc: "Filter by date range: Todo, 30 días, 15 días, 7 días" },
        ]}
      />

      <AnnotatedImage
        src="/portfolio/nequi-img-010.png"
        alt="UI screens — Transferir dinero, Opciones de envío, Notificaciones"
        title="Transfer Flow & Notifications"
        annotations={[
          { label: "Transferir dinero", desc: "Clean form: Celular/Buscar, amount, message, account selection" },
          { label: "Opciones de envío", desc: "Bottom sheet: Nequi, Transfiya, Bancos — clear hierarchy" },
          { label: "Account selection", desc: "Disponible, Hogar, Colchón — visual account picker" },
          { label: "Notificaciones", desc: "System alerts: case created, cuenta bloqueada — with timestamps" },
        ]}
      />

      {/* ━━━ 04 TESTING ━━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-[#E6007E] px-3 py-1 text-xs font-bold text-white">04</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">Test</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Usability Testing</h2>
            <p className="mb-6 max-w-3xl text-lg text-gray-500">Figma interactive prototype + Maze & Google Meet for moderated sessions. 5 representative users tested 4 core tasks.</p>
          </FadeIn>
        </div>
      </section>

      {/* Test tasks */}
      <HeroImage src="/portfolio/nequi-img-012.png" alt="Usability testing tasks — 4 activities tested" />

      {/* Test results */}
      <AnnotatedImage
        src="/portfolio/nequi-img-014.png"
        alt="Usability test results — 4 activities with metrics"
        title="Test Results — All Tasks"
        annotations={[
          { label: "100% completion", desc: "All 4 tasks completed by all testers — zero failures" },
          { label: "1.2–2.8% misclick", desc: "Low error rate across all flows" },
          { label: "1–3 min duration", desc: "Tasks completed within expected timeframes" },
          { label: "0% bounce", desc: "No user abandoned any task midway" },
        ]}
      />

      {/* User feedback */}
      <AnnotatedImage
        src="/portfolio/nequi-img-015.png"
        alt="User suggestions and feedback"
        title="User Feedback & Suggestions"
        annotations={[
          { label: "Auto bill pay", desc: "Users want scheduled payments for recurring services" },
          { label: "Rewards system", desc: "Cashback or points for frequent usage — retention hook" },
          { label: "Split payments", desc: "Divide expenses with friends directly in-app" },
        ]}
      />

      {/* ━━━ CLOSING ━━━ */}
      <section className="border-t border-gray-100 bg-[#f7f7f7] py-20">
        <FadeIn>
          <blockquote className="mx-auto max-w-3xl px-8 text-center">
            <p className="text-2xl font-medium leading-relaxed text-gray-700">
              &ldquo;When users said &lsquo;Now I feel sure I&apos;m sending to the right person,&rsquo; that was the win. Trust in a money app isn&apos;t a feature — it&apos;s the product.&rdquo;
            </p>
            <footer className="mt-6 text-sm font-semibold text-gray-400">— Kay Lo</footer>
          </blockquote>
        </FadeIn>
      </section>

      <div className="border-t border-gray-100 py-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8">
          <Link href="/portfolio" className="text-sm font-medium text-gray-400 hover:text-gray-900">&larr; All Projects</Link>
          <Link href="/portfolio/yappy" className="text-sm font-medium text-gray-400 hover:text-gray-900">Next: Yappy &rarr;</Link>
        </div>
      </div>
    </div>
  );
}
