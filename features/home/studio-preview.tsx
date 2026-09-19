import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/site";
import { routeFor } from "@/lib/site";
import { Reveal } from "@/components/motion/reveal";
const portrait = "/images/studio/narcisse-justin-soglo.jpg";
import { ArrowUpRight } from "lucide-react";

export function StudioPreview({ locale }: { locale: Locale }) {
  return (
    <section className="relative overflow-hidden bg-[#0c3241] text-white">
      <div className="pointer-events-none absolute inset-0 arch-grid opacity-10" />
      <div className="site-container relative grid lg:grid-cols-12">
        <div className="flex flex-col justify-between py-24 lg:col-span-5 lg:min-h-[52rem] lg:py-28 lg:pr-16">
          <Reveal>
            <p className="label text-[#d8ff46]">04 / {locale === "fr" ? "Le Cabinet" : "The Studio"}</p>
            <h2 className="mt-8 font-display text-[clamp(4.5rem,9vw,9rem)] leading-[.75] tracking-[-.055em]">25<sup className="align-top text-4xl text-[#e1693f]">+</sup><br /><span className="text-outline">{locale === "fr" ? "années" : "years"}</span></h2>
          </Reveal>
          <Reveal delay={.1} className="mt-20 lg:mt-0">
            <p className="max-w-md text-base leading-8 text-white/60">{locale === "fr" ? "Une équipe pluridisciplinaire menée par Narcisse Justin SOGLO, avec une même exigence : transformer chaque contrainte en intelligence de projet." : "A multidisciplinary team led by Narcisse Justin SOGLO, with one shared standard: turning every constraint into project intelligence."}</p>
            <Link href={routeFor(locale, "studio")} className="group mt-9 inline-flex items-center gap-4 border-b border-white/25 pb-3 text-[10px] uppercase tracking-[.24em]">{locale === "fr" ? "Rencontrer le studio" : "Meet the studio"}<ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link>
          </Reveal>
        </div>

        <div className="relative min-h-[38rem] lg:col-span-7 lg:min-h-[52rem]">
          <Image src={portrait} alt="Narcisse Justin SOGLO" fill quality={95} sizes="(max-width:1024px) 100vw, 58vw" className="object-cover object-top grayscale-[20%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071d26]/80 via-transparent to-transparent" />
          <div className="glass absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 p-5 md:inset-x-8 md:bottom-8 md:p-7">
            <div><p className="label text-[#d8ff46]">Direction</p><p className="mt-2 font-display text-3xl md:text-4xl">Narcisse Justin SOGLO</p></div>
            <p className="label max-w-[11rem] text-right leading-5 text-white/50">{locale === "fr" ? "Architecte-Gérant · ONAUB n°86" : "Managing Architect · ONAUB No. 86"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
