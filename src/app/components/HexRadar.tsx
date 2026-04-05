"use client";

import { motion } from "framer-motion";

const skills = [
  { label: "UX Design", value: 0.95 },
  { label: "Frontend Dev", value: 0.8 },
  { label: "Design Systems", value: 0.9 },
  { label: "AI & New Tech", value: 0.75 },
  { label: "Research", value: 0.85 },
  { label: "Leadership", value: 0.88 },
];

const size = 200;
const cx = size / 2;
const cy = size / 2;
const levels = 4;

function polarToCart(angle: number, radius: number) {
  // Start from top (-90°), go clockwise
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  };
}

function getHexPoints(radius: number) {
  return skills
    .map((_, i) => {
      const angle = (360 / skills.length) * i;
      const { x, y } = polarToCart(angle, radius);
      return `${x},${y}`;
    })
    .join(" ");
}

function getDataPoints() {
  return skills
    .map((s, i) => {
      const angle = (360 / skills.length) * i;
      const r = (s.value * (size / 2 - 20));
      const { x, y } = polarToCart(angle, r);
      return `${x},${y}`;
    })
    .join(" ");
}

function getDataPointCoords() {
  return skills.map((s, i) => {
    const angle = (360 / skills.length) * i;
    const r = (s.value * (size / 2 - 20));
    return polarToCart(angle, r);
  });
}

export function HexRadar() {
  const maxR = size / 2 - 20;
  const dataCoords = getDataPointCoords();

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg
          width={size + 80}
          height={size + 80}
          viewBox={`${-40} ${-40} ${size + 80} ${size + 80}`}
          className="overflow-visible"
        >
          <defs>
            <linearGradient id="radarFill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(147, 130, 255, 0.35)" />
              <stop offset="100%" stopColor="rgba(80, 220, 180, 0.2)" />
            </linearGradient>
            <linearGradient id="radarStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(147, 130, 255, 0.9)" />
              <stop offset="100%" stopColor="rgba(80, 220, 180, 0.7)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Grid levels */}
          {Array.from({ length: levels }, (_, l) => {
            const r = ((l + 1) / levels) * maxR;
            return (
              <polygon
                key={l}
                points={getHexPoints(r)}
                fill="none"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="1"
              />
            );
          })}

          {/* Axis lines */}
          {skills.map((_, i) => {
            const angle = (360 / skills.length) * i;
            const { x, y } = polarToCart(angle, maxR);
            return (
              <line
                key={i}
                x1={cx}
                y1={cy}
                x2={x}
                y2={y}
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="1"
              />
            );
          })}

          {/* Data shape */}
          <motion.polygon
            points={getDataPoints()}
            fill="url(#radarFill)"
            stroke="url(#radarStroke)"
            strokeWidth="2"
            filter="url(#glow)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />

          {/* Data points (dots) */}
          {dataCoords.map((coord, i) => (
            <motion.circle
              key={i}
              cx={coord.x}
              cy={coord.y}
              r="3.5"
              fill="white"
              stroke="rgba(147, 130, 255, 0.8)"
              strokeWidth="1.5"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1 + i * 0.08 }}
            />
          ))}

          {/* Labels */}
          {skills.map((s, i) => {
            const angle = (360 / skills.length) * i;
            const { x, y } = polarToCart(angle, maxR + 24);
            const anchor =
              Math.abs(x - cx) < 5
                ? "middle"
                : x > cx
                  ? "start"
                  : "end";
            const dy = y < cy ? -2 : y > cy + 5 ? 6 : 2;

            return (
              <motion.text
                key={i}
                x={x}
                y={y + dy}
                textAnchor={anchor}
                className="fill-white/50 text-[10px] font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.2 + i * 0.06 }}
              >
                {s.label}
              </motion.text>
            );
          })}

          {/* Value percentages */}
          {skills.map((s, i) => {
            const angle = (360 / skills.length) * i;
            const { x, y } = polarToCart(angle, maxR + 24);
            const anchor =
              Math.abs(x - cx) < 5
                ? "middle"
                : x > cx
                  ? "start"
                  : "end";
            const dy = y < cy ? -2 : y > cy + 5 ? 6 : 2;

            return (
              <motion.text
                key={`val-${i}`}
                x={x}
                y={y + dy + 12}
                textAnchor={anchor}
                className="fill-white/25 text-[9px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.3 + i * 0.06 }}
              >
                {Math.round(s.value * 100)}%
              </motion.text>
            );
          })}
        </svg>
      </motion.div>
    </div>
  );
}
