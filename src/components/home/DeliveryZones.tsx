'use client';

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
    <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-100 text-green-700 rounded-full mb-6">
            <span className="text-sm font-bold uppercase tracking-wide">
              Free Delivery on Orders $30+
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            From Our Kitchen to Your Neighborhood
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed text-center">
            We've been serving Toledo for generations, and we know every street, every corner, every community.
            Hot, fresh soul food delivered with care to neighborhoods across the city—because great food
            should never have to travel far to reach you.
          </p>
        </div>

        {/* Delivery Zones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {deliveryZones.map((zone, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border-2 border-gray-200 hover:border-[var(--color-primary)] overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center"
            >
              {/* Zone Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={zone.image}
                  alt={zone.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Zone Info */}
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-gray-900 mb-2">
                  {zone.name}
                </h3>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full mb-3">
                  <span className="text-sm font-semibold">{zone.time}</span>
                </div>

                {/* Neighborhoods */}
                <ul className="space-y-1.5">
                  {zone.neighborhoods.map((neighborhood, nIndex) => (
                    <li
                      key={nIndex}
                      className="text-sm text-gray-600"
                    >
                      {neighborhood}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="bg-[var(--color-primary)] rounded-2xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              Don't See Your Area?
            </h3>
            <p className="text-white/90 text-lg mb-6">
              Give us a call! We're always expanding our delivery zones and may be able to accommodate your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+14192426666"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all duration-200 hover:scale-105"
              >
                Call (419) 242-6666
              </a>
              <a
                href="/order"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-gray-900 transition-all duration-200 hover:scale-105"
              >
                Check Delivery at Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
