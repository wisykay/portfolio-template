"use client";

import { useEffect } from "react";

const colors = [
  "#9382FF",
  "#50DCB4",
  "#FFB450",
  "#FF6B6B",
  "#4DA8FF",
];

function buildFavicon(bg: string) {
  return `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="${bg}"/><text x="16" y="22" text-anchor="middle" font-family="system-ui,sans-serif" font-size="20" font-weight="600" fill="white">K</text></svg>`
  )}`;
}

export function AnimatedFavicon() {
  useEffect(() => {
    let i = 0;

    function setFavicon(color: string) {
      // Remove ALL existing favicons
      document
        .querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]')
        .forEach((el) => el.remove());

      // Create fresh link element each time (forces browser to update)
      const link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/svg+xml";
      link.href = buildFavicon(color);
      document.head.appendChild(link);
    }

    // Set initial
    setFavicon(colors[0]);

    const interval = setInterval(() => {
      i = (i + 1) % colors.length;
      setFavicon(colors[i]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return null;
}
