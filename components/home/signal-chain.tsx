'use client'

import { useEffect, useState } from 'react'
import { useInView } from '@/components/motion'
import { SoundRings } from '@/components/tonuvio/sound-rings'

const chain = ['Ohr', 'Hörgerät', 'Gehirn']

/**
 * Ohr → Hörgerät → Gehirn: Sobald der Block sichtbar ist, wandert ein
 * „Signal“ ruhig durch die Kette. Ohne JavaScript stehen alle drei Begriffe
 * gleichwertig da. Die Bewegung ist rein dekorativ.
 */
export function SignalChain() {
  const { ref, inView } = useInView<HTMLDivElement>('0px 0px -20% 0px')
  const [active, setActive] = useState(-1)

  useEffect(() => {
    if (!inView) return
    setActive(0)
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % (chain.length + 1)),
      1500,
    )
    return () => window.clearInterval(id)
  }, [inView])

  // Nach dem letzten Glied kurz alles gemeinsam zeigen: „Zusammenspiel“.
  const all = active === chain.length

  return (
    <div
      ref={ref}
      className="relative border-t border-background/20 pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0"
    >
      <p className="text-base text-background/60">
        Verstehen entsteht im Zusammenspiel
      </p>
      <div className="relative">
        <SoundRings
          tone="light"
          className="-left-10 top-1/2 hidden w-40 -translate-y-1/2 lg:grid"
        />
        <ol
          className="ws-chain relative mt-6 space-y-1"
          data-live={active >= 0 && !all ? '' : undefined}
        >
          {chain.map((label, index) => (
            <li
              key={label}
              data-active={active === index ? '' : undefined}
              className="ws-chain-item flex items-baseline gap-5 font-serif text-5xl font-normal leading-tight sm:text-6xl"
            >
              <span className="ws-chain-arrow w-8 text-xl text-brand" aria-hidden="true">
                {index === 0 ? '' : '→'}
              </span>
              <span className={index === chain.length - 1 ? 'italic' : undefined}>
                {label}
              </span>
            </li>
          ))}
        </ol>
      </div>
      {/* Kleiner Taktgeber unter der Kette, zeigt den Signalweg. */}
      <div className="mt-8 flex gap-2" aria-hidden="true">
        {chain.map((label, index) => (
          <span
            key={label}
            className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
              all || active >= index ? 'bg-brand' : 'bg-background/20'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
