'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal, useInView } from '@/components/motion'

/**
 * Ruhige Bewegung für die tonuvio-Seite.
 * Läuft bewusst auf allen Geräten, auch bei „Bewegung reduzieren“.
 * Ohne JavaScript steht sofort der fertige Zustand.
 * Reveal und useInView liegen seit der seitenweiten Bewegung in
 * components/motion.tsx und werden hier weitergereicht.
 */

export { Reveal }

/** Zählt eine Zahl hoch, sobald sie sichtbar wird. Serverseitig steht der Endwert. */
export function CountUp({ value, duration = 1100 }: { value: number; duration?: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>()
  const [shown, setShown] = useState(value)
  const armed = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
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
    if (!el) return
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
    if (!el) return
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
