'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const eventTypes = [
  { id: 'wedding', label: 'Wedding' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'birthday', label: 'Birthday' },
  { id: 'graduation', label: 'Graduation' },
  { id: 'reunion', label: 'Family Reunion' },
  { id: 'other', label: 'Other' },
];

const packages = [
  {
    id: 'classic',
    name: 'Classic Soul',
    pricePerPerson: 18,
    description: 'Perfect for casual gatherings',
    items: [
      'Fried Chicken (2 pcs per person)',
      'Mac & Cheese',
      'Collard Greens',
      'Cornbread',
      'Sweet Tea',
    ],
  },
  {
    id: 'deluxe',
    name: 'Deluxe Feast',
    pricePerPerson: 28,
    description: 'Our most popular package',
    items: [
      'Choice of 2 Proteins',
      '3 Sides of Your Choice',
      'Cornbread & Honey Butter',
      'Banana Pudding',
      'Sweet Tea & Lemonade',
    ],
  },
  {
    id: 'premium',
    name: 'Premium Celebration',
    pricePerPerson: 42,
    description: 'The full Josephine\'s experience',
    items: [
      'All Proteins Available',
      '4 Sides of Your Choice',
      'Full Dessert Table',
      'Premium Drink Selection',
      'Dedicated Service Staff',
    ],
  },
];

export default function CateringPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedEventType, setSelectedEventType] = useState<string | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [guestCount, setGuestCount] = useState(50);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-20 pb-32 md:pb-16 min-h-screen bg-white flex items-center">
        <Container size="narrow">
          <div className="text-center bg-white rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">Request Received</h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto">
              Thank you for your interest in catering with Josephine&apos;s! Our team will
              contact you within 24 hours to discuss your event.
            </p>
            <Button variant="primary" onClick={() => setSubmitted(false)}>
              Submit Another Request
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-32 md:pb-16 min-h-screen bg-white">
      {/* Header */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <Container size="wide">
          <div className="flex flex-col items-center text-center">
            <span className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6">
              Catering Services
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Let Us Cater Your Event
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl leading-relaxed">
              From intimate gatherings to grand celebrations, bring the warmth of
              Josephine&apos;s to your special occasion.
            </p>
          </div>
        </Container>
      </section>

      {/* Form */}
      <section className="py-12 sm:py-16">
        <Container size="wide">
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            {/* Event Type */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 mb-6">
              <h2 className="font-display text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">What type of event?</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {eventTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedEventType(type.id)}
                    className={cn(
                      'p-3 sm:p-4 rounded-xl border-2 text-left transition-all',
                      selectedEventType === type.id
                        ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5'
                        : 'border-gray-200 hover:border-gray-400'
                    )}
                  >
                    <span className="font-medium text-sm sm:text-base text-gray-900">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Guest Count */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 mb-6">
              <h2 className="font-display text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">
                How many guests?
              </h2>
              <div className="flex items-center gap-4 sm:gap-6">
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={guestCount}
                  onChange={(e) => setGuestCount(parseInt(e.target.value))}
                  className="flex-1 h-2 sm:h-3 bg-gray-100 rounded-full appearance-none cursor-pointer accent-[var(--color-primary)]"
                />
                <div className="bg-[var(--color-primary)] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold text-lg sm:text-xl min-w-[80px] sm:min-w-[100px] text-center">
                  {guestCount}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-4">
                Minimum 20 guests. For events over 500, please call us directly.
              </p>
            </div>

            {/* Package Selection */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 mb-6">
              <h2 className="font-display text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">Choose a Package</h2>
              <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                {packages.map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={cn(
                      'p-4 sm:p-6 rounded-xl border-2 text-left transition-all h-full flex flex-col',
                      selectedPackage === pkg.id
                        ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5'
                        : 'border-gray-200 hover:border-gray-400'
                    )}
                  >
                    <h3 className="font-display text-base sm:text-lg font-bold mb-1 text-gray-900">{pkg.name}</h3>
                    <p className="text-[var(--color-primary)] font-bold text-sm sm:text-base mb-2">
                      ${pkg.pricePerPerson}/person
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                      {pkg.description}
                    </p>
                    <ul className="text-xs sm:text-sm text-gray-600 space-y-1 flex-1">
                      {pkg.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[var(--color-gold)]">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    {selectedPackage === pkg.id && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="font-bold text-sm sm:text-base text-[var(--color-primary)]">
                          Estimated: ${(pkg.pricePerPerson * guestCount).toLocaleString()}
                        </p>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Event Details */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 mb-6">
              <h2 className="font-display text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">
                Event Details
              </h2>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Time</label>
                  <input
                    type="time"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all text-gray-900"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Location</label>
                  <input
                    type="text"
                    placeholder="Address or venue name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 mb-6">
              <h2 className="font-display text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">Your Information</h2>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                    placeholder="(419) 555-1234"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests or Dietary Needs</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all resize-none text-gray-900 placeholder:text-gray-400"
                    placeholder="Tell us about any special requirements..."
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <Button type="submit" variant="primary" size="lg" className="w-full">
              Submit Catering Request
            </Button>
          </form>
        </Container>
      </section>
    </div>
  );
}
