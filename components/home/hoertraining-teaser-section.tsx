import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const chain = ['Ohr', 'Hörgerät', 'Gehirn']

export function HoertrainingTeaserSection() {
  return (
    <section className="bg-foreground py-20 text-background sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-base font-semibold text-brand">Neu bei uns</p>
          <h2 className="mt-3 text-balance font-serif text-4xl font-medium leading-[1.1] sm:text-5xl">
            Hörtraining erleben
          </h2>
          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-background/75">
            Machen Sie eine kurze Mini-Hörübung und erfahren Sie, warum gutes
            Verstehen nicht nur im Ohr, sondern auch im Gehirn entsteht – ganz
            ohne Diagnose und ohne Speicherung.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <Link
              href="/hoertraining-bonn#uebung"
              className={cn(buttonVariants({ size: 'lg' }), 'w-full sm:w-auto')}
            >
              Mini-Hörübung starten
            </Link>
            <Link
              href="/hoertraining-bonn"
              className="inline-flex min-h-11 items-center gap-2 text-lg font-semibold text-background underline decoration-background/40 decoration-2 underline-offset-[6px] hover:decoration-brand"
            >
              Mehr über Hörtraining
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Ohr → Hörgerät → Gehirn, set as type rather than icons */}
        <div className="border-t border-background/20 pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
          <p className="text-base text-background/60">
            Verstehen entsteht im Zusammenspiel
          </p>
          <ol className="mt-6 space-y-1">
            {chain.map((label, index) => (
              <li
                key={label}
                className="flex items-baseline gap-5 font-serif text-5xl font-normal leading-tight sm:text-6xl"
              >
                <span className="w-8 text-xl text-brand" aria-hidden="true">
                  {index === 0 ? '' : '→'}
                </span>
                <span className={index === chain.length - 1 ? 'italic' : undefined}>
                  {label}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
