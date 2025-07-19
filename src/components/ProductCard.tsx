import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Heart, Eye, Star } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  viewMode?: 'grid' | 'list';
}

export const ProductCard = ({ name, price, image, viewMode = 'grid' }: ProductCardProps) => {
  if (viewMode === 'list') {
    return (
      <div className="group cursor-pointer">
        <div className="elegant-card p-6 transition-all duration-300 hover:scale-[1.02]">
          <div className="flex gap-6 items-center">
            <div className="w-24 h-24 rounded-lg overflow-hidden bg-card flex-shrink-0">
              <img 
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            <div className="flex-grow">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                {name}
              </h3>
              <p className="text-2xl font-bold text-primary mt-2">
                {price}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group cursor-pointer">
      <div className="elegant-card p-6 h-full transition-all duration-300 hover:scale-105">
        <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-card">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-2xl font-bold text-primary">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
};