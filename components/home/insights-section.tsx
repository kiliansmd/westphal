import { Camera, ArrowUpRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { InstagramFeed } from '@/components/home/instagram-feed'
import { cn } from '@/lib/utils'

export function InsightsSection() {
  return (
    <section className="bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Einblicke
            </p>
            <h2 className="mt-2 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Einblicke aus unserem Fachgeschäft in Bonn-Beuel
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Auf Instagram zeigen wir Einblicke aus dem Alltag, Wissenswertes
              rund ums Hören, Gehörschutz, Tinnitus und moderne Hörtechnik.
            </p>
          </div>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'h-12 shrink-0 px-6 text-base',
            )}
          >
            <Camera className="size-5" aria-hidden="true" />
            Auf Instagram ansehen
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-10">
          <InstagramFeed />
        </div>
      </div>
    </section>
  )
}
