'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export type FaqItem = {
  question: string
  answer: string
}

export function FAQAccordion({
  items,
  heading = 'Häufige Fragen',
  eyebrow = 'FAQ',
}: {
  items: FaqItem[]
  heading?: string
  eyebrow?: string
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="scroll-mt-28 border-b border-border bg-background py-16 sm:py-24" aria-label={eyebrow}>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <h2 className="text-balance break-words hyphens-auto font-serif text-3xl font-medium leading-[1.12] text-foreground sm:text-[2.6rem]">
          {heading}
        </h2>

        <ul className="border-t border-foreground/15">
          {items.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`
            return (
              <li
                key={item.question}
                className="border-b border-foreground/15"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-lg font-semibold text-foreground transition-colors hover:text-brand-deep"
                  >
                    <span>{item.question}</span>
                    <span
                      className="flex size-9 shrink-0 items-center justify-center rounded-full border border-foreground/20 text-foreground"
                      aria-hidden="true"
                    >
                      {isOpen ? (
                        <Minus className="size-4" />
                      ) : (
                        <Plus className="size-4" />
                      )}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={cn('pb-6 pr-12', !isOpen && 'hidden')}
                >
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {item.answer}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
