export function StepList({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-x-12 sm:grid-cols-2">
      {steps.map((step, index) => (
        <li
          key={step}
          className="flex items-baseline gap-5 border-t border-foreground/15 py-5"
        >
          <span className="w-8 shrink-0 font-serif text-2xl text-brand-deep" aria-hidden="true">
            {index + 1}
          </span>
          <span className="text-lg leading-relaxed text-foreground">{step}</span>
        </li>
      ))}
    </ol>
  )
}
