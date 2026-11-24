'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import {
  PersonStanding,
  Minus,
  Plus,
  RotateCcw,
  Contrast,
  Phone,
  X,
  Check,
} from 'lucide-react'
import { company } from '@/lib/site-data'
import { cn } from '@/lib/utils'

/**
 * The site's base root font size. MUST match `html { font-size }` in
 * globals.css, otherwise applying a scale of 1 (or resetting) would resize
 * the whole page away from its intended baseline.
 */
const BASE_FONT_PERCENT = 112.5
const SCALE_STEPS = [1, 1.15, 1.3, 1.5] as const
const SCALE_LABELS = ['Normal', 'Groß', 'Größer', 'Sehr groß'] as const
const STORAGE_SCALE = 'a11y-font-scale'
const STORAGE_CONTRAST = 'a11y-contrast'

/** Window event the mobile contact bar fires to open/close the menu. */
export const A11Y_TOGGLE_EVENT = 'a11y-menu:toggle'

export function AccessibilityMenu() {
  const [open, setOpen] = useState(false)
  const [scaleIndex, setScaleIndex] = useState(0)
  const [contrast, setContrast] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  // Restore saved preferences on mount.
  useEffect(() => {
    const savedScale = Number(window.localStorage.getItem(STORAGE_SCALE))
    if (SCALE_STEPS.includes(savedScale as (typeof SCALE_STEPS)[number])) {
      setScaleIndex(SCALE_STEPS.indexOf(savedScale as (typeof SCALE_STEPS)[number]))
    }
    setContrast(window.localStorage.getItem(STORAGE_CONTRAST) === 'true')
  }, [])

  // Apply font scale to the document root (rem-based layout scales globally).
  useEffect(() => {
    const scale = SCALE_STEPS[scaleIndex]
    document.documentElement.style.fontSize = `${BASE_FONT_PERCENT * scale}%`
    window.localStorage.setItem(STORAGE_SCALE, String(scale))
  }, [scaleIndex])

  // Apply high-contrast class to the document root.
  useEffect(() => {
    document.documentElement.classList.toggle('a11y-contrast', contrast)
    window.localStorage.setItem(STORAGE_CONTRAST, String(contrast))
  }, [contrast])

  // Close on Escape and on click/tap outside — easier for users who open it by
  // accident and just want it to go away.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onPointer = (e: PointerEvent) => {
      const target = e.target as Element
      // The mobile contact bar has its own toggle; let its click handle it.
      if (target.closest?.('[data-a11y-toggle]')) return
      if (!containerRef.current?.contains(target)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  // The mobile contact bar opens the menu via a window event, so no floating
  // tab has to cover page content on small screens.
  useEffect(() => {
    const onToggle = () => setOpen((v) => !v)
    window.addEventListener(A11Y_TOGGLE_EVENT, onToggle)
    return () => window.removeEventListener(A11Y_TOGGLE_EVENT, onToggle)
  }, [])

  // Move keyboard focus into the panel when it opens.
  useEffect(() => {
    if (open) panelRef.current?.focus()
  }, [open])

  const zoomIn = useCallback(
    () => setScaleIndex((i) => Math.min(i + 1, SCALE_STEPS.length - 1)),
    [],
  )
  const zoomOut = useCallback(
    () => setScaleIndex((i) => Math.max(i - 1, 0)),
    [],
  )
  const reset = useCallback(() => {
    setScaleIndex(0)
    setContrast(false)
  }, [])

  const isDefault = scaleIndex === 0 && !contrast

  return (
    <div
      ref={containerRef}
      // On mobile/tablet the panel opens just above the fixed contact bar,
      // which carries the toggle. From xl up (contact bar hidden) a slim tab
      // is vertically centred on the right edge.
      className="fixed bottom-24 right-0 z-50 flex items-stretch xl:bottom-auto xl:top-1/2 xl:-translate-y-1/2"
      // Region so screen readers can jump straight to the helpers.
      role="region"
      aria-label="Bedienungshilfen"
    >
      {/* Vertical toggle tab — visible on every screen size. */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="a11y-panel"
        aria-label={open ? 'Bedienungshilfen schließen' : 'Bedienungshilfen öffnen'}
        className="hidden w-11 flex-col items-center justify-center gap-2 rounded-l-md bg-primary py-5 text-primary-foreground transition-colors hover:bg-primary/90 xl:flex"
      >
        {open ? (
          <X className="size-6 shrink-0" aria-hidden="true" />
        ) : (
          <PersonStanding className="size-6 shrink-0" aria-hidden="true" />
        )}
        <span className="text-sm font-semibold [writing-mode:vertical-rl]">
          {open ? 'Schließen' : 'Bedienung'}
        </span>
      </button>

      {/* Expanding panel. */}
      <div
        id="a11y-panel"
        ref={panelRef}
        hidden={!open}
        tabIndex={-1}
        aria-label="Darstellung anpassen"
        className="max-h-[calc(100vh-2rem)] w-[min(20rem,calc(100vw-3.75rem))] overflow-y-auto rounded-l-md border-y border-l border-border bg-card p-5 shadow-xl outline-none"
      >
        <h2 className="text-lg font-semibold text-card-foreground">
          Darstellung anpassen
        </h2>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          Stellen Sie die Website so ein, wie Sie am besten lesen können.
        </p>

        {/* Text size controls */}
        <div className="mt-5">
          <div className="flex items-baseline justify-between">
            <p className="text-base font-medium text-card-foreground">
              Textgröße
            </p>
            <span
              className="text-base font-semibold text-primary"
              aria-live="polite"
            >
              {SCALE_LABELS[scaleIndex]}
            </span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <button
              type="button"
              onClick={zoomOut}
              disabled={scaleIndex === 0}
              className="flex h-14 flex-1 flex-col items-center justify-center gap-0.5 rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-accent disabled:opacity-40"
            >
              <Minus className="size-5" aria-hidden="true" />
              <span className="text-xs font-medium">Kleiner</span>
            </button>
            <button
              type="button"
              onClick={zoomIn}
              disabled={scaleIndex === SCALE_STEPS.length - 1}
              className="flex h-14 flex-1 flex-col items-center justify-center gap-0.5 rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-accent disabled:opacity-40"
            >
              <Plus className="size-5" aria-hidden="true" />
              <span className="text-xs font-medium">Größer</span>
            </button>
          </div>
        </div>

        {/* Contrast toggle */}
        <button
          type="button"
          onClick={() => setContrast((v) => !v)}
          aria-pressed={contrast}
          className={cn(
            'mt-4 flex h-14 w-full items-center gap-3 rounded-lg border px-4 text-base font-medium transition-colors',
            contrast
              ? 'border-primary bg-primary text-primary-foreground'
              : 'border-border bg-background text-foreground hover:bg-accent',
          )}
        >
          <Contrast className="size-5 shrink-0" aria-hidden="true" />
          <span className="flex-1 text-left">Stärkerer Kontrast</span>
          {contrast && <Check className="size-5 shrink-0" aria-hidden="true" />}
        </button>

        {/* Reset — only offered when something has been changed. */}
        <button
          type="button"
          onClick={reset}
          disabled={isDefault}
          className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-3 text-base font-medium text-foreground transition-colors hover:bg-accent disabled:opacity-40"
        >
          <RotateCcw className="size-5 shrink-0" aria-hidden="true" />
          Zurücksetzen
        </button>

        {/* Quick phone contact */}
        <div className="mt-5 border-t border-border pt-4">
          <p className="text-base font-medium text-card-foreground">
            Lieber persönlich?
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Wir helfen Ihnen gerne am Telefon weiter.
          </p>
          <a
            href={company.phoneHref}
            className="mt-3 flex h-14 items-center justify-center gap-2 rounded-lg bg-brand text-lg font-semibold text-brand-foreground transition-colors hover:bg-brand-strong"
          >
            <Phone className="size-5 shrink-0" aria-hidden="true" />
            {company.phone}
          </a>
        </div>
      </div>
    </div>
  )
}
