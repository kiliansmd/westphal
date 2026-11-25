import Image from 'next/image'
import { partners } from '@/lib/site-data'

export function PartnersSection() {
  return (
    <section className="border-t border-border bg-background py-16 sm:py-20" aria-labelledby="partners-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-4 lg:grid-cols-2 lg:items-end lg:gap-20">
          <h2
            id="partners-heading"
            className="text-balance font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl"
          >
            Herstellerunabhängig – mit Originalprodukten
          </h2>
          <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Entscheidend ist nicht zuerst die Marke, sondern die beste Lösung
            für Ihren Höralltag.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 items-center gap-x-10 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner) => (
            <li key={partner.name} className="flex h-12 items-center justify-center">
              <Image
                src={partner.src || '/placeholder.svg'}
                alt={partner.alt}
                width={200}
                height={80}
                sizes="(min-width: 1024px) 160px, (min-width: 640px) 30vw, 44vw"
                className={`h-auto w-auto max-w-[9rem] object-contain opacity-80 mix-blend-multiply grayscale transition hover:opacity-100 hover:grayscale-0 ${
                  partner.wide ? 'max-h-9' : 'max-h-12'
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
