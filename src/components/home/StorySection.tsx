'use client';

import { Button } from '@/components/ui/Button';

export function StorySection() {
  return (
    <section className="section relative">
      {/* Background card with shadow for depth */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            {/* Main Portrait Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-primary-dark)] flex items-center justify-center">
                {/* Placeholder for actual portrait */}
                <div className="text-center text-white p-8">
                  <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm mx-auto mb-4 flex items-center justify-center border-4 border-white/40">
                    <span className="text-6xl font-display font-bold">J</span>
                  </div>
                  <p className="text-sm opacity-80">Portrait Image Placeholder</p>
                </div>
              </div>
            </div>

            {/* Decorative Stats Cards */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div>
                  <div className="text-2xl font-bold text-gray-900">35+</div>
                  <div className="text-xs text-gray-600">Years Serving</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-[200px] hidden sm:block">
              <div className="flex items-center gap-3 mb-2">
                <div>
                  <div className="text-2xl font-bold text-gray-900">1000s</div>
                  <div className="text-xs text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 flex flex-col items-center text-center">
            <span className="inline-block px-4 py-2 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-semibold uppercase tracking-wider rounded-full mb-4">
              Our Story
            </span>

            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              A Legacy of Love,
              <br />
              <span className="text-[var(--color-primary)]">Family & Flavor</span>
            </h2>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8 text-center">
              <p>
                For over three decades, Josephine's Soul Food has been serving authentic,
                home-cooked soul food to the Toledo community. What started as a dream
                in Josephine's kitchen has grown into an Ohio staple, beloved by generations.
              </p>

              <p>
                Our secret? Time-honored family recipes passed down through the generations,
                combined with the freshest ingredients and a whole lot of love. Every dish
                tells a story of tradition, heritage, and the warmth of home cooking.
              </p>

              <p>
                As a proud Black-owned business, we're committed to not just feeding our
                community, but bringing people together through the comfort and joy that
                only soul food can deliver.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-gray-200">
                <span className="text-sm font-semibold text-gray-900">Made with Love</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-gray-200">
                <span className="text-sm font-semibold text-gray-900">Family Recipes</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-gray-200">
                <span className="text-sm font-semibold text-gray-900">Ohio Staple</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => (window.location.href = '/about')}
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
