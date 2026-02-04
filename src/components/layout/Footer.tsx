'use client';

import { Button } from '@/components/ui/Button';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Column */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4 text-[var(--color-primary-light)]">
              Josephine's Soul Food
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Ohio's premier soul food destination, serving authentic family recipes with love since [YEAR].
              A Black-owned staple bringing comfort and tradition to every meal.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/JosephinesKitchen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[var(--color-primary)] rounded-full flex items-center justify-center transition-all duration-200 group"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/josephinessoulfood/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[var(--color-primary)] rounded-full flex items-center justify-center transition-all duration-200 group"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/menu"
                  className="text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-200 text-sm"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="/store"
                  className="text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-200 text-sm"
                >
                  Store
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-200 text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/catering"
                  className="text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-200 text-sm"
                >
                  Catering
                </a>
              </li>
              <li>
                <a
                  href="https://josephinessoulfood.com/menu"
                  className="text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-200 text-sm"
                >
                  Order Online
                </a>
              </li>
            </ul>
          </div>

          {/* Hours Column */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">
              Hours
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between text-gray-400">
                <span>Monday - Thursday</span>
                <span>11am - 8pm</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Friday - Saturday</span>
                <span>11am - 9pm</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Sunday</span>
                <span>12pm - 7pm</span>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">
                <span className="font-semibold block">Address:</span>
                902 Lagrange St<br />
                Toledo, OH 43604
              </li>
              <li className="text-gray-400 text-sm">
                <span className="font-semibold">Phone: </span>
                <a
                  href="tel:+14192426666"
                  className="hover:text-[var(--color-primary)] transition-colors duration-200"
                >
                  (419) 242-6666
                </a>
              </li>
              <li className="text-gray-400 text-sm">
                <span className="font-semibold">Email: </span>
                <a
                  href="mailto:info@josephines.com"
                  className="hover:text-[var(--color-primary)] transition-colors duration-200"
                >
                  info@josephines.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Josephine's Soul Food. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
