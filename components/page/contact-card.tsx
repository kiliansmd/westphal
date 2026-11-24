import { MapPin, Phone, Mail, Clock, Star } from 'lucide-react'
import { company, openingHours } from '@/lib/site-data'

export function ContactCard() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h3 className="font-serif text-xl font-semibold text-card-foreground">
          {company.name}
        </h3>
        <ul className="mt-4 space-y-4 text-base text-muted-foreground">
          <li className="flex items-start gap-3">
            <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            <span>
              {company.street}
              <br />
              {company.city}
            </span>
          </li>
          <li>
            <a
              href={company.phoneHref}
              className="flex items-center gap-3 hover:text-foreground"
            >
              <Phone className="size-5 shrink-0 text-primary" aria-hidden="true" />
              {company.phone}
            </a>
          </li>
          <li>
            <a
              href={company.emailHref}
              className="flex items-center gap-3 break-all hover:text-foreground"
            >
              <Mail className="size-5 shrink-0 text-primary" aria-hidden="true" />
              {company.email}
            </a>
          </li>
        </ul>
        <div className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-sm font-semibold text-foreground">
          <Star className="size-4 fill-amber-400 text-amber-400" aria-hidden="true" />
          {company.rating} ★ Google-Bewertung
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h3 className="flex items-center gap-2 font-serif text-xl font-semibold text-card-foreground">
          <Clock className="size-5 text-primary" aria-hidden="true" />
          Öffnungszeiten
        </h3>
        <ul className="mt-4 space-y-2 text-base text-muted-foreground">
          {openingHours.map((entry) => (
            <li
              key={entry.day}
              className="flex items-center justify-between gap-4 border-b border-border/60 pb-2 last:border-0 last:pb-0"
            >
              <span className="text-foreground">{entry.day}</span>
              <span>{entry.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
