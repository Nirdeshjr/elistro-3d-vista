import { Scene3D } from './Scene3D';

export const SideShowcase = () => {
  const showcaseProducts = [
    {
      image: '/lovable-uploads/f2c0511c-b997-4423-b0c7-0848e9f823d9.png',
      name: 'Executive Gold',
      category: 'Aviator'
    },
    {
      image: '/lovable-uploads/bba69f44-a769-4e18-bb75-11a5fd43e156.png',
      name: 'Elegance Collection',
      category: 'Lifestyle'
    },
    {
      image: '/lovable-uploads/4a195fd6-1967-4a63-a225-78d725fa2ff2.png',
      name: 'Blue Light Pro',
      category: 'Tech'
    }
  ];

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
      <div className="elegant-card p-4 space-y-4 w-64">
        <h3 className="font-playfair font-semibold text-center mb-4">
          Featured Elistro
        </h3>
        
        {/* Mini 3D Scene */}
        <div className="h-32 mb-4 rounded-lg overflow-hidden">
          <Scene3D 
            className="w-full h-full"
            eyewearColor="#B8860B"
            autoRotate={true}
            enableControls={false}
          />
        </div>
        
        {/* Product Thumbnails */}
        <div className="space-y-3">
          {showcaseProducts.map((product, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{product.name}</div>
                <div className="text-xs text-muted-foreground">{product.category}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center pt-2 border-t border-border/20">
          <div className="text-xs text-muted-foreground">Premium Eyewear</div>
          <div className="text-sm font-semibold text-gradient">Since 1999</div>
        </div>
      </div>
    </div>
  );
};