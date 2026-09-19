import type { Project, ProjectCategory } from "@/types";

const images = [
  "https://static.wixstatic.com/media/a05c64_356cd05b4610417a8d402c1dcbd9a90c~mv2.jpg",
  "https://static.wixstatic.com/media/a05c64_1f4cc7f0e3ed43acb5a8ac644b47d511~mv2.jpg",
  "https://static.wixstatic.com/media/a05c64_9a9b9fe0f87140d4aadcae2cdf0c0a28~mv2.jpg",
  "https://static.wixstatic.com/media/a05c64_ecff1d6f4530452bbd96054258c3a09a~mv2.jpg",
  "https://static.wixstatic.com/media/a05c64_49913e7f684542e6a0621322cae6d81a~mv2.jpg",
  "https://static.wixstatic.com/media/a05c64_c51c83379cd44dfca06e96e8d8bf673d~mv2.jpg",
  "https://static.wixstatic.com/media/a05c64_51cf56911a574610a1411f7f43ce445a~mv2.jpg",
  "https://static.wixstatic.com/media/a05c64_169dedb32a8f49c8909a35a0b191da51~mv2.jpg",
  "https://static.wixstatic.com/media/a05c64_4577eb261bef44338cfe7dc1871e0f81~mv2.jpg",
  "https://static.wixstatic.com/media/a05c64_2ba76f43290c43eca5a86e38d181c2ae~mv2.jpg",
  "https://static.wixstatic.com/media/a05c64_dd5635793f6a41f1a2e40483228d0215~mv2.jpg",
  "https://static.wixstatic.com/media/a05c64_406ba1bdff0c49e284c1591758afed69~mv2.jpg",
  "https://static.wixstatic.com/media/a05c64_b4096cc27da4406584b4fbf22f2f2e76~mv2.jpg",
  "https://static.wixstatic.com/media/a05c64_15750b1bf9ec410f98e489aa5716999f~mv2.jpg",
  "https://static.wixstatic.com/media/a05c64_42b76540f05e4b63a0f36f40163de8c4~mv2.jpg",
  "https://static.wixstatic.com/media/a05c64_959548fedf5840a69cfa88ee081db72e~mv2.jpg",
  "https://static.wixstatic.com/media/a05c64_0611070a44b644e9b37c9ae884b9c775~mv2.jpg",
  "https://static.wixstatic.com/media/a05c64_966b7ee9cdba4a5e95d7ac186d2c288a~mv2.jpeg",
  "https://static.wixstatic.com/media/a05c64_0dd31ee24f3748569c67d3bd2d22b93b~mv2.jpeg",
  "https://static.wixstatic.com/media/a05c64_50e3ac01052f4d6f99f9e45ce0606983~mv2.jpeg",
  "https://static.wixstatic.com/media/a05c64_d29f96f1b12d4e09b4b5601767466e0f~mv2.jpg",
  "https://static.wixstatic.com/media/a05c64_e53c952421a9429ead50e609a4353725~mv2.jpg",
  "https://static.wixstatic.com/media/a05c64_33c9f3cef8cb459ca7b151d6c23f2423~mv2.jpg",
  "https://static.wixstatic.com/media/a05c64_005cb98a79274d24be24e70bbfcc2cf7~mv2.jpg",
  "https://static.wixstatic.com/media/a05c64_df14bef7a50a43bbb390ebdb7c6bbb66~mv2.jpg",
  "https://static.wixstatic.com/media/a05c64_fcef930763d24be49d596fccb10462a6~mv2.jpg",
  "https://static.wixstatic.com/media/a05c64_53680b2d8a3c493ba1baa1cf98ce77ba~mv2.jpg",
  "https://static.wixstatic.com/media/a05c64_bae86970545c476ba5a9106e8366d5bc~mv2.jpg"
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
