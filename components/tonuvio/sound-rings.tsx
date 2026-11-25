import { cn } from '@/lib/utils'

/**
 * Dekorative Klangwellen: drei konzentrische Ringe, die langsam nach außen
 * laufen. Rein visuell (aria-hidden) und bei „Bewegung reduzieren“ aus.
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
      {[0, 1600, 3200].map((delay) => (
        <span
          key={delay}
          className={cn('tv-ring absolute aspect-square w-full rounded-full border-2', color)}
          style={{ ['--d' as string]: `${delay}ms` }}
        />
      ))}
    </div>
  )
}
