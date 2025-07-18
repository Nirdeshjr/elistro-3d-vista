import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ProductShowcase } from '@/components/ProductShowcase';
import { AboutSection } from '@/components/AboutSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProductShowcase />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
