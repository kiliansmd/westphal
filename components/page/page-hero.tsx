import Link from 'next/link'
import Image from 'next/image'
import { CalendarCheck } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export type HeroCta = {
  label: string
  href: string
  variant?: 'default' | 'outline'
}

export type HeroImage = {
  src: string
  alt: string
}

type PageHeroProps = {
  eyebrow: string
  headline: string
  text: string
  /** One short trust/context line shown under the intro (max. one line). */
  trustLine?: string
  ctas?: HeroCta[]
  /** Optional photo shown beside the intro on larger screens. */
  image?: HeroImage
}

/** Global default: primary "Termin anfragen", secondary "Rückruf wünschen". */
const defaultCtas: HeroCta[] = [
  { label: 'Termin anfragen', href: '/kontakt' },
  { label: 'Rückruf wünschen', href: '/kontakt?anliegen=Rückrufwunsch' },
]

export function PageHero({
  eyebrow,
  headline,
  text,
  trustLine,
  ctas = defaultCtas,
  image,
}: PageHeroProps) {
  const [primary, ...secondary] = ctas

  const content = (
    <>
      <p className="ws-rise text-base font-medium text-muted-foreground">{eyebrow}</p>
      <h1 className="mt-4 max-w-3xl text-balance break-words hyphens-auto sm:hyphens-manual font-serif text-[2.1rem] font-medium leading-[1.08] text-foreground sm:text-5xl lg:text-[3.3rem]">
        {headline}
      </h1>
      <p className="ws-rise mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl" style={{ ['--d' as string]: '120ms' }}>
        {text}
      </p>
      {trustLine && (
        <p className="ws-rise mt-4 text-base text-muted-foreground" style={{ ['--d' as string]: '180ms' }}>{trustLine}</p>
      )}
      {primary && (
        <div className="ws-rise mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8" style={{ ['--d' as string]: '240ms' }}>
          <Link
            href={primary.href}
            className={cn(
              buttonVariants({ variant: primary.variant ?? 'default', size: 'lg' }),
              'w-full sm:w-auto',
            )}
          >
            <CalendarCheck aria-hidden="true" />
            {primary.label}
          </Link>
          {secondary.map((cta) => (
            <Link key={cta.label} href={cta.href} className="link-accent text-lg">
              {cta.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )

  return (
    <section className="border-b border-border bg-background">
      {image ? (
        <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-[1fr_1fr]">
          <div className="relative aspect-[4/3] overflow-hidden lg:order-2 lg:aspect-auto lg:min-h-[540px] lg:overflow-visible">
            <div className="absolute inset-0 overflow-hidden lg:-right-[max(0px,calc((100vw-72rem)/2))]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="ws-settle object-cover"
                priority
              />
            </div>
          </div>
          <div className="flex min-w-0 flex-col justify-center px-4 py-10 sm:px-6 lg:order-1 lg:py-20 lg:pr-14">
            {content}
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
          {content}
        </div>
      )}
    </section>
  )
}
