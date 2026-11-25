import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { priceTiers } from '@/lib/site-data'

export function PricesTeaserSection() {
  return (
    <section id="preise" className="scroll-mt-28 bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-20">
          <h2 className="text-balance font-serif text-4xl font-medium leading-[1.1] text-foreground sm:text-5xl">
            Was kostet ein Hörgerät?
          </h2>
          <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Von der zuzahlungsfreien Basisversorgung bis zur Premiumtechnik – wir
            sagen offen, was möglich ist und was die Krankenkasse übernimmt.
          </p>
        </div>

        <div className="mt-14 border-t-2 border-foreground">
          {/* Column labels (desktop) */}
          <div className="hidden grid-cols-[1.3fr_0.8fr_0.8fr_2fr] gap-8 border-b border-foreground/15 py-4 text-base text-muted-foreground lg:grid">
            <span>Versorgung</span>
            <span>Mit Krankenkasse</span>
            <span>Privat</span>
            <span>Für wen</span>
          </div>

          <ul>
            {priceTiers.map((tier) => (
              <li
                key={tier.key}
                className="grid grid-cols-2 gap-x-6 gap-y-3 border-b border-foreground/15 py-7 lg:grid-cols-[1.3fr_0.8fr_0.8fr_2fr] lg:items-baseline lg:gap-8"
              >
                <div className="col-span-2 lg:col-span-1">
                  <h3 className="font-serif text-2xl font-medium text-foreground">
                    {tier.title}
                  </h3>
                  <p className="mt-1 text-base text-muted-foreground">
                    {tier.subtitle}
                  </p>
                  {tier.featured && (
                    <p className="mt-1 text-base font-semibold text-brand-deep">
                      Häufig gewählt
                    </p>
                  )}
                </div>
                <p>
                  <span className="block text-sm text-muted-foreground lg:hidden">
                    Mit Krankenkasse
                  </span>
                  <span className="font-serif text-3xl text-foreground">
                    {tier.priceKasse}
                  </span>
                </p>
                <p>
                  <span className="block text-sm text-muted-foreground lg:hidden">
                    Privat
                  </span>
                  <span className="text-lg font-semibold text-foreground">
                    {tier.pricePrivat}
                  </span>
                </p>
                <p className="col-span-2 text-lg leading-relaxed text-muted-foreground lg:col-span-1">
                  {tier.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            Alle Preise pro Hörgerät. Mit Krankenkasse: Eigenanteil zzgl. 10 €
            gesetzlicher Zuzahlung. Die genaue Empfehlung besprechen wir im
            persönlichen Termin.
          </p>
          <Link
            href="/preise-krankenkasse"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 text-lg font-semibold text-foreground underline decoration-brand decoration-2 underline-offset-[6px] hover:decoration-foreground"
          >
            Alle Preise &amp; Kassenzuschuss
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
