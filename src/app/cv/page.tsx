"use client";

import Link from "next/link";

/* ══════════════════════════════════════════════════════════════════════════
   ATS-OPTIMIZED CV — Single column, standard headings, no graphics,
   no tables, no columns, no icons. Maximum ATS parsability.
   ══════════════════════════════════════════════════════════════════════════ */

export default function CVPage() {
  return (
    <>
      <style jsx global>{`
        .cv-doc {
          font-family: Arial, Helvetica, sans-serif;
          color: #1a1a1a;
          line-height: 1.6;
        }
        .cv-doc h1 { font-size: 26px; font-weight: 700; margin-bottom: 4px; color: #000; }
        .cv-doc .subtitle { font-size: 17px; font-weight: 600; color: #333; margin-bottom: 10px; }
        .cv-doc .contact-line { font-size: 14px; color: #444; margin-bottom: 2px; }
        .cv-doc h2 {
          font-size: 14px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 1.2px; color: #000; border-bottom: 2px solid #000;
          padding-bottom: 4px; margin-top: 22px; margin-bottom: 10px;
        }
        .cv-doc h3 { font-size: 15px; font-weight: 700; color: #000; margin-bottom: 1px; }
        .cv-doc .job-meta { font-size: 14px; color: #444; margin-bottom: 6px; }
        .cv-doc .job-date { font-size: 14px; color: #555; }
        .cv-doc ul { padding-left: 18px; margin: 0 0 4px 0; }
        .cv-doc li { font-size: 14px; color: #222; margin-bottom: 4px; line-height: 1.55; }
        .cv-doc .summary { font-size: 14px; color: #222; line-height: 1.6; }
        .cv-doc .skills-cat { font-size: 14px; margin-bottom: 4px; }
        .cv-doc .skills-cat strong { color: #000; }
        .cv-doc .edu-item { font-size: 14px; margin-bottom: 6px; }
        .cv-doc .lang-line { font-size: 14px; color: #222; }

        @media print {
          body { background: white !important; margin: 0; }
          .no-print { display: none !important; }
          .cv-wrapper { padding: 0 !important; max-width: 100% !important; }
          .cv-paper { box-shadow: none !important; border: none !important; border-radius: 0 !important; padding: 0 !important; }
          @page { margin: 0.5in 0.6in; size: letter; }
          .cv-doc h1 { font-size: 22px; }
          .cv-doc .subtitle { font-size: 15px; }
          .cv-doc h2 { font-size: 12px; margin-top: 14px; margin-bottom: 6px; }
          .cv-doc h3 { font-size: 13px; }
          .cv-doc li, .cv-doc .summary, .cv-doc .skills-cat, .cv-doc .edu-item, .cv-doc .lang-line, .cv-doc .contact-line, .cv-doc .job-meta, .cv-doc .job-date {
            font-size: 11px; line-height: 1.45;
          }
          .cv-doc li { margin-bottom: 2px; }
          .cv-doc ul { margin-bottom: 2px; }
          .job-block { margin-bottom: 8px !important; }
        }
      `}</style>

      <div className="min-h-dvh bg-gray-100 print:bg-white">
        {/* Toolbar */}
        <div className="no-print sticky top-0 z-30 border-b border-gray-200 bg-white/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
            <Link
              href="/portfolio"
              className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
            >
              &larr; Portfolio
            </Link>
            <div className="flex gap-3">
              <button
                onClick={() => window.print()}
                className="rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-gray-700 active:scale-95"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>

        {/* CV Document */}
        <div className="cv-wrapper mx-auto max-w-3xl px-6 py-10 print:py-0">
          <div className="cv-paper rounded-2xl border border-gray-200 bg-white px-10 py-10 shadow-sm print:rounded-none print:border-none print:p-0 print:shadow-none sm:px-14 sm:py-12">
            <div className="cv-doc">

              {/* ═══ CONTACT INFORMATION ═══ */}
              <h1>Ka Yi Lo (Kay)</h1>
              <div className="subtitle">Senior UX Designer</div>
              <div className="contact-line">hello.kaykay@gmail.com | +1 437 980 9766 | Mississauga, ON, Canada</div>
              <div className="contact-line">linkedin.com/in/kaylo | github.com/productkay</div>

              {/* ═══ PROFESSIONAL SUMMARY ═══ */}
              <h2>Professional Summary</h2>
              <p className="summary">
                Senior UX Designer with 12+ years of experience in UX design, UI design, interaction design, and product design across healthcare, FinTech, retail, and e-commerce. End-to-end practitioner skilled in user research, usability testing, design systems, wireframing, prototyping in Figma, and frontend implementation with React. Proven track record of reducing processing time by 92%, increasing conversion rates by 40%, and building design system component libraries from scratch. Expert in information architecture, accessibility (WCAG), A/B testing, and cross-functional collaboration. Multilingual professional with experience leading design teams across 3 continents.
              </p>

              {/* ═══ WORK EXPERIENCE ═══ */}
              <h2>Work Experience</h2>

              <div className="job-block" style={{ marginBottom: 16 }}>
                <h3>UX Engineer</h3>
                <div className="job-meta">Amaris Consulting (Client: Philips) | Mississauga, ON, Canada</div>
                <div className="job-date">January 2026 – Present</div>
                <ul>
                  <li>Designed and built the frontend for XITE, a cloud-native SaaS platform migrating Philips Somnolyzer sleep scoring software to AWS, reducing study processing time from 3.5 hours to 45 minutes (92% reduction)</li>
                  <li>Created a 7-step guided wizard in Figma and implemented it with React 18, enabling clinicians to process EDF polysomnography studies with AI-assisted channel mapping across 17+ physiological signals</li>
                  <li>Built accessible UI components using the Philips Filament Design System, ensuring FDA and HIPAA compliance for medical software</li>
                  <li>Conducted user research with sleep clinicians to inform channel mapping interface design and validate usability of clinical workflows</li>
                  <li>Produced detailed UX specifications, wireframes, and interaction models to align engineering, clinical, and product stakeholders</li>
                  <li>Defined UX logic for AASM montage compliance, sampling threshold validation, and audit trail infrastructure</li>
                </ul>
              </div>

              <div className="job-block" style={{ marginBottom: 16 }}>
                <h3>Product Designer &amp; UX Designer (Consultant)</h3>
                <div className="job-meta">Wisy | Remote (US-based company)</div>
                <div className="job-date">September 2025 – Present</div>
                <ul>
                  <li>Designed AI-powered retail execution experiences for a B2B SaaS platform serving CPG brands across the United States using Figma</li>
                  <li>Created the Wisy Pulse mobile app UX — guided store visit user journeys with dynamic surveys, photo capture, and AI shelf analysis powered by computer vision</li>
                  <li>Designed human-in-the-loop review interfaces enabling field teams and managers to confirm, correct, or dismiss AI detections, improving detection accuracy</li>
                  <li>Conducted usability testing on photo capture flows to optimize computer vision detection quality and reduce failed scans by 30%+</li>
                  <li>Designed the B2B management portal with information architecture for stores, visits, licenses, and user access for regional and brand managers</li>
                </ul>
              </div>

              <div className="job-block" style={{ marginBottom: 16 }}>
                <h3>UX Lead</h3>
                <div className="job-meta">GoBeyond Group | Toronto, ON, Canada</div>
                <div className="job-date">April 2023 – November 2025</div>
                <ul>
                  <li>Led UX design across loyalty, marketplace, and gift card product lines, unifying brand, copy, and UI across the entire product suite</li>
                  <li>Built a design system component library with 40+ components and design tokens from scratch using Tailwind CSS and React, improving development velocity by 35%</li>
                  <li>Mentored 3 junior designers through structured design critique sessions, raising quality bar for wireframes, prototypes, and design documentation</li>
                  <li>Created user personas, user journey maps, and information architecture to guide product strategy and feature prioritization</li>
                  <li>Partnered with marketing on responsive design templates and campaign landing pages</li>
                </ul>
              </div>

              <div className="job-block" style={{ marginBottom: 16 }}>
                <h3>UX Designer</h3>
                <div className="job-meta">CI&amp;T | Toronto, ON, Canada</div>
                <div className="job-date">May 2022 – November 2023</div>
                <ul>
                  <li>Co-authored multi-brand design system documentation and component libraries for enterprise clients across multiple product lines, improving cross-squad design consistency</li>
                  <li>Facilitated discovery workshops and stakeholder interviews translating cross-functional inputs into wireframes, user flows, and UX specifications</li>
                  <li>Designed enterprise medical device interfaces and e-commerce experiences following user-centered design principles and accessibility standards (WCAG 2.1)</li>
                </ul>
              </div>

              <div className="job-block" style={{ marginBottom: 16 }}>
                <h3>Senior UX Designer — eBanking</h3>
                <div className="job-meta">Banco General | Panama City, Panama</div>
                <div className="job-date">July 2019 – March 2021</div>
                <ul>
                  <li>Led UX design for web journeys including onboarding, KYC verification, credit acquisition, and account servicing for Panama&apos;s largest private bank</li>
                  <li>Established trust-first UX copy strategy and regulatory compliance alignment across all digital banking touchpoints</li>
                  <li>Defined analytics event taxonomy and A/B testing experimentation guardrails that informed funnel optimization and content prioritization</li>
                </ul>
              </div>

              <div className="job-block" style={{ marginBottom: 16 }}>
                <h3>Senior Product Designer — Credit Cards</h3>
                <div className="job-meta">Banco General | Panama City, Panama</div>
                <div className="job-date">October 2018 – June 2019</div>
                <ul>
                  <li>Redesigned the credit card application funnel using progressive disclosure and stateful guidance, achieving 40% higher completion rate through A/B testing against the legacy 15-field form</li>
                  <li>Authored event taxonomy for funnel measurement, enabling data-driven design iteration and conversion rate optimization</li>
                  <li>Created high-fidelity prototypes in Figma and conducted usability testing with 20+ participants to validate design decisions</li>
                </ul>
              </div>

              <div className="job-block" style={{ marginBottom: 16 }}>
                <h3>UX Analyst</h3>
                <div className="job-meta">Banistmo (Bancolombia Group) | Panama City, Panama</div>
                <div className="job-date">August 2016 – September 2018</div>
                <ul>
                  <li>Localized the Nequi P2P digital banking experience for the Panamanian market through user research and iterative design</li>
                  <li>Managed usability testing specifications and executive readouts across multiple product streams</li>
                </ul>
              </div>

              <div className="job-block" style={{ marginBottom: 16 }}>
                <h3>UX Designer</h3>
                <div className="job-meta">Ogilvy &amp; Mather | Hong Kong</div>
                <div className="job-date">2013</div>
                <ul>
                  <li>Designed digital campaign experiences and interactive prototypes for global brands including The Economist and Intel</li>
                </ul>
              </div>

              <div className="job-block" style={{ marginBottom: 16 }}>
                <h3>UX Designer</h3>
                <div className="job-meta">DigitasLBi | Hong Kong</div>
                <div className="job-date">2012 – 2013</div>
                <ul>
                  <li>Won Gold Award for Best Integration of Mobile for the Nike Hong Kong &quot;Own the Night&quot; campaign — real-time tracking, social features, and gamification UX</li>
                  <li>Prototyped onboarding flows, game loops, and UI states for the Pizza Hut &quot;Light Up&quot; iOS and Android mobile app</li>
                  <li>Won Gold Mob-Ex Award for the Pocket Intel web application</li>
                </ul>
              </div>

              {/* ═══ SKILLS ═══ */}
              <h2>Skills</h2>

              <div className="skills-cat">
                <strong>Design &amp; Prototyping Tools:</strong> Figma, FigJam, Sketch, Adobe XD, Adobe Creative Cloud, ProtoPie, Framer, InVision, Axure RP, Miro, Balsamiq
              </div>
              <div className="skills-cat">
                <strong>UX/UI Design:</strong> UX Design, UI Design, Interaction Design, Visual Design, Product Design, Information Architecture, Wireframing, Prototyping, Responsive Design, Mobile-First Design, User-Centered Design, Design Thinking, Design Documentation
              </div>
              <div className="skills-cat">
                <strong>User Research &amp; Testing:</strong> User Research, Usability Testing, User Interviews, User Personas, User Journey Mapping, Jobs-to-Be-Done (JTBD), Heuristic Evaluation, A/B Testing, Card Sorting, Diary Studies
              </div>
              <div className="skills-cat">
                <strong>Design Systems:</strong> Design Systems, Design Tokens, Component Libraries, Style Guides, Design Governance, Multi-Brand Systems, Accessibility (WCAG 2.1)
              </div>
              <div className="skills-cat">
                <strong>Analytics &amp; Metrics:</strong> Google Analytics (GA4), Amplitude, Hotjar, Event Taxonomy, KPI Definition, Conversion Rate Optimization, Experimentation
              </div>
              <div className="skills-cat">
                <strong>Technical:</strong> HTML, CSS, JavaScript, React, React Native, Tailwind CSS, Vite, Redux, Zustand, REST APIs, GraphQL, Git
              </div>
              <div className="skills-cat">
                <strong>AI &amp; Emerging Technology:</strong> AI-Powered UX, Human-in-the-Loop Design, Computer Vision Interfaces, LLM-Assisted Workflows, Claude, ChatGPT, Cursor, GitHub Copilot
              </div>
              <div className="skills-cat">
                <strong>Leadership &amp; Collaboration:</strong> Design Mentoring, Design Critique, Cross-Functional Collaboration, Stakeholder Management, Workshop Facilitation, Agile/Scrum
              </div>
              <div className="skills-cat" style={{ marginBottom: 0 }}>
                <strong>Project Management:</strong> Jira, Linear, Notion, Confluence, Asana
              </div>

              {/* ═══ EDUCATION ═══ */}
              <h2>Education</h2>

              <div className="edu-item">
                <strong>Higher Diploma in Multimedia Design &amp; Technology</strong><br />
                The Hong Kong Polytechnic University | 2009 – 2011
              </div>
              <div className="edu-item">
                <strong>Diploma in Computer Science</strong><br />
                Chu Hai College of Higher Education | 2004 – 2006
              </div>

              {/* ═══ LANGUAGES ═══ */}
              <h2>Languages</h2>
              <div className="lang-line">
                English (Professional, C2) | Spanish (Professional Working) | Cantonese (Native) | Mandarin (Native)
              </div>

              {/* ═══ AWARDS ═══ */}
              <h2>Awards</h2>
              <ul>
                <li>Gold Award — Best Integration of Mobile, Nike &quot;Own the Night&quot; Campaign (DigitasLBi, 2013)</li>
                <li>Gold Mob-Ex Award — Pocket Intel Web Application (DigitasLBi, 2012)</li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
