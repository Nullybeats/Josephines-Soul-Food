'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog';
import { Loader2 } from 'lucide-react';

const CATEGORIES = [
  { value: 'ENTREES', label: 'Entrees' },
  { value: 'SEAFOOD', label: 'Seafood' },
  { value: 'SIDES', label: 'Sides' },
  { value: 'DESSERTS', label: 'Desserts' },
  { value: 'DRINKS', label: 'Drinks' },
  { value: 'SPECIALS', label: 'Specials' },
  { value: 'SUNDAY', label: 'Sunday' },
];

export interface MenuItemData {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string | null;
  imagePosition: string | null;
  available: boolean;
  featured: boolean;
  tags: string[];
  allergens: string[];
  prepTime: number | null;
  sortOrder: number;
}

interface MenuItemEditModalProps {
  item: MenuItemData | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSaved: (updatedItem: MenuItemData) => void;
}

export default function MenuItemEditModal({
  item,
  open,
  onOpenChange,
  onSaved,
}: MenuItemEditModalProps) {
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [available, setAvailable] = useState(true);
  const [featured, setFeatured] = useState(false);
  const [tagsInput, setTagsInput] = useState('');
  const [allergensInput, setAllergensInput] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [sortOrder, setSortOrder] = useState('0');

  // Reset form when item changes
  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen && item) {
      setName(item.name);
      setDescription(item.description);
      setPrice(item.price.toString());
      setCategory(item.category);
      setImage(item.image || '');
      setAvailable(item.available);
      setFeatured(item.featured);
      setTagsInput(item.tags.join(', '));
      setAllergensInput(item.allergens.join(', '));
      setPrepTime(item.prepTime?.toString() || '');
      setSortOrder(item.sortOrder.toString());
      setError(null);
    }
    onOpenChange(isOpen);
  };

  const handleSave = async () => {
    if (!item) return;

    setSaving(true);
    setError(null);

    try {
      const tags = tagsInput
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean);
      const allergens = allergensInput
        .split(',')
        .map((a) => a.trim())
        .filter(Boolean);

      const body = {
        name,
        description,
        price,
        category,
        image: image || null,
        available,
        featured,
        tags,
        allergens,
        prepTime: prepTime || null,
        sortOrder,
      };

      const res = await fetch(`/api/admin/menu/${item.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to update menu item');
      }

      const updated = await res.json();

      onSaved({
        ...item,
        name,
        description,
        price: parseFloat(price),
        category,
        image: image || null,
        available,
        featured,
        tags,
        allergens,
        prepTime: prepTime ? parseInt(prepTime) : null,
        sortOrder: parseInt(sortOrder),
      });

      onOpenChange(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Menu Item</DialogTitle>
          <DialogDescription>
            Update the details for this menu item.
          </DialogDescription>
        </DialogHeader>

        {error && (
          <div className="rounded-md bg-red-50 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="grid gap-4 py-2">
          {/* Name */}
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#816B3B] focus:border-transparent"
            />
          </div>

          {/* Description */}
          <div className="grid gap-2">
            <label htmlFor="description" className="text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#816B3B] focus:border-transparent"
            />
          </div>

          {/* Price + Category Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label htmlFor="price" className="text-sm font-medium text-gray-700">
                Price ($)
              </label>
              <input
                id="price"
                type="number"
                step="0.01"
                min="0"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#816B3B] focus:border-transparent"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="category" className="text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#816B3B] focus:border-transparent"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Image URL */}
          <div className="grid gap-2">
            <label htmlFor="image" className="text-sm font-medium text-gray-700">
              Image Path
            </label>
            <input
              id="image"
              type="text"
              placeholder="/images/menu/item.jpg"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#816B3B] focus:border-transparent"
            />
          </div>

          {/* Toggles Row */}
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <button
                type="button"
                role="switch"
                aria-checked={available}
                onClick={() => setAvailable(!available)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#816B3B] focus:ring-offset-2 ${
                  available ? 'bg-[#816B3B]' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    available ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className="text-sm text-gray-700">Available</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <button
                type="button"
                role="switch"
                aria-checked={featured}
                onClick={() => setFeatured(!featured)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#816B3B] focus:ring-offset-2 ${
                  featured ? 'bg-yellow-500' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    featured ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className="text-sm text-gray-700">Featured</span>
            </label>
          </div>

          {/* Tags */}
          <div className="grid gap-2">
            <label htmlFor="tags" className="text-sm font-medium text-gray-700">
              Tags <span className="text-gray-400 font-normal">(comma-separated)</span>
            </label>
            <input
              id="tags"
              type="text"
              placeholder="spicy, gluten-free, popular"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#816B3B] focus:border-transparent"
            />
          </div>

          {/* Allergens */}
          <div className="grid gap-2">
            <label htmlFor="allergens" className="text-sm font-medium text-gray-700">
              Allergens <span className="text-gray-400 font-normal">(comma-separated)</span>
            </label>
            <input
              id="allergens"
              type="text"
              placeholder="dairy, gluten, nuts"
              value={allergensInput}
              onChange={(e) => setAllergensInput(e.target.value)}
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#816B3B] focus:border-transparent"
            />
          </div>

          {/* Prep Time + Sort Order Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label htmlFor="prepTime" className="text-sm font-medium text-gray-700">
                Prep Time <span className="text-gray-400 font-normal">(minutes)</span>
              </label>
              <input
                id="prepTime"
                type="number"
                min="0"
                value={prepTime}
                onChange={(e) => setPrepTime(e.target.value)}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#816B3B] focus:border-transparent"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="sortOrder" className="text-sm font-medium text-gray-700">
                Sort Order
              </label>
              <input
                id="sortOrder"
                type="number"
                min="0"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#816B3B] focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <DialogFooter>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            disabled={saving}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#816B3B] disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={saving || !name || !price}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#816B3B] hover:bg-[#6B5830] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#816B3B] disabled:opacity-50"
          >
            {saving && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
