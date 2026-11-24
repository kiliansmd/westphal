export function StepList({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2">
      {steps.map((step, index) => (
        <li
          key={step}
          className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
        >
          <span
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
            aria-hidden="true"
          >
            {index + 1}
          </span>
          <span className="pt-1 text-base leading-relaxed text-card-foreground">
            {step}
          </span>
        </li>
      ))}
    </ol>
  )
}
