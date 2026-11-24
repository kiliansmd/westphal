import type { Metadata } from 'next'
import { PageShell } from '@/components/page/page-shell'
import { PageHero } from '@/components/page/page-hero'
import { SEOContentBlock } from '@/components/page/seo-content-block'
import { FeatureList } from '@/components/page/feature-list'
import { company } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description:
    'Informationen zur Verarbeitung personenbezogener Daten bei Westphal Hörgeräte in Bonn-Beuel.',
  robots: { index: false, follow: true },
}

const dataPoints = [
  'Kontaktformular: Name, Telefonnummer, E-Mail und Ihre Nachricht zur Bearbeitung Ihrer Anfrage',
  'Server-Logfiles zur technischen Bereitstellung der Website',
  'Google Maps wird ausschließlich nach Ihrer ausdrücklichen Einwilligung geladen',
  'Instagram-Inhalte werden ausschließlich nach Ihrer ausdrücklichen Einwilligung geladen',
]

export default function DatenschutzPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Rechtliches"
        headline="Datenschutzerklärung"
        text="Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Seite ist als Platzhalter vorbereitet und muss vor dem Livegang durch eine vollständige, rechtlich geprüfte Datenschutzerklärung ersetzt werden."
      />

      <SEOContentBlock
        eyebrow="Verantwortliche Stelle"
        heading="Wer ist für die Datenverarbeitung verantwortlich?"
        paragraphs={[
          `Verantwortlich für die Datenverarbeitung auf dieser Website ist ${company.name}, ${company.street}, ${company.city}.`,
          'Bei Fragen zum Datenschutz erreichen Sie uns telefonisch oder per E-Mail über die im Impressum genannten Kontaktdaten.',
        ]}
      />

      <SEOContentBlock
        eyebrow="Übersicht"
        heading="Welche Daten wir verarbeiten"
        paragraphs="Wir verarbeiten personenbezogene Daten nur, soweit dies für die Bereitstellung der Website und die Bearbeitung Ihrer Anfragen erforderlich ist:"
        muted
      >
        <FeatureList items={dataPoints} columns={1} />
      </SEOContentBlock>

      <SEOContentBlock
        eyebrow="Ihre Rechte"
        heading="Ihre Rechte als betroffene Person"
        paragraphs="Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Zudem können Sie sich bei einer Datenschutz-Aufsichtsbehörde beschweren. Die vollständigen Rechtsgrundlagen (u. a. Art. 6 DSGVO), Speicherfristen und Angaben zu eingesetzten Diensten sind vor der Veröffentlichung zu ergänzen."
      />
    </PageShell>
  )
}
