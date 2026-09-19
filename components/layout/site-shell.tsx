"use client";
import { usePathname } from "next/navigation";
import { CustomCursor } from "@/components/motion/custom-cursor";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import type { Locale } from "@/lib/site";
export function SiteShell({ children }: { children: React.ReactNode }) { const pathname = usePathname(); const locale: Locale = pathname?.startsWith("/en") ? "en" : "fr"; return <><a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999] focus:bg-white focus:px-4 focus:py-3">Skip to content</a><CustomCursor /><Navbar locale={locale} /><main id="main-content">{children}</main><Footer locale={locale} /></>; }
