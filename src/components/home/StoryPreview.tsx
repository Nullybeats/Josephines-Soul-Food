'use client';

export function StoryPreview() {
  return (
    <section className="relative py-16 lg:py-20 bg-gradient-to-b from-amber-50/60 via-orange-50/40 to-amber-50/60 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-0 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-block px-5 py-2.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-bold uppercase tracking-wider rounded-full mb-6">
            Our Story
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Three Generations of
            <br />
            <span className="text-[var(--color-primary)]">Flavor & Tradition</span>
          </h2>
          <p className="text-[15px] text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
            Since 1988, we've been serving Toledo with love, one plate at a time.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Family Photo */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg">
                <div className="aspect-[4/5]">
                  <img
                    src="/images/menu/family-photo.png"
                    alt="Josephine's Soul Food - Three Generations of Family"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Stats card overlay */}
            <div className="absolute -bottom-8 left-8 right-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-1">35+</div>
                  <div className="text-xs text-gray-600 font-semibold uppercase tracking-wide">Years</div>
                </div>
                <div className="border-x border-gray-200">
                  <div className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-1">3</div>
                  <div className="text-xs text-gray-600 font-semibold uppercase tracking-wide">Generations</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-1">50+</div>
                  <div className="text-xs text-gray-600 font-semibold uppercase tracking-wide">Recipes</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Story text */}
          <div className="order-1 lg:order-2 flex flex-col lg:pl-8">
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                It started in a modest kitchen on Toledo's East Side, where Josephine would spend
                Sunday mornings turning simple ingredients into something extraordinary. Her secret?
                Time, patience, and a love that seasoned every dish.
              </p>

              <p>
                Today, her grandchildren carry forward that same devotion—honoring the recipes she perfected
                while bringing soul food into a new era. Each plate we serve is a bridge between generations,
                a testament to the enduring power of food cooked with heart.
              </p>

              {/* Quote block */}
              <blockquote className="relative pl-6 border-l-4 border-[var(--color-primary)] py-2 my-8">
                <p className="text-[var(--color-primary)] font-semibold italic text-xl leading-relaxed">
                  "Good food takes time. Great food takes love. And soul food? That takes both, plus a whole lot of history."
                </p>
                <footer className="mt-3 text-sm text-gray-500 font-medium not-italic">
                  — Josephine Williams, Founder
                </footer>
              </blockquote>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Read Our Full Story
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
