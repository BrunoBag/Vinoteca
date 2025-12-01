import React from 'react'

interface SectionDividerProps {
  type?: 'wave' | 'elegant' | 'simple'
  color?: string
  height?: 'sm' | 'md' | 'lg'
  className?: string
  animated?: boolean
}

export default function SectionDivider({ 
  type = 'wave',
  color = 'cream',
  height = 'md',
  className = "",
  animated = true
}: SectionDividerProps) {
  
  const heightClasses = {
    sm: 'h-12',
    md: 'h-20',
    lg: 'h-32'
  }

  const colorValues = {
    cream: '#f7f5f0',
    malbec: '#b23b33',
    wine: '#dc2626',
    white: '#ffffff'
  }

  if (type === 'simple') {
    return (
      <div className={`relative ${heightClasses[height]} ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-malbec-200 to-transparent opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className={`w-2 h-2 bg-malbec-600 rounded-full ${animated ? 'animate-pulse' : ''}`}></div>
        </div>
      </div>
    )
  }

  if (type === 'elegant') {
    return (
      <div className={`relative bg-gradient-to-r from-cream-50 via-cream-200 to-cream-50 py-8 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-malbec-300 to-transparent"></div>
            <div className="px-6">
              <div className={`w-3 h-3 bg-malbec-600 rounded-full ${animated ? 'animate-pulse' : ''}`}></div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-malbec-300 to-transparent"></div>
          </div>
        </div>
      </div>
    )
  }

  // Default wave type
  return (
    <div className={`relative ${className}`}>
      <svg 
        className={`w-full ${heightClasses[height]}`} 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320" 
        preserveAspectRatio="none"
      >
        <path 
          fill={colorValues[color as keyof typeof colorValues] || colorValues.cream} 
          fillOpacity="1" 
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  )
}