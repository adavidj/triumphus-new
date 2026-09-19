import type { Locale } from "@/lib/site";
import { statistics } from "@/data/content";
import { Counter } from "@/components/motion/counter";

export function HomeStats({ locale }: { locale: Locale }) {
  return (
    <section className="border-y border-black/15 bg-[#d8d6ce]">
      <div className="site-container grid md:grid-cols-3">
        {statistics.map((stat, index) => (
          <div key={stat.fr} className={`group relative overflow-hidden py-12 md:px-8 md:py-16 ${index > 0 ? "border-t border-black/15 md:border-l md:border-t-0" : ""}`}>
            <span className="absolute inset-x-0 bottom-0 h-0 bg-[#0c3241] transition-all duration-700 ease-[var(--ease-premium)] group-hover:h-full" />
            <div className="relative z-10 transition-colors duration-500 group-hover:text-white">
              <p className="font-display text-7xl leading-none tracking-[-.05em] md:text-8xl"><Counter value={stat.value} suffix={stat.suffix} /></p>
              <div className="mt-7 flex items-center justify-between border-t border-current/20 pt-4">
                <p className="label opacity-55">{locale === "fr" ? stat.fr : stat.en}</p><span className="text-[#e1693f]">↗</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
