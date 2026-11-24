import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export type RelatedLink = {
  label: string
  description: string
  href: string
}

export function RelatedLinks({
  links,
  heading = 'Das könnte Sie auch interessieren',
}: {
  links: RelatedLink[]
  heading?: string
}) {
  return (
    <section className="bg-background py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-balance font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {heading}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/40"
            >
              <span className="text-base font-semibold text-card-foreground">
                {link.label}
              </span>
              <span className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">
                {link.description}
              </span>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
                Mehr erfahren
                <ArrowRight className="size-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
