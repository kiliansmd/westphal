import Link from 'next/link'
import Image from 'next/image'
import { CalendarCheck } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { company, openingHours } from '@/lib/site-data'

// WhatsApp deep link from the company's E.164 number.
const whatsappHref = `https://wa.me/${company.phoneE164.replace(/[^0-9]/g, '')}`

const linkClass =
  'font-semibold text-foreground underline decoration-brand decoration-2 underline-offset-4 hover:decoration-foreground'

export function ContactCtaSection() {
  return (
    <section id="kontakt" className="scroll-mt-28 border-t border-border bg-secondary py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <h2 className="text-balance font-serif text-4xl font-medium leading-[1.1] text-foreground sm:text-5xl">
            Lassen Sie Ihr Hören in Ruhe prüfen.
          </h2>
          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Vereinbaren Sie einen Termin oder rufen Sie uns an. Auch kurzfristige
            Termine sind oft möglich.
          </p>

          <a
            href={company.phoneHref}
            className="mt-10 block w-fit whitespace-nowrap font-serif text-[1.9rem] text-foreground decoration-brand decoration-2 underline-offset-8 hover:underline sm:text-5xl"
          >
            {company.phone}
          </a>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <Link
              href="/kontakt"
              className={cn(buttonVariants({ size: 'lg' }), 'w-full sm:w-auto')}
            >
              <CalendarCheck aria-hidden="true" />
              Termin anfragen
            </Link>
            <p className="text-lg text-muted-foreground">
              <Link href="/kontakt?anliegen=Rückrufwunsch" className={linkClass}>
                Rückruf wünschen
              </Link>
              {' · '}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                WhatsApp
              </a>
            </p>
          </div>

          <dl className="mt-14 grid gap-8 border-t border-foreground/15 pt-8 text-lg leading-relaxed sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-foreground">Adresse</dt>
              <dd className="mt-1 text-muted-foreground">
                {company.name}
                <br />
                {company.street}
                <br />
                {company.city}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Öffnungszeiten</dt>
              <dd className="mt-1 text-muted-foreground">
                <ul>
                  {openingHours.map((entry) => (
                    <li key={entry.day}>
                      {entry.day}: {entry.time}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>

        <figure className="lg:pt-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md">
            <Image
              src="/images/real/empfang-telefon.webp"
              alt="Mitarbeiterin von Westphal Hörgeräte am Empfang im Telefongespräch mit einem Kunden"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-4 font-serif text-2xl italic text-foreground">
            „Hören verbindet.“
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
