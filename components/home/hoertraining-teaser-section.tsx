import Link from 'next/link'
import { ArrowRight, AudioLines, Brain, Ear, Sparkles } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const chain = [
  { icon: Ear, label: 'Ohr' },
  { icon: AudioLines, label: 'Hörgerät' },
  { icon: Brain, label: 'Gehirn' },
]

export function HoertrainingTeaserSection() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-primary/30 bg-card shadow-sm ring-1 ring-primary/10">
          <div className="grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:gap-14">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                <Sparkles className="size-4" aria-hidden="true" />
                Neu · interaktiv
              </span>
              <h2 className="mt-4 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Hörtraining erleben
              </h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                Machen Sie eine kurze Mini-Hörübung und erfahren Sie, warum gutes
                Verstehen nicht nur im Ohr, sondern auch im Gehirn entsteht –
                ganz ohne Diagnose und ohne Speicherung.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/hoertraining-bonn#uebung"
                  className={cn(buttonVariants({ size: 'lg' }), 'w-full sm:w-auto')}
                >
                  <AudioLines aria-hidden="true" />
                  Mini-Hörübung starten
                </Link>
                <Link
                  href="/hoertraining-bonn"
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'w-full sm:w-auto',
                  )}
                >
                  Mehr über Hörtraining
                  <ArrowRight className="size-5" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Ohr → Hörgerät → Gehirn */}
            <div className="rounded-2xl border border-border bg-secondary p-6 sm:p-8">
              <p className="text-center text-sm font-semibold uppercase tracking-wide text-primary">
                Verstehen entsteht im Zusammenspiel
              </p>
              <div className="mt-6 flex items-center justify-center gap-3 sm:gap-5">
                {chain.map((node, index) => {
                  const Icon = node.icon
                  return (
                    <div key={node.label} className="flex items-center gap-3 sm:gap-5">
                      <div className="flex flex-col items-center gap-2">
                        <span className="flex size-14 items-center justify-center rounded-2xl bg-card text-primary shadow-sm ring-1 ring-border sm:size-16">
                          <Icon className="size-7 sm:size-8" aria-hidden="true" />
                        </span>
                        <span className="text-sm font-medium text-foreground">
                          {node.label}
                        </span>
                      </div>
                      {index < chain.length - 1 && (
                        <ArrowRight
                          className="size-5 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
