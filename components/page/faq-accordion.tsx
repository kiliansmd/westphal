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
    <section className="scroll-mt-24 bg-background py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {heading}
        </h2>

        <ul className="mt-8 space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`
            return (
              <li
                key={item.question}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-card-foreground transition-colors hover:bg-muted/60"
                  >
                    <span>{item.question}</span>
                    <span
                      className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-primary"
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
                  className={cn('px-5 pb-5', !isOpen && 'hidden')}
                >
                  <p className="text-base leading-relaxed text-muted-foreground">
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
