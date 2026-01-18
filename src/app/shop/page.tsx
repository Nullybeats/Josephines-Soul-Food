'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/Button';
import { useCartStore } from '@/lib/store';
import { formatPriceFromDollars } from '@/lib/utils';
import type { Product } from '@/types';

// Sample merchandise items
const products: Product[] = [
  {
    id: 'signature-sauce',
    name: "Josephine's Signature BBQ Sauce",
    description: 'Our famous BBQ sauce, bottled for you to enjoy at home. Sweet, tangy, and a little bit of heat.',
    price: 12.99,
    images: [],
    category: 'sauces',
    inStock: true,
  },
  {
    id: 'hot-sauce',
    name: "Grandma's Hot Sauce",
    description: 'Not for the faint of heart! Aged peppers blended to perfection.',
    price: 9.99,
    images: [],
    category: 'sauces',
    inStock: true,
  },
  {
    id: 'classic-tee',
    name: 'Classic Logo T-Shirt',
    description: '100% cotton tee featuring our vintage logo. Available in black and white.',
    price: 24.99,
    images: [],
    category: 'apparel',
    variants: [
      { id: 's', name: 'Size', value: 'S', inStock: true },
      { id: 'm', name: 'Size', value: 'M', inStock: true },
      { id: 'l', name: 'Size', value: 'L', inStock: true },
      { id: 'xl', name: 'Size', value: 'XL', inStock: true },
    ],
    inStock: true,
  },
  {
    id: 'heritage-hoodie',
    name: 'Heritage Hoodie',
    description: 'Cozy fleece-lined hoodie with embroidered logo. Perfect for chilly Ohio nights.',
    price: 54.99,
    images: [],
    category: 'apparel',
    variants: [
      { id: 's', name: 'Size', value: 'S', inStock: true },
      { id: 'm', name: 'Size', value: 'M', inStock: true },
      { id: 'l', name: 'Size', value: 'L', inStock: false },
      { id: 'xl', name: 'Size', value: 'XL', inStock: true },
    ],
    inStock: true,
  },
  {
    id: 'trucker-hat',
    name: 'Soul Food Trucker Hat',
    description: 'Classic trucker hat with embroidered patch. One size fits most.',
    price: 22.99,
    images: [],
    category: 'accessories',
    inStock: true,
  },
  {
    id: 'apron',
    name: '"Cook Like Grandma" Apron',
    description: 'Professional-grade apron with adjustable straps and front pockets.',
    price: 29.99,
    images: [],
    category: 'accessories',
    inStock: true,
  },
  {
    id: 'gift-set',
    name: 'Soul Food Starter Kit',
    description: 'Everything you need to bring the taste home: both sauces, a recipe card set, and a branded apron.',
    price: 59.99,
    images: [],
    category: 'gift-sets',
    inStock: true,
  },
  {
    id: 'sauce-trio',
    name: 'Sauce Trio Gift Box',
    description: 'BBQ Sauce, Hot Sauce, and our special Honey Butter Glaze in a beautiful gift box.',
    price: 34.99,
    images: [],
    category: 'gift-sets',
    inStock: true,
  },
];

const productLabels: Record<string, string> = {
  'signature-sauce': 'BBQ',
  'hot-sauce': 'Hot',
  'classic-tee': 'Tee',
  'heritage-hoodie': 'Hoodie',
  'trucker-hat': 'Hat',
  apron: 'Apron',
  'gift-set': 'Gift',
  'sauce-trio': 'Trio',
};

export default function ShopPage() {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (product: Product) => {
    addItem(product, 'product');
  };

  // Group products by category
  const sauces = products.filter((p) => p.category === 'sauces');
  const apparel = products.filter((p) => p.category === 'apparel');
  const accessories = products.filter((p) => p.category === 'accessories');
  const giftSets = products.filter((p) => p.category === 'gift-sets');

  return (
    <div className="pt-20 pb-32 md:pb-16 min-h-screen bg-[var(--color-warm-white)]">
      {/* Header */}
      <section className="py-12 bg-[var(--color-cream)] texture-paper">
        <Container size="wide">
          <div className="text-center">
            <span className="inline-block text-[var(--color-gold)] font-semibold tracking-wider uppercase text-sm mb-4">
              Shop Merch
            </span>
            <h1 className="font-display text-[var(--text-h1)] font-bold text-[var(--color-charcoal)]">
              Take the Taste Home
            </h1>
            <p className="text-[var(--color-charcoal-light)] mt-4 max-w-2xl mx-auto">
              Sauces, apparel, and gifts. Rep your favorite soul food spot and share the love.
            </p>
          </div>
        </Container>
      </section>

      {/* Products */}
      <section className="py-12">
        <Container size="wide">
          {/* Sauces */}
          <div className="mb-16">
            <h2 className="font-display text-2xl font-bold mb-6">
              Sauces & Seasonings
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sauces.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  label={productLabels[product.id]}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>

          {/* Apparel */}
          <div className="mb-16">
            <h2 className="font-display text-2xl font-bold mb-6">
              Apparel
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {apparel.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  label={productLabels[product.id]}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>

          {/* Accessories */}
          <div className="mb-16">
            <h2 className="font-display text-2xl font-bold mb-6">
              Accessories
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accessories.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  label={productLabels[product.id]}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>

          {/* Gift Sets */}
          <div>
            <h2 className="font-display text-2xl font-bold mb-6">
              Gift Sets
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {giftSets.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  label={productLabels[product.id]}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

function ProductCard({
  product,
  label,
  onAddToCart,
}: {
  product: Product;
  label: string;
  onAddToCart: (product: Product) => void;
}) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative aspect-square bg-gradient-to-br from-[var(--color-cream)] to-[var(--color-parchment)] flex items-center justify-center">
        <span className="text-4xl font-bold text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300">
          {label}
        </span>

        {/* Quick Add */}
        <button
          onClick={() => onAddToCart(product)}
          className="absolute bottom-4 right-4 w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-[var(--color-primary-dark)] hover:scale-110"
          aria-label={`Add ${product.name} to cart`}
        >
          <span className="text-2xl font-bold">+</span>
        </button>

        {/* Out of Stock Badge */}
        {!product.inStock && (
          <div className="absolute top-4 left-4">
            <Badge variant="primary">Sold Out</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="font-display text-lg font-bold text-[var(--color-charcoal)] group-hover:text-[var(--color-primary)] transition-colors">
            {product.name}
          </h3>
          <span className="font-bold text-[var(--color-primary)] text-lg whitespace-nowrap">
            {formatPriceFromDollars(product.price)}
          </span>
        </div>
        <p className="text-[var(--color-charcoal-light)] text-sm line-clamp-2 mb-4">
          {product.description}
        </p>

        {/* Variants preview */}
        {product.variants && product.variants.length > 0 && (
          <p className="text-xs text-[var(--color-charcoal-light)] mb-4">
            Sizes: {product.variants.map((v) => v.value).join(', ')}
          </p>
        )}

        <Button
          variant="secondary"
          size="sm"
          className="w-full"
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
        >
          {product.inStock ? 'Add to Cart' : 'Sold Out'}
        </Button>
      </div>
    </div>
  );
}
