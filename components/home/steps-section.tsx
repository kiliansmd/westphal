import { appointmentSteps } from '@/lib/site-data'

export function StepsSection() {
  return (
    <section id="ablauf" className="scroll-mt-28 bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            So läuft Ihr erster Termin ab
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Sie müssen beim ersten Termin nichts sofort entscheiden. Wir erklären
            alles in Ruhe und zeigen, welche nächsten Schritte sinnvoll sind.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {appointmentSteps.map((step, index) => (
            <li
              key={step}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
                {index + 1}
              </span>
              <span className="text-lg font-semibold text-card-foreground">
                {step}
              </span>
            </li>
          ))}
          <li className="flex items-center justify-center rounded-2xl border border-dashed border-border bg-secondary p-5 text-center text-base font-medium leading-relaxed text-muted-foreground">
            In Ruhe, ohne Druck – Schritt für Schritt.
          </li>
        </ol>
      </div>
    </section>
  )
}
