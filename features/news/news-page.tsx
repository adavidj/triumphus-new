import type { Locale } from "@/lib/site";
import { NewsExplorer } from "@/features/news/news-explorer";
import { InnerPageHero } from "@/components/layout/inner-page-hero";

export function NewsPage({ locale }: { locale: Locale }) {
  return <><InnerPageHero index="03" eyebrow="TRIUMPHUS / Journal" title={<>{locale === "fr" ? "Actualités" : "News"}<span className="text-[#e1693f]">.</span></>} note={locale === "fr" ? "Idées, matières, territoires et vie du studio" : "Ideas, materials, territories and studio life"} metaLeft="Journal / 2024—2026" /><section className="bg-[#e9e7e0] py-16 md:py-24"><NewsExplorer locale={locale} /></section></>;
}
