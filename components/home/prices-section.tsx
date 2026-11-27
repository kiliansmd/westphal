import Link from 'next/link'
import { ArrowRight, Info } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { priceTiers } from '@/lib/site-data'

export function PricesSection() {
  return (
    <section id="preise" className="scroll-mt-24 bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Preise & Krankenkasse
          </p>
          <h2 className="mt-2 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Was kostet ein Hörgerät?
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Die Kosten hängen von Hörverlust, Alltagssituation, gewünschtem
            Komfort und Versicherungsstatus ab. Westphal Hörgeräte steht für
            transparente Preise und erklärt Ihnen offen, welche Versorgung
            möglich ist – von der Basisversorgung bis zu modernen Komfort- und
            Premiumlösungen mit Akku, Bluetooth, Sprachfokussierung oder
            KI-Unterstützung.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {priceTiers.map((tier) => {
            const Icon = tier.icon
            return (
              <div
                key={tier.key}
                className={cn(
                  'flex flex-col rounded-2xl border bg-card p-6 shadow-sm',
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

        <p className="mt-4 text-sm text-muted-foreground">
          Alle Preise pro Hörgerät. Kassen-Eigenanteil zzgl. 10 € gesetzliche
          Zuzahlung.
        </p>

        <div className="mt-8 flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Die genaue Empfehlung hängt von Ihrem Hörverlust, Ihrem Alltag und
              Ihrer Krankenkasse ab. Wir erklären Ihnen die Kosten transparent
              im persönlichen Termin.
            </p>
          </div>
          <Link
            href="/preise-krankenkasse"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'h-12 shrink-0 px-6 text-base',
            )}
          >
            Preisorientierung ansehen
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
