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
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-balance font-serif text-3xl font-medium text-foreground">
          {heading}
        </h2>
        <ul className="mt-8 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <li key={link.href} className="border-t border-foreground/15">
              <Link href={link.href} className="group flex items-start gap-4 py-6">
                <span className="flex-1">
                  <span className="block font-serif text-xl font-medium text-foreground">
                    {link.label}
                  </span>
                  <span className="mt-1 block text-base leading-relaxed text-muted-foreground">
                    {link.description}
                  </span>
                </span>
                <ArrowRight
                  className="mt-1 size-5 shrink-0 text-foreground transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
