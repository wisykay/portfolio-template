import { sanityClient } from "./client";
import type { Project, Profile, Skill, Category } from "./types";

// ─── Projects ────────────────────────────────────────────────────────────────

const projectFields = `
  _id,
  title,
  slug,
  description,
  tags,
  category->{ _id, title },
  url,
  repo,
  date,
  featured,
  thumbnail
`;

const projectDetailFields = `
  ${projectFields},
  body,
  images
`;

export async function searchProjects(opts: {
  query?: string;
  tag?: string;
  category?: string;
  featured?: boolean;
  limit?: number;
}): Promise<Project[]> {
  const filters: string[] = ['_type == "project"'];

  if (opts.query) {
    filters.push(`(title match $query || description match $query || $query in tags)`);
  }
  if (opts.tag) {
    filters.push(`$tag in tags`);
  }
  if (opts.category) {
    filters.push(`category->title == $category`);
  }
  if (opts.featured) {
    filters.push(`featured == true`);
  }

  const filter = filters.join(" && ");
  const groq = `*[${filter}] | order(date desc) [0...${opts.limit || 5}] { ${projectFields} }`;

  const params: Record<string, string> = {};
  if (opts.query) params.query = `*${opts.query}*`;
  if (opts.tag) params.tag = opts.tag;
  if (opts.category) params.category = opts.category;

  return sanityClient.fetch(groq, params);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return sanityClient.fetch(
    `*[_type == "project" && slug.current == $slug][0] { ${projectDetailFields} }`,
    { slug }
  );
}

// ─── Profile ─────────────────────────────────────────────────────────────────

export async function getProfile(): Promise<Profile | null> {
  return sanityClient.fetch(
    `*[_type == "profile"][0] {
      _id,
      name,
      title,
      bio,
      longBio,
      avatar,
      skills[]->{ _id, name, category, level },
      socials,
      email,
      ownerType,
      accentColor,
      enabledThemes
    }`
  );
}

// ─── Skills ──────────────────────────────────────────────────────────────────

export async function getSkills(category?: string): Promise<Skill[]> {
  if (category) {
    return sanityClient.fetch(
      `*[_type == "skill" && category == $category] | order(level desc) { _id, name, category, level }`,
      { category }
    );
  }
  return sanityClient.fetch(
    `*[_type == "skill"] | order(category asc, level desc) { _id, name, category, level }`
  );
}

// ─── Categories ──────────────────────────────────────────────────────────────

export async function getCategories(): Promise<Category[]> {
  return sanityClient.fetch(
    `*[_type == "category"] | order(title asc) { _id, title, description }`
  );
}
