'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, Heart } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      {/* Cinematic background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="InAmigos Foundation volunteers and children celebrating together, holding their Republic Day artwork"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* layered cinematic gradients for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
        {/* warm + cool glow accents */}
        <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-glow-orange/20 blur-[140px]" />
        <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-glow-blue/20 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Section 8 Non-Profit · Est. 2020 · Uniting Minds for Change
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl text-balance font-heading text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-8xl"
        >
          Empowering Communities.{' '}
          <span className="text-primary text-glow-orange">
            Transforming Lives.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
        >
         Supporting children, empowering women, caring for communities, and creating opportunities where hope is needed most.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#impact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/25"
          >
          Our Impact
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#volunteer"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:scale-[1.03] hover:bg-secondary"
          >
            <Heart className="h-4 w-4 text-primary" />
            Become a Volunteer
          </a>
        </motion.div>
      </div>
    </section>
  )
}
