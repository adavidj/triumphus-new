import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.triumphusbenin.com";
  const staticRoutes = ["", "/projets", "/le-cabinet", "/actualites", "/carrieres", "/contact", "/en", "/en/projects", "/en/studio", "/en/news", "/en/careers", "/en/contact"];
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() })),
    ...projects.flatMap((project) => [
      { url: `${base}/projets/${project.slug}`, lastModified: new Date() },
      { url: `${base}/en/projects/${project.slug}`, lastModified: new Date() }
    ]),
    ...articles.flatMap((article) => [
      { url: `${base}/actualites/${article.slug}`, lastModified: new Date(article.date) },
      { url: `${base}/en/news/${article.slug}`, lastModified: new Date(article.date) }
    ])
  ];
}
