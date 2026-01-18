import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="pt-20 pb-32 md:pb-16 min-h-screen bg-[var(--color-warm-white)]">
      {/* Hero */}
      <section className="py-16 bg-[var(--color-cream)] texture-paper">
        <Container size="wide">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-[var(--color-gold)] font-semibold tracking-wider uppercase text-sm mb-4">
              Our Story
            </span>
            <h1 className="font-display text-[var(--text-h1)] font-bold text-[var(--color-charcoal)] mb-6">
              More Than Just a Restaurant
            </h1>
            <p className="text-xl text-[var(--color-charcoal-light)]">
              For over 37 years, Josephine&apos;s has been serving authentic soul food
              with love, creating a gathering place for our Ohio community.
            </p>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <Container size="narrow">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[var(--shadow-soft)] mb-12">
              <h2 className="font-display text-2xl font-bold mb-6 text-center">
                The Beginning
              </h2>
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 bg-[var(--color-cream)] rounded-full flex items-center justify-center">
                  <span className="text-6xl">👵🏾</span>
                </div>
              </div>
              <p className="text-[var(--color-charcoal-light)] leading-relaxed mb-6">
                In 1987, Josephine Williams opened a small kitchen in Toledo with
                nothing but her grandmother&apos;s recipes and a dream. What started as a
                modest 12-seat diner has grown into a beloved institution that serves
                thousands of customers every week.
              </p>
              <p className="text-[var(--color-charcoal-light)] leading-relaxed mb-6">
                &ldquo;Food is love made visible,&rdquo; Josephine would always say. Every dish
                that leaves our kitchen carries that philosophy—made from scratch,
                with the finest ingredients, and served with genuine care.
              </p>
              <p className="text-[var(--color-charcoal-light)] leading-relaxed">
                Today, her legacy continues through her family, who maintain the same
                traditions, the same recipes, and the same commitment to making every
                guest feel like they&apos;re coming home for Sunday dinner.
              </p>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-[var(--shadow-soft)] text-center">
                <span className="text-5xl mb-4 block">🏠</span>
                <h3 className="font-display text-lg font-bold mb-2">Family First</h3>
                <p className="text-sm text-[var(--color-charcoal-light)]">
                  Every recipe passed down through generations. Every customer treated
                  like family.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-[var(--shadow-soft)] text-center">
                <span className="text-5xl mb-4 block">🌱</span>
                <h3 className="font-display text-lg font-bold mb-2">Fresh & Local</h3>
                <p className="text-sm text-[var(--color-charcoal-light)]">
                  We source from Ohio farms whenever possible, supporting our local
                  community.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-[var(--shadow-soft)] text-center">
                <span className="text-5xl mb-4 block">❤️</span>
                <h3 className="font-display text-lg font-bold mb-2">Made With Love</h3>
                <p className="text-sm text-[var(--color-charcoal-light)]">
                  No shortcuts, no compromises. Just honest, delicious food made the
                  right way.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-[var(--color-cream)] rounded-3xl p-8 md:p-12 mb-12">
              <h2 className="font-display text-2xl font-bold mb-8 text-center">
                Our Journey
              </h2>
              <div className="space-y-6">
                {[
                  { year: 1987, event: 'Josephine opens original 12-seat diner' },
                  { year: 1995, event: 'Expanded to current location' },
                  { year: 2005, event: 'Named "Best Soul Food in Ohio"' },
                  { year: 2015, event: 'Launched catering services' },
                  { year: 2020, event: 'Started online ordering & merch shop' },
                  { year: 2024, event: 'Still serving with love, now 3rd generation' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-6">
                    <div className="w-20 flex-shrink-0 text-right">
                      <span className="font-display font-bold text-[var(--color-primary)]">
                        {item.year}
                      </span>
                    </div>
                    <div className="w-3 h-3 bg-[var(--color-gold)] rounded-full flex-shrink-0" />
                    <p className="text-[var(--color-charcoal)]">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 className="font-display text-2xl font-bold mb-4">
                Come Be Part of Our Story
              </h2>
              <p className="text-[var(--color-charcoal-light)] mb-8">
                Whether you dine in, order online, or let us cater your event,
                you&apos;re family now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/order">
                  <Button variant="primary" size="lg">
                    Order Now
                  </Button>
                </Link>
                <Link href="/catering">
                  <Button variant="secondary" size="lg">
                    Plan Your Event
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
