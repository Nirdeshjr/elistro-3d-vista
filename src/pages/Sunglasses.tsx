import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { ProductDetail } from '@/components/ProductDetail';
import { 
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Filter, Grid, List } from 'lucide-react';

const sunglassesProducts = [
  {
    id: 1,
    name: "Classic Aviator",
    price: 299,
    image: "/lovable-uploads/f2c0511c-b997-4423-b0c7-0848e9f823d9.png",
    category: "men",
    collectionSeries: "Classic",
    model: "Aviator Pro"
  },
  {
    id: 2,
    name: "Retro Round",
    price: 249,
    image: "/lovable-uploads/bba69f44-a769-4e18-bb75-11a5fd43e156.png",
    category: "women",
    collectionSeries: "Heritage",
    model: "Round Vintage"
  },
  {
    id: 3,
    name: "Sport Edge",
    price: 399,
    image: "/lovable-uploads/bffdc00a-e349-4760-87e5-d3245ccd89a0.png",
    category: "unisex",
    collectionSeries: "Active",
    model: "Sport Elite"
  },
  {
    id: 4,
    name: "Vintage Square",
    price: 329,
    image: "/lovable-uploads/4a195fd6-1967-4a63-a225-78d725fa2ff2.png",
    category: "men",
    collectionSeries: "Heritage",
    model: "Square Classic"
  },
  {
    id: 5,
    name: "Modern Cat-Eye",
    price: 279,
    image: "/lovable-uploads/eaf91e9d-d05c-4596-ab12-a288c79b3237.png",
    category: "women",
    collectionSeries: "Modern",
    model: "Cat-Eye Chic"
  },
  {
    id: 6,
    name: "Oversized Glam",
    price: 349,
    image: "/lovable-uploads/f016259a-3064-405a-a0a7-d6dce95c81df.png",
    category: "women",
    collectionSeries: "Glamour",
    model: "Oversized Bold"
  },
  {
    id: 7,
    name: "Minimalist Frame",
    price: 199,
    image: "/lovable-uploads/bfbc8576-8506-4ab7-8c10-1eb417b825d3.png",
    category: "unisex",
    collectionSeries: "Modern",
    model: "Minimal Edge"
  },
  {
    id: 8,
    name: "Bold Statement",
    price: 459,
    image: "/lovable-uploads/f2c0511c-b997-4423-b0c7-0848e9f823d9.png",
    category: "men",
    collectionSeries: "Signature",
    model: "Bold Frame"
  }
];

const Sunglasses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [collectionFilter, setCollectionFilter] = useState("all");
  const [modelFilter, setModelFilter] = useState("all");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProduct, setSelectedProduct] = useState<typeof sunglassesProducts[0] | null>(null);
  
  const itemsPerPage = 6;

  const filteredProducts = sunglassesProducts.filter(product => {
    const categoryMatch = categoryFilter === "all" || product.category === categoryFilter;
    const collectionMatch = collectionFilter === "all" || product.collectionSeries === collectionFilter;
    const modelMatch = modelFilter === "all" || product.model === modelFilter;
    return categoryMatch && collectionMatch && modelMatch;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const clearFilters = () => {
    setCategoryFilter("all");
    setCollectionFilter("all");
    setModelFilter("all");
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="relative py-16 bg-depth-gradient">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="hero-title mb-4">Sunglasses Collection</h1>
            <p className="subtitle max-w-2xl mx-auto">
              Discover our premium sunglasses collection, crafted with precision and designed for every style
            </p>
          </div>
        </section>

        {/* Filters and Controls */}
        <section className="py-8 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              
              {/* Filters */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Filters:</span>
                </div>
                
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="men">Men</SelectItem>
                    <SelectItem value="women">Women</SelectItem>
                    <SelectItem value="unisex">Unisex</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={collectionFilter} onValueChange={setCollectionFilter}>
                  <SelectTrigger className="w-36">
                    <SelectValue placeholder="Collection" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Collections</SelectItem>
                    <SelectItem value="Classic">Classic</SelectItem>
                    <SelectItem value="Heritage">Heritage</SelectItem>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Modern">Modern</SelectItem>
                    <SelectItem value="Glamour">Glamour</SelectItem>
                    <SelectItem value="Signature">Signature</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={modelFilter} onValueChange={setModelFilter}>
                  <SelectTrigger className="w-36">
                    <SelectValue placeholder="Model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Models</SelectItem>
                    <SelectItem value="Aviator Pro">Aviator Pro</SelectItem>
                    <SelectItem value="Round Vintage">Round Vintage</SelectItem>
                    <SelectItem value="Sport Elite">Sport Elite</SelectItem>
                    <SelectItem value="Square Classic">Square Classic</SelectItem>
                    <SelectItem value="Cat-Eye Chic">Cat-Eye Chic</SelectItem>
                    <SelectItem value="Oversized Bold">Oversized Bold</SelectItem>
                    <SelectItem value="Minimal Edge">Minimal Edge</SelectItem>
                    <SelectItem value="Bold Frame">Bold Frame</SelectItem>
                  </SelectContent>
                </Select>

                {(categoryFilter !== "all" || collectionFilter !== "all" || modelFilter !== "all") && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-primary hover:underline"
                  >
                    Clear Filters
                  </button>
                )}
              </div>

              {/* Active Filters & View Toggle */}
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  {categoryFilter !== "all" && (
                    <Badge variant="secondary">{categoryFilter}</Badge>
                  )}
                  {collectionFilter !== "all" && (
                    <Badge variant="secondary">{collectionFilter}</Badge>
                  )}
                  {modelFilter !== "all" && (
                    <Badge variant="secondary">{modelFilter}</Badge>
                  )}
                </div>
                
                <div className="flex border rounded-lg p-1 bg-card">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm text-muted-foreground">
              Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredProducts.length)} of {filteredProducts.length} products
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {paginatedProducts.length > 0 ? (
              <div className={viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
                : "space-y-6"
              }>
                {paginatedProducts.map((product) => (
                  <div key={product.id} onClick={() => setSelectedProduct(product)}>
                    <ProductCard
                      name={product.name}
                      price={`$${product.price}`}
                      image={product.image}
                      viewMode={viewMode}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-muted-foreground mb-4">No products found matching your filters</div>
                <button onClick={clearFilters} className="text-primary hover:underline">
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-16 flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => setCurrentPage(page)}
                          isActive={page === currentPage}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </section>
      </main>

      {selectedProduct && (
        <ProductDetail 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}

      <Footer />
    </div>
  );
};

export default Sunglasses;