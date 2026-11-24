import { HandHeart, Scale, BadgeCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const cards: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: HandHeart,
    title: 'Persönlich',
    text: 'Inhabergeführte Beratung mit festen Ansprechpartnern statt wechselnder Schnellberatung.',
  },
  {
    icon: Scale,
    title: 'Unabhängig',
    text: 'Wir vergleichen verschiedene Hersteller und empfehlen, was zu Ihrem Höralltag passt.',
  },
  {
    icon: BadgeCheck,
    title: 'Transparent',
    text: 'Wir erklären Preise, Krankenkassenzuschüsse und Unterschiede verständlich.',
  },
]

export function ReasonsSection() {
  return (
    <section id="warum" className="scroll-mt-28 bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-balance text-center font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Warum Westphal Hörgeräte?
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm"
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-accent text-primary">
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-card-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                  {card.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
