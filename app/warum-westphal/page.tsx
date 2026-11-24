import type { Metadata } from 'next'
import { UserCheck, HeartHandshake } from 'lucide-react'
import { PageShell } from '@/components/page/page-shell'
import { PageHero } from '@/components/page/page-hero'
import { SEOContentBlock } from '@/components/page/seo-content-block'
import { ComparisonTable } from '@/components/page/comparison-table'
import { FAQAccordion } from '@/components/page/faq-accordion'
import { CTASection } from '@/components/page/cta-section'
import { TrustBar } from '@/components/page/trust-bar'
import { RelatedLinks } from '@/components/page/related-links'
import { InsightsSection } from '@/components/home/insights-section'

export const metadata: Metadata = {
  alternates: { canonical: '/warum-westphal' },
  title: 'Warum Westphal Hörgeräte? | Persönlich, unabhängig, kompetent',
  description:
    'Erfahren Sie, warum Westphal Hörgeräte in Bonn-Beuel für persönliche Meisterbetreuung, unabhängige Beratung, faire Preise und langfristigen Service steht.',
}

const team = [
  {
    icon: UserCheck,
    name: 'Markus Westphal',
    role: 'Hörakustikermeister',
    text: 'Markus Westphal bringt langjährige Erfahrung als Hörakustikermeister in Bonn-Beuel mit und kennt als Hörgeräteträger auch die persönliche Seite des guten Hörens. Diese Kombination aus Fachwissen und eigener Erfahrung prägt die Beratung.',
  },
  {
    icon: HeartHandshake,
    name: 'Jennifer Voß',
    role: 'Audiotherapeutin',
    text: 'Als Audiotherapeutin begleitet Jennifer Voß Kundinnen und Kunden einfühlsam auf dem Weg zu besserem Hörverstehen und mehr Sicherheit im Alltag.',
  },
]

const values = [
  {
    title: 'Unabhängige Beratung',
    text: 'Wir sind an keinen Hersteller gebunden und empfehlen nicht nach Marke, sondern nach Ihrem Höralltag. So bekommen Sie die Lösung, die wirklich zu Ihnen passt.',
  },
  {
    title: 'Transparente Preise',
    text: 'Sie erfahren von Anfang an, welche Versorgung möglich ist und was sie kostet. Keine Aktionslogik, kein Kleingedrucktes – einfach nachvollziehbar erklärt.',
  },
  {
    title: 'Langfristige Nachsorge',
    text: 'Nach dem Kauf sind wir weiter für Sie da: Feineinstellung, Reinigung und Service über Jahre – persönlich und ohne wechselnde Ansprechpartner.',
  },
]

const comparisonRows = [
  {
    topic: 'Beratung',
    westphal: 'persönlich, inhabergeführt',
    other: 'häufig stärker standardisiert',
  },
  {
    topic: 'Ansprechpartner',
    westphal: 'möglichst konstant',
    other: 'kann wechseln',
  },
  {
    topic: 'Preise',
    westphal: 'transparent erklärt',
    other: 'häufig aktionsgetrieben',
  },
]

const faqs = [
  {
    question: 'Was unterscheidet Westphal Hörgeräte von einer großen Kette?',
    answer:
      'Vor allem die persönliche, inhabergeführte Betreuung, die herstellerunabhängige Beratung und die langfristige Begleitung vor Ort in Bonn-Beuel.',
  },
  {
    question: 'Arbeitet Westphal mit bestimmten Marken?',
    answer:
      'Wir arbeiten mit namhaften Herstellern, empfehlen aber nicht nach Marke, sondern nach Höralltag, Hörverlust und Bedienwunsch.',
  },
  {
    question: 'Kann ich einfach unverbindlich vorbeikommen?',
    answer:
      'Am besten vereinbaren Sie vorher einen Termin, damit wir ausreichend Zeit für Ihr Anliegen einplanen können.',
  },
]

const related = [
  {
    label: 'Hörgeräte Bonn-Beuel',
    description: 'Herstellerunabhängige Auswahl für Ihren Höralltag.',
    href: '/hoergeraete-bonn-beuel',
  },
  {
    label: 'Hörtest Bonn-Beuel',
    description: 'Verständliche Auswertung Ihres Hörvermögens.',
    href: '/hoertest-bonn-beuel',
  },
  {
    label: 'Kontakt & Termin',
    description: 'Lernen Sie uns persönlich in Bonn-Beuel kennen.',
    href: '/kontakt',
  },
]

export default function WarumWestphalPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Warum Westphal?"
        headline="Ein Geschäft, in dem man Sie noch kennt"
        text="Bei uns beraten Sie feste Ansprechpartner, die sich Zeit nehmen und Ihnen ehrlich sagen, was zu Ihnen passt. Gutes Hören braucht vor allem Vertrauen – und das entsteht persönlich."
        trustLine="Inhabergeführt in Bonn-Beuel."
        image={{
          src: '/images/real/inhaber-team.webp',
          alt: 'Die Inhaber von Westphal Hörgeräte im persönlichen Gespräch bei einer Tasse Kaffee im Fachgeschäft in Bonn-Beuel',
        }}
      />

      <TrustBar />

      <SEOContentBlock
        eyebrow="Persönliche Betreuung"
        heading="Wir nehmen uns Zeit für Sie"
        paragraphs={[
          'Ein Hörgerät ist keine Sache von fünf Minuten. Deshalb hören wir erst zu, bevor wir beraten: Wo möchten Sie besser hören, was ist Ihnen wichtig, was macht Ihren Alltag aus?',
          'Weil wir inhabergeführt sind, bleibt Ihr Ansprechpartner über die Jahre derselbe. Sie müssen Ihre Geschichte nicht jedes Mal neu erzählen.',
        ]}
      />

      <SEOContentBlock
        eyebrow="Ihr Team"
        heading="Die Menschen hinter Westphal"
        paragraphs="Fachwissen, Handwerk und Einfühlungsvermögen – so unterschiedlich wie hilfreich."
        muted
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {team.map((member) => {
            const Icon = member.icon
            return (
              <div
                key={member.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {member.text}
                </p>
              </div>
            )
          })}
        </div>
      </SEOContentBlock>

      <SEOContentBlock
        eyebrow="Worauf Sie sich verlassen können"
        heading="Drei Dinge, die uns wichtig sind"
        paragraphs="Unabhängige Beratung, transparente Preise und eine Nachsorge, die nicht mit dem Kauf endet."
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="font-serif text-lg font-semibold text-card-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </SEOContentBlock>

      <SEOContentBlock
        eyebrow="Ehrlich gesagt"
        heading="Kleiner Betrieb statt große Kette"
        paragraphs="Große Ketten haben ihre Berechtigung. Vielen Menschen sind bei einem Hörgerät aber Zeit, feste Ansprechpartner und nachvollziehbare Preise wichtiger – und genau das können wir gut."
        muted
      >
        <ComparisonTable
          columns={['Thema', 'Westphal Hörgeräte', 'Große Kette']}
          rows={comparisonRows}
        />
      </SEOContentBlock>

      <FAQAccordion items={faqs} />

      <InsightsSection />

      <CTASection
        heading="Lernen Sie uns persönlich kennen"
        text="Vereinbaren Sie einen Termin in Bonn-Beuel und erleben Sie Beratung, die sich Zeit nimmt."
        primaryLabel="Termin anfragen"
      />

      <RelatedLinks links={related} />
    </PageShell>
  )
}
