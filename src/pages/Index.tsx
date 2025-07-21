import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ProductShowcase } from '@/components/ProductShowcase';
import { CollectionSection } from '@/components/CollectionSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      <main>
        <HeroSection />
        <CollectionSection />
        <ProductShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
