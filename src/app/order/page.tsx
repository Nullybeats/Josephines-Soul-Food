'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export default function OrderPage() {
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');

  return (
    <div className="pt-20 pb-32 md:pb-16 min-h-screen bg-[var(--color-warm-white)]">
      {/* Header */}
      <section className="py-12 bg-[var(--color-cream)] texture-paper">
        <Container size="wide">
          <div className="text-center">
            <span className="inline-block text-[var(--color-gold)] font-semibold tracking-wider uppercase text-sm mb-4">
              Order Online
            </span>
            <h1 className="font-display text-[var(--text-h1)] font-bold text-[var(--color-charcoal)]">
              Get It While It&apos;s Hot!
            </h1>
            <p className="text-[var(--color-charcoal-light)] mt-4 max-w-2xl mx-auto">
              Order ahead for pickup or delivery. Fresh soul food ready when you are.
            </p>
          </div>
        </Container>
      </section>

      {/* Order Type Selection */}
      <section className="py-12">
        <Container size="narrow">
          <div className="bg-white rounded-3xl shadow-[var(--shadow-elevated)] p-8 md:p-12">
            <h2 className="font-display text-2xl font-bold text-center mb-8">
              How would you like your order?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Pickup Option */}
              <button
                onClick={() => setOrderType('pickup')}
                className={cn(
                  'p-6 rounded-2xl border-2 text-left transition-all',
                  orderType === 'pickup'
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5'
                    : 'border-[var(--color-cream)] hover:border-[var(--color-charcoal-light)]'
                )}
              >
                <h3 className="font-display text-xl font-bold mb-2">Pickup</h3>
                <p className="text-[var(--color-charcoal-light)] text-sm">
                  Order ahead and pick up at our location. Usually ready in 20-30 minutes.
                </p>
              </button>

              {/* Delivery Option */}
              <button
                onClick={() => setOrderType('delivery')}
                className={cn(
                  'p-6 rounded-2xl border-2 text-left transition-all',
                  orderType === 'delivery'
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5'
                    : 'border-[var(--color-cream)] hover:border-[var(--color-charcoal-light)]'
                )}
              >
                <h3 className="font-display text-xl font-bold mb-2">Delivery</h3>
                <p className="text-[var(--color-charcoal-light)] text-sm">
                  We deliver within 5 miles. $4.99 delivery fee. Usually 45-60 minutes.
                </p>
              </button>
            </div>

            {/* Location Info */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-6 mb-8">
              <div className="mb-4">
                <h4 className="font-semibold text-[var(--color-charcoal)]">
                  Josephine&apos;s Soul Food
                </h4>
                <p className="text-[var(--color-charcoal-light)]">
                  902 Lagrange St, Toledo, OH 43604
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--color-charcoal)]">
                  Open Now
                </h4>
                <p className="text-[var(--color-charcoal-light)]">
                  Today: 11:00 AM - 9:00 PM
                </p>
              </div>
            </div>

            {/* Continue Button */}
            <Link href="/menu">
              <Button variant="primary" size="lg" className="w-full">
                Start Your Order
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
