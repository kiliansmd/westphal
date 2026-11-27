import Link from 'next/link'
import { CalendarCheck } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { company } from '@/lib/site-data'
import { OpenStatus } from '@/components/open-status'
import { Reveal } from '@/components/motion'

type CTASectionProps = {
  heading?: string
  text?: string
  primaryLabel?: string
  /** Ziel der Hauptschaltfläche, z. B. mit vorausgewähltem Anliegen. */
  primaryHref?: string
}

export function CTASection({
  heading = 'Vereinbaren Sie Ihren persönlichen Termin',
  text = 'Wir nehmen uns Zeit für Ihr Anliegen. Vereinbaren Sie einen Termin oder wünschen Sie einen Rückruf – wir melden uns persönlich bei Ihnen.',
  primaryLabel = 'Termin anfragen',
  primaryHref = '/kontakt',
}: CTASectionProps) {
  return (
    <section className="border-b border-border bg-secondary py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:px-8 lg:grid-cols-2 lg:items-end lg:gap-20">
        <Reveal>
          <h2 className="text-balance break-words hyphens-auto sm:hyphens-manual font-serif text-3xl font-medium leading-[1.12] text-foreground sm:text-[2.6rem]">
            {heading}
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {text}
          </p>
        </Reveal>
        <Reveal delay={120}>
          <OpenStatus className="mb-3" />
          <a
            href={company.phoneHref}
            className="block w-fit font-serif text-[min(1.9rem,8.4vw)] leading-tight text-foreground decoration-brand decoration-2 underline-offset-8 hover:underline sm:text-5xl"
          >
            {company.phoneDisplay}
          </a>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <Link
              href={primaryHref}
              className={cn(buttonVariants({ size: 'lg' }), 'w-full sm:w-auto')}
            >
              <CalendarCheck aria-hidden="true" />
              {primaryLabel}
            </Link>
            <Link href="/kontakt?anliegen=Rückrufwunsch" className="link-accent text-lg">
              Rückruf wünschen
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
