'use client';

import { Button } from '@/components/ui/Button';

export function VideoHero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-neutral-900">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/hero-main.png')`
          }}
        />

        {/* Professional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
      </div>

      {/* Hero Content - Centered & Uniform */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto w-full flex flex-col items-center space-y-6">
          {/* Badge - Centered */}
          <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-neutral-200">
            <span className="text-neutral-800 text-sm font-bold uppercase tracking-widest">Toledo's Soul Food Since 1987</span>
          </div>

          {/* Main Headline - Professional & Centered */}
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] tracking-tight text-center" style={{ textShadow: '0 8px 32px rgba(0,0,0,0.5)' }}>
            Taste The
            <br />
            <span className="text-[var(--color-gold)]">Tradition</span>
          </h1>

          {/* Subheadline - Professional & Centered */}
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-medium max-w-3xl leading-relaxed text-center" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>
            Three generations of authentic soul food, crafted with love and served fresh
          </p>

          {/* CTAs - Professional & Centered */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              variant="primary"
              size="xl"
              onClick={() => (window.location.href = '/order')}
              className="text-lg font-bold shadow-xl px-10 py-6 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white transition-all hover:scale-105"
            >
              Order Now
            </Button>

            <Button
              variant="secondary"
              size="xl"
              onClick={() => (window.location.href = '/menu')}
              className="text-lg font-bold px-10 py-6 bg-white/95 hover:bg-white text-neutral-900 shadow-xl backdrop-blur-md transition-all hover:scale-105"
            >
              Full Menu
            </Button>
          </div>

          {/* Trust Signals - Professional & Clean */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-white">
            <div className="flex items-center gap-3 bg-black/50 backdrop-blur-md px-5 py-3 rounded-full border border-white/10">
              <span className="text-sm font-semibold">4.9 Rating · 500+ Reviews</span>
            </div>
            <div className="h-6 w-px bg-white/30 hidden sm:block" />
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-5 py-3 rounded-full border border-white/10">
              <span className="text-sm font-semibold">Free Delivery Over $30</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
