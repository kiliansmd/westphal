'use client'

import { useState, type ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

type ModuleTeaserProps = {
  id?: string
  eyebrow?: string
  title: string
  description: string
  openLabel: string
  children: ReactNode
  /** Muted background for alternating section rhythm. */
  muted?: boolean
}

/**
 * A calm, optional interactive module. It shows a short teaser and reveals the
 * actual interactive content only after the user chooses to open it — so pages
 * are not dominated by decision helpers.
 */
export function ModuleTeaser({
  id,
  eyebrow,
  title,
  description,
  openLabel,
  children,
  muted = false,
}: ModuleTeaserProps) {
  const [open, setOpen] = useState(false)
  const panelId = `${id ?? 'module'}-panel`

  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-24 py-14 sm:py-16',
        muted ? 'bg-secondary' : 'bg-background',
      )}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-card-foreground sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>

          {!open && (
            <button
              type="button"
              aria-expanded={false}
              aria-controls={panelId}
              onClick={() => setOpen(true)}
              className="mt-5 inline-flex items-center gap-2 text-lg font-semibold text-primary underline underline-offset-4 hover:no-underline"
            >
              {openLabel}
              <ChevronDown className="size-5" aria-hidden="true" />
            </button>
          )}

          {open && (
            <div id={panelId} className="mt-6">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
