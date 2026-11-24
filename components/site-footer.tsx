import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import { Logo } from '@/components/logo'
import {
  company,
  footerServiceLinks,
  footerInfoLinks,
  footerManufacturers,
  footerDeviceTypes,
  footerLocations,
} from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Spalte 1: Kontakt */}
          <div>
            <Logo />
            <ul className="mt-6 space-y-3 text-base text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-1 size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>
                  {company.name}
                  <br />
                  {company.street}
                  <br />
                  {company.city}
                </span>
              </li>
              <li>
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-3 font-medium text-foreground hover:text-primary"
                >
                  <Phone
                    className="size-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={company.emailHref}
                  className="flex items-center gap-3 hover:text-foreground"
                >
                  <Mail
                    className="size-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  {company.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Spalte 2: Leistungen */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Leistungen
            </h2>
            <ul className="mt-5 space-y-3 text-base text-muted-foreground">
              {footerServiceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-primary hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Spalte 3: Informationen */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Informationen
            </h2>
            <ul className="mt-5 space-y-3 text-base text-muted-foreground">
              {footerInfoLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-primary hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SEO: Hersteller, Bauformen & Einzugsgebiet */}
        <div className="mt-12 grid gap-10 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Hörgeräte-Hersteller
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Herstellerunabhängige Beratung mit Originalprodukten von{' '}
              {footerManufacturers.map((name, i) => (
                <span key={name}>
                  <Link
                    href="/hoergeraete-bonn-beuel"
                    className="hover:text-primary hover:underline"
                  >
                    {name}
                  </Link>
                  {i < footerManufacturers.length - 2
                    ? ', '
                    : i === footerManufacturers.length - 2
                      ? ' und '
                      : '.'}
                </span>
              ))}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Hörgeräte-Typen & Bauformen
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {footerDeviceTypes.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground hover:border-primary hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Für Bonn & Umgebung
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Ihr Hörakustiker in Bonn-Beuel – wir sind da für Menschen aus{' '}
              {footerLocations.join(', ')} und dem gesamten Rhein-Sieg-Kreis.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {company.name} · Hörakustiker in
            Bonn-Beuel · {company.street}, {company.city}. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
