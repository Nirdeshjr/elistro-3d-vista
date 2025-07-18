import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-elistro-charcoal border-t border-border/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-playfair font-bold text-gradient">Elistro</h3>
            <p className="text-muted-foreground">
              Crafting premium eyewear that combines timeless elegance with modern innovation. 
              See the world through our lens of luxury.
            </p>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-playfair font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {[
                'About Us',
                'Sunglasses',
                'Eyeglasses',
                'Virtual Try-On',
                'Size Guide',
                'Care Instructions'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h4 className="text-lg font-playfair font-semibold">Customer Service</h4>
            <ul className="space-y-3">
              {[
                'Contact Us',
                'Shipping Info',
                'Returns & Exchanges',
                'Size Guide',
                'FAQ',
                'Warranty'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-playfair font-semibold">Stay Connected</h4>
            <p className="text-muted-foreground text-sm">
              Subscribe to get special offers, free giveaways, and exclusive deals.
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="Enter your email"
                className="bg-background/50 border-border/50"
              />
              <Button className="w-full luxury-button">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 mt-12 border-t border-border/20">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <div className="font-medium">Email</div>
              <div className="text-sm text-muted-foreground">hello@elistro.com</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <div className="font-medium">Phone</div>
              <div className="text-sm text-muted-foreground">+1 (555) 123-4567</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <div>
              <div className="font-medium">Address</div>
              <div className="text-sm text-muted-foreground">123 Luxury Ave, NYC</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t border-border/20">
          <p className="text-sm text-muted-foreground">
            © 2024 Elistro. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};