'use client'

import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <div className="relative py-8 md:py-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-neutral-300/40 to-transparent" />
      </motion.div>
      <div className="relative flex justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="w-2 h-2 bg-accent-gold/60 rounded-full"
        />
      </div>
    </div>
  )
}





