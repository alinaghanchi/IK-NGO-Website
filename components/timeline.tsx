'use client'

import { Reveal } from '@/components/reveal'

const milestones = [
  {
    year: '2020',
    title: 'A foundation is born',
    text: 'InAmigos Foundation is registered as a Section 8 non-profit with a simple belief — unite minds for change.',
  },
  {
    year: '2021',
    title: 'BachpanShala begins',
    text: 'Our first street classrooms open, bringing education to children living on the margins.',
  },
  {
    year: '2022',
    title: 'Seva & Udaan scale up',
    text: 'Food relief and women-empowerment drives expand across multiple cities and settlements.',
  },
  {
    year: '2023',
    title: 'Reaching new frontiers',
    text: 'Animal welfare, environment and youth programs launch — the six-project ecosystem takes shape.',
  },
  {
    year: 'Today',
    title: '50,000+ lives touched',
    text: 'A 200+ volunteer movement spanning 28+ states, and still only getting started.',
  },
]

export function Timeline() {
  return (
    <section id="timeline" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Journey
          </p>
          <h2 className="mt-3 text-balance font-heading text-4xl tracking-tight md:text-5xl">
            From one act to a movement
          </h2>
        </Reveal>

        <div className="relative mt-14">
          {/* vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-1/2" />

          <div className="space-y-10 md:space-y-16">
            {milestones.map((m, i) => {
              const left = i % 2 === 0
              return (
                <Reveal key={m.year} delay={0.05}>
                  <div
                    className={`relative flex items-start gap-6 pl-12 md:pl-0 ${
                      left ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* dot */}
                    <span className="absolute left-4 top-2 z-10 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-primary ring-4 ring-background md:left-1/2" />

                    <div className="md:w-1/2" />
                    <div
                      className={`md:w-1/2 ${left ? 'md:pl-10' : 'md:pr-10 md:text-right'}`}
                    >
                      <div className="rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                        <span className="font-heading text-3xl text-primary md:text-4xl">
                          {m.year}
                        </span>
                        <h3 className="mt-1 text-lg font-semibold tracking-tight">
                          {m.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {m.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
