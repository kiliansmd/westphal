import Link from 'next/link'
import Image from 'next/image'
import { CalendarCheck, PhoneCall } from 'lucide-react'
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
  const content = (
    <>
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">
        {eyebrow}
      </p>
      <h1 className="mt-3 max-w-3xl text-balance font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
        {headline}
      </h1>
      <p className="mt-5 max-w-2xl text-pretty text-xl leading-relaxed text-muted-foreground">
        {text}
      </p>
      {trustLine && (
        <p className="mt-4 text-base font-medium text-foreground">{trustLine}</p>
      )}
      {ctas.length > 0 && (
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          {ctas.map((cta, index) => (
            <Link
              key={cta.label}
              href={cta.href}
              className={cn(
                buttonVariants({
                  variant: cta.variant ?? (index === 0 ? 'default' : 'outline'),
                  size: 'lg',
                }),
                'w-full sm:w-auto',
              )}
            >
              {index === 0 ? (
                <CalendarCheck aria-hidden="true" />
              ) : (
                <PhoneCall aria-hidden="true" />
              )}
              {cta.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )

  return (
    <section className="overflow-x-clip border-b border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        {image ? (
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>{content}</div>
            <div className="relative">
              <div
                className="absolute -inset-3 -z-10 rounded-[2rem] bg-sand sm:-inset-4"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ring-1 ring-border">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 40rem, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        ) : (
          content
        )}
      </div>
    </section>
  )
}
