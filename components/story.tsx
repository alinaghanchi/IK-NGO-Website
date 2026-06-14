'use client'

import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export function Story() {
  return (
    <section id="story" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Editorial copy */}
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
               Creating Impact Since Day One
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-balance font-heading text-4xl leading-tight tracking-tight md:text-6xl">
                Every Project Has A Story. Every Story Creates Change.— it&apos;s a right.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                From supporting children through BachpanShala, to distributing essential resources through Project Seva and driving community transformation through Project Udaan, every effort is focused on building stronger, more resilient communities.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                Our vision is a country where every child learns, every woman
                leads, and every community thrives — built one honest act of
                service at a time.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                ' BachpanShala',
'Project Seva',
'Project Udaan',
'Women Empowerment',
'Nutrition Support',
'Environmental Action',
'Volunteer Network',
'Community Development',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Image collage */}
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-border">
                <Image
                  src="/images/outreach.png"
                  alt="A volunteer listening to an elderly couple during a street outreach visit"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-3xl border border-border">
                <Image
                  src="/images/project-seva.png"
                  alt="Two children enjoying fresh juice provided through a welfare drive"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="mt-24">
  <h3 className="text-3xl font-bold text-center">
    Voices Of Impact
  </h3>

  <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
    Real stories from volunteers, beneficiaries and communities touched by InAmigos Foundation.
  </p>
</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
