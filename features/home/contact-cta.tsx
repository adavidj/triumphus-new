import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/site";
import { routeFor } from "@/lib/site";

export function ContactCta({ locale }: { locale: Locale }) {
  return (
    <section className="relative overflow-hidden bg-[#e1693f] py-24 text-[#111614] md:py-36">
      <div className="pointer-events-none absolute inset-0 arch-grid opacity-20" />
      <Link href={routeFor(locale, "contact")} className="site-container group relative block">
        <div className="flex items-center justify-between border-b border-black/25 pb-5"><p className="label">06 / Contact</p><p className="label opacity-50">Cotonou — Bénin</p></div>
        <div className="mt-10 flex items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(4.2rem,11vw,11rem)] leading-[.75] tracking-[-.06em]">{locale === "fr" ? <>Donnons forme<br />à <em>demain.</em></> : <>Let&apos;s shape<br /><em>tomorrow.</em></>}</h2>
          <span className="mb-2 hidden size-24 shrink-0 place-items-center rounded-full border border-black/30 transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#d8ff46] md:grid lg:size-32"><ArrowUpRight className="size-10" /></span>
        </div>
        <div className="mt-14 flex items-center justify-between border-t border-black/25 pt-5"><p className="text-sm">{locale === "fr" ? "Parlons de votre prochain projet." : "Let's talk about your next project."}</p><ArrowUpRight className="size-5 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 md:hidden" /></div>
      </Link>
    </section>
  );
}
