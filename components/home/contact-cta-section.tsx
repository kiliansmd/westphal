import Link from 'next/link'
import Image from 'next/image'
import { PhoneCall, CalendarCheck, MapPin, Clock } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { company, openingHours } from '@/lib/site-data'

export function ContactCtaSection() {
  return (
    <section id="kontakt" className="scroll-mt-28 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          {/* Decorative consultation photo */}
          <div className="relative aspect-[16/7] w-full">
            <Image
              src="/images/real/empfang-telefon.png"
              alt="Freundliche Mitarbeiterin von Westphal Hörgeräte am Empfang im Telefongespräch mit einem Kunden"
              fill
              sizes="(min-width: 896px) 896px, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-card/70 via-card/10 to-transparent"
              aria-hidden="true"
            />
          </div>

          <div className="p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Möchten Sie Ihr Hören in Ruhe prüfen lassen?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-xl leading-relaxed text-muted-foreground">
              Vereinbaren Sie einen Termin oder wünschen Sie einen Rückruf. Wir
              melden uns persönlich bei Ihnen.
            </p>
          </div>

          {/* Two clear primary actions */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/kontakt"
              className={cn(buttonVariants({ size: 'lg' }), 'w-full sm:w-auto')}
            >
              <CalendarCheck aria-hidden="true" />
              Termin anfragen
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

          {/* Motto / slogan */}
          <figure className="mx-auto mt-10 max-w-2xl border-t border-border pt-8 text-center">
            <blockquote className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Getreu unserem Motto{' '}
              <span className="font-serif text-xl font-semibold italic text-primary">
                „Hören verbindet“
              </span>{' '}
              haben wir immer ein offenes Ohr für Sie.
            </blockquote>
          </figure>

          {/* Address + opening hours, large and clear */}
          <div className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-2">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                <MapPin className="size-6" aria-hidden="true" />
              </span>
              <div className="text-lg leading-relaxed">
                <p className="font-semibold text-foreground">So finden Sie uns</p>
                <p className="text-muted-foreground">
                  {company.street}
                  <br />
                  {company.city}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                <Clock className="size-6" aria-hidden="true" />
              </span>
              <div className="text-lg leading-relaxed">
                <p className="font-semibold text-foreground">Öffnungszeiten</p>
                <ul className="text-muted-foreground">
                  {openingHours.map((entry) => (
                    <li key={entry.day}>
                      {entry.day}: {entry.time}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
