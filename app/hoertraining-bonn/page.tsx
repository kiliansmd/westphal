import type { Metadata } from 'next'
import { Info, Check } from 'lucide-react'
import { PageShell } from '@/components/page/page-shell'
import { PageHero } from '@/components/page/page-hero'
import { SEOContentBlock } from '@/components/page/seo-content-block'
import { ServiceCards } from '@/components/page/service-cards'
import { FAQAccordion } from '@/components/page/faq-accordion'
import { CTASection } from '@/components/page/cta-section'
import { TrustBar } from '@/components/page/trust-bar'
import { RelatedLinks } from '@/components/page/related-links'
import { HoertrainingDemo } from '@/components/modules/hoertraining-demo'
import Link from 'next/link'
import { PhoneShot } from '@/components/tonuvio/phone-shot'
import { BreadcrumbJsonLd, FaqJsonLd } from '@/components/seo/json-ld'
import {
  hoertrainingWhenCards,
  hoertrainingProcess,
  hoertrainingIndependencePoints,
  hoertrainingFaqs,
  hoertrainingRelated,
} from '@/lib/site-data'

export const metadata: Metadata = {
  alternates: { canonical: '/hoertraining-bonn' },
  title: 'Hörtraining in Bonn-Beuel | Mini-Hörübung erleben',
  description:
    'Erleben Sie mit einer interaktiven Mini-Hörübung, warum Verstehen im Zusammenspiel aus Ohr, Hörgerät und Gehirn entsteht. Westphal Hörgeräte berät unabhängig zum Hörtraining in Bonn-Beuel.',
}

export default function HoertrainingBonnPage() {
  return (
    <PageShell>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Hörtraining', path: '/hoertraining-bonn' },
        ]}
      />
      <FaqJsonLd items={hoertrainingFaqs} />

      <PageHero
        eyebrow="Neu · Hörtraining Bonn"
        headline="Hörtraining in Bonn-Beuel"
        text="Wenn Hören anstrengend wird, liegt es nicht immer nur am Ohr. Auch das Gehirn muss Sprache, Geräusche und neue Höreindrücke wieder sicher einordnen. Wir beraten unabhängig, ob Hörtraining für Ihre Situation sinnvoll ist."
        trustLine="Unabhängige Beratung · Einfache Orientierung · Ergänzend zur Hörgeräteanpassung"
        ctas={[
          {
            label: 'Hörtraining-Beratung anfragen',
            href: '/kontakt?anliegen=Hörtraining',
          },
          { label: 'Mini-Hörübung starten', href: '#uebung' },
        ]}
        image={{
          src: '/images/real/hoersituation-tablet.webp',
          alt: 'Hörakustiker zeigt einer Kundin am Tablet verschiedene Hörsituationen bei Westphal Hörgeräte in Bonn-Beuel',
        }}
      />

      <TrustBar />

      <SEOContentBlock
        eyebrow="Warum Hörtraining"
        heading="Hören muss manchmal wieder gelernt werden"
        paragraphs={[
          'Wer über längere Zeit schlechter hört, nimmt bestimmte Klänge, Sprachanteile und Geräusche nur noch eingeschränkt wahr. Das Gehirn verarbeitet diese Eindrücke mit der Zeit weniger aktiv. Wird später ein Hörgerät angepasst, kommen plötzlich wieder viele neue Signale an. Das kann ungewohnt, laut oder anstrengend wirken.',
          'Hörtraining kann helfen, diese Höreindrücke bewusster wahrzunehmen, Sprache besser aus Hintergrundgeräuschen herauszufiltern und sich schrittweise an das neue Hören zu gewöhnen.',
        ]}
      >
        <div className="flex items-start gap-4 border-l-2 border-brand pl-6">
          <Info className="mt-0.5 size-7 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-base leading-relaxed text-muted-foreground">
            Hörtraining ersetzt keinen Hörtest und keine medizinische Abklärung.
            Es kann aber eine sinnvolle Ergänzung sein, wenn Sprache trotz
            Hörgerät schwer verständlich bleibt oder neue Höreindrücke
            anstrengend wirken.
          </p>
        </div>
      </SEOContentBlock>

      {/* Interaktive Mini-Hörübung */}
      <section id="uebung" className="scroll-mt-24 bg-secondary py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-balance font-serif text-3xl font-medium leading-[1.12] text-foreground sm:text-[2.6rem]">
            Hörverstehen erleben – in 60 bis 90 Sekunden
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Diese kleine Demo zeigt, warum Sprache im Störgeräusch schwieriger
            wird und warum gezieltes Training hilfreich sein kann. Keine
            Diagnose, keine Speicherung – nur eine ruhige Orientierung.
          </p>

          <div className="mt-8">
            <HoertrainingDemo />
          </div>
        </div>
      </section>

      <SEOContentBlock
        eyebrow="Einordnung"
        heading="Was die Übung zeigt"
        paragraphs={[
          'Viele Menschen bemerken ihren Hörverlust nicht zuerst in ruhiger Umgebung, sondern in anspruchsvollen Alltagssituationen: Gespräche in Gruppen, Hintergrundgeräusche, Telefonate, Fernsehen oder ähnliche Wörter. Genau dort muss das Gehirn Sprache erkennen, filtern und einordnen.',
          'Hörtraining setzt an dieser Hörverarbeitung an. Es kann die Eingewöhnung in Hörgeräte unterstützen und helfen, bewusster mit neuen Höreindrücken umzugehen.',
        ]}
      />

      <SEOContentBlock
        eyebrow="Für wen"
        heading="Wann kann Hörtraining helfen?"
        muted
      >
        <ServiceCards cards={hoertrainingWhenCards} columns={3} />
      </SEOContentBlock>

      {/* Unabhängige Beratung */}
      <section className="bg-background py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="text-balance font-serif text-3xl font-medium leading-[1.12] text-foreground sm:text-[2.6rem]">
                Wir beraten unabhängig zu Hörtraining
              </h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                Es gibt unterschiedliche Formen von Hörtraining: klassische
                Übungen, digitale Trainings, App-basierte Programme, begleitete
                Konzepte oder individuelle Ansätze im Rahmen der
                Hörgeräteanpassung. Nicht jedes Angebot passt zu jeder Person.
              </p>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                Entscheidend ist nicht ein bestimmtes Programm, sondern Ihre
                Hörsituation: Wie lange bestehen die Schwierigkeiten? Tragen Sie
                bereits Hörgeräte? Sind die Geräte gut eingestellt? Gibt es
                Tinnitus? In welchen Situationen fällt Verstehen besonders
                schwer?
              </p>
            </div>

            <ul className="grid content-start gap-3 border-t-2 border-foreground pt-6 sm:p-8">
              {hoertrainingIndependencePoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="text-base leading-relaxed text-foreground">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Ablauf der Beratung */}
      <section className="bg-secondary py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-balance font-serif text-3xl font-medium leading-[1.12] text-foreground sm:text-[2.6rem]">
            So beraten wir Sie zum Hörtraining
          </h2>

          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hoertrainingProcess.map((item, index) => (
              <li
                key={item.title}
                className="flex flex-col border-t-2 border-foreground pt-6"
              >
                <span className="font-serif text-3xl text-brand-deep" aria-hidden="true">
                  {index + 1}
                </span>
                <h3 className="font-serif text-2xl font-medium leading-snug text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Eigenes Angebot: Übungs-App tonuvio (bewusst ohne Bezug zur Versorgung) */}
      <section className="overflow-hidden bg-[#3B5142] py-14 text-white sm:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <div>
            <p className="text-base font-semibold text-brand-soft">Neu bei uns</p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-medium leading-[1.12] text-white sm:text-[2.6rem]">
              Zuhause üben mit tonuvio
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-white/85">
              Unsere Übungs-App für das Verstehen von Sprache im Alltag: kurze
              Einheiten mit Alltagssätzen für Restaurant, Telefon und Familie. Mit
              oder ohne Hörsystem nutzbar, kein Medizinprodukt.
            </p>
            <Link
              href="/tonuvio"
              className="mt-7 inline-flex min-h-11 items-center text-lg font-semibold text-white underline decoration-brand decoration-2 underline-offset-[6px] hover:decoration-white"
            >
              tonuvio kennenlernen
            </Link>
          </div>
          <div className="mx-auto w-full max-w-[220px]">
            <PhoneShot
              src="/images/tonuvio/training-hoeren.webp"
              alt="tonuvio auf dem iPhone: Übung mit Wiedergabe-Schaltfläche und vier Antwortmöglichkeiten."
              sizes="220px"
            />
          </div>
        </div>
      </section>

      <FAQAccordion items={hoertrainingFaqs} />

      <CTASection
        heading="Möchten Sie wissen, ob Hörtraining für Sie sinnvoll ist?"
        text="Wir beraten Sie unabhängig, ruhig und verständlich. Gemeinsam prüfen wir, ob Hörtraining, eine Nachjustierung, ein Hörtest oder eine neue Hörgeräteanpassung der passende nächste Schritt ist."
        primaryLabel="Hörtraining-Beratung anfragen"
      />

      <RelatedLinks links={hoertrainingRelated} />
    </PageShell>
  )
}
