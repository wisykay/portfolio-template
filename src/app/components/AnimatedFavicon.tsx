"use client";

import { useEffect } from "react";

const colors = [
  "#9382FF", // purple (chat accent)
  "#50DCB4", // green (game accent)
  "#FFB450", // orange (portfolio accent)
  "#FF6B6B", // red
  "#4DA8FF", // blue
];

function buildFavicon(bg: string) {
  return `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <rect width="32" height="32" rx="8" fill="${bg}"/>
      <text x="16" y="22" text-anchor="middle" font-family="system-ui,sans-serif" font-size="20" font-weight="600" fill="white">K</text>
    </svg>`
  )}`;
}

export function AnimatedFavicon() {
  useEffect(() => {
    let i = 0;
    // Remove all existing icon links so browser uses ours
    document
      .querySelectorAll<HTMLLinkElement>('link[rel="icon"]')
      .forEach((el) => el.remove());

    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/svg+xml";
    document.head.appendChild(link);
    link.href = buildFavicon(colors[0]);

    const interval = setInterval(() => {
      i = (i + 1) % colors.length;
      link.href = buildFavicon(colors[i]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return null;
}
