'use client';

import { useState, useEffect } from 'react';

export function StickyOrderButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <button
        onClick={() => (window.location.href = '/order')}
        className="group flex items-center gap-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-[var(--shadow-gold)] transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="font-bold text-base uppercase tracking-wide">
          Start Order
        </span>
      </button>
    </div>
  );
}
