import type { Metadata } from 'next'
import { Volume2, Compass, Scale, HeartHandshake, Radio } from 'lucide-react'
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
  alternates: { canonical: '/klangwellen-anpassverfahren' },
  title: 'Klangwellen-Anpassverfahren | Westphal Hörgeräte Bonn-Beuel',
  description:
    'Das lautheitsbasierte Klangwellen-Anpassverfahren von Westphal Hörgeräte in Bonn-Beuel: natürlicher Klang, besseres Sprachverstehen in Gesellschaft und ein transparenter Hörgerätevergleich – auf 1 Dezibel genau.',
}

const benefitCards = [
  {
    icon: Volume2,
    title: 'Sprachverstehen & Klangqualität in Gesellschaft',
    text: 'Ein ausgewogener Klang senkt die Höranstrengung in Gesellschaft. Es entsteht ein natürliches Klangbild mit mehr Hörkomfort – schwierige Hörsituationen werden weniger belastend und schrill wahrgenommen.',
  },
  {
    icon: Compass,
    title: 'Räumliches Hören',
    text: 'Werden Sie von hinten angesprochen, verarbeitet das Gehirn zuerst die Richtung – und das erste Wort geht verloren. Wir optimieren das räumliche Hören, damit Sie dem Gespräch von Anfang an folgen können.',
  },
  {
    icon: Scale,
    title: 'Hörgeräte vergleichbar machen – ohne Abstriche',
    text: 'Zwei Hersteller parallel in derselben Situation testen: ein realitätsnaher, unverfälschter Vergleich von Herstellern und Technikstufen – optimal auf Ihren individuellen Hörbedarf eingestellt.',
  },
  {
    icon: HeartHandshake,
    title: 'Verbesserte Akzeptanz',
    text: 'Durch die individuelle Klangwellen-Einstellung verbessern wir Ihren Hörbedarf bereits mit der ersten Anpassung. So steigt die Wahrscheinlichkeit, dass Sie Ihr Hörsystem regelmäßig tragen – Hörgeräte, die in der Schublade verstauben, gibt es nicht mehr.',
  },
]

const faqs = [
  {
    question: 'Kann ich meine aktuellen Hörgeräte mit der Klangwellen-Software anpassen lassen?',
    answer:
      'In vielen Fällen ja. Sofern Ihre Hörsysteme technisch unterstützt werden, können wir sie mit dem Klangwellen-Anpassverfahren analysieren und feinjustieren. Sie sind auch mit bereits vorhandenen Geräten herzlich willkommen – gerade dann, wenn diese bisher nur per „FirstFit“ eingestellt wurden.',
  },
  {
    question: 'Was sind die Vorteile der Klangwellen-Anpassung?',
    answer:
      'Eine einzigartige Hörgeräteanpassung, die den Höreinfluss von Alltagssituationen in Echtzeit überprüft. Auf dieser Basis nehmen wir technische Anpassungen am Hörgerät vor, die optimal auf Ihre Hörbedürfnisse abgestimmt sind.',
  },
  {
    question: 'Wie oft sollte ich meine Hörgeräte nachjustieren lassen?',
    answer:
      'Das hängt von Ihrer Hörgewöhnung und Ihrem Alltag ab. In der Eingewöhnungsphase justieren wir schrittweise nach Ihren Rückmeldungen. Danach genügt in der Regel eine regelmäßige Kontrolle im Rahmen unserer Nachsorge.',
  },
  {
    question: 'Welche Arten von Hörverlust können angepasst werden?',
    answer:
      'Das Verfahren eignet sich für die meisten leichten bis hochgradigen Hörminderungen. Da wir jedes Frequenzband einzeln betrachten, können wir Ihre individuelle Hörminderung sehr präzise ausgleichen. Ob es für Ihren Hörverlust sinnvoll ist, klären wir gemeinsam im Termin.',
  },
  {
    question: 'Was kostet eine Klangwellen-Anpassung?',
    answer:
      'Beim Kauf eines Hörgerätes bei uns ist das Klangwellen-Anpassverfahren inklusive. Für die Anpassung vorhandener Fremdgeräte finden wir eine faire, individuelle Lösung – sprechen Sie uns gern unverbindlich an.',
  },
]

const related = [
  {
    label: 'Hörgeräte testen',
    description: 'Erleben Sie das Anpassverfahren 30 Tage in Ihrem Alltag.',
    href: '/hoergeraete-testen',
  },
  {
    label: 'Das passende Hörsystem wählen',
    description: 'Bauformen, Technik und Funktionen im Überblick.',
    href: '/hoergeraete-bonn-beuel',
  },
  {
    label: 'Service & Reparatur',
    description: 'Nachjustierung und Betreuung – auch für Fremdgeräte.',
    href: '/service-reparatur',
  },
]

export default function KlangwellenAnpassverfahrenPage() {
  return (
    <PageShell>
      <FaqJsonLd items={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Startseite', path: '/' },
          {
            name: 'Klangwellen-Anpassverfahren',
            path: '/klangwellen-anpassverfahren',
          },
        ]}
      />
      <PageHero
        eyebrow="Klangwellen-Anpassverfahren"
        headline="Klangwellen-Anpassverfahren – unser exklusives Anpass-Konzept in Beuel"
        text="Verzerrungsarm, natürlich und auf 1 Dezibel genau: Unser lautheitsbasiertes Anpass-Konzept personalisiert den Klang Ihrer Hörsysteme, damit Sie in Gesellschaft wieder gut verstehen."
        trustLine="Einmalig in Beuel – lautheitsbasiert angepasst."
        ctas={[
          { label: 'Termin anfragen', href: '/kontakt?anliegen=Hörgeräteberatung' },
          { label: 'Rückruf wünschen', href: '/kontakt?anliegen=Rückrufwunsch' },
        ]}
        image={{
          src: '/images/real/beratung-anpassung.png',
          alt: 'Hörakustikerin bespricht mit einem Kundenpaar am Beratungstisch die passende Hörgeräte-Auswahl bei Westphal Hörgeräte in Bonn-Beuel',
        }}
      />

      <TrustBar />

      <SEOContentBlock
        eyebrow="Warum dieses Konzept?"
        heading="Aus eigener Erfahrung: ein Anpass-Konzept, das weitergeht"
        paragraphs={[
          'Ich bin selbst Hörgeräte-Träger und damit mein „bester Kunde“. Unser Anspruch ist es, den Klang der Hörsysteme so verzerrungsarm und natürlich wie möglich zu personalisieren, damit Sie in Gesellschaft wieder gut verstehen. Bislang habe ich mit der rein objektiven Percentil-Analyse gearbeitet – heute bin ich stolz, mich für dieses lautheitsbasierte Anpass-Konzept entschieden zu haben.',
          'Aktuelle Bewertungen bestätigen, dass unsere Anpass-Philosophie – verbunden mit Geduld und Erfahrung – einen Schritt weitergeht. Liegen Ihre teuren Hörsysteme nach einer reinen „FirstFit“-Einstellung in der Schublade? Oder wünschen Sie eine unverbindliche Beratung? Dann lernen Sie unsere für Beuel einzigartige Anpassmethode gern unverbindlich kennen.',
        ]}
      />

      <SEOContentBlock
        eyebrow="Was ist das?"
        heading="Was ist das Klangwellen-Anpassverfahren?"
        paragraphs={[
          'Hierbei wird die Hörgeräteeinstellung an Ihr subjektives Klang- und Lautheitsempfinden angepasst – quasi eine Refraktion für die Ohren. Es ist eine Feinjustierung der Hörsysteme auf 1 Dezibel genau und ermöglicht Ihnen einen transparenten Vergleich der Hörsystem-Techniken.',
          'Anpassverfahren sind die Grundlage jeder Hörgeräteeinstellung, um das Sprachverstehen zu optimieren und an Ihre individuellen Bedürfnisse anzupassen.',
        ]}
        muted
      />

      <SEOContentBlock
        eyebrow="Ihr Nutzen"
        heading="Was das Klangwellen-Anpassverfahren für Sie verbessert"
        paragraphs="Vier Bereiche, in denen Sie den Unterschied im Alltag hören:"
      >
        <ServiceCards cards={benefitCards} columns={2} />
      </SEOContentBlock>

      <section className="bg-secondary py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-9 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                So funktioniert es
              </p>
              <h2 className="mt-2 text-balance font-serif text-3xl font-semibold tracking-tight text-card-foreground sm:text-4xl">
                Die KlangBalance-Methode
              </h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                Mit der KlangBalance-Methode betrachten wir sowohl den monauralen
                als auch den binauralen Lautheitsabgleich in Echtzeit. Wir
                analysieren jedes einzelne Frequenzband Ihrer Hörsysteme, um sie
                präzise einzustellen. Anhand Ihrer Rückmeldungen gleichen wir
                Ihre Hörminderung bis auf 1 Dezibel genau aus.
              </p>
            </div>
            <div className="flex items-start gap-4 rounded-2xl bg-sand p-6">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                <Radio className="size-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-serif text-xl font-semibold text-card-foreground">
                  Modernes Hörstudio
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  Grundlage ist unser modern eingerichtetes Hörstudio: Modernste
                  Messtechnik und ein 4.1-Soundsystem von Bose simulieren
                  identische Hörsituationen vor Ort. Das Ergebnis ist ein
                  Klangbild, das so individuell ist wie Sie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion items={faqs} />

      <CTASection
        heading="Erleben Sie unser Klangwellen-Anpassverfahren"
        text="Haben wir Ihr Interesse geweckt? Vereinbaren Sie einen Termin – Sie sind auch mit bereits vorhandenen Geräten herzlich willkommen. Getreu unserem Motto „Hören verbindet“ haben wir immer ein offenes Ohr für Sie."
        primaryLabel="Beratungstermin vereinbaren"
      />

      <RelatedLinks links={related} />
    </PageShell>
  )
}
