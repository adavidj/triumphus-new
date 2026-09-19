import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/site";
import { featuredProjects } from "@/data/projects";
import { routeFor } from "@/lib/site";
import { Reveal } from "@/components/motion/reveal";
import { ArrowUpRight } from "lucide-react";

export function FeaturedProjects({ locale }: { locale: Locale }) {
  return (
    <section className="relative overflow-hidden bg-[#101513] py-28 text-white md:py-40">
      <div className="ambient-orb absolute right-0 top-1/4 size-[30rem] bg-[#0c5661]" />
      <div className="site-container relative">
        <div className="mb-16 grid gap-8 lg:grid-cols-12 md:mb-24">
          <div className="lg:col-span-3"><p className="label text-[#d8ff46]">02 / {locale === "fr" ? "Sélection" : "Selected works"}</p></div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-[clamp(3.5rem,7vw,7rem)] leading-[.88] tracking-[-.045em]">{locale === "fr" ? <>Des projets qui<br /><em className="text-white/45">font territoire.</em></> : <>Projects that<br /><em className="text-white/45">shape place.</em></>}</h2>
          </div>
        </div>

        <div className="space-y-24 md:space-y-40">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id}>
              <Link href={`${routeFor(locale, "projects")}/${project.slug}`} className="group grid gap-6 lg:grid-cols-12 lg:items-end">
                <div className={`${index % 2 ? "lg:order-2 lg:col-start-6 lg:col-end-13" : "lg:col-span-8"}`}>
                  <div className={`relative overflow-hidden ${index % 2 ? "aspect-[4/5] lg:aspect-[5/4]" : "aspect-[16/10]"}`}>
                    <Image src={project.cover} alt={project.title[locale]} fill quality={95} sizes="(max-width:1024px) 100vw, 66vw" className="object-cover grayscale-[18%] transition-all duration-[1.4s] ease-[var(--ease-premium)] group-hover:scale-[1.045] group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60" />
                    <span className="absolute right-5 top-5 grid size-12 place-items-center rounded-full bg-white text-black opacity-0 transition-all duration-500 group-hover:opacity-100"><ArrowUpRight className="size-5" /></span>
                    <span className="label absolute bottom-5 left-5 rounded-full border border-white/25 bg-black/20 px-3 py-2 backdrop-blur-md">{project.status?.[locale] ?? (locale === "fr" ? "Projet" : "Project")}</span>
                  </div>
                </div>
                <div className={`${index % 2 ? "lg:order-1 lg:col-span-4 lg:pr-10" : "lg:col-span-4 lg:pl-10"}`}>
                  <div className="mb-6 flex items-center justify-between border-b border-white/15 pb-4"><p className="label text-[#d8ff46]">0{index + 1}</p><p className="label text-white/35">{project.location}</p></div>
                  <h3 className="font-display text-4xl leading-[.95] tracking-[-.03em] md:text-6xl">{project.title[locale]}</h3>
                  <p className="mt-6 max-w-sm text-sm leading-7 text-white/45">{project.excerpt[locale]}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 flex justify-end md:mt-40">
          <Link href={routeFor(locale, "projects")} className="group flex size-40 items-center justify-center rounded-full border border-white/20 text-center text-[10px] uppercase leading-5 tracking-[.22em] transition-all duration-500 hover:border-[#d8ff46] hover:bg-[#d8ff46] hover:text-black md:size-52">
            {locale === "fr" ? <>Voir les<br />28 projets</> : <>View all<br />28 projects</>}
          </Link>
        </div>
      </div>
    </section>
  );
}
