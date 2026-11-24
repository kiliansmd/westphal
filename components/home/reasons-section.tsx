import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const principles = [
  {
    title: 'Persönlich',
    text: 'Inhabergeführte Beratung mit festen Ansprechpartnern statt wechselnder Schnellberatung.',
  },
  {
    title: 'Unabhängig',
    text: 'Wir vergleichen verschiedene Hersteller und empfehlen, was zu Ihrem Höralltag passt.',
  },
  {
    title: 'Transparent',
    text: 'Wir erklären Preise, Krankenkassenzuschüsse und Unterschiede verständlich.',
  },
]

export function ReasonsSection() {
  return (
    <section id="warum" className="scroll-mt-28 bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <figure className="lg:sticky lg:top-32 lg:self-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md">
            <Image
              src="/images/real/inhaber-portrait.webp"
              alt="Die Inhaber von Westphal Hörgeräte gemeinsam im Fachgeschäft in Bonn-Beuel"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-base text-muted-foreground">
            Ihre festen Ansprechpartner im Fachgeschäft in Bonn-Beuel
          </figcaption>
        </figure>

        <div className="lg:pt-6">
          <h2 className="text-balance font-serif text-4xl font-medium leading-[1.1] text-foreground sm:text-5xl">
            Ein Meister, der selbst Hörgeräte trägt.
          </h2>
          <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            <p>
              Markus Westphal kennt beide Seiten: die Technik als
              Hörakustikmeister – und den Alltag mit Hörgerät aus eigener
              Erfahrung. Deshalb hören wir erst zu, bevor wir beraten.
            </p>
            <p>
              Seit 2012 in Bonn-Beuel, inhabergeführt und ohne
              Verkaufsdruck. Sie sprechen jedes Mal mit denselben Menschen.
            </p>
          </div>

          <ol className="mt-12 border-t border-foreground/15">
            {principles.map((item, index) => (
              <li
                key={item.title}
                className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-foreground/15 py-6 sm:grid-cols-[3rem_10rem_1fr]"
              >
                <span className="font-serif text-xl text-brand-deep" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="col-start-2 mt-1 text-lg leading-relaxed text-muted-foreground sm:col-start-3 sm:mt-0">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>

          <Link
            href="/warum-westphal"
            className="mt-10 inline-flex items-center gap-2 text-lg font-semibold text-foreground underline decoration-brand decoration-2 underline-offset-[6px] hover:decoration-foreground"
          >
            Mehr über uns und unser Team
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
