import type { Locale } from "@/lib/site";
import { ProjectsExplorer } from "@/features/projects/projects-explorer";
import { InnerPageHero } from "@/components/layout/inner-page-hero";

export function ProjectsPage({ locale }: { locale: Locale }) {
  return (
    <>
      <InnerPageHero
        index="01"
        eyebrow={locale === "fr" ? "Portfolio / 28 réalisations" : "Portfolio / 28 works"}
        title={<>{locale === "fr" ? "Projets" : "Projects"}<span className="text-[#e1693f]">.</span></>}
        note={locale === "fr" ? "Architecture · Urbanisme · Design · Afrique de l'Ouest" : "Architecture · Urban planning · Design · West Africa"}
        metaLeft="2000 — 2026"
      />
      <ProjectsExplorer locale={locale} />
    </>
  );
}
