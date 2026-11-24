import { Check } from 'lucide-react'
import { trustPoints } from '@/lib/site-data'

export function TrustBar({ points = trustPoints }: { points?: string[] }) {
  return (
    <section className="border-y border-border bg-sand">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-center gap-2 text-sm font-medium text-foreground sm:text-base"
            >
              <Check className="size-5 shrink-0 text-primary" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
