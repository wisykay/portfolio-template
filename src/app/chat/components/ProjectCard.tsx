"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description?: string;
  tags?: string[];
  url?: string;
  repo?: string;
  slug: string;
  category?: string;
  date?: string;
}

function SitePreview({ url, title }: { url: string; title: string }) {
  const [imgError, setImgError] = useState(false);

  // Use microlink.io screenshot API (free, no key needed)
  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;

  if (imgError) {
    // Fallback: show an iframe embed
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-lg border border-white/10"
      >
        <div className="relative h-[200px] w-full overflow-hidden bg-black/30">
          <iframe
            src={url}
            title={title}
            className="pointer-events-none h-[800px] w-[1280px] origin-top-left scale-[0.25] border-0"
            sandbox="allow-same-origin allow-scripts"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40">
          <span className="rounded-full bg-indigo-600 px-4 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
            View Live &rarr;
          </span>
        </div>
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-lg border border-white/10"
    >
      <img
        src={screenshotUrl}
        alt={`Preview of ${title}`}
        className="h-[180px] w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
        onError={() => setImgError(true)}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40">
        <span className="rounded-full bg-indigo-600 px-4 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
          View Live &rarr;
        </span>
      </div>
    </a>
  );
}

export function ProjectCard({
  title,
  description,
  tags,
  url,
  repo,
  category,
  date,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
    >
      {/* Live site preview thumbnail */}
      {url && <SitePreview url={url} title={title} />}

      <div className="p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="font-semibold text-white">{title}</h3>
          {category && (
            <span className="shrink-0 rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/60">
              {category}
            </span>
          )}
        </div>

        {description && (
          <p className="mb-3 text-sm leading-relaxed text-white/70">{description}</p>
        )}

        {tags && tags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-indigo-500/20 px-2 py-0.5 text-xs text-indigo-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-3">
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-indigo-400 transition-colors hover:text-indigo-300"
            >
              View Live &rarr;
            </a>
          )}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-white/50 transition-colors hover:text-white/70"
            >
              Source Code
            </a>
          )}
          {date && (
            <span className="ml-auto text-xs text-white/30">{date}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
