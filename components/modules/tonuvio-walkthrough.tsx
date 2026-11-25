'use client'

import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { Pause, Play } from 'lucide-react'
import { PhoneShot } from '@/components/tonuvio/phone-shot'
import { SoundRings } from '@/components/tonuvio/sound-rings'
import { tonuvioWalkthrough } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const STEP_MS = 7000

/**
 * Einblick in eine tonuvio-Übung: vier Schritte als barrierefreie Tabs.
 * Läuft automatisch weiter, solange der Abschnitt sichtbar ist und niemand
 * mit Maus oder Tastatur darin arbeitet. Jede Auswahl beendet den
 * Automatikmodus; er lässt sich jederzeit anhalten und fortsetzen.
 */
export function TonuvioWalkthrough() {
  const steps = tonuvioWalkthrough
  const [active, setActive] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [inView, setInView] = useState(false)
  const [hold, setHold] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setAutoplay(false)
    const el = rootRef.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.45,
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const running = autoplay && inView && !hold

  function choose(index: number) {
    setAutoplay(false)
    setActive(index)
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % steps.length
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + steps.length) % steps.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = steps.length - 1
    else return
    event.preventDefault()
    choose(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <div
      ref={rootRef}
      className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20"
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      onFocus={() => setHold(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setHold(false)
      }}
    >
      <div>
        <div role="tablist" aria-label="Ablauf einer Übung" className="grid max-w-xl grid-cols-2 gap-2">
          {steps.map((step, index) => {
            const selected = index === active
            return (
              <button
                key={step.id}
                ref={(el) => {
                  tabRefs.current[index] = el
                }}
                type="button"
                role="tab"
                id={`tonuvio-tab-${step.id}`}
                aria-selected={selected}
                aria-controls={`tonuvio-panel-${step.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => choose(index)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className={cn(
                  'relative flex min-h-14 min-w-0 items-center gap-2.5 overflow-hidden rounded-xl px-3 py-3 text-left text-base font-semibold transition-colors duration-300 sm:gap-3 sm:px-4 sm:text-lg',
                  selected ? 'bg-white text-[#201d17]' : 'bg-white/10 text-white hover:bg-white/20',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'grid size-7 shrink-0 place-items-center rounded-full text-base transition-colors duration-300 sm:size-8',
                    selected ? 'bg-brand text-brand-foreground' : 'bg-white/15 text-white',
                  )}
                >
                  {index + 1}
                </span>
                {step.label}
                {selected && autoplay && (
                  <span
                    key={`${active}-progress`}
                    aria-hidden="true"
                    data-paused={running ? undefined : ''}
                    onAnimationEnd={() => setActive((i) => (i + 1) % steps.length)}
                    className="tv-progress absolute inset-x-0 bottom-0 h-1 bg-brand"
                    style={{ ['--dur' as string]: `${STEP_MS}ms` }}
                  />
                )}
              </button>
            )
          })}
        </div>

        {steps.map((step, index) => (
          <div
            key={step.id}
            role="tabpanel"
            id={`tonuvio-panel-${step.id}`}
            aria-labelledby={`tonuvio-tab-${step.id}`}
            hidden={index !== active}
            className="mt-10"
          >
            <h3
              key={`h-${active}`}
              className="tv-rise text-balance font-serif text-3xl font-medium leading-tight text-white sm:text-4xl"
            >
              {step.title}
            </h3>
            <p
              key={`p-${active}`}
              className="tv-rise mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/85 sm:text-xl"
              style={{ ['--d' as string]: '90ms' }}
            >
              {step.text}
            </p>
          </div>
        ))}

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <p className="text-base text-white/70" aria-live={autoplay ? 'off' : 'polite'}>
            Schritt {active + 1} von {steps.length}
          </p>
          <button
            type="button"
            onClick={() => setAutoplay((on) => !on)}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            {autoplay ? (
              <Pause className="size-4" aria-hidden="true" />
            ) : (
              <Play className="size-4" aria-hidden="true" />
            )}
            {autoplay ? 'Automatik anhalten' : 'Automatisch zeigen'}
          </button>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[330px]">
        <SoundRings className="-inset-[30%]" tone="light" />
        <div className="relative">
          {steps.map((step, index) => (
            <PhoneShot
              key={step.id}
              src={step.image}
              alt={index === active ? step.alt : ''}
              className={cn(
                'drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)] transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none',
                index === active
                  ? 'relative translate-y-0 scale-100 opacity-100'
                  : 'pointer-events-none absolute inset-0 translate-y-3 scale-[0.98] opacity-0',
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
