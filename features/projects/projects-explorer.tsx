"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/types";
import type { Locale } from "@/lib/site";
import { routeFor } from "@/lib/site";

const categories: { value: "all" | ProjectCategory; fr: string; en: string }[] = [
  { value: "all", fr: "Tous", en: "All" },
  { value: "educational", fr: "Éducation", en: "Education" },
  { value: "residential", fr: "Résidentiel", en: "Residential" },
  { value: "commercial", fr: "Commercial", en: "Commercial" },
  { value: "institutional", fr: "Institutionnel", en: "Institutional" },
  { value: "cultural", fr: "Culture", en: "Culture" },
];

const categoryNames: Record<ProjectCategory, { fr: string; en: string }> = {
  educational: { fr: "Éducation", en: "Education" },
  residential: { fr: "Résidentiel", en: "Residential" },
  commercial: { fr: "Commercial", en: "Commercial" },
  institutional: { fr: "Institutionnel", en: "Institutional" },
  cultural: { fr: "Culture", en: "Culture" },
};

export function ProjectsExplorer({ locale }: { locale: Locale }) {
  const [category, setCategory] = useState<"all" | ProjectCategory>("all");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => projects.filter((project) => (category === "all" || project.category === category) && project.title[locale].toLowerCase().includes(query.toLowerCase())), [category, query, locale]);

  return (
    <section className="bg-[#e9e7e0] pb-28 pt-6 md:pb-40 md:pt-8">
      <div className="site-container">
        <div className="sticky top-20 z-30 -mx-4 mb-10 border-y border-black/15 bg-[#e9e7e0]/90 px-4 py-4 backdrop-blur-xl md:top-24 md:mx-0 md:mb-16 md:px-0">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div className="hide-scrollbar flex gap-2 overflow-x-auto pb-1">
              {categories.map((item) => {
                const count = item.value === "all" ? projects.length : projects.filter((project) => project.category === item.value).length;
                const active = category === item.value;
                return <button key={item.value} onClick={() => setCategory(item.value)} className={`whitespace-nowrap rounded-full border px-4 py-2 text-[9px] uppercase tracking-[.2em] transition-all ${active ? "border-[#0c3241] bg-[#0c3241] text-white" : "border-black/15 text-black/45 hover:border-black/40 hover:text-black"}`}>{locale === "fr" ? item.fr : item.en} <span className={active ? "text-[#d8ff46]" : "opacity-40"}>{String(count).padStart(2, "0")}</span></button>;
              })}
            </div>
            <label className="flex min-w-64 items-center gap-3 border-b border-black/20 pb-2">
              <Search className="size-4 text-black/35" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={locale === "fr" ? "Rechercher un projet" : "Search projects"} className="w-full bg-transparent text-sm outline-none placeholder:text-black/35" />
            </label>
          </div>
        </div>

        <div className="mb-9 flex items-center justify-between border-b border-black/15 pb-4 md:mb-12">
          <p className="label text-black/45"><span className="text-[#e1693f]">{String(filtered.length).padStart(2, "0")}</span> {locale === "fr" ? "projets affichés" : "projects shown"}</p>
          <p className="label hidden text-black/30 sm:block">{locale === "fr" ? "Sélection / 2000—2026" : "Selected / 2000—2026"}</p>
        </div>

        <motion.div layout className="grid gap-x-6 gap-y-12 md:grid-cols-2 md:gap-y-16 xl:grid-cols-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => {
              const wide = index % 7 === 0 || index % 7 === 4;
              return (
                <motion.article layout key={project.id} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: .97 }} transition={{ duration: .5, ease: [.22, 1, .36, 1] }} className={wide ? "md:col-span-2 xl:col-span-7" : "xl:col-span-5"}>
                  <Link href={`${routeFor(locale, "projects")}/${project.slug}`} className="group block">
                    <div className={`relative overflow-hidden bg-[#d2d0c8] ${wide ? "aspect-[16/10]" : "aspect-[4/3] md:aspect-[4/5]"}`}>
                      <Image src={project.cover} alt={project.title[locale]} fill quality={95} sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 58vw" className="object-cover grayscale-[12%] transition-all duration-[1.2s] ease-[var(--ease-premium)] group-hover:scale-[1.04] group-hover:grayscale-0" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70" />
                      <span className="label glass absolute left-4 top-4 rounded-full px-3 py-2 text-white">{String(index + 1).padStart(2, "0")}</span>
                      <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-[#d8ff46] text-black opacity-100 transition-all duration-500 md:right-5 md:top-5 md:size-11 md:opacity-0 md:group-hover:opacity-100"><ArrowUpRight className="size-5" /></span>
                      <p className="label absolute bottom-5 left-5 text-white/70">{project.status?.[locale] ?? (locale === "fr" ? "Projet" : "Project")}</p>
                    </div>
                    <div className="mt-4 flex items-start justify-between gap-6 border-t border-black/15 pt-4 md:mt-5">
                      <div><p className="font-display text-3xl leading-[1] tracking-[-.025em] md:text-4xl">{project.title[locale]}</p><p className="label mt-3 text-black/40">{project.location} · {categoryNames[project.category][locale]}</p><p className="mt-4 max-w-xl text-xs leading-6 text-black/45 md:hidden">{project.excerpt[locale]}</p></div>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && <div className="border-y border-black/15 py-24 text-center"><p className="font-display text-4xl text-black/45">{locale === "fr" ? "Aucun projet trouvé." : "No project found."}</p></div>}
      </div>
    </section>
  );
}
