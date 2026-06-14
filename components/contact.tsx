'use client'

import { Mail, Phone, MapPin, Globe, Send, AtSign } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const details = [
  { icon: Mail, label: 'Email', value: 'inamigosfoundation@gmail.com', href: 'mailto:inamigosfoundation@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 6267309902', href: 'tel:+91 6267309902' },
  { icon: MapPin, label: 'Location', value: 'Bilaspur, Chhattisgarh, India', href: '#' },
]

const socials = [
  { icon: AtSign, label: 'Instagram', href: 'https://instagram.com/inamigosfoundation' },
  { icon: Globe, label: 'LinkedIn', href: 'https://linkedin.com/company/inamigos-foundation' },
  { icon: Send, label: 'Website', href: 'https://inamigosfoundation.org.in' },
]

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Get in touch
              </p>
              <h2 className="mt-3 text-balance font-heading text-5xl font-bold tracking-tight md:text-6xl">
  Join The Movement.
  <br />
  Create Real Impact.
</h2>
             <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
  Every volunteer, donor and partner helps us create meaningful change.
  Together we can empower communities, support education, strengthen
  livelihoods and build a more inclusive future.
</p>
            </Reveal>

            <div className="mt-10 space-y-3">
              {details.map((d, i) => {
                const Icon = d.icon
                return (
                  <Reveal key={d.label} delay={i * 0.06}>
                    <a
                      href={d.href}
                      className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
                    >
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                          {d.label}
                        </span>
                        <span className="block font-medium">{d.value}</span>
                      </span>
                    </a>
                  </Reveal>
                )
              })}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-6 flex gap-3">
                {socials.map((s) => {
                  const Icon = s.icon
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              className="rounded-3xl border border-border bg-card p-6 md:p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" id="name" placeholder="Your full name" />
                <Field
                  label="Email"
                  id="email"
                  type="email"
                  placeholder="you@email.com"
                />
              </div>
             <div className="mt-4">
  <label
    htmlFor="city"
    className="mb-1.5 block text-sm font-medium"
  >
    City
  </label>

  <input
    id="city"
    type="text"
    placeholder="Your City"
    className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none"
  />
</div>
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about yourself, your interests, experience and how you would like to create impact through InAmigos Foundation..."
                  className="w-full resize-none rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Apply To Volunteer
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  id,
  type = 'text',
  placeholder,
}: {
  label: string
  id: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
      />
    </div>
  )
}
