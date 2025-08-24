import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-white">✨ Luxury Eyewear Collection</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Crafted Elegance
              </h1>
              <h2 className="text-4xl lg:text-6xl font-bold text-primary">
                Redefining Vision
              </h2>
            </div>
            
            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              Elistro brings you international eyewear luxury — where 
              precision, innovation, and style meet timeless 
              sophistication.
            </p>
            
            <Button className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300">
              View New Arrival
            </Button>
          </div>
          
          {/* Right Content - Large Eyeglasses Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl">
              <img 
                src="/lovable-uploads/197c89f7-b055-4bde-b831-079f39913305.png"
                alt="Elistro Eyeglasses"
                className="w-full h-auto object-contain"
              />
              {/* Optional glow effect */}
              <div className="absolute inset-0 bg-primary/10 blur-3xl opacity-50 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};