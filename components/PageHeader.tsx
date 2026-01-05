'use client'

import dynamic from 'next/dynamic'

const DubaiBackground = dynamic(() => import('@/components/DubaiBackground'), {
  ssr: false,
})

interface PageHeaderProps {
  title: string
  subtitle: string
  dubaiImage: string // e.g., '/dubai1.png'
}

export default function PageHeader({ title, subtitle, dubaiImage }: PageHeaderProps) {
  return (
    <div className="relative section-padding overflow-hidden">
      {/* Light background - whiter for better image visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-white to-neutral-50 z-0">
        {/* Subtle texture */}
        <div 
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
      
      {/* Dubai background image - more visible with lighter/whiter base */}
      <DubaiBackground 
        image={dubaiImage} 
        opacity={0.15} 
        mobileOpacity={0.10}
        blur={0}
        gradientOverlay="light"
      />
      
      <div className="container-custom text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-primary-navy mb-4">
          {title}
        </h1>
        <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>
    </div>
  )
}

