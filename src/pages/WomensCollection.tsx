import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { ProductDetail } from '@/components/ProductDetail';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const womensProducts = [
  {
    id: 'women-1',
    name: 'Elegance Supreme',
    price: '$359',
    originalPrice: '$429',
    image: '/lovable-uploads/bba69f44-a769-4e18-bb75-11a5fd43e156.png',
    category: 'women' as const,
    isNew: true,
    rating: 5.0,
    description: 'Luxurious tortoiseshell frames with exceptional comfort',
    images: [
      '/lovable-uploads/bba69f44-a769-4e18-bb75-11a5fd43e156.png',
      '/lovable-uploads/eaf91e9d-d05c-4596-ab12-a288c79b3237.png',
      '/lovable-uploads/4a195fd6-1967-4a63-a225-78d725fa2ff2.png'
    ]
  },
  {
    id: 'women-2',
    name: 'Chic Reflection',
    price: '$299',
    image: '/lovable-uploads/4a195fd6-1967-4a63-a225-78d725fa2ff2.png',
    category: 'women' as const,
    rating: 4.9,
    description: 'Premium blue light protection with stylish design',
    images: [
      '/lovable-uploads/4a195fd6-1967-4a63-a225-78d725fa2ff2.png',
      '/lovable-uploads/bba69f44-a769-4e18-bb75-11a5fd43e156.png'
    ]
  },
  {
    id: 'women-3',
    name: 'Classic Grace',
    price: '$249',
    image: '/lovable-uploads/eaf91e9d-d05c-4596-ab12-a288c79b3237.png',
    category: 'women' as const,
    rating: 4.8,
    description: 'Timeless elegance with modern functionality',
    images: [
      '/lovable-uploads/eaf91e9d-d05c-4596-ab12-a288c79b3237.png',
      '/lovable-uploads/4a195fd6-1967-4a63-a225-78d725fa2ff2.png'
    ]
  },
  {
    id: 'women-4',
    name: 'Modern Cat-Eye',
    price: '$279',
    image: '/lovable-uploads/eaf91e9d-d05c-4596-ab12-a288c79b3237.png',
    category: 'women' as const,
    rating: 4.7,
    description: 'Contemporary cat-eye design with premium materials',
    images: [
      '/lovable-uploads/eaf91e9d-d05c-4596-ab12-a288c79b3237.png',
      '/lovable-uploads/bba69f44-a769-4e18-bb75-11a5fd43e156.png'
    ]
  },
  {
    id: 'women-5',
    name: 'Vintage Glam',
    price: '$319',
    image: '/lovable-uploads/4a195fd6-1967-4a63-a225-78d725fa2ff2.png',
    category: 'women' as const,
    rating: 4.8,
    description: 'Retro-inspired frames with modern sophistication',
    images: [
      '/lovable-uploads/4a195fd6-1967-4a63-a225-78d725fa2ff2.png',
      '/lovable-uploads/eaf91e9d-d05c-4596-ab12-a288c79b3237.png'
    ]
  },
  {
    id: 'women-6',
    name: 'Designer Elite',
    price: '$389',
    image: '/lovable-uploads/bba69f44-a769-4e18-bb75-11a5fd43e156.png',
    category: 'women' as const,
    rating: 4.9,
    description: 'Luxury frames crafted with premium materials',
    images: [
      '/lovable-uploads/bba69f44-a769-4e18-bb75-11a5fd43e156.png',
      '/lovable-uploads/4a195fd6-1967-4a63-a225-78d725fa2ff2.png'
    ]
  }
];

const WomensCollection = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof womensProducts[0] | null>(null);
  const [sortBy, setSortBy] = useState("featured");
  const [priceFilter, setPriceFilter] = useState("all");

  const filteredProducts = womensProducts.filter(product => {
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
            <h1 className="hero-title mb-4">Women's Collection</h1>
            <p className="subtitle max-w-2xl mx-auto">
              Elegant eyewear designed for the sophisticated modern woman
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

export default WomensCollection;