import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { helpCards, helpSecondaryLinks } from '@/lib/site-data'
import { Reveal } from '@/components/motion'

export function HelpSection() {
  return (
    <section id="hilfe" className="scroll-mt-28 border-y border-border bg-secondary py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <h2 className="text-balance font-serif text-4xl font-medium leading-[1.1] text-foreground sm:text-5xl">
            Wobei können wir Ihnen helfen?
          </h2>
          <p className="mt-5 max-w-sm text-pretty text-lg leading-relaxed text-muted-foreground">
            Wählen Sie Ihr Anliegen – oder rufen Sie einfach an, wenn Sie
            unsicher sind.
          </p>
          <p className="mt-8 text-base text-muted-foreground">
            Außerdem:{' '}
            {helpSecondaryLinks.map((link, i) => (
              <span key={link.href}>
                {i > 0 && ', '}
                <Link
                  href={link.href}
                  className="font-semibold text-foreground underline decoration-brand decoration-2 underline-offset-4 hover:decoration-foreground"
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </p>
        </div>

        <ul className="border-t border-foreground/15">
          {helpCards.map((card, index) => (
            <Reveal as="li" key={card.title} delay={index * 90} className="border-b border-foreground/15">
              <Link
                href={card.href}
                className="group flex items-center gap-6 py-7 transition-colors sm:py-8"
              >
                <div className="min-w-0 flex-1 transition-transform duration-300 group-hover:translate-x-1">
                  <h3 className="font-serif text-2xl font-medium leading-snug text-foreground decoration-brand decoration-2 underline-offset-[6px] group-hover:underline sm:text-[1.75rem]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                    {card.text}
                  </p>
                </div>
                <span
                  className="flex size-12 shrink-0 items-center justify-center rounded-full border border-foreground/20 text-foreground transition-colors group-hover:border-brand group-hover:bg-brand"
                  aria-hidden="true"
                >
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
