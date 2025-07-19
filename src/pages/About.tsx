import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Eye, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-depth-gradient overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Since 2010</span>
            </div>
            
            <h1 className="hero-title mb-6">Crafting Vision, <span className="text-gradient">Defining Style</span></h1>
            <p className="subtitle max-w-3xl mx-auto">
              At Elistro, we believe that exceptional eyewear is more than just a vision correction tool—it's a statement of personal style, a reflection of your unique perspective on the world.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    Founded in 2010 by optical engineer Maria Elistro, our company emerged from a simple yet profound vision: to create eyewear that seamlessly blends cutting-edge technology with timeless design aesthetics.
                  </p>
                  <p>
                    What started as a small workshop in Milan has grown into a globally recognized brand, yet we remain true to our artisanal roots. Every frame is meticulously crafted by skilled artisans who understand that great eyewear requires both precision engineering and artistic vision.
                  </p>
                  <p>
                    Today, Elistro represents the perfect harmony between traditional craftsmanship and modern innovation, serving customers who demand nothing less than excellence in their eyewear.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden elegant-card">
                  <img 
                    src="/lovable-uploads/bba69f44-a769-4e18-bb75-11a5fd43e156.png"
                    alt="Elistro Craftsmanship"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Values</h2>
              <p className="subtitle max-w-2xl mx-auto">
                The principles that guide every decision we make and every frame we create
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-muted-foreground">
                  We pursue perfection in every detail, from the selection of premium materials to the final quality inspection.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  Constantly pushing boundaries with new technologies and design approaches to enhance your visual experience.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Community</h3>
                <p className="text-muted-foreground">
                  Building lasting relationships with our customers and supporting the communities where we operate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="subtitle max-w-2xl mx-auto">
                The passionate individuals behind every Elistro creation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Maria Elistro",
                  role: "Founder & Chief Designer",
                  image: "/lovable-uploads/f016259a-3064-405a-a0a7-d6dce95c81df.png"
                },
                {
                  name: "Alessandro Rossi",
                  role: "Master Craftsman",
                  image: "/lovable-uploads/bffdc00a-e349-4760-87e5-d3245ccd89a0.png"
                },
                {
                  name: "Sophie Chen",
                  role: "Innovation Director",
                  image: "/lovable-uploads/eaf91e9d-d05c-4596-ab12-a288c79b3237.png"
                }
              ].map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden elegant-card">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-depth-gradient">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Experience the Elistro Difference</h2>
            <p className="subtitle mb-8">
              Join thousands of satisfied customers who have discovered the perfect blend of style, comfort, and quality.
            </p>
            <Button className="luxury-button group">
              Explore Our Collections
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;