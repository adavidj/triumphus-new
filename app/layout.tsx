import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "@/app/globals.css";
import { SiteShell } from "@/components/layout/site-shell";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-instrument-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.triumphusbenin.com"),
  title: { default: "TRIUMPHUS — Cabinet d'Architecture à Cotonou", template: "%s | TRIUMPHUS" },
  description: "Cabinet d'Architecture TRIUMPHUS à Cotonou, Bénin. Architecture, urbanisme, design, décoration et expertise immobilière.",
  openGraph: { siteName: "TRIUMPHUS", type: "website", locale: "fr_BJ" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = { "@context":"https://schema.org", "@type":["Organization","ProfessionalService"], name:"Cabinet d'Architecture TRIUMPHUS", url:"https://www.triumphusbenin.com", foundingDate:"2000", telephone:"+2290197601103", email:"sotriumphus@yahoo.fr", address:{ "@type":"PostalAddress", streetAddress:"Von Jacquot, Rue 12.394, Lot 1755 bis parcelle F", addressLocality:"Cotonou", addressCountry:"BJ" } }; return <html lang="fr" className={`${manrope.variable} ${instrumentSerif.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><SiteShell>{children}</SiteShell></body></html>;
}
