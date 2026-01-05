'use client'

import { useEffect, useState } from 'react'

interface DubaiBackgroundProps {
  image: string // Image path (e.g., '/dubaihome.png')
  opacity?: number // Desktop opacity (default 0.06)
  mobileOpacity?: number // Mobile opacity (default 0.03)
  blur?: number // Optional blur (default 0)
  gradientOverlay?: 'light' | 'dark' | 'none' // Gradient overlay type
  className?: string
}

export default function DubaiBackground({
  image,
  opacity = 0.06,
  mobileOpacity = 0.03,
  blur = 0,
  gradientOverlay = 'light',
  className = '',
}: DubaiBackgroundProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    const handleResize = () => checkMobile()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  // Preload image on mount
  useEffect(() => {
    const img = new Image()
    img.src = image
    img.onload = () => setIsLoaded(true)
    img.onerror = () => setIsLoaded(true) // Still show even if image fails
  }, [image])

  const currentOpacity = isMobile ? mobileOpacity : opacity

  // Gradient overlays based on section type - lighter for better image visibility
  const gradientOverlays = {
    light: `linear-gradient(to bottom, 
      rgba(248, 246, 242, 0.3) 0%, 
      rgba(245, 230, 211, 0.2) 30%,
      rgba(248, 246, 242, 0.25) 60%,
      rgba(245, 230, 211, 0.15) 100%)`,
    dark: `linear-gradient(to bottom, 
      rgba(30, 41, 59, 0.5) 0%, 
      rgba(51, 65, 85, 0.4) 50%,
      rgba(30, 41, 59, 0.5) 100%)`,
    none: 'transparent',
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Dubai background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700"
        style={{
          backgroundImage: `url(${image})`,
          filter: blur > 0 ? `blur(${blur}px)` : 'none',
          opacity: isLoaded ? currentOpacity : 0,
          transform: 'scale(1.05)',
          transformOrigin: 'center center',
          willChange: 'opacity',
        }}
      />
      

      {/* Luxury gradient overlay */}
      {gradientOverlay !== 'none' && (
        <div
          className="absolute inset-0"
          style={{
            background: gradientOverlays[gradientOverlay],
          }}
        />
      )}

      {/* Subtle atmospheric glow - reduced for better image visibility */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, 
            rgba(255, 255, 255, 0.08) 0%, 
            transparent 60%)`,
        }}
      />
    </div>
  )
}

