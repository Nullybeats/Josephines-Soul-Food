'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

function useScrollReveal(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

const timelineItems = [
  { year: '1987', title: 'The Beginning', description: 'Josephine opens original 12-seat diner on Lagrange Street with nothing but her grandmother\'s recipes and a dream.' },
  { year: '1995', title: 'Growing Roots', description: 'Expanded to our current location to welcome more of Toledo to the family table.' },
  { year: '2005', title: 'Recognition', description: 'Named "Best Soul Food in Ohio" by Ohio Magazine, putting Toledo soul food on the map.' },
  { year: '2015', title: 'New Horizons', description: 'Launched catering services, bringing Josephine\'s flavors to events across the region.' },
  { year: '2020', title: 'Adapting', description: 'Started online ordering and merchandise, keeping the community fed through challenging times.' },
  { year: '2024', title: 'Legacy Continues', description: 'Still serving with love, now in our 3rd generation of family cooking.' },
];

export default function AboutPage() {
  const story = useScrollReveal(0.1);
  const gallery = useScrollReveal(0.08);
  const values = useScrollReveal(0.1);
  const timeline = useScrollReveal(0.08);
  const community = useScrollReveal(0.1);

  return (
    <div className="min-h-screen bg-white">

      {/* ============================================
          HERO - Full-bleed cinematic
          ============================================ */}
      <section className="relative h-[85vh] min-h-[600px] flex items-end overflow-hidden bg-neutral-900">
        {/* Slow-zoom background */}
        <div className="absolute inset-0 animate-slow-zoom">
          <Image
            src="/images/menu/storefront.jpg"
            alt="Josephine's Soul Food storefront"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
        </div>

        {/* Heavy overlay for guaranteed white text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

        {/* Hero content - bottom aligned, left-aligned editorial style */}
        <div className="relative z-10 w-full pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <span
              className="inline-block px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-[0.2em] mb-8 border border-white/20"
              style={{ color: '#ffffff' }}
            >
              Est. 1987 &mdash; Toledo, Ohio
            </span>
            <h1
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6"
              style={{ color: '#ffffff', textShadow: '0 4px 24px rgba(0,0,0,0.5)' }}
            >
              More Than Just<br />a Restaurant
            </h1>
            <p
              className="text-lg sm:text-xl max-w-xl leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.95)', textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}
            >
              For over 37 years, we&apos;ve been serving authentic soul food with love,
              creating a gathering place for our Toledo community.
            </p>
          </div>
        </div>
      </section>

      {/* Branded divider */}
      <div className="relative py-10 flex justify-center">
        <div className="flex items-center gap-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-[var(--color-gold)]/50" />
          <Image
            src="/images/branding/toledo-stamp.png"
            alt=""
            width={28}
            height={28}
            className="opacity-30"
          />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-[var(--color-gold)]/50" />
        </div>
      </div>

      {/* ============================================
          STORY - Family photo + stats + text
          ============================================ */}
      <section className="py-20 sm:py-28 lg:py-36 relative" ref={story.ref}>
        {/* Decorative ambient gradients */}
        <div className="absolute top-20 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-[var(--color-primary)]/[0.06] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[var(--color-primary)]/[0.06] rounded-full blur-3xl pointer-events-none" />

        <Container size="wide">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Family Photo */}
            <div
              className="relative flex justify-center lg:justify-end order-2 lg:order-1"
              style={{
                opacity: story.isVisible ? 1 : 0,
                transform: story.isVisible ? 'translateX(0)' : 'translateX(-50px)',
                transition: 'opacity 1s ease-out, transform 1s ease-out',
              }}
            >
              <div className="relative">
                {/* Decorative offset frame */}
                <div className="absolute -top-3 -left-3 w-full h-full border border-[var(--color-gold)]/25 rounded-2xl pointer-events-none" />

                <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/menu/family-photo.png"
                    alt="The family behind Josephine's Soul Food"
                    fill
                    className="object-cover"
                  />
                  {/* Warm tone overlay */}
                  <div className="absolute inset-0 bg-amber-900/[0.05] mix-blend-multiply" />
                </div>

                {/* Stats overlay card */}
                <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white rounded-2xl shadow-xl px-6 py-5 border border-gray-100 z-20">
                  <div className="flex gap-6">
                    <div className="text-center">
                      <p className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">35+</p>
                      <p className="text-xs text-gray-600 uppercase tracking-wide mt-1">Years</p>
                    </div>
                    <div className="w-px bg-gray-200" />
                    <div className="text-center">
                      <p className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">3</p>
                      <p className="text-xs text-gray-600 uppercase tracking-wide mt-1">Generations</p>
                    </div>
                    <div className="w-px bg-gray-200" />
                    <div className="text-center">
                      <p className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">50+</p>
                      <p className="text-xs text-gray-600 uppercase tracking-wide mt-1">Recipes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div
              className="order-1 lg:order-2"
              style={{
                opacity: story.isVisible ? 1 : 0,
                transform: story.isVisible ? 'translateX(0)' : 'translateX(50px)',
                transition: 'opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s',
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-[var(--color-primary)]" />
                <span className="text-[var(--color-primary)] font-semibold text-xs uppercase tracking-[0.2em]">
                  The Beginning
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-[1.15]">
                A Dream Born in<br className="hidden sm:block" /> a Small Kitchen
              </h2>
              <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-[1.8]">
                <p>
                  In 1987, Josephine Williams opened a small kitchen in Toledo with
                  nothing but her grandmother&apos;s recipes and a dream. What started as a
                  modest 12-seat diner has grown into a beloved institution that feeds
                  the soul of our entire community.
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

      {/* ============================================
          PHOTO GALLERY - 4 images with hover effects
          ============================================ */}
      <section ref={gallery.ref} className="py-12 sm:py-16 overflow-hidden">
        <Container size="wide">
          {/* Gallery header */}
          <div className="text-center mb-8">
            <span className="text-[var(--color-primary)] font-semibold text-xs uppercase tracking-[0.2em]">
              From Our Kitchen
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              { src: '/images/menu/community-photo.jpg', alt: 'Community gathering' },
              { src: '/images/menu/rib-dinner.jpg', alt: 'Signature rib dinner' },
              { src: '/images/menu/oxtails-dinner-new.jpg', alt: 'Famous oxtails' },
              { src: '/images/menu/dining-wings.jpg', alt: 'Soul food platter' },
            ].map((img, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
                style={{
                  opacity: gallery.isVisible ? 1 : 0,
                  transform: gallery.isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.97)',
                  transition: `opacity 0.7s ease-out ${0.1 * i}s, transform 0.7s ease-out ${0.1 * i}s`,
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.04]"
                />
                {/* Warm gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Caption slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <p className="text-white text-sm font-medium drop-shadow-lg">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          PULL QUOTE
          ============================================ */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[var(--color-primary)] relative overflow-hidden mt-8">
        {/* Decorative ambient glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-gold)]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <Container size="narrow">
          <div className="text-center py-4 sm:py-8">
            <svg className="w-12 h-12 mx-auto mb-8 opacity-20" fill="white" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium leading-relaxed mb-8"
              style={{ color: '#ffffff' }}
            >
              Food is love made visible.
            </blockquote>
            <cite style={{ color: 'rgba(255,255,255,0.85)' }} className="text-base sm:text-lg not-italic font-light">
              — Josephine Williams, Founder
            </cite>
          </div>
        </Container>
      </section>

      {/* ============================================
          VALUES - 3 cards with warm background
          ============================================ */}
      <section className="py-24 sm:py-32 lg:py-40 bg-[#FAF8F5] relative overflow-hidden" ref={values.ref}>
        {/* Decorative ambient gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-primary)]/[0.04] rounded-full blur-3xl pointer-events-none" />

        <Container size="wide">
          <div className="text-center mb-16 sm:mb-20">
            <span className="inline-block px-4 py-1.5 bg-[var(--color-primary)]/[0.08] text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.15em] rounded-full mb-5">
              What We Believe
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.15]">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: (
                  <svg className="w-7 h-7 text-[var(--color-primary)] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                title: 'Family First',
                text: "Every recipe passed down through generations. Every customer treated like family. That's the Josephine's way.",
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-[var(--color-primary)] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Fresh & Local',
                text: 'We source from Ohio farms whenever possible, supporting our local community and ensuring the freshest ingredients.',
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-[var(--color-primary)] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: 'Made With Love',
                text: 'No shortcuts, no compromises. Just honest, delicious food made the right way, every single time.',
              },
            ].map((value, i) => (
              <div
                key={value.title}
                className="group"
                style={{
                  opacity: values.isVisible ? 1 : 0,
                  transform: values.isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 0.7s ease-out ${0.15 * i}s, transform 0.7s ease-out ${0.15 * i}s`,
                }}
              >
                <div className="bg-white rounded-3xl p-8 sm:p-10 h-full transition-all duration-500 border border-gray-100 hover:border-[var(--color-gold)]/40 hover:shadow-[0_20px_40px_-15px_rgba(129,107,59,0.15)]">
                  <div className="w-14 h-14 bg-[var(--color-primary)]/[0.08] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {value.icon}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-500">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-[15px]">{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          TIMELINE - Single-column cards
          ============================================ */}
      <section className="py-24 sm:py-32 lg:py-40 bg-white relative overflow-hidden" ref={timeline.ref}>
        {/* Decorative large background watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="font-display text-[20vw] font-bold leading-none whitespace-nowrap" style={{ color: 'rgba(129,107,59,0.03)' }}>
            1987
          </span>
        </div>

        <Container size="wide">
          <div className="text-center mb-16 sm:mb-24">
            <span className="text-[var(--color-primary)] font-semibold text-xs uppercase tracking-[0.2em]">Our History</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-5 leading-[1.15]">
              The Journey So Far
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-0">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className="group relative grid grid-cols-[70px_1fr] sm:grid-cols-[100px_1fr] gap-6 sm:gap-10"
                style={{
                  opacity: timeline.isVisible ? 1 : 0,
                  transform: timeline.isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.6s ease-out ${0.1 * index}s, transform 0.6s ease-out ${0.1 * index}s`,
                }}
              >
                {/* Year column */}
                <div className="relative flex flex-col items-center">
                  <span className="font-display text-xl sm:text-2xl font-bold text-[var(--color-primary)] relative z-10 bg-white py-2">
                    {item.year}
                  </span>
                  {/* Vertical connector */}
                  {index < timelineItems.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-[var(--color-gold)]/40 to-transparent" />
                  )}
                </div>

                {/* Content card */}
                <div className="pb-10 sm:pb-14">
                  <div className="bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:border-[var(--color-gold)]/30 transition-all duration-500">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-sm sm:text-base">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          COMMUNITY - Photo + text
          ============================================ */}
      <section className="py-24 sm:py-32 lg:py-40 bg-[#FAF8F5] relative overflow-hidden" ref={community.ref}>
        {/* Decorative ambient gradients */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-primary)]/[0.05] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 left-0 w-64 h-64 bg-[var(--color-primary)]/[0.04] rounded-full blur-3xl pointer-events-none" />

        <Container size="wide">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Community Image */}
            <div
              style={{
                opacity: community.isVisible ? 1 : 0,
                transform: community.isVisible ? 'translateX(0)' : 'translateX(-50px)',
                transition: 'opacity 1s ease-out, transform 1s ease-out',
              }}
            >
              <div className="relative">
                {/* Offset decorative frame */}
                <div className="absolute -inset-3 border border-[var(--color-gold)]/20 rounded-3xl pointer-events-none" />
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/menu/community-school.jpg"
                    alt="Josephine's giving back to the Toledo community"
                    fill
                    className="object-cover"
                  />
                  {/* Warm tone overlay */}
                  <div className="absolute inset-0 bg-amber-900/[0.04] mix-blend-multiply" />
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div
              style={{
                opacity: community.isVisible ? 1 : 0,
                transform: community.isVisible ? 'translateX(0)' : 'translateX(50px)',
                transition: 'opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s',
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-[var(--color-primary)]" />
                <span className="text-[var(--color-primary)] font-semibold text-xs uppercase tracking-[0.2em]">
                  Giving Back
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-[1.15]">
                Rooted in Community
              </h2>
              <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-[1.8]">
                <p>
                  Josephine&apos;s isn&apos;t just a place to eat &mdash; it&apos;s a cornerstone of Toledo&apos;s
                  community. From sponsoring local youth sports teams to feeding families
                  during the holidays, giving back has always been part of who we are.
                </p>
                <p>
                  We believe that when you nourish a community, you strengthen it. Every plate
                  we serve, every event we cater, and every smile we share is our way of
                  investing in the place we call home.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================
          CTA - Warm dark with gold glow
          ============================================ */}
      <section className="py-24 sm:py-32 lg:py-40 bg-[#1A1612] relative overflow-hidden">
        {/* Radial gold glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(184,157,107,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(129,107,59,0.1)_0%,transparent_50%)]" />

        <Container size="narrow">
          <div className="relative text-center">
            <span className="text-[var(--color-gold)] font-semibold text-xs uppercase tracking-[0.2em]">Join Us</span>
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 mb-6 leading-[1.1]"
              style={{ color: '#ffffff' }}
            >
              Come Be Part of<br />Our Story
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl mb-12 max-w-xl mx-auto leading-relaxed font-light">
              Whether you dine in, order online, or let us cater your event &mdash; you&apos;re family now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://josephinessoulfood.com/menu">
                <Button variant="primary" size="lg" className="w-full sm:w-auto transition-all duration-500 hover:shadow-[0_0_30px_rgba(184,157,107,0.3)] hover:scale-[1.02]">
                  Order Online
                </Button>
              </Link>
              <Link href="/catering">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-transparent border-2 border-white/20 text-white hover:bg-white/5 hover:border-[var(--color-gold)]/50 transition-all duration-500">
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
