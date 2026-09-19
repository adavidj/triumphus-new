import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/site";
import { routeFor } from "@/lib/site";
import type { Article } from "@/types";

export function ArticleDetail({ article, locale }: { article: Article; locale: Locale }) {
  return (
    <article className="bg-[#e9e7e0]">
      <header className="arch-grid pb-16 pt-36 md:pb-24 md:pt-48">
        <div className="site-container">
          <Link href={routeFor(locale, "news")} className="label inline-flex items-center gap-3 text-black/45 transition-colors hover:text-black"><ArrowLeft className="size-4" />Journal</Link>
          <p className="label mt-12 text-[#e1693f]">{new Date(article.date).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-GB")} · {article.readingTime} min · {article.category}</p>
          <h1 className="mt-7 max-w-6xl font-display text-[clamp(3.8rem,8vw,8.5rem)] leading-[.86] tracking-[-.05em]">{article.title[locale]}</h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-black/55">{article.excerpt[locale]}</p>
        </div>
      </header>
      <div className="site-container"><div className="relative aspect-[16/9] overflow-hidden md:aspect-[16/8]"><Image src={article.image} alt={article.title[locale]} fill priority sizes="100vw" className="object-cover" /></div></div>
      <div className="site-container grid gap-12 py-24 lg:grid-cols-12 lg:py-32">
        <aside className="lg:col-span-3"><p className="label text-[#e1693f]">TRIUMPHUS Journal</p><p className="mt-5 max-w-xs text-xs leading-6 text-black/40">{locale === "fr" ? "Perspectives sur l'architecture, la matière et les usages contemporains." : "Perspectives on architecture, material and contemporary uses."}</p></aside>
        <div className="space-y-8 lg:col-span-6">{article.body.map((paragraph, index) => <p key={index} className="text-lg leading-9 text-black/65 first-letter:font-display first-letter:text-5xl first-letter:text-[#e1693f]">{paragraph[locale]}</p>)}</div>
      </div>
      <Link href={routeFor(locale, "news")} className="group block bg-[#0c3241] py-20 text-white md:py-24"><div className="site-container flex items-center justify-between gap-8"><div><p className="label text-[#d8ff46]">Journal</p><p className="mt-4 font-display text-4xl md:text-6xl">{locale === "fr" ? "Toutes les actualités" : "All news"}</p></div><ArrowUpRight className="size-9 transition-transform group-hover:-translate-y-2 group-hover:translate-x-2" /></div></Link>
    </article>
  );
}
