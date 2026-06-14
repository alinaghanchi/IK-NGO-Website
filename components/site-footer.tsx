import Image from 'next/image'

const columns = [
  {
    title: 'Projects',
    links: [
      'BachpanShala',
      'Project Seva',
      'Project Udaan',
      'Project Jeev',
      'Project Prakriti',
      'Project Vikas',
    ],
  },
  {
    title: 'Foundation',
    links: ['Our Mission', 'Impact', 'Journey', 'Gallery', 'Contact'],
  },
  {
    title: 'Get Involved',
    links: ['Volunteer', 'Donate', 'Partner', 'Careers'],
  },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-card/40">
      <div className="absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-glow-orange/10 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="InAmigos Foundation logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-lg object-contain"
              />
              <div>
                <p className="font-semibold tracking-tight">InAmigos Foundation</p>
                <p className="text-sm text-muted-foreground">
                  Uniting Minds for Change
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              A Section 8 non-profit founded in 2020, working across India to
              deliver education, welfare and opportunity to communities that
              need it most.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} InAmigos Foundation. All rights reserved.</p>
          <p>Crafted with ❤️ by Alina Ghanchi</p>
          
<div className="mt-6 text-center border-t border-white/10 pt-6">
  <p className="text-lg font-semibold text-white">
    Designed & Developed by
  </p>

  <p className="mt-2 text-1xl font-extrabold bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
    Alina Ghanchi
  </p>
</div>

        </div>
      </div>
    </footer>
  )
}
