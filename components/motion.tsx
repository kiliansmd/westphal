'use client'

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react'

/**
 * Ruhige Bewegung für die ganze Website.
 * Läuft bewusst auf allen Geräten, auch bei „Bewegung reduzieren“
 * (Vorgabe des Betreibers, wie auf der tonuvio-Seite).
 * Ohne JavaScript steht sofort der fertige Zustand.
 */

/** Meldet einmalig, sobald ein Element ins Bild kommt. */
export function useInView<T extends Element>(rootMargin = '0px 0px -12% 0px') {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true)
          io.disconnect()
        }
      },
      { rootMargin, threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin])
  return { ref, inView }
}

/**
 * Liefert true, wenn ein Element beim ersten Rendern unterhalb des sichtbaren
 * Bereichs liegt. Nur solche Elemente werden animiert, damit beim Laden nichts
 * aufblitzt und Inhalte im ersten Bildschirm sofort stehen.
 */
export function useArmed(ref: React.RefObject<Element | null>) {
  const [armed, setArmed] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (el.getBoundingClientRect().top > window.innerHeight * 0.92) setArmed(true)
  }, [ref])
  return armed
}

/**
 * Blendet Inhalte beim Scrollen sanft ein. `delay` in ms staffelt Gruppen.
 * Vor dem Hydrieren bleibt alles sichtbar (data-reveal wird erst im Client gesetzt).
 */
export function Reveal({
  as: Tag = 'div',
  delay = 0,
  className,
  style,
  children,
  ...rest
}: {
  as?: ElementType
  delay?: number
  className?: string
  style?: CSSProperties
  children?: ReactNode
  [key: string]: unknown
}) {
  const { ref, inView } = useInView<HTMLElement>()
  const armed = useArmed(ref)

  return (
    <Tag
      ref={ref}
      data-reveal={armed ? '' : undefined}
      data-shown={armed && inView ? '' : undefined}
      className={className}
      style={{ ...style, ['--d' as string]: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
