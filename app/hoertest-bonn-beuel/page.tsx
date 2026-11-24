import type { Metadata } from 'next'
import { PageShell } from '@/components/page/page-shell'
import { PageHero } from '@/components/page/page-hero'
import { SEOContentBlock } from '@/components/page/seo-content-block'
import { FeatureList } from '@/components/page/feature-list'
import { StepList } from '@/components/page/step-list'
import { FAQAccordion } from '@/components/page/faq-accordion'
import { CTASection } from '@/components/page/cta-section'
import { TrustBar } from '@/components/page/trust-bar'
import { RelatedLinks } from '@/components/page/related-links'

export const metadata: Metadata = {
  alternates: { canonical: '/hoertest-bonn-beuel' },
  title: 'Hörtest in Bonn-Beuel | Kostenlos & verständlich erklärt',
  description:
    'Vereinbaren Sie einen Hörtest bei Westphal Hörgeräte in Bonn-Beuel. Verständliche Auswertung, persönliche Beratung und kein Verkaufsdruck.',
}

const signs = [
  'Gespräche wirken undeutlich',
  'Stimmen klingen leiser oder verwaschen',
  'Sprache in Gruppen oder im Restaurant ist schwer zu verstehen',
  'Der Fernseher wird häufiger lauter gestellt',
  'Telefonieren fällt schwerer',
  'Tinnitus oder Ohrgeräusche treten auf',
  'Angehörige sprechen Sie auf Ihr Hören an',
]

const steps = [
  'Kurzes persönliches Vorgespräch',
  'Messung Ihres Hörvermögens',
  'Verständliche Erklärung der Ergebnisse',
  'Einschätzung möglicher nächster Schritte',
  'Bei Bedarf Beratung zu Hörsystemen, Tinnitus oder HNO-Abklärung',
]

const faqs = [
  {
    question: 'Kostet der Hörtest etwas?',
    answer:
      'Der Hörtest ist als Einstieg bei uns unkompliziert möglich. Details klären wir gerne bei Ihrer Terminanfrage.',
  },
  {
    question: 'Muss ich vorher zum HNO-Arzt?',
    answer:
      'Für eine erste Einschätzung ist das nicht immer notwendig. Für bestimmte Versorgungen oder medizinische Fragen kann eine HNO-Abklärung sinnvoll oder erforderlich sein.',
  },
  {
    question: 'Wie lange dauert ein Hörtest?',
    answer:
      'Planen Sie ausreichend Zeit ein, damit wir nicht nur messen, sondern Ihnen die Ergebnisse auch verständlich erklären können.',
  },
]

const related = [
  {
    label: 'Hörgeräte Bonn-Beuel',
    description: 'Passende Bauformen und Technik für Ihren Höralltag.',
    href: '/hoergeraete-bonn-beuel',
  },
  {
    label: 'Tinnitusberatung Bonn',
    description: 'Unterstützung bei Ohrgeräuschen und Hörverlust.',
    href: '/tinnitusberatung-bonn',
  },
  {
    label: 'Preise & Krankenkasse',
    description: 'Was kostet die Versorgung und was zahlt die Kasse?',
    href: '/preise-krankenkasse',
  },
]

export default function HoertestBonnBeuelPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Hörtest Bonn-Beuel"
        headline="Hörtest in Bonn-Beuel – Klarheit für Ihr Gehör"
        text="Wenn Gespräche anstrengender werden, schafft ein Hörtest Klarheit. Wir prüfen Ihr Hörvermögen in Ruhe und erklären die Ergebnisse verständlich."
        trustLine="Ohne Verkaufsdruck – rein zur Orientierung."
        ctas={[
          { label: 'Termin anfragen', href: '/kontakt?anliegen=Hörtest' },
          { label: 'Rückruf wünschen', href: '/kontakt?anliegen=Rückrufwunsch' },
        ]}
        image={{
          src: '/images/real/hoertest-audiometer.webp',
          alt: 'Audiologin führt bei Westphal Hörgeräte in Bonn-Beuel einen Hörtest durch',
        }}
      />

      <TrustBar />

      <SEOContentBlock
        eyebrow="Anzeichen"
        heading="Wann ist ein Hörtest sinnvoll?"
        paragraphs="Ein nachlassendes Gehör entwickelt sich oft schleichend. Diese Anzeichen sprechen für einen Hörtest:"
      >
        <FeatureList items={signs} columns={2} />
      </SEOContentBlock>

      <SEOContentBlock
        eyebrow="Ablauf"
        heading="So läuft der Hörtest ab"
        paragraphs="Wir nehmen uns Zeit – vom ersten Gespräch bis zur verständlichen Erklärung Ihrer Ergebnisse."
        muted
      >
        <StepList steps={steps} />
      </SEOContentBlock>

      <SEOContentBlock
        eyebrow="Ehrlich & entspannt"
        heading="Kein Verkaufsdruck"
        paragraphs="Ein Hörtest bedeutet nicht, dass Sie direkt ein Hörgerät kaufen müssen. Er dient zunächst der Orientierung. Wenn eine Versorgung sinnvoll ist, erklären wir Ihnen transparent, welche Möglichkeiten es gibt."
      />

      <FAQAccordion items={faqs} />

      <CTASection
        heading="Vereinbaren Sie Ihren Hörtest in Bonn-Beuel"
        text="Schaffen Sie Klarheit über Ihr Hörvermögen – persönlich, verständlich und ohne Verkaufsdruck."
      />

      <RelatedLinks links={related} />
    </PageShell>
  )
}
