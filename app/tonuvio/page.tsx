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
import { CountUp, LevelMeter, Parallax, Reveal } from '@/components/tonuvio/motion'
import { SoundRings } from '@/components/tonuvio/sound-rings'
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
  tonuvioPurpose,
  tonuvioProgressPoints,
  tonuvioRelated,
  tonuvioSituations,
  tonuvioSteps,
  tonuvioTrustPoints,
} from '@/lib/site-data'

export const metadata: Metadata = {
  alternates: { canonical: '/tonuvio' },
  title: 'tonuvio: Übungs-App für Sprachverstehen im Alltag',
  description:
    'tonuvio ist die Übungs-App von Westphal Hörgeräte: kurze Einheiten mit Alltagssätzen, um Gespräche im Restaurant, am Telefon oder in der Familie sicherer zu verstehen. Persönlich eingerichtet in Bonn-Beuel.',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Westphal Hörgeräte',
    title: 'tonuvio: die Übungs-App für Sprachverstehen von Westphal Hörgeräte',
    description:
      'Gespräche im Alltag sicherer verstehen, mit wenigen Minuten Übung am Tag. Persönlich eingerichtet im Fachgeschäft in Bonn-Beuel.',
  },
}

const h2 =
  'text-balance break-words hyphens-auto sm:hyphens-manual font-serif text-3xl font-medium leading-[1.12] text-foreground sm:text-[2.6rem]'
const lead = 'mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl'

function AppJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'tonuvio',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web (Smartphone, Tablet, Computer)',
    inLanguage: 'de',
    description: tonuvioPurpose,
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
          { name: 'Übungs-App tonuvio', path: '/tonuvio' },
        ]}
      />
      <FaqJsonLd items={tonuvioFaqs} />
      <AppJsonLd />

      {/* 1 · Hero: Versprechen, Aufwand, ein klarer nächster Schritt */}
      <section className="overflow-hidden border-b border-border bg-background">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-12 sm:px-6 lg:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:py-20">
          <div className="min-w-0">
            <div className="tv-rise flex items-center gap-3">
              <Image
                src="/images/tonuvio/app-icon.svg"
                alt=""
                width={48}
                height={48}
                className="size-12 rounded-[11px]"
              />
              <p className="flex items-center gap-2 text-base font-medium text-muted-foreground">
                <span aria-hidden="true" className="tv-dot size-2.5 rounded-full bg-brand" />
                Neu · Die Übungs-App von Westphal
              </p>
            </div>
            <h1 style={{ ['--d' as string]: '80ms' }} className="tv-rise mt-6 max-w-2xl text-balance font-serif text-[2.3rem] font-medium leading-[1.06] text-foreground sm:text-5xl lg:text-[3.5rem]">
              Gespräche im Alltag sicherer verstehen.{' '}
              <em className="font-normal">Mit wenigen Minuten Übung am Tag.</em>
            </h1>
            <p className={cn(lead, 'tv-rise')} style={{ ['--d' as string]: '180ms' }}>
              tonuvio ist ein Training für das Verstehen von Sprache im Alltag.
              Kurze Übungen mit echten Alltagssätzen, ausgerichtet auf die
              Situationen, die Ihnen wichtig sind: Restaurant, Telefon, Familie.
              Eingerichtet von uns im Fachgeschäft.
            </p>
            <ul className="tv-rise mt-7 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6" style={{ ['--d' as string]: '260ms' }}>
              {tonuvioFacts.map((fact) => (
                <li key={fact} className="flex items-center gap-2 text-base text-foreground">
                  <Check className="size-5 shrink-0 text-brand-deep" aria-hidden="true" />
                  {fact}
                </li>
              ))}
            </ul>
            <div className="tv-rise mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8" style={{ ['--d' as string]: '340ms' }}>
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
            <SoundRings className="left-[-6%] top-[8%] w-[76%] aspect-square" />
            <div className="tv-phone-in relative z-10 w-[64%] max-w-[290px]" style={{ ['--d' as string]: '150ms' }}>
              <div className="tv-float">
                <PhoneShot
                  src="/images/tonuvio/uebersicht.webp"
                  alt="tonuvio auf dem iPhone: Übersicht mit Begrüßung, empfohlener Tagesübung „Sprache im Geräusch“, Wochenziel und Übungsbereichen."
                  priority
                  sizes="(min-width: 1024px) 300px, 62vw"
                />
              </div>
            </div>
            <div className="tv-phone-in absolute right-0 top-[14%] w-[52%] max-w-[236px]" style={{ ['--d' as string]: '380ms' }}>
              <Parallax speed={0.08}>
                <div className="tv-float" style={{ ['--d' as string]: '-3500ms' }}>
                  <PhoneShot
                    src="/images/tonuvio/training-hoeren.webp"
                    alt=""
                    sizes="(min-width: 1024px) 240px, 50vw"
                  />
                </div>
              </Parallax>
            </div>
          </div>
        </div>
      </section>

      {/* Kennzahlen aus dem echten Funktionsumfang */}
      <section aria-label="tonuvio in Zahlen" className="border-b border-border bg-background">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-10 sm:px-6 lg:px-8 lg:grid-cols-4">
          {[
            { value: 4, label: 'Übungsbereiche aus dem Alltag' },
            { value: 8, label: 'Schwierigkeitsstufen je Bereich' },
            { value: 10, prefix: '6 bis ', label: 'Minuten pro Einheit' },
            { value: 3, label: 'Schriftgrößen und ein Kontrastmodus' },
          ].map((stat, index) => (
            <Reveal key={stat.label} delay={index * 90} className="flex flex-col-reverse gap-1">
              <dt className="text-base leading-snug text-muted-foreground">{stat.label}</dt>
              <dd className="font-serif text-4xl font-medium text-foreground sm:text-5xl">
                {stat.prefix}
                <CountUp value={stat.value} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* 2 · Wiedererkennen: das Problem in den Worten der Kundschaft */}
      <section className="border-b border-border bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-20">
            <h2 className={h2}>
              Zuhören verlangt viel. Vor allem, wenn um Sie herum viel los ist.
            </h2>
            <div className="space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              <p>
                Mehrere Menschen reden gleichzeitig, am Telefon fehlt das Gesicht,
                in der Gruppe wechseln die Sprecher schnell. Das kennen viele.
                Wie bei einer Fremdsprache lässt sich gezieltes Zuhören üben:
                worauf achte ich, wie bleibe ich bei einer Stimme, wie behalte
                ich Details?
              </p>
              <p className="font-semibold text-foreground">
                Genau das übt tonuvio. In kleinen Schritten und mit Situationen
                aus Ihrem Alltag.
              </p>
            </div>
          </div>
          <ul className="mt-12 grid gap-x-12 sm:grid-cols-3">
            {tonuvioSituations.map((situation, index) => (
              <Reveal as="li" delay={index * 110} key={situation.title} className="border-t border-foreground/15 py-7">
                <h3 className="font-serif text-2xl font-medium leading-snug text-foreground">
                  {situation.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                  {situation.text}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 · Einblick: eine Übung Schritt für Schritt */}
      <section
        id="einblick"
        aria-labelledby="einblick-heading"
        className="scroll-mt-24 overflow-hidden bg-[#3B5142] py-16 text-white sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-base font-semibold text-brand-soft">Einblick in die App</p>
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className={h2}>Vier Übungsbereiche, die im Alltag zählen</h2>
          <p className={lead}>
            Jeder Bereich hat acht Schwierigkeitsstufen. Sie üben dort, wo es zu
            Ihren Situationen passt.
          </p>
          <ul className="mt-12 grid gap-x-12 sm:grid-cols-2">
            {tonuvioDomains.map((domain, index) => (
              <Reveal
                as="li"
                delay={(index % 2) * 110}
                key={domain.title}
                className="flex flex-col gap-4 border-t border-foreground/15 py-7 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
              >
                <div>
                  <h3 className="font-serif text-2xl font-medium leading-snug text-foreground">
                    {domain.title}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                    {domain.text}
                  </p>
                </div>
                <LevelMeter color={domain.color} delay={200 + (index % 2) * 110} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 5 · Personalisierung */}
      <section className="border-b border-border bg-secondary py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Parallax speed={0.05} className="mx-auto w-full max-w-[280px] lg:order-1">
            <PhoneShot
              src="/images/tonuvio/ziele.webp"
              alt="tonuvio auf dem iPhone: Auswahl der Alltagssituationen, zum Beispiel Restaurant und Familie, Gespräch im Geräusch, Gruppe und Fernsehen."
            />
          </Parallax>
          <div className="lg:order-2">
            <h2 className={h2}>Ein Training, das zu Ihrem Leben passt</h2>
            <p className={lead}>
              tonuvio fängt bei Ihnen an: bei den Situationen, in denen Sie
              Gespräche sicherer verfolgen möchten.
            </p>
            <ol className="mt-10 grid gap-x-10 sm:grid-cols-3 lg:grid-cols-1">
              {tonuvioPersonalPoints.map((point, index) => (
                <Reveal
                  as="li"
                  delay={index * 120}
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
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 6 · Fortschritt */}
      <section className="border-b border-border bg-background py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <h2 className={h2}>Ihr Übungsstand auf einen Blick</h2>
            <p className={lead}>
              Kleine Erfolge machen Lust aufs Weiterüben. tonuvio zeigt Ihnen, wie
              regelmäßig Sie üben und wie anspruchsvoll Ihre Übungen gerade sind,
              ohne Sie unter Druck zu setzen.
            </p>
            <ul className="mt-8 space-y-4">
              {tonuvioProgressPoints.map((point, index) => (
                <Reveal
                  as="li"
                  delay={index * 90}
                  key={point}
                  className="flex items-start gap-3 text-lg leading-relaxed text-foreground"
                >
                  <Check className="mt-1 size-5 shrink-0 text-brand-deep" aria-hidden="true" />
                  {point}
                </Reveal>
              ))}
            </ul>
          </div>
          <Parallax speed={0.05} className="mx-auto w-full max-w-[280px]">
            <PhoneShot
              src="/images/tonuvio/fortschritt.webp"
              alt="tonuvio auf dem iPhone: Übungsstand mit Anzahl der Einheiten, Übungsminuten, aktiven Tagen, gelösten Aufgaben und den Schwierigkeitsstufen der vier Bereiche."
            />
          </Parallax>
        </div>
      </section>

      {/* 7 · Barrierearm */}
      <section className="border-b border-border bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-20">
            <h2 className={h2}>Gemacht für gutes Lesen und entspanntes Üben</h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              tonuvio ist für Menschen gebaut, die nicht jeden Tag mit Apps
              arbeiten. Alles ist groß, klar beschriftet und in Ruhe bedienbar.
            </p>
          </div>
          <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
            <ul className="grid gap-x-12 sm:grid-cols-2">
              {tonuvioAccessPoints.map((point, index) => (
                <Reveal as="li" delay={(index % 2) * 110} key={point.title} className="border-t border-foreground/15 py-7">
                  <h3 className="font-serif text-2xl font-medium leading-snug text-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                    {point.text}
                  </p>
                </Reveal>
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
              <Parallax speed={0.09} className="mt-12 w-1/2">
                <PhoneShot
                  src="/images/tonuvio/toneinrichtung.webp"
                  alt="tonuvio auf dem iPhone: Toneinrichtung mit Auswahl zwischen Lautsprecher, Kopfhörer und einem per Bluetooth verbundenen Gerät."
                  sizes="(min-width: 1024px) 220px, 45vw"
                />
              </Parallax>
            </div>
          </div>
        </div>
      </section>

      {/* 8 · Der Weg zu tonuvio: persönliche Begleitung als Unterschied */}
      <section className="border-b border-border bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className={h2}>Nicht allein mit einer App: so unterstützen wir Sie</h2>
          <p className={lead}>
            Neue Technik ist leichter, wenn jemand sie einmal mit Ihnen gemeinsam
            einrichtet. Deshalb gibt es tonuvio bei uns mit persönlicher
            Einrichtung im Fachgeschäft.
          </p>
          <ol className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {tonuvioSteps.map((step, index) => (
              <Reveal
                as="li"
                delay={index * 120}
                key={step.title}
                className="flex flex-col border-t-2 border-foreground pt-6 pb-8"
              >
                <span className="font-serif text-3xl text-brand-deep" aria-hidden="true">
                  {index + 1}
                </span>
                <h3 className="font-serif text-2xl font-medium leading-snug text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </Reveal>
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className={h2}>Klar eingeordnet, sicher und persönlich</h2>
          <ul className="mt-10 grid gap-x-12 sm:grid-cols-3">
            {tonuvioTrustPoints.map((point, index) => (
              <Reveal as="li" delay={index * 110} key={point.title} className="border-t border-foreground/15 py-7">
                <h3 className="font-serif text-2xl font-medium leading-snug text-foreground">
                  {point.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                  {point.text}
                </p>
              </Reveal>
            ))}
          </ul>
          <p
            id="einordnung"
            className="mt-6 max-w-4xl border-t border-foreground/15 pt-6 text-base leading-relaxed text-muted-foreground"
          >
            <strong className="font-semibold text-foreground">Einordnung:</strong>{' '}
            {tonuvioPurpose}
          </p>
        </div>
      </section>

      <FAQAccordion items={tonuvioFaqs} heading="Fragen zu tonuvio" />

      <CTASection
        heading="Möchten Sie mit tonuvio starten?"
        text="Vereinbaren Sie einen Termin. Wir zeigen Ihnen tonuvio in Ruhe und richten Ihren Zugang gemeinsam mit Ihnen ein."
        primaryLabel="Zugang anfragen"
        primaryHref={tonuvioContactHref}
      />

      <RelatedLinks links={tonuvioRelated} />
    </PageShell>
  )
}
