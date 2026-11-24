import type { ReactNode } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileContactBar } from '@/components/mobile-contact-bar'

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main id="main-content" className="flex-1 pb-20 xl:pb-0">
        {children}
      </main>
      <SiteFooter />
      <MobileContactBar />
    </div>
  )
}
