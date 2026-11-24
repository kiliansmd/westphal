import Link from 'next/link'
import { CalendarCheck, PhoneCall } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { company } from '@/lib/site-data'

type CTASectionProps = {
  heading?: string
  text?: string
  primaryLabel?: string
}

export function CTASection({
  heading = 'Vereinbaren Sie Ihren persönlichen Termin',
  text = 'Wir nehmen uns Zeit für Ihr Anliegen. Vereinbaren Sie einen Termin oder wünschen Sie einen Rückruf – wir melden uns persönlich bei Ihnen.',
  primaryLabel = 'Termin anfragen',
}: CTASectionProps) {
  return (
    <section className="bg-secondary py-14 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-sm sm:p-12">
          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-card-foreground sm:text-4xl">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {text}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/kontakt"
              className={cn(buttonVariants({ size: 'lg' }), 'w-full sm:w-auto')}
            >
              <CalendarCheck aria-hidden="true" />
              {primaryLabel}
            </Link>
            <Link
              href="/kontakt?anliegen=Rückrufwunsch"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'w-full sm:w-auto',
              )}
            >
              <PhoneCall aria-hidden="true" />
              Rückruf wünschen
            </Link>
          </div>
          <p className="mt-6 text-base text-muted-foreground">
            Lieber direkt anrufen?{' '}
            <a
              href={company.phoneHref}
              className="font-semibold text-primary underline underline-offset-4 hover:no-underline"
            >
              {company.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
