import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Filter } from 'lucide-react';

const collectionSeriesData = [
  {
    id: 'classic',
    name: 'Classic Collection',
    description: 'Timeless designs that never go out of style',
    image: '/lovable-uploads/f2c0511c-b997-4423-b0c7-0848e9f823d9.png',
    productCount: 15,
    category: 'Premium'
  },
  {
    id: 'heritage',
    name: 'Heritage Series',
    description: 'Vintage-inspired frames with modern craftsmanship',
    image: '/lovable-uploads/bba69f44-a769-4e18-bb75-11a5fd43e156.png',
    productCount: 12,
    category: 'Vintage'
  },
  {
    id: 'modern',
    name: 'Modern Edge',
    description: 'Contemporary designs for the forward-thinking individual',
    image: '/lovable-uploads/bfbc8576-8506-4ab7-8c10-1eb417b825d3.png',
    productCount: 18,
    category: 'Contemporary'
  },
  {
    id: 'executive',
    name: 'Executive Collection',
    description: 'Premium luxury frames for discerning professionals',
    image: '/lovable-uploads/bffdc00a-e349-4760-87e5-d3245ccd89a0.png',
    productCount: 10,
    category: 'Luxury'
  },
  {
    id: 'glamour',
    name: 'Glamour Series',
    description: 'Bold statement pieces for the fashion-forward',
    image: '/lovable-uploads/eaf91e9d-d05c-4596-ab12-a288c79b3237.png',
    productCount: 14,
    category: 'Fashion'
  },
  {
    id: 'active',
    name: 'Active Collection',
    description: 'Performance eyewear for active lifestyle',
    image: '/lovable-uploads/f016259a-3064-405a-a0a7-d6dce95c81df.png',
    productCount: 16,
    category: 'Sport'
  },
  {
    id: 'signature',
    name: 'Signature Series',
    description: 'Exclusive designs that define your unique style',
    image: '/lovable-uploads/4a195fd6-1967-4a63-a225-78d725fa2ff2.png',
    productCount: 8,
    category: 'Exclusive'
  },
  {
    id: 'professional',
    name: 'Professional Line',
    description: 'Refined frames for the workplace and beyond',
    image: '/lovable-uploads/f2c0511c-b997-4423-b0c7-0848e9f823d9.png',
    productCount: 11,
    category: 'Business'
  },
  {
    id: 'minimalist',
    name: 'Minimalist Collection',
    description: 'Clean, simple designs with maximum impact',
    image: '/lovable-uploads/bfbc8576-8506-4ab7-8c10-1eb417b825d3.png',
    productCount: 13,
    category: 'Minimal'
  }
];

export const CollectionSeriesSection = () => {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  // Get unique categories for filter
  const categories = [...new Set(collectionSeriesData.map(item => item.category))];

  // Filter collections based on category
  const filteredCollections = collectionSeriesData.filter(collection => {
    return categoryFilter === "all" || collection.category === categoryFilter;
  });

  // Show only 4 collections initially, unless "Show All" is clicked
  const displayedCollections = showAll ? filteredCollections : filteredCollections.slice(0, 4);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent" />
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="hero-title mb-4">
            Explore Our <span className="text-gradient">Collection Series</span>
          </h2>
          <p className="subtitle max-w-3xl mx-auto">
            Discover our curated collection series, each designed with a unique aesthetic and purpose to match your lifestyle and personality.
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {displayedCollections.map((collection) => (
            <Card 
              key={collection.id} 
              className="group elegant-card overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => {
                // Navigate to collections page with filter applied
                const searchParams = new URLSearchParams();
                searchParams.set('collection', collection.name);
                window.location.href = `/sunglasses?${searchParams.toString()}`;
              }}
            >
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium bg-primary/80 px-2 py-1 rounded-full">
                        {collection.category}
                      </span>
                      <span className="text-xs">
                        {collection.productCount} products
                      </span>
                    </div>
                    <h3 className="text-lg font-playfair font-bold mb-1">
                      {collection.name}
                    </h3>
                    <p className="text-sm text-white/90 line-clamp-2">
                      {collection.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        {!showAll && filteredCollections.length > 4 && (
          <div className="text-center">
            <Button 
              variant="outline" 
              className="luxury-button group"
              onClick={() => setShowAll(true)}
            >
              View All Collection Series
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        )}

        {/* Show Less Button */}
        {showAll && (
          <div className="text-center">
            <Button 
              variant="outline" 
              className="luxury-button"
              onClick={() => setShowAll(false)}
            >
              Show Less
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};