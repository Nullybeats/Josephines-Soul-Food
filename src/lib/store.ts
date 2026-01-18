'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, MenuItem, Product, ProductVariant } from '@/types';

interface CartState {
  items: CartItem[];
  isOpen: boolean;

  // Actions
  addItem: (item: MenuItem | Product, type: 'menu' | 'product', variant?: ProductVariant) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;

  // Computed
  getSubtotal: () => number;
  getTax: () => number;
  getTotal: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (item, type, variant) => {
        const { items } = get();
        const existingItemIndex = items.findIndex(
          (cartItem) =>
            cartItem.item.id === item.id &&
            cartItem.variant?.id === variant?.id
        );

        if (existingItemIndex > -1) {
          const updatedItems = [...items];
          updatedItems[existingItemIndex].quantity += 1;
          set({ items: updatedItems, isOpen: true });
        } else {
          const newItem: CartItem = {
            id: `${item.id}-${variant?.id || 'default'}-${Date.now()}`,
            type,
            item,
            quantity: 1,
            variant,
          };
          set({ items: [...items, newItem], isOpen: true });
        }
      },

      removeItem: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) });
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }

        const updatedItems = get().items.map((item) =>
          item.id === id ? { ...item, quantity } : item
        );
        set({ items: updatedItems });
      },

      clearCart: () => {
        set({ items: [] });
      },

      toggleCart: () => {
        set({ isOpen: !get().isOpen });
      },

      openCart: () => {
        set({ isOpen: true });
      },

      closeCart: () => {
        set({ isOpen: false });
      },

      getSubtotal: () => {
        return get().items.reduce((total, cartItem) => {
          const basePrice = cartItem.item.price;
          const variantModifier = cartItem.variant?.priceModifier || 0;
          return total + (basePrice + variantModifier) * cartItem.quantity;
        }, 0);
      },

      getTax: () => {
        const TAX_RATE = 0.0725; // 7.25% Ohio tax rate
        return Math.round(get().getSubtotal() * TAX_RATE * 100) / 100;
      },

      getTotal: () => {
        return get().getSubtotal() + get().getTax();
      },

      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: 'josephines-cart',
      partialize: (state) => ({ items: state.items }),
    }
  )
);

// UI State Store (for non-persistent UI state)
interface UIState {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  mobileMenuOpen: false,
  toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
  closeMobileMenu: () => set({ mobileMenuOpen: false }),
}));
