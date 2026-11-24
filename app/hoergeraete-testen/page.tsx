import type { Metadata } from 'next'
import { PageShell } from '@/components/page/page-shell'
import { PageHero } from '@/components/page/page-hero'
import { SEOContentBlock } from '@/components/page/seo-content-block'
import { StepList } from '@/components/page/step-list'
import { FAQAccordion } from '@/components/page/faq-accordion'
import { CTASection } from '@/components/page/cta-section'
import { TrustBar } from '@/components/page/trust-bar'
import { RelatedLinks } from '@/components/page/related-links'

export const metadata: Metadata = {
  alternates: { canonical: '/hoergeraete-testen' },
  title: 'Hörgeräte testen in Bonn-Beuel | 30 Tage kostenlos ausprobieren',
  description:
    'Testen Sie Hörgeräte im Alltag bei Westphal Hörgeräte in Bonn-Beuel. Persönliche Anpassung, Herstellervergleich und transparente Beratung.',
}

const steps = [
  'Auswahl geeigneter Hörsysteme',
  'Erste Anpassung',
  'Test im Alltag',
  'Rückmeldung zu Klang, Sprache und Komfort',
  'Nachjustierung',
  'Vergleich weiterer Lösungen, falls sinnvoll',
  'Entscheidung in Ruhe',
]

const faqs = [
  {
    question: 'Kann ich mehrere Hörgeräte vergleichen?',
    answer:
      'Ja, wenn es fachlich sinnvoll ist, vergleichen wir unterschiedliche Lösungen und Hersteller.',
  },
  {
    question: 'Was passiert, wenn mir ein Hörgerät nicht gefällt?',
    answer: 'Dann wird nachjustiert oder eine alternative Lösung geprüft.',
  },
  {
    question: 'Muss ich die Geräte ständig tragen?',
    answer:
      'Je regelmäßiger Sie testen, desto besser lässt sich beurteilen, wie gut ein Hörsystem zu Ihrem Alltag passt.',
  },
]

const related = [
  {
    label: 'Hörgeräte Bonn-Beuel',
    description: 'Bauformen, Technik und herstellerunabhängige Auswahl.',
    href: '/hoergeraete-bonn-beuel',
  },
  {
    label: 'Klangwellen-Anpassverfahren',
    description: 'Wie wir Sie behutsam an natürliches Hören heranführen.',
    href: '/klangwellen-anpassverfahren',
  },
  {
    label: 'Preise & Krankenkasse',
    description: 'Was die Versorgung kostet und was die Kasse zahlt.',
    href: '/preise-krankenkasse',
  },
]

export default function HoergeraeteTestenPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Hörgeräte testen"
        headline="Hörgeräte testen – in Ihrem echten Alltag"
        text="Ein Hörgerät muss nicht im Fachgeschäft überzeugen, sondern in Ihrem Alltag. Deshalb testen Sie es bei uns in Ruhe zu Hause, unterwegs und im Gespräch."
        trustLine="30 Tage ausprobieren – unverbindlich."
        ctas={[
          { label: 'Termin anfragen', href: '/kontakt?anliegen=Hörgeräte testen' },
          { label: 'Rückruf wünschen', href: '/kontakt?anliegen=Rückrufwunsch' },
        ]}
        image={{
          src: '/images/real/beratung-familie.webp',
          alt: 'Hörakustikerin zeigt einer Kundin und ihrer Angehörigen am Tablet verschiedene Hörgeräte bei Westphal Hörgeräte in Bonn-Beuel',
        }}
      />

      <TrustBar />

      <SEOContentBlock
        eyebrow="Alltagstauglich"
        heading="Warum Probetragen so wichtig ist"
        paragraphs="Jedes Ohr, jeder Hörverlust und jeder Alltag ist anders. Erst im täglichen Leben zeigt sich, ob ein Hörsystem angenehm klingt, Sprache verständlicher macht und gut bedienbar ist."
      />

      <SEOContentBlock
        eyebrow="Ablauf"
        heading="So begleiten wir die Testphase"
        paragraphs="Von der Auswahl bis zur Entscheidung in Ruhe – wir begleiten jeden Schritt persönlich."
        muted
      >
        <StepList steps={steps} />
      </SEOContentBlock>

      <SEOContentBlock
        eyebrow="Ohne Eile"
        heading="Kein vorschneller Kauf"
        paragraphs="Sie sollen eine Lösung finden, mit der Sie sich langfristig wohlfühlen. Deshalb nehmen wir uns Zeit für Vergleich, Erklärung und Nachjustierung."
      />

      <FAQAccordion items={faqs} />

      <CTASection
        heading="Testen Sie Hörgeräte 30 Tage im Alltag"
        text="Vereinbaren Sie Ihre persönliche Testphase in Bonn-Beuel – unverbindlich und mit voller Begleitung."
      />

      <RelatedLinks links={related} />
    </PageShell>
  )
}
