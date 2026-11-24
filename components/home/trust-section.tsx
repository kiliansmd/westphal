import Link from 'next/link'
import { Star, CalendarCheck } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { company } from '@/lib/site-data'

const points = [
  `${company.rating} ★ Google-Bewertung`,
  'Seit 2012 in Bonn-Beuel',
  'Persönlich · unabhängig · kompetent',
]

export function TrustSection() {
  return (
    <section className="bg-primary py-16 text-primary-foreground sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div className="flex items-center justify-center gap-1" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-7 fill-amber-300 text-amber-300" />
          ))}
        </div>
        <h2 className="mt-6 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Vertrauen entsteht durch gute Beratung
        </h2>

        <ul className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-x-3 gap-y-3 text-lg font-medium">
          {points.map((point) => (
            <li
              key={point}
              className="rounded-full bg-primary-foreground/10 px-4 py-2"
            >
              {point}
            </li>
          ))}
        </ul>

        <Link
          href="/kontakt"
          className={cn(
            buttonVariants({ size: 'lg' }),
            'mt-8 bg-background text-foreground hover:bg-background/90',
          )}
        >
          <CalendarCheck aria-hidden="true" />
          Termin anfragen
        </Link>
      </div>
    </section>
  )
}
