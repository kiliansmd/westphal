import Link from 'next/link'
import Image from 'next/image'
import {
  Star,
  CalendarCheck,
  PhoneCall,
  BadgeCheck,
  Clock,
  MapPin,
  Ear,
} from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { company } from '@/lib/site-data'

const trustItems = [
  { icon: MapPin, label: 'Seit 2012 in Bonn-Beuel' },
  { icon: BadgeCheck, label: 'Herstellerunabhängig' },
  { icon: Clock, label: '30 Tage Ausprobe' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/50">
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[1.02fr_1fr] lg:gap-16 lg:py-24">
        {/* Copy */}
        <div className="flex flex-col justify-center">
          <p className="inline-flex w-fit items-center gap-2.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground shadow-sm">
            <span
              className="flex size-5 items-center justify-center rounded-full bg-brand/15"
              aria-hidden="true"
            >
              <Ear className="size-3.5 text-brand-deep" />
            </span>
            Hörakustik-Meisterbetrieb in Bonn-Beuel
          </p>

          <h1 className="mt-6 text-balance font-serif text-[2rem] font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl sm:leading-[1.08] lg:text-[3.4rem] lg:leading-[1.06]">
            Wieder klar hören –{' '}
            <span className="text-brand-deep">
              persönlich und ohne Verkaufsdruck
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Wir nehmen uns Zeit, erklären verständlich und passen Hörsysteme so
            an, dass sie zu Ihrem Alltag passen.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/kontakt"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'w-full bg-brand text-brand-foreground hover:bg-brand-strong sm:w-auto',
              )}
            >
              <CalendarCheck aria-hidden="true" />
              Termin anfragen
            </Link>
            <Link
              href="/kontakt?anliegen=Rückrufwunsch"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'w-full border-border bg-card text-foreground hover:bg-accent sm:w-auto',
              )}
            >
              <PhoneCall aria-hidden="true" />
              Rückruf wünschen
            </Link>
          </div>

          <p className="mt-3.5 text-sm text-muted-foreground">
            Auch kurzfristige Termine möglich – rufen Sie uns gern an.
          </p>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6">
            {trustItems.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <Icon
                  className="size-4 shrink-0 text-brand-deep"
                  aria-hidden="true"
                />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="relative">
          {/* Soft brand-tinted depth panel behind the photo for a calm,
              premium sense of depth (single hue, subtle). */}
          <div
            className="absolute -right-5 -top-5 bottom-8 left-6 -z-10 hidden rounded-[2.75rem] bg-brand/10 lg:block"
            aria-hidden="true"
          />

          <div className="relative overflow-hidden rounded-[1.75rem] border border-border shadow-2xl">
            <Image
              src="/images/real/inhaber-beratung-hero.png"
              alt="Das Team von Westphal Hörgeräte berät eine lachende Kundin, die ein modernes Hörgerät in der Hand hält, im Fachgeschäft in Bonn-Beuel"
              width={1512}
              height={1000}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
            {/* Very gentle bottom scrim so the floating card separates cleanly
                from the photo without darkening the friendly image. */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/15 to-transparent"
              aria-hidden="true"
            />
          </div>

          {/* Floating rating card */}
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-xl sm:left-6">
            <div
              className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand/15"
              aria-hidden="true"
            >
              <Star className="size-6 fill-brand text-brand" />
            </div>
            <div className="leading-tight">
              <p className="flex items-center gap-1 font-serif text-lg font-semibold text-card-foreground">
                {company.rating}
                <span className="text-brand" aria-hidden="true">
                  ★★★★★
                </span>
              </p>
              <p className="text-sm text-muted-foreground">Google-Bewertungen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
