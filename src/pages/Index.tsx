import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ProductShowcase } from '@/components/ProductShowcase';
import { CollectionSection } from '@/components/CollectionSection';
import { ScrollingSunglasses } from '@/components/ScrollingSunglasses';
import { AboutSection } from '@/components/AboutSection';
import { SideShowcase } from '@/components/SideShowcase';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      <SideShowcase />
      <main>
        <HeroSection />
        <ProductShowcase />
        <ScrollingSunglasses />
        <CollectionSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
