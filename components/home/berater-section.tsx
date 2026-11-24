'use client'

import { useRef, useState } from 'react'
import { Compass, ChevronDown, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Hoerbedarfsberater } from '@/components/modules/hoerbedarfsberater'

export function BeraterSection() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  function toggle() {
    setOpen((prev) => {
      const nextOpen = !prev
      if (nextOpen) {
        // Reveal, then bring the berater into view for the user.
        window.requestAnimationFrame(() =>
          panelRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          }),
        )
      }
      return nextOpen
    })
  }

  return (
    <section id="berater" className="scroll-mt-28 bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
          <div className="flex flex-col items-center text-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-accent text-primary">
              <Compass className="size-7" aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Unsicher, womit Sie anfangen sollen?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-xl leading-relaxed text-muted-foreground">
              Der kurze Hörbedarfsberater hilft Ihnen bei der ersten
              Orientierung. Er ersetzt keine persönliche Beratung, zeigt aber den
              passenden nächsten Schritt.
            </p>

            <Button
              size="lg"
              onClick={toggle}
              aria-expanded={open}
              aria-controls="berater-panel"
              className="mt-8"
            >
              {open ? (
                <>
                  <X aria-hidden="true" />
                  Berater schließen
                </>
              ) : (
                <>
                  <Compass aria-hidden="true" />
                  Berater starten
                </>
              )}
              {!open && (
                <ChevronDown className="opacity-70" aria-hidden="true" />
              )}
            </Button>
          </div>

          {open && (
            <div
              id="berater-panel"
              ref={panelRef}
              className="mt-10 scroll-mt-28 border-t border-border pt-10"
            >
              <Hoerbedarfsberater />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
