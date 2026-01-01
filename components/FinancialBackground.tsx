'use client'

export default function FinancialBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Graph lines */}
      <svg
        className="absolute top-20 left-0 w-full h-full opacity-[0.03]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Upward trending line */}
        <path
          d="M0,600 Q200,500 400,400 T800,300 T1200,200"
          stroke="#0EA5E9"
          strokeWidth="3"
          fill="none"
        />
        {/* Second trending line */}
        <path
          d="M0,700 Q300,600 600,500 T1200,400"
          stroke="#10B981"
          strokeWidth="3"
          fill="none"
        />
        {/* Growth curve */}
        <path
          d="M200,700 Q400,550 600,450 T1000,350"
          stroke="#0EA5E9"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Chart bars pattern */}
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-[0.02]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Bar chart */}
          <rect x="20" y="140" width="25" height="40" fill="#0EA5E9" rx="2" />
          <rect x="55" y="120" width="25" height="60" fill="#10B981" rx="2" />
          <rect x="90" y="100" width="25" height="80" fill="#0EA5E9" rx="2" />
          <rect x="125" y="80" width="25" height="100" fill="#10B981" rx="2" />
          <rect x="160" y="60" width="25" height="120" fill="#0EA5E9" rx="2" />
        </svg>
      </div>

      {/* Money symbols pattern */}
      <div className="absolute top-40 right-20 w-64 h-64 opacity-[0.02]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <text x="10" y="40" fontSize="40" fill="#0EA5E9" fontFamily="Arial, sans-serif" fontWeight="bold">$</text>
          <text x="60" y="70" fontSize="35" fill="#10B981" fontFamily="Arial, sans-serif" fontWeight="bold">$</text>
          <text x="35" y="90" fontSize="30" fill="#0EA5E9" fontFamily="Arial, sans-serif" fontWeight="bold">AED</text>
        </svg>
      </div>

      {/* Pie chart segments */}
      <div className="absolute top-1/2 left-20 w-48 h-48 opacity-[0.02]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M50,50 L50,10 A40,40 0 0,1 85,35 Z"
            fill="#0EA5E9"
          />
          <path
            d="M50,50 L85,35 A40,40 0 0,1 85,65 Z"
            fill="#10B981"
          />
          <path
            d="M50,50 L85,65 A40,40 0 0,1 50,90 Z"
            fill="#0EA5E9"
          />
        </svg>
      </div>

      {/* Growth arrow pattern */}
      <div className="absolute bottom-40 left-1/4 w-32 h-32 opacity-[0.02]">
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <path
            d="M10,60 L60,20 L50,20 L50,10 L70,10 L70,30 L60,30 L60,20 Z"
            fill="#10B981"
          />
        </svg>
      </div>

      {/* Circular progress indicators */}
      <div className="absolute top-1/3 right-1/4 w-40 h-40 opacity-[0.02]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#0EA5E9"
            strokeWidth="4"
            strokeDasharray="200 100"
            transform="rotate(-90 50 50)"
          />
        </svg>
      </div>
    </div>
  )
}

