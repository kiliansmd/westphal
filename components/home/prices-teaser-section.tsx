import Link from 'next/link'
import { ArrowRight, Info } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { priceTiers } from '@/lib/site-data'

export function PricesTeaserSection() {
  return (
    <section id="preise" className="scroll-mt-28 bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Preise & Krankenkasse
          </p>
          <h2 className="mt-2 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Preise verständlich erklärt
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Von der zuzahlungsfreien Basisversorgung bis zur Premiumtechnik – wir
            erklären offen, was möglich ist und was die Krankenkasse übernimmt.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {priceTiers.map((tier) => {
            const Icon = tier.icon
            return (
              <div
                key={tier.key}
                className={cn(
                  'flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md',
                  tier.featured
                    ? 'border-primary ring-1 ring-primary/30'
                    : 'border-border',
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  {tier.featured && (
                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      Beliebt
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-card-foreground">
                  {tier.title}
                </h3>
                <p className="text-sm text-muted-foreground">{tier.subtitle}</p>
                <div className="mt-4 border-t border-border pt-4">
                  <p className="text-xs font-medium text-muted-foreground">
                    Eigenanteil mit Kasse
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    {tier.priceKasse}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    privat{' '}
                    <span className="font-semibold text-foreground">
                      {tier.pricePrivat}
                    </span>
                  </p>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {tier.text}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-8 flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Alle Preise pro Hörgerät, Kassen-Eigenanteil zzgl. 10 € gesetzliche
              Zuzahlung. Die genaue Empfehlung besprechen wir im persönlichen
              Termin.
            </p>
          </div>
          <Link
            href="/preise-krankenkasse"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'shrink-0',
            )}
          >
            Preise &amp; Krankenkasse ansehen
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
