import type { Metadata } from 'next'
import FinancialPlanning from '@/components/services/FinancialPlanning'
import InvestmentAdvisory from '@/components/services/InvestmentAdvisory'
import InsurancePlanning from '@/components/services/InsurancePlanning'
import EstatePlanning from '@/components/services/EstatePlanning'
import MortgageAdvisory from '@/components/services/MortgageAdvisory'

export const metadata: Metadata = {
  title: 'Our Services - The Vega Wealth | Financial Advisory Dubai',
  description: 'Comprehensive financial services including wealth management, investment advisory, insurance planning, estate planning, and mortgage advisory in Dubai, UAE.',
  openGraph: {
    title: 'Our Services - The Vega Wealth',
    description: 'Comprehensive financial services for wealth management, investment, insurance, estate, and mortgage advisory.',
  },
}

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <div className="bg-gradient-primary section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive financial solutions tailored to your unique needs
          </p>
        </div>
      </div>
      <FinancialPlanning />
      <InvestmentAdvisory />
      <InsurancePlanning />
      <EstatePlanning />
      <MortgageAdvisory />
    </div>
  )
}

