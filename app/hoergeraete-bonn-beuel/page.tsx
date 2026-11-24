import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Ear,
  Headphones,
  Tv,
  Smartphone,
  PhoneCall,
  SlidersHorizontal,
  Droplets,
  Wind,
  Cpu,
  Mic,
  Volume2,
  VolumeX,
  Bluetooth,
  RefreshCw,
  Waves,
  Building2,
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
import { ModuleTeaser } from '@/components/page/module-teaser'
import { PartnersSection } from '@/components/home/partners-section'
import { HoersituationsCheck } from '@/components/modules/hoersituations-check'
import { FaqJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  alternates: { canonical: '/hoergeraete-bonn-beuel' },
  title: 'Das passende Hörsystem wählen | Westphal Hörgeräte Bonn-Beuel',
  description:
    'Hörgeräte-Ratgeber aus Bonn-Beuel: Bauformen (RIC-Akku, Im-Ohr), Zubehör wie TV-Adapter, App und Seniorentelefon sowie Funktionen wie KI, Richtmikrofon und Auracast, die Ihr Sprachverstehen steigern.',
}

const accessoryCards = [
  {
    icon: Tv,
    title: 'TV-Adapter',
    text: 'Überträgt den Fernsehton direkt in die Hörgeräte und verbessert das Verhältnis von Sprache und Filmmusik.',
  },
  {
    icon: Smartphone,
    title: 'Smartphone-App',
    text: 'Wir unterstützen Sie gern bei der Installation der passenden Hersteller-Apps zur Steuerung Ihrer Hörsysteme.',
  },
  {
    icon: PhoneCall,
    title: 'Seniorentelefon mit Notruf',
    text: 'Wir empfehlen das Emporia Smart 6: mit Notrufknopf und direkter Verbindung zum Hörgerät. Bei uns im Fachgeschäft testen und bestellen.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Fernbedienung',
    text: 'Einfache Steuerung der Hörgeräte-Einstellungen – eine schöne Alternative, wenn Sie keine App nutzen möchten.',
  },
  {
    icon: Droplets,
    title: 'Reinigungs- & Pflegeprodukte',
    text: 'Für eine hygienische Pflege der Hörgeräte. Die Reinigung kann von System zu System abweichen – wir beraten Sie gern.',
  },
  {
    icon: Wind,
    title: 'Trockenstation',
    text: 'Bei starkem Schwitzen empfehlen wir, die Hörsysteme regelmäßig in die Trockenstation zu legen.',
  },
]

const featureCards = [
  {
    icon: Cpu,
    title: 'KI-Auswertung',
    text: 'Ein zweiter Prozessor mit über 2 Millionen gespeicherten Klangbeispielen analysiert Störgeräusche detaillierter und reduziert sie gezielt.',
  },
  {
    icon: Mic,
    title: 'Richtmikrofon',
    text: 'Fokussiert sich auf eine bestimmte Schallquelle, sodass Sie die dominante Sprache besser verstehen.',
  },
  {
    icon: Volume2,
    title: 'Sprachanhebung',
    text: 'Hebt die Sprachanteile im Störgeräusch automatisch an.',
  },
  {
    icon: VolumeX,
    title: 'Störgeräuschreduzierung',
    text: 'Unerwünschte Geräusche wie Stimmengewirr, Wind oder Verkehrslärm werden reduziert.',
  },
  {
    icon: Bluetooth,
    title: 'Bluetooth Low Energy „Auracast“',
    text: 'Ermöglicht die drahtlose Verbindung mit Smartphone, Fernseher und weiteren Geräten – und künftig bessere Durchsagen in Kirchen, Museen und Bahnhöfen.',
  },
  {
    icon: RefreshCw,
    title: 'Binaurale Synchronisation',
    text: 'Die Hörgeräte gleichen sich untereinander ab und ermöglichen so eine optimale Sprachfokussierung.',
  },
  {
    icon: Waves,
    title: 'Tinnitus-Therapie',
    text: 'Integrierte Funktionen können helfen, Tinnitus-Symptome zu lindern.',
  },
  {
    icon: Building2,
    title: 'Hallreduzierung',
    text: 'Besonders vorteilhaft in Kirchen, großen Räumen und Wohnungen mit starker akustischer Schallreflektion.',
  },
]

const ricFeatures = [
  'Konnektivität mit Smartphone und TV',
  'neueste Bluetooth-Generation „Auracast“',
  'energieeffiziente Verbindung mit Smartphone oder Fernseher',
  'künftig bessere Durchsagen in Kirchen, Museen und Bahnhöfen',
  'komfortabel als Akku-Modell erhältlich',
]

const idoFeatures = [
  'besonders diskrete Mini-Hörgeräte',
  'einfache Handhabung beim Einsetzen, auch als Akku-Modell',
  'eigene Stimme anfangs oft gewöhnungsbedürftig',
  'Zubehör und Konnektivität teilweise eingeschränkt',
]

const faqs = [
  {
    question: 'Wie lange hält die Batterie meines Hörgeräts?',
    answer:
      'Bei heutiger Nutzung und technischem Fortschritt liegt die Batterielaufzeit zwischen 3 und 12 Tagen. Wer zusätzlich viel streamen möchte, dem empfehlen wir ein Akku-Hörgerät.',
  },
  {
    question: 'Wie lange hält der Akku meines Hörgerätes?',
    answer:
      'Moderne Akku-Hörgeräte kommen in der Regel gut durch einen ganzen Tag – auch mit Streaming. Über Nacht laden sie im Ladeetui wieder vollständig auf. Die genaue Laufzeit hängt von Modell und Nutzung ab.',
  },
  {
    question: 'Wie schalte ich ein Hörgerät mit Akku aus?',
    answer:
      'Akku-Hörgeräte schalten sich automatisch aus, sobald Sie sie in das Ladeetui legen. Wir zeigen Ihnen die Bedienung Ihres Modells gern in Ruhe im Fachgeschäft.',
  },
  {
    question: 'Kann ich verschiedene Hersteller vergleichen?',
    answer:
      'Ja. Wir beraten herstellerunabhängig und ermöglichen mit unserem Klangwellen-Anpassverfahren einen transparenten, realitätsnahen Vergleich passender Lösungen.',
  },
]

const related = [
  {
    label: 'Klangwellen-Anpassverfahren',
    description: 'Damit Sie alle Funktionen optimal nutzen können.',
    href: '/klangwellen-anpassverfahren',
  },
  {
    label: 'Hörgeräte testen',
    description: '30 Tage kostenlos im echten Alltag ausprobieren.',
    href: '/hoergeraete-testen',
  },
  {
    label: 'Preise & Krankenkasse',
    description: 'Transparente Kosten und Zuschüsse verständlich erklärt.',
    href: '/preise-krankenkasse',
  },
]

export default function HoergeraeteBonnBeuelPage() {
  return (
    <PageShell>
      <FaqJsonLd items={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Startseite', path: '/' },
          { name: 'Das passende Hörsystem wählen', path: '/hoergeraete-bonn-beuel' },
        ]}
      />
      <PageHero
        eyebrow="Hörgeräte-Ratgeber"
        headline="Das passende Hörsystem wählen"
        text="Unser Hörgeräte-Ratgeber gibt Ihnen einen Überblick über Hörgeräte-Typen, Zubehör, Hörhilfen und die Funktionen, die Ihnen ein besseres Sprachverstehen ermöglichen."
        trustLine="Herstellerunabhängige Beratung – ohne Verkaufsdruck."
        image={{
          src: '/images/real/hoergeraet-produkt.png',
          alt: 'Modernes Hinter-dem-Ohr-Hörgerät mit Ladeetui auf einem Tisch bei Westphal Hörgeräte in Bonn-Beuel',
        }}
      />

      <TrustBar />

      <SEOContentBlock
        eyebrow="Orientierung"
        heading="Die verschiedenen Hörgeräte-Typen und Zubehör"
        paragraphs="Es gibt eine Vielzahl von Hörgeräte-Modellen, die sich in Bauform, Technologie und Klangfarbe unterscheiden. Vor Ort unterstützen wir Sie dabei, im Dschungel der verschiedenen Hörgeräte das passende Markenprodukt zu wählen und für die Hörausprobe optimal einzustellen."
      />

      <section className="bg-secondary py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Bauformen
          </p>
          <h2 className="mt-2 max-w-2xl text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            RIC-Akku-Hörsysteme oder Im-Ohr-Hörgeräte?
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm">
              <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary">
                <Ear className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-serif text-xl font-semibold text-card-foreground">
                RIC-Hörsysteme (Receiver-in-Canal)
              </h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                Bewährte, leistungsstarke Akku-Systeme mit moderner
                Konnektivität für viele Hörverluste.
              </p>
              <div className="mt-5">
                <FeatureList items={ricFeatures} />
              </div>
            </div>
            <div className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm">
              <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary">
                <Headphones className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-serif text-xl font-semibold text-card-foreground">
                Im-Ohr-Hörgeräte (IdO)
              </h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                Kleine, diskrete Lösungen, die direkt im Ohr getragen werden –
                interessant, wenn eine möglichst unauffällige Versorgung
                gewünscht ist.
              </p>
              <div className="mt-5">
                <FeatureList items={idoFeatures} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SEOContentBlock
        eyebrow="Zubehör & Hörhilfen"
        heading="Zubehör, das das Sprachverstehen verbessert"
        paragraphs="Zusätzlich zum Hörgerät gibt es eine Reihe von Hörhilfen, die das Sprachverstehen weiter verbessern und Reparaturen reduzieren können:"
      >
        <ServiceCards cards={accessoryCards} columns={3} />
      </SEOContentBlock>

      <SEOContentBlock
        eyebrow="Funktionen"
        heading="Funktionen, die das Sprachverstehen steigern"
        paragraphs="Moderne Hörgeräte bieten viele Funktionen, die Ihr Hörerlebnis verbessern. Je höherwertiger die Technikstufe, desto detaillierter und effektiver arbeiten diese Funktionen – und desto höher ist Ihr Hörkomfort."
        muted
      >
        <ServiceCards cards={featureCards} columns={3} />
      </SEOContentBlock>

      <section className="bg-background pb-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl border border-border bg-card p-6 text-pretty leading-relaxed text-muted-foreground shadow-sm sm:p-7">
            Um diese Funktionen optimal nutzen zu können, arbeiten wir mit
            unserem{' '}
            <Link
              href="/klangwellen-anpassverfahren"
              className="font-semibold text-primary underline underline-offset-4"
            >
              Klangwellen-Anpassverfahren
            </Link>
            . Mehr zur Linderung von Ohrgeräuschen erfahren Sie in unserer{' '}
            <Link
              href="/tinnitusberatung-bonn"
              className="font-semibold text-primary underline underline-offset-4"
            >
              Tinnitusberatung
            </Link>
            .
          </div>
        </div>
      </section>

      <PartnersSection />

      <ModuleTeaser
        id="hoersituations-check"
        eyebrow="Optional"
        title="Hörsituations-Check"
        description="Möchten Sie vorab überlegen, wo Ihnen gutes Hören am wichtigsten ist? Der kurze Check hilft Ihnen dabei – ganz unverbindlich."
        openLabel="Check starten"
      >
        <HoersituationsCheck />
      </ModuleTeaser>

      <FAQAccordion items={faqs} />

      <CTASection
        heading="Lassen Sie sich persönlich zu Hörgeräten beraten"
        text="Vereinbaren Sie einen Termin in Bonn-Beuel. Wir hören zu, erklären verständlich und finden gemeinsam das passende Hörsystem."
        primaryLabel="Termin anfragen"
      />

      <RelatedLinks links={related} />
    </PageShell>
  )
}
