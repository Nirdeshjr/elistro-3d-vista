import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Scene3D } from './Scene3D';
import { Award, Users, Globe, Sparkles } from 'lucide-react';

export const AboutSection = () => {
  const achievements = [
    { icon: Award, title: '25+ Years', description: 'of Craftsmanship' },
    { icon: Users, title: '50,000+', description: 'Happy Customers' },
    { icon: Globe, title: '40+ Countries', description: 'Worldwide Reach' },
    { icon: Sparkles, title: '500+ Designs', description: 'Unique Collections' },
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
            Our Story
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Crafting <span className="text-gradient">Excellence</span>
            <br />Since 1999
          </h2>
          <p className="subtitle max-w-3xl mx-auto">
            Born from a passion for precision and an eye for beauty, Elistro has been 
            redefining luxury eyewear for over two decades. Every frame tells a story 
            of innovation, craftsmanship, and timeless elegance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-playfair font-semibold">
                Where Art Meets Function
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                At Elistro, we believe that eyewear is more than just a functional accessory—it's 
                a statement of personal style and an extension of your personality. Our master 
                craftsmen combine traditional techniques with cutting-edge technology to create 
                frames that are not only beautiful but built to last.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From the initial sketch to the final polish, every pair of Elistro glasses 
                undergoes our meticulous 127-step quality process, ensuring that what reaches 
                your hands is nothing short of perfection.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-playfair font-semibold">Our Commitment</h4>
              <ul className="space-y-3">
                {[
                  'Sustainable materials and ethical sourcing',
                  'Handcrafted precision in every detail',
                  'Innovative lens technology for optimal vision',
                  'Timeless designs that transcend trends'
                ].map((commitment, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">{commitment}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button variant="luxury" size="lg">
              Discover Our Heritage
            </Button>
          </div>

          {/* 3D Scene */}
          <div className="relative">
            <div className="aspect-square bg-depth-gradient rounded-2xl overflow-hidden shadow-elegant">
              <Scene3D 
                className="w-full h-full"
                eyewearColor="#2C2C2C"
                autoRotate={true}
                enableControls={false}
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 elegant-card p-4 animate-float">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">127</div>
                <div className="text-xs text-muted-foreground">Quality Steps</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 elegant-card p-4 animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-xs text-muted-foreground">Handcrafted</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="elegant-card p-8 transition-all duration-300 group-hover:shadow-glow">
                <achievement.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <div className="text-2xl lg:text-3xl font-bold text-gradient mb-2">
                  {achievement.title}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};