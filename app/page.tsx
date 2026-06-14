import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ImpactStats } from '@/components/impact-stats'
import { Story } from '@/components/story'
import { Projects } from '@/components/projects'
import { Timeline } from '@/components/timeline'
import { Gallery } from '@/components/gallery'
import { VolunteerCta } from '@/components/volunteer-cta'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="relative">
      <SiteHeader />
      <Hero />
      <ImpactStats />
      <Story />
      <Projects />
      <Timeline />
      <Gallery />
      <VolunteerCta />
      <Contact />
      <SiteFooter />
    </main>
  )
}
