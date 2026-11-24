import { company, openingHours } from '@/lib/site-data'

export function ContactCard() {
  return (
    <dl className="grid gap-x-12 border-t border-foreground/15 text-lg leading-relaxed sm:grid-cols-2">
      <div className="border-b border-foreground/15 py-6 sm:border-b-0">
        <dt className="font-semibold text-foreground">{company.name}</dt>
        <dd className="mt-2 text-muted-foreground">
          {company.street}
          <br />
          {company.city}
        </dd>
        <dd className="mt-4">
          <a href={company.phoneHref} className="link-accent">
            {company.phone}
          </a>
        </dd>
        <dd className="mt-2">
          <a href={company.emailHref} className="link-accent break-all">
            {company.email}
          </a>
        </dd>
      </div>
      <div className="py-6">
        <dt className="font-semibold text-foreground">Öffnungszeiten</dt>
        <dd className="mt-2">
          <ul className="text-muted-foreground">
            {openingHours.map((entry) => (
              <li key={entry.day} className="flex justify-between gap-4">
                <span className="text-foreground">{entry.day}</span>
                <span>{entry.time}</span>
              </li>
            ))}
          </ul>
        </dd>
      </div>
    </dl>
  )
}
