import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/motion'

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
      {cards.map((card, index) => (
        <Reveal
          key={card.title}
          delay={(index % (columns === 3 ? 3 : 2)) * 110}
          className="group relative border-t border-foreground/15 py-7"
        >
          {/* Markenstrich wächst beim Überfahren über die Trennlinie. */}
          <span
            className="absolute -top-px left-0 h-0.5 w-full origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100"
            aria-hidden="true"
          />
          <h3 className="font-serif text-2xl font-medium leading-snug text-foreground">
            {card.title}
          </h3>
          <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
            {card.text}
          </p>
        </Reveal>
      ))}
    </div>
  )
}
