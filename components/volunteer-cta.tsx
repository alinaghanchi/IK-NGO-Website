'use client'

import Image from 'next/image'
import { ArrowUpRight, HandHeart } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function VolunteerCta() {
  return (
    <section id="volunteer" className="scroll-mt-24 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border">
            <Image
              src="/images/bachpanshala.png"
              alt="Volunteers leading community education sessions"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
            <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-glow-orange/25 blur-[120px]" />

            <div className="relative max-w-2xl px-6 py-16 md:px-14 md:py-24">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md">
                <HandHeart className="h-4 w-4 text-primary" />
                Join 200+ changemakers
              </div>
              <h2 className="mt-5 text-balance font-heading text-4xl leading-tight tracking-tight md:text-6xl">
                Your weekend could be someone&apos;s turning point.
              </h2>
              <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                Whether you can teach, cook, drive, design or simply show up —
                there is a place for you in this movement. Give your time, lend
                your skill, change a life.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/25"
                >
                  Become a Volunteer
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:scale-[1.03] hover:bg-secondary"
                >
                  Donate / Partner
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
