import React, { useEffect, useState } from 'react';
import { removeBackground, loadImage } from '../utils/backgroundRemoval';

interface ElistroLogoProps {
  className?: string;
  size?: number;
}

export const ElistroLogo = ({ className = "", size = 32 }: ElistroLogoProps) => {
  const [processedLogoUrl, setProcessedLogoUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processLogo = async () => {
      setIsProcessing(true);
      try {
        // Fetch the uploaded logo image
        const response = await fetch('/lovable-uploads/f4944267-f415-455e-a2e5-ae67ccf9dfc0.png');
        const blob = await response.blob();
        
        // Load the image
        const imageElement = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        
        // Create URL for the processed image
        const url = URL.createObjectURL(processedBlob);
        setProcessedLogoUrl(url);
      } catch (error) {
        console.error('Failed to process logo:', error);
        // Fallback to original image
        setProcessedLogoUrl('/lovable-uploads/f4944267-f415-455e-a2e5-ae67ccf9dfc0.png');
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();
  }, []);

  if (isProcessing || !processedLogoUrl) {
    return (
      <div className={`flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
        <div className="animate-spin rounded-full border-2 border-primary border-t-transparent" style={{ width: size * 0.6, height: size * 0.6 }} />
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src={processedLogoUrl}
        alt="Elistro Logo"
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  );
};