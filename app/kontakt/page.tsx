import type { Metadata } from 'next'
import { MapPin, Phone, PhoneCall, Mail, Clock, Star } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileContactBar } from '@/components/mobile-contact-bar'
import { ContactForm } from '@/components/contact-form'
import { MapConsent } from '@/components/consent-embed'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { company, contactReasons, openingHours } from '@/lib/site-data'

export const metadata: Metadata = {
  alternates: { canonical: '/kontakt' },
  title: 'Kontakt & Termin anfragen',
  description:
    'Kontaktieren Sie Westphal Hörgeräte in Bonn-Beuel für Hörtest, Beratung, Preise, Tinnitus, Gehörschutz oder Service. Telefon, E-Mail und Kontaktformular.',
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ anliegen?: string }>
}) {
  const { anliegen } = await searchParams
  // Only accept a value that is actually part of our dropdown.
  const defaultReason =
    anliegen && (contactReasons as readonly string[]).includes(anliegen)
      ? anliegen
      : ''

  return (
    <div className="flex min-h-dvh flex-col">
      <BreadcrumbJsonLd
        items={[
          { name: 'Startseite', path: '/' },
          { name: 'Kontakt', path: '/kontakt' },
        ]}
      />
      <SiteHeader />
      <main id="main-content" className="flex-1 pb-20 xl:pb-0">
        <section className="border-b border-border bg-secondary">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Kontakt
            </p>
            <h1 className="mt-2 max-w-3xl text-balance font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
              Kontakt & Termin anfragen
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Am schnellsten geht es telefonisch. Sie können sich aber auch
              zurückrufen lassen oder uns das Formular ausfüllen.
            </p>
            <p className="mt-6 max-w-2xl border-l-4 border-primary pl-4 text-pretty text-lg leading-relaxed text-foreground">
              Getreu unserem Motto{' '}
              <span className="font-serif font-semibold italic text-primary">
                „Hören verbindet“
              </span>{' '}
              haben wir immer ein offenes Ohr für Sie.
            </p>

            {/* Two clear options up top */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href={company.phoneHref}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/50"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Phone className="size-6" aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="text-base font-semibold text-card-foreground">
                    Direkt anrufen
                  </span>
                  <span className="text-lg font-bold text-primary">
                    {company.phone}
                  </span>
                </span>
              </a>
              <a
                href="#anfrage"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/50"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                  <PhoneCall className="size-6" aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="text-base font-semibold text-card-foreground">
                    Rückruf wünschen
                  </span>
                  <span className="text-muted-foreground">
                    Wir melden uns zu Ihrer Wunschzeit.
                  </span>
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className="bg-background py-14 sm:py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_400px]">
            <div id="anfrage" className="scroll-mt-24">
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Schreiben Sie uns
              </h2>
              <p className="mt-1 text-muted-foreground">
                Ein paar Angaben genügen – wir melden uns persönlich bei Ihnen.
              </p>
              <div className="mt-6">
                <ContactForm defaultReason={defaultReason} />
              </div>
            </div>

            <aside className="flex flex-col gap-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="font-serif text-xl font-semibold text-card-foreground">
                  {company.name}
                </h2>
                <ul className="mt-4 space-y-4 text-base text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      {company.street}
                      <br />
                      {company.city}
                    </span>
                  </li>
                  <li>
                    <a
                      href={company.phoneHref}
                      className="flex items-center gap-3 hover:text-foreground"
                    >
                      <Phone className="size-5 shrink-0 text-primary" aria-hidden="true" />
                      {company.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={company.emailHref}
                      className="flex items-center gap-3 break-all hover:text-foreground"
                    >
                      <Mail className="size-5 shrink-0 text-primary" aria-hidden="true" />
                      {company.email}
                    </a>
                  </li>
                </ul>
                <div className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-sm font-semibold text-foreground">
                  <Star className="size-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  {company.rating} ★ Google-Bewertung · {company.claim}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="flex items-center gap-2 font-serif text-xl font-semibold text-card-foreground">
                  <Clock className="size-5 text-primary" aria-hidden="true" />
                  Öffnungszeiten
                </h2>
                <ul className="mt-4 space-y-2 text-base text-muted-foreground">
                  {openingHours.map((entry) => (
                    <li
                      key={entry.day}
                      className="flex items-center justify-between gap-4 border-b border-border/60 pb-2 last:border-0 last:pb-0"
                    >
                      <span className="text-foreground">{entry.day}</span>
                      <span>{entry.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <div className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              So finden Sie uns
            </h2>
            <p className="mt-1 mb-6 text-muted-foreground">
              Mitten in Bonn-Beuel, gut erreichbar mit Bus, Bahn und Auto.
            </p>
            <MapConsent />
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileContactBar />
    </div>
  )
}
