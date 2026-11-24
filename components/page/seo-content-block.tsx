import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SEOContentBlockProps = {
  id?: string
  eyebrow?: string
  heading: string
  /** One or more paragraphs of body copy. */
  paragraphs?: string | string[]
  muted?: boolean
  children?: ReactNode
}

export function SEOContentBlock({
  id,
  eyebrow,
  heading,
  paragraphs,
  muted = false,
  children,
}: SEOContentBlockProps) {
  const body = Array.isArray(paragraphs)
    ? paragraphs
    : paragraphs
      ? [paragraphs]
      : []

  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-24 py-14 sm:py-16',
        muted ? 'bg-secondary' : 'bg-background',
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-2 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {heading}
          </h2>
          {body.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
