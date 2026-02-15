'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function VideoHero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] sm:min-h-[700px] overflow-hidden bg-neutral-900">
      {/* Hero Background Image with subtle zoom animation - Optimized with Next.js Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 animate-slow-zoom">
          <Image
            src="/images/hero-main.png"
            alt="Josephine's Soul Food - Authentic soul food dishes in Toledo, Ohio"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Professional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
      </div>

      {/* Hero Content - Centered & Uniform */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto w-full flex flex-col items-center space-y-6">
          {/* Badge - Animated fade in */}
          <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg border border-neutral-200 animate-fade-in-up">
            <span className="text-neutral-800 text-xs sm:text-sm font-bold uppercase tracking-widest">Black-Owned · Family Recipes Since 1987</span>
          </div>

          {/* Main Headline - Benefit-driven & animated */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-[0.9] tracking-tight text-center animate-fade-in-up animation-delay-100" style={{ textShadow: '0 8px 32px rgba(0,0,0,0.5)' }}>
            Toledo's Best
            <br />
            <span className="text-[var(--color-gold)]">Soul Food</span>
          </h1>

          {/* Subheadline - Urgency & specificity */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-medium max-w-3xl leading-relaxed text-center px-2 animate-fade-in-up animation-delay-200" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>
            Grandma's recipes made fresh daily. Order now for pickup in 15 minutes.
          </p>

          {/* Single Primary CTA */}
          <div className="flex flex-col items-center gap-4 pt-4 sm:pt-6 w-full px-4 sm:px-0 animate-fade-in-up animation-delay-300">
            <Button
              variant="primary"
              size="xl"
              onClick={() => (window.location.href = 'https://josephinessoulfood.com/menu')}
              className="text-lg sm:text-xl font-bold shadow-2xl px-10 py-5 sm:px-14 sm:py-6 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(129,107,59,0.4)] w-full sm:w-auto"
            >
              Order Now
            </Button>

            {/* Secondary as text link */}
            <a
              href="/menu"
              className="text-white/80 hover:text-white text-sm sm:text-base font-medium underline underline-offset-4 decoration-white/40 hover:decoration-white transition-all"
            >
              View Full Menu
            </a>
          </div>

          {/* Trust Signals - Professional & Clean */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 pt-6 text-white animate-fade-in-up animation-delay-400">
            <div className="flex items-center gap-2 sm:gap-3 bg-black/50 backdrop-blur-md px-4 py-2 sm:px-5 sm:py-3 rounded-full border border-white/10">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs sm:text-sm font-semibold">4.9 Rating · 500+ Reviews</span>
            </div>
            <div className="h-6 w-px bg-white/30 hidden sm:block" />
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 sm:px-5 sm:py-3 rounded-full border border-white/10">
              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-xs sm:text-sm font-semibold">Free Delivery Over $30</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
