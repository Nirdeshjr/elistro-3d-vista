import React from 'react';
import { X, Star, ShoppingCart, Heart, Share2, Eye, Shield, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductDetailProps {
  product: {
    id: number | string;
    name: string;
    price: string | number;
    image: string;
    category?: string;
  };
  onClose: () => void;
}

export const ProductDetail = ({ product, onClose }: ProductDetailProps) => {
  const relatedImages = [
    product.image,
    '/lovable-uploads/bba69f44-a769-4e18-bb75-11a5fd43e156.png',
    '/lovable-uploads/eaf91e9d-d05c-4596-ab12-a288c79b3237.png',
    '/lovable-uploads/f016259a-3064-405a-a0a7-d6dce95c81df.png'
  ];

  const features = [
    'Premium acetate frame',
    'Anti-glare coating',
    'UV400 protection',
    'Lightweight design',
    'Adjustable nose pads',
    'Spring hinges'
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="elegant-card max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-6">
              <div className="aspect-square rounded-xl overflow-hidden bg-card border">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-3">
                {relatedImages.map((img, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden bg-card border cursor-pointer hover:ring-2 hover:ring-primary transition-all">
                    <img 
                      src={img} 
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary">{product.category || 'Premium'}</Badge>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">(4.9/5)</span>
                  </div>
                </div>
                
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                <p className="text-3xl font-bold text-primary mb-6">
                  {typeof product.price === 'string' ? product.price : `$${product.price}`}
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Experience the perfect blend of style and functionality with our premium eyewear. 
                  Crafted with meticulous attention to detail and using the finest materials, 
                  this frame represents the pinnacle of optical innovation.
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-card">
                  <Eye className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">Clear Vision</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card">
                  <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">UV Protection</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card">
                  <Truck className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">Free Shipping</div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Button className="flex-1 h-12">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="icon" className="h-12 w-12">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-12 w-12">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground text-center">
                  Free shipping • 30-day returns • 2-year warranty
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};