import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export function FeatureList({
  items,
  columns = 1,
}: {
  items: string[]
  columns?: 1 | 2
}) {
  return (
    <ul
      className={cn(
        'grid gap-3',
        columns === 2 ? 'sm:grid-cols-2' : 'grid-cols-1',
      )}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
            aria-hidden="true"
          >
            <Check className="size-3.5" />
          </span>
          <span className="text-base leading-relaxed text-foreground/90">
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}
