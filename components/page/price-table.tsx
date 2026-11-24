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
        <Check className="size-5 text-primary" aria-hidden="true" />
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
    <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-accent-foreground">
      {value}
    </span>
  )
}

function PriceHeader({ tier }: { tier: PriceTier }) {
  const Icon = tier.icon
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2">
        <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-primary">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        {tier.featured && (
          <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
            Beliebt
          </span>
        )}
      </div>
      <h3 className="mt-3 font-serif text-lg font-semibold text-card-foreground">
        {tier.title}
      </h3>
      <p className="text-sm text-muted-foreground">{tier.subtitle}</p>
      <div className="mt-4 border-t border-border pt-4">
        <p className="text-xs font-medium text-muted-foreground">
          Eigenanteil mit Kasse
        </p>
        <p className="text-2xl font-bold text-foreground">{tier.priceKasse}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          privat <span className="font-semibold text-foreground">{tier.pricePrivat}</span>
        </p>
        {tier.note && (
          <p className="mt-1 text-xs italic text-primary">{tier.note}</p>
        )}
      </div>
    </div>
  )
}

export function PriceTable() {
  return (
    <div>
      {/* Desktop: comparison table */}
      <div className="hidden overflow-hidden rounded-2xl border border-border lg:block">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">
            Preisübersicht der Hörgeräte-Leistungsstufen mit Funktionsvergleich
          </caption>
          <thead>
            <tr>
              <th scope="col" className="w-[22%] bg-secondary p-5 align-bottom">
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
                    tier.featured ? 'bg-accent/50' : 'bg-secondary',
                  )}
                >
                  <PriceHeader tier={tier} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {priceFeatureMatrix.map((row, rowIndex) => (
              <tr
                key={row.label}
                className={cn(
                  'border-t border-border',
                  rowIndex % 2 === 1 && 'bg-muted/30',
                )}
              >
                <th
                  scope="row"
                  className="p-4 pl-5 text-sm font-medium text-card-foreground"
                >
                  {row.label}
                </th>
                {row.values.map((value, i) => (
                  <td
                    key={priceTiers[i].key}
                    className={cn(
                      'p-4 text-center',
                      priceTiers[i].featured && 'bg-accent/30',
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
            <tr className="border-t border-border">
              <th
                scope="row"
                className="p-4 pl-5 text-sm font-medium text-card-foreground align-top"
              >
                Beispielgeräte
              </th>
              {priceTiers.map((tier) => (
                <td
                  key={tier.key}
                  className={cn(
                    'p-4 align-top text-center text-xs text-muted-foreground',
                    tier.featured && 'bg-accent/30',
                  )}
                >
                  {tier.devices ? tier.devices.join(', ') : '—'}
                </td>
              ))}
            </tr>
            {/* CTA row */}
            <tr className="border-t border-border">
              <td className="p-4 pl-5" />
              {priceTiers.map((tier) => (
                <td
                  key={tier.key}
                  className={cn('p-4 text-center', tier.featured && 'bg-accent/30')}
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
      <div className="grid gap-6 sm:grid-cols-2 lg:hidden">
        {priceTiers.map((tier) => (
          <div
            key={tier.key}
            className={cn(
              'flex flex-col rounded-2xl border bg-card p-6 shadow-sm',
              tier.featured
                ? 'border-primary ring-1 ring-primary/30'
                : 'border-border',
            )}
          >
            <PriceHeader tier={tier} />
            <ul className="mt-5 space-y-2 border-t border-border pt-5">
              {priceFeatureMatrix.map((row, i) => {
                const value = row.values[priceTiers.indexOf(tier)]
                return (
                  <li
                    key={row.label}
                    className={cn(
                      'flex items-center justify-between gap-2 text-sm',
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
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                <span className="font-medium text-card-foreground">
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
