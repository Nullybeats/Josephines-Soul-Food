'use client';

import { Button } from '@/components/ui/Button';
import { useState, useEffect } from 'react';

export function OrderCTA() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(21, 0, 0, 0); // 9 PM closing time

      const difference = endOfDay.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-lg bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[var(--color-primary)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Countdown Timer - Urgency */}
          {(timeLeft.hours > 0 || timeLeft.minutes > 0) && (
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 rounded-full shadow-lg mb-3 animate-pulse">
                <span className="text-white text-sm font-bold uppercase tracking-wide">
                  Order Before We Close Today!
                </span>
              </div>
              <div className="flex justify-center gap-3 sm:gap-4">
                <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl px-4 sm:px-6 py-3 sm:py-4 min-w-[70px] sm:min-w-[90px]">
                  <div className="text-3xl sm:text-4xl font-bold text-white tabular-nums">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="text-xs sm:text-sm text-white/80 uppercase tracking-wide font-semibold mt-1">
                    Hours
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl px-4 sm:px-6 py-3 sm:py-4 min-w-[70px] sm:min-w-[90px]">
                  <div className="text-3xl sm:text-4xl font-bold text-white tabular-nums">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-xs sm:text-sm text-white/80 uppercase tracking-wide font-semibold mt-1">
                    Minutes
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl px-4 sm:px-6 py-3 sm:py-4 min-w-[70px] sm:min-w-[90px]">
                  <div className="text-3xl sm:text-4xl font-bold text-white tabular-nums">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-xs sm:text-sm text-white/80 uppercase tracking-wide font-semibold mt-1">
                    Seconds
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Heading */}
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let Us Feed
            <br />
            Your Soul Tonight
          </h2>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white/90 mb-12 leading-relaxed">
            Whether you're gathering around the table or savoring a quiet night in,
            <br className="hidden sm:block" />
            we're here to bring the warmth of home-cooked soul food straight to you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              variant="secondary"
              size="xl"
              onClick={() => (window.location.href = '/order')}
              className="group bg-white text-gray-900 hover:bg-gray-100"
            >
              Order Online Now
            </Button>

            <Button
              variant="outline"
              size="xl"
              onClick={() => (window.location.href = 'tel:+14192426666')}
              className="group bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-gray-900"
            >
              Call to Order
            </Button>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Phone */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-sm text-white/80 mb-1 uppercase tracking-wide font-semibold">
                Call Us
              </div>
              <a
                href="tel:+14192426666"
                className="text-lg font-bold text-white hover:text-white/90 transition-colors"
              >
                (419) 242-6666
              </a>
            </div>

            {/* Hours */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-sm text-white/80 mb-1 uppercase tracking-wide font-semibold">
                Hours
              </div>
              <div className="text-lg font-bold text-white">
                Mon-Sat: 11am-9pm
              </div>
              <div className="text-sm text-white/80">
                Sun: 12pm-7pm
              </div>
            </div>

            {/* Location */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-sm text-white/80 mb-1 uppercase tracking-wide font-semibold">
                Location
              </div>
              <div className="text-lg font-bold text-white">
                902 Lagrange St, Toledo, OH
              </div>
              <a
                href="https://maps.google.com/?q=902+Lagrange+St+Toledo+OH+43604"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/80 hover:text-white transition-colors underline"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
