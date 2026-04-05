import { tool } from "ai";
import { z } from "zod";
import {
  searchProjects,
  getProjectBySlug,
  getProfile,
  getSkills,
  getCategories,
} from "@/lib/sanity/queries";
import { searchEntries } from "@/lib/knowledge";

export const portfolioTools = {
  searchProjects: tool({
    description:
      'Search portfolio projects by keyword, tag, or category. Use when the visitor asks to see work, projects, or anything related to portfolio pieces.',
    inputSchema: z.object({
      query: z.string().optional().describe("Search keyword"),
      tag: z.string().optional().describe('Filter by tag (e.g. "react", "design")'),
      category: z.string().optional().describe("Filter by category name"),
      featured: z.boolean().optional().describe("Only return featured projects"),
      limit: z.number().optional().default(5).describe("Max results to return"),
    }),
    execute: async ({ query, tag, category, featured, limit }) => {
      const projects = await searchProjects({ query, tag, category, featured, limit });
      if (projects.length === 0) {
        return { projects: [] as string[], message: "No projects found matching that criteria." };
      }
      return {
        projects: projects.map((p) => ({
          title: p.title,
          slug: p.slug.current,
          description: p.description,
          tags: p.tags,
          category: p.category?.title,
          url: p.url,
          repo: p.repo,
          date: p.date,
          featured: p.featured,
        })),
      };
    },
  }),

  getProjectDetail: tool({
    description:
      "Get full details of a specific project including full description, all images, and links.",
    inputSchema: z.object({
      slug: z.string().describe("The project slug identifier"),
    }),
    execute: async ({ slug }) => {
      const project = await getProjectBySlug(slug);
      if (!project) {
        return { error: "Project not found." };
      }
      return {
        title: project.title,
        slug: project.slug.current,
        description: project.description,
        tags: project.tags,
        category: project.category?.title,
        url: project.url,
        repo: project.repo,
        date: project.date,
        featured: project.featured,
      };
    },
  }),

  getAboutMe: tool({
    description:
      'Get the portfolio owner\'s bio, professional title, and background. Use when the visitor asks "who are you", "about", "tell me about yourself".',
    inputSchema: z.object({}),
    execute: async () => {
      const profile = await getProfile();
      if (!profile) {
        return { error: "Profile not found." };
      }
      return {
        name: profile.name,
        title: profile.title,
        bio: profile.bio,
        ownerType: profile.ownerType,
      };
    },
  }),

  getSkills: tool({
    description:
      "Get list of skills/technologies, optionally filtered by category (frontend, backend, design, devops, music).",
    inputSchema: z.object({
      category: z
        .string()
        .optional()
        .describe("Filter by skill category: frontend, backend, design, devops, music"),
    }),
    execute: async ({ category }) => {
      const skills = await getSkills(category);
      return {
        skills: skills.map((s) => ({
          name: s.name,
          category: s.category,
          level: s.level,
        })),
      };
    },
  }),

  getContactInfo: tool({
    description:
      "Get contact information and social media links. Use when the visitor asks how to reach out, connect, hire, or follow.",
    inputSchema: z.object({}),
    execute: async () => {
      const profile = await getProfile();
      if (!profile) {
        return { error: "Profile not found." };
      }
      return {
        email: profile.email,
        socials: profile.socials,
      };
    },
  }),

  getCategories: tool({
    description:
      "Get all project categories to help understand the breadth of work.",
    inputSchema: z.object({}),
    execute: async () => {
      const categories = await getCategories();
      return {
        categories: categories.map((c) => ({
          title: c.title,
          description: c.description,
        })),
      };
    },
  }),

  searchKnowledge: tool({
    description:
      "Search the knowledge base for previously answered questions similar to the current query. Use this FIRST before answering questions about Kay's experience, skills, process, or projects to provide more informed and consistent answers.",
    inputSchema: z.object({
      query: z
        .string()
        .describe("The user's question or key phrases to search for"),
      limit: z
        .number()
        .optional()
        .default(3)
        .describe("Max results to return"),
    }),
    execute: async ({ query, limit }) => {
      const results = searchEntries(query, limit);
      if (results.length === 0) {
        return { entries: [] as string[], message: "No relevant past answers found." };
      }
      return {
        entries: results.map((e) => ({
          question: e.question,
          answer: e.answer,
          category: e.category,
          qualityScore: e.qualityScore,
        })),
      };
    },
  }),
};
