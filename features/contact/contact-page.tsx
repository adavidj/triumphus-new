import { Mail, MapPin, Phone } from "lucide-react";
import type { Locale } from "@/lib/site";
import { site } from "@/lib/site";
import { ContactForm } from "@/features/contact/contact-form";
import { InnerPageHero } from "@/components/layout/inner-page-hero";

export function ContactPage({ locale }: { locale: Locale }) {
  return (
    <>
      <InnerPageHero index="05" eyebrow="Contact / Cotonou" tone="blue" title={<>{locale === "fr" ? <>Parlons<span className="text-[#e1693f]">.</span></> : <>Let&apos;s talk<span className="text-[#e1693f]">.</span></>}</>} note={locale === "fr" ? "Un projet, une ambition, un territoire à transformer ?" : "A project, an ambition, a territory to transform?"} metaLeft="Studio / Fidjrossè" />
      <section className="arch-grid bg-[#e9e7e0] py-24 md:py-36">
        <div className="site-container grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label text-[#e1693f]">01 / {locale === "fr" ? "Coordonnées" : "Contact details"}</p>
            <h2 className="mt-6 font-display text-5xl leading-[.9] md:text-6xl">{locale === "fr" ? <>Notre porte<br />est <em>ouverte.</em></> : <>Our door<br />is <em>open.</em></>}</h2>
            <div className="mt-12 space-y-6">
              <div className="flex gap-4 border-t border-black/15 pt-5"><MapPin className="mt-1 size-4 shrink-0 text-[#e1693f]" /><p className="text-sm leading-7 text-black/60">{site.address}</p></div>
              <div className="flex gap-4 border-t border-black/15 pt-5"><Phone className="mt-1 size-4 shrink-0 text-[#e1693f]" /><a href={site.phoneHref} className="font-display text-2xl text-[#0c3241]">{site.phoneDisplay}</a></div>
              <div className="flex gap-4 border-t border-black/15 pt-5"><Mail className="mt-1 size-4 shrink-0 text-[#e1693f]" /><div>{site.emails.map((email) => <a key={email} href={`mailto:${email}`} className="mb-2 block text-sm underline decoration-black/20 underline-offset-4 transition-colors hover:text-[#e1693f]">{email}</a>)}</div></div>
            </div>
          </div>
          <div className="rounded-[2rem] bg-white/50 p-6 shadow-[0_30px_90px_rgba(12,50,65,.08)] backdrop-blur md:p-10 lg:col-span-7 lg:col-start-6"><p className="label mb-10 text-black/35">02 / {locale === "fr" ? "Votre projet" : "Your project"}</p><ContactForm locale={locale} /></div>
        </div>
      </section>
      <section className="relative h-[480px] w-full overflow-hidden grayscale transition-all duration-700 hover:grayscale-0"><iframe title="TRIUMPHUS — Fidjrossè, Cotonou" src="https://www.google.com/maps?q=Fidjross%C3%A8%20Cotonou%20Benin&output=embed" width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="border-0" /><div className="pointer-events-none absolute left-5 top-5 rounded-full bg-[#d8ff46] px-5 py-3 text-[10px] uppercase tracking-[.22em] text-black md:left-8 md:top-8">Cotonou / Fidjrossè</div></section>
    </>
  );
}
