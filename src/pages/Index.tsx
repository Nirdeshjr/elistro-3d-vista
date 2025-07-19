import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ProductShowcase } from '@/components/ProductShowcase';
import { CollectionSection } from '@/components/CollectionSection';
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
        <CollectionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
