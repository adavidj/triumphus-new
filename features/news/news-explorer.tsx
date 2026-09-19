"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/data/articles";
import type { Locale } from "@/lib/site";
import { routeFor } from "@/lib/site";

const pageSize = 4;
const filters = [
  { value: "all", fr: "Tous", en: "All" },
  { value: "insight", fr: "Architecture", en: "Architecture" },
  { value: "studio", fr: "Vie du cabinet", en: "Studio" },
  { value: "sustainability", fr: "Durabilité", en: "Sustainability" },
] as const;

export function NewsExplorer({ locale }: { locale: Locale }) {
  const [filter, setFilter] = useState<(typeof filters)[number]["value"]>("all");
  const [page, setPage] = useState(1);
  const filtered = useMemo(() => articles.filter((article) => filter === "all" || article.category === filter), [filter]);
  const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const visible = filtered.slice((page - 1) * pageSize, page * pageSize);
  const choose = (value: typeof filter) => { setFilter(value); setPage(1); };

  return (
    <div className="site-container">
      <div className="hide-scrollbar mb-16 flex gap-2 overflow-x-auto border-y border-black/15 py-4">
        {filters.map((item) => <button key={item.value} onClick={() => choose(item.value)} className={`whitespace-nowrap rounded-full border px-4 py-2 text-[9px] uppercase tracking-[.22em] transition-all ${filter === item.value ? "border-[#0c3241] bg-[#0c3241] text-white" : "border-black/15 text-black/45 hover:border-black/40"}`}>{locale === "fr" ? item.fr : item.en}</button>)}
      </div>

      <div className="grid gap-x-6 gap-y-16 md:grid-cols-2">
        {visible.map((article, index) => {
          const featured = index === 0 && page === 1;
          return <article key={article.slug} className={featured ? "md:col-span-2" : ""}><Link href={`${routeFor(locale, "news")}/${article.slug}`} className={`group grid gap-7 ${featured ? "lg:grid-cols-12 lg:items-end" : ""}`}><div className={`relative overflow-hidden bg-[#d2d0c8] ${featured ? "aspect-[16/9] lg:col-span-8" : "aspect-[4/3]"}`}><Image src={article.image} alt={article.title[locale]} fill quality={95} sizes={featured ? "(max-width:1024px) 100vw, 66vw" : "(max-width:768px) 100vw, 50vw"} className="object-cover grayscale-[15%] transition-all duration-1000 group-hover:scale-[1.04] group-hover:grayscale-0" /><span className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-[#d8ff46] text-black opacity-0 transition-opacity group-hover:opacity-100"><ArrowUpRight className="size-5" /></span></div><div className={featured ? "lg:col-span-4 lg:pb-4" : ""}><p className="label text-[#e1693f]">{new Date(article.date).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-GB", { year: "numeric", month: "short", day: "numeric" })} · {article.readingTime} min</p><h2 className={`mt-4 font-display leading-[1] tracking-[-.03em] ${featured ? "text-5xl md:text-6xl" : "text-4xl"}`}>{article.title[locale]}</h2><p className="mt-5 max-w-xl text-sm leading-7 text-black/50">{article.excerpt[locale]}</p></div></Link></article>;
        })}
      </div>

      {pages > 1 && <div className="mt-20 flex items-center justify-center gap-3">{Array.from({ length: pages }, (_, index) => index + 1).map((number) => <button key={number} onClick={() => setPage(number)} className={`grid size-11 place-items-center rounded-full border text-xs transition-colors ${page === number ? "border-[#0c3241] bg-[#0c3241] text-white" : "border-black/15 hover:border-black/40"}`}>{number}</button>)}</div>}
    </div>
  );
}
