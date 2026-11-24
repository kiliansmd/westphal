import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { helpCards, helpSecondaryLinks } from '@/lib/site-data'

export function HelpSection() {
  return (
    <section id="hilfe" className="scroll-mt-28 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Wobei können wir Ihnen helfen?
          </h2>
          <p className="mt-4 text-pretty text-xl leading-relaxed text-muted-foreground">
            Wählen Sie einfach Ihr Anliegen aus.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {helpCards.map((card) => {
            const Icon = card.icon
            return (
              <Link
                key={card.title}
                href={card.href}
                className="group flex items-start gap-5 rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:border-primary hover:shadow-md"
              >
                <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold leading-snug text-card-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                    {card.text}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-lg font-semibold text-primary">
                    {card.cta}
                    <ArrowRight
                      className="size-5 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        <p className="mt-8 text-center text-lg text-muted-foreground">
          Auch interessant:{' '}
          {helpSecondaryLinks.map((link, i) => (
            <span key={link.href}>
              {i > 0 && <span aria-hidden="true"> · </span>}
              <Link
                href={link.href}
                className="font-semibold text-primary underline underline-offset-4 hover:no-underline"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
