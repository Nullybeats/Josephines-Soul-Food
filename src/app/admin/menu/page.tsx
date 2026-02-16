import { requireAuth } from '@/lib/auth-utils';
import { prisma } from '@/lib/prisma';
import { UtensilsCrossed, Plus, Star, Check } from 'lucide-react';
import StatsCard from '@/components/admin/shared/StatsCard';
import MenuItemGrid from '@/components/admin/menu/MenuItemGrid';
import { MenuCategory } from '@prisma/client';

// Revalidate every 60 seconds
export const revalidate = 60;

const categories = [
  { value: 'ALL', label: 'All Items' },
  { value: 'ENTREES', label: 'Entrees' },
  { value: 'SEAFOOD', label: 'Seafood' },
  { value: 'SIDES', label: 'Sides' },
  { value: 'DESSERTS', label: 'Desserts' },
  { value: 'DRINKS', label: 'Drinks' },
  { value: 'SPECIALS', label: 'Specials' },
  { value: 'SUNDAY', label: 'Sunday' },
];

export default async function MenuPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  await requireAuth();

  const selectedCategory = searchParams.category as MenuCategory | 'ALL' | undefined;

  // Fetch menu statistics
  const [totalItems, availableItems, featuredItems, menuItems] = await Promise.all([
    prisma.menuItem.count(),
    prisma.menuItem.count({ where: { available: true } }),
    prisma.menuItem.count({ where: { featured: true } }),
    prisma.menuItem.findMany({
      where: selectedCategory && selectedCategory !== 'ALL'
        ? { category: selectedCategory as MenuCategory }
        : undefined,
      orderBy: { sortOrder: 'asc' },
    }),
  ]);

  const stats = [
    {
      label: 'Total Items',
      value: totalItems,
      icon: UtensilsCrossed,
      color: 'bg-blue-500',
    },
    {
      label: 'Available',
      value: availableItems,
      icon: Check,
      color: 'bg-green-500',
    },
    {
      label: 'Featured',
      value: featuredItems,
      icon: Star,
      color: 'bg-yellow-500',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-gray-900">
            Menu Management
          </h1>
          <p className="mt-2 text-gray-600">
            Add, edit, and manage menu items
          </p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#816B3B] hover:bg-[#6B5830] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#816B3B]">
          <Plus className="h-5 w-5 mr-2" />
          Add Menu Item
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <StatsCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>

      {/* Category Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8 overflow-x-auto" aria-label="Categories">
          {categories.map((category) => {
            const isActive = !selectedCategory
              ? category.value === 'ALL'
              : category.value === selectedCategory;

            return (
              <a
                key={category.value}
                href={`/admin/menu${category.value !== 'ALL' ? `?category=${category.value}` : ''}`}
                className={`
                  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                  ${
                    isActive
                      ? 'border-[#816B3B] text-[#816B3B]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                {category.label}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <MenuItemGrid
          initialItems={menuItems.map((item) => ({
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.price.toNumber(),
            category: item.category,
            image: item.image,
            imagePosition: item.imagePosition,
            available: item.available,
            featured: item.featured,
            tags: item.tags,
            allergens: item.allergens,
            prepTime: item.prepTime,
            sortOrder: item.sortOrder,
          }))}
        />
      </div>
    </div>
  );
}
