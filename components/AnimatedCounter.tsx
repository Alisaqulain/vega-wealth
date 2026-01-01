'use client'

import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
}

export default function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: '0px' })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        if (suffix === '+') {
          ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`
        } else if (suffix.includes('B+')) {
          ref.current.textContent = `${prefix}${latest.toFixed(1)}${suffix}`
        } else {
          ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`
        }
      }
    })
  }, [springValue, prefix, suffix])

  return <span ref={ref}>{prefix}0{suffix}</span>
}

