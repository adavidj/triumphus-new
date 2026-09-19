"use client";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/site";
import { routeFor } from "@/lib/site";
import { featuredProjects } from "@/data/projects";

export function HomeHero({ locale }: { locale: Locale }) {
  const root = useRef<HTMLElement>(null);
  const hero = featuredProjects[0];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power4.out" } })
        .fromTo("[data-hero-image]", { scale: 1.14, filter: "blur(8px)" }, { scale: 1, filter: "blur(0px)", duration: 2.1 })
        .fromTo("[data-hero-line]", { yPercent: 115, rotate: 2 }, { yPercent: 0, rotate: 0, duration: 1.2, stagger: .1 }, "-=1.55")
        .fromTo("[data-hero-meta]", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: .8, stagger: .07 }, "-=.75")
        .fromTo("[data-hero-rule]", { scaleX: 0 }, { scaleX: 1, duration: 1.1 }, "-=.7");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="noise relative min-h-[100svh] overflow-hidden bg-[#0b0f0e] text-white">
      <div data-hero-image className="absolute inset-0 origin-center">
        <Image src={hero.cover} alt={hero.title[locale]} fill priority loading="eager" sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,11,10,.9)_0%,rgba(7,11,10,.56)_42%,rgba(7,11,10,.12)_78%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,8,.6)_0%,transparent_30%,rgba(5,8,8,.74)_100%)]" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] hidden grid-cols-12 px-8 opacity-25 lg:grid">
        {Array.from({ length: 13 }).map((_, index) => <span key={index} className="border-l border-white/20" />)}
      </div>

      <div className="site-container relative z-10 flex min-h-[100svh] flex-col pb-8 pt-28 md:pb-10 md:pt-36">
        <div className="flex items-start justify-between">
          <div data-hero-meta className="hidden items-center gap-3 text-white/55 md:flex">
            <span className="size-2 rounded-full bg-[#d8ff46] shadow-[0_0_18px_#d8ff46]" />
            <span className="label">Cotonou / 06°22&apos;N 02°26&apos;E</span>
          </div>
          <p data-hero-meta className="label ml-auto max-w-[15rem] text-right leading-5 text-white/55">
            {locale === "fr" ? "Architecture prospective · Afrique de l'Ouest" : "Forward-looking architecture · West Africa"}
          </p>
        </div>

        <div className="mt-auto grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <p data-hero-meta className="label mb-5 text-[#d8ff46]">{locale === "fr" ? "Depuis 2000" : "Est. 2000"} — Cotonou</p>
            <h1 className="font-display text-[18vw] leading-[.73] tracking-[-.065em] sm:text-[14vw] lg:text-[9.3vw]">
              <span className="block overflow-hidden"><span data-hero-line className="block">{locale === "fr" ? "Construire" : "Shaping"}</span></span>
              <span className="block overflow-hidden"><span data-hero-line className="block pl-[7vw] italic text-white/55">{locale === "fr" ? "le possible" : "the possible"}<span className="text-[#e1693f]">.</span></span></span>
            </h1>
          </div>

          <Link data-hero-meta href={`${routeFor(locale, "projects")}/${hero.slug}`} className="glass group mb-2 block p-4 transition-colors duration-500 hover:bg-white/10 lg:col-span-3">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image src={hero.cover} alt="" fill sizes="360px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute right-2 top-2 grid size-8 place-items-center rounded-full bg-[#d8ff46] text-[#111614]"><ArrowUpRight className="size-4" /></span>
            </div>
            <div className="mt-4 flex items-end justify-between gap-4">
              <div><p className="label text-white/40">01 / {locale === "fr" ? "Projet phare" : "Featured"}</p><p className="mt-2 font-display text-xl">{hero.title[locale]}</p></div>
              <span className="label text-white/35">{hero.location}</span>
            </div>
          </Link>
        </div>

        <div data-hero-rule className="mt-8 h-px origin-left bg-white/25" />
        <div className="mt-5 flex items-center justify-between gap-6">
          <p data-hero-meta className="label text-white/45">Architecture · Urbanisme · Design</p>
          <Link data-hero-meta href="#intro" className="group flex items-center gap-3 text-[10px] uppercase tracking-[.25em] text-white">
            {locale === "fr" ? "Découvrir" : "Discover"}
            <span className="grid size-9 place-items-center rounded-full border border-white/25 transition-colors group-hover:border-[#d8ff46] group-hover:bg-[#d8ff46] group-hover:text-black"><ArrowDownRight className="size-4" /></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
