import Link from 'next/link'
import Image from 'next/image'
import { CalendarCheck } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { company } from '@/lib/site-data'

const facts = [
  { value: '2012', label: 'in Bonn-Beuel' },
  { value: `${company.rating}`, label: 'bei Google' },
  { value: '30 Tage', label: 'Probetragen' },
]

export function Hero() {
  return (
    <section className="relative border-b border-border bg-background">
      <div className="mx-auto grid max-w-6xl lg:grid-cols-[1fr_1.05fr]">
        {/* Photo — first on mobile so a real face greets the visitor, bleeding
            to the right edge of the viewport on desktop. */}
        <div className="relative aspect-[4/3] lg:order-2 lg:aspect-auto lg:min-h-[620px]">
          <div className="absolute inset-0 lg:-right-[max(0px,calc((100vw-72rem)/2))] lg:left-0">
            <Image
              src="/images/real/inhaber-beratung-hero.webp"
              alt="Das Team von Westphal Hörgeräte berät eine lachende Kundin, die ein modernes Hörgerät in der Hand hält, im Fachgeschäft in Bonn-Beuel"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-[50%_35%]"
            />
          </div>
        </div>

        {/* Copy */}
        <div className="flex flex-col justify-center px-4 py-10 sm:px-6 lg:order-1 lg:py-20 lg:pr-14">
          <p className="text-base font-medium text-muted-foreground">
            Hörakustik-Meisterbetrieb in Bonn-Beuel
          </p>

          <h1 className="mt-4 text-balance font-serif text-[2.4rem] font-medium leading-[1.08] text-foreground sm:text-5xl lg:text-[3.6rem] lg:leading-[1.04]">
            Wieder klar hören.{' '}
            <em className="font-normal">Ohne Verkaufsdruck.</em>
          </h1>

          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Wir nehmen uns Zeit, erklären verständlich und passen Hörsysteme so
            an, dass sie zu Ihrem Alltag passen.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Link
              href="/kontakt"
              className={cn(buttonVariants({ size: 'lg' }), 'w-full sm:w-auto')}
            >
              <CalendarCheck aria-hidden="true" />
              Termin anfragen
            </Link>
            <p className="text-lg text-muted-foreground">
              oder anrufen:{' '}
              <a
                href={company.phoneHref}
                className="font-semibold whitespace-nowrap text-foreground underline decoration-brand decoration-2 underline-offset-4 hover:decoration-foreground"
              >
                {company.phone}
              </a>
            </p>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 border-t border-foreground/15 pt-6">
            {facts.map((fact) => (
              <div key={fact.label} className="flex flex-col-reverse">
                <dt className="mt-2 text-base text-muted-foreground">
                  {fact.label}
                </dt>
                <dd className="font-serif text-3xl font-medium leading-none text-foreground">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
