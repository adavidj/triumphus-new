import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/site";
import { routeFor } from "@/lib/site";
import type { Project } from "@/types";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/motion/reveal";

export function ProjectDetail({ project, locale }: { project: Project; locale: Locale }) {
  const index = projects.findIndex((item) => item.id === project.id);
  const next = projects[(index + 1) % projects.length];
  const related = projects.filter((item) => item.category === project.category && item.id !== project.id).slice(0, 3);
  const metadata = [
    [locale === "fr" ? "Localisation" : "Location", project.location],
    [locale === "fr" ? "Catégorie" : "Category", project.category],
    [locale === "fr" ? "Terrain" : "Site", project.landArea ? `${project.landArea.toLocaleString("fr-FR")} m²` : "—"],
    [locale === "fr" ? "Maître d'ouvrage" : "Client", project.client ?? "—"],
    [locale === "fr" ? "Phase" : "Status", project.status?.[locale] ?? "—"],
  ];

  return (
    <article className="bg-[#e9e7e0]">
      <header className="relative min-h-[88svh] overflow-hidden bg-[#101513] text-white">
        <Image src={project.cover} alt={project.title[locale]} fill priority loading="eager" sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        <div className="site-container relative flex min-h-[88svh] flex-col justify-end pb-10 pt-36">
          <Link href={routeFor(locale, "projects")} className="label absolute left-0 top-36 hidden items-center gap-3 text-white/55 transition-colors hover:text-white md:flex"><ArrowLeft className="size-4" />{locale === "fr" ? "Tous les projets" : "All projects"}</Link>
          <p className="label text-[#d8ff46]">{String(index + 1).padStart(2, "0")} / {project.category} / {project.location}</p>
          <h1 className="mt-6 max-w-6xl font-display text-[clamp(4rem,9vw,9rem)] leading-[.82] tracking-[-.055em]">{project.title[locale]}</h1>
          <div className="mt-10 flex items-center justify-between border-t border-white/20 pt-5"><span className="label text-white/45">TRIUMPHUS / 2000—2026</span><span className="label text-white/45">{project.status?.[locale] ?? "—"}</span></div>
        </div>
      </header>

      <section className="arch-grid py-24 md:py-36">
        <div className="site-container grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="label text-[#e1693f]">01 / {locale === "fr" ? "Le projet" : "The project"}</p>
            <h2 className="mt-7 font-display text-[clamp(2.8rem,5vw,5.4rem)] leading-[.95] tracking-[-.035em] text-[#0c3241]">{project.excerpt[locale]}</h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={.08}>
            <p className="max-w-2xl text-base leading-8 text-black/60">{project.description[locale]}</p>
            {project.mission && <p className="mt-6 max-w-2xl text-base leading-8 text-black/60">{project.mission[locale]}</p>}
            <div className="mt-12 grid sm:grid-cols-2">
              {metadata.map(([label, value], metaIndex) => <div key={label} className={`${metaIndex % 2 ? "sm:border-l sm:pl-6" : "sm:pr-6"} border-t border-black/15 py-5`}><p className="label text-black/35">{label}</p><p className="mt-3 text-sm">{value}</p></div>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-container pb-28 md:pb-40">
        <Reveal><div className="relative aspect-[16/10] overflow-hidden"><Image src={project.cover} alt={project.title[locale]} fill sizes="100vw" className="object-cover" /></div></Reveal>
        <div className="mt-6 grid gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-7"><div className="relative aspect-[4/3] overflow-hidden"><Image src={project.gallery[0] ?? project.cover} alt="" fill sizes="60vw" className="object-cover object-left" /></div></Reveal>
          <Reveal className="md:col-span-5" delay={.08}><div className="relative aspect-[4/5] overflow-hidden"><Image src={project.gallery[1] ?? project.cover} alt="" fill sizes="40vw" className="object-cover object-right" /></div></Reveal>
        </div>
      </section>

      {related.length > 0 && <section className="border-t border-black/15 py-24 md:py-32"><div className="site-container"><div className="mb-12 flex items-end justify-between"><div><p className="label text-[#e1693f]">02 / {locale === "fr" ? "À découvrir" : "Discover more"}</p><h2 className="mt-5 font-display text-5xl md:text-7xl">{locale === "fr" ? "Projets liés" : "Related projects"}</h2></div></div><div className="grid gap-6 md:grid-cols-3">{related.map((item) => <Link key={item.id} href={`${routeFor(locale, "projects")}/${item.slug}`} className="group"><div className="relative aspect-[4/5] overflow-hidden"><Image src={item.cover} alt={item.title[locale]} fill sizes="33vw" className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]" /><span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-white opacity-0 transition-opacity group-hover:opacity-100"><ArrowUpRight className="size-4" /></span></div><div className="mt-4 flex items-start justify-between border-t border-black/15 pt-4"><div><p className="font-display text-2xl">{item.title[locale]}</p><p className="label mt-2 text-black/35">{item.location}</p></div></div></Link>)}</div></div></section>}

      <Link href={`${routeFor(locale, "projects")}/${next.slug}`} className="group relative block overflow-hidden bg-[#0c3241] py-24 text-white md:py-32">
        <div className="ambient-orb absolute -right-24 -top-24 size-96 bg-[#e1693f]" />
        <div className="site-container relative"><p className="label text-[#d8ff46]">{locale === "fr" ? "Projet suivant" : "Next project"}</p><div className="mt-7 flex items-end justify-between gap-8"><p className="max-w-5xl font-display text-5xl leading-[.9] tracking-[-.035em] md:text-8xl">{next.title[locale]}</p><ArrowUpRight className="size-12 shrink-0 transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-2" /></div></div>
      </Link>
    </article>
  );
}
