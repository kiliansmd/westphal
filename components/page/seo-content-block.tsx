import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SEOContentBlockProps = {
  id?: string
  /** Kept for API compatibility; small uppercase labels are no longer shown. */
  eyebrow?: string
  heading: string
  /** One or more paragraphs of body copy. */
  paragraphs?: string | string[]
  muted?: boolean
  children?: ReactNode
}

export function SEOContentBlock({
  id,
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
        'scroll-mt-28 border-b border-border py-16 sm:py-24',
        muted ? 'bg-secondary' : 'bg-background',
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-20">
          <h2 className="text-balance break-words hyphens-auto font-serif text-3xl font-medium leading-[1.12] text-foreground sm:text-[2.6rem]">
            {heading}
          </h2>
          {body.length > 0 && (
            <div className="max-w-xl space-y-4 lg:pt-2">
              {body.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-pretty text-lg leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </div>
        {children && <div className="mt-10 sm:mt-12">{children}</div>}
      </div>
    </section>
  )
}
