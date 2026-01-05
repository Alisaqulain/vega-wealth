'use client'

import { useEffect, useState } from 'react'

interface DubaiSkylineBackgroundProps {
  opacity?: number
  blur?: number
  className?: string
  mobileOpacity?: number
}

export default function DubaiSkylineBackground({
  opacity = 0.08,
  blur = 60,
  className = '',
  mobileOpacity = 0.05,
}: DubaiSkylineBackgroundProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const currentOpacity = isMobile ? mobileOpacity : opacity

  // Dubai skyline with recognizable buildings - simplified SVG path
  const skylinePath = `M0,700 L80,680 L120,650 L160,600 L200,550 L240,500 L280,450 L320,400 L360,350 L400,300 L440,250 L480,200 L520,150 L560,100 L600,50 L640,0 L680,30 L720,60 L760,90 L800,120 L840,150 L880,180 L920,210 L960,240 L1000,270 L1000,700 Z M200,700 L220,580 L240,480 L260,380 L280,280 L300,180 L320,80 L340,0 L360,40 L380,100 L400,160 L420,220 L440,280 L460,340 L480,400 L500,460 L520,520 L540,580 L560,640 L580,700 Z M600,700 L620,680 L640,650 L660,600 L680,500 L700,350 L720,200 L740,50 L760,0 L780,50 L800,200 L820,350 L840,500 L860,600 L880,650 L900,680 L920,700 Z M1000,700 L1020,600 L1040,450 L1060,300 L1080,150 L1100,0 L1120,150 L1140,300 L1160,450 L1180,600 L1200,700 Z M1200,700 L1220,550 L1240,400 L1260,250 L1280,100 L1300,0 L1320,100 L1340,250 L1360,400 L1380,550 L1400,700 Z M1400,700 L1420,650 L1440,550 L1460,450 L1480,350 L1500,250 L1520,150 L1540,50 L1560,0 L1580,30 L1600,80 L1620,130 L1640,180 L1660,230 L1680,280 L1700,330 L1720,380 L1740,430 L1760,480 L1780,530 L1800,580 L1820,630 L1840,680 L1860,700 Z M1860,700 L1880,600 L1900,450 L1920,300 L1920,700 Z`
  
  const dubaiSkylineSVG = encodeURIComponent(
    `<svg width="1920" height="700" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="skylineGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#1E293B" stop-opacity="0"/><stop offset="50%" stop-color="#1E293B" stop-opacity="0.4"/><stop offset="100%" stop-color="#1E293B" stop-opacity="0.1"/></linearGradient></defs><g opacity="${currentOpacity}"><path d="${skylinePath}" fill="url(#skylineGrad)"/></g></svg>`
  )

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Dubai Skyline with recognizable buildings */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,${dubaiSkylineSVG}")`,
          filter: `blur(${blur}px)`,
          opacity: currentOpacity,
          transform: 'scale(1.1)',
          transformOrigin: 'center bottom',
          backgroundPosition: 'center bottom',
        }}
      />
      {/* Warm overlay tint - Dubai golden hour feel */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, 
            rgba(248, 246, 242, 0.4) 0%, 
            rgba(245, 230, 211, 0.25) 30%,
            rgba(248, 246, 242, 0.3) 60%,
            rgba(245, 230, 211, 0.2) 100%)`,
        }}
      />
      {/* Subtle golden hour glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 80%, 
            rgba(201, 169, 97, 0.08) 0%, 
            transparent 60%)`,
        }}
      />
    </div>
  )
}

