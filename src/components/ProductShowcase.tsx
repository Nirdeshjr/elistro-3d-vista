import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    name: "Aurora",
    image: "/lovable-uploads/f2c0511c-b997-4423-b0c7-0848e9f823d9.png",
    badge: "Best Seller",
    badgeColor: "bg-orange-100 text-orange-800"
  },
  {
    id: 2,
    name: "Eclipse",
    image: "/lovable-uploads/4a195fd6-1967-4a63-a225-78d725fa2ff2.png",
    badge: "Trending",
    badgeColor: "bg-blue-100 text-blue-800"
  },
  {
    id: 3,
    name: "Zenith",
    image: "/lovable-uploads/bba69f44-a769-4e18-bb75-11a5fd43e156.png",
    badge: "New",
    badgeColor: "bg-green-100 text-green-800"
  }
];

export const ProductShowcase = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Explore Our <span className="text-primary">Trending Products</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover the most popular and highly-rated eyewear trending 
            worldwide.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <Button className="bg-primary text-black font-semibold px-6 py-2 rounded-full">
            Trending Products
          </Button>
          <Button variant="ghost" className="text-gray-300 hover:text-white px-6 py-2 rounded-full">
            Collection Series
          </Button>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="relative group">
              {/* Product Card */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105">
                <div className="relative p-8 h-80 flex items-center justify-center">
                  <Badge className={`absolute top-4 left-4 ${product.badgeColor} text-xs font-semibold px-3 py-1`}>
                    {product.badge}
                  </Badge>
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              
              {/* Product Name */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-white">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};