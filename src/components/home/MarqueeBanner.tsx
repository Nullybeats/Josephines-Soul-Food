'use client';

import { useEffect, useRef, useState } from 'react';

const announcements = [
  'Free Delivery on Orders Over $30',
  'New: Oxtails Available Daily',
  'Family Packs Starting at $49.99',
  'Order Online for Faster Pickup',
  'Catering Available for All Events',
  'Sunday Special: Dressing & Rice',
];

export function MarqueeBanner() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate announcements for seamless loop
  const items = [...announcements, ...announcements];

  return (
    <div
      className="relative bg-[var(--color-primary)] text-white overflow-hidden py-3"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--color-primary)] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--color-primary)] to-transparent z-10" />

      <div
        className={`flex whitespace-nowrap ${isPaused ? 'animate-pause' : 'animate-marquee'}`}
        style={{
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center mx-8 text-sm font-medium"
          >
            <span>{item}</span>
            <span className="mx-6 opacity-30">•</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-pause {
          animation: marquee 30s linear infinite;
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
