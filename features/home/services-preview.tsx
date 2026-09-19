"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/site";
import { services } from "@/data/content";

export function ServicesPreview({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  return (
    <section className="relative overflow-hidden bg-[#e9e7e0] py-28 md:py-40">
      <span aria-hidden className="pointer-events-none absolute -right-8 top-10 font-display text-[30vw] leading-none text-black/[.035]">{services[active].index}</span>
      <div className="site-container relative grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
          <p className="label text-black/40">03 / {locale === "fr" ? "Expertises" : "Expertise"}</p>
          <h2 className="mt-6 font-display text-[clamp(3.5rem,6vw,6.5rem)] leading-[.86] tracking-[-.04em]">{locale === "fr" ? <>Penser.<br /><em>Tracer.</em><br />Bâtir.</> : <>Think.<br /><em>Draw.</em><br />Build.</>}</h2>
          <div className="mt-10 max-w-sm border-l-2 border-[#e1693f] pl-5">
            <p className="text-sm leading-7 text-black/60">{locale === "fr" ? services[active].descriptionFr : services[active].descriptionEn}</p>
          </div>
        </div>
        <div className="lg:col-span-8">
          {services.map((service, index) => (
            <button type="button" onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)} key={service.index} className={`group relative flex w-full items-center gap-5 overflow-hidden border-t border-black/15 py-7 text-left last:border-b md:py-9 ${active === index ? "px-5 text-white md:px-8" : "px-0"}`}>
              <span className={`absolute inset-0 origin-left bg-[#0c3241] transition-transform duration-700 ease-[var(--ease-premium)] ${active === index ? "scale-x-100" : "scale-x-0"}`} />
              <span className={`label relative z-10 ${active === index ? "text-[#d8ff46]" : "text-black/35"}`}>{service.index}</span>
              <span className="relative z-10 flex-1 font-display text-[clamp(2.3rem,5vw,5rem)] leading-none tracking-[-.035em]">{locale === "fr" ? service.fr : service.en}</span>
              <ArrowUpRight className={`relative z-10 size-6 transition-all duration-500 ${active === index ? "rotate-0 opacity-100" : "-rotate-12 opacity-20"}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
