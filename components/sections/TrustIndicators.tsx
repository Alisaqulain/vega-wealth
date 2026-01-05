'use client'

import { motion } from 'framer-motion'
import { Briefcase, Shield, TrendingUp } from 'lucide-react'
import dynamic from 'next/dynamic'

const DubaiBackground = dynamic(() => import('@/components/DubaiBackground'), {
  ssr: false,
})

const indicators = [
  {
    icon: Briefcase,
    title: 'Experience',
    description: 'Decades of successful wealth management',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Acting in your best interests, always',
  },
  {
    icon: TrendingUp,
    title: 'Results',
    description: 'Proven track record of client success',
  },
]

export default function TrustIndicators() {
  return (
    <section className="relative section-padding bg-gradient-to-b from-accent-beige/15 via-accent-beige/25 to-accent-beige/15">
      {/* Dubai background - dubai1.png */}
      <DubaiBackground 
        image="/dubai1.png" 
        opacity={0.06} 
        mobileOpacity={0.035}
        blur={0}
        gradientOverlay="light"
      />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-neutral-800 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto italic">
            Experience. Integrity. Commitment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {indicators.map((indicator, index) => {
            const Icon = indicator.icon
            return (
              <motion.div
                key={indicator.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className="text-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary-navy rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="heading-serif text-xl md:text-2xl text-neutral-800 mb-3">
                  {indicator.title}
                </h3>
                <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-xs mx-auto">
                  {indicator.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

