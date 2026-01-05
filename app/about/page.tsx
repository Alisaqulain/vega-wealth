import type { Metadata } from 'next'
import MissionVision from '@/components/sections/MissionVision'
import FounderSection from '@/components/sections/FounderSection'
import CoreValues from '@/components/sections/CoreValues'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'About Us - The Vega Wealth | Our Mission & Vision | Financial Advisory Dubai',
  description: 'Learn about The Vega Wealth, our mission, vision, and core values. Leading financial advisory firm in Dubai, UAE with 15+ years of experience. Trusted by 500+ clients managing AED 2B+ in assets.',
  keywords: [
    'About The Vega Wealth',
    'Financial Advisory Firm Dubai',
    'Wealth Management Company Dubai',
    'Financial Advisor Dubai History',
    'Dubai Financial Services Company',
    'Best Financial Advisor Dubai',
    'Top Wealth Management Dubai',
    'Financial Planning Company Dubai',
  ],
  openGraph: {
    title: 'About Us - The Vega Wealth | Financial Advisory Dubai',
    description: 'Learn about The Vega Wealth, our mission, vision, and core values. Leading financial advisory firm in Dubai, UAE.',
    url: 'https://vegawalth.com/about',
    images: ['/logo1.png'],
  },
  alternates: {
    canonical: 'https://vegawalth.com/about',
  },
}

export default function AboutPage() {
  return (
    <div className="pt-32 md:pt-40">
      <PageHeader 
        title="About The Vega Wealth"
        subtitle="Your trusted partner in building lasting wealth and securing your financial future"
        dubaiImage="/dubai1.png"
      />
      <MissionVision />
      <FounderSection />
      <CoreValues />
    </div>
  )
}

