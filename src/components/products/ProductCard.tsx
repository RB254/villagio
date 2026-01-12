import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    slug: string;
    price: number;
    originalPrice?: number;
    unit: string;
    vendorName: string;
    rating: number;
    reviewCount: number;
    inStock: boolean;
    images: string[];
    tags?: string[];
  };
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const { addItem } = useCart();
  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100) 
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id);
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <Link to={`/products/${product.slug}`} className="group block">
        <div className="bg-card rounded-lg sm:rounded-xl overflow-hidden shadow-card hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden bg-muted">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Badges */}
            <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-col gap-1 sm:gap-2">
              {discount > 0 && (
                <Badge className="bg-accent text-accent-foreground text-xs">
                  -{discount}%
                </Badge>
              )}
              {product.tags?.includes('organic') && (
                <Badge variant="secondary" className="bg-leaf-light text-primary text-xs">
                  Organic
                </Badge>
              )}
            </div>

            {/* Quick Actions - Desktop Only */}
            <div className="hidden md:flex absolute top-3 right-3 flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                size="icon"
                variant="secondary"
                className="h-8 w-8 rounded-full bg-card/90 backdrop-blur-sm hover:bg-card shadow-sm"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            {/* Add to Cart Button - Desktop hover, Mobile always visible */}
            <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
              <Button
                size="sm"
                className="w-full h-9 sm:h-10 bg-primary hover:bg-primary-dark text-primary-foreground shadow-lg text-xs sm:text-sm"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="p-3 sm:p-4">
            {/* Vendor */}
            <p className="text-xs text-muted-foreground mb-1">{product.vendorName}</p>
            
            {/* Name */}
            <h3 className="text-sm sm:text-base font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 min-h-[2.5rem]">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2">
              <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-orange text-orange" />
              <span className="text-xs sm:text-sm font-medium">{product.rating}</span>
              <span className="text-xs text-muted-foreground">
                ({product.reviewCount})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-1 sm:gap-2 mt-2 sm:mt-3">
              <span className="text-base sm:text-lg font-bold text-foreground">
                KSh {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-xs sm:text-sm text-muted-foreground line-through">
                  KSh {product.originalPrice.toLocaleString()}
                </span>
              )}
              <span className="text-xs text-muted-foreground">
                {product.unit}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;