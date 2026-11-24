import type { Metadata } from 'next'
import {
  Activity,
  Ear,
  ShieldCheck,
  Sparkles,
  Users,
  Check,
  Info,
  Coffee,
  LifeBuoy,
} from 'lucide-react'
import { PageShell } from '@/components/page/page-shell'
import { PageHero } from '@/components/page/page-hero'
import { SEOContentBlock } from '@/components/page/seo-content-block'
import { FeatureList } from '@/components/page/feature-list'
import { FAQAccordion } from '@/components/page/faq-accordion'
import { CTASection } from '@/components/page/cta-section'
import { TrustBar } from '@/components/page/trust-bar'
import { RelatedLinks } from '@/components/page/related-links'
import { FaqJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  alternates: { canonical: '/preise-krankenkasse' },
  title: 'Hörgeräte-Bezuschussung & Preise in Bonn-Beuel | Krankenkasse',
  description:
    'Hörgeräte-Bezuschussung transparent erklärt: Kostenübernahme bei gesetzlichen und privaten Krankenkassen, Zuschuss bei Verlust, Festbeträge und Preise bei Westphal Hörgeräte in Bonn-Beuel.',
}

const costFactors = [
  {
    icon: Activity,
    title: 'Hörverlust',
    text: 'Wie stark Ihr Gehör betroffen ist.',
  },
  {
    icon: Ear,
    title: 'Ein Ohr oder beide',
    text: 'Ein- oder beidseitige Versorgung.',
  },
  {
    icon: ShieldCheck,
    title: 'Versicherung',
    text: 'Gesetzlich oder privat versichert.',
  },
  {
    icon: Sparkles,
    title: 'Gewünschter Komfort',
    text: 'Akku, Bluetooth und Zusatzfunktionen.',
  },
  {
    icon: Users,
    title: 'Alltagssituationen',
    text: 'Beruf, Gruppen, Fernsehen, ruhige Gespräche.',
  },
]

const pkvBenefits = [
  'i. d. R. rund 3.000 € für eine beidseitige Versorgung',
  'Reparaturkosten werden zum Großteil übernommen',
  'kostenloser Service und Wartung der Hörgeräte',
  'kostenlose Leihgeräte bei Reparaturen',
  'Beteiligung an den Kosten bei Verlust',
  'Zuschuss alle 5–6 Jahre, je nach Krankenversicherung',
]

const gkvBenefits = [
  'Reparaturkosten werden zum Teil übernommen',
  'kostenloser Service und Wartung der Hörgeräte',
  'kostenlose Leihgeräte bei Reparaturen',
  'Beteiligung an den Kosten bei Verlust',
  'Zuschuss alle 6–9 Jahre, je nach Krankenkasse',
]

const gkvBreakdown = [
  { label: '2× Hörgerät', amount: '1.360 €' },
  { label: '2× Ohrpassstück', amount: '84 €' },
  { label: '2× Servicepauschale', amount: '284 €' },
]

const serviceIncluded = [
  'Klangwellen-Anpassverfahren für optimale Sprachfokussierung',
  'Tinnitusberatung',
  '30 Tage kostenlose Ausprobe',
  'über 6 Jahre kostenloser Service und Nachsorge',
  'kostenlose Leihgeräte bei Reparatur',
]

const faqs = [
  {
    question: 'Wie oft habe ich Anspruch auf neue Hörgeräte?',
    answer:
      'In der Regel haben Sie alle fünf bis neun Jahre – je nach Krankenkasse – Anspruch auf eine Neuversorgung. Bei Verlust oder medizinischer Notwendigkeit kann dies auch früher erfolgen.',
  },
  {
    question: 'Was passiert, wenn mein Hörgerät kaputt geht?',
    answer:
      'Reparaturen werden je nach Versicherung ganz oder teilweise übernommen. Während der Reparatur erhalten Sie bei uns ein kostenloses Leihgerät, damit Sie nicht ohne Versorgung dastehen.',
  },
  {
    question: 'Welche Rolle spielt der Hörakustiker bei der Kostenübernahme?',
    answer:
      'Wir übernehmen für Sie die Bürokratie: von der Abrechnung mit der Krankenkasse über die Beschaffung passender Geräte bis zur Klärung von Zuschüssen. So können Sie sich auf das Wesentliche konzentrieren – gutes Hören.',
  },
  {
    question: 'Gibt es Hörgeräte ohne Zuzahlung?',
    answer:
      'Ja. Für den gesetzlichen Festbetrag erhalten Sie bei uns bereits ein unauffälliges Basis-Hörsystem zum Nulltarif, zzgl. der gesetzlichen Zuzahlung von 10 € pro Seite.',
  },
  {
    question: 'Was ist bei einer privaten Krankenversicherung mit Kooperationsvertrag?',
    answer:
      'Bietet Ihre private Krankenversicherung einen Kooperationsvertrag mit einem bestimmten Hörakustik-Unternehmen an? Zögern Sie nicht, uns anzusprechen – vergleichen Sie unsere Leistungen und Preise.',
  },
]

const related = [
  {
    label: 'Das passende Hörsystem wählen',
    description: 'Welche Bauform und Technik passt zu Ihnen?',
    href: '/hoergeraete-bonn-beuel',
  },
  {
    label: 'Hörgeräte testen',
    description: '30 Tage kostenlos im Alltag ausprobieren.',
    href: '/hoergeraete-testen',
  },
  {
    label: 'Klangwellen-Anpassverfahren',
    description: 'Warum die Anpassung über den Erfolg entscheidet.',
    href: '/klangwellen-anpassverfahren',
  },
]

export default function PreiseKrankenkassePage() {
  return (
    <PageShell>
      <FaqJsonLd items={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Startseite', path: '/' },
          { name: 'Hörgeräte-Bezuschussung', path: '/preise-krankenkasse' },
        ]}
      />
      <PageHero
        eyebrow="Hörgeräte-Bezuschussung"
        headline="Hörgeräte-Bezuschussung transparent erklärt"
        text="Als langjähriger Hörakustiker in Beuel berate ich Sie transparent: Kostenübernahme, Zuschuss bei Verlust, Anspruch auf neue Hörgeräte und die Abrechnung Ihrer Versorgung."
        trustLine="Faire, nachvollziehbare Preise – ohne Verkaufsdruck."
        image={{
          src: '/images/subpage-preise.png',
          alt: 'Beraterin erklärt einem Kunden bei Westphal Hörgeräte in Bonn-Beuel transparent die Kosten',
        }}
      />

      <TrustBar />

      {/* Wovon hängen die Kosten ab? */}
      <section className="bg-sand py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Grundlagen
          </p>
          <h2 className="mt-2 max-w-2xl text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Wovon hängen die Kosten ab?
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Der Preis ist keine feste Zahl, sondern hängt von einigen
            persönlichen Faktoren ab:
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {costFactors.map((factor) => {
              const Icon = factor.icon
              return (
                <li
                  key={factor.title}
                  className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <span className="mt-4 text-base font-semibold text-card-foreground">
                    {factor.title}
                  </span>
                  <span className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {factor.text}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Krankenkassenzuschuss: PKV & GKV */}
      <section id="krankenkasse" className="scroll-mt-24 bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Kostenübernahme
          </p>
          <h2 className="mt-2 max-w-2xl text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Was Ihre Krankenkasse übernimmt
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Ob privat oder gesetzlich versichert – in Deutschland haben Sie
            Anspruch auf eine gute Versorgung. Hier finden Sie die typischen
            Erfahrungswerte im Überblick.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {/* Private KV */}
            <div className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm">
              <h3 className="font-serif text-xl font-semibold text-card-foreground">
                Private Krankenversicherungen
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Die Kostenübernahme hängt von Ihrem individuellen Vertrag ab.
                Erfahrungswerte für privat Versicherte und Beihilfeberechtigte
                sind in der Regel:
              </p>
              <div className="mt-5">
                <FeatureList items={pkvBenefits} />
              </div>
            </div>

            {/* Gesetzliche KV */}
            <div className="flex flex-col rounded-3xl border-2 border-primary bg-card p-7 shadow-md">
              <h3 className="font-serif text-xl font-semibold text-card-foreground">
                Gesetzliche Krankenkassen
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Die gesetzlichen Kassen übernehmen einen Festbetrag pro Hörgerät.
                Er ist abhängig von Ihrer Krankenkasse und setzt sich im Mittel
                wie folgt zusammen:
              </p>
              <div className="mt-5 rounded-2xl bg-sand p-5">
                <ul className="divide-y divide-border">
                  {gkvBreakdown.map((row) => (
                    <li
                      key={row.label}
                      className="flex items-center justify-between py-2 text-sm"
                    >
                      <span className="text-muted-foreground">{row.label}</span>
                      <span className="font-semibold text-foreground">
                        {row.amount}
                      </span>
                    </li>
                  ))}
                  <li className="flex items-center justify-between pt-3 text-base">
                    <span className="font-semibold text-foreground">Gesamt</span>
                    <span className="font-serif text-lg font-bold text-primary">
                      1.728 €
                    </span>
                  </li>
                </ul>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Für diesen Festbetrag erhalten Sie bei uns bereits ein
                unauffälliges Basis-Hörsystem zum Nulltarif, zzgl. der
                gesetzlichen Zuzahlung von 10 € pro Seite. Außerdem enthalten:
              </p>
              <div className="mt-4">
                <FeatureList items={gkvBenefits} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Westphal Hörgeräte-Service */}
      <section className="bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Immer inklusive
          </p>
          <h2 className="mt-2 max-w-2xl text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Der Westphal Hörgeräte-Service
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Beim Kauf eines Hörgerätes sind folgende Leistungen bei uns
            inklusive:
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceIncluded.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <span className="text-base leading-relaxed text-card-foreground">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-3 rounded-2xl border border-border bg-card p-5 text-muted-foreground shadow-sm">
            <Coffee className="size-6 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-pretty leading-relaxed">
              … und bei einem Cappuccino haben wir immer ein offenes Ohr für Sie.
            </p>
          </div>
        </div>
      </section>

      {/* Verlust eines Hörgerätes */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-start gap-4 rounded-2xl border-l-4 border-primary bg-card p-6 shadow-sm sm:p-8">
            <LifeBuoy className="mt-0.5 size-7 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <h2 className="font-serif text-2xl font-semibold text-card-foreground">
                Verlust eines Hörgerätes
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Ob privat oder gesetzlich versichert: Bei Verlust wird das
                jeweilige Hörgerät wieder bezuschusst. Wir arbeiten
                herstellerunabhängig und beschaffen Ihnen das passende Gerät neu.
                Lassen Sie sich eine Verordnung von Ihrer HNO-Praxis ausstellen –
                die weitere Bürokratie übernehmen wir für Sie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fazit */}
      <SEOContentBlock
        eyebrow="Fazit"
        heading="Gute Versorgung ist möglich – gesetzlich wie privat"
        paragraphs="Die Kostenübernahme für Hörgeräte ist ein komplexes Thema, das viele Fragen aufwirft. Als Ihr Ansprechpartner versichere ich Ihnen: Sowohl als privat als auch als gesetzlich Versicherter haben Sie in Deutschland Anspruch auf eine gute Versorgung. Mit unserer Expertise und dem passenden Hörgerät verbessern Sie Ihre Lebensqualität deutlich und nehmen wieder aktiv am gesellschaftlichen Leben teil."
        muted
      />

      {/* Hinweisbox */}
      <section className="bg-sand py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
              <Info className="size-6" aria-hidden="true" />
            </span>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Die genaue Empfehlung hängt von Hörverlust, Alltag und
              Versicherungsstatus ab. Genannte Beträge sind Erfahrungswerte und
              ersetzen keine persönliche Beratung.
            </p>
          </div>
        </div>
      </section>

      <FAQAccordion items={faqs} />

      <CTASection
        heading="Möchten Sie die Bezuschussung für Ihre Situation verstehen?"
        text="Wir erklären Ihnen transparent, welche Versorgung sinnvoll ist und welche Zuschüsse möglich sind."
        primaryLabel="Termin anfragen"
      />

      <RelatedLinks links={related} />
    </PageShell>
  )
}
