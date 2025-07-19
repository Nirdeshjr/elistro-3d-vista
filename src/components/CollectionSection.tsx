import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Crown, Sparkles, ArrowRight } from 'lucide-react';

const menCollection = [
  {
    id: 'men-1',
    name: 'Executive Gold',
    price: '$399',
    originalPrice: '$499',
    image: '/lovable-uploads/f2c0511c-b997-4423-b0c7-0848e9f823d9.png',
    category: 'men' as const,
    isNew: true,
    rating: 4.9,
    description: 'Classic aviator with premium gold frame and gradient lenses'
  },
  {
    id: 'men-2',
    name: 'Metropolitan Pro',
    price: '$329',
    image: '/lovable-uploads/f016259a-3064-405a-a0a7-d6dce95c81df.png',
    category: 'men' as const,
    rating: 4.8,
    description: 'Sophisticated metal frame with detailed craftsmanship'
  },
  {
    id: 'men-3',
    name: 'Urban Explorer',
    price: '$279',
    image: '/lovable-uploads/bfbc8576-8506-4ab7-8c10-1eb417b825d3.png',
    category: 'men' as const,
    rating: 4.7,
    description: 'Modern design for the contemporary gentleman'
  }
];

const womenCollection = [
  {
    id: 'women-1',
    name: 'Elegance Supreme',
    price: '$359',
    originalPrice: '$429',
    image: '/lovable-uploads/bba69f44-a769-4e18-bb75-11a5fd43e156.png',
    category: 'women' as const,
    isNew: true,
    rating: 5.0,
    description: 'Luxurious tortoiseshell frames with exceptional comfort'
  },
  {
    id: 'women-2',
    name: 'Chic Reflection',
    price: '$299',
    image: '/lovable-uploads/4a195fd6-1967-4a63-a225-78d725fa2ff2.png',
    category: 'women' as const,
    rating: 4.9,
    description: 'Premium blue light protection with stylish design'
  },
  {
    id: 'women-3',
    name: 'Classic Grace',
    price: '$249',
    image: '/lovable-uploads/eaf91e9d-d05c-4596-ab12-a288c79b3237.png',
    category: 'women' as const,
    rating: 4.8,
    description: 'Timeless elegance with modern functionality'
  }
];

export const CollectionSection = () => {
  const [activeTab, setActiveTab] = useState<'men' | 'women'>('men');

  return (
    <section id="collection" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-depth-gradient opacity-50" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Premium Collections
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Elistro <span className="text-gradient">Collections</span>
          </h2>
          <p className="subtitle max-w-3xl mx-auto">
            Discover our curated collections designed specifically for the modern man and woman. 
            Each piece represents the pinnacle of style, comfort, and innovation.
          </p>
        </div>

        {/* Collection Tabs */}
        <div className="flex justify-center mb-12">
          <div className="elegant-card p-2 flex gap-2">
            <Button
              variant={activeTab === 'men' ? 'luxury' : 'ghost'}
              onClick={() => setActiveTab('men')}
              className="flex items-center gap-2 px-6 py-3"
            >
              <Users className="w-4 h-4" />
              Men's Collection
            </Button>
            <Button
              variant={activeTab === 'women' ? 'luxury' : 'ghost'}
              onClick={() => setActiveTab('women')}
              className="flex items-center gap-2 px-6 py-3"
            >
              <Crown className="w-4 h-4" />
              Women's Collection
            </Button>
          </div>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {(activeTab === 'men' ? menCollection : womenCollection).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Collection Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            { number: '150+', label: "Men's Styles", icon: Users },
            { number: '200+', label: "Women's Styles", icon: Crown },
            { number: '25+', label: 'New Arrivals', icon: Sparkles },
            { number: '98%', label: 'Satisfaction Rate', icon: ArrowRight }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="elegant-card p-6 transition-all duration-300 group-hover:shadow-glow">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl lg:text-3xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};