'use client';

import { Button } from '@/components/ui/Button';

const featuredDishes = [
  {
    id: 1,
    name: 'Rib Dinner',
    description: 'Fall-off-the-bone tender ribs glazed with our signature BBQ sauce. Slow-cooked to perfection and served with your choice of two soul-warming sides and cornbread.',
    price: 19.00,
    image: '/images/menu/rib-dinner.jpg',
    imagePosition: '50% 70%',
    tag: 'Best Seller',
    scarcity: 'Selling Fast!',
    stock: 'low',
  },
  {
    id: 2,
    name: 'Oxtails Dinner',
    description: 'Tender, succulent oxtails braised for hours in rich, savory gravy until they melt off the bone. A true soul food delicacy served with two sides.',
    price: 30.00,
    image: '/images/menu/oxtails-dinner-new.jpg',
    imagePosition: '50% 100%',
    imageTransform: 'translateY(-15%)',
    imageFilter: 'brightness(1.05) contrast(1.1) saturate(1.15)',
    tag: 'Premium',
    scarcity: 'Limited Daily!',
    stock: 'low',
  },
  {
    id: 3,
    name: 'Catfish Dinner',
    description: 'Golden-fried catfish fillets seasoned with our signature blend and fried to crispy perfection. Fresh, flaky, and full of flavor. Served with two sides and cornbread.',
    price: 18.00,
    image: '/images/menu/catfish-dinner.jpg',
    imagePosition: '50% 100%',
    imageTransform: 'translateY(-15%)',
    imageFilter: 'brightness(1.15) contrast(1.2) saturate(1.25)',
    tag: 'Signature',
    scarcity: null,
    stock: 'high',
  },
  {
    id: 4,
    name: 'Smothered Pork Chops',
    description: 'Juicy pork chops smothered in rich, savory gravy with caramelized onions. Slow-cooked until tender and served with two delicious sides.',
    price: 17.00,
    image: '/images/menu/smothered-pork-chops.jpg',
    imagePosition: '50% 100%',
    imageTransform: 'translateY(-25%)',
    tag: 'Fan Favorite',
    scarcity: '15 people viewing',
    stock: 'high',
  },
  {
    id: 5,
    name: 'Whole Wings',
    description: 'Crispy fried whole chicken wings seasoned and cooked to golden perfection. Juicy on the inside, crunchy on the outside. Served with two sides.',
    price: 17.00,
    image: '/images/menu/whole-wings.jpg',
    imagePosition: '50% 60%',
    tag: 'Popular',
    scarcity: null,
    stock: 'high',
  },
  {
    id: 6,
    name: 'Meat Loaf',
    description: 'Homestyle meatloaf made with our family recipe, topped with savory gravy. Comfort food at its finest, served with two sides and fresh cornbread.',
    price: 18.00,
    image: '/images/menu/meatloaf.jpg',
    imagePosition: '50% 100%',
    imageTransform: 'translateY(-40%)',
    imageFilter: 'brightness(1.15) contrast(1.2) saturate(1.25)',
    tag: 'Homestyle',
    scarcity: null,
    stock: 'high',
  },
];

export function FeaturedMenu() {
  return (
    <section id="featured-menu" className="py-16 lg:py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="relative flex flex-col items-center text-center mb-16">
          {/* Toledo Stamp - Left */}
          <img
            src="/images/branding/toledo-stamp.png"
            alt="Toledo Ohio"
            className="hidden lg:block absolute left-0 top-0 w-56 h-auto opacity-80"
          />

          <span className="inline-block px-5 py-2.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-bold uppercase tracking-wider rounded-full mb-6">
            Toledo's Most Beloved
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Table, Your Table
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed text-center">
            These are the dishes we grew up on—the ones that filled our grandmother's kitchen with warmth
            and our hearts with memories. Now, they're ready to do the same for you, crafted fresh daily
            and at your door in 20 minutes.
          </p>

          {/* Free Delivery Banner */}
          <div className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 bg-green-100 text-green-700 rounded-full">
            <span className="text-sm font-bold uppercase tracking-wide">
              Free Delivery on Orders $30+
            </span>
          </div>
        </div>

        {/* Featured Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredDishes.map((dish) => (
            <div
              key={dish.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
            >
              {/* Dish Image */}
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                {/* Actual Food Image */}
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  style={{
                    objectPosition: dish.imagePosition || '50% 50%',
                    transform: dish.imageTransform || 'none',
                    filter: dish.imageFilter || 'brightness(1.05) contrast(1.1) saturate(1.15)'
                  }}
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Tag Badge */}
                {dish.tag && (
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-wide rounded-full shadow-lg z-10">
                    {dish.tag}
                  </div>
                )}
              </div>

              {/* Dish Info */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-xl font-bold text-gray-900 group-hover:text-[var(--color-primary)] transition-colors">
                    {dish.name}
                  </h3>
                  <span className="text-2xl font-bold text-[var(--color-primary)] ml-2 flex-shrink-0">
                    ${dish.price.toFixed(2)}
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                  {dish.description}
                </p>

                {/* Scarcity Messaging + Button Container */}
                <div className="mt-auto">
                  {dish.scarcity && (
                    <div className={`text-xs font-bold mb-2 ${
                      dish.stock === 'low' ? 'text-red-600' :
                      dish.stock === 'medium' ? 'text-orange-600' :
                      'text-[var(--color-primary)]'
                    }`}>
                      {dish.scarcity}
                    </div>
                  )}
                  <Button
                  variant="primary"
                  size="md"
                  className="w-full font-bold"
                  onClick={() => console.log(`Add ${dish.name} to cart`)}
                >
                    Quick Add • ${dish.price.toFixed(2)}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => (window.location.href = '/menu')}
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
