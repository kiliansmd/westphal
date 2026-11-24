import { appointmentSteps } from '@/lib/site-data'

export function StepsSection() {
  return (
    <section id="ablauf" className="scroll-mt-28 border-t border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-20">
          <h2 className="text-balance font-serif text-4xl font-medium leading-[1.1] text-foreground sm:text-5xl">
            So läuft Ihr erster Termin ab
          </h2>
          <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Sie müssen beim ersten Termin nichts entscheiden. Wir erklären alles
            in Ruhe und zeigen, welche nächsten Schritte sinnvoll sind.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-0 lg:mt-20 lg:grid-cols-7">
          {/* Connecting line: vertical on mobile, horizontal on desktop. */}
          <span
            className="absolute bottom-6 left-[1.4rem] top-6 w-px bg-foreground/20 lg:inset-x-0 lg:bottom-auto lg:left-0 lg:top-[1.4rem] lg:h-px lg:w-auto"
            aria-hidden="true"
          />
          {appointmentSteps.map((step, index) => (
            <li
              key={step}
              className="relative flex items-center gap-5 py-3 lg:flex-col lg:items-start lg:gap-4 lg:py-0 lg:pr-4"
            >
              <span
                className={
                  index === 0
                    ? 'relative flex size-11 shrink-0 items-center justify-center rounded-full bg-brand font-serif text-xl text-brand-foreground'
                    : 'relative flex size-11 shrink-0 items-center justify-center rounded-full border border-foreground/25 bg-background font-serif text-xl text-foreground'
                }
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <span className="text-lg font-semibold text-foreground lg:text-[1.05rem]">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
