import { writeFileSync } from "fs";
import { join } from "path";
import { randomUUID } from "crypto";
import type { KnowledgeEntry, KnowledgeStore } from "../src/lib/knowledge/types";

const KNOWLEDGE_PATH = join(process.cwd(), "src/lib/knowledge/skills.json");
const now = new Date().toISOString();

function entry(
  question: string,
  answer: string,
  category: KnowledgeEntry["category"],
  tags: string[]
): KnowledgeEntry {
  return {
    id: randomUUID().slice(0, 8),
    question,
    answer,
    category,
    tags,
    qualityScore: 5,
    source: "seed",
    createdAt: now,
    updatedAt: now,
  };
}

const seedEntries: KnowledgeEntry[] = [
  entry(
    "Tell me about yourself",
    "I'm Kay — a Senior UX Designer with 12 years of experience across agency, FinTech, healthcare, e-commerce, and AI-powered SaaS. I started my career at digital agencies in Hong Kong — DigitasLBi and Ogilvy — working on campaigns for brands like Nike, Intel, and The Economist. From there I moved into product design in FinTech, spending nearly 4 years at Banco General and Banistmo in Panama, redesigning onboarding, credit applications, and digital banking experiences. After relocating to Canada, I led UX at GoBeyond Group for marketplace and loyalty products, then joined CI&T working on enterprise medical devices and e-commerce. Most recently, I've been doing UX engineering at Amaris Consulting for Philips' XITE sleep study platform, and consulting for Wisy on AI-powered retail execution. I bring a mix of strategic thinking, design systems expertise, and hands-on frontend skills to every role.",
    "experience",
    ["background", "career", "introduction", "summary", "journey"]
  ),
  entry(
    "Why should we hire you?",
    "Three things set me apart. First, range — I've designed across agency, FinTech, healthcare, e-commerce, and AI-powered SaaS, so I can adapt quickly to new domains. Second, I go end-to-end — from user research and journey mapping through high-fidelity prototypes to React-based implementation and design system governance. Third, I bridge design and engineering. At Philips I'm not just designing — I'm building the frontend with React 18 and Vite, ensuring what ships matches the design intent. I also speak four languages (English, Spanish, Cantonese, Mandarin), which helps me collaborate across global teams. I'm a systems thinker who mentors designers, sets quality bars, and moves fast without sacrificing craft.",
    "experience",
    ["hire", "value", "strengths", "differentiation"]
  ),
  entry(
    "Tell me about a challenging project",
    "The most challenging project I've worked on is XITE at Philips, through Amaris Consulting. We're migrating Philips' legacy Somnolyzer sleep scoring software — a decades-old desktop application — to a cloud-native SaaS platform on AWS. The challenge was enormous: clinical workflows are deeply regulated (FDA, HIPAA), the data is complex (17+ physiological signals like EEG, EMG, EOG), and the users — sleep clinicians — have very specific muscle-memory workflows. I designed and built a 7-step guided flow that takes clinicians from uploading an EDF study file through channel mapping, validation, and processing. The channel mapping interface uses AI-assisted confidence scoring to auto-detect recording types and suggest signal mappings. Every step needed to handle compliance validation for AASM montage standards and sampling thresholds. I also built audit trail infrastructure for regulatory compliance. It taught me how to balance innovation with strict regulatory constraints.",
    "projects",
    ["challenge", "philips", "xite", "healthcare", "medical", "sleep"]
  ),
  entry(
    "How do you handle stakeholders?",
    "I've developed a few approaches over the years. At CI&T, I ran discovery and executive workshops where I translated cross-functional inputs from engineering, product, and business into shared narratives, flows, and specifications — getting everyone aligned before we started building. At Banco General, I worked closely with compliance and legal teams on banking onboarding and KYC flows, establishing trust-first copy and ensuring every design decision aligned with regulatory requirements. At GoBeyond, I partnered directly with marketing on thought leadership and campaign templates. My general approach is: listen first, synthesize what I hear into something visual (a flow, a journey map, a prototype), then bring it back for validation. Visuals cut through ambiguity faster than meetings.",
    "process",
    ["stakeholders", "collaboration", "communication", "alignment", "workshops"]
  ),
  entry(
    "What is your experience with design systems?",
    "Design systems are a core strength of mine. At GoBeyond Group, I stood up a component library and token system with Tailwind and React from scratch, which improved speed, accessibility, and visual consistency across the product. At CI&T, I co-authored multi-brand component systems and documentation that improved predictability across multiple squads and stakeholders — this was for enterprise clients with multiple product lines. Currently at Philips, I'm working within the Philips Filament Design System, building accessible components that comply with enterprise UX and medical software standards. My approach covers the full stack: tokens (color, typography, spacing, depth), components with variants, iconography, motion guidelines, and governance models for how teams contribute and evolve the system.",
    "skills",
    ["design systems", "tokens", "components", "tailwind", "react", "library"]
  ),
  entry(
    "What is your experience with AI and emerging technology?",
    "I'm deeply involved in AI-powered design right now across two projects. At Wisy, I'm designing AI-powered retail execution experiences — turning raw computer vision detections (bounding boxes, product identifications, rule validation) into simple visual interfaces for field teams and managers. I design human-in-the-loop review steps so users can confirm, correct, or dismiss AI findings naturally. At Philips/XITE, I developed an intelligent channel mapping interface with AI-assisted confidence scoring that automatically detects recording types from polysomnography data. Beyond client work, I actively use LLM-based tools — ChatGPT, Figma AI plugins, Replit, GitHub, Lovable, Cursor, and Claude — to explore interaction patterns, generate UI variations, prototype AI-driven flows, and accelerate my design process.",
    "skills",
    ["ai", "emerging tech", "machine learning", "computer vision", "llm", "human-in-the-loop"]
  ),
  entry(
    "Tell me about your leadership and mentoring experience",
    "Throughout my career I've mentored designers, run design critiques, and set quality bars for teams. At GoBeyond Group as UX Lead, I directed web and product experience across loyalty, marketplace, and gift card flows — unifying brand, copy, and UI across the product suite while guiding junior designers. My coaching style is about raising the bar through structured critique: I help designers articulate their decisions, question assumptions, and consider edge cases. I operate cross-squad to align patterns and processes, which means I'm often the person bridging different teams to ensure consistency. I believe in leading by example — I still do hands-on design work alongside strategic direction.",
    "leadership",
    ["leadership", "mentoring", "coaching", "team", "management", "critique"]
  ),
  entry(
    "What is your design process?",
    "My process adapts to context, but generally follows: Discover → Define → Design → Deliver → Measure. In Discovery, I use journey mapping, mental models, and Jobs-to-Be-Done frameworks. I run in-squad research including interviews, task tests, and diary studies, then synthesize findings into the roadmap. In Define, I break big bets into testable slices, define KPIs, and create event taxonomies and experimentation plans to reduce risk. In Design, I go from sketches and wireframes to user flows and high-fidelity mocks in Figma, then prototype with ProtoPie, Framer, or Figma prototypes. In Deliver, I create detailed specs, collaborate closely with engineering (I'm comfortable in HTML/CSS, React handoff, and even building frontends myself). In Measure, I use GA4, Amplitude, and Hotjar to validate against KPIs and iterate.",
    "process",
    ["design process", "methodology", "research", "discovery", "iteration"]
  ),
  entry(
    "Tell me about your work at Philips or XITE",
    "At Amaris Consulting (Jan 2026–present), I'm leading frontend UX engineering for XITE — a cloud-native proof-of-concept migrating Philips' legacy Somnolyzer sleep scoring software to AWS. I designed and built the frontend using React 18, Vite, and the Philips Filament Design System. Key deliverables include: a 7-step guided flow for processing EDF polysomnography studies, an intelligent channel mapping interface supporting 17+ physiological signals with AI-assisted confidence scoring, a study management dashboard with DataGrid architecture, and audit trail infrastructure for FDA/HIPAA compliance. I also defined UX logic for G3/ASM montage compliance and sampling thresholds, implemented responsive layouts with dark mode, and produced detailed UX specifications to align engineering, clinical, and product stakeholders. The live case study is at https://case-study-lime.vercel.app",
    "projects",
    ["philips", "xite", "sleep", "medical", "healthcare", "amaris", "saas"]
  ),
  entry(
    "Tell me about your work at Wisy",
    "At Wisy (Sep 2025–present), I'm a Product and UX Designer Consultant working remotely for a retail execution SaaS company serving CPG brands in the US. I design AI-powered experiences across two products: a B2B portal for regional and brand managers, and the Wisy Pulse mobile app for field teams in stores. For the portal, I designed experiences for managing stores, visits, licenses, and user access. For the mobile app, I designed guided store visit journeys with dynamic surveys, photo capture, and AI shelf analysis. A key challenge is creating photo capture flows that help users take images the computer vision model can read reliably — reducing failed scans through better UX. I also turn raw AI detections into simple interfaces and design human-in-the-loop review steps.",
    "projects",
    ["wisy", "retail", "ai", "mobile", "cpg", "computer vision"]
  ),
  entry(
    "What tools do you use?",
    "My core toolkit: Figma for design (variants, tokens, auto-layout), FigJam and Miro for workshops and mapping, ProtoPie/Framer for advanced prototyping. For project management: Jira, Linear, Notion, and Confluence. For analytics: GA4, Amplitude, and Hotjar. For handoff and development: I'm comfortable with React Native, Tailwind, HTML/CSS, and I understand Redux/Zustand state patterns and REST/GraphQL APIs. For AI-assisted workflows: Claude, ChatGPT, Replit, GitHub, Lovable, Cursor, and Nano Banana. I follow iOS HIG and Material Design guidelines for mobile work. Currently at Philips, I'm working hands-on with React 18, Vite, and the Philips Filament Design System.",
    "skills",
    ["tools", "figma", "react", "prototyping", "analytics", "software"]
  ),
  entry(
    "How do you approach user research?",
    "I believe research should be embedded in the squad, not siloed. My approach includes journey mapping to understand the full user experience, mental models to understand how users think about the domain, and Jobs-to-Be-Done to frame problems around user outcomes. For tactical research, I conduct interviews, task tests, and diary studies. At Wisy, I run usability testing on AI-powered photo capture flows to improve detection quality and reduce failed scans. At Philips, user interviews with sleep clinicians informed the channel mapping interface design. I always synthesize research into actionable insights for the roadmap — research without action is just documentation.",
    "process",
    ["research", "user research", "interviews", "usability testing", "jtbd", "journey mapping"]
  ),
  entry(
    "What languages do you speak?",
    "I speak four languages: English at a professional working C2 level, Spanish at a professional working level (from my years in Panama), and Cantonese and Mandarin natively. This has been incredibly valuable — at DigitasLBi in Hong Kong I collaborated in English, Cantonese, and Mandarin. In Panama at Banco General and Banistmo, I worked entirely in Spanish. It helps me collaborate with diverse teams and understand cultural nuances in design.",
    "general",
    ["languages", "multilingual", "english", "spanish", "cantonese", "mandarin"]
  ),
  entry(
    "Where have you worked?",
    "I've worked across Asia, Latin America, and North America. I started in Hong Kong at digital agencies — Qianxiang Group (Beijing), DigitasLBi, and Ogilvy & Mather — doing campaign UX and brand activations. Then I moved to Panama City where I spent 5 years in FinTech at Banistmo (Nequi P2P), Banco General (credit cards, then eBanking). In 2022 I relocated to Toronto, Canada, where I've worked at CI&T on enterprise medical devices and e-commerce, then led UX at GoBeyond Group for marketplace and loyalty. Currently I'm at Amaris Consulting (Philips XITE) and consulting for Wisy remotely.",
    "experience",
    ["locations", "companies", "career path", "work history", "geography"]
  ),
  entry(
    "What is your education background?",
    "I hold a Higher Diploma in Multimedia Design & Technology from The Hong Kong Polytechnic University (2009–2011) and a Diploma in Computer Science from Chu Hai College of Higher Education (2004–2006). My education gave me a solid foundation in both design and technology, which is why I'm comfortable working across the design-engineering spectrum. I've also earned industry recognition: a Gold Award for Best Integration of Mobile for the Nike Hong Kong 'Own the night' campaign, and a Gold Mob-Ex Award for the Pocket Intel web application.",
    "education",
    ["education", "degree", "university", "polytechnic", "hong kong", "awards"]
  ),
  entry(
    "How do you handle design critiques?",
    "I both give and welcome critiques as essential to good design. When facilitating critiques, I set a clear structure: the designer presents the problem, constraints, and their solution, then we discuss whether the design serves the user goal — not personal preferences. I ask questions like 'What did the research tell you?' and 'What alternatives did you consider?' to help designers strengthen their reasoning. When receiving critique, I separate my ego from the work. I present my rationale, listen to feedback, and weigh it against user data. If critique challenges my assumptions, I'll prototype both options and test. Critique should make the work better, not defend territory.",
    "process",
    ["critique", "feedback", "design review", "collaboration", "quality"]
  ),
  entry(
    "Tell me about your FinTech or banking experience",
    "I spent nearly 5 years in FinTech in Panama. At Banistmo (2016–2018), I was a UX Analyst on the Nequi P2P expansion — localizing digital banking experiences and managing usability specs and executive readouts. At Banco General, I first worked as Senior Product Designer on Credit Cards (2018–2019), where I redesigned the application funnel with progressive disclosure and stateful guidance, and authored event taxonomy for measurement. Then as Senior UX Designer on eBanking (2019–2021), I led web journeys for onboarding, KYC, credit acquisition, and servicing. I established trust-first copy and compliance alignment, and defined analytics taxonomy and experimentation guardrails. Banking taught me to design within heavy regulatory constraints while still pushing for great UX.",
    "projects",
    ["banking", "fintech", "banco general", "banistmo", "panama", "credit", "onboarding"]
  ),
  entry(
    "How do you collaborate with developers?",
    "I pride myself on bridging design and engineering. At my core, I understand HTML/CSS, React component architecture, Redux/Zustand state patterns, and REST/GraphQL APIs. This means I can have technical conversations, write realistic specs, and even build prototypes in code. At GoBeyond, I collaborated directly with engineers to build a component library with Tailwind and React. At Philips, I'm actually doing frontend UX engineering — building the app with React 18 and Vite. I produce detailed UX specifications and interaction models, but I also jump into code reviews and pair on complex interactions. I think the best design-engineering partnerships happen when designers respect engineering constraints and engineers respect design intent.",
    "process",
    ["developers", "engineering", "collaboration", "handoff", "frontend", "react"]
  ),
  entry(
    "What is your experience with mobile design?",
    "Mobile UX is one of my core strengths. At Wisy, I'm currently designing the Wisy Pulse mobile app for field teams — guided store visit journeys with dynamic surveys, photo capture, and AI shelf analysis, following both iOS HIG and Material Design guidelines. At DigitasLBi, I prototyped onboarding, game loops, and UI states for the Pizza Hut 'Light Up' mobile app for iOS and Android. My mobile expertise includes React Native, high-velocity prototyping, gesture and animation patterns, offline and latency states, and accessibility on both iOS and Android. I understand the platform conventions and when to follow or thoughtfully break them.",
    "skills",
    ["mobile", "ios", "android", "react native", "app", "responsive"]
  ),
  entry(
    "How do you measure design success?",
    "I define success metrics early in the design process. My approach: first, define KPIs tied to the user outcome and business goal. Then create an event taxonomy — what events we need to track and how they map to the KPIs. At Banco General, I defined analytics taxonomy and experimentation guardrails that informed content and funnel prioritization for the eBanking platform. I use tools like GA4, Amplitude, and Hotjar for quantitative data, and complement that with qualitative methods like usability testing and interviews. I also believe in experimentation — breaking big bets into testable slices with clear success criteria, running A/B tests where appropriate, and iterating based on data rather than opinions.",
    "process",
    ["metrics", "kpi", "analytics", "measurement", "success", "data", "experimentation"]
  ),
];

const store: KnowledgeStore = {
  version: 1,
  entries: seedEntries,
};

writeFileSync(KNOWLEDGE_PATH, JSON.stringify(store, null, 2), "utf-8");
console.log(`Seeded ${seedEntries.length} knowledge entries to ${KNOWLEDGE_PATH}`);
