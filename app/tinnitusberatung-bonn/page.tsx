import type { Metadata } from 'next'
import {
  Waves,
  Ear,
  Brain,
  SlidersHorizontal,
  Leaf,
  Stethoscope,
  MapPin,
  AlertTriangle,
} from 'lucide-react'
import { PageShell } from '@/components/page/page-shell'
import { PageHero } from '@/components/page/page-hero'
import { SEOContentBlock } from '@/components/page/seo-content-block'
import { ServiceCards } from '@/components/page/service-cards'
import { FAQAccordion } from '@/components/page/faq-accordion'
import { CTASection } from '@/components/page/cta-section'
import { TrustBar } from '@/components/page/trust-bar'
import { RelatedLinks } from '@/components/page/related-links'
import { FaqJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  alternates: { canonical: '/tinnitusberatung-bonn' },
  title: 'Hörgeräte bei Tinnitus | Tinnitusberatung Bonn-Beuel',
  description:
    'Wie Hörgeräte bei Tinnitus entlasten können: Klangtherapie, besseres Hören, Notch-Therapie und individuelle Anpassung bei Westphal Hörgeräte in Bonn-Beuel. Einfühlsam und ohne Heilsversprechen.',
}

const supportCards = [
  {
    icon: Waves,
    title: 'Klangtherapie',
    text: 'Viele moderne Hörgeräte verfügen über eine Tinnitus-Masker-Funktion. Angenehme Geräusche wie Meeresrauschen oder weißes Rauschen können den Tinnitus überdecken oder in den Hintergrund drängen. Ziel ist, dem Gehirn beizubringen, den Tinnitus als unwichtig einzuordnen.',
  },
  {
    icon: Ear,
    title: 'Verbesserung der Hörfähigkeit',
    text: 'Liegt neben dem Tinnitus ein Hörverlust vor, verbessern Hörgeräte das allgemeine Hören. Die Umwelt wird deutlicher wahrgenommen – der Tinnitus erscheint dadurch oft weniger dominant.',
  },
  {
    icon: Leaf,
    title: 'Ablenkung & Entspannung',
    text: 'Durch die Verstärkung von Umgebungsgeräuschen lenken Hörgeräte die Aufmerksamkeit vom Tinnitus ab. Angenehme Klänge wie Musik oder Naturgeräusche wirken entspannend und reduzieren Stress.',
  },
  {
    icon: Brain,
    title: 'Kognitive Entlastung',
    text: 'Ein Hörverlust erfordert durch fehlende Sprachschärfe mehr kognitive Leistung und ermüdet. Eine individuelle Einstellung senkt die Höranstrengung über den Tag – was besonders abends den Tinnitus mindern kann.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Individuelle Anpassung',
    text: 'Art und Lautstärke der Maskierungsgeräusche werden genau eingestellt. Auch mittels Notch-Therapie besteht die Möglichkeit, den Tinnitus gezielt zu behandeln.',
  },
]

const hoersturzSymptoms = [
  'meist einseitig',
  'das Ohr ist wie „in Watte gepackt“',
  'plötzlich starker Tinnitus',
  'Schwindelgefühle',
]

const hnoBonn = [
  'Uniklinikum, Venusberg-Campus 1, 53127 Bonn · Tel. 0228 2870',
  'Waldkrankenhaus, Waldstraße 73, 53177 Bonn · Tel. 0228 383 996',
  'sowie alle weiteren HNO-Praxen',
]

const hnoBeuel = [
  'HNO-Praxis H. J. Brenig & Dr. med. Tarek Deri',
  'HNO-Praxis Dr. med. dent. Sibylle Plehn',
  'HNO-Praxis Dr. med. Bergmann-Fischer',
  'HNO-Praxis Dr. Rüdiger Junker',
]

const faqs = [
  {
    question: 'Können Hörgeräte den Tinnitus verschlimmern?',
    answer:
      'In aller Regel nicht. Richtig angepasste Hörgeräte entlasten das Gehör. Wichtig ist eine sorgfältige, individuelle Einstellung – genau darauf legen wir bei der Anpassung Wert.',
  },
  {
    question: 'Welche Arten von Hörgeräten eignen sich bei Tinnitus?',
    answer:
      'Grundsätzlich viele moderne Hörsysteme mit integrierter Tinnitus- oder Masker-Funktion. Welches Modell sinnvoll ist, hängt von Ihrem Hörverlust und Alltag ab – das klären wir gemeinsam.',
  },
  {
    question: 'Was ist eine Notch-Therapie?',
    answer:
      'Bei der Notch-Therapie werden bestimmte Klanganteile im Bereich des Tinnitus gezielt verändert, damit das Gehirn das Ohrgeräusch mit der Zeit weniger stark wahrnimmt.',
  },
  {
    question: 'Wie lange dauert es, bis Hörgeräte bei Tinnitus wirken?',
    answer:
      'Das ist sehr individuell. Manche Betroffene empfinden schnell Entlastung, bei anderen stellt sich die Wirkung über Wochen ein, da sich das Gehirn an die neuen Höreindrücke gewöhnt. Wir begleiten diesen Prozess mit Geduld.',
  },
  {
    question: 'Übernehmen die Krankenkassen die Kosten für Hörgeräte bei Tinnitus?',
    answer:
      'In der Regel übernehmen die Krankenkassen die Kosten, wenn ein nachweisbarer Hörverlust vorliegt. Auch bei Tinnitus ohne Hörverlust kann eine Übernahme in Frage kommen, wenn die Lebensqualität erheblich beeinträchtigt ist. Sprechen Sie uns vorab an, um Ihre Voraussetzungen zu klären.',
  },
]

const related = [
  {
    label: 'Hörtest Bonn-Beuel',
    description: 'Klarheit über einen möglichen begleitenden Hörverlust.',
    href: '/hoertest-bonn-beuel',
  },
  {
    label: 'Das passende Hörsystem wählen',
    description: 'Hörsysteme mit Entlastungsfunktionen bei Tinnitus.',
    href: '/hoergeraete-bonn-beuel',
  },
  {
    label: 'Klangwellen-Anpassverfahren',
    description: 'Behutsame, individuelle Anpassung Ihres Hörens.',
    href: '/klangwellen-anpassverfahren',
  },
]

export default function TinnitusberatungBonnPage() {
  return (
    <PageShell>
      <FaqJsonLd items={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Startseite', path: '/' },
          { name: 'Hörgeräte bei Tinnitus', path: '/tinnitusberatung-bonn' },
        ]}
      />
      <PageHero
        eyebrow="Tinnitusberatung Bonn"
        headline="Hörgeräte bei Tinnitus: eine Erleichterung für Betroffene"
        text="Rund 2,7 Mio. Menschen in Deutschland leben mit chronischem Tinnitus – gut 55 % haben zugleich eine Hörbeeinträchtigung. Liegt ein Hörverlust vor, können moderne Hörsysteme spürbar entlasten."
        trustLine="Einfühlsame Beratung – ohne Heilsversprechen."
        ctas={[
          { label: 'Termin anfragen', href: '/kontakt?anliegen=Tinnitusberatung' },
          { label: 'Rückruf wünschen', href: '/kontakt?anliegen=Rückrufwunsch' },
        ]}
        image={{
          src: '/images/subpage-tinnitus.webp',
          alt: 'Einfühlsame Tinnitusberatung bei Westphal Hörgeräte in Bonn-Beuel',
        }}
      />

      <TrustBar />

      <SEOContentBlock
        eyebrow="Hintergrund"
        heading="Der Zusammenhang von Hörverlust und Tinnitus"
        paragraphs="Interessant ist, dass das Ohrgeräusch häufig genau die Frequenz widerspiegelt, die Betroffene am schlechtesten hören. Bei einem Hörverlust ist die Signalübertragung von Ohr zu Gehirn beeinträchtigt. Diese fehlgeleiteten Signale werden dann als Pfeifen, Rauschen oder Piepen – also als Tinnitus – wiedergegeben."
      />

      <SEOContentBlock
        eyebrow="Unterstützung"
        heading="Wie Hörgeräte bei Tinnitus helfen können"
        paragraphs="Hörgeräte sind kein Heilmittel, können aber auf verschiedenen Wegen entlasten – besonders in Kombination mit einem Hörverlust."
        muted
      >
        <ServiceCards cards={supportCards} columns={3} />
      </SEOContentBlock>

      {/* Warnung Hörsturz */}
      <section className="bg-background py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-start gap-4 border-l-2 border-brand pl-6">
            <AlertTriangle className="mt-0.5 size-7 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Tinnitus als Vorbote eines Hörsturzes
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Nehmen Sie den Tinnitus ernst. Ist die Ursache Stress, kann er
                Vorbote eines plötzlichen Hörverlusts sein. Typische Symptome:
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {hoersturzSymptoms.map((symptom) => (
                  <li
                    key={symptom}
                    className="flex items-start gap-2 text-base leading-relaxed text-foreground"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {symptom}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Suchen Sie in diesem Fall sehr zeitnah eine HNO-Ärztin oder einen
                HNO-Arzt auf. Die Chancen, die Folgen zu begrenzen, stehen in den
                ersten Stunden nach dem Hörsturz besonders gut.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HNO-Anlaufstellen */}
      <section className="bg-secondary py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="max-w-2xl text-balance font-serif text-3xl font-medium leading-[1.12] text-foreground sm:text-[2.6rem]">
            HNO-Praxen & Kliniken in Bonn und Beuel
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="border-t-2 border-foreground pt-6">
              <h3 className="flex items-center gap-2 font-serif text-2xl font-medium text-foreground">
                <MapPin className="size-5 text-primary" aria-hidden="true" />
                HNO in Bonn
              </h3>
              <ul className="mt-4 space-y-3">
                {hnoBonn.map((entry) => (
                  <li
                    key={entry}
                    className="text-base leading-relaxed text-muted-foreground"
                  >
                    {entry}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t-2 border-foreground pt-6">
              <h3 className="flex items-center gap-2 font-serif text-2xl font-medium text-foreground">
                <MapPin className="size-5 text-primary" aria-hidden="true" />
                HNO in Beuel
              </h3>
              <ul className="mt-4 space-y-3">
                {hnoBeuel.map((entry) => (
                  <li
                    key={entry}
                    className="text-base leading-relaxed text-muted-foreground"
                  >
                    {entry}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fazit */}
      <section className="bg-background py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-start gap-4 border-t-2 border-foreground pt-6 sm:p-8">
            <Stethoscope className="mt-0.5 size-7 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Fazit: Hörgeräte als wertvolle Unterstützung bei Tinnitus
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Hörgeräte können bei Tinnitus wertvoll unterstützen: Sie
                maskieren das Ohrgeräusch, verbessern die Hörfähigkeit, lenken ab,
                fördern Entspannung und entlasten kognitiv. Wichtig ist: Hörgeräte
                heilen den Tinnitus nicht, können seine Wahrnehmung aber deutlich
                reduzieren und Ihre Lebensqualität verbessern. Wenn Sie unter
                Tinnitus leiden, suchen Sie bitte zunächst einen HNO-Arzt auf –
                unsere individuelle Beratung und Anpassung ergänzen die Behandlung.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion items={faqs} />

      <CTASection
        heading="Sprechen Sie mit uns über Ihren Tinnitus"
        text="Wir beraten einfühlsam und verantwortungsvoll, welche Möglichkeiten für Sie sinnvoll sein können."
      />

      <RelatedLinks links={related} />
    </PageShell>
  )
}
