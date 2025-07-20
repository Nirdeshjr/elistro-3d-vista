import { useState } from 'react';
import { Scene3D } from './Scene3D';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Palette, Shield, Star } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  category: 'sunglasses' | 'eyeglasses';
  color: string;
  features: string[];
  rating: number;
  isNew?: boolean;
}

const products: Product[] = [
  {
    id: '2',
    name: 'Metropolitan',
    price: '$249',
    category: 'eyeglasses',
    color: '#2C2C2C',
    features: ['Acetate Frame', 'Blue Light Filter', 'Lightweight'],
    rating: 4.8
  },
  {
    id: '3',
    name: 'Sapphire Elite',
    price: '$399',
    category: 'sunglasses',
    color: '#1E3A8A',
    features: ['Carbon Fiber', 'Polarized', 'Smart Coating'],
    rating: 5.0,
    isNew: true
  }
];

export const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <section id="sunglasses" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Featured <span className="text-gradient">Collection</span>
          </h2>
          <p className="subtitle max-w-2xl mx-auto">
            Experience our handpicked selection of premium eyewear, 
            each piece crafted with meticulous attention to detail and innovative design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* 3D Showcase */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square bg-depth-gradient rounded-2xl overflow-hidden shadow-elegant">
              <Scene3D 
                className="w-full h-full"
                eyewearColor={selectedProduct.color}
                autoRotate={true}
                enableControls={true}
              />
            </div>
            
            {/* Product Info Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="elegant-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-playfair font-semibold">{selectedProduct.name}</h3>
                    <p className="text-primary text-lg font-bold">{selectedProduct.price}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">{selectedProduct.rating}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProduct.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                <Button className="w-full luxury-button">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>

          {/* Product Selection */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="flex gap-2 mb-8">
              <Button 
                variant="outline" 
                size="sm"
                className="border-primary text-primary bg-primary/10"
              >
                All Products
              </Button>
              <Button variant="ghost" size="sm">Sunglasses</Button>
              <Button variant="ghost" size="sm">Eyeglasses</Button>
            </div>

            <div className="space-y-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`elegant-card p-6 cursor-pointer transition-all duration-300 ${
                    selectedProduct.id === product.id 
                      ? 'ring-2 ring-primary shadow-glow' 
                      : 'hover:shadow-elegant'
                  }`}
                  onClick={() => setSelectedProduct(product)}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-playfair font-semibold text-lg">{product.name}</h4>
                        {product.isNew && (
                          <Badge className="bg-primary text-primary-foreground">New</Badge>
                        )}
                      </div>
                      
                      <p className="text-primary font-bold text-lg mb-3">{product.price}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{product.category}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Palette className="w-4 h-4" />
                          <div 
                            className="w-3 h-3 rounded-full border"
                            style={{ backgroundColor: product.color }}
                          />
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-primary text-primary" />
                          <span>{product.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                      <div 
                        className="w-8 h-8 rounded-full border-2"
                        style={{ borderColor: product.color }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="text-center p-4 rounded-lg bg-primary/5">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium">Lifetime Warranty</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-accent/5">
                <Eye className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-sm font-medium">Virtual Try-On</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};