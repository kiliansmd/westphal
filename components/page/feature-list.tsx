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
        'grid gap-x-12 border-t border-foreground/15',
        columns === 2 ? 'sm:grid-cols-2' : 'grid-cols-1',
      )}
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-baseline gap-4 border-b border-foreground/15 py-4"
        >
          <span className="h-0.5 w-4 shrink-0 -translate-y-1 bg-brand" aria-hidden="true" />
          <span className="text-lg leading-relaxed text-foreground">{item}</span>
        </li>
      ))}
    </ul>
  )
}
