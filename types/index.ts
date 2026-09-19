import type { Locale } from "@/lib/site";

export type LocalizedText = Record<Locale, string>;

export type ProjectCategory = "educational" | "residential" | "commercial" | "institutional" | "cultural";

export interface Project {
  id: string;
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  description: LocalizedText;
  category: ProjectCategory;
  location: string;
  year?: number;
  landArea?: number;
  builtArea?: number;
  client?: string;
  mission?: LocalizedText;
  status?: LocalizedText;
  cover: string;
  gallery: string[];
  featured: boolean;
}

export interface Article {
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  date: string;
  readingTime: number;
  category: "insight" | "studio" | "sustainability";
  image: string;
  body: LocalizedText[];
}
