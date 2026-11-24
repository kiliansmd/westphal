'use client'

import { useState } from 'react'
import { Camera, Map, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { company } from '@/lib/site-data'

/**
 * Generic, GDPR-friendly consent gate. No third-party resource is loaded
 * until the visitor explicitly clicks. Keeps the site free of
 * cookie-heavy embeds by default.
 */
function ConsentGate({
  icon,
  title,
  description,
  actionLabel,
  children,
}: {
  icon: React.ReactNode
  title: string
  description: string
  actionLabel: string
  children: React.ReactNode
}) {
  const [loaded, setLoaded] = useState(false)

  if (loaded) return <>{children}</>

  return (
    <div className="flex min-h-64 flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-border bg-muted/40 p-8 text-center">
      <span
        aria-hidden="true"
        className="flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground"
      >
        {icon}
      </span>
      <div className="max-w-md">
        <h3 className="font-serif text-lg font-semibold text-foreground">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
      <Button onClick={() => setLoaded(true)}>{actionLabel}</Button>
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <ShieldCheck className="size-3.5" aria-hidden="true" />
        Erst nach Ihrer Zustimmung werden externe Inhalte geladen.
      </p>
    </div>
  )
}

/** Google Maps embed, only loaded after explicit consent. */
export function MapConsent() {
  const query = encodeURIComponent(
    `${company.streetAddress}, ${company.postalCode} ${company.addressLocality}`,
  )
  return (
    <ConsentGate
      icon={<Map className="size-6" aria-hidden="true" />}
      title="Anfahrt & Karte"
      description="Wir binden Google Maps erst nach Ihrer Zustimmung ein, damit standardmäßig keine Daten an Google übertragen werden."
      actionLabel="Karte laden"
    >
      <div className="overflow-hidden rounded-xl border border-border">
        <iframe
          title={`Standort von ${company.name} auf Google Maps`}
          src={`https://www.google.com/maps?q=${query}&output=embed`}
          className="h-72 w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </ConsentGate>
  )
}

/**
 * Instagram feed placeholder. A real feed would be wired to the Instagram
 * Basic Display API or a curated set of posts; until then we gate any embed.
 */
export function InstagramConsent() {
  return (
    <ConsentGate
      icon={<Camera className="size-6" aria-hidden="true" />}
      title="Einblicke aus unserem Fachgeschäft"
      description="Folgen Sie uns für Neuigkeiten aus dem Alltag bei Westphal Hörgeräte. Der Instagram-Feed wird erst nach Ihrer Zustimmung geladen."
      actionLabel="Instagram-Feed laden"
    >
      <div className="rounded-xl border border-border bg-card p-8 text-center">
        <p className="text-sm text-muted-foreground">
          Hier erscheint nach der Freigabe der aktuelle Instagram-Feed. Binden
          Sie dazu Ihren Kanal über die Instagram-API oder ein Embed-Widget ein.
        </p>
      </div>
    </ConsentGate>
  )
}
