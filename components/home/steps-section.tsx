'use client'

import { useEffect, useRef, useState } from 'react'
import { appointmentSteps } from '@/lib/site-data'
import { Reveal } from '@/components/motion'

/**
 * „So läuft Ihr erster Termin ab“: Die Verbindungslinie füllt sich beim
 * Scrollen in Markenfarbe, erreichte Schritte leuchten nacheinander auf.
 * Ohne JavaScript bleibt die ruhige Ausgangsdarstellung stehen.
 */
export function StepsSection() {
  const listRef = useRef<HTMLOListElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = listRef.current
    if (!el) return
    let frame = 0
    const update = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      // 0, sobald die Liste bei 75 % der Bildschirmhöhe ankommt; 1, wenn sie
      // (bzw. bei der Desktop-Zeile ein gutes Stück Scrollweg) durch ist.
      const span = Math.max(rect.height, vh * 0.3)
      const p = (vh * 0.75 - rect.top) / span
      setProgress(Math.min(1, Math.max(0, p)))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  const last = appointmentSteps.length - 1

  return (
    <section id="ablauf" className="scroll-mt-28 border-t border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-20">
          <h2 className="text-balance font-serif text-4xl font-medium leading-[1.1] text-foreground sm:text-5xl">
            So läuft Ihr erster Termin ab
          </h2>
          <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Sie müssen beim ersten Termin nichts entscheiden. Wir erklären alles
            in Ruhe und zeigen, welche nächsten Schritte sinnvoll sind.
          </p>
        </Reveal>

        <ol
          ref={listRef}
          className="relative mt-14 grid gap-0 lg:mt-20 lg:grid-cols-7"
          style={{ ['--p' as string]: progress }}
        >
          {/* Verbindungslinie: senkrecht auf dem Handy, waagerecht am Desktop. */}
          <span
            className="absolute bottom-6 left-[1.4rem] top-6 w-px bg-foreground/20 lg:inset-x-0 lg:bottom-auto lg:left-0 lg:top-[1.4rem] lg:h-px lg:w-auto"
            aria-hidden="true"
          />
          <span
            className="ws-steps-fill absolute bottom-6 left-[calc(1.4rem-1px)] top-6 w-[3px] origin-top rounded-full bg-brand [transform:scaleY(var(--p))] lg:inset-x-0 lg:bottom-auto lg:left-0 lg:top-[calc(1.4rem-1px)] lg:h-[3px] lg:w-auto lg:origin-left lg:[transform:scaleX(var(--p))]"
            aria-hidden="true"
          />
          {appointmentSteps.map((step, index) => {
            const reached = index === 0 || progress >= index / last - 0.02
            return (
              <li
                key={step}
                data-reached={reached ? '' : undefined}
                className="ws-step relative flex items-center gap-5 py-3 lg:flex-col lg:items-start lg:gap-4 lg:py-0 lg:pr-4"
              >
                <span
                  className="ws-step-dot relative flex size-11 shrink-0 items-center justify-center rounded-full border border-foreground/25 bg-background font-serif text-xl text-foreground"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <span className="text-lg font-semibold text-foreground lg:text-[1.05rem]">
                  {step}
                </span>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
