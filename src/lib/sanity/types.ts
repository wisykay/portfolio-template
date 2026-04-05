export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  body?: unknown[];
  thumbnail?: SanityImage;
  images?: SanityImage[];
  tags?: string[];
  category?: {
    _id: string;
    title: string;
  };
  url?: string;
  repo?: string;
  date?: string;
  featured?: boolean;
}

export interface Profile {
  _id: string;
  name: string;
  title: string;
  bio: string;
  longBio?: unknown[];
  avatar?: SanityImage;
  skills?: Skill[];
  socials?: Social[];
  email?: string;
  ownerType?: string;
  accentColor?: string;
  enabledThemes?: string[];
}

export interface Skill {
  _id: string;
  name: string;
  category?: string;
  level?: number;
}

export interface Category {
  _id: string;
  title: string;
  description?: string;
}

export interface Social {
  platform: string;
  url: string;
}

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}
