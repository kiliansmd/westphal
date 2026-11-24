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
        'scroll-mt-28 border-b border-border py-16 sm:py-20',
        muted ? 'bg-secondary' : 'bg-background',
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-20">
          <div>
            {eyebrow && (
              <p className="text-base font-medium text-muted-foreground">{eyebrow}</p>
            )}
            <h2 className="mt-2 text-balance font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
              {title}
            </h2>
          </div>
          <div>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
            {!open && (
              <button
                type="button"
                aria-expanded={false}
                aria-controls={panelId}
                onClick={() => setOpen(true)}
                className="link-accent mt-5 inline-flex items-center gap-2 text-lg"
              >
                {openLabel}
                <ChevronDown className="size-5" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        {open && (
          <div id={panelId} className="mt-10 border-t border-border pt-10">
            {children}
          </div>
        )}
      </div>
    </section>
  )
}
