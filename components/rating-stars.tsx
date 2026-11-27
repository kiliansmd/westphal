import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Fünf gefüllte Sterne aus derselben Icon-Familie wie der Rest der Seite
 * (statt Unicode-Zeichen, die je nach Schrift unterschiedlich aussehen).
 * Rein dekorativ: Die Bewertung selbst steht immer als Text daneben.
 */
export function RatingStars({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex gap-1 text-brand', className)} aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className="size-[1em] fill-current" strokeWidth={1.5} />
      ))}
    </span>
  )
}
