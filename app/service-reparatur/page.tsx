import type { Metadata } from 'next'
import { PageShell } from '@/components/page/page-shell'
import { PageHero } from '@/components/page/page-hero'
import { SEOContentBlock } from '@/components/page/seo-content-block'
import { FeatureList } from '@/components/page/feature-list'
import { FAQAccordion } from '@/components/page/faq-accordion'
import { CTASection } from '@/components/page/cta-section'
import { TrustBar } from '@/components/page/trust-bar'
import { RelatedLinks } from '@/components/page/related-links'

export const metadata: Metadata = {
  alternates: { canonical: '/service-reparatur' },
  title: 'Hörgeräte Service & Reparatur in Bonn-Beuel',
  description:
    'Wartung, Reinigung, Nachjustierung, Reparatur und Service für Hörgeräte bei Westphal Hörgeräte in Bonn-Beuel – auch für viele Fremdgeräte.',
}

const services = [
  'Reinigung und Wartung',
  'Nachjustierung',
  'Funktionsprüfung',
  'Reparaturabwicklung',
  'Leihgeräte bei Reparatur',
  'Service für viele Fremdgeräte',
  'Beratung bei Verlust oder Defekt',
  'Nachsorge über 6 Jahre im Rahmen der Versorgung',
]

const faqs = [
  {
    question: 'Kann ich auch mit einem fremden Hörgerät zu Ihnen kommen?',
    answer:
      'In vielen Fällen ja. Wir prüfen gerne, welche Service- oder Reparaturmöglichkeiten bestehen.',
  },
  {
    question: 'Was mache ich bei einem Defekt?',
    answer:
      'Kontaktieren Sie uns. Wir prüfen das Gerät und klären, ob Reinigung, Reparatur oder ein Leihgerät sinnvoll ist.',
  },
  {
    question: 'Wie oft sollte ein Hörgerät gereinigt werden?',
    answer:
      'Regelmäßige Pflege ist wichtig. Die sinnvollen Intervalle hängen von Gerät, Nutzung und Ohr ab.',
  },
]

const related = [
  {
    label: 'Klangwellen-Anpassverfahren',
    description: 'Nachjustierung für besseres Sprachverstehen.',
    href: '/klangwellen-anpassverfahren',
  },
  {
    label: 'Hörgeräte Bonn-Beuel',
    description: 'Vergleich mit moderneren Hörsystemen.',
    href: '/hoergeraete-bonn-beuel',
  },
  {
    label: 'Preise & Krankenkasse',
    description: 'Kosten und Leistungen transparent erklärt.',
    href: '/preise-krankenkasse',
  },
]

export default function ServiceReparaturPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Service & Reparatur"
        headline="Service, Reparatur und Nachsorge für Hörgeräte"
        text="Damit Ihre Hörgeräte zuverlässig funktionieren, kümmern wir uns um Pflege, Reinigung, Nachjustierung und Reparatur – langfristig und persönlich."
        trustLine="Service auch für viele Fremdgeräte."
        ctas={[
          { label: 'Termin anfragen', href: '/kontakt?anliegen=Reparatur / Service' },
          { label: 'Rückruf wünschen', href: '/kontakt?anliegen=Rückrufwunsch' },
        ]}
        image={{
          src: '/images/subpage-service.png',
          alt: 'Fachgerechte Reinigung und Wartung eines Hörgeräts bei Westphal Hörgeräte in Bonn-Beuel',
        }}
      />

      <TrustBar />

      <SEOContentBlock
        eyebrow="Leistungen"
        heading="Unser Service"
        paragraphs="Von der Reinigung bis zur Reparaturabwicklung – wir kümmern uns um Ihre Hörgeräte."
      >
        <FeatureList items={services} columns={2} />
      </SEOContentBlock>

      <SEOContentBlock
        eyebrow="Bei Problemen"
        heading="Wenn das Hörgerät nicht mehr gut funktioniert"
        paragraphs="Wenn Sprache wieder undeutlich wird, das Gerät pfeift, drückt, ausfällt oder im Alltag nicht mehr unterstützt, lohnt sich eine Prüfung. Manchmal genügt Reinigung oder Nachjustierung. Manchmal ist ein Vergleich mit moderneren Lösungen sinnvoll."
        muted
      />

      <FAQAccordion items={faqs} />

      <CTASection
        heading="Bringen Sie Ihre Hörgeräte zum Service"
        text="Ob Reinigung, Nachjustierung oder Reparatur – wir helfen zuverlässig und auch bei vielen Fremdgeräten."
      />

      <RelatedLinks links={related} />
    </PageShell>
  )
}
