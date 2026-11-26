import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Source_Sans_3, Newsreader } from 'next/font/google'
import { company } from '@/lib/site-data'
import { AccessibilityMenu } from '@/components/accessibility-menu'
import { LocalBusinessJsonLd, WebSiteJsonLd } from '@/components/seo/json-ld'
import { IntroOverlay, introScript } from '@/components/intro-overlay'
import './globals.css'

// Highly legible humanist sans for body/UI — open shapes read well for older users.
const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

// Warm editorial serif for headings — gives the site the calm, crafted voice
// of an owner-run Meisterbetrieb instead of a generic startup grotesque.
const headingFont = Newsreader({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: 'Westphal Hörgeräte – Hörakustik in Bonn-Beuel',
    template: '%s | Westphal Hörgeräte',
  },
  description:
    'Persönliche, unabhängige Hörgeräte-Beratung in Bonn-Beuel. Meisterbetreuung, herstellerunabhängige Auswahl, 30 Tage Ausprobe und transparente Preise. Hören verbindet.',
  keywords: [
    'Hörgeräte Bonn',
    'Hörakustiker Bonn-Beuel',
    'Hörtest Bonn',
    'Tinnitus',
    'Gehörschutz',
    'Westphal Hörgeräte',
  ],
  // Titel, Beschreibung und Vorschaubild kommen je Seite aus <title>,
  // der Meta-Beschreibung und der Datei opengraph-image.jpg im Segment.
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Westphal Hörgeräte',
  },
  twitter: {
    card: 'summary_large_image',
  },
  applicationName: 'Westphal Hörgeräte',
  formatDetection: { telephone: true, address: true, email: true },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#faf8f4',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="de"
      className={`light bg-background ${sourceSans.variable} ${headingFont.variable}`}
      // Das Intro-Skript setzt vor dem Hydrieren `data-intro` auf <html>.
      suppressHydrationWarning
    >
      <head>
        {/* Wählt die Lade-Einblendung (Startseite / Unterseite), bevor etwas
            gezeichnet wird. Siehe components/intro-overlay.tsx. */}
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
        {/*
          Eliminates the benign "ResizeObserver loop completed with undelivered
          notifications" warning at its source. That warning fires when a
          ResizeObserver callback synchronously triggers another layout change
          within the same frame (common with the third-party review/Instagram
          embeds). Deferring every callback to the next animation frame breaks
          that synchronous loop so the warning is never emitted. As a fallback,
          a capture-phase listener also swallows the exact message if it still
          surfaces; all other errors propagate untouched. Runs as a blocking
          inline script so the patch is in place before any observer is created.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var RO=window.ResizeObserver;if(RO){window.ResizeObserver=function(cb){return new RO(function(entries,observer){window.requestAnimationFrame(function(){cb(entries,observer);});});};window.ResizeObserver.prototype=RO.prototype;}var m=["ResizeObserver loop completed with undelivered notifications.","ResizeObserver loop limit exceeded"];function noise(s){return typeof s==="string"&&m.some(function(x){return s.indexOf(x)!==-1});}window.addEventListener("error",function(e){if(noise(e&&e.message)){e.stopImmediatePropagation();e.preventDefault();return false;}},true);})();`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <IntroOverlay />
        <a
          href="#main-content"
          className="sr-only rounded-lg bg-primary px-4 py-2 text-base font-semibold text-primary-foreground focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100]"
        >
          Zum Inhalt springen
        </a>
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />
        <AccessibilityMenu />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
