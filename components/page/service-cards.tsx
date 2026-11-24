import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export type ServiceCard = {
  /** Kept for data compatibility; the redesign deliberately shows no icons. */
  icon?: LucideIcon
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
  return (
    <div
      className={cn(
        'grid gap-x-12',
        columns === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2',
      )}
    >
      {cards.map((card) => (
        <div key={card.title} className="border-t border-foreground/15 py-7">
          <h3 className="font-serif text-2xl font-medium leading-snug text-foreground">
            {card.title}
          </h3>
          <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
            {card.text}
          </p>
        </div>
      ))}
    </div>
  )
}
