import type { Metadata } from 'next'
import { HeartHandshake, Clock, GraduationCap, Users } from 'lucide-react'
import { PageShell } from '@/components/page/page-shell'
import { PageHero } from '@/components/page/page-hero'
import { SEOContentBlock } from '@/components/page/seo-content-block'
import { CTASection } from '@/components/page/cta-section'
import { TrustBar } from '@/components/page/trust-bar'

export const metadata: Metadata = {
  alternates: { canonical: '/jobs' },
  title: 'Jobs & Karriere bei Westphal Hörgeräte in Bonn-Beuel',
  description:
    'Werden Sie Teil des Teams von Westphal Hörgeräte in Bonn-Beuel. Wir suchen Menschen, die gutes Hören und persönliche Beratung ernst nehmen – als Hörakustiker:in oder im Quereinstieg.',
}

const benefits = [
  {
    icon: Users,
    title: 'Persönliches Team',
    text: 'Ein kleines, inhabergeführtes Team mit festen Ansprechpartnern statt anonymer Kettenstruktur.',
  },
  {
    icon: Clock,
    title: 'Zeit für Kundschaft',
    text: 'Bei uns steht Beratung im Vordergrund – ohne Verkaufsdruck und mit Zeit für jeden Menschen.',
  },
  {
    icon: GraduationCap,
    title: 'Weiterentwicklung',
    text: 'Wir unterstützen Fort- und Weiterbildung, damit Sie fachlich und persönlich wachsen können.',
  },
  {
    icon: HeartHandshake,
    title: 'Wertschätzung',
    text: 'Ehrlicher Umgang, verlässliche Arbeitszeiten und ein Miteinander auf Augenhöhe.',
  },
]

export default function JobsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Jobs & Karriere"
        headline="Werden Sie Teil von Westphal Hörgeräte"
        text="Wir suchen Menschen, die gutes Hören und persönliche Beratung genauso ernst nehmen wie wir. Ob als Hörakustiker:in, im Quereinstieg oder für die Ausbildung – wir freuen uns auf Sie."
        trustLine="Inhabergeführt in Bonn-Beuel."
        ctas={[
          { label: 'Jetzt bewerben', href: '/kontakt?anliegen=Bewerbung' },
          { label: 'Rückruf wünschen', href: '/kontakt?anliegen=Rückrufwunsch' },
        ]}
        image={{
          src: '/images/subpage-jobs.png',
          alt: 'Kolleginnen und Kollegen arbeiten im Team von Westphal Hörgeräte in Bonn-Beuel zusammen',
        }}
      />

      <TrustBar />

      <SEOContentBlock
        eyebrow="Warum Westphal"
        heading="Ein Arbeitsplatz mit Sinn und Ruhe"
        paragraphs={[
          'Bei uns arbeiten Sie nicht gegen die Uhr, sondern für die Menschen. Wir nehmen uns Zeit für unsere Kundinnen und Kunden – und genau diese Haltung leben wir auch im Team.',
          'Als inhabergeführter Meisterbetrieb bieten wir ein stabiles Umfeld, klare Abläufe und echte Wertschätzung. Gute Arbeit entsteht dort, wo man sich wohlfühlt.',
        ]}
      />

      <SEOContentBlock
        eyebrow="Ihre Vorteile"
        heading="Das erwartet Sie bei uns"
        paragraphs="Ein Arbeitsplatz, an dem Fachlichkeit, Menschlichkeit und Verlässlichkeit zusammenkommen."
        muted
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {benefit.text}
                </p>
              </div>
            )
          })}
        </div>
      </SEOContentBlock>

      <SEOContentBlock
        eyebrow="Offene Stellen"
        heading="Aktuell und initiativ"
        paragraphs={[
          'Wir freuen uns über Hörakustiker:innen (m/w/d) in Voll- oder Teilzeit sowie über motivierte Quereinsteiger:innen und Auszubildende.',
          'Auch wenn gerade keine passende Stelle ausgeschrieben ist: Senden Sie uns gern eine Initiativbewerbung. Wir melden uns persönlich bei Ihnen.',
        ]}
      />

      <CTASection
        heading="Lust, bei uns mitzuarbeiten?"
        text="Schreiben Sie uns kurz, wer Sie sind und was Sie suchen – oder rufen Sie uns einfach an. Wir freuen uns darauf, Sie kennenzulernen."
        primaryLabel="Jetzt bewerben"
      />
    </PageShell>
  )
}
