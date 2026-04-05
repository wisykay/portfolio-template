import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { randomUUID } from "crypto";
import type { KnowledgeEntry, KnowledgeStore } from "./types";

const KNOWLEDGE_PATH = join(
  process.cwd(),
  "src/lib/knowledge/skills.json"
);

const MAX_ENTRIES = 500;

// ─── Write lock (prevents concurrent file corruption) ────────────────────────

let writeLock: Promise<void> = Promise.resolve();

function withWriteLock<T>(fn: () => T): Promise<T> {
  const next = writeLock.then(() => fn());
  writeLock = next.then(
    () => {},
    () => {}
  );
  return next;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function readStore(): KnowledgeStore {
  try {
    const raw = readFileSync(KNOWLEDGE_PATH, "utf-8");
    return JSON.parse(raw) as KnowledgeStore;
  } catch {
    return { version: 1, entries: [] };
  }
}

function writeStore(store: KnowledgeStore): void {
  writeFileSync(KNOWLEDGE_PATH, JSON.stringify(store, null, 2), "utf-8");
}

// ─── Public API ──────────────────────────────────────────────────────────────

export function getAllEntries(): KnowledgeEntry[] {
  return readStore().entries;
}

export function searchEntries(
  query: string,
  limit: number = 3
): KnowledgeEntry[] {
  const entries = readStore().entries;
  const tokens = query
    .toLowerCase()
    .split(/\s+/)
    .filter((t) => t.length > 2);

  if (tokens.length === 0) return [];

  const scored = entries
    .filter((e) => e.qualityScore > -3)
    .map((entry) => {
      const questionLower = entry.question.toLowerCase();
      const tagsLower = entry.tags.map((t) => t.toLowerCase());
      const answerSnippet = entry.answer.toLowerCase().slice(0, 200);

      let score = 0;
      for (const token of tokens) {
        if (questionLower.includes(token)) score += 3;
        if (tagsLower.some((tag) => tag.includes(token))) score += 2;
        if (answerSnippet.includes(token)) score += 1;
      }

      // Quality boost: score of 5 → 1.5x, score of -2 → 0.8x
      const qualityMultiplier = Math.max(
        0.1,
        1 + entry.qualityScore * 0.1
      );

      return { entry, relevance: score * qualityMultiplier };
    })
    .filter((s) => s.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, limit);

  return scored.map((s) => s.entry);
}

export async function addEntry(
  data: Omit<
    KnowledgeEntry,
    "id" | "createdAt" | "updatedAt" | "qualityScore"
  > & { qualityScore?: number }
): Promise<KnowledgeEntry> {
  return withWriteLock(() => {
    const store = readStore();

    const entry: KnowledgeEntry = {
      id: randomUUID().slice(0, 8),
      question: data.question,
      answer: data.answer,
      category: data.category,
      tags: data.tags,
      qualityScore: data.qualityScore ?? 0,
      source: data.source,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    store.entries.push(entry);

    // Prune if over limit — remove lowest-scored auto entries
    if (store.entries.length > MAX_ENTRIES) {
      store.entries
        .filter((e) => e.source === "auto")
        .sort((a, b) => a.qualityScore - b.qualityScore)
        .slice(0, store.entries.length - MAX_ENTRIES)
        .forEach((toRemove) => {
          const idx = store.entries.indexOf(toRemove);
          if (idx !== -1) store.entries.splice(idx, 1);
        });
    }

    writeStore(store);
    return entry;
  });
}

export async function updateQualityScore(
  id: string,
  delta: number
): Promise<KnowledgeEntry | null> {
  return withWriteLock(() => {
    const store = readStore();
    const entry = store.entries.find((e) => e.id === id);
    if (!entry) return null;

    entry.qualityScore += delta;
    entry.updatedAt = new Date().toISOString();
    writeStore(store);
    return entry;
  });
}

export function isDuplicate(question: string): boolean {
  const normalized = question.toLowerCase().trim().replace(/[?.!]+$/, "");
  const entries = readStore().entries;
  return entries.some(
    (e) => e.question.toLowerCase().trim().replace(/[?.!]+$/, "") === normalized
  );
}
