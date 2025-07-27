import React from 'react';

interface ElistroLogoProps {
  className?: string;
  size?: number;
}

export const ElistroLogo = ({ className = "", size = 32 }: ElistroLogoProps) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="/lovable-uploads/2f7ce3b6-aa19-4bf6-a542-3a9df3279372.png"
        alt="Elistro Logo"
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  );
};