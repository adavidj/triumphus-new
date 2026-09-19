import type { Locale } from "@/lib/site";
import { HomeHero } from "@/features/home/home-hero";
import { HomeIntro } from "@/features/home/home-intro";
import { HomeStats } from "@/features/home/home-stats";
import { FeaturedProjects } from "@/features/home/featured-projects";
import { ServicesPreview } from "@/features/home/services-preview";
import { StudioPreview } from "@/features/home/studio-preview";
import { CertificationsStrip } from "@/features/home/certifications-strip";
import { ContactCta } from "@/features/home/contact-cta";
export function HomePage({ locale }: { locale: Locale }) { return <><HomeHero locale={locale}/><HomeIntro locale={locale}/><HomeStats locale={locale}/><FeaturedProjects locale={locale}/><ServicesPreview locale={locale}/><StudioPreview locale={locale}/><CertificationsStrip locale={locale}/><ContactCta locale={locale}/></>; }
