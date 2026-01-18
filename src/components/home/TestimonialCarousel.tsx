'use client';

import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    location: 'Toledo, OH',
    rating: 5,
    text: "The fried chicken is absolutely fabulous! Best I've had in Toledo. The seasoning is perfect and the mac & cheese and greens are incredible. This is real soul food made with love by a great family.",
    image: null,
    verified: true,
  },
  {
    id: 2,
    name: 'James T.',
    location: 'Toledo, OH',
    rating: 5,
    text: "Little place with a big heart! The BBQ ribs and fried catfish are outstanding. You can tell these recipes have been handed down through generations. The staff is terrific!",
    image: null,
    verified: true,
  },
  {
    id: 3,
    name: 'Michelle R.',
    location: 'Toledo, OH',
    rating: 5,
    text: "The fried okra, yams, and greens are amazing! The banana pudding and peach cobbler for dessert? Don't even get me started. This restaurant is powered by family members who really know how to execute these traditional recipes.",
    image: null,
    verified: true,
  },
  {
    id: 4,
    name: 'David L.',
    location: 'Perrysburg, OH',
    rating: 5,
    text: "Best oxtails I've ever had outside of my grandmother's kitchen. The meat falls right off the bone. Worth every penny. My whole family orders from here now.",
    image: null,
    verified: true,
  },
  {
    id: 5,
    name: 'Angela W.',
    location: 'Sylvania, OH',
    rating: 5,
    text: "We ordered catering for our family reunion and it was a HIT! Everyone was asking where the food came from. Josephine's is now our go-to for every family event.",
    image: null,
    verified: true,
  },
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const goToNext = useCallback(() => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goToPrev = useCallback(() => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      className="relative pt-16 pb-8 lg:pt-20 lg:pb-10 bg-gradient-to-b from-amber-50/60 via-orange-50/40 to-amber-50/60 overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-100 text-yellow-700 rounded-full mb-6">
            <span className="text-sm font-bold uppercase tracking-wide">
              4.9 Stars · 500+ Reviews
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What Our Community Says
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl text-center leading-relaxed">
            Don't just take our word for it — hear from the families we've been serving for generations.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial card */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden border border-gray-100">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent" />

            {/* Large quote mark */}
            <div className="absolute top-6 right-6 opacity-10">
              <span className="text-8xl font-serif text-[var(--color-primary)]">"</span>
            </div>

            {/* Content with slide animation */}
            <div
              key={currentIndex}
              className="relative z-10 animate-slideIn"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <span
                    key={i}
                    className="text-yellow-400 text-xl animate-starPop"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed mb-8 text-center font-medium">
                "{currentTestimonial.text}"
              </blockquote>

              {/* Author info */}
              <div className="flex items-center gap-4 justify-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-gold)] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {currentTestimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg text-gray-900">
                      {currentTestimonial.name}
                    </span>
                    {currentTestimonial.verified && (
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center" title="Verified Customer">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <span className="text-gray-500">{currentTestimonial.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[var(--color-primary)] hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            aria-label="Previous testimonial"
          >
            <span className="text-lg font-bold">&lt;</span>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[var(--color-primary)] hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            aria-label="Next testimonial"
          >
            <span className="text-lg font-bold">&gt;</span>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full focus:outline-none ${
                index === currentIndex
                  ? 'w-8 h-3 bg-[var(--color-primary)]'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-6 max-w-xs mx-auto">
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-gold)] transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps/place/Josephine's+Soul+Food+Kitchen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-bold transition-colors group"
          >
            Read All Reviews on Google
          </a>
        </div>

        {/* Toledo Skyline Banner - Subtle transition divider */}
        <div className="mt-6 flex justify-center opacity-50">
          <img
            src="/images/branding/toledo-skyline-banner.png"
            alt=""
            aria-hidden="true"
            className="w-80 h-auto"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes starPop {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }
        .animate-starPop {
          animation: starPop 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
