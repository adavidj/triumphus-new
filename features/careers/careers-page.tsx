import type { Locale } from "@/lib/site";
import { CareerForm } from "@/features/careers/career-form";
import { InnerPageHero } from "@/components/layout/inner-page-hero";

export function CareersPage({ locale }: { locale: Locale }) {
  return (
    <>
      <InnerPageHero index="04" eyebrow={locale === "fr" ? "Talents / Équipe" : "Talent / Team"} title={locale === "fr" ? <>Construisons<br /><em className="text-white/45">ensemble.</em></> : <>Build<br /><em className="text-white/45">with us.</em></>} note={locale === "fr" ? "Rigueur · Curiosité · Engagement · Culture du projet" : "Rigor · Curiosity · Commitment · Design culture"} metaLeft="Candidature spontanée" />
      <section className="arch-grid bg-[#e9e7e0] py-24 md:py-36">
        <div className="site-container grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4"><p className="label text-[#e1693f]">01 / {locale === "fr" ? "Nous rejoindre" : "Join us"}</p><h2 className="mt-6 font-display text-5xl leading-[.9] md:text-7xl">{locale === "fr" ? <>Le talent aime<br />les <em>défis.</em></> : <>Talent loves<br /><em>challenges.</em></>}</h2><p className="mt-8 max-w-sm text-sm leading-7 text-black/55">{locale === "fr" ? "TRIUMPHUS recherche des profils rigoureux, curieux, proactifs et attachés à la qualité architecturale. Montrez-nous votre regard, votre méthode et ce qui vous anime." : "TRIUMPHUS welcomes rigorous, curious and proactive profiles committed to architectural quality. Show us your eye, your method and what drives you."}</p><div className="mt-10 grid grid-cols-2 gap-3"><div className="border border-black/15 p-4"><p className="font-display text-3xl text-[#0c3241]">25+</p><p className="label mt-2 text-black/35">{locale === "fr" ? "Années" : "Years"}</p></div><div className="border border-black/15 p-4"><p className="font-display text-3xl text-[#0c3241]">05</p><p className="label mt-2 text-black/35">{locale === "fr" ? "Métiers" : "Disciplines"}</p></div></div></div>
          <div className="rounded-[2rem] bg-white/50 p-6 shadow-[0_30px_90px_rgba(12,50,65,.08)] backdrop-blur md:p-10 lg:col-span-7 lg:col-start-6"><p className="label mb-10 text-black/35">02 / {locale === "fr" ? "Votre candidature" : "Your application"}</p><CareerForm locale={locale} /></div>
        </div>
      </section>
    </>
  );
}
