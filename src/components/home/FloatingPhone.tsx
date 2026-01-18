'use client';

export function FloatingPhone() {
  return (
    <a
      href="tel:+14192426666"
      className="fixed bottom-24 left-6 z-50 flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group"
      aria-label="Call us"
    >
      <div className="relative">
        <span className="font-bold text-sm">Call</span>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping" />
      </div>
      <span className="hidden sm:block font-bold text-sm uppercase tracking-wide">
        to Order
      </span>
    </a>
  );
}
