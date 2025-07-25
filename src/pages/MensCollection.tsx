import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { ProductDetail } from '@/components/ProductDetail';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const mensProducts = [
  {
    id: 'men-1',
    name: 'Executive Gold',
    price: '$399',
    originalPrice: '$499',
    image: '/lovable-uploads/f2c0511c-b997-4423-b0c7-0848e9f823d9.png',
    category: 'men' as const,
    isNew: true,
    rating: 4.9,
    description: 'Classic aviator with premium gold frame and gradient lenses',
    images: [
      '/lovable-uploads/f2c0511c-b997-4423-b0c7-0848e9f823d9.png',
      '/lovable-uploads/bffdc00a-e349-4760-87e5-d3245ccd89a0.png',
      '/lovable-uploads/f016259a-3064-405a-a0a7-d6dce95c81df.png'
    ]
  },
  {
    id: 'men-2',
    name: 'Metropolitan Pro',
    price: '$329',
    image: '/lovable-uploads/f016259a-3064-405a-a0a7-d6dce95c81df.png',
    category: 'men' as const,
    rating: 4.8,
    description: 'Sophisticated metal frame with detailed craftsmanship',
    images: [
      '/lovable-uploads/f016259a-3064-405a-a0a7-d6dce95c81df.png',
      '/lovable-uploads/bffdc00a-e349-4760-87e5-d3245ccd89a0.png'
    ]
  },
  {
    id: 'men-3',
    name: 'Urban Explorer',
    price: '$279',
    image: '/lovable-uploads/bfbc8576-8506-4ab7-8c10-1eb417b825d3.png',
    category: 'men' as const,
    rating: 4.7,
    description: 'Modern design for the contemporary gentleman',
    images: [
      '/lovable-uploads/bfbc8576-8506-4ab7-8c10-1eb417b825d3.png',
      '/lovable-uploads/f2c0511c-b997-4423-b0c7-0848e9f823d9.png'
    ]
  },
  {
    id: 'men-4',
    name: 'Sport Elite',
    price: '$249',
    image: '/lovable-uploads/bffdc00a-e349-4760-87e5-d3245ccd89a0.png',
    category: 'men' as const,
    rating: 4.6,
    description: 'Performance eyewear for active lifestyle',
    images: [
      '/lovable-uploads/bffdc00a-e349-4760-87e5-d3245ccd89a0.png',
      '/lovable-uploads/f016259a-3064-405a-a0a7-d6dce95c81df.png'
    ]
  },
  {
    id: 'men-5',
    name: 'Classic Retro',
    price: '$199',
    image: '/lovable-uploads/f2c0511c-b997-4423-b0c7-0848e9f823d9.png',
    category: 'men' as const,
    rating: 4.5,
    description: 'Vintage-inspired frames with modern technology',
    images: [
      '/lovable-uploads/f2c0511c-b997-4423-b0c7-0848e9f823d9.png',
      '/lovable-uploads/bfbc8576-8506-4ab7-8c10-1eb417b825d3.png'
    ]
  },
  {
    id: 'men-6',
    name: 'Professional Edge',
    price: '$349',
    image: '/lovable-uploads/f016259a-3064-405a-a0a7-d6dce95c81df.png',
    category: 'men' as const,
    rating: 4.8,
    description: 'Business-ready frames for the modern professional',
    images: [
      '/lovable-uploads/f016259a-3064-405a-a0a7-d6dce95c81df.png',
      '/lovable-uploads/bffdc00a-e349-4760-87e5-d3245ccd89a0.png'
    ]
  }
];

const MensCollection = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof mensProducts[0] | null>(null);
  const [sortBy, setSortBy] = useState("featured");
  const [priceFilter, setPriceFilter] = useState("all");

  const filteredProducts = mensProducts.filter(product => {
    if (priceFilter === "all") return true;
    const price = parseInt(product.price.replace('$', ''));
    switch (priceFilter) {
      case "under-200": return price < 200;
      case "200-400": return price >= 200 && price <= 400;
      case "over-400": return price > 400;
      default: return true;
    }
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low": return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', ''));
      case "price-high": return parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', ''));
      case "rating": return b.rating - a.rating;
      default: return 0;
    }
  });

  if (selectedProduct) {
    return <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Header Section */}
        <section className="relative py-16 bg-depth-gradient">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="hero-title mb-4">Men's Collection</h1>
            <p className="subtitle max-w-2xl mx-auto">
              Discover sophisticated eyewear designed for the modern gentleman
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={priceFilter} onValueChange={setPriceFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="under-200">Under $200</SelectItem>
                    <SelectItem value="200-400">$200 - $400</SelectItem>
                    <SelectItem value="over-400">Over $400</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  {...product} 
                  onClick={() => setSelectedProduct(product)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MensCollection;