"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

interface Job { title: string; company: string; }

const locations: { lat: number; lng: number; label: string; year: string; flag: string; jobs: Job[] }[] = [
  { lat: 22.32, lng: 114.17, label: "Hong Kong", year: "2012–2013", flag: "🇭🇰", jobs: [
    { title: "UX Designer", company: "DigitasLBi" },
    { title: "UX Designer", company: "Ogilvy & Mather" },
  ]},
  { lat: 39.90, lng: 116.41, label: "Beijing", year: "2012", flag: "🇨🇳", jobs: [
    { title: "HCI Designer", company: "Qianxiang Group" },
  ]},
  { lat: 8.98, lng: -79.52, label: "Panama City", year: "2016–2021", flag: "🇵🇦", jobs: [
    { title: "UX Analyst", company: "Banistmo" },
    { title: "Sr. Product Designer", company: "Banco General" },
    { title: "Sr. UX Designer", company: "Banco General" },
  ]},
  { lat: 43.65, lng: -79.38, label: "Toronto", year: "2022–2026", flag: "🇨🇦", jobs: [
    { title: "UX Designer", company: "CI&T" },
    { title: "UX Lead", company: "GoBeyond Group" },
    { title: "UX Engineer", company: "Amaris / Philips" },
  ]},
  { lat: 18.47, lng: -66.11, label: "Puerto Rico", year: "2023", flag: "🇵🇷", jobs: [
    { title: "UX Lead", company: "GoBeyond (Gustazos)" },
  ]},
  { lat: 37.77, lng: -122.42, label: "San Francisco", year: "2025", flag: "🇺🇸", jobs: [
    { title: "Product Designer", company: "Wisy (Remote)" },
  ]},
];

interface Visitor { city: string; country: string; flag: string; lat: number; lng: number; time: string; }

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
  const phiRef = useRef(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [visitors, setVisitors] = useState<Visitor[]>([]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    let width = canvas.offsetWidth;

    const markers = locations.map((loc) => ({
      location: [loc.lat, loc.lng] as [number, number],
      size: 0.07,
    }));

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.15, 0.15, 0.2],
      markerColor: [0.31, 0.86, 0.72],
      glowColor: [0.08, 0.08, 0.14],
      markers,
    });
    globeRef.current = globe;

    // Auto-rotate
    const interval = setInterval(() => {
      phiRef.current += 0.005;
      globe.update({ phi: phiRef.current });
    }, 16);

    // Drag interaction
    let dragging = false;
    let startX = 0;
    const onDown = (e: PointerEvent) => { dragging = true; startX = e.clientX; canvas.style.cursor = "grabbing"; };
    const onUp = () => { dragging = false; canvas.style.cursor = "grab"; };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      phiRef.current += (e.clientX - startX) * 0.003;
      startX = e.clientX;
      globe.update({ phi: phiRef.current });
    };

    canvas.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointermove", onMove);

    // Resize
    const onResize = () => {
      width = canvas.offsetWidth;
      globe.update({ width: width * 2, height: width * 2 });
    };
    window.addEventListener("resize", onResize);

    return () => {
      clearInterval(interval);
      globe.destroy();
      canvas.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Focus on a location when hovered or expanded
  const focusIdx = expanded ?? hovered;
  useEffect(() => {
    if (focusIdx === null || !globeRef.current) return;
    const loc = locations[focusIdx];
    const targetPhi = -((loc.lng * Math.PI) / 180) + Math.PI / 2;
    phiRef.current = targetPhi;
    globeRef.current.update({
      phi: targetPhi,
      theta: (loc.lat * Math.PI) / 180 * 0.5,
    });
  }, [focusIdx]);

  // Fetch visitor's location on mount (free API, no key needed)
  useEffect(() => {
    // Fetch current visitor
    fetch("https://ipapi.co/json/")
      .then(r => r.json())
      .then(data => {
        if (data.city) {
          const v: Visitor = {
            city: data.city,
            country: data.country_name,
            flag: countryFlag(data.country_code),
            lat: data.latitude,
            lng: data.longitude,
            time: "Just now",
          };
          setVisitors(prev => [v, ...prev]);
          // Add visitor marker to globe
          if (globeRef.current) {
            const allMarkers = [
              ...locations.map(l => ({ location: [l.lat, l.lng] as [number, number], size: 0.07 })),
              { location: [data.latitude, data.longitude] as [number, number], size: 0.04, color: [1, 0.4, 0.4] as [number, number, number] },
            ];
            globeRef.current.update({ markers: allMarkers });
          }
        }
      })
      .catch(() => {});

    // Simulate a few recent visitors for visual interest
    const fakeVisitors: Visitor[] = [
      { city: "London", country: "UK", flag: "🇬🇧", lat: 51.5, lng: -0.12, time: "2m ago" },
      { city: "São Paulo", country: "Brazil", flag: "🇧🇷", lat: -23.55, lng: -46.63, time: "5m ago" },
      { city: "Tokyo", country: "Japan", flag: "🇯🇵", lat: 35.68, lng: 139.69, time: "8m ago" },
    ];
    setVisitors(prev => [...prev, ...fakeVisitors]);
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-6">
      {/* Left — Career locations */}
      <div className="flex flex-col gap-0.5 order-2 lg:order-1">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-white/60">
          3 continents &middot; 8 cities &middot; 12 years
        </p>
        {locations.map((loc, i) => (
          <div key={loc.label}>
            <button
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setExpanded(expanded === i ? null : i)}
              className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-1.5 text-left transition-all duration-200 ${
                expanded === i
                  ? "bg-white/[0.08] text-white"
                  : hovered === i
                  ? "bg-white/[0.04] text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <span className="text-sm">{loc.flag}</span>
              <span className="text-[13px] font-medium">{loc.label}</span>
              <span className="ml-auto text-[11px] text-white/50">{loc.year}</span>
              <span className={`text-[10px] text-white/50 transition-transform duration-200 ${expanded === i ? "rotate-90" : ""}`}>▶</span>
            </button>
            {/* Expanded jobs */}
            {expanded === i && (
              <div className="ml-8 mt-0.5 mb-1 space-y-0.5">
                {loc.jobs.map((job) => (
                  <div key={job.company} className="flex items-center gap-2 rounded px-2 py-1 text-[12px]">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-[#50DCA4]" />
                    <span className="whitespace-nowrap text-white/80">{job.title}</span>
                    <span className="text-white/50">@</span>
                    <span className="whitespace-nowrap text-white/70">{job.company}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Center — Globe */}
      <div className="relative h-[300px] w-[300px] shrink-0 sm:h-[380px] sm:w-[380px] order-1 lg:order-2">
        <canvas
          ref={canvasRef}
          className="h-full w-full cursor-grab"
          style={{ contain: "layout paint size" }}
        />
        <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(80,220,164,0.06)_0%,transparent_70%)]" />
      </div>

      {/* Right — Live visitors */}
      <div className="flex flex-col gap-1 order-3 min-w-[160px]">
        <div className="mb-2 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
          </span>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
            Live visitors
          </p>
        </div>
        {visitors.map((v, i) => (
          <div
            key={v.city + i}
            className="flex items-center gap-2 rounded-lg px-2 py-1 text-[12px] text-white/70 transition-all duration-300"
            style={{ opacity: i === 0 ? 1 : 0.6 - i * 0.1 }}
          >
            <span className="text-sm">{v.flag}</span>
            <span className="text-white/70">{v.city}</span>
            <span className="ml-auto text-[10px] text-white/50">{v.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function countryFlag(code: string): string {
  return String.fromCodePoint(
    ...code.toUpperCase().split("").map(c => 0x1F1E6 + c.charCodeAt(0) - 65)
  );
}
