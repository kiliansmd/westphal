'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { hearingSituations } from '@/lib/site-data'

export function HoersituationsCheck() {
  const [selected, setSelected] = useState<string | null>(null)

  const active = hearingSituations.find((s) => s.label === selected) ?? null

  function toggle(label: string) {
    setSelected((prev) => (prev === label ? null : label))
  }

  return (
    <div>
      <h3 className="font-serif text-xl font-semibold text-card-foreground sm:text-2xl">
        Wo möchten Sie besser hören?
      </h3>
      <p className="mt-1 text-muted-foreground">
        Tippen Sie eine Situation an – Sie erfahren kurz, wie wir Sie dabei
        unterstützen.
      </p>

      <div
        role="group"
        aria-label="Hörsituationen"
        className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3"
      >
        {hearingSituations.map((situation) => {
          const isSelected = selected === situation.label
          const Icon = situation.icon
          return (
            <button
              key={situation.label}
              type="button"
              aria-pressed={isSelected}
              onClick={() => toggle(situation.label)}
              className={cn(
                'flex min-h-28 flex-col items-center justify-center gap-3 rounded-xl border p-4 text-center text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40',
                isSelected
                  ? 'border-primary bg-accent text-accent-foreground'
                  : 'border-border bg-background text-foreground hover:border-primary/50 hover:bg-muted/50',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'flex size-12 items-center justify-center rounded-full',
                  isSelected
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-primary',
                )}
              >
                <Icon className="size-6" />
              </span>
              {situation.label}
            </button>
          )
        })}
      </div>

      <div aria-live="polite">
        {active && (
          <div className="mt-6 border-l-2 border-brand pl-5">
            <p className="text-base font-semibold text-foreground">
              {active.label}
            </p>
            <p className="mt-1 leading-relaxed text-muted-foreground">
              {active.text}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
