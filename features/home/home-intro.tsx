import type { Locale } from "@/lib/site";
import { Reveal } from "@/components/motion/reveal";
import Link from "next/link";
import { routeFor } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

export function HomeIntro({ locale }: { locale: Locale }) {
  return (
    <section id="intro" className="arch-grid relative overflow-hidden bg-[#e9e7e0] py-28 md:py-40">
      <div className="ambient-orb absolute -left-24 top-1/3 size-80 bg-[#e1693f]/30" />
      <div className="site-container relative">
        <Reveal className="flex items-center justify-between border-b border-black/15 pb-5">
          <p className="label text-black/45">01 / Manifeste</p>
          <p className="label text-black/35">TRI — 2000 / 2026</p>
        </Reveal>
        <div className="grid gap-12 pt-12 lg:grid-cols-12 lg:pt-16">
          <Reveal className="lg:col-span-9" delay={.05}>
            <h2 className="balance font-display text-[clamp(3.5rem,7.5vw,8rem)] leading-[.88] tracking-[-.05em]">
              {locale === "fr" ? <>L&apos;architecture comme <em className="font-normal text-[#e1693f]">force</em> de transformation.</> : <>Architecture as a <em className="font-normal text-[#e1693f]">force</em> for transformation.</>}
            </h2>
          </Reveal>
          <Reveal className="flex flex-col justify-end lg:col-span-3" delay={.12}>
            <p className="text-sm leading-7 text-black/60">{locale === "fr" ? "Nous imaginons des lieux ancrés dans leur contexte, précis dans leur exécution et généreux dans leurs usages. Une vision durable, dessinée depuis Cotonou pour l'Afrique de demain." : "We imagine places rooted in context, precise in execution and generous in use. A sustainable vision, designed from Cotonou for tomorrow's Africa."}</p>
            <Link href={routeFor(locale, "studio")} className="group mt-8 flex items-center justify-between border-t border-black/20 pt-4 text-[10px] uppercase tracking-[.22em]">
              {locale === "fr" ? "Notre approche" : "Our approach"}<ArrowUpRight className="size-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
