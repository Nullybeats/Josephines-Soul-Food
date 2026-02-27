'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/Button';
import { useCartStore } from '@/lib/store';
import { formatPriceFromDollars, cn } from '@/lib/utils';
import { toast } from 'sonner';
import type { MenuItem, MenuCategory } from '@/types';

// Best sellers for featured section - drives visual hierarchy
const BEST_SELLERS = ['oxtails-dinner', 'rib-dinner', 'catfish-dinner', 'smothered-pork-chops'];

const categories: { id: MenuCategory; label: string }[] = [
  { id: 'entrees', label: 'Entrees' },
  { id: 'seafood', label: 'Seafood' },
  { id: 'sides', label: 'Sides' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'sunday', label: 'Sunday Specials' },
];

// Full menu data from Josephine's Soul Food Toledo - 902 Lagrange St
// Source: In-store menu (Full Menu.jpg, Menu 2.jpg)
const menuItems: MenuItem[] = [
  // ==================== ENTREES ====================
  {
    id: 'rib-dinner',
    name: 'Rib Dinner',
    description: 'Fall-off-the-bone tender ribs, slow-smoked for 6 hours and glazed with our tangy-sweet BBQ sauce. So juicy, you\'ll lick your fingers clean. Served with two soul-warming sides and fresh cornbread.',
    price: 19.00,
    category: 'entrees',
    tags: ['best-seller'],
    available: true,
    image: '/images/menu/rib-dinner.jpg',
  },
  {
    id: 'pork-chops',
    name: 'Pork Chops',
    description: 'Juicy, golden-fried pork chops seasoned with our special blend. Crispy on the outside, tender on the inside. Served with two sides.',
    price: 17.00,
    category: 'entrees',
    available: true,
    image: '/images/menu/pork-chops.jpg',
  },
  {
    id: 'smothered-pork-chops',
    name: 'Smothered Pork Chops',
    description: 'Thick-cut pork chops smothered in velvety brown gravy with sweet caramelized onions. Pan-seared, then slow-simmered until fork-tender. The gravy alone is worth the trip. Served with two sides.',
    price: 17.00,
    category: 'entrees',
    tags: ['best-seller'],
    available: true,
    image: '/images/menu/smothered-pork-chops.jpg',
  },
  {
    id: 'meatloaf',
    name: 'Meat Loaf',
    description: 'Homestyle meatloaf made with our family recipe, topped with savory brown gravy. Comfort food at its finest, served with two sides and cornbread.',
    price: 18.00,
    category: 'entrees',
    available: true,
    image: '/images/menu/meatloaf.jpg',
  },
  {
    id: 'roast-beef',
    name: 'Roast Beef',
    description: 'Slow-roasted beef cooked until tender, sliced and served with rich gravy. A hearty meal served with your choice of two sides.',
    price: 18.00,
    category: 'entrees',
    available: true,
  },
  {
    id: 'cube-steak',
    name: 'Cube Steak',
    description: 'Tenderized cube steak pan-fried to perfection and smothered in savory gravy. Served with two soul food sides.',
    price: 17.00,
    category: 'entrees',
    available: true,
  },
  {
    id: 'corned-beef',
    name: 'Corned Beef',
    description: 'Tender, flavorful corned beef prepared with our special seasonings. A satisfying meal served with two sides.',
    price: 19.00,
    category: 'entrees',
    available: true,
  },
  {
    id: 'baked-chicken',
    name: 'Baked Chicken',
    description: 'Seasoned and baked to golden perfection with our special blend of spices. Tender, juicy, and full of flavor. Served with two sides.',
    price: 16.00,
    category: 'entrees',
    available: true,
    image: '/images/menu/baked-chicken.jpg',
  },
  {
    id: 'whole-wings',
    name: 'Whole Wings',
    description: 'Crispy fried whole chicken wings seasoned and cooked to golden perfection. Juicy on the inside, crunchy on the outside. Served with two sides.',
    price: 17.00,
    category: 'entrees',
    available: true,
    image: '/images/menu/whole-wings.jpg',
  },
  {
    id: 'turkey-meal',
    name: 'Turkey Meal',
    description: 'Tender sliced turkey served with rich gravy. A lighter option that doesn\'t skimp on flavor. Served with two sides.',
    price: 17.00,
    category: 'entrees',
    available: true,
  },
  {
    id: 'oxtails-dinner',
    name: 'Oxtails Dinner',
    description: 'Buttery-tender oxtails slow-braised for 8 hours in our grandmother\'s rich, peppery gravy. The meat melts right off the bone. A true soul food delicacy that sells out daily—served with two sides.',
    price: 30.00,
    category: 'entrees',
    tags: ['best-seller'],
    available: true,
    image: '/images/menu/oxtails-dinner-new.jpg',
    imagePosition: '50% 100%',
  },
  {
    id: 'chitterlings',
    name: 'Chitterlings',
    description: 'Traditional southern chitterlings cleaned and prepared the old-fashioned way. A soul food classic for those who know. Served with two sides.',
    price: 55.00,
    category: 'entrees',
    tags: ['new'],
    available: true,
  },
  {
    id: 'lasagna',
    name: 'Lasagna',
    description: 'Layers of pasta, seasoned meat, and melted cheese baked to bubbly perfection. Soul food with an Italian twist. Served with two sides.',
    price: 17.00,
    category: 'entrees',
    available: true,
  },
  // ==================== SEAFOOD ====================
  {
    id: 'catfish-dinner',
    name: 'Catfish Dinner',
    description: 'Crispy golden catfish with a crunchy cornmeal crust and tender, flaky white meat inside. Seasoned with our secret spice blend and fried until perfectly golden. Served with hot sauce, two sides & cornbread.',
    price: 18.00,
    category: 'seafood',
    tags: ['best-seller'],
    available: true,
    image: '/images/menu/catfish-dinner.jpg',
  },
  {
    id: 'tilapia-dinner',
    name: 'Tilapia Dinner',
    description: 'Lightly seasoned tilapia fillets fried to golden perfection. A milder fish option with all the soul food flavor. Served with two sides.',
    price: 17.00,
    category: 'seafood',
    available: true,
  },
  {
    id: 'whiting-fish',
    name: 'Whiting Fish',
    description: 'Classic southern-style fried whiting fish with a crispy golden coating. Light, flaky, and delicious. Served with two sides.',
    price: 17.00,
    category: 'seafood',
    available: true,
  },
  // ==================== DAILY SIDES ====================
  {
    id: 'mac-cheese',
    name: 'Mac & Cheese',
    description: 'Extra creamy, extra cheesy, absolutely irresistible. Made with three cheeses and baked until golden and bubbly on top. The side everyone fights over.',
    price: 4.50,
    category: 'sides',
    tags: ['best-seller'],
    available: true,
  },
  {
    id: 'greens',
    name: 'Greens',
    description: 'Tender collard greens slow-simmered for hours with smoked turkey. Seasoned just right—savory, slightly smoky, and soul-satisfying.',
    price: 4.50,
    category: 'sides',
    available: true,
  },
  {
    id: 'green-beans',
    name: 'Green Beans',
    description: 'Southern-style green beans cooked low and slow.',
    price: 4.00,
    category: 'sides',
    available: true,
  },
  {
    id: 'yams',
    name: 'Yams',
    description: 'Sweet, candied yams glazed with brown sugar and spices.',
    price: 4.50,
    category: 'sides',
    available: true,
  },
  {
    id: 'potato-salad',
    name: 'Potato Salad',
    description: 'Creamy homestyle potato salad made fresh daily.',
    price: 4.50,
    category: 'sides',
    available: true,
  },
  {
    id: 'spaghetti',
    name: 'Spaghetti',
    description: 'Classic spaghetti with our homemade meat sauce.',
    price: 4.50,
    category: 'sides',
    available: true,
  },
  {
    id: 'cabbage',
    name: 'Cabbage',
    description: 'Southern-style cabbage cooked with seasoning and love.',
    price: 4.00,
    category: 'sides',
    available: true,
  },
  {
    id: 'fries',
    name: 'Fries',
    description: 'Golden, crispy french fries.',
    price: 4.00,
    category: 'sides',
    available: true,
  },
  {
    id: 'okra',
    name: 'Okra',
    description: 'Crispy fried okra, a southern classic.',
    price: 4.50,
    category: 'sides',
    available: true,
  },
  // ==================== DESSERTS ====================
  {
    id: 'peach-cobbler',
    name: 'Peach Cobbler',
    description: 'Warm, bubbling peach cobbler with a golden buttery crust. Sweet cinnamon-spiced peaches that melt in your mouth. Best served warm with vanilla ice cream.',
    price: 4.50,
    category: 'desserts',
    tags: ['best-seller'],
    available: true,
  },
  {
    id: 'banana-pudding',
    name: 'Banana Pudding',
    description: 'Creamy layers of vanilla wafers, fresh bananas, and rich pudding.',
    price: 4.50,
    category: 'desserts',
    available: true,
  },
  {
    id: 'lemon-cake',
    name: 'Lemon Cake',
    description: 'Moist lemon cake with sweet lemon glaze.',
    price: 5.00,
    category: 'desserts',
    available: true,
  },
  {
    id: 'chocolate-cake',
    name: 'Chocolate Cake',
    description: 'Rich, decadent chocolate cake for the chocolate lovers.',
    price: 5.00,
    category: 'desserts',
    available: true,
  },
  // ==================== SUNDAY SPECIALS (Sides) ====================
  {
    id: 'rice',
    name: 'Rice',
    description: 'Fluffy white rice, perfect for soaking up gravy. Sunday only.',
    price: 4.00,
    category: 'sunday',
    available: true,
  },
  {
    id: 'mashed-potatoes',
    name: 'Mashed Potatoes',
    description: 'Creamy mashed potatoes made fresh. Sunday only.',
    price: 4.00,
    category: 'sunday',
    available: true,
  },
  {
    id: 'dressing',
    name: 'Dressing',
    description: 'Homemade cornbread dressing, just like grandma made. Sunday only.',
    price: 4.50,
    category: 'sunday',
    available: true,
  },
  {
    id: 'corn',
    name: 'Corn',
    description: 'Sweet buttered corn. Sunday only.',
    price: 4.00,
    category: 'sunday',
    available: true,
  },
  {
    id: 'coleslaw',
    name: 'Coleslaw',
    description: 'Creamy, tangy coleslaw. Sunday only.',
    price: 4.00,
    category: 'sunday',
    available: true,
  },
  {
    id: 'black-eyed-peas',
    name: 'Black Eyed Peas',
    description: 'Traditional black eyed peas cooked with seasonings. Sunday only.',
    price: 4.50,
    category: 'sunday',
    available: true,
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('entrees');
  const addItem = useCartStore((state) => state.addItem);

  const filteredItems = menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="pb-32 md:pb-16 min-h-screen bg-gray-50 snap-y snap-proximity">
      {/* Hero Section - Optimized */}
      <section className="pt-48 pb-20 lg:pt-52 lg:pb-28 relative overflow-hidden min-h-[78vh] lg:min-h-[78vh] flex items-center snap-start snap-always">
        {/* Background Image - Next.js Optimized */}
        <Image
          src="/images/menu/menu-hero-bg.png"
          alt="Soul food menu - Josephine's Toledo Ohio"
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: '50% 40%' }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />
        <Container size="wide">
          <div className="flex flex-col items-center text-center relative z-10">
            <span className="inline-block px-6 py-3 bg-[var(--color-primary)] text-white text-sm font-bold uppercase tracking-wider rounded-full mb-8">
              Toledo's Best Soul Food Menu
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight" style={{ color: '#FFFFFF', textShadow: '0 4px 8px #000000' }}>
              Soul Food Made With Love
            </h1>
            <p className="text-xl sm:text-2xl max-w-3xl leading-relaxed" style={{ color: '#FFFFFF', textShadow: '0 2px 4px #000000' }}>
              Family recipes made fresh daily. Fried chicken, oxtails, catfish & more — ready for pickup in 15 minutes.
            </p>
            {/* Trust Signal */}
            <div className="mt-8 flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/20">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-white font-semibold">4.9 Rating · 500+ Reviews · Black-Owned Since 1987</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-[112px] z-30 bg-white shadow-sm border-b border-gray-100">
        <Container size="wide">
          <div className="flex gap-3 overflow-visible py-5 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all duration-300 text-sm relative overflow-hidden',
                  activeCategory === category.id
                    ? 'bg-[var(--color-primary)] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] hover:scale-105 hover:shadow-md'
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Best Sellers - Visual Hierarchy (Golden Triangle) */}
      {activeCategory === 'entrees' && (
        <section className="py-12 lg:py-16 bg-gradient-to-b from-amber-50 to-white">
          <Container size="wide">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                Toledo's Favorites
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
                Our Best Sellers
              </h2>
              <p className="text-gray-600 mt-2">The dishes that keep Toledo coming back</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuItems
                .filter((item) => BEST_SELLERS.includes(item.id))
                .map((item) => (
                  <div
                    key={item.id}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-amber-200 hover:border-[var(--color-primary)]"
                  >
                    {/* Large Image */}
                    <div className="relative h-48 overflow-hidden">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={`${item.name} - Best seller at Josephine's Soul Food Toledo`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          style={{ objectPosition: item.imagePosition || '50% 50%' }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200" />
                      )}
                      <div className="absolute top-3 left-3 px-3 py-1.5 bg-amber-500 text-white text-xs font-bold uppercase rounded-full shadow-lg">
                        Best Seller
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-display text-lg font-bold text-gray-900">{item.name}</h3>
                        <span className="text-xl font-bold text-[var(--color-primary)]">
                          {formatPriceFromDollars(item.price)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-4">{item.description}</p>
                      <Button
                        variant="primary"
                        size="sm"
                        className="w-full"
                        onClick={() => { addItem(item, 'menu'); toast.success(`${item.name} added to cart`); }}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </Container>
        </section>
      )}

      {/* Menu Items */}
      <section className="py-16 lg:py-20 bg-gray-50 snap-start">
        <Container size="wide">
          {/* Section header for non-entrees */}
          {activeCategory !== 'entrees' && (
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl font-bold text-gray-900 capitalize">
                {categories.find(c => c.id === activeCategory)?.label}
              </h2>
            </div>
          )}
          {activeCategory === 'entrees' && (
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900">All Entrees</h2>
            </div>
          )}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[var(--color-primary)]/30"
              >
                {/* Item Image - Next.js Optimized */}
                <div className="w-24 h-24 bg-[var(--color-cream)] rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden relative">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={`${item.name} - Soul food at Josephine's Toledo Ohio`}
                      fill
                      sizes="96px"
                      className="object-cover"
                      style={{ objectPosition: item.imagePosition || '50% 50%' }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-primary)]/20 flex items-center justify-center">
                      <span className="text-[var(--color-primary)] font-bold text-xs uppercase tracking-wide">
                        {item.category}
                      </span>
                    </div>
                  )}
                </div>

                {/* Item Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-display text-lg font-bold text-[var(--color-charcoal)]">
                      {item.name}
                    </h3>
                    <span className="font-bold text-[var(--color-primary)] whitespace-nowrap text-lg">
                      {formatPriceFromDollars(item.price)}
                    </span>
                  </div>

                  {/* Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex gap-2 mb-2">
                      {item.tags.map((tag) => (
                        <Badge
                          key={tag}
                          size="sm"
                          variant={tag === 'best-seller' ? 'gold' : tag === 'new' ? 'new' : 'primary'}
                        >
                          {tag === 'best-seller' ? 'Best Seller' : tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <p className="text-sm text-[var(--color-charcoal-light)] line-clamp-2 mb-3">
                    {item.description}
                  </p>

                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => { addItem(item, 'menu'); toast.success(`${item.name} added to cart`); }}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section for SEO - Neil Patel Recommended */}
      <section className="py-16 bg-white border-t border-gray-100">
        <Container size="narrow">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mt-2">Everything you need to know about ordering</p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">What are your most popular dishes?</h3>
              <p className="text-gray-600">Our best sellers are the Oxtails Dinner ($30), Rib Dinner ($19), Catfish Dinner ($18), and Smothered Pork Chops ($17). All dinners come with your choice of two sides and cornbread.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">How long does pickup take?</h3>
              <p className="text-gray-600">Most orders are ready for pickup in 15-20 minutes. During peak hours (12-2pm and 5-7pm), orders may take up to 30 minutes.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Do you offer delivery in Toledo?</h3>
              <p className="text-gray-600">Yes! We deliver to Downtown Toledo, Old West End, West Toledo, and East Toledo. Delivery is free on orders over $30. Order online or call (419) 242-6666.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">What sides do you offer?</h3>
              <p className="text-gray-600">Our daily sides include Mac & Cheese, Collard Greens, Green Beans, Candied Yams, Potato Salad, Spaghetti, Cabbage, Fries, and Fried Okra. Sunday specials include Rice, Mashed Potatoes, Dressing, and Black Eyed Peas.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Do you cater events in Toledo?</h3>
              <p className="text-gray-600">Absolutely! We cater weddings, corporate events, family reunions, and parties of all sizes. Contact us at (419) 242-6666 for a free quote on catering packages starting at $18 per person.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Sticky Order CTA - Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <Button
          variant="primary"
          size="lg"
          className="w-full font-bold"
          onClick={() => window.location.href = 'https://josephinessoulfood.com/menu'}
        >
          Order Now · Free Delivery $30+
        </Button>
      </div>
    </div>
  );
}
