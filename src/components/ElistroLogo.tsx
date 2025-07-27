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
          fill="none" 
          stroke="url(#gradient)" 
          strokeWidth="8"
        />
        <path 
          d="M25 35 L65 35 L65 45 L35 45 L35 50 L60 50 L60 60 L35 60 L35 65 L65 65 L65 75 L25 75 Z" 
          fill="url(#gradient)"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(45, 73%, 60%)" />
            <stop offset="100%" stopColor="hsl(45, 73%, 45%)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};