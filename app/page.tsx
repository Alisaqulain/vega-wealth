import Hero from '@/components/sections/Hero'
import ServicesOverview from '@/components/sections/ServicesOverview'
import TrustIndicators from '@/components/sections/TrustIndicators'
import Testimonials from '@/components/sections/Testimonials'
import CTABanner from '@/components/sections/CTABanner'
import SectionDivider from '@/components/SectionDivider'

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <TrustIndicators />
      <SectionDivider />
      <ServicesOverview />
      <SectionDivider />
      <Testimonials />
      <CTABanner />
    </>
  )
}

