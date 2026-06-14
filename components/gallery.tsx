'use client'

import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const images = [
  { src: '/images/hero.png', alt: 'Volunteers and children celebrating together', ratio: 'aspect-[4/3]' },
  { src: '/images/outreach.png', alt: 'Street outreach with the elderly', ratio: 'aspect-[4/3]' },
  { src: '/images/bachpanshala.png', alt: 'BachpanShala street classroom sessions', ratio: 'aspect-square' },
  { src: '/images/nutrition-drive.png', alt: 'Nutrition drive distribution', ratio: 'aspect-[4/3]' },
  { src: '/images/project-seva.png', alt: 'Children enjoying fresh juice', ratio: 'aspect-[3/4]' },
  { src: '/images/relief.png', alt: 'Packed meal kits ready for distribution', ratio: 'aspect-[4/3]' },
  { src: '/images/project-udaan.png', alt: 'Project Udaan women empowerment sessions', ratio: 'aspect-[3/4]' },
]

export function Gallery() {
  return (
    <section
      id="gallery"
      className="relative scroll-mt-24 border-t border-border bg-card/30 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Moments
          </p>
          <h2 className="mt-3 text-balance font-heading text-4xl tracking-tight md:text-5xl">
            The faces behind the numbers
          </h2>
        </Reveal>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {images.map((img, i) => (
            <Reveal key={img.src} delay={(i % 3) * 0.08}>
              <figure
                className={`group relative w-full overflow-hidden rounded-3xl border border-border ${img.ratio}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
