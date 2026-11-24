'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, CalendarCheck, ChevronDown } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import { company, navigation, type NavEntry } from '@/lib/site-data'
import { cn } from '@/lib/utils'

function isGroup(entry: NavEntry): entry is { label: string; children: { label: string; href: string; badge?: string }[] } {
  return 'children' in entry
}

/** Small "NEU"-style pill shown next to highlighted nav items. */
function NavBadge({ label }: { label: string }) {
  return (
    <span className="ml-2 inline-flex items-center rounded-full bg-primary px-2 py-0.5 text-xs font-bold uppercase leading-none tracking-wide text-primary-foreground">
      {label}
    </span>
  )
}

/** Desktop dropdown for a navigation group (hover + click + keyboard). */
function NavDropdown({
  label,
  children,
}: {
  label: string
  children: { label: string; href: string; badge?: string }[]
}) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    function onClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [])

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setOpen(false), 120)
  }
  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => {
        cancelClose()
        setOpen(true)
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-lg font-medium whitespace-nowrap text-foreground transition-colors hover:bg-muted"
      >
        {label}
        <ChevronDown
          className={cn(
            'size-4 text-primary transition-transform',
            open && 'rotate-180',
          )}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-xl border border-border bg-popover py-2 shadow-lg"
        >
          {children.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-center px-5 py-3 text-base font-medium text-popover-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {item.label}
              {item.badge && <NavBadge label={item.badge} />}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85"
    >
      <div className="mx-auto flex h-24 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-1 xl:flex"
          aria-label="Hauptnavigation"
        >
          {navigation.map((entry) =>
            isGroup(entry) ? (
              <NavDropdown
                key={entry.label}
                label={entry.label}
                children={entry.children}
              />
            ) : (
              <Link
                key={entry.label}
                href={entry.href}
                className="rounded-lg px-4 py-2.5 text-lg font-medium whitespace-nowrap text-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {entry.label}
              </Link>
            ),
          )}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-4 xl:flex">
          <a
            href={company.phoneHref}
            className="flex items-center gap-2 rounded-lg py-0.5 text-lg font-semibold whitespace-nowrap text-foreground transition-colors hover:text-primary [&_svg]:text-primary"
          >
            <Phone className="size-5 shrink-0" aria-hidden="true" />
            {company.phone}
          </a>
          <Link
            href="/kontakt"
            className={buttonVariants({ size: 'lg' })}
          >
            <CalendarCheck aria-hidden="true" />
            Termin vereinbaren
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 xl:hidden">
          <a
            href={company.phoneHref}
            aria-label="Anrufen"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'icon-lg' }),
              'size-12',
            )}
          >
            <Phone className="size-6" aria-hidden="true" />
          </a>
          <Button
            variant="outline"
            size="icon-lg"
            className="size-12"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="size-6" aria-hidden="true" />
            ) : (
              <Menu className="size-6" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background xl:hidden"
        >
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6"
            aria-label="Mobile Navigation"
          >
            {navigation.map((entry) =>
              isGroup(entry) ? (
                <div key={entry.label} className="py-1">
                  <p className="px-4 pb-1 pt-3 text-sm font-semibold uppercase tracking-wide text-primary">
                    {entry.label}
                  </p>
                  {entry.children.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center rounded-lg px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-muted"
                    >
                      {item.label}
                      {item.badge && <NavBadge label={item.badge} />}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={entry.label}
                  href={entry.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-4 text-xl font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {entry.label}
                </Link>
              ),
            )}
            <a
              href={company.phoneHref}
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center gap-3 rounded-lg px-4 py-4 text-xl font-semibold text-foreground hover:bg-muted"
            >
              <Phone className="size-6 text-primary" aria-hidden="true" />
              {company.phone}
            </a>
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants({ size: 'lg' }), 'mt-2 w-full')}
            >
              <CalendarCheck aria-hidden="true" />
              Termin vereinbaren
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
