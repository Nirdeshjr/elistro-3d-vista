import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Heart, Eye, Star } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: 'men' | 'women';
  isNew?: boolean;
  rating: number;
  description: string;
}

export const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  isNew, 
  rating, 
  description 
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div 
      className="group relative elegant-card overflow-hidden transition-all duration-500 hover:shadow-glow hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-background/50 to-muted/20">
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay Actions */}
        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <Button
              size="icon"
              variant="ghost"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white"
              onClick={() => setIsFavorited(!isFavorited)}
            >
              <Heart className={`h-4 w-4 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white"
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="absolute bottom-4 left-4 right-4">
            <Button className="w-full luxury-button" size="sm">
              Quick View
            </Button>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-primary text-primary-foreground">
              New
            </Badge>
          )}
          {originalPrice && (
            <Badge variant="destructive">
              Sale
            </Badge>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
          <Badge variant="outline" className="text-xs">
            Premium
          </Badge>
        </div>

        <div>
          <h3 className="font-playfair font-semibold text-lg mb-2">{name}</h3>
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
          </div>
        </div>

        <Button 
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
          variant="outline"
        >
          Add to Cart
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};