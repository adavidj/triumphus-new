"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/site";
import { routeFor, site } from "@/lib/site";

const items = [
  ["projects", "Projets", "Projects"],
  ["studio", "Le Cabinet", "Studio"],
  ["news", "Actualités", "News"],
  ["careers", "Nous rejoindre", "Careers"],
] as const;

function Brand({ locale, onClick }: { locale: Locale; onClick?: () => void }) {
  return (
    <Link href={routeFor(locale, "home")} onClick={onClick} aria-label="TRIUMPHUS — Home" className="group flex items-center gap-2.5 text-white sm:gap-3">
      <span className="relative grid size-8 place-items-center overflow-hidden rounded-full border border-white/25 font-display text-base italic sm:size-9 sm:text-lg">
        T<span className="absolute bottom-0 h-[2px] w-full bg-[#e1693f] transition-all duration-500 group-hover:h-full group-hover:opacity-25" />
      </span>
      <span className="text-[11px] font-medium tracking-[.2em] sm:text-sm sm:tracking-[.24em]">TRIUMPHUS</span>
    </Link>
  );
}

function getLocaleSwitchHref(pathname: string, locale: Locale) {
  if (locale === "fr") {
    if (pathname.startsWith("/projets")) return pathname.replace("/projets", "/en/projects");
    if (pathname.startsWith("/actualites")) return pathname.replace("/actualites", "/en/news");
    if (pathname.startsWith("/le-cabinet")) return pathname.replace("/le-cabinet", "/en/studio");
    if (pathname.startsWith("/carrieres")) return pathname.replace("/carrieres", "/en/careers");
    if (pathname.startsWith("/contact")) return pathname.replace("/contact", "/en/contact");
    return "/en";
  }
  if (pathname.startsWith("/en/projects")) return pathname.replace("/en/projects", "/projets");
  if (pathname.startsWith("/en/news")) return pathname.replace("/en/news", "/actualites");
  if (pathname.startsWith("/en/studio")) return pathname.replace("/en/studio", "/le-cabinet");
  if (pathname.startsWith("/en/careers")) return pathname.replace("/en/careers", "/carrieres");
  if (pathname.startsWith("/en/contact")) return pathname.replace("/en/contact", "/contact");
  return "/";
}

export function Navbar({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const switchHref = getLocaleSwitchHref(pathname, locale);
  const isHome = pathname === "/" || pathname === "/en";
  const raised = scrolled || !isHome;

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-[90] px-3 pt-3 md:px-6 md:pt-5">
        <div className={`pointer-events-auto mx-auto flex h-16 max-w-[96rem] items-center justify-between px-3 transition-all duration-700 sm:px-4 md:px-5 ${raised ? "rounded-full border border-white/15 bg-[#0b0f0e]/80 shadow-[0_16px_50px_rgba(0,0,0,.16)] backdrop-blur-2xl" : "border border-transparent"}`}>
          <Brand locale={locale} />

          <nav className="hidden items-center gap-8 xl:flex">
            {items.slice(0, 3).map(([key, fr, en]) => (
              <Link key={key} href={routeFor(locale, key)} className="group relative py-3 text-[10px] uppercase tracking-[.22em] text-white/65 transition-colors hover:text-white">
                {locale === "fr" ? fr : en}
                <span className="absolute bottom-2 left-0 h-px w-0 bg-[#d8ff46] transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 text-white sm:gap-2">
            <Link href={switchHref} aria-label={locale === "fr" ? "Switch to English" : "Passer en français"} className="grid size-9 place-items-center rounded-full border border-white/15 text-[9px] uppercase tracking-[.12em] text-white/65 transition-all hover:border-[#d8ff46] hover:text-[#d8ff46] sm:size-auto sm:border-0 sm:px-3 sm:py-2 sm:text-[10px] sm:tracking-[.22em]">{locale === "fr" ? "EN" : "FR"}</Link>
            <Link href={routeFor(locale, "contact")} className="hidden rounded-full border border-white/20 px-5 py-3 text-[10px] uppercase tracking-[.2em] transition-all hover:border-[#d8ff46] hover:bg-[#d8ff46] hover:text-black md:block">Contact</Link>
            <button onClick={() => setOpen(true)} aria-label={locale === "fr" ? "Ouvrir le menu" : "Open menu"} className="group flex items-center gap-2.5 rounded-full bg-white px-3 py-3 text-[10px] uppercase tracking-[.16em] text-[#111614] transition-colors hover:bg-[#d8ff46] sm:gap-3 sm:px-4 sm:tracking-[.2em]">
              Menu <span className="flex w-4 flex-col gap-1"><i className="h-px w-full bg-current transition-transform group-hover:translate-x-1" /><i className="h-px w-2/3 self-end bg-current transition-transform group-hover:-translate-x-1" /></span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[100] overflow-hidden bg-[#0c3241] text-white" initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: .75, ease: [.22, 1, .36, 1] }}>
            <div className="ambient-orb absolute -right-32 -top-32 size-[34rem] bg-[#e1693f]" />
            <div className="pointer-events-none absolute inset-0 arch-grid opacity-20" />
            <div className="site-container relative flex h-full flex-col">
              <div className="flex h-24 shrink-0 items-center justify-between border-b border-white/15">
                <Brand locale={locale} onClick={() => setOpen(false)} />
                <div className="flex items-center gap-2">
                  <Link href={switchHref} onClick={() => setOpen(false)} className="grid size-10 place-items-center rounded-full border border-white/20 text-[9px] uppercase tracking-[.16em] text-white/60 transition-colors hover:border-[#d8ff46] hover:text-[#d8ff46]">{locale === "fr" ? "EN" : "FR"}</Link>
                  <button onClick={() => setOpen(false)} className="group flex items-center gap-2 rounded-full border border-white/20 px-3 py-3 text-[10px] uppercase tracking-[.16em] transition-colors hover:bg-white hover:text-black sm:gap-3 sm:px-4 sm:tracking-[.22em]">
                    <span className="hidden sm:inline">{locale === "fr" ? "Fermer" : "Close"}</span><X className="size-4 transition-transform duration-500 group-hover:rotate-90" />
                  </button>
                </div>
              </div>

              <div className="grid min-h-0 flex-1 items-center py-6 lg:grid-cols-12">
                <nav className="lg:col-span-8">
                  {items.map(([key, fr, en], index) => (
                    <motion.div key={key} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18 + index * .06, duration: .65, ease: [.22, 1, .36, 1] }} className="border-b border-white/15 first:border-t">
                      <Link href={routeFor(locale, key)} onClick={() => setOpen(false)} className="group flex items-center justify-between py-4 sm:py-5">
                        <div className="flex items-start gap-5 sm:gap-8">
                          <span className="label mt-2 text-[#d8ff46]">0{index + 1}</span>
                          <span className="font-display text-[clamp(2.6rem,6vw,5.5rem)] leading-[.9] tracking-[-.035em] transition-transform duration-500 group-hover:translate-x-3">{locale === "fr" ? fr : en}</span>
                        </div>
                        <ArrowUpRight className="size-7 -rotate-12 opacity-25 transition-all duration-500 group-hover:rotate-0 group-hover:opacity-100" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="hidden lg:col-span-4 lg:block lg:pl-20">
                  <p className="label text-white/35">Studio / Cotonou</p>
                  <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">{site.address}<br /><br />{site.phoneDisplay}<br />{site.emails[0]}</p>
                  <Link href={routeFor(locale, "contact")} onClick={() => setOpen(false)} className="mt-10 inline-flex items-center gap-3 text-[10px] uppercase tracking-[.22em]">{locale === "fr" ? "Démarrer un projet" : "Start a project"}<ArrowDownRight className="size-4 text-[#d8ff46]" /></Link>
                </div>
              </div>

              <div className="flex shrink-0 items-center justify-between border-t border-white/15 py-5 text-[9px] uppercase tracking-[.24em] text-white/35">
                <span>© {new Date().getFullYear()}</span><span>06°22&apos;N — 02°26&apos;E</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
