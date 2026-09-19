export const statistics = [
  { value: 25, suffix: "+", fr: "Années d'expérience", en: "Years of experience" },
  { value: 25, suffix: "+", fr: "Projets", en: "Projects" },
  { value: 5, suffix: "", fr: "Typologies", en: "Typologies" }
] as const;

export const services = [
  { index: "01", fr: "Architecture", en: "Architecture", descriptionFr: "Études préliminaires, esquisses, avant-projets, projets d'exécution et accompagnement architectural.", descriptionEn: "Preliminary studies, concepts, design development, execution projects and architectural support." },
  { index: "02", fr: "Décoration", en: "Decoration", descriptionFr: "Des intérieurs cohérents, fonctionnels et porteurs d'identité.", descriptionEn: "Coherent, functional interiors with a distinctive identity." },
  { index: "03", fr: "Design", en: "Design", descriptionFr: "Concevoir des objets, détails et expériences au service de l'espace.", descriptionEn: "Designing objects, details and experiences in service of space." },
  { index: "04", fr: "Urbanisme", en: "Urban planning", descriptionFr: "Planifier des territoires durables et adaptés aux usages contemporains.", descriptionEn: "Planning sustainable territories adapted to contemporary life." },
  { index: "05", fr: "Expertise immobilière", en: "Real estate expertise", descriptionFr: "Assistance technique, appels d'offres, surveillance et expertise des opérations immobilières.", descriptionEn: "Technical assistance, tenders, monitoring and real-estate expertise." }
] as const;

export const values = [
  ["Probité", "Integrity"], ["Performance", "Performance"], ["Professionnalisme", "Professionalism"],
  ["Respect de l'autre", "Respect for others"], ["Esprit d'équipe", "Team spirit"], ["Convivialité", "Conviviality"]
] as const;

export const certifications = [
  ["ISO 9001:2015", "Management de la qualité", "Quality management"],
  ["ISO 14001:2015", "Management environnemental", "Environmental management"],
  ["ISO 45001:2018", "Santé & sécurité au travail", "Occupational health & safety"]
] as const;
