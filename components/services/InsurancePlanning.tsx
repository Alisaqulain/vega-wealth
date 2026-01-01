'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, CheckCircle, ArrowRight } from 'lucide-react'

const benefits = [
  'Life insurance planning and coverage analysis',
  'Health and medical insurance solutions',
  'Property and casualty insurance',
  'Business insurance for entrepreneurs',
  'Disability and critical illness coverage',
  'Insurance portfolio optimization',
]

export default function InsurancePlanning() {
  return (
    <section id="insurance-planning" className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
              <Shield className="text-white" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Insurance Planning</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Protect what matters most with comprehensive insurance planning. We help you identify risks and secure the right coverage to safeguard your family, assets, and business against unforeseen events.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our insurance advisors work with leading providers to find policies that offer optimal coverage at competitive rates, ensuring you're protected without overpaying.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="text-primary-green flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/contact"
              className="btn-primary inline-flex items-center group"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary-blue/10 to-primary-green/10 p-6 rounded-xl">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Comprehensive Coverage</h3>
                  <p className="text-gray-600">
                    Protection for life, health, property, and business assets through carefully selected insurance products.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary-green/10 to-primary-blue/10 p-6 rounded-xl">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Cost Optimization</h3>
                  <p className="text-gray-600">
                    We compare options from multiple providers to ensure you get the best coverage at the most competitive rates.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary-blue/10 to-primary-green/10 p-6 rounded-xl">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Regular Reviews</h3>
                  <p className="text-gray-600">
                    Annual policy reviews to ensure your coverage remains adequate as your circumstances change.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

