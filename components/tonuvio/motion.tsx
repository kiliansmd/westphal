'use client'

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react'
import { cn } from '@/lib/utils'

/**
 * Ruhige Bewegung für die tonuvio-Seite.
 * Alles hier respektiert „Bewegung reduzieren“ des Systems (siehe globals.css)
 * und zeigt ohne JavaScript sofort den fertigen Zustand.
 */

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/** Meldet einmalig, sobald ein Element ins Bild kommt. */
function useInView<T extends Element>(rootMargin = '0px 0px -12% 0px') {
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
  const [armed, setArmed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    // Nur Elemente unterhalb des sichtbaren Bereichs animieren,
    // damit beim Laden nichts aufblitzt.
    if (el.getBoundingClientRect().top > window.innerHeight * 0.92) setArmed(true)
  }, [ref])

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

/** Zählt eine Zahl hoch, sobald sie sichtbar wird. Serverseitig steht der Endwert. */
export function CountUp({ value, duration = 1100 }: { value: number; duration?: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>()
  const [shown, setShown] = useState(value)
  const armed = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    if (el.getBoundingClientRect().top > window.innerHeight * 0.92) {
      armed.current = true
      setShown(0)
    }
  }, [ref])

  useEffect(() => {
    if (!inView || !armed.current) return
    armed.current = false
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      setShown(Math.round((1 - Math.pow(1 - t, 3)) * value))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {shown}
    </span>
  )
}

/**
 * Verschiebt Kinder beim Scrollen leicht gegeneinander (Tiefenwirkung).
 * `speed` ist der Anteil der Scrollstrecke, z. B. 0.06.
 */
export function Parallax({
  speed = 0.06,
  className,
  children,
}: {
  speed?: number
  className?: string
  children: ReactNode
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    let frame = 0
    const update = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const center = rect.top + rect.height / 2 - window.innerHeight / 2
      el.style.transform = `translate3d(0, ${(-center * speed).toFixed(1)}px, 0)`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [speed])
  return (
    <div ref={ref} className={cn('will-change-transform', className)}>
      {children}
    </div>
  )
}

/** Acht Stufen als Balken, die beim Einblenden nacheinander wachsen. */
export function LevelMeter({ color, delay = 0 }: { color: string; delay?: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>()
  const [armed, setArmed] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    if (el.getBoundingClientRect().top > window.innerHeight * 0.92) setArmed(true)
  }, [ref])
  return (
    <span
      ref={ref}
      aria-hidden="true"
      data-armed={armed ? '' : undefined}
      data-shown={armed && inView ? '' : undefined}
      className="tv-level inline-flex items-end gap-1"
      style={{ ['--d' as string]: `${delay}ms` }}
    >
      {Array.from({ length: 8 }, (_, i) => (
        <i
          key={i}
          style={{
            ['--i' as string]: i,
            height: `${10 + i * 3}px`,
            backgroundColor: color,
          }}
          className="block w-2 rounded-[3px]"
        />
      ))}
    </span>
  )
}
