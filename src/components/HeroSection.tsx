import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export const HeroSection = () => {
  const products = [
    { 
      name: "Executive Gold", 
      image: "/lovable-uploads/f2c0511c-b997-4423-b0c7-0848e9f823d9.png",
      title: "Executive Collection",
      subtitle: "Premium luxury frames for the discerning professional"
    },
    { 
      name: "Classic Black", 
      image: "/lovable-uploads/4a195fd6-1967-4a63-a225-78d725fa2ff2.png",
      title: "Classic Series",
      subtitle: "Timeless elegance that never goes out of style"
    },
    { 
      name: "Vintage Brown", 
      image: "/lovable-uploads/bba69f44-a769-4e18-bb75-11a5fd43e156.png",
      title: "Vintage Collection",
      subtitle: "Retro-inspired designs with modern sophistication"
    },
    { 
      name: "Modern Silver", 
      image: "/lovable-uploads/bfbc8576-8506-4ab7-8c10-1eb417b825d3.png",
      title: "Modern Edge",
      subtitle: "Contemporary designs for the forward-thinking individual"
    },
    { 
      name: "Luxury Rose", 
      image: "/lovable-uploads/bffdc00a-e349-4760-87e5-d3245ccd89a0.png",
      title: "Rose Gold Series",
      subtitle: "Sophisticated warmth meets premium craftsmanship"
    },
    { 
      name: "Premium Blue", 
      image: "/lovable-uploads/eaf91e9d-d05c-4596-ab12-a288c79b3237.png",
      title: "Ocean Blue",
      subtitle: "Deep sophistication with a touch of mystery"
    }
  ];

  const [currentProduct, setCurrentProduct] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const nextSlide = () => {
    if (!isSliding) {
      setIsSliding(true);
      setCurrentProduct((prev) => (prev + 1) % products.length);
      setTimeout(() => setIsSliding(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isSliding) {
      setIsSliding(true);
      setCurrentProduct((prev) => (prev - 1 + products.length) % products.length);
      setTimeout(() => setIsSliding(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url('/lovable-uploads/e4e07887-7620-4e43-8427-70f5b5ff0a2e.png')` }}
      />
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-depth-gradient opacity-90" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content - Sliding Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Luxury Eyewear Collection</span>
            </div>
            
            <div className="relative overflow-hidden">
              <div 
                className={`transition-transform duration-500 ease-in-out ${isSliding ? 'transform' : ''}`}
                style={{ transform: `translateX(${isSliding ? '-100%' : '0'})` }}
              >
                <h1 className="hero-title">
                  {products[currentProduct].title}
                  <br />
                  <span className="text-gradient">Elistro Collection</span>
                </h1>
              </div>
            </div>
            
            <div className="relative overflow-hidden">
              <div 
                className={`transition-transform duration-500 ease-in-out delay-100 ${isSliding ? 'transform' : ''}`}
                style={{ transform: `translateX(${isSliding ? '-100%' : '0'})` }}
              >
                <p className="subtitle max-w-xl">
                  {products[currentProduct].subtitle}. 
                  Discover the perfect blend of style, comfort, and premium craftsmanship.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="luxury-button group" onClick={() => window.location.href = '/sunglasses'}>
                Explore Collection
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          {/* Right Content - Sliding Product Carousel */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Navigation Buttons */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass-effect border border-primary/20 flex items-center justify-center hover:bg-primary/10 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass-effect border border-primary/20 flex items-center justify-center hover:bg-primary/10 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </button>

              {/* Product Cards Container */}
              <div className="relative overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentProduct * 100}%)` }}
                >
                  {products.map((product, index) => (
                    <div 
                      key={index}
                      className="w-full flex-shrink-0"
                    >
                      <div className="elegant-card overflow-hidden animate-float">
                        <div 
                          className="relative group cursor-pointer h-96"
                          onClick={() => {
                            alert(`${product.name}\n\nProduct Details:\n• Premium quality frame\n• Anti-glare coating\n• UV protection\n• Lightweight design\n• Available in multiple colors`);
                          }}
                        >
                          <div className="h-4/5 overflow-hidden">
                            <img 
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                          <div className="h-1/5 flex items-center justify-center p-4">
                            <h3 className="text-xl font-playfair font-bold text-center">{product.name}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isSliding) {
                        setIsSliding(true);
                        setCurrentProduct(index);
                        setTimeout(() => setIsSliding(false), 500);
                      }
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentProduct ? 'bg-primary scale-125' : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};