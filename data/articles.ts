import type { Article } from "@/types";

export const articles: Article[] = [
  {
    slug: "architecture-voyage-inspirations",
    title: { fr: "Architecture & Voyage : Inspirations d'ailleurs", en: "Architecture & Travel: Inspiration from Elsewhere" },
    excerpt: { fr: "Chaque ville et chaque bâtisse racontent une histoire capable d'enrichir le regard de l'architecte.", en: "Every city and building tells a story capable of enriching the architect's eye." },
    date: "2025-11-12", readingTime: 2, category: "insight",
    image: "/images/news/article-01.jpeg",
    body: [{ fr: "Voyager ouvre le regard sur d'autres manières de construire, d'habiter et de composer avec le climat, la matière et la culture.", en: "Travel opens the eye to other ways of building, living and composing with climate, material and culture." }]
  },
  {
    slug: "construction-modulaire",
    title: { fr: "Les Avantages de la Construction Modulaire", en: "The Benefits of Modular Construction" },
    excerpt: { fr: "Une approche innovante qui transforme la manière de concevoir et d'exécuter les bâtiments.", en: "An innovative approach transforming how buildings are designed and delivered." },
    date: "2025-02-19", readingTime: 3, category: "insight",
    image: "/images/news/article-02.jpeg",
    body: [{ fr: "La construction modulaire permet de rationaliser les délais, la qualité et l'organisation du chantier lorsque le système est correctement conçu.", en: "Modular construction can streamline schedules, quality and site organization when the system is properly designed." }]
  },
  {
    slug: "nouvel-an-2025",
    title: { fr: "Nouvel An 2025 : Un Moment Festif et un Succès Partagé", en: "New Year 2025: A Shared Celebration" },
    excerpt: { fr: "Une célébration placée sous le signe de la cohésion et du renouvellement de la triple certification ISO.", en: "A celebration of team cohesion and the renewal of the firm's triple ISO certification." },
    date: "2025-02-03", readingTime: 1, category: "studio",
    image: "/images/news/article-03.jpeg",
    body: [{ fr: "Le cabinet a réuni collaborateurs et prestataires pour célébrer l'année et souligner le renouvellement de sa triple certification ISO.", en: "The studio brought together team members and partners to celebrate the year and highlight the renewal of its triple ISO certification." }]
  },
  {
    slug: "renovation-rehabilitation",
    title: { fr: "Techniques de Rénovation et de Réhabilitation", en: "Renovation and Rehabilitation Techniques" },
    excerpt: { fr: "Transformer l'existant tout en préservant sa valeur architecturale et fonctionnelle.", en: "Transforming existing buildings while preserving architectural and functional value." },
    date: "2024-12-23", readingTime: 2, category: "insight",
    image: "/images/news/article-04.jpeg",
    body: [{ fr: "Toute réhabilitation sérieuse commence par le diagnostic, l'identification des pathologies et une stratégie d'intervention adaptée.", en: "A sound rehabilitation project begins with diagnosis, identification of building pathologies and an adapted intervention strategy." }]
  },
  {
    slug: "ergonomie-architecture",
    title: { fr: "L'ergonomie dans la conception architecturale", en: "Ergonomics in Architectural Design" },
    excerpt: { fr: "Allier esthétique, usages, confort et bien-être dans la conception des espaces.", en: "Combining aesthetics, use, comfort and well-being in spatial design." },
    date: "2024-11-26", readingTime: 2, category: "insight",
    image: "/images/news/article-05.jpeg",
    body: [{ fr: "L'ergonomie place l'humain au centre de la conception et permet d'améliorer confort, sécurité et efficacité des espaces.", en: "Ergonomics places people at the center of design, improving comfort, safety and spatial efficiency." }]
  },
  {
    slug: "architecture-durable",
    title: { fr: "Comprendre l'Architecture Durable", en: "Understanding Sustainable Architecture" },
    excerpt: { fr: "Bâtir un avenir responsable à travers des choix adaptés au climat, aux ressources et aux usages.", en: "Building responsibly through choices adapted to climate, resources and use." },
    date: "2024-10-21", readingTime: 3, category: "sustainability",
    image: "/images/news/article-06.webp",
    body: [{ fr: "Pour TRIUMPHUS, la durabilité relie contexte, sobriété, qualité constructive et pérennité des usages.", en: "For TRIUMPHUS, sustainability connects context, restraint, construction quality and long-term use." }]
  }
];

export const getArticleBySlug = (slug: string) => articles.find((article) => article.slug === slug);
