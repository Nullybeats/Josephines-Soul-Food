'use client';

import Image from 'next/image';

const deliveryZones = [
  {
    name: 'Downtown Toledo',
    time: '15-20 min',
    neighborhoods: ['Warehouse District', 'Uptown', 'Civic Center'],
    image: '/images/locations/downtown.jpg',
  },
  {
    name: 'Old West End',
    time: '15-20 min',
    neighborhoods: ['Historic District', 'Collingwood', 'Parkwood'],
    image: '/images/locations/university-circle.jpg',
  },
  {
    name: 'West Toledo',
    time: '20-25 min',
    neighborhoods: ['Secor Gardens', 'Point Place', 'Ottawa Hills'],
    image: '/images/locations/ohio-city.jpg',
  },
  {
    name: 'East Toledo',
    time: '20-25 min',
    neighborhoods: ['Birmingham', 'Oregon', 'Walbridge'],
    image: '/images/locations/east-toledo.jpg',
  },
];

export function DeliveryZones() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="relative flex flex-col items-center text-center mb-10 sm:mb-16">
          {/* Toledo Silhouette - Right */}
          <img
            src="/images/branding/toledo-silhouette.png"
            alt="Toledo Ohio Skyline"
            className="hidden lg:block absolute right-12 top-12 w-48 h-40 object-contain opacity-60"
          />

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            From Our Kitchen to Your Neighborhood
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl leading-relaxed text-center px-2">
            We've been serving Toledo for generations, and we know every street, every corner, every community.
            Hot, fresh soul food delivered with care to neighborhoods across the city—because great food
            should never have to travel far to reach you.
          </p>
        </div>

        {/* Delivery Zones Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-10 sm:mb-12">
          {deliveryZones.map((zone, index) => (
            <a
              key={index}
              href="/menu"
              className="group bg-white rounded-lg sm:rounded-xl border-2 border-gray-200 hover:border-[var(--color-primary)] overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center block cursor-pointer"
            >
              {/* Zone Image - Optimized */}
              <div className="relative h-24 sm:h-32 lg:h-40 overflow-hidden">
                <Image
                  src={zone.image}
                  alt={`Soul food delivery to ${zone.name} - Toledo Ohio`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Zone Info */}
              <div className="p-3 sm:p-4 lg:p-5">
                <h3 className="font-display text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                  {zone.name}
                </h3>
                <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-3 sm:py-1 bg-green-100 text-green-700 rounded-full mb-2 sm:mb-3">
                  <span className="text-xs sm:text-sm font-semibold">{zone.time}</span>
                </div>

                {/* Neighborhoods - hidden on mobile for cleaner look */}
                <ul className="hidden sm:block space-y-1 sm:space-y-1.5">
                  {zone.neighborhoods.map((neighborhood, nIndex) => (
                    <li
                      key={nIndex}
                      className="text-xs sm:text-sm text-gray-600"
                    >
                      {neighborhood}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-700 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
            Don't see your area? Give us a call!
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center px-4 sm:px-0">
            <a
              href="tel:+14192426666"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 bg-[var(--color-primary)] text-white rounded-full font-bold text-xs sm:text-sm hover:bg-[var(--color-primary-dark)] transition-all duration-200 hover:scale-105"
            >
              Call (419) 242-6666
            </a>
            <a
              href="https://josephinessoulfood.com/menu"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-full font-bold text-xs sm:text-sm hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200 hover:scale-105"
            >
              Check Delivery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
