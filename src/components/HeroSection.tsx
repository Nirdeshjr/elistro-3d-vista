import { Button } from '@/components/ui/button';
import { Scene3D } from './Scene3D';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-depth-gradient" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Luxury Eyewear Collection</span>
            </div>
            
            <h1 className="hero-title">
              See the World
              <br />
              <span className="text-gradient">in Style</span>
            </h1>
            
            <p className="subtitle max-w-xl">
              Discover Elistro's meticulously crafted eyewear collection. 
              Where precision meets elegance, and every frame tells a story of sophistication.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="luxury-button group">
                Explore Collection
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          {/* Right Content - 3D Scene with Real Products */}
          <div className="relative">
            <div className="aspect-square max-w-lg mx-auto relative">
              {/* Main 3D Scene */}
              <Scene3D 
                className="w-full h-full"
                eyewearColor="#B8860B"
                autoRotate={true}
                enableControls={true}
              />
              
              {/* Floating Product Images */}
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full overflow-hidden elegant-card p-2 animate-float">
                <img 
                  src="/lovable-uploads/bffdc00a-e349-4760-87e5-d3245ccd89a0.png"
                  alt="Elistro Collection"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-full overflow-hidden elegant-card p-2 animate-float" style={{ animationDelay: '2s' }}>
                <img 
                  src="/lovable-uploads/eaf91e9d-d05c-4596-ab12-a288c79b3237.png"
                  alt="Elistro Eyewear"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              <div className="absolute top-1/2 -right-8 w-20 h-20 rounded-full overflow-hidden elegant-card p-2 animate-float" style={{ animationDelay: '4s' }}>
                <img 
                  src="/lovable-uploads/4a195fd6-1967-4a63-a225-78d725fa2ff2.png"
                  alt="Blue Light Collection"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            
            {/* Enhanced Floating Labels */}
            <div className="absolute top-1/4 -left-4 lg:left-0">
              <div className="elegant-card p-4 animate-float max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <img 
                    src="/lovable-uploads/f2c0511c-b997-4423-b0c7-0848e9f823d9.png"
                    alt="Premium Materials"
                    className="w-10 h-10 object-cover rounded"
                  />
                  <div>
                    <div className="text-sm font-medium">Premium Materials</div>
                    <div className="text-xs text-muted-foreground">Titanium & Acetate</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-1/4 -right-4 lg:right-0">
              <div className="elegant-card p-4 animate-float max-w-xs" style={{ animationDelay: '3s' }}>
                <div className="flex items-center gap-3 mb-2">
                  <img 
                    src="/lovable-uploads/bba69f44-a769-4e18-bb75-11a5fd43e156.png"
                    alt="Precision Crafted"
                    className="w-10 h-10 object-cover rounded"
                  />
                  <div>
                    <div className="text-sm font-medium">Precision Crafted</div>
                    <div className="text-xs text-muted-foreground">Handmade Excellence</div>
                  </div>
                </div>
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