'use client'

import Link from 'next/link'
import { Phone, CalendarCheck, PersonStanding } from 'lucide-react'
import { company } from '@/lib/site-data'
import { A11Y_TOGGLE_EVENT } from '@/components/accessibility-menu'

export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur xl:hidden">
      <div className="grid grid-cols-[1fr_1fr_auto] gap-2 px-3 py-2.5">
        <a
          href={company.phoneHref}
          className="flex h-12 items-center justify-center gap-2 rounded-lg border-2 border-border bg-background text-base font-semibold text-foreground"
        >
          <Phone className="size-5 shrink-0 text-primary" aria-hidden="true" />
          Anrufen
        </a>
        <Link
          href="/kontakt"
          className="flex h-12 items-center justify-center gap-2 rounded-lg bg-brand text-base font-semibold text-brand-foreground"
        >
          <CalendarCheck className="size-5 shrink-0" aria-hidden="true" />
          Termin
        </Link>
        <button
          type="button"
          data-a11y-toggle
          onClick={() => window.dispatchEvent(new Event(A11Y_TOGGLE_EVENT))}
          aria-label="Bedienungshilfen öffnen"
          className="flex size-12 items-center justify-center rounded-lg border-2 border-border bg-background text-foreground"
        >
          <PersonStanding className="size-6" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
