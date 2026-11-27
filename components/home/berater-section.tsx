'use client'

import { useRef, useState } from 'react'
import { ChevronDown, X } from 'lucide-react'
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
    <section id="berater" className="scroll-mt-28 bg-background py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
          <div className="max-w-2xl">
            <h2 className="text-balance font-serif text-3xl font-medium leading-tight text-foreground">
              Unsicher, womit Sie anfangen sollen?
            </h2>
            <p className="mt-3 text-pretty text-lg leading-relaxed text-muted-foreground">
              Der Hörbedarfsberater stellt Ihnen ein paar kurze Fragen und
              zeigt den passenden nächsten Schritt. Er ersetzt keine
              persönliche Beratung.
            </p>
          </div>
          <Button
            size="lg"
            variant="outline"
            onClick={toggle}
            aria-expanded={open}
            aria-controls="berater-panel"
            className="w-full shrink-0 border-foreground/25 sm:w-auto"
          >
            {open ? (
              <>
                <X aria-hidden="true" />
                Berater schließen
              </>
            ) : (
              <>
                Berater starten
                <ChevronDown aria-hidden="true" />
              </>
            )}
          </Button>
        </div>

        {open && (
          <div
            id="berater-panel"
            ref={panelRef}
            className="mt-10 scroll-mt-28 border-t border-border pt-10 animate-in fade-in-0 slide-in-from-top-2 duration-300"
          >
            <Hoerbedarfsberater />
          </div>
        )}
      </div>
    </section>
  )
}
