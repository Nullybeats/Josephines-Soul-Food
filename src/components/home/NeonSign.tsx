'use client';

import { useEffect, useState } from 'react';

export function NeonSign() {
  const [flicker, setFlicker] = useState(false);

  useEffect(() => {
    // Create realistic neon flicker pattern
    const flickerPattern = async () => {
      // Quick flicker
      setFlicker(true);
      await new Promise(r => setTimeout(r, 50 + Math.random() * 80));
      setFlicker(false);

      // Sometimes double or triple flicker for realism
      if (Math.random() > 0.4) {
        await new Promise(r => setTimeout(r, 60 + Math.random() * 40));
        setFlicker(true);
        await new Promise(r => setTimeout(r, 30 + Math.random() * 50));
        setFlicker(false);

        // Triple flicker occasionally
        if (Math.random() > 0.6) {
          await new Promise(r => setTimeout(r, 50));
          setFlicker(true);
          await new Promise(r => setTimeout(r, 40));
          setFlicker(false);
        }
      }
    };

    // Run flicker every 3-6 seconds
    const interval = setInterval(() => {
      flickerPattern();
    }, 3000 + Math.random() * 3000);

    // Initial flicker after 1 second so user sees it
    const initialTimeout = setTimeout(() => {
      flickerPattern();
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <div className="relative inline-block">
      {/* Neon glow effect layers */}
      <div
        className={`
          relative transition-all duration-75
          ${flicker ? 'opacity-40' : 'opacity-100'}
        `}
      >
        {/* Outer glow - largest, most diffuse */}
        <div
          className="absolute inset-0 blur-2xl opacity-40 z-[1]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 165, 0, 0.3) 0%, transparent 70%)',
            transform: 'scale(1.5)',
          }}
        />

        {/* Middle glow */}
        <div
          className="absolute inset-0 blur-xl opacity-50 z-[2]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 140, 0, 0.35) 0%, transparent 60%)',
            transform: 'scale(1.3)',
          }}
        />

        {/* The actual neon sign image */}
        <img
          src="/images/branding/soul-food-neon.png"
          alt="Soul Food Neon Sign"
          className="relative z-10 w-32 sm:w-36 md:w-40 lg:w-48 h-auto transition-all duration-75"
          style={{
            filter: flicker
              ? 'brightness(0.5) drop-shadow(0 0 5px rgba(255,165,0,0.3))'
              : 'brightness(1.05) drop-shadow(0 0 15px rgba(255,165,0,0.6)) drop-shadow(0 0 30px rgba(255,140,0,0.4))',
          }}
        />
      </div>

      {/* CSS for additional animation */}
      <style jsx>{`
        @keyframes neonPulse {
          0%, 100% {
            filter: brightness(1.1) drop-shadow(0 0 20px rgba(255,165,0,0.8));
          }
          50% {
            filter: brightness(1.15) drop-shadow(0 0 25px rgba(255,165,0,0.9));
          }
        }
      `}</style>
    </div>
  );
}
