import type { ReactNode } from "react";

type InnerPageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  index: string;
  note?: string;
  metaLeft?: string;
  metaRight?: string;
  tone?: "ink" | "blue";
};

export function InnerPageHero({ eyebrow, title, index, note, metaLeft = "Cotonou — Bénin", metaRight = "06°22'N / 02°26'E", tone = "ink" }: InnerPageHeroProps) {
  return (
    <section className={`noise relative overflow-hidden pb-12 pt-36 text-white md:pb-16 md:pt-48 ${tone === "blue" ? "bg-[#0c3241]" : "bg-[#101513]"}`}>
      <div className="ambient-orb absolute -right-32 top-10 size-[32rem] bg-[#e1693f]" />
      <div className="pointer-events-none absolute inset-0 arch-grid opacity-10" />
      <div className="site-container relative">
        <div className="flex items-start justify-between gap-8">
          <p className="label text-[#d8ff46]">{index} / {eyebrow}</p>
          {note && <p className="label hidden max-w-xs text-right leading-5 text-white/40 sm:block">{note}</p>}
        </div>
        <h1 className="mt-10 max-w-[90rem] font-display text-[clamp(4rem,12vw,12rem)] leading-[.72] tracking-[-.065em] sm:mt-12">{title}</h1>
        <div className="mt-10 flex items-center justify-between gap-5 border-t border-white/20 pt-5 sm:mt-12">
          <span className="label text-white/40">{metaLeft}</span><span className="label text-white/40">{metaRight}</span>
        </div>
      </div>
    </section>
  );
}
