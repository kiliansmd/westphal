import { ArrowUpRight } from 'lucide-react'
import { GoogleReviews } from '@/components/home/google-reviews'
import { company } from '@/lib/site-data'
import { Reveal } from '@/components/motion'

const googleHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${company.name} ${company.street} ${company.city}`,
)}`

export function ReviewsSection() {
  return (
    <section className="border-t border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 border-b border-foreground/15 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-balance font-serif text-4xl font-medium leading-[1.1] text-foreground sm:text-5xl">
              Was unsere Kundinnen und Kunden sagen
            </h2>
            <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              Bewertungen aus Bonn-Beuel und Umgebung, direkt von Google.
            </p>
          </div>

          <div className="flex flex-wrap items-end gap-x-6 gap-y-3">
            <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-serif text-6xl leading-none text-foreground">
                {company.rating}
              </span>
              <span className="text-xl tracking-[0.15em] text-brand" aria-hidden="true">
                ★★★★★
              </span>
              <span className="sr-only">von 5 Sternen bei Google</span>
            </p>
            <a
              href={googleHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 text-lg font-semibold whitespace-nowrap text-foreground underline decoration-brand decoration-2 underline-offset-[6px] hover:decoration-foreground"
            >
              Auf Google lesen
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <Reveal className="mt-10">
          <GoogleReviews href={googleHref} />
        </Reveal>
      </div>
    </section>
  )
}
