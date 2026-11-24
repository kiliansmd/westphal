import type { Metadata } from 'next'
import {
  Music,
  Moon,
  Bike,
  HardHat,
  Waves,
  Briefcase,
  Baby,
  Plane,
  Headphones,
  Ear,
} from 'lucide-react'
import { PageShell } from '@/components/page/page-shell'
import { PageHero } from '@/components/page/page-hero'
import { SEOContentBlock } from '@/components/page/seo-content-block'
import { ServiceCards } from '@/components/page/service-cards'
import { FeatureList } from '@/components/page/feature-list'
import { FAQAccordion } from '@/components/page/faq-accordion'
import { CTASection } from '@/components/page/cta-section'
import { TrustBar } from '@/components/page/trust-bar'
import { RelatedLinks } from '@/components/page/related-links'
import { FaqJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  alternates: { canonical: '/gehoerschutz-bonn' },
  title: 'Alles über Gehörschutz in Bonn-Beuel | Maßgefertigt',
  description:
    'Maßgefertigter Gehörschutz bei Westphal Hörgeräte in Bonn-Beuel: Musik, Schlaf, Motorrad, Arbeit, Schwimmen, Reisen, Kinder, In-Ear-Monitoring und Snug-Otoplastiken für AirPods. Partner von Hörluchs.',
}

const portfolio = [
  {
    icon: Moon,
    title: 'Schlaf-Gehörschutz',
    text: 'Individuell angepasster Schutz gegen störende Geräusche in der Nacht.',
  },
  {
    icon: Baby,
    title: 'Kinder-Gehörschutz',
    text: 'Zum konzentrierten Lernen und für laute Anlässe – Kapsel- und Standardlösungen.',
  },
  {
    icon: Waves,
    title: 'Schwimmschutz',
    text: 'Hält Spritzwasser zuverlässig aus dem Gehörgang fern.',
  },
  {
    icon: Music,
    title: 'Musiker-Gehörschutz',
    text: 'Ausgewogene Dämmung mit natürlichem Klangerlebnis – inkl. Dämmwertüberprüfung.',
  },
  {
    icon: Headphones,
    title: 'Snug-Otoplastiken für AirPods',
    text: 'Individueller Aufsatz für mehr Halt, Komfort und besseren Klang.',
  },
  {
    icon: Ear,
    title: 'In-Ear-Kopfhörer',
    text: 'Maßgefertigtes In-Ear-Monitoring – zugleich ein echter Gehörschutz.',
  },
  {
    icon: HardHat,
    title: 'Arbeiter-Gehörschutz',
    text: 'Für handwerkliche, industrielle oder laute berufliche Umgebungen.',
  },
  {
    icon: Plane,
    title: 'Fly-Gehörschutz',
    text: 'Druckausgleich für entspanntes Reisen mit Bahn, Bus und Flugzeug.',
  },
  {
    icon: Bike,
    title: 'Motorrad-Gehörschutz',
    text: 'Dämpft Windgeräusche – und lässt Warnsignale trotzdem durch.',
  },
  {
    icon: Briefcase,
    title: 'Bürolärm-Gehörschutz',
    text: 'Für konzentriertes Arbeiten in offenen oder lauten Umgebungen.',
  },
]

const warumWir = [
  'Wir arbeiten mit Hörluchs – einem renommierten Hersteller-Labor mit Fertigung in Deutschland.',
  'Wir beraten aus Erfahrung: Wir lieben Musik, und der Schlafschutz ist auch privat ein Segen.',
  'Wir reichen für Sie das Rezept zur Kostenübernahme ein.',
  'Wir decken die gesamte Produktpalette ab.',
]

const musikerFilter = [
  '30 dB für die Arbeit',
  '25 dB für ein sehr lautes Konzert',
  '15 dB für das Büro',
  '10 dB zum Lernen',
]

const schwimmFeatures = [
  'perfekter Schutz: hält Spritzwasser zuverlässig fern',
  'weiches Silikon: höchster Komfort, maßangepasst',
  'Schutz vor Exostosen (knöcherne Wucherungen im Gehörgang)',
  'schwimmfähig: erhältlich in treibenden Materialien',
  'individuell gestaltet: verschiedene Farben zur Auswahl',
]

const motorradFeatures = [
  'Dämmwert von 20 dB auf 25 dB steigern',
  'guter Dämmkomfort auch über 100 km/h',
  'kein Druckgefühl auf längeren Strecken',
  'leicht zu reinigen und langlebig',
  'durch Filterwechsel optional auch für Konzerte nutzbar',
]

const flyFeatures = [
  'Druckausgleich: weniger Ohrendruck, mehr Ruhe',
  'ideal für Kinder mit empfindlichen Ohren',
  'entspanntes Reisen mit Bahn, Bus und Flugzeug',
  'Kostenübernahme ggf. für Geschäftsreisende, Piloten und Crew',
]

const inEarPoints = [
  'Erfahrung in der Betreuung von In-Ear-Kunden',
  'Beratung für Sänger, Gitarristen, Schlagzeuger und Gamer',
  'Partner von Hörluchs mit großer Fertigungs-Expertise',
  'Probekoffer für den Live-Vergleich im Proberaum (2, 3, 4 oder 6 Kanäle)',
  'Vor-Ort-Service',
  'Preis-Garantie',
]

const faqs = [
  {
    question: 'Wie wird individueller Gehörschutz angefertigt?',
    answer:
      'Zunächst wird eine Abformung Ihrer Ohrform erstellt. Danach fertigt unser Partner Hörluchs den Gehörschutz passend zum Einsatzbereich – auf Wunsch in verschiedenen Farben.',
  },
  {
    question: 'Gibt es unterschiedliche Filter?',
    answer:
      'Ja. Je nach Anwendung können unterschiedliche Dämmungen oder Filter sinnvoll sein. Beim Musiker-Gehörschutz lassen sich Filter sogar wechseln – etwa 30 dB für die Arbeit oder 10 dB zum Lernen.',
  },
  {
    question: 'Warum ist individueller Gehörschutz besser als Standard-Produkte?',
    answer:
      'Individueller Gehörschutz dämmt breitbandiger und gleichmäßiger. Das sorgt für ein besseres Sprachverstehen und ein natürlicheres Klangerlebnis – bei sicherem, drucklosem Sitz.',
  },
  {
    question: 'Übernimmt die Krankenkasse die Kosten?',
    answer:
      'In bestimmten Fällen – etwa bei beruflicher Lärmbelastung – ist eine Kostenübernahme möglich. Wir reichen das Rezept für Sie ein und prüfen Ihre Möglichkeiten.',
  },
]

const related = [
  {
    label: 'Hörtest Bonn-Beuel',
    description: 'Prüfen Sie Ihr Hörvermögen – Schutz beginnt mit Wissen.',
    href: '/hoertest-bonn-beuel',
  },
  {
    label: 'Das passende Hörsystem wählen',
    description: 'Moderne Hörsysteme für besseres Verstehen.',
    href: '/hoergeraete-bonn-beuel',
  },
  {
    label: 'Service & Reparatur',
    description: 'Pflege und Betreuung rund ums Ohr.',
    href: '/service-reparatur',
  },
]

export default function GehoerschutzBonnPage() {
  return (
    <PageShell>
      <FaqJsonLd items={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Startseite', path: '/' },
          { name: 'Alles über Gehörschutz', path: '/gehoerschutz-bonn' },
        ]}
      />
      <PageHero
        eyebrow="Gehörschutz Bonn"
        headline="Alles über Gehörschutz bei Westphal Hörgeräte"
        text="Musik-Gehörschutz inkl. Dämmwertüberprüfung, flexible Filterwahl, Schlafschutz und vieles mehr: Für jede Lebenssituation haben wir den richtigen Schutz für Ihr Gehör."
        trustLine="Maßgefertigt – in Partnerschaft mit Hörluchs."
        ctas={[
          { label: 'Termin anfragen', href: '/kontakt?anliegen=Gehörschutz' },
          { label: 'Rückruf wünschen', href: '/kontakt?anliegen=Rückrufwunsch' },
        ]}
        image={{
          src: '/images/subpage-gehoerschutz.png',
          alt: 'Maßgefertigter individueller Gehörschutz bei Westphal Hörgeräte in Bonn-Beuel',
        }}
      />

      <TrustBar />

      <SEOContentBlock
        eyebrow="Warum Schutz zählt"
        heading="Ihr Gehör ist wertvoll – schützen Sie es rechtzeitig"
        paragraphs="Einmal geschädigt, sind die Haarsinneszellen im Hochtonbereich unwiederbringlich gebrochen und es entsteht eine Hörminderung. Lassen Sie es gar nicht so weit kommen: Sorgen Sie bei Lärmbelastung dafür, dass Ihr wertvoller Hörsinn optimal geschützt wird – egal, welcher Belastung Ihr Gehör ausgesetzt ist."
      />

      <SEOContentBlock
        eyebrow="Produktportfolio"
        heading="Für jede Lebenssituation der richtige Gehörschutz"
        paragraphs="Von Schlaf über Musik bis Motorrad – wählen Sie den Schutz, der zu Ihrem Einsatzbereich passt, individuell an Ihr Ohr angepasst."
        muted
      >
        <ServiceCards cards={portfolio} columns={3} />
      </SEOContentBlock>

      <SEOContentBlock
        eyebrow="Warum wir?"
        heading="Beratung aus Erfahrung – Fertigung in Deutschland"
        paragraphs="Was uns bei der Auswahl Ihres Gehörschutzes auszeichnet:"
      >
        <FeatureList items={warumWir} columns={2} />
      </SEOContentBlock>

      {/* Detailbereiche */}
      <section className="bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Im Detail
          </p>
          <h2 className="mt-2 max-w-2xl text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Unsere Gehörschutz-Lösungen im Detail
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-sm">
              <h3 className="font-serif text-xl font-semibold text-card-foreground">
                Schlaf-Otoplastiken
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Sie bieten sehr guten Tragekomfort und sind perfekt für
                Seitenschläfer geeignet.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7 shadow-sm">
              <h3 className="font-serif text-xl font-semibold text-card-foreground">
                Snug-Otoplastiken für AirPods
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Ihr Gehörgang ist zu schmal und die Kopfhörer drücken? Ein
                individueller Aufsatz erhöht den Tragekomfort, optimiert den Halt
                und verbessert den Klang. Probieren Sie es gern bei uns aus.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7 shadow-sm">
              <h3 className="font-serif text-xl font-semibold text-card-foreground">
                Musiker-Gehörschutz
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Individueller Musiker-Gehörschutz dämmt breitbandiger als
                Standard-Produkte (weniger in den Höhen). Das bedeutet besseres
                Sprachverstehen und ein natürlicheres Klangerlebnis. Erhältlich in
                vielen Farben und mit wechselbaren Filtern:
              </p>
              <div className="mt-5">
                <FeatureList items={musikerFilter} columns={2} />
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7 shadow-sm">
              <h3 className="font-serif text-xl font-semibold text-card-foreground">
                Kinder-Gehörschutz
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Zeigt Ihre Smartwatch bei der nächsten Kinderparty über 90 Dezibel
                an, denken Sie bitte über einen Gehörschutz für Kinder nach. Zu
                empfehlen sind Kapsel-Gehörschutz für Babys und kleine Kinder sowie
                Standard-Gehörschutz für größere Kinder – in vielen Farben.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7 shadow-sm">
              <h3 className="font-serif text-xl font-semibold text-card-foreground">
                Schwimmschutz
              </h3>
              <div className="mt-4">
                <FeatureList items={schwimmFeatures} />
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7 shadow-sm">
              <h3 className="font-serif text-xl font-semibold text-card-foreground">
                Motorrad-Gehörschutz
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Windgeräusche von gut 100 dB dämpfen und trotzdem Warnsignale
                heraushören? Mit individuellem Gehörschutz gelingt das besser als
                mit Standardlösungen:
              </p>
              <div className="mt-4">
                <FeatureList items={motorradFeatures} />
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7 shadow-sm lg:col-span-2">
              <h3 className="font-serif text-xl font-semibold text-card-foreground">
                Fly-Gehörschutz
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Für Flieger aller Altersklassen:
              </p>
              <div className="mt-4">
                <FeatureList items={flyFeatures} columns={2} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-Ear-Monitoring */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Für Musiker & Gamer
          </p>
          <h2 className="mt-2 max-w-2xl text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            In-Ear-Monitoring – warum bei uns?
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-sm">
              <h3 className="font-serif text-lg font-semibold text-card-foreground">
                Ihre Vorteile bei uns
              </h3>
              <div className="mt-4">
                <FeatureList items={inEarPoints} />
              </div>
            </div>
            <div className="rounded-3xl bg-sand p-7">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                Vorteile von In-Ear-Kopfhörern
              </h3>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Ein maßgefertigter In-Ear-Kopfhörer ist zugleich ein Gehörschutz.
                Sie können mit den Bandmitgliedern kommunizieren und den optimalen
                Band-Mix auf Ihre Ohren bringen – mit vollem Klangspektrum. Und bei
                den Kosten eines Hörgerätes ist es eine einfache Rechnung, Ihr
                Gehör frühzeitig zu schützen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion items={faqs} />

      <CTASection
        heading="Lassen Sie sich Ihren Gehörschutz anpassen"
        text="Vereinbaren Sie einen Termin in Bonn-Beuel – wir finden den passenden Schutz für Ihren Einsatzbereich und reichen das Rezept für Sie ein."
      />

      <RelatedLinks links={related} />
    </PageShell>
  )
}
