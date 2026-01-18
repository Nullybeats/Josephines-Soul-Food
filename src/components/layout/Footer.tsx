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
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/JosephinesKitchen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-200 text-sm font-semibold"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/josephinessoulfood/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-200 text-sm font-semibold"
                aria-label="Instagram"
              >
                Instagram
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
                  href="/order"
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
