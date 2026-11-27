import Link from 'next/link'
import { Check, Minus } from 'lucide-react'
import {
  priceTiers,
  priceFeatureMatrix,
  type PriceTier,
} from '@/lib/site-data'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

/** Renders a single feature value: check, dash, or a highlighted label. */
function FeatureValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <>
        <Check className="size-5 text-brand-deep" aria-hidden="true" />
        <span className="sr-only">enthalten</span>
      </>
    )
  }
  if (value === false) {
    return (
      <>
        <Minus className="size-5 text-muted-foreground/40" aria-hidden="true" />
        <span className="sr-only">nicht enthalten</span>
      </>
    )
  }
  return (
    <span className="text-sm font-semibold text-foreground">
      {value}
    </span>
  )
}

function PriceHeader({ tier }: { tier: PriceTier }) {
  return (
    <div className="flex h-full flex-col">
      <p className="h-6 text-sm font-semibold text-brand-deep">
        {tier.featured ? 'Häufig gewählt' : ''}
      </p>
      <h3 className="mt-1 font-serif text-2xl font-medium text-foreground">
        {tier.title}
      </h3>
      <p className="text-sm text-muted-foreground">{tier.subtitle}</p>
      <div className="mt-4 border-t border-foreground/15 pt-4">
        <p className="text-sm text-muted-foreground">
          Eigenanteil mit Kasse
        </p>
        <p className="font-serif text-3xl tabular-nums text-foreground">{tier.priceKasse}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          privat <span className="font-semibold text-foreground">{tier.pricePrivat}</span>
        </p>
        {tier.note && (
          <p className="mt-1 text-sm italic text-muted-foreground">{tier.note}</p>
        )}
      </div>
    </div>
  )
}

export function PriceTable() {
  return (
    <div>
      {/* Desktop: comparison table */}
      <div className="hidden border-t-2 border-foreground lg:block">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">
            Preisübersicht der Hörgeräte-Leistungsstufen mit Funktionsvergleich
          </caption>
          <thead>
            <tr>
              <th scope="col" className="w-[22%] py-5 pr-5 align-bottom">
                <span className="text-sm font-semibold text-foreground">
                  Leistung & Funktionen
                </span>
              </th>
              {priceTiers.map((tier) => (
                <th
                  key={tier.key}
                  scope="col"
                  className={cn(
                    'p-5 align-top',
                    tier.featured && 'bg-background/60',
                  )}
                >
                  <PriceHeader tier={tier} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {priceFeatureMatrix.map((row) => (
              <tr
                key={row.label}
                className={cn(
                  'border-t border-foreground/15',
                )}
              >
                <th
                  scope="row"
                  className="py-4 pr-5 text-base font-medium text-foreground"
                >
                  {row.label}
                </th>
                {row.values.map((value, i) => (
                  <td
                    key={priceTiers[i].key}
                    className={cn(
                      'p-4 text-center',
                      priceTiers[i].featured && 'bg-background/60',
                    )}
                  >
                    <span className="inline-flex items-center justify-center">
                      <FeatureValue value={value} />
                    </span>
                  </td>
                ))}
              </tr>
            ))}
            {/* Device examples row */}
            <tr className="border-t border-foreground/15">
              <th
                scope="row"
                className="py-4 pr-5 text-base font-medium text-foreground align-top"
              >
                Beispielgeräte
              </th>
              {priceTiers.map((tier) => (
                <td
                  key={tier.key}
                  className={cn(
                    'p-4 align-top text-center text-sm text-muted-foreground',
                    tier.featured && 'bg-background/60',
                  )}
                >
                  {tier.devices ? tier.devices.join(', ') : '—'}
                </td>
              ))}
            </tr>
            {/* CTA row */}
            <tr className="border-t border-foreground/15">
              <td className="py-4 pr-5" />
              {priceTiers.map((tier) => (
                <td
                  key={tier.key}
                  className={cn('p-4 text-center', tier.featured && 'bg-background/60')}
                >
                  <Link
                    href="/kontakt?anliegen=Preise%20%26%20Krankenkasse"
                    className={cn(
                      buttonVariants({
                        variant: tier.featured ? 'default' : 'outline',
                      }),
                      'w-full',
                    )}
                  >
                    Beraten lassen
                  </Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile / tablet: stacked cards */}
      <div className="grid gap-x-10 sm:grid-cols-2 lg:hidden">
        {priceTiers.map((tier) => (
          <div
            key={tier.key}
            className={cn(
              'flex flex-col border-t-2 py-8',
              tier.featured ? 'border-brand' : 'border-foreground',
            )}
          >
            <PriceHeader tier={tier} />
            <ul className="mt-5 space-y-2 border-t border-foreground/15 pt-5">
              {priceFeatureMatrix.map((row, i) => {
                const value = row.values[priceTiers.indexOf(tier)]
                return (
                  <li
                    key={row.label}
                    className={cn(
                      'flex items-center justify-between gap-2 text-base',
                      value === false
                        ? 'text-muted-foreground/50'
                        : 'text-card-foreground',
                    )}
                  >
                    <span>{row.label}</span>
                    <span className="flex shrink-0 items-center">
                      <FeatureValue value={value} />
                    </span>
                  </li>
                )
              })}
            </ul>
            {tier.devices && (
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">
                  Beispielgeräte:{' '}
                </span>
                {tier.devices.join(', ')}
              </p>
            )}
            <Link
              href="/kontakt?anliegen=Preise%20%26%20Krankenkasse"
              className={cn(
                buttonVariants({
                  variant: tier.featured ? 'default' : 'outline',
                }),
                'mt-5 w-full',
              )}
            >
              Beraten lassen
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
