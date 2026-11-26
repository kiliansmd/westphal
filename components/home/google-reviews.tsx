'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

/**
 * Elfsight Google Reviews — lightweight, load-ahead strategy.
 *
 * Goal: keep the initial page load light (the widget is NOT fetched on first
 * paint) while still guaranteeing the reviews are fully rendered BEFORE the
 * visitor scrolls them into view.
 *
 * How:
 * - An IntersectionObserver watches a sentinel wrapper with a large
 *   `rootMargin` (~1200px), so loading is triggered well before the section
 *   reaches the viewport. By the time it is actually visible, Elfsight has had
 *   time to inject and render the reviews.
 * - We deliberately OMIT `data-elfsight-app-lazy`: once our observer decides to
 *   load, we want the widget to render immediately rather than waiting for its
 *   own (tighter) lazy threshold.
 * - `preconnect` hints warm up the CDN connections up front — cheap and keeps
 *   the eventual load fast.
 * - The script is injected once and deduped by src, so it is shared with any
 *   other Elfsight widget on the page.
 */
const ELFSIGHT_APP_ID = 'cfc133b2-e970-4712-959c-43e01b7dbb40'
const PLATFORM_SRC = 'https://elfsightcdn.com/platform.js'

function ensurePlatformScript() {
  if (document.querySelector(`script[src="${PLATFORM_SRC}"]`)) return
  const script = document.createElement('script')
  script.src = PLATFORM_SRC
  script.async = true
  document.body.appendChild(script)
}

/**
 * Ersatz, solange das Widget nichts anzeigt (noch lädt, blockiert ist oder
 * bei Elfsight nicht gefunden wird). Bewusst ohne erfundene Zitate: nur die
 * echte Gesamtbewertung und der Weg zu den Original-Bewertungen.
 */
function ReviewsFallback({ href }: { href: string }) {
  return (
    <div className="grid gap-8 rounded-md bg-secondary p-8 sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-14">
      <div>
        <span className="block text-2xl tracking-[0.12em] text-brand" aria-hidden="true">
          ★★★★★
        </span>
        <p className="mt-2 font-serif text-2xl font-medium leading-snug text-foreground sm:text-3xl">
          Echte Stimmen,
          <br />
          direkt auf Google
        </p>
      </div>
      <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
        Lesen Sie, was Kundinnen und Kunden über ihre Beratung bei uns
        schreiben. Sie waren schon bei uns? Über Ihre Bewertung auf Google
        freuen wir uns sehr.
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-13 items-center justify-center gap-2 rounded-lg border border-foreground/25 bg-background px-6 text-lg font-semibold whitespace-nowrap text-foreground transition-colors hover:border-foreground hover:bg-card"
      >
        Bewertungen ansehen
        <ArrowUpRight className="size-5" aria-hidden="true" />
      </a>
    </div>
  )
}

export function GoogleReviews({ href }: { href: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const widgetRef = useRef<HTMLDivElement>(null)
  const [load, setLoad] = useState(false)
  const [rendered, setRendered] = useState(false)

  useEffect(() => {
    if (load) return
    const el = wrapperRef.current
    if (!el) return

    // Fallback for very old browsers: just load it.
    if (typeof IntersectionObserver === 'undefined') {
      setLoad(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setLoad(true)
          observer.disconnect()
        }
      },
      // Start loading long before the section enters the viewport.
      { rootMargin: '1200px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [load])

  useEffect(() => {
    if (load) ensurePlatformScript()
  }, [load])

  // Erst wenn Elfsight wirklich Inhalte einsetzt, weicht der Ersatzblock.
  useEffect(() => {
    const el = widgetRef.current
    if (!el) return
    const check = () => {
      if (el.childElementCount > 0 && el.offsetHeight > 80) {
        setRendered(true)
        return true
      }
      return false
    }
    if (check()) return
    const mo = new MutationObserver(() => {
      if (check()) mo.disconnect()
    })
    mo.observe(el, { childList: true, subtree: true })
    return () => mo.disconnect()
  }, [])

  return (
    <div ref={wrapperRef}>
      <link rel="preconnect" href="https://elfsightcdn.com" />
      <link rel="preconnect" href="https://static.elfsight.com" crossOrigin="" />

      <div
        ref={widgetRef}
        className={`elfsight-app-${ELFSIGHT_APP_ID}`}
        role="region"
        aria-label="Google-Bewertungen von Westphal Hörgeräte"
      />
      {!rendered && <ReviewsFallback href={href} />}
    </div>
  )
}
