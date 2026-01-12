import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Truck,
  Shield,
  Headphones,
  ChevronRight,
  Leaf,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import MainLayout from '@/components/layout/MainLayout';
import ProductCard from '@/components/products/ProductCard';
import CategoryCard from '@/components/categories/CategoryCard';
import { products, categories, vendors } from '@/data/mockData';

// Hero images
import heroSlide1 from '@/assets/hero-slide1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';
import heroSlide4 from '@/assets/hero-slide-4.jpg';

const heroImages = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

const Index: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProducts = products.slice(0, 8);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Truck,
      title: 'Same Day Delivery',
      description: 'Fresh products delivered within hours',
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: '100% fresh and organic certified',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Always here to help you',
    },
  ];

  return (
    <MainLayout>
      <main className="flex flex-col min-h-[100svh] w-full overflow-x-hidden">

        {/* ================= HERO ================= */}
        <section className="relative flex items-center w-full min-h-[100svh] bg-[hsl(152,45%,16%)]">
          <div className="container py-16 lg:py-24 flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col"
              >
                <Badge className="w-fit mb-4 bg-secondary/20 text-secondary border-secondary/30">
                  <Leaf className="h-3 w-3 mr-1" />
                  Fresh from Farm to Your Home
                </Badge>

                <h1 className="text-4xl sm:text-5xl xl:text-[3.5rem] font-bold leading-tight text-primary-foreground mb-6">
                  Fresh, Organic
                  <br />
                  Produce Delivered
                  <br />
                  to Your Doorstep
                </h1>

                <p className="text-lg text-primary-foreground/80 max-w-lg mb-8">
                  Shop from local Kenyan farms and get fresh vegetables, fruits,
                  dairy, and more delivered same day.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <Button size="lg" className="bg-secondary gap-2" asChild>
                    <Link to="/products">
                      Shop Now <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-primary-foreground bg-white/10 hover:bg-secondary hover:text-secondary-foreground"
                    asChild
                  >
                    <Link to="/vendors">Browse Vendors</Link>
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4 max-w-md">
                  <Stat value="500+" label="Products" />
                  <Stat value="87" label="Vendors" />
                  <Stat value="10K+" label="Customers" />
                  <div className="bg-card rounded-lg px-4 py-3">
                    <div className="text-xs text-muted-foreground">
                      Special Offer
                    </div>
                    <div className="text-lg font-bold text-primary">
                      20% OFF
                    </div>
                    <div className="text-xs text-muted-foreground">
                      First Order
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative w-full max-w-lg mx-auto lg:mx-0"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentSlide}
                      src={heroImages[currentSlide]}
                      alt="Fresh produce"
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {heroImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`h-2 rounded-full transition-all ${
                          i === currentSlide
                            ? 'bg-secondary w-6'
                            : 'bg-white/50 w-2'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-center"
                >
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <f.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {f.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CATEGORIES ================= */}
        <section className="py-20">
          <div className="container">
            <Header
              title="Shop by Category"
              subtitle="Browse our wide selection"
              link="/categories"
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((c, i) => (
                <CategoryCard key={c.id} category={c} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ================= PRODUCTS ================= */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <Header
              title="Featured Products"
              subtitle="Fresh picks for you"
              link="/products"
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {featuredProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ================= NEWSLETTER ================= */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-3">
                Stay Fresh with Our Newsletter
              </h2>
              <p className="text-muted-foreground mb-6">
                Weekly updates, offers, and farming tips
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input placeholder="Enter your email" />
                <Button className="bg-secondary">Subscribe</Button>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </MainLayout>
  );
};

export default Index;

/* ===== Helpers ===== */

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div>
    <div className="text-3xl font-bold text-secondary">{value}</div>
    <div className="text-sm text-primary-foreground/70">{label}</div>
  </div>
);

const Header = ({
  title,
  subtitle,
  link,
}: {
  title: string;
  subtitle: string;
  link: string;
}) => (
  <div className="flex justify-between items-end mb-8">
    <div>
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-muted-foreground">{subtitle}</p>
    </div>
    <Button variant="ghost" className="hidden md:flex" asChild>
      <Link to={link}>
        View All <ChevronRight className="h-4 w-4 ml-1" />
      </Link>
    </Button>
  </div>
);



