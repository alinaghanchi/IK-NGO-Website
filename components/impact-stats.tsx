'use client'

import { Users, HandHeart, MapPin, Sparkles } from 'lucide-react'
import { CountUp } from '@/components/count-up'
import { Reveal } from '@/components/reveal'

const stats = [
  { icon: Users, to: 50000, suffix: '+', label: 'Lives Impacted' },
  { icon: HandHeart, to: 200, suffix: '+', label: 'Dedicated Volunteers' },
  { icon: MapPin, to: 28, suffix: '+', label: 'Communities Reached' },
  { icon: Sparkles, to: 6, suffix: '+', label: 'Flagship Initiatives' },
]

export function ImpactStats() {
  return (
    <section id="impact" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Impact in Numbers
          </p>
          <h2 className="mt-3 text-balance font-heading text-4xl tracking-tight md:text-5xl">
            Change you can count
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/40 md:p-8">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100 md:opacity-0" />
                  <Icon className="h-6 w-6 text-primary" />
                  <div className="mt-6 font-heading text-4xl tracking-tight md:text-5xl">
                    <CountUp to={s.to} suffix={s.suffix} />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
