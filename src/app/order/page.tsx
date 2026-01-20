'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export default function OrderPage() {
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');

  return (
    <div className="pt-20 pb-32 md:pb-16 min-h-screen bg-white">
      {/* Header */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <Container size="wide">
          <div className="flex flex-col items-center text-center">
            <span className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6">
              Order Online
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Fresh Soul Food, Ready When You Are
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl leading-relaxed">
              Order ahead for pickup or delivery. Made from scratch with love.
            </p>
          </div>
        </Container>
      </section>

      {/* Order Type Selection */}
      <section className="py-12 sm:py-16">
        <Container size="narrow">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 md:p-12">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-900">
              How would you like your order?
            </h2>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Pickup Option */}
              <button
                onClick={() => setOrderType('pickup')}
                className={cn(
                  'p-4 sm:p-6 rounded-2xl border-2 text-left transition-all h-full',
                  orderType === 'pickup'
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5'
                    : 'border-gray-200 hover:border-gray-400'
                )}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-gray-900">Pickup</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      Order ahead and pick up at our location. Usually ready in 20-30 minutes.
                    </p>
                  </div>
                </div>
              </button>

              {/* Delivery Option */}
              <button
                onClick={() => setOrderType('delivery')}
                className={cn(
                  'p-4 sm:p-6 rounded-2xl border-2 text-left transition-all h-full',
                  orderType === 'delivery'
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5'
                    : 'border-gray-200 hover:border-gray-400'
                )}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-gray-900">Delivery</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      We deliver within 5 miles. $4.99 delivery fee. Usually 45-60 minutes.
                    </p>
                  </div>
                </div>
              </button>
            </div>

            {/* Location Info */}
            <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-gray-900">
                      Josephine&apos;s Soul Food
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      902 Lagrange St, Toledo, OH 43604
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-gray-900">
                      Open Now
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Today: 11:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
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
