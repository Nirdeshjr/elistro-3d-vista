import React from 'react';

interface ElistroLogoProps {
  className?: string;
  size?: number;
}

export const ElistroLogo = ({ className = "", size = 32 }: ElistroLogoProps) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        className="text-gradient"
        fill="currentColor"
      >
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          fill="url(#gradient)" 
          strokeWidth="0"
        />
        <circle 
          cx="50" 
          cy="50" 
          r="35" 
          fill="url(#innerGradient)" 
          strokeWidth="0"
        />
        <path 
          d="M35 50 C35 42 41 36 49 36 C57 36 63 42 63 50 C63 53 62 56 60 58 L45 58 C43 58 42 57 42 55 C42 53 43 52 45 52 L55 52 C55 47 52 44 49 44 C46 44 43 47 43 50 C43 56 46 59 49 59 C52 59 54 57 55 55 L62 55 C60 61 55 64 49 64 C41 64 35 58 35 50 Z" 
          fill="url(#gradient)"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(45, 73%, 60%)" />
            <stop offset="100%" stopColor="hsl(45, 73%, 45%)" />
          </linearGradient>
          <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(45, 73%, 35%)" />
            <stop offset="100%" stopColor="hsl(45, 73%, 25%)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};