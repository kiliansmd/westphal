import type { Metadata } from 'next'
import { PageShell } from '@/components/page/page-shell'
import { PageHero } from '@/components/page/page-hero'
import { SEOContentBlock } from '@/components/page/seo-content-block'
import { company } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Impressum',
  description:
    'Impressum und Anbieterkennzeichnung von Westphal Hörgeräte in Bonn-Beuel.',
  // Legal pages should not compete for rankings.
  robots: { index: false, follow: true },
}

export default function ImpressumPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Rechtliches"
        headline="Impressum"
        text="Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz). Bitte ergänzen Sie die folgenden Platzhalter vor dem Livegang mit Ihren rechtsverbindlichen Daten."
      />

      <SEOContentBlock eyebrow="Anbieter" heading="Angaben zum Betreiber">
        <div className="max-w-2xl space-y-2 text-base leading-relaxed text-muted-foreground">
          <p className="font-semibold text-foreground">{company.name}</p>
          <p>
            {company.street}
            <br />
            {company.city}
          </p>
          <p>
            Telefon:{' '}
            <a href={company.phoneHref} className="text-primary hover:underline">
              {company.phone}
            </a>
            <br />
            E-Mail:{' '}
            <a href={company.emailHref} className="text-primary hover:underline">
              {company.email}
            </a>
          </p>
          <p className="pt-4 text-sm">
            {'<'}Platzhalter: Inhaber/Vertretungsberechtigte(r), Rechtsform,
            Umsatzsteuer-ID nach § 27a UStG, zuständige Aufsichtsbehörde bzw.
            Handwerkskammer, Berufsbezeichnung und berufsrechtliche Regelungen.
            {'>'}
          </p>
        </div>
      </SEOContentBlock>

      <SEOContentBlock
        eyebrow="Verantwortlich"
        heading="Verantwortlich für den Inhalt"
        paragraphs="Verantwortlich im Sinne des § 18 Abs. 2 MStV: <Name und Anschrift der verantwortlichen Person ergänzen>. Diese Seite ist als Platzhalter vorbereitet und muss vor der Veröffentlichung rechtlich geprüft und vervollständigt werden."
        muted
      />
    </PageShell>
  )
}
