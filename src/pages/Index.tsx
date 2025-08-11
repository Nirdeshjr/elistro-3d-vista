import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { CollectionSeriesSection } from '@/components/CollectionSeriesSection';
import { ProductShowcase } from '@/components/ProductShowcase';
import { Footer } from '@/components/Footer';

const Index = () => {
  console.log('Index component is rendering');
  
  return (
    <div className="min-h-screen bg-background relative">
      <h1 className="text-white text-4xl p-8">Testing - Page is loading</h1>
      <Navigation />
      <main>
        <HeroSection />
        {/* Temporarily comment out to test */}
        {/* <CollectionSeriesSection /> */}
        <ProductShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
