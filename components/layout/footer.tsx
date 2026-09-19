import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/site";
import { routeFor, site } from "@/lib/site";

const footerLinks = [
  ["projects", "Projets", "Projects"],
  ["studio", "Le Cabinet", "Studio"],
  ["news", "Actualités", "News"],
  ["careers", "Nous rejoindre", "Careers"],
] as const;

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="relative overflow-hidden bg-[#0b0f0e] text-white">
      <div className="ambient-orb absolute -bottom-48 left-1/3 size-[32rem] bg-[#0c5661]" />
      <div className="site-container relative py-16 md:py-24">
        <div className="grid gap-14 border-b border-white/15 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Link href={routeFor(locale, "home")} className="inline-flex items-center gap-4">
              <span className="grid size-12 place-items-center rounded-full border border-white/25 font-display text-2xl italic">T</span>
              <span className="text-xl tracking-[.24em]">TRIUMPHUS</span>
            </Link>
            <p className="mt-8 max-w-md text-sm leading-7 text-white/45">{locale === "fr" ? "Architecture, urbanisme et design. Depuis Cotonou, nous construisons un futur concret, durable et profondément humain." : "Architecture, urban planning and design. From Cotonou, we build a concrete, sustainable and deeply human future."}</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-6">
            <div>
              <p className="label text-[#d8ff46]">Navigation</p>
              <div className="mt-6 grid gap-3">
                {footerLinks.map(([key, fr, en]) => <Link key={key} href={routeFor(locale, key)} className="group flex items-center justify-between border-b border-white/10 pb-3 text-sm text-white/65 transition-colors hover:text-white"><span>{locale === "fr" ? fr : en}</span><ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" /></Link>)}
              </div>
            </div>
            <div>
              <p className="label text-[#d8ff46]">Studio / Cotonou</p>
              <p className="mt-6 text-sm leading-7 text-white/55">{site.address}<br /><a className="transition-colors hover:text-white" href={site.phoneHref}>{site.phoneDisplay}</a><br /><a className="transition-colors hover:text-white" href={`mailto:${site.emails[0]}`}>{site.emails[0]}</a></p>
            </div>
          </div>
        </div>

        <p className="overflow-hidden py-8 font-display text-[clamp(3.2rem,10.2vw,10rem)] leading-none tracking-[-.055em] text-white/[.92]">TRIUMPHUS<span className="text-[#e1693f]">.</span></p>

        <div className="flex flex-col gap-4 border-t border-white/15 pt-5 text-[9px] uppercase tracking-[.24em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} TRIUMPHUS — {locale === "fr" ? "Tous droits réservés" : "All rights reserved"}</span>
          <span>06°22&apos;N / 02°26&apos;E</span>
        </div>
      </div>
    </footer>
  );
}
