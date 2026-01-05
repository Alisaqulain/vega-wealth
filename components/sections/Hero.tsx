'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const DubaiBackground = dynamic(() => import('@/components/DubaiBackground'), {
  ssr: false,
})

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-36 pb-20 md:pb-24">
      {/* Base gradient background - ensures consistent base color */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-accent-beige/10 to-neutral-50 z-0">
        {/* Subtle texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
      
      {/* Dubai home background - premium, subtle - layered above base */}
      <DubaiBackground 
        image="/dubaihome.png" 
        opacity={0.08} 
        mobileOpacity={0.05}
        blur={0}
        gradientOverlay="light"
      />
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto px-4">
          {/* Main Content - Left aligned like reference image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6 md:space-y-8 text-left"
          >
            <h1 className="heading-large text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary-navy mb-4 md:mb-6 leading-tight">
              Trusted Financial Guidance<br className="hidden md:block" /> for Your Future
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 leading-relaxed max-w-2xl font-normal">
              Helping You Preserve and Grow Your Wealth
            </p>

            <div className="pt-2 md:pt-4">
              <Link 
                href="/contact" 
                className="btn-primary inline-flex items-center justify-center text-base md:text-lg px-10 py-4 md:px-12 md:py-5 min-h-[56px] md:min-h-[64px]"
              >
                Schedule a Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

