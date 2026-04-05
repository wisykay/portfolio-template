export interface KnowledgeEntry {
  id: string;
  question: string;
  answer: string;
  category:
    | "experience"
    | "skills"
    | "projects"
    | "process"
    | "leadership"
    | "education"
    | "general";
  tags: string[];
  qualityScore: number;
  source: "seed" | "auto" | "manual";
  createdAt: string;
  updatedAt: string;
}

export interface KnowledgeStore {
  version: 1;
  entries: KnowledgeEntry[];
}
