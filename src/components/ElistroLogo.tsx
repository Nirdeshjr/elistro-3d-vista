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
        <path 
          d="M30 50 C30 38 38 30 50 30 C62 30 70 38 70 50 C70 55 68 60 65 63 L45 63 C42 63 40 61 40 58 C40 55 42 53 45 53 L58 53 C58 45 54 42 50 42 C46 42 42 45 42 50 C42 58 46 62 50 62 C54 62 57 60 58 57 L70 57 C68 67 60 70 50 70 C38 70 30 62 30 50 Z" 
          fill="white"
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