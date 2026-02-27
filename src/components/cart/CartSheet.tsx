'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useCartStore } from '@/lib/store';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/Button';
import { toast } from 'sonner';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import type { CartItem, MenuItem, Product } from '@/types';

function getItemImage(cartItem: CartItem): string | undefined {
  if (cartItem.type === 'menu') return (cartItem.item as MenuItem).image;
  const product = cartItem.item as Product;
  return product.images?.[0];
}

function getItemPrice(cartItem: CartItem): number {
  return cartItem.item.price + (cartItem.variant?.priceModifier || 0);
}

export function CartSheet() {
  const [mounted, setMounted] = useState(false);

  const isOpen = useCartStore((s) => s.isOpen);
  const closeCart = useCartStore((s) => s.closeCart);
  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const clearCart = useCartStore((s) => s.clearCart);
  const getSubtotal = useCartStore((s) => s.getSubtotal);
  const getTax = useCartStore((s) => s.getTax);
  const getTotal = useCartStore((s) => s.getTotal);
  const getItemCount = useCartStore((s) => s.getItemCount);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const itemCount = getItemCount();
  const subtotal = getSubtotal();
  const tax = getTax();
  const total = getTotal();

  const handleRemoveItem = (item: CartItem) => {
    removeItem(item.id);
    toast(`${item.item.name} removed from cart`);
  };

  const handleClearCart = () => {
    clearCart();
    toast('Cart cleared');
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => { if (!open) closeCart(); }}>
      <SheetContent side="right" className="flex flex-col w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-lg">
            Your Cart
            {itemCount > 0 && (
              <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-[#816B3B] rounded-full">
                {itemCount}
              </span>
            )}
          </SheetTitle>
          <SheetDescription>
            Review your items before checkout
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center px-4">
            <ShoppingBag className="w-16 h-16 text-gray-300" />
            <div>
              <p className="text-lg font-semibold text-gray-900">Your cart is empty</p>
              <p className="text-sm text-gray-500 mt-1">Add some delicious soul food!</p>
            </div>
            <Button
              variant="primary"
              onClick={() => {
                closeCart();
                window.location.href = '/menu';
              }}
              className="bg-[#816B3B] hover:bg-[#6B5830] text-white"
            >
              Browse Menu
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-4 px-4">
              <div className="space-y-1">
                {items.map((cartItem, index) => {
                  const image = getItemImage(cartItem);
                  const unitPrice = getItemPrice(cartItem);

                  return (
                    <div key={cartItem.id}>
                      <div className="flex gap-3 py-3">
                        {/* Item image */}
                        {image && (
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                            <Image
                              src={image}
                              alt={cartItem.item.name}
                              fill
                              sizes="64px"
                              className="object-cover"
                            />
                          </div>
                        )}

                        {/* Item details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h4 className="text-sm font-semibold text-gray-900 truncate">
                                {cartItem.item.name}
                              </h4>
                              {cartItem.variant && (
                                <p className="text-xs text-gray-500">{cartItem.variant.name}</p>
                              )}
                            </div>
                            <button
                              onClick={() => handleRemoveItem(cartItem)}
                              className="p-1 text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                              aria-label={`Remove ${cartItem.item.name}`}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="flex items-center justify-between mt-2">
                            {/* Quantity controls */}
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}
                                className="w-7 h-7 flex items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-8 text-center text-sm font-medium">
                                {cartItem.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
                                className="w-7 h-7 flex items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            {/* Price */}
                            <span className="text-sm font-bold text-[#816B3B]">
                              ${(unitPrice * cartItem.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                      {index < items.length - 1 && <Separator />}
                    </div>
                  );
                })}
              </div>
            </ScrollArea>

            <div className="border-t pt-4 space-y-3">
              {/* Totals */}
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (7.25%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-base text-gray-900">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Action buttons */}
              <SheetFooter className="flex-col gap-2 p-0 mt-0">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full bg-[#816B3B] hover:bg-[#6B5830] text-white font-bold"
                  onClick={() => {
                    closeCart();
                    window.location.href = '/menu';
                  }}
                >
                  Order Now - ${total.toFixed(2)}
                </Button>
                <button
                  onClick={handleClearCart}
                  className="text-sm text-gray-500 hover:text-red-500 transition-colors"
                >
                  Clear Cart
                </button>
              </SheetFooter>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
