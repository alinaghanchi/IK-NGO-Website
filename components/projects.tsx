'use client'

import Image from 'next/image'
import { BookOpen, Utensils, Sparkles, PawPrint, Leaf, Rocket } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

type Project = {
  name: string
  category: string
  description: string
  image?: string
  icon: React.ElementType
  className: string
}

const projects: Project[] = [
  {
    name: 'BachpanShala',
    category: 'Education & Child Development',
    description:
      'Street-side classrooms bringing learning, joy and structure to children who have never seen a school gate.',
    image: '/images/bachpanshala.png',
    icon: BookOpen,
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    name: 'Project Seva',
    category: 'Food & Welfare Support',
    description: 'Thousands of nutritious meals packed and distributed to families in need.',
    image: '/images/relief.png',
    icon: Utensils,
    className: 'md:col-span-1',
  },
  {
    name: 'Project Udaan',
    category: 'Women Empowerment',
    description: 'Skills, awareness and confidence for women to rise and lead their communities.',
    image: '/images/nutrition-drive.png',
    icon: Sparkles,
    className: 'md:col-span-1',
  },
  {
    name: 'Project Jeev',
    category: 'Animal Welfare',
    description: 'Care, feeding and rescue for the voiceless street animals among us.',
    icon: PawPrint,
    className: 'md:col-span-1',
  },
  {
    name: 'Project Prakriti',
    category: 'Environmental Sustainability',
    description: 'Plantation drives and green awareness for a livable tomorrow.',
    icon: Leaf,
    className: 'md:col-span-1',
  },
  {
    name: 'Project Vikas',
    category: 'Youth Development',
    description: 'Mentorship and opportunity that turn young potential into leadership.',
    icon: Rocket,
    className: 'md:col-span-1',
  },
]

function ImageCard({ project }: { project: Project }) {
  const Icon = project.icon
  return (
    <div className="group relative h-full min-h-64 overflow-hidden rounded-3xl border border-border">
      <Image
        src={project.image as string}
        alt={`${project.name} — ${project.category}`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="relative flex h-full flex-col justify-end p-6 md:p-7">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
          <Icon className="h-4 w-4" />
          {project.category}
        </div>
        <h3 className="mt-2 font-heading text-2xl tracking-tight md:text-3xl">
          {project.name}
        </h3>
        <p className="mt-2 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </div>
    </div>
  )
}

function IconCard({ project }: { project: Project }) {
  const Icon = project.icon
  return (
    <div className="group relative flex h-full min-h-56 flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/40 md:p-7">
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />
      <div className="relative grid h-12 w-12 place-items-center rounded-2xl border border-border bg-secondary text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <div className="relative">
        <div className="text-xs font-medium uppercase tracking-wider text-primary">
          {project.category}
        </div>
        <h3 className="mt-2 font-heading text-2xl tracking-tight md:text-3xl">
          {project.name}
        </h3>
        <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 border-y border-border bg-card/30 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Flagship Projects
          </p>
          <h2 className="mt-3 text-balance font-heading text-4xl tracking-tight md:text-5xl">
            Six missions. One promise.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Each project tackles a different frontier of change — together they
            form an ecosystem of dignity.
          </p>
        </Reveal>

        <div className="mt-12 grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06} className={cn(p.className)}>
              {p.image ? <ImageCard project={p} /> : <IconCard project={p} />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
