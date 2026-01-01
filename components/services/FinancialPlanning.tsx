'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, CheckCircle, ArrowRight } from 'lucide-react'

const benefits = [
  'Comprehensive financial assessment and goal setting',
  'Personalized financial roadmaps tailored to your life stage',
  'Cash flow management and budgeting strategies',
  'Retirement planning and wealth accumulation',
  'Tax optimization strategies',
  'Risk assessment and mitigation planning',
]

export default function FinancialPlanning() {
  return (
    <section id="financial-planning" className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
              <FileText className="text-white" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Financial Planning</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Build a solid financial foundation with our comprehensive financial planning services. We help you create a roadmap that aligns with your life goals, whether you're starting your career, growing your family, or planning for retirement.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our expert advisors assess your current financial situation, identify opportunities, and develop strategic plans to help you achieve long-term financial security and prosperity.
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
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Goal-Based Planning</h3>
                  <p className="text-gray-600">
                    We help you define and prioritize your financial goals, creating actionable plans to achieve them.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary-green/10 to-primary-blue/10 p-6 rounded-xl">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Regular Reviews</h3>
                  <p className="text-gray-600">
                    Ongoing monitoring and adjustments to ensure your plan stays on track with your evolving needs.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary-blue/10 to-primary-green/10 p-6 rounded-xl">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Holistic Approach</h3>
                  <p className="text-gray-600">
                    Comprehensive view of your finances, integrating all aspects of your financial life into one cohesive plan.
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

