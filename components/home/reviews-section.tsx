import { GoogleReviews } from '@/components/home/google-reviews'

export function ReviewsSection() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Google-Bewertungen
          </p>
          <h2 className="mt-2 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Das sagen unsere Kundinnen und Kunden
          </h2>
          <p className="mx-auto mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Echte Erfahrungen aus Bonn-Beuel und Umgebung – direkt von Google,
            ungefiltert und aktuell.
          </p>
        </div>

        <div className="mt-10">
          <GoogleReviews />
        </div>
      </div>
    </section>
  )
}
