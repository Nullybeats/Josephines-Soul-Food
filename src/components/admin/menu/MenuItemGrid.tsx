'use client';

import { useState } from 'react';
import Image from 'next/image';
import { UtensilsCrossed, Star, X } from 'lucide-react';
import MenuItemEditModal, { type MenuItemData } from './MenuItemEditModal';

interface MenuItemGridProps {
  initialItems: MenuItemData[];
}

export default function MenuItemGrid({ initialItems }: MenuItemGridProps) {
  const [items, setItems] = useState<MenuItemData[]>(initialItems);
  const [editingItem, setEditingItem] = useState<MenuItemData | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleEdit = (item: MenuItemData) => {
    setEditingItem(item);
    setModalOpen(true);
  };

  const handleSaved = (updatedItem: MenuItemData) => {
    setItems((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  const handleToggleAvailable = async (item: MenuItemData) => {
    const newAvailable = !item.available;

    // Optimistic update
    setItems((prev) =>
      prev.map((i) =>
        i.id === item.id ? { ...i, available: newAvailable } : i
      )
    );

    try {
      const res = await fetch(`/api/admin/menu/${item.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ available: newAvailable }),
      });

      if (!res.ok) {
        // Revert on failure
        setItems((prev) =>
          prev.map((i) =>
            i.id === item.id ? { ...i, available: !newAvailable } : i
          )
        );
      }
    } catch {
      // Revert on error
      setItems((prev) =>
        prev.map((i) =>
          i.id === item.id ? { ...i, available: !newAvailable } : i
        )
      );
    }
  };

  if (items.length === 0) {
    return (
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
    );
  }

  return (
    <>
      {items.map((item) => (
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
                <h3 className="text-lg font-medium text-gray-900">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 capitalize">
                  {item.category.toLowerCase()}
                </p>
              </div>
              <p className="text-lg font-semibold text-[#816B3B]">
                ${item.price.toFixed(2)}
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
                  type="button"
                  role="switch"
                  aria-checked={item.available}
                  onClick={() => handleToggleAvailable(item)}
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

              <button
                onClick={() => handleEdit(item)}
                className="text-sm font-medium text-[#816B3B] hover:text-[#6B5830]"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      ))}

      <MenuItemEditModal
        item={editingItem}
        open={modalOpen}
        onOpenChange={setModalOpen}
        onSaved={handleSaved}
      />
    </>
  );
}
