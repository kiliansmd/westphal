import type { Metadata } from 'next'
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
        <section className="border-b border-border bg-background">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-end lg:gap-20 lg:py-20">
            <div>
              <h1 className="max-w-3xl text-balance break-words hyphens-auto sm:hyphens-manual font-serif text-[2.3rem] font-medium leading-[1.08] text-foreground sm:text-5xl lg:text-[3.3rem]">
                Kontakt &amp; Termin anfragen
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Am schnellsten geht es telefonisch. Sie können sich aber auch
                zurückrufen lassen oder uns das Formular ausfüllen.
              </p>
            </div>
            <div>
              <p className="text-base text-muted-foreground">Direkt anrufen</p>
              <a
                href={company.phoneHref}
                className="mt-1 block w-fit whitespace-nowrap font-serif text-[1.9rem] text-foreground decoration-brand decoration-2 underline-offset-8 hover:underline sm:text-5xl"
              >
                {company.phone}
              </a>
              <p className="mt-5 text-lg text-muted-foreground">
                Lieber später?{' '}
                <a href="#anfrage" className="link-accent">
                  Rückruf wünschen
                </a>{' '}
                – wir melden uns zu Ihrer Wunschzeit.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_360px] lg:gap-20">
            <div id="anfrage" className="scroll-mt-28">
              <h2 className="font-serif text-3xl font-medium text-foreground sm:text-[2.6rem]">
                Schreiben Sie uns
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Ein paar Angaben genügen – wir melden uns persönlich bei Ihnen.
              </p>
              <div className="mt-8">
                <ContactForm defaultReason={defaultReason} />
              </div>
            </div>

            <aside>
              <dl className="space-y-10 text-lg leading-relaxed">
                <div className="border-t-2 border-foreground pt-6">
                  <dt className="font-serif text-2xl font-medium text-foreground">
                    {company.name}
                  </dt>
                  <dd className="mt-3 text-muted-foreground">
                    {company.street}
                    <br />
                    {company.city}
                  </dd>
                  <dd className="mt-4">
                    <a href={company.phoneHref} className="link-accent">
                      {company.phone}
                    </a>
                  </dd>
                  <dd className="mt-2">
                    <a href={company.emailHref} className="link-accent break-all">
                      {company.email}
                    </a>
                  </dd>
                </div>
                <div className="border-t-2 border-foreground pt-6">
                  <dt className="font-serif text-2xl font-medium text-foreground">
                    Öffnungszeiten
                  </dt>
                  <dd className="mt-3">
                    <ul className="text-muted-foreground">
                      {openingHours.map((entry) => (
                        <li key={entry.day} className="flex justify-between gap-4 py-0.5">
                          <span className="text-foreground">{entry.day}</span>
                          <span>{entry.time}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
              <p className="mt-10 font-serif text-2xl italic text-foreground">
                „Hören verbindet.“
              </p>
            </aside>
          </div>

          <div className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
            <h2 className="font-serif text-3xl font-medium text-foreground">
              So finden Sie uns
            </h2>
            <p className="mt-3 mb-8 text-lg text-muted-foreground">
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
