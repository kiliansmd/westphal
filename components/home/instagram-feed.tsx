'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Elfsight Instagram Feed — lightweight, load-ahead strategy.
 *
 * Goal: keep the initial page load light (the platform script is NOT fetched on
 * first paint) while still guaranteeing the feed is fully rendered BEFORE the
 * visitor scrolls it into view.
 *
 * How:
 * - An IntersectionObserver watches a sentinel wrapper with a large
 *   `rootMargin` (~1200px), so loading is triggered well before the section
 *   reaches the viewport. By the time it is actually visible, Elfsight has had
 *   time to inject and render the feed.
 * - We deliberately OMIT `data-elfsight-app-lazy`: once our observer decides to
 *   load, we want the widget to render immediately rather than waiting for its
 *   own (tighter) lazy threshold.
 * - `preconnect` hints warm up the CDN connections up front — cheap and keeps
 *   the eventual load fast.
 * - The script is injected once and deduped by src, so it is shared with any
 *   other Elfsight widget on the page (e.g. Google Reviews).
 */
const ELFSIGHT_APP_ID = '9722191c-1a20-41ab-8bb5-65df39f7db9a'
const PLATFORM_SRC = 'https://elfsightcdn.com/platform.js'

function ensurePlatformScript() {
  if (document.querySelector(`script[src="${PLATFORM_SRC}"]`)) return
  const script = document.createElement('script')
  script.src = PLATFORM_SRC
  script.async = true
  document.body.appendChild(script)
}

export function InstagramFeed() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [load, setLoad] = useState(false)

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

  return (
    <div ref={wrapperRef}>
      <link rel="preconnect" href="https://elfsightcdn.com" />
      <link rel="preconnect" href="https://static.elfsight.com" crossOrigin="" />

      <div
        className={`elfsight-app-${ELFSIGHT_APP_ID}`}
        role="region"
        aria-label="Instagram-Feed von Westphal Hörgeräte"
      />
    </div>
  )
}
