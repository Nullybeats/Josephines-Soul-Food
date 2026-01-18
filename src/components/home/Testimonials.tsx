'use client';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    location: 'Toledo, OH',
    rating: 5,
    text: "The fried chicken is absolutely fabulous! Best I've had in Toledo. The seasoning is perfect and the mac & cheese and greens are incredible. This is real soul food made with love by a great family. Huge servings at modest prices too!",
    verified: true,
  },
  {
    id: 2,
    name: 'James T.',
    location: 'Toledo, OH',
    rating: 5,
    text: "Little place with a big heart! The BBQ ribs and fried catfish are outstanding. You can tell these recipes have been handed down through generations. The staff is terrific and the service is always enjoyable. Soul food at its finest!",
    verified: true,
  },
  {
    id: 3,
    name: 'Michelle R.',
    location: 'Toledo, OH',
    rating: 5,
    text: "The fried okra, yams, and greens are amazing! The banana pudding and peach cobbler for dessert? Don't even get me started. This restaurant is powered by family members who really know how to execute these traditional recipes. Absolutely delicious!",
    verified: true,
  },
];

export function Testimonials() {
  return (
    <section className="section-lg bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full mb-4">
            <span className="text-sm font-bold uppercase tracking-wide">
              4.6 Stars · 190+ Reviews
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Our Community Says
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it—hear from the families, neighbors, and food lovers
            who've made Josephine's a part of their lives.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[var(--color-primary)]/30 transition-all duration-300 hover:shadow-xl"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <span className="text-6xl font-serif text-[var(--color-primary)]">"</span>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span
                    key={i}
                    className="text-yellow-400 text-lg"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10 italic">
                "{testimonial.text}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-primary)] flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    {testimonial.verified && (
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center" title="Verified Customer">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to reviews */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Josephine's+Soul+Food+Kitchen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-bold transition-colors"
          >
            Read All 190+ Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
