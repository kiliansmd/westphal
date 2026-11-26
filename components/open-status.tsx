'use client'

import { useEffect, useState } from 'react'
import { openingSchedule } from '@/lib/site-data'
import { cn } from '@/lib/utils'

type Status = { open: boolean; text: string }

const WEEKDAYS = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']

/** Aktuelle Zeit in Bonn, unabhängig von der Zeitzone des Geräts. */
function nowInBonn() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Berlin',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date())
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? ''
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'))
  return { day, minutes: Number(get('hour')) * 60 + Number(get('minute')) }
}

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

function computeStatus(): Status {
  const { day, minutes } = nowInBonn()
  const today = openingSchedule[day]

  if (today && minutes >= toMinutes(today.opens) && minutes < toMinutes(today.closes)) {
    return { open: true, text: `Jetzt geöffnet · bis ${today.closes} Uhr` }
  }
  if (today && minutes < toMinutes(today.opens)) {
    return { open: false, text: `Öffnet heute um ${today.opens} Uhr` }
  }

  // Nächsten Öffnungstag suchen.
  for (let i = 1; i <= 7; i++) {
    const next = (day + i) % 7
    const slot = openingSchedule[next]
    if (slot) {
      const when = i === 1 ? 'morgen' : WEEKDAYS[next]
      const prefix = day === 6 ? 'Heute nach Vereinbarung' : 'Gerade geschlossen'
      return { open: false, text: `${prefix} · öffnet ${when} um ${slot.opens} Uhr` }
    }
  }
  return { open: false, text: 'Gerade geschlossen' }
}

/**
 * Zeigt live, ob das Fachgeschäft gerade geöffnet ist.
 * Serverseitig bleibt die Zeile leer (Platz ist reserviert), damit keine
 * falsche Uhrzeit aus dem Build-Cache erscheint.
 */
export function OpenStatus({
  className,
  tone = 'default',
}: {
  className?: string
  tone?: 'default' | 'light'
}) {
  const [status, setStatus] = useState<Status | null>(null)

  useEffect(() => {
    setStatus(computeStatus())
    const id = window.setInterval(() => setStatus(computeStatus()), 60_000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <p
      className={cn(
        'flex min-h-7 items-center gap-3 text-lg font-semibold',
        tone === 'light' ? 'text-background' : 'text-foreground',
        className,
      )}
      aria-live="polite"
    >
      {status && (
        <>
          <span className="relative flex size-3 shrink-0" aria-hidden="true">
            {status.open && (
              <span className="ws-pulse absolute inset-0 rounded-full bg-emerald-500" />
            )}
            <span
              className={cn(
                'relative inline-flex size-3 rounded-full',
                status.open ? 'bg-emerald-600' : 'bg-grey',
              )}
            />
          </span>
          <span className="ws-rise">{status.text}</span>
        </>
      )}
    </p>
  )
}
