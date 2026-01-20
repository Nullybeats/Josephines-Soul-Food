import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Story",
  description: "For over 37 years, Josephine's Soul Food has been serving authentic soul food with love in Toledo, Ohio. Learn about our family legacy and commitment to community.",
  keywords: ["soul food Toledo", "Black-owned restaurant Ohio", "Josephine's history", "family restaurant Toledo", "authentic soul food"],
  openGraph: {
    title: "Our Story | Josephine's Soul Food",
    description: "For over 37 years, Josephine's has been serving authentic soul food with love, creating a gathering place for our Ohio community.",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">

      {/* Hero Section - Generous negative space */}
      <section className="py-20 sm:py-28 lg:py-36 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--color-primary)]/[0.03] rounded-full blur-3xl" />

        <Container size="wide">
          <div className="relative flex flex-col items-center text-center max-w-4xl mx-auto">
            <span className="px-5 py-2.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs sm:text-sm font-bold uppercase tracking-wider mb-8">
              Est. 1987
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[1.1]">
              More Than Just<br />a Restaurant
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 max-w-2xl leading-relaxed">
              For over 37 years, we&apos;ve been serving authentic soul food with love,
              creating a gathering place for our Ohio community.
            </p>
          </div>
        </Container>
      </section>

      {/* Visual Divider */}
      <div className="flex justify-center py-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-px bg-gray-200" />
          <div className="w-2 h-2 rounded-full bg-[var(--color-gold)]" />
          <div className="w-12 h-px bg-gray-200" />
        </div>
      </div>

      {/* Story Section - The Beginning */}
      <section className="py-20 sm:py-28 lg:py-32">
        <Container size="wide">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Visual Element */}
            <div className="relative flex justify-center lg:justify-end order-2 lg:order-1">
              <div className="relative">
                {/* Background decorative circle */}
                <div className="absolute -inset-8 bg-[var(--color-primary)]/5 rounded-full" />
                {/* Main circle */}
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-full flex items-center justify-center shadow-2xl">
                  <span className="font-display text-7xl sm:text-8xl font-bold text-white/90">J</span>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-gray-100">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Since</p>
                  <p className="font-display text-2xl font-bold text-[var(--color-primary)]">1987</p>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <span className="text-[var(--color-primary)] font-semibold text-sm uppercase tracking-wider">The Beginning</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-8">
                A Dream Born in a Small Kitchen
              </h2>
              <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
                <p>
                  In 1987, Josephine Williams opened a small kitchen in Toledo with
                  nothing but her grandmother&apos;s recipes and a dream. What started as a
                  modest 12-seat diner has grown into a beloved institution.
                </p>
                <p>
                  Today, her legacy continues through her family, who maintain the same
                  traditions, the same recipes, and the same commitment to making every
                  guest feel like they&apos;re coming home for Sunday dinner.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pull Quote Section - Visual Break */}
      <section className="py-16 sm:py-20 bg-[var(--color-primary)]">
        <Container size="narrow">
          <div className="text-center">
            <svg className="w-12 h-12 text-white/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl text-white font-medium leading-relaxed mb-8">
              Food is love made visible.
            </blockquote>
            <cite className="text-white/70 text-base sm:text-lg not-italic">
              — Josephine Williams, Founder
            </cite>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-gray-50">
        <Container size="wide">
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-[var(--color-primary)] font-semibold text-sm uppercase tracking-wider">What We Believe</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Value 1 */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 sm:p-10 h-full transition-all duration-300 hover:shadow-xl border border-gray-100">
                <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                  <svg className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900 mb-4">Family First</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every recipe passed down through generations. Every customer treated like family.
                  That&apos;s the Josephine&apos;s way.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 sm:p-10 h-full transition-all duration-300 hover:shadow-xl border border-gray-100">
                <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                  <svg className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900 mb-4">Fresh & Local</h3>
                <p className="text-gray-600 leading-relaxed">
                  We source from Ohio farms whenever possible, supporting our local community
                  and ensuring the freshest ingredients.
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 sm:p-10 h-full transition-all duration-300 hover:shadow-xl border border-gray-100">
                <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                  <svg className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900 mb-4">Made With Love</h3>
                <p className="text-gray-600 leading-relaxed">
                  No shortcuts, no compromises. Just honest, delicious food made the right way,
                  every single time.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-white">
        <Container size="wide">
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-[var(--color-primary)] font-semibold text-sm uppercase tracking-wider">Our History</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              The Journey So Far
            </h2>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-gold)] to-[var(--color-primary)]" />

              {/* Timeline items */}
              <div className="space-y-12 sm:space-y-16">
                {[
                  { year: '1987', title: 'The Beginning', description: 'Josephine opens original 12-seat diner on Lagrange Street' },
                  { year: '1995', title: 'Growing Roots', description: 'Expanded to our current location to serve more of Toledo' },
                  { year: '2005', title: 'Recognition', description: 'Named "Best Soul Food in Ohio" by Ohio Magazine' },
                  { year: '2015', title: 'New Horizons', description: 'Launched catering services for events across the region' },
                  { year: '2020', title: 'Adapting', description: 'Started online ordering and merchandise shop' },
                  { year: '2024', title: 'Legacy Continues', description: 'Still serving with love, now in our 3rd generation' },
                ].map((item, index) => (
                  <div key={index} className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`flex-1 pl-20 sm:pl-0 ${index % 2 === 0 ? 'sm:pr-16 sm:text-right' : 'sm:pl-16 sm:text-left'}`}>
                      <span className="inline-block px-3 py-1 bg-[var(--color-primary)]/10 rounded-full text-[var(--color-primary)] text-sm font-bold mb-3">
                        {item.year}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-4 h-4 bg-[var(--color-primary)] rounded-full border-4 border-white shadow-md" />

                    {/* Empty space for alternating layout */}
                    <div className="hidden sm:block flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-gray-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-gold)]/10 rounded-full blur-3xl" />

        <Container size="narrow">
          <div className="relative text-center">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">Join Us</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              Come Be Part of Our Story
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
              Whether you dine in, order online, or let us cater your event, you&apos;re family now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/order">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Order Online
                </Button>
              </Link>
              <Link href="/catering">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Plan Your Event
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom padding for mobile nav */}
      <div className="pb-16 md:pb-0" />
    </div>
  );
}
