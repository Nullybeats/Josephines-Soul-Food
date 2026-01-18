'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/Button';
import { useCartStore } from '@/lib/store';
import { formatPriceFromDollars, cn } from '@/lib/utils';
import type { MenuItem, MenuCategory } from '@/types';

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
    description: 'Fall-off-the-bone tender ribs glazed with our signature BBQ sauce. Slow-cooked to perfection and served with your choice of two sides and cornbread.',
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
    description: 'Tender pork chops smothered in rich, savory gravy with caramelized onions. Slow-cooked until they melt in your mouth. Served with two sides.',
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
    description: 'Tender, succulent oxtails braised for hours in rich, savory gravy until they melt off the bone. A true soul food delicacy served with two sides.',
    price: 30.00,
    category: 'entrees',
    tags: ['best-seller'],
    available: true,
    image: '/images/menu/oxtails-dinner.jpg',
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
    description: 'Golden-fried catfish fillets seasoned with our signature blend and fried to crispy perfection. Fresh, flaky, and full of flavor. Served with two sides.',
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
    description: 'Creamy, cheesy, and absolutely irresistible. Our classic mac and cheese baked to perfection.',
    price: 4.50,
    category: 'sides',
    tags: ['best-seller'],
    available: true,
  },
  {
    id: 'greens',
    name: 'Greens',
    description: 'Slow-cooked collard greens simmered with smoked meat for hours of flavor.',
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
    description: 'Warm, homemade peach cobbler with a buttery crust. Sweet perfection.',
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
    <div className="pt-20 pb-32 md:pb-16 min-h-screen bg-[var(--color-warm-white)]">
      {/* Header */}
      <section className="py-12 bg-[var(--color-cream)] texture-paper">
        <Container size="wide">
          <div className="text-center">
            <span className="inline-block text-[var(--color-gold)] font-semibold tracking-wider uppercase text-sm mb-4">
              Our Menu
            </span>
            <h1 className="font-display text-[var(--text-h1)] font-bold text-[var(--color-charcoal)]">
              Soul Food Made With Love
            </h1>
            <p className="text-[var(--color-charcoal-light)] mt-4 max-w-2xl mx-auto">
              Every dish is prepared fresh using family recipes passed down through generations.
            </p>
          </div>
        </Container>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-20 z-30 bg-[var(--color-warm-white)] border-b border-[var(--color-cream)] py-4">
        <Container size="wide">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all',
                  activeCategory === category.id
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'bg-[var(--color-cream)] text-[var(--color-charcoal)] hover:bg-[var(--color-parchment)]'
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <Container size="wide">
          <div className="grid md:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-6 bg-white rounded-2xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-all"
              >
                {/* Item Image */}
                <div className="w-24 h-24 bg-[var(--color-cream)] rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover brightness-110 contrast-105 saturate-110"
                      style={{
                        objectPosition: item.imagePosition || '50% 50%',
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-primary)]/20 flex items-center justify-center">
                      <span className="text-[var(--color-primary)] font-bold text-sm uppercase tracking-wide">
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
                    <span className="font-bold text-[var(--color-primary)] whitespace-nowrap">
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
                    onClick={() => addItem(item, 'menu')}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
