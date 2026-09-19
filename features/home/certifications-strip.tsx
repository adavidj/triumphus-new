import type { Locale } from "@/lib/site";
import { certifications } from "@/data/content";

export function CertificationsStrip({ locale }: { locale: Locale }) {
  return (
    <section className="bg-[#e9e7e0] py-20 md:py-28">
      <div className="site-container">
        <div className="mb-10 flex items-end justify-between"><div><p className="label text-black/40">05 / QSE</p><p className="mt-4 font-display text-4xl">{locale === "fr" ? "L'exigence certifiée." : "Certified excellence."}</p></div><span className="hidden size-3 rounded-full bg-[#d8ff46] shadow-[0_0_0_5px_rgba(17,22,20,.08)] md:block" /></div>
        <div className="grid border-y border-black/15 md:grid-cols-3">
          {certifications.map(([standard, fr, en], index) => (
            <div key={standard} className={`group py-8 md:px-8 md:py-10 ${index > 0 ? "border-t border-black/15 md:border-l md:border-t-0" : ""}`}>
              <div className="flex items-center justify-between"><p className="font-display text-3xl text-[#0c3241]">{standard}</p><span className="label text-black/25">0{index + 1}</span></div>
              <p className="mt-6 max-w-xs text-xs leading-6 text-black/50">{locale === "fr" ? fr : en}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
