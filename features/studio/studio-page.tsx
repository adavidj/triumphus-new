import Image from "next/image";
import type { Locale } from "@/lib/site";
import { values } from "@/data/content";
import { Reveal } from "@/components/motion/reveal";
import { InnerPageHero } from "@/components/layout/inner-page-hero";

const portrait = "https://static.wixstatic.com/media/a05c64_462e043a5e8b482881841da378dd60cc~mv2.jpg";

export function StudioPage({ locale }: { locale: Locale }) {
  const axesFr = ["Moderniser la gouvernance autour de la satisfaction client et de l'ambition internationale.", "Redynamiser le pilotage des opérations et des équipes pour garantir la qualité et les délais.", "Promouvoir la performance par la formation et l'amélioration de la qualité de vie au travail.", "Assurer la sécurité de l'environnement bâti et préserver les équilibres naturels."];
  const axesEn = ["Modernize governance around client satisfaction and international ambition.", "Strengthen operations and team management to guarantee quality and deadlines.", "Promote performance through training and improved quality of working life.", "Protect the built environment while preserving natural balances."];

  return (
    <>
      <InnerPageHero index="02" eyebrow={locale === "fr" ? "Le Cabinet" : "The Studio"} tone="blue" title={<>Since<br /><span className="text-[#e1693f]">2000.</span></>} note={locale === "fr" ? "25+ années à transformer les territoires et les usages" : "25+ years shaping territories and uses"} metaLeft="TRIUMPHUS / Architecture" />

      <section className="arch-grid bg-[#e9e7e0] py-28 md:py-40">
        <div className="site-container grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4"><p className="label text-[#e1693f]">01 / {locale === "fr" ? "Notre histoire" : "Our story"}</p><h2 className="mt-7 font-display text-[clamp(4.5rem,8vw,8rem)] leading-[.72] tracking-[-.055em]">2000<br /><span className="text-[#0c3241]">→</span><br />2028</h2></Reveal>
          <Reveal className="lg:col-span-7 lg:col-start-6" delay={.08}>
            <p className="font-display text-[clamp(2.2rem,4vw,4rem)] leading-[1.05] tracking-[-.03em]">{locale === "fr" ? "Une pratique béninoise, une exigence internationale." : "A Beninese practice with international standards."}</p>
            <div className="mt-10 grid gap-8 text-base leading-8 text-black/60 md:grid-cols-2"><p>{locale === "fr" ? "Créé en 2001 par l'arrêté ministériel n°0047/MEHU/DC/SG/DHC/SAL du 05 octobre 2000, TRIUMPHUS programme, conçoit et suit les travaux selon les normes internationales et les règles de l'art." : "Established in 2001 by ministerial order No. 0047/MEHU/DC/SG/DHC/SAL dated 5 October 2000, TRIUMPHUS plans, designs and supervises projects according to international standards."}</p><p>{locale === "fr" ? "Notre ambition : devenir d'ici 2028 l'un des cabinets les plus reconnus du Bénin et faire rayonner une architecture contextuelle, durable et innovante." : "Our ambition: to rank among Benin's most recognized practices by 2028 and champion contextual, sustainable and innovative architecture."}</p></div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#101513] text-white">
        <div className="site-container grid lg:grid-cols-12">
          <div className="relative min-h-[42rem] lg:col-span-7 lg:min-h-[58rem]"><Image src={portrait} alt="Narcisse Justin SOGLO" fill sizes="(max-width:1024px) 100vw, 58vw" className="object-cover object-top grayscale-[15%]" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" /><div className="glass absolute inset-x-5 bottom-5 p-5 md:inset-x-8 md:bottom-8 md:p-7"><p className="label text-[#d8ff46]">Architecte-Gérant · ONAUB n°86</p><p className="mt-3 font-display text-4xl">Narcisse Justin SOGLO</p></div></div>
          <div className="flex flex-col justify-center py-20 lg:col-span-5 lg:px-16">
            <p className="label text-[#d8ff46]">02 / Direction</p>
            <h2 className="mt-7 font-display text-[clamp(3.5rem,6vw,6rem)] leading-[.88] tracking-[-.04em]">Une vision.<br /><em className="text-white/45">Un cap.</em></h2>
            <p className="mt-9 max-w-xl text-sm leading-8 text-white/55">{locale === "fr" ? "Diplômé de l'Université Technique d'État du Bâtiment et d'Architecture de Kiev en 1995, Expert Agréé près les Cours d'Appel et Tribunaux du Bénin. Ancien Président du Conseil National de l'ONAUB et de la Conférence des Ordres des Architectes de l'UEMOA." : "Graduate of Kyiv State Technical University of Construction and Architecture (1995), accredited expert before Benin's Courts of Appeal and Tribunals. Former President of the ONAUB National Council and of the UEMOA Conference of Architects' Orders."}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#e9e7e0] py-28 md:py-40">
        <div className="site-container"><div className="grid gap-8 lg:grid-cols-12"><div className="lg:col-span-4"><p className="label text-[#e1693f]">03 / {locale === "fr" ? "Nos valeurs" : "Our values"}</p><h2 className="mt-6 font-display text-5xl md:text-7xl">{locale === "fr" ? <>Ce qui nous<br /><em>engage.</em></> : <>What we<br /><em>stand for.</em></>}</h2></div><div className="lg:col-span-8">{values.map(([fr, en], index) => <div key={fr} className="group flex items-center gap-5 border-t border-black/15 py-6 last:border-b"><span className="label text-[#e1693f]">0{index + 1}</span><p className="flex-1 font-display text-[clamp(2.3rem,5vw,5rem)] leading-none tracking-[-.035em] transition-transform duration-500 group-hover:translate-x-3">{locale === "fr" ? fr : en}</p><span className="size-2 rounded-full bg-[#0c3241] opacity-0 transition-opacity group-hover:opacity-100" /></div>)}</div></div></div>
      </section>

      <section className="relative overflow-hidden bg-[#0c3241] py-28 text-white md:py-40">
        <div className="ambient-orb absolute -right-32 top-0 size-[30rem] bg-[#e1693f]" />
        <div className="site-container relative grid gap-16 lg:grid-cols-12"><div className="lg:col-span-4"><p className="label text-[#d8ff46]">04 / Strategy</p><h2 className="mt-6 font-display text-5xl leading-[.9] md:text-7xl">{locale === "fr" ? "Axes stratégiques" : "Strategic pillars"}</h2></div><div className="lg:col-span-8">{(locale === "fr" ? axesFr : axesEn).map((axis, index) => <div key={axis} className="grid grid-cols-[3rem_1fr] border-t border-white/15 py-7"><span className="label text-[#d8ff46]">0{index + 1}</span><p className="max-w-2xl text-base leading-8 text-white/65">{axis}</p></div>)}</div></div>
      </section>
    </>
  );
}
