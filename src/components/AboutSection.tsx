import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export const AboutSection = () => {
  const commitments = [
    "Sustainable materials and ethical sourcing",
    "Handcrafted precision in every detail",
    "Innovative lens technology for unmatched clarity",
    "Timeless designs that transcend trends"
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Where <span className="text-primary">Art</span> Meets <span className="text-primary">Function</span>
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                At Elistro, we believe that eyewear is more than just a 
                functional accessory — it's a statement of personality 
                and an extension of your identity. Our master craftsmen 
                blend <span className="text-primary font-semibold">heritage</span> techniques with cutting-edge innovation 
                to create eyewear that embodies both beauty and 
                endurance.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                From the initial sketch to the final polish, every pair 
                undergoes a meticulous process, ensuring that what 
                reaches your hands is perfection redefined.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Our Commitment</h3>
              <div className="space-y-4">
                {commitments.map((commitment, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{commitment}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-3 rounded-lg">
              Discover Our Heritage
            </Button>
          </div>
          
          {/* Right Content - Brand Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-orange-400/20 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center space-y-6">
                <h3 className="text-4xl font-bold text-white">ELISTRO EYEWEAR</h3>
                <p className="text-gray-300 max-w-sm mx-auto">
                  Discover stylish, high-quality eyewear for every occasion. See clearly, look amazing.
                </p>
                <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
                  <img 
                    src="/lovable-uploads/f2c0511c-b997-4423-b0c7-0848e9f823d9.png"
                    alt="Eyewear 1"
                    className="w-full h-16 object-contain"
                  />
                  <img 
                    src="/lovable-uploads/4a195fd6-1967-4a63-a225-78d725fa2ff2.png"
                    alt="Eyewear 2"
                    className="w-full h-16 object-contain"
                  />
                  <img 
                    src="/lovable-uploads/bba69f44-a769-4e18-bb75-11a5fd43e156.png"
                    alt="Eyewear 3"
                    className="w-full h-16 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};