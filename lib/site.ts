export type Locale = "fr" | "en";

export const site = {
  name: "TRIUMPHUS",
  legalName: "Cabinet d'Architecture TRIUMPHUS",
  founded: 2000,
  phoneDisplay: "+229 01 97 60 11 03",
  phoneHref: "tel:+2290197601103",
  emails: ["sotriumphus@yahoo.fr", "cabinet.archi.triumphus@gmail.com"],
  address: "Cotonou, Fidjrossè — Von Jacquot, Rue 12.394, Lot 1755 bis parcelle F, Bénin",
  shortAddress: "Fidjrossè, Cotonou — Bénin",
  website: "https://www.triumphusbenin.com",
} as const;

export const routeFor = (locale: Locale, key: "home" | "projects" | "studio" | "news" | "careers" | "contact") => {
  const routes = {
    fr: { home: "/", projects: "/projets", studio: "/le-cabinet", news: "/actualites", careers: "/carrieres", contact: "/contact" },
    en: { home: "/en", projects: "/en/projects", studio: "/en/studio", news: "/en/news", careers: "/en/careers", contact: "/en/contact" },
  } as const;
  return routes[locale][key];
};

export const localeText = <T extends { fr: string; en: string }>(value: T, locale: Locale) => value[locale];
