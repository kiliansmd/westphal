'use client'

import { useRef, useState, type KeyboardEvent } from 'react'
import { PhoneShot } from '@/components/tonuvio/phone-shot'
import { tonuvioWalkthrough } from '@/lib/site-data'
import { cn } from '@/lib/utils'

/**
 * Einblick in eine tonuvio-Übung: vier Schritte als barrierefreie Tabs.
 * Pfeiltasten wechseln zwischen den Schritten, das Bild folgt dem Text.
 */
export function TonuvioWalkthrough() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const steps = tonuvioWalkthrough

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % steps.length
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + steps.length) % steps.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = steps.length - 1
    else return
    event.preventDefault()
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
      <div>
        <div
          role="tablist"
          aria-label="Ablauf einer Übung"
          className="grid max-w-xl grid-cols-2 gap-2"
        >
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
                onClick={() => setActive(index)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className={cn(
                  'flex min-h-14 min-w-0 items-center gap-2.5 rounded-xl px-3 py-3 text-left text-base font-semibold transition-colors sm:gap-3 sm:px-4 sm:text-lg',
                  selected
                    ? 'bg-white text-[#201d17]'
                    : 'bg-white/10 text-white hover:bg-white/20',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'grid size-7 shrink-0 place-items-center rounded-full text-base sm:size-8',
                    selected ? 'bg-brand text-brand-foreground' : 'bg-white/15 text-white',
                  )}
                >
                  {index + 1}
                </span>
                {step.label}
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
            <h3 className="text-balance font-serif text-3xl font-medium leading-tight text-white sm:text-4xl">
              {step.title}
            </h3>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/85 sm:text-xl">
              {step.text}
            </p>
          </div>
        ))}

        <p className="mt-8 text-base text-white/70" aria-live="polite">
          Schritt {active + 1} von {steps.length}
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[330px]">
        {steps.map((step, index) => (
          <PhoneShot
            key={step.id}
            src={step.image}
            alt={index === active ? step.alt : ''}
            className={cn(
              'drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)] transition-opacity duration-300 motion-reduce:transition-none',
              index === active ? 'relative opacity-100' : 'pointer-events-none absolute inset-0 opacity-0',
            )}
          />
        ))}
      </div>
    </div>
  )
}
