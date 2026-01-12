import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram,
  Twitter
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import villagioLogo from '@/assets/villagio-logo.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Shop All Products' },
    { href: '/vendors', label: 'Become a Vendor' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const categoryLinks = [
    { href: '/products?category=vegetables', label: 'Fresh Vegetables' },
    { href: '/products?category=fruits', label: 'Organic Fruits' },
    { href: '/products?category=dairy', label: 'Dairy & Eggs' },
    { href: '/products?category=herbs', label: 'Herbs & Spices' },
    { href: '/vendors', label: 'Farm Direct' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src={villagioLogo} 
                alt="Villagio" 
                className="h-8 sm:h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-primary-foreground/70 mb-6 text-sm">
              Fresh, organic produce delivered from local 
              Kenyan farms directly to your doorstep.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Categories</h4>
            <ul className="space-y-2">
              {categoryLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm mb-6">
              <div className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Nairobi, Kenya</span>
              </div>
              <a 
                href="tel:+254706123456" 
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-orange transition-colors"
              >
                <Phone className="h-4 w-4" />
                +254 706 123 456
              </a>
              <a 
                href="mailto:info@villagiofresh.co.ke" 
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-orange transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@villagiofresh.co.ke
              </a>
            </div>
            
            {/* Newsletter */}
            <div>
              <p className="text-sm text-primary-foreground/70 mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 h-9 sm:h-10 text-sm"
                />
                <Button size="sm" className="bg-[#ED9121] hover:bg-[#ED9121]/90 text-white h-9 sm:h-10 px-4">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm">
            <p className="text-primary-foreground/60">
              © {currentYear} Villagio Farm Fresh. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-primary-foreground/60">
              <Link to="/privacy" className="hover:text-orange transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-orange transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-orange transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;