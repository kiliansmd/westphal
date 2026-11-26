import Link from 'next/link'
import { Logo } from '@/components/logo'
import { OpenStatus } from '@/components/open-status'
import {
  company,
  footerServiceLinks,
  footerInfoLinks,
  footerManufacturers,
  footerDeviceTypes,
  footerLocations,
} from '@/lib/site-data'

const navLink = 'text-foreground decoration-brand decoration-2 underline-offset-4 hover:underline'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Kontakt */}
          <div>
            <Logo />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {company.name}
              <br />
              {company.street}
              <br />
              {company.city}
            </p>
            <OpenStatus className="mt-4 text-base" />
            <p className="mt-2 text-lg">
              <a href={company.phoneHref} className="link-accent">
                {company.phone}
              </a>
            </p>
            <p className="mt-2 text-lg">
              <a href={company.emailHref} className="link-accent">
                {company.email}
              </a>
            </p>
          </div>

          {/* Leistungen */}
          <nav aria-labelledby="footer-services">
            <h2 id="footer-services" className="text-base font-semibold text-muted-foreground">
              Leistungen
            </h2>
            <ul className="mt-4 space-y-2 text-lg">
              {footerServiceLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={navLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Informationen */}
          <nav aria-labelledby="footer-info">
            <h2 id="footer-info" className="text-base font-semibold text-muted-foreground">
              Informationen
            </h2>
            <ul className="mt-4 space-y-2 text-lg">
              {footerInfoLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={navLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-10 font-serif text-2xl italic text-foreground">
              „Hören verbindet.“
            </p>
          </nav>
        </div>

        {/* Hersteller, Bauformen & Einzugsgebiet — kept for local SEO, set as
            one calm paragraph instead of chips and keyword blocks. */}
        <div className="mt-14 max-w-4xl border-t border-border pt-8 text-base leading-relaxed text-muted-foreground">
          <p>
            Herstellerunabhängige Beratung mit Originalprodukten von{' '}
            {footerManufacturers.map((name, i) => (
              <span key={name}>
                <Link href="/hoergeraete-bonn-beuel" className="hover:text-foreground hover:underline">
                  {name}
                </Link>
                {i < footerManufacturers.length - 2
                  ? ', '
                  : i === footerManufacturers.length - 2
                    ? ' und '
                    : '. '}
              </span>
            ))}
            Bauformen:{' '}
            {footerDeviceTypes.map((item, i) => (
              <span key={item.label}>
                <Link href={item.href} className="hover:text-foreground hover:underline">
                  {item.label}
                </Link>
                {i < footerDeviceTypes.length - 1 ? ', ' : '.'}
              </span>
            ))}
          </p>
          <p className="mt-3">
            Ihr Hörakustiker in Bonn-Beuel – für Menschen aus{' '}
            {footerLocations.join(', ')} und dem gesamten Rhein-Sieg-Kreis.
          </p>
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          © {new Date().getFullYear()} {company.name} · {company.street},{' '}
          {company.city}
        </p>
      </div>
    </footer>
  )
}
