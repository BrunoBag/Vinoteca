import React from 'react'

interface ElegantDividerProps {
  className?: string
  patternColor?: string
  lineColor?: string
  dotColor?: string
  animated?: boolean
}

export default function ElegantDivider({ 
  className = "",
  patternColor = "#7f1d1d",
  lineColor = "#d4c1a4", // malbec-300 equivalent
  dotColor = "#b23b33", // malbec-600 equivalent
  animated = true
}: ElegantDividerProps) {
  return (
    <div className={`relative bg-gradient-to-r  py-16 ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wine-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill={patternColor} opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wine-pattern)"/>
        </svg>
      </div>
      
      {/* Central Divider Line */}
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-center">
          <div 
            className="flex-1 h-px bg-gradient-to-r from-transparent to-transparent"
            style={{ backgroundImage: `linear-gradient(to right, transparent, ${lineColor}, transparent)` }}
          ></div>
          <div className="px-8">
            <div 
              className={`w-4 h-4 rounded-full relative`}
              style={{ backgroundColor: dotColor }}
            >
              {animated && (
                <div 
                  className="absolute inset-0 rounded-full animate-pulse"
                  style={{ backgroundColor: lineColor }}
                ></div>
              )}
            </div>
          </div>
          <div 
            className="flex-1 h-px bg-gradient-to-r from-transparent to-transparent"
            style={{ backgroundImage: `linear-gradient(to right, transparent, ${lineColor}, transparent)` }}
          ></div>
        </div>
      </div>
    </div>
  )
}