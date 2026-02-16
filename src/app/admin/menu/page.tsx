import { requireAuth } from '@/lib/auth-utils';
import { prisma } from '@/lib/prisma';
import { UtensilsCrossed, Plus, Star, Check, X } from 'lucide-react';
import Image from 'next/image';
import StatsCard from '@/components/admin/shared/StatsCard';
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
        {menuItems.length === 0 ? (
          <div className="col-span-full">
            <div className="bg-white shadow rounded-lg border border-gray-200 p-12">
              <div className="text-center">
                <UtensilsCrossed className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  No menu items
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Get started by adding a new menu item.
                </p>
              </div>
            </div>
          </div>
        ) : (
          menuItems.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 bg-gray-200">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: item.imagePosition || '50% 50%' }}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <UtensilsCrossed className="h-16 w-16 text-gray-400" />
                  </div>
                )}

                {/* Badges */}
                <div className="absolute top-2 right-2 flex gap-2">
                  {item.featured && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </span>
                  )}
                  {!item.available && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      <X className="h-3 w-3 mr-1" />
                      Unavailable
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500 capitalize">{item.category.toLowerCase()}</p>
                  </div>
                  <p className="text-lg font-semibold text-[#816B3B]">
                    ${item.price.toNumber().toFixed(2)}
                  </p>
                </div>

                {item.description && (
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                )}

                {/* Tags */}
                {item.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                        +{item.tags.length - 3} more
                      </span>
                    )}
                  </div>
                )}

                {/* Actions */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#816B3B] focus:ring-offset-2 ${
                        item.available ? 'bg-[#816B3B]' : 'bg-gray-200'
                      }`}
                      title="Toggle availability"
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          item.available ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                    <span className="text-xs text-gray-500">Available</span>
                  </div>

                  <button className="text-sm font-medium text-[#816B3B] hover:text-[#6B5830]">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
