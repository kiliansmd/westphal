import Image from 'next/image'
import { partners } from '@/lib/site-data'

export function PartnersSection() {
  return (
    <section className="bg-secondary py-16 sm:py-20" aria-labelledby="partners-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Herstellerunabhängig
          </p>
          <h2
            id="partners-heading"
            className="mt-2 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Originalprodukte namhafter Hersteller
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Wir beraten herstellerunabhängig und arbeiten mit den führenden
            Hörgeräte-Herstellern zusammen. Entscheidend ist nicht zuerst die
            Marke, sondern die beste Lösung für Ihren Höralltag.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner) => (
            <li
              key={partner.name}
              className="flex min-h-24 items-center justify-center rounded-xl border border-border bg-card px-6 py-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <Image
                src={partner.src || '/placeholder.svg'}
                alt={partner.alt}
                width={200}
                height={80}
                sizes="(min-width: 1024px) 180px, (min-width: 640px) 30vw, 44vw"
                className={`h-auto w-full object-contain ${
                  partner.wide ? 'max-h-10' : 'max-h-14'
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
