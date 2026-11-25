import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * Echter App-Screen von tonuvio im iPhone-Rahmen.
 * Die Bilder liegen unter /public/images/tonuvio (828 × 1736 px, 2x).
 */
export function PhoneShot({
  src,
  alt,
  className,
  priority = false,
  sizes = '(min-width: 1024px) 320px, 70vw',
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={828}
      height={1736}
      sizes={sizes}
      priority={priority}
      className={cn(
        'h-auto w-full select-none drop-shadow-[0_28px_36px_rgba(32,29,23,0.18)]',
        className,
      )}
    />
  )
}
