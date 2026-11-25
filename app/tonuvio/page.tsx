import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, CalendarCheck, Check } from 'lucide-react'
import { PageShell } from '@/components/page/page-shell'
import { FAQAccordion } from '@/components/page/faq-accordion'
import { CTASection } from '@/components/page/cta-section'
import { RelatedLinks } from '@/components/page/related-links'
import { PhoneShot } from '@/components/tonuvio/phone-shot'
import { TonuvioWalkthrough } from '@/components/modules/tonuvio-walkthrough'
import { BreadcrumbJsonLd, FaqJsonLd } from '@/components/seo/json-ld'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  company,
  tonuvioAccessPoints,
  tonuvioContactHref,
  tonuvioDomains,
  tonuvioFacts,
  tonuvioFaqs,
  tonuvioPersonalPoints,
  tonuvioProgressPoints,
  tonuvioRelated,
  tonuvioSituations,
  tonuvioSteps,
  tonuvioTrustPoints,
} from '@/lib/site-data'

export const metadata: Metadata = {
  alternates: { canonical: '/tonuvio' },
  title: 'Hörtraining-App tonuvio: Gespräche wieder sicherer verstehen',
  description:
    'tonuvio ist das persönliche Hörtraining von Westphal Hörgeräte: kurze Übungen mit Alltagssätzen, abgestimmt auf Ihr Hörsystem und Ihre Ziele. Eingerichtet und begleitet in Bonn-Beuel.',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Westphal Hörgeräte',
    title: 'tonuvio: die Hörtraining-App von Westphal Hörgeräte',
    description:
      'Wenige Minuten am Tag für mehr Sicherheit im Gespräch. Persönlich eingerichtet im Fachgeschäft in Bonn-Beuel.',
  },
}

const h2 =
  'text-balance break-words hyphens-auto sm:hyphens-manual font-serif text-3xl font-medium leading-[1.12] text-foreground sm:text-[2.6rem]'
const lead = 'mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl'

function AppJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'tonuvio Hörtraining',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web (Smartphone, Tablet, Computer)',
    inLanguage: 'de',
    description:
      'Persönliches, adaptives Hörtraining mit kurzen Übungen aus dem Alltag in vier Trainingsbereichen.',
    url: `${company.url}/tonuvio`,
    provider: { '@type': 'Organization', name: company.name, url: company.url },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default function TonuvioPage() {
  return (
    <PageShell>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Hörtraining', path: '/hoertraining-bonn' },
          { name: 'Hörtraining-App tonuvio', path: '/tonuvio' },
        ]}
      />
      <FaqJsonLd items={tonuvioFaqs} />
      <AppJsonLd />

      {/* 1 · Hero: Versprechen, Aufwand, ein klarer nächster Schritt */}
      <section className="overflow-hidden border-b border-border bg-background">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:py-20">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <Image
                src="/images/tonuvio/app-icon.svg"
                alt=""
                width={48}
                height={48}
                className="size-12 rounded-[11px]"
              />
              <p className="text-base font-medium text-muted-foreground">
                Neu · Die Hörtraining-App von Westphal
              </p>
            </div>
            <h1 className="mt-6 max-w-2xl text-balance font-serif text-[2.3rem] font-medium leading-[1.06] text-foreground sm:text-5xl lg:text-[3.5rem]">
              Gespräche wieder sicherer verstehen.{' '}
              <em className="font-normal">Mit wenigen Minuten am Tag.</em>
            </h1>
            <p className={lead}>
              tonuvio ist Ihr persönliches Hörtraining für den Alltag. Kurze
              Übungen mit echten Alltagssätzen, abgestimmt auf Ihr Hörsystem und
              auf die Situationen, die Ihnen wichtig sind. Eingerichtet und
              begleitet von uns im Fachgeschäft.
            </p>
            <ul className="mt-7 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {tonuvioFacts.map((fact) => (
                <li key={fact} className="flex items-center gap-2 text-base text-foreground">
                  <Check className="size-5 shrink-0 text-brand-deep" aria-hidden="true" />
                  {fact}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <Link
                href={tonuvioContactHref}
                className={cn(buttonVariants({ size: 'lg' }), 'h-auto min-h-13 w-full whitespace-normal py-3 text-center sm:w-auto')}
              >
                <CalendarCheck aria-hidden="true" />
                Zugang im Fachgeschäft anfragen
              </Link>
              <a href="#einblick" className="link-accent inline-flex items-center gap-2 text-lg">
                So sieht eine Übung aus
                <ArrowDown className="size-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[440px] lg:mx-0">
            <div className="relative z-10 w-[64%] max-w-[290px]">
              <PhoneShot
                src="/images/tonuvio/uebersicht.webp"
                alt="tonuvio auf dem iPhone: Übersicht mit Begrüßung, empfohlener Tagesübung „Sprache im Geräusch“, Wochenziel und Trainingsbereichen."
                priority
                sizes="(min-width: 1024px) 300px, 62vw"
              />
            </div>
            <div className="absolute right-0 top-[14%] w-[52%] max-w-[236px]">
              <PhoneShot
                src="/images/tonuvio/training-hoeren.webp"
                alt=""
                sizes="(min-width: 1024px) 240px, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2 · Wiedererkennen: das Problem in den Worten der Kundschaft */}
      <section className="border-b border-border bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-20">
            <h2 className={h2}>
              Das Hörgerät sitzt gut. Und trotzdem ist manches Gespräch anstrengend?
            </h2>
            <div className="space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              <p>
                Das ist normal. Nach einer längeren Zeit mit Hörverlust muss das
                Gehirn wieder lernen, Sprache aus vielen neuen Höreindrücken
                herauszufiltern. Das Hörgerät liefert den Klang, das Verstehen
                entsteht im Kopf.
              </p>
              <p className="font-semibold text-foreground">
                Genau dieses Verstehen trainiert tonuvio. Gezielt, in kleinen
                Schritten und mit Situationen aus Ihrem Alltag.
              </p>
            </div>
          </div>
          <ul className="mt-12 grid gap-x-12 sm:grid-cols-3">
            {tonuvioSituations.map((situation) => (
              <li key={situation.title} className="border-t border-foreground/15 py-7">
                <h3 className="font-serif text-2xl font-medium leading-snug text-foreground">
                  {situation.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                  {situation.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 · Einblick: eine Übung Schritt für Schritt */}
      <section
        id="einblick"
        aria-labelledby="einblick-heading"
        className="scroll-mt-24 bg-[#3B5142] py-16 text-white sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-base font-semibold text-brand">Einblick in die App</p>
          <h2
            id="einblick-heading"
            className="mt-3 max-w-3xl text-balance font-serif text-3xl font-medium leading-[1.12] text-white sm:text-[2.6rem]"
          >
            So läuft eine Übung ab
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/85 sm:text-xl">
            Eine Einheit besteht aus bis zu sechs kurzen Aufgaben. Jede folgt
            demselben ruhigen Ablauf. Wählen Sie einen Schritt, um ihn in der App
            zu sehen.
          </p>
          <div className="mt-12">
            <TonuvioWalkthrough />
          </div>
        </div>
      </section>

      {/* 4 · Was trainiert wird */}
      <section className="border-b border-border bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className={h2}>Vier Bereiche, die im Alltag zählen</h2>
          <p className={lead}>
            Jeder Bereich hat acht Stufen. Sie üben dort, wo es für Sie gerade am
            meisten bringt.
          </p>
          <ul className="mt-12 grid gap-x-12 sm:grid-cols-2">
            {tonuvioDomains.map((domain) => (
              <li key={domain.title} className="border-t border-foreground/15 py-7">
                <h3 className="flex items-center gap-3 font-serif text-2xl font-medium leading-snug text-foreground">
                  <span
                    aria-hidden="true"
                    className="size-3.5 shrink-0 rounded-full"
                    style={{ backgroundColor: domain.color }}
                  />
                  {domain.title}
                </h3>
                <p className="mt-3 pl-[1.625rem] text-lg leading-relaxed text-muted-foreground">
                  {domain.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5 · Personalisierung */}
      <section className="border-b border-border bg-secondary py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="mx-auto w-full max-w-[280px] lg:order-1">
            <PhoneShot
              src="/images/tonuvio/ziele.webp"
              alt="tonuvio auf dem iPhone: Auswahl der Alltagssituationen, zum Beispiel Restaurant und Familie, Gespräch im Geräusch, Gruppe und Fernsehen."
            />
          </div>
          <div className="lg:order-2">
            <h2 className={h2}>Ein Training, das zu Ihrem Leben passt</h2>
            <p className={lead}>
              tonuvio fängt nicht bei Null an, sondern bei Ihnen. Bei den
              Situationen, in denen Sie besser verstehen möchten.
            </p>
            <ol className="mt-10 grid gap-x-10 sm:grid-cols-3 lg:grid-cols-1">
              {tonuvioPersonalPoints.map((point, index) => (
                <li
                  key={point.title}
                  className="border-t-2 border-foreground pt-5 pb-6 lg:grid lg:grid-cols-[2.5rem_1fr] lg:gap-x-4"
                >
                  <span className="font-serif text-3xl leading-none text-brand-deep" aria-hidden="true">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="mt-1 font-serif text-xl font-medium leading-snug text-foreground sm:text-2xl lg:mt-0">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                      {point.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 6 · Fortschritt */}
      <section className="border-b border-border bg-background py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <h2 className={h2}>Fortschritt, den Sie sehen können</h2>
            <p className={lead}>
              Kleine Erfolge sind der beste Grund, dranzubleiben. tonuvio zeigt
              Ihnen ehrlich, wo Sie stehen, ohne Sie unter Druck zu setzen.
            </p>
            <ul className="mt-8 space-y-4">
              {tonuvioProgressPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-lg leading-relaxed text-foreground">
                  <Check className="mt-1 size-5 shrink-0 text-brand-deep" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto w-full max-w-[280px]">
            <PhoneShot
              src="/images/tonuvio/fortschritt.webp"
              alt="tonuvio auf dem iPhone: Fortschritt mit Anzahl der Einheiten, Trainingsminuten, aktiven Tagen, Trefferquote und den Stufen der vier Bereiche."
            />
          </div>
        </div>
      </section>

      {/* 7 · Barrierearm */}
      <section className="border-b border-border bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-20">
            <h2 className={h2}>Gemacht für gutes Lesen und entspanntes Hören</h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              tonuvio ist für Menschen gebaut, die nicht jeden Tag mit Apps
              arbeiten. Alles ist groß, klar beschriftet und in Ruhe bedienbar.
            </p>
          </div>
          <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
            <ul className="grid gap-x-12 sm:grid-cols-2">
              {tonuvioAccessPoints.map((point) => (
                <li key={point.title} className="border-t border-foreground/15 py-7">
                  <h3 className="font-serif text-2xl font-medium leading-snug text-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                    {point.text}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mx-auto flex w-full max-w-[520px] justify-center gap-4 lg:w-[460px]">
              <div className="w-1/2">
                <PhoneShot
                  src="/images/tonuvio/einstellungen.webp"
                  alt="tonuvio auf dem iPhone: Einstellungen mit drei Textgrößen, Kontrastmodus und Lesebeispiel."
                  sizes="(min-width: 1024px) 220px, 45vw"
                />
              </div>
              <div className="mt-12 w-1/2">
                <PhoneShot
                  src="/images/tonuvio/toneinrichtung.webp"
                  alt="tonuvio auf dem iPhone: Toneinrichtung mit Auswahl zwischen Lautsprecher, Kopfhörer und direkter Übertragung ins Hörsystem."
                  sizes="(min-width: 1024px) 220px, 45vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 · Der Weg zu tonuvio: persönliche Begleitung als Unterschied */}
      <section className="border-b border-border bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className={h2}>Nicht allein mit einer App: so begleiten wir Sie</h2>
          <p className={lead}>
            Hörtraining wirkt am besten, wenn Hörsysteme und Übungen
            zusammenpassen. Deshalb gibt es tonuvio bei uns nur mit persönlicher
            Einrichtung.
          </p>
          <ol className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {tonuvioSteps.map((step, index) => (
              <li key={step.title} className="flex flex-col border-t-2 border-foreground pt-6 pb-8">
                <span className="font-serif text-3xl text-brand-deep" aria-hidden="true">
                  {index + 1}
                </span>
                <h3 className="font-serif text-2xl font-medium leading-snug text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <Link
              href={tonuvioContactHref}
              className={cn(buttonVariants({ size: 'lg' }), 'h-auto min-h-13 w-full whitespace-normal py-3 text-center sm:w-auto')}
            >
              <CalendarCheck aria-hidden="true" />
              Beratungstermin vereinbaren
            </Link>
            <a href={company.phoneHref} className="link-accent text-lg">
              Lieber anrufen: {company.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 9 · Vertrauen: ehrliche Grenzen und Datenschutz */}
      <section className="border-b border-border bg-sand py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className={h2}>Ehrlich, sicher und persönlich</h2>
          <ul className="mt-10 grid gap-x-12 sm:grid-cols-3">
            {tonuvioTrustPoints.map((point) => (
              <li key={point.title} className="border-t border-foreground/15 py-7">
                <h3 className="font-serif text-2xl font-medium leading-snug text-foreground">
                  {point.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                  {point.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQAccordion items={tonuvioFaqs} heading="Fragen zu tonuvio" />

      <CTASection
        heading="Möchten Sie mit tonuvio starten?"
        text="Vereinbaren Sie einen Termin. Wir prüfen gemeinsam, ob Hörtraining für Sie sinnvoll ist, und richten tonuvio passend zu Ihren Hörsystemen ein."
        primaryLabel="Zugang anfragen"
        primaryHref={tonuvioContactHref}
      />

      <RelatedLinks links={tonuvioRelated} />
    </PageShell>
  )
}
