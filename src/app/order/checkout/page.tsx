'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { useCartStore } from '@/lib/store';
import { formatPriceFromDollars, cn } from '@/lib/utils';

export default function CheckoutPage() {
  const { items, getSubtotal, getTax, getTotal } = useCartStore();
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');

  if (items.length === 0) {
    return (
      <div className="pt-20 pb-32 md:pb-16 min-h-screen bg-[var(--color-warm-white)] flex items-center">
        <Container size="narrow">
          <div className="text-center">
            <h1 className="font-display text-2xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-[var(--color-charcoal-light)] mb-8">
              Add some delicious items to your cart first!
            </p>
            <Link href="/menu">
              <Button variant="primary">Browse Menu</Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-32 md:pb-16 min-h-screen bg-[var(--color-warm-white)]">
      <Container size="wide">
        <div className="py-8">
          {/* Back Link */}
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-[var(--color-charcoal-light)] hover:text-[var(--color-primary)] mb-8"
          >
            &larr; Continue Shopping
          </Link>

          <h1 className="font-display text-[var(--text-h1)] font-bold text-[var(--color-charcoal)] mb-8">
            Checkout
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Order Type */}
              <div className="bg-white rounded-2xl p-6 shadow-[var(--shadow-soft)]">
                <h2 className="font-display text-xl font-bold mb-4">Order Type</h2>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setOrderType('pickup')}
                    className={cn(
                      'p-4 rounded-xl border-2 font-medium transition-all',
                      orderType === 'pickup'
                        ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5 text-[var(--color-primary)]'
                        : 'border-[var(--color-cream)] hover:border-[var(--color-charcoal-light)]'
                    )}
                  >
                    Pickup
                  </button>
                  <button
                    onClick={() => setOrderType('delivery')}
                    className={cn(
                      'p-4 rounded-xl border-2 font-medium transition-all',
                      orderType === 'delivery'
                        ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5 text-[var(--color-primary)]'
                        : 'border-[var(--color-cream)] hover:border-[var(--color-charcoal-light)]'
                    )}
                  >
                    Delivery (+$4.99)
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-6 shadow-[var(--shadow-soft)]">
                <h2 className="font-display text-xl font-bold mb-4">Contact Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--color-cream)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--color-cream)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--color-cream)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--color-cream)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                      placeholder="(419) 555-1234"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Address (conditional) */}
              {orderType === 'delivery' && (
                <div className="bg-white rounded-2xl p-6 shadow-[var(--shadow-soft)]">
                  <h2 className="font-display text-xl font-bold mb-4">Delivery Address</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Street Address</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-cream)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                        placeholder="123 Main Street"
                      />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="col-span-2 md:col-span-1">
                        <label className="block text-sm font-medium mb-2">City</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-[var(--color-cream)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                          placeholder="Toledo"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">State</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-[var(--color-cream)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                          placeholder="OH"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">ZIP</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-[var(--color-cream)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                          placeholder="44114"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Payment */}
              <div className="bg-white rounded-2xl p-6 shadow-[var(--shadow-soft)]">
                <h2 className="font-display text-xl font-bold mb-4">
                  Payment
                </h2>
                <div className="bg-[var(--color-cream)] rounded-xl p-6 text-center">
                  <p className="text-[var(--color-charcoal-light)]">
                    Stripe payment integration would go here.
                    <br />
                    This is a demo - no actual payments processed.
                  </p>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-[var(--shadow-soft)] sticky top-24">
                <h2 className="font-display text-xl font-bold mb-4">Order Summary</h2>

                {/* Items */}
                <ul className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <li key={item.id} className="flex justify-between text-sm">
                      <span className="text-[var(--color-charcoal)]">
                        {item.quantity}x {item.item.name}
                      </span>
                      <span className="text-[var(--color-charcoal-light)]">
                        {formatPriceFromDollars(item.item.price * item.quantity)}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Totals */}
                <div className="border-t border-[var(--color-cream)] pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>{formatPriceFromDollars(getSubtotal())}</span>
                  </div>
                  {orderType === 'delivery' && (
                    <div className="flex justify-between text-sm">
                      <span>Delivery</span>
                      <span>$4.99</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>{formatPriceFromDollars(getTax())}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t border-[var(--color-cream)]">
                    <span>Total</span>
                    <span className="text-[var(--color-primary)]">
                      {formatPriceFromDollars(getTotal() + (orderType === 'delivery' ? 4.99 : 0))}
                    </span>
                  </div>
                </div>

                <Button variant="primary" size="lg" className="w-full mt-6">
                  Place Order
                </Button>

                <p className="text-xs text-center text-[var(--color-charcoal-light)] mt-4">
                  By placing your order, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
