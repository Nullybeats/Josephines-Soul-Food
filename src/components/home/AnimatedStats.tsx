'use client';

import { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel?: string;
}

const stats: StatItem[] = [
  { value: 500, suffix: '+', label: '5-Star Reviews', sublabel: 'on Google' },
  { value: 37, suffix: '+', label: 'Years Serving', sublabel: 'Since 1987' },
  { value: 10, suffix: 'K+', label: 'Happy Customers', sublabel: 'And counting' },
  { value: 4.9, suffix: '', label: 'Average Rating', sublabel: 'Out of 5.0' },
];

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      countRef.current = easeOutQuart * end;

      setCount(countRef.current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      startTimeRef.current = null;
    };
  }, [end, duration, start]);

  return count;
}

function StatCard({ stat, index, isVisible }: { stat: StatItem; index: number; isVisible: boolean }) {
  const count = useCountUp(stat.value, 2000 + index * 200, isVisible);
  const displayValue = stat.value % 1 !== 0 ? count.toFixed(1) : Math.floor(count);

  return (
    <div
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
      style={{
        animationDelay: `${index * 150}ms`,
      }}
    >
      {/* Animated background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Decorative circle */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--color-primary)]/5 rounded-full transform group-hover:scale-150 transition-transform duration-700" />

      <div className="relative flex flex-col items-center text-center">
        {/* Animated number */}
        <div className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[var(--color-gold)] bg-clip-text text-transparent mb-3 tabular-nums">
          {displayValue}{stat.suffix}
        </div>

        {/* Label */}
        <div className="text-base sm:text-lg font-bold text-gray-900 uppercase tracking-wide mb-1">
          {stat.label}
        </div>

        {/* Sublabel */}
        {stat.sublabel && (
          <div className="text-sm text-gray-500">{stat.sublabel}</div>
        )}

        {/* Decorative line */}
        <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-gold)] rounded-full mt-4 transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
    </div>
  );
}

export function AnimatedStats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-primary) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--color-primary)]/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-2 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-bold uppercase tracking-wider rounded-full mb-4">
            Our Legacy
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Trusted by Toledo
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            For over three decades, we've been serving soul food that brings families together.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-3deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
