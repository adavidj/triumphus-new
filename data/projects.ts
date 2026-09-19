import type { Project, ProjectCategory } from "@/types";

const images = [
  "/images/projects/project-01.jpg",
  "/images/projects/project-02.jpg",
  "/images/projects/project-03.jpg",
  "/images/projects/project-04.jpg",
  "/images/projects/project-05.jpg",
  "/images/projects/project-06.jpg",
  "/images/projects/project-07.jpg",
  "/images/projects/project-08.jpg",
  "/images/projects/project-09.jpg",
  "/images/projects/project-10.jpg",
  "/images/projects/project-11.jpg",
  "/images/projects/project-12.jpg",
  "/images/projects/project-13.jpg",
  "/images/projects/project-14.jpg",
  "/images/projects/project-15.jpg",
  "/images/projects/project-16.jpg",
  "/images/projects/project-17.jpg",
  "/images/projects/project-18.jpeg",
  "/images/projects/project-19.jpeg",
  "/images/projects/project-20.jpeg",
  "/images/projects/project-21.jpg",
  "/images/projects/project-22.jpg",
  "/images/projects/project-23.jpg",
  "/images/projects/project-24.jpg",
  "/images/projects/project-25.jpg",
  "/images/projects/project-26.jpg",
  "/images/projects/project-27.jpg",
  "/images/projects/project-28.jpg"
];

const categorySequence: ProjectCategory[] = [
  ...Array(5).fill("educational"),
  ...Array(11).fill("residential"),
  ...Array(5).fill("commercial"),
  ...Array(5).fill("institutional"),
  ...Array(2).fill("cultural")
] as ProjectCategory[];

const knownTitles: Record<number, { fr: string; en: string; location?: string; area?: number; client?: string }> = {
  0: { fr: "FASEG — Ouidah", en: "FASEG — Ouidah", location: "Ouidah", area: 28000, client: "MESRS / ACISE" },
  1: { fr: "Résidences FASEG", en: "FASEG Residences", location: "Ouidah", client: "MERS / ACISE" },
  2: { fr: "Lycée Technique de Lokossa", en: "Lokossa Technical High School", location: "Lokossa", area: 14580, client: "MESRS / ACISE" },
  3: { fr: "Université Nationale d'Agriculture", en: "National University of Agriculture", location: "Sakété", area: 13250 },
  5: { fr: "Complexe résidentiel R+2", en: "R+2 Residential Complex", location: "Abomey-Calavi", area: 703, client: "Privé" },
  6: { fr: "Immeuble résidentiel R+2", en: "R+2 Residential Building", location: "Cotonou", area: 401, client: "Privé" },
  7: { fr: "Immeuble d'habitation R+2", en: "R+2 Residential Building", location: "Cotonou", area: 188, client: "Privé" },
  8: { fr: "Résidence R+2 — Cotonou", en: "R+2 Residence — Cotonou", location: "Cotonou", area: 290, client: "Privé" },
  9: { fr: "Résidence R+1 — Fidjrossè", en: "R+1 Residence — Fidjrossè", location: "Cotonou", area: 606, client: "Privé" },
  16: { fr: "Marché de Friperie PK3", en: "PK3 Second-hand Market", location: "Cotonou", area: 28000, client: "MCVDD / ACVDT" },
  17: { fr: "Marché Secondaire de Yenawa", en: "Yenawa Secondary Market", location: "Cotonou", area: 5005, client: "MCVDD / ACVDT" },
  18: { fr: "Marché Secondaire de Doudédji", en: "Doudédji Secondary Market", location: "Cotonou", area: 3000, client: "MCVDD / ACVDT" },
  19: { fr: "Pôle Commercial du Stade GMK", en: "GMK Stadium Commercial Hub", location: "Cotonou", area: 40000, client: "MCVDD / SIMAU" },
  21: { fr: "Clinique DIARA", en: "DIARA Clinic", location: "Cotonou" }
};

const labels = {
  educational: { fr: "Projet éducationnel", en: "Educational project" },
  residential: { fr: "Projet résidentiel", en: "Residential project" },
  commercial: { fr: "Projet commercial", en: "Commercial project" },
  institutional: { fr: "Projet institutionnel", en: "Institutional project" },
  cultural: { fr: "Projet culturel", en: "Cultural project" }
} as const;

export const projects: Project[] = images.map((cover, index) => {
  const category = categorySequence[index];
  const info = knownTitles[index];
  const numberInCategory = categorySequence.slice(0, index + 1).filter((value) => value === category).length;
  const title = info ? { fr: info.fr, en: info.en } : {
    fr: `${labels[category].fr} ${String(numberInCategory).padStart(2, "0")}`,
    en: `${labels[category].en} ${String(numberInCategory).padStart(2, "0")}`
  };
  const slug = title.fr.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") + `-${index + 1}`;
  return {
    id: `project-${index + 1}`,
    slug,
    title,
    excerpt: {
      fr: "Une réalisation TRIUMPHUS pensée pour conjuguer usage, précision constructive et qualité architecturale.",
      en: "A TRIUMPHUS project balancing use, construction precision and architectural quality."
    },
    description: {
      fr: "TRIUMPHUS accompagne chaque opération de l'étude architecturale au suivi de réalisation, avec une attention portée au contexte, à la durabilité et à la qualité d'usage.",
      en: "TRIUMPHUS supports each project from architectural studies to delivery, with close attention to context, sustainability and quality of use."
    },
    category,
    location: info?.location ?? "Bénin",
    landArea: info?.area,
    client: info?.client,
    mission: {
      fr: "Études architecturales et techniques, accompagnement du maître d'ouvrage et suivi de réalisation.",
      en: "Architectural and technical studies, client assistance and construction monitoring."
    },
    status: {
      fr: index % 3 === 0 ? "Études / DCE" : index % 3 === 1 ? "Chantier" : "Projet réalisé",
      en: index % 3 === 0 ? "Design / Tender" : index % 3 === 1 ? "Construction" : "Completed"
    },
    cover,
    gallery: [cover],
    featured: [0, 3, 16, 19].includes(index)
  };
});

export const featuredProjects = projects.filter((project) => project.featured);
export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
