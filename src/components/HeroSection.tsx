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
          
          {/* Right Content - Animated Product Card */}
          <div className="relative flex justify-center">
            <div className="elegant-card p-8 max-w-sm w-full animate-float">
              <div className="relative group cursor-pointer">
                <div className="aspect-square overflow-hidden rounded-lg mb-4">
                  <img 
                    src="/lovable-uploads/f2c0511c-b997-4423-b0c7-0848e9f823d9.png"
                    alt="Featured Eyewear"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-playfair font-bold">Executive Gold</h3>
                  <p className="text-muted-foreground text-sm">Premium Collection</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-2xl font-bold text-gradient">$399</span>
                    <span className="text-sm text-muted-foreground line-through">$499</span>
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