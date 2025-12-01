import React from 'react'

interface WaveSeparatorProps {
  fillColor?: string
  height?: string
  className?: string
  type?: 'wave1' | 'wave2' | 'wave3'
  direction?: 'up' | 'down'
}

export default function WaveSeparator({ 
  fillColor = "#f7f5f5", 
  height = "h-16", 
  className = "",
  type = "wave1",
  direction = "down"
}: WaveSeparatorProps) {
  
  const waveTypes = {
    wave1: "M0,0L48,16C96,32,192,64,288,64C384,64,480,32,576,37.3C672,43,768,85,864,101.3C960,117,1056,107,1152,85.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    
    wave2: "M0,0L60,21.3C120,43,240,85,360,85.3C480,85,600,43,720,58.7C840,75,960,149,1080,149.3C1200,149,1320,75,1380,37.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
    
    wave3: "M0,0L48,32C96,64,192,128,288,138.7C384,149,480,107,576,96C672,85,768,107,864,122.7C960,139,1056,149,1152,138.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
  }

  return (
    <div className={`relative w-full ${height} ${className} ${direction === 'up' ? '-mb-1' : '-mt-10'}`}>
      <svg 
        className={`w-full ${height} ${direction === 'up' ? 'rotate-180' : ''} block`}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320" 
        preserveAspectRatio="none"
      >
        <path 
          fill={fillColor} 
          fillOpacity="1" 
          d={waveTypes[type]}
        />
      </svg>
      <svg 
        className={`w-full ${height} ${direction === 'down' ? 'rotate-180' : ''} block -mt-2`}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320" 
        preserveAspectRatio="none"
      >
        <path 
          fill={fillColor} 
          fillOpacity="1" 
          d={waveTypes[type]}
        />
      </svg>
    </div>
  )
}