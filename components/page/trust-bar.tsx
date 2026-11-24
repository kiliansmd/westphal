import { trustPoints } from '@/lib/site-data'

export function TrustBar({ points = trustPoints }: { points?: string[] }) {
  return (
    <section className="border-b border-border bg-background">
      <ul className="mx-auto flex max-w-6xl flex-wrap gap-x-8 gap-y-2 px-4 py-5 text-base text-muted-foreground sm:px-6">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </section>
  )
}
