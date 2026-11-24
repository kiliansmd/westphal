import type { LucideIcon } from 'lucide-react'

export type ServiceCard = {
  icon: LucideIcon
  title: string
  text: string
}

export function ServiceCards({
  cards,
  columns = 2,
}: {
  cards: ServiceCard[]
  columns?: 2 | 3
}) {
  const gridCols =
    columns === 3
      ? 'sm:grid-cols-2 lg:grid-cols-3'
      : 'sm:grid-cols-2'

  return (
    <div className={`grid gap-5 ${gridCols}`}>
      {cards.map((card) => {
        const Icon = card.icon
        return (
          <div
            key={card.title}
            className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/40"
          >
            <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary">
              <Icon className="size-6" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-lg font-semibold leading-snug text-card-foreground">
              {card.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {card.text}
            </p>
          </div>
        )
      })}
    </div>
  )
}
