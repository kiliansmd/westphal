import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileContactBar } from '@/components/mobile-contact-bar'
import { Hero } from '@/components/home/hero'
import { ReasonsSection } from '@/components/home/reasons-section'
import { GoodHandsSection } from '@/components/home/good-hands-section'
import { HelpSection } from '@/components/home/help-section'
import { BeraterSection } from '@/components/home/berater-section'
import { StepsSection } from '@/components/home/steps-section'
import { HoertrainingTeaserSection } from '@/components/home/hoertraining-teaser-section'
import { PricesTeaserSection } from '@/components/home/prices-teaser-section'
import { PartnersSection } from '@/components/home/partners-section'
import { TrustSection } from '@/components/home/trust-section'
import { ReviewsSection } from '@/components/home/reviews-section'
import { ContactCtaSection } from '@/components/home/contact-cta-section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main id="main-content" className="flex-1 pb-24 xl:pb-0">
        <Hero />
        <ReasonsSection />
        <GoodHandsSection />
        <HelpSection />
        <BeraterSection />
        <StepsSection />
        <HoertrainingTeaserSection />
        <PricesTeaserSection />
        <PartnersSection />
        <TrustSection />
        <ReviewsSection />
        <ContactCtaSection />
      </main>
      <SiteFooter />
      <MobileContactBar />
    </div>
  )
}
