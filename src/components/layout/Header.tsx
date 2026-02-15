'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-amber-50/90 via-orange-50/90 to-amber-50/90 border-b border-amber-200/50 sticky top-0 z-50 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          {/* Logo Section - With Josephine's Portrait */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-3 group">
              {/* Oval Portrait Container */}
              <div className="relative w-20 h-24 overflow-hidden transition-all duration-200 group-hover:scale-105" style={{ borderRadius: '50% / 60%', backgroundColor: 'transparent' }}>
                <Image
                  src="/images/branding/josephine-portrait.png"
                  alt="Josephine Williams - Founder of Josephine's Soul Food Toledo Ohio"
                  width={80}
                  height={96}
                  className="w-full h-full object-cover scale-[1.8]"
                  style={{ objectPosition: '50% 40%' }}
                  priority
                />
              </div>
              {/* Brand Text */}
              <div className="flex flex-col justify-center items-center">
                <span className="font-serif text-3xl font-bold text-amber-900 leading-none tracking-tight">
                  Josephine's
                </span>
                <span className="text-xs text-amber-700 font-bold uppercase tracking-[0.2em] mt-1">
                  Soul Food
                </span>
              </div>
            </a>
          </div>

          {/* Center Navigation - Cohesive styling */}
          <nav className="hidden lg:flex items-center gap-1">
            <a href="/" className="px-4 py-2 text-sm font-semibold text-amber-900 hover:text-amber-700 hover:bg-amber-100/50 rounded-lg transition-all">
              Home
            </a>
            <a href="/menu" className="px-4 py-2 text-sm font-semibold text-amber-900 hover:text-amber-700 hover:bg-amber-100/50 rounded-lg transition-all">
              Menu
            </a>
            <a href="/about" className="px-4 py-2 text-sm font-semibold text-amber-900 hover:text-amber-700 hover:bg-amber-100/50 rounded-lg transition-all">
              About
            </a>
            <a href="/catering" className="px-4 py-2 text-sm font-semibold text-amber-900 hover:text-amber-700 hover:bg-amber-100/50 rounded-lg transition-all">
              Catering
            </a>
            <a
              href="https://maps.google.com/?q=902+Lagrange+St+Toledo+OH+43604"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold text-amber-900 hover:text-amber-700 hover:bg-amber-100/50 rounded-lg transition-all inline-flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Directions
            </a>
          </nav>

          {/* Right Section - Better aligned */}
          <div className="flex items-center gap-3">
            {/* Phone number - desktop only */}
            <a
              href="tel:+14192426666"
              className="hidden xl:flex items-center gap-2 text-amber-900 hover:text-amber-700 transition-colors"
            >
              <span className="text-sm font-semibold">(419) 242-6666</span>
            </a>

            {/* Cart */}
            <button
              className="relative p-2.5 text-amber-900 hover:text-amber-700 hover:bg-amber-100/50 rounded-lg transition-all"
              aria-label="Shopping cart"
            >
              <span className="font-bold text-sm">Cart</span>
              <span className="absolute top-0 right-0 w-4 h-4 bg-orange-600 text-white text-[0.6rem] font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Order Button */}
            <Button
              variant="primary"
              size="sm"
              className="hidden md:inline-flex bg-amber-700 hover:bg-amber-800 text-white font-bold shadow-md"
              onClick={() => (window.location.href = 'https://josephinessoulfood.com/menu')}
            >
              Order Now
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-amber-900 hover:text-amber-700 hover:bg-amber-100/50 rounded-lg transition-all"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
