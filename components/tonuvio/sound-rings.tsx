import { cn } from '@/lib/utils'

/**
 * Dekorative Klangwellen: drei konzentrische Ringe, die einmal ruhig nach
 * außen laufen (gesamt ca. 5 Sekunden, WCAG 2.2.2). Rein visuell (aria-hidden).
 */
export function SoundRings({
  className,
  tone = 'brand',
}: {
  className?: string
  tone?: 'brand' | 'light'
}) {
  const color = tone === 'light' ? 'border-white/30' : 'border-brand/45'
  return (
    <div aria-hidden="true" className={cn('pointer-events-none absolute grid place-items-center', className)}>
      {[0, 600, 1200].map((delay) => (
        <span
          key={delay}
          className={cn('tv-ring absolute aspect-square w-full rounded-full border-2', color)}
          style={{ ['--d' as string]: `${delay}ms` }}
        />
      ))}
    </div>
  )
}
