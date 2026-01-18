'use client';

import { useState, useEffect, useRef } from 'react';

const galleryItems = [
  {
    id: 1,
    type: 'image',
    image: '/images/menu/rib-dinner.jpg',
    title: 'Fall-Off-The-Bone Ribs',
    description: 'Slow-smoked and glazed with our signature BBQ sauce',
    tag: 'Best Seller',
    imagePosition: 'center',
  },
  {
    id: 2,
    type: 'image',
    image: '/images/menu/ribs-racks.jpg',
    title: 'Racks of Ribs',
    description: 'Full racks prepared with our legendary seasoning',
    tag: 'Premium',
    imagePosition: 'center',
    zoomOut: true,
  },
  {
    id: 3,
    type: 'image',
    image: '/images/menu/food-sides.jpg',
    title: 'Soul Food Sides',
    description: 'All your favorites - mac & cheese, greens, yams, and more',
    tag: 'Homestyle',
    imagePosition: 'center',
  },
  {
    id: 4,
    type: 'image',
    image: '/images/menu/community-photo.jpg',
    title: 'Our Community',
    description: 'Proudly serving and supporting our Toledo community',
    tag: 'Community',
    imagePosition: 'center',
  },
  {
    id: 5,
    type: 'image',
    image: '/images/menu/community-school.jpg',
    title: 'Feeding Our Future',
    description: 'Giving back to local schools and youth programs',
    tag: 'Community',
    imagePosition: 'center',
  },
];

export function FoodGallerySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto-slide
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-block px-5 py-2.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-bold uppercase tracking-wider rounded-full mb-6">
            Our Kitchen
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Made Fresh Daily
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl text-center leading-relaxed">
            Every dish prepared with love, using recipes passed down through generations.
          </p>
        </div>

        {/* Gallery Slider */}
        <div
          ref={sliderRef}
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main slider */}
          <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            {galleryItems.map((item, index) => {
              const isActive = index === currentIndex;
              const isPrev = index === (currentIndex - 1 + galleryItems.length) % galleryItems.length;
              const isNext = index === (currentIndex + 1) % galleryItems.length;

              return (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    isActive
                      ? 'opacity-100 scale-100 z-20'
                      : isPrev
                      ? 'opacity-0 scale-95 -translate-x-full z-10'
                      : isNext
                      ? 'opacity-0 scale-95 translate-x-full z-10'
                      : 'opacity-0 scale-90 z-0'
                  }`}
                >
                  {/* Image Slide */}
                  <div className={`absolute inset-0 flex justify-center ${
                    item.imagePosition === 'bottom' ? 'items-end' :
                    item.imagePosition === 'center' ? 'items-center' : 'items-start'
                  }`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`object-contain ${
                        item.zoomOut
                          ? 'h-auto min-h-full w-[80%]'
                          : 'h-auto min-h-full w-full'
                      }`}
                      style={{
                        objectPosition: item.imagePosition === 'bottom' ? 'center bottom' :
                                        item.imagePosition === 'center' ? 'center center' : 'center top',
                        filter: 'brightness(1.2) contrast(1.08) saturate(1.1)',
                        imageRendering: 'crisp-edges',
                        WebkitBackfaceVisibility: 'hidden',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)',
                      }}
                    />
                    {/* Gradient overlay - lighter to show more of image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-[var(--color-primary)] hover:text-white shadow-lg transition-all duration-300 z-30"
            aria-label="Previous slide"
          >
            <span className="text-lg font-bold">&lt;</span>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-[var(--color-primary)] hover:text-white shadow-lg transition-all duration-300 z-30"
            aria-label="Next slide"
          >
            <span className="text-lg font-bold">&gt;</span>
          </button>

          {/* Play/Pause slideshow button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-4 md:top-6 right-4 md:right-6 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-[var(--color-primary)] hover:text-white shadow-lg transition-all duration-300 z-30"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            <span className="text-sm font-bold">{isPlaying ? '||' : '>'}</span>
          </button>
        </div>

        {/* Text content below slider */}
        <div className="mt-8 text-center">
          <div className="max-w-2xl mx-auto">
            {/* Current slide info */}
            <span className="inline-block px-4 py-1.5 bg-[var(--color-primary)] text-white text-sm font-bold rounded-full mb-3">
              {galleryItems[currentIndex].tag}
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {galleryItems[currentIndex].title}
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              {galleryItems[currentIndex].description}
            </p>
          </div>

          {/* Progress dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-[var(--color-primary)]'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide counter */}
          <div className="mt-4 text-sm text-gray-500">
            {currentIndex + 1} / {galleryItems.length}
          </div>
        </div>
      </div>
    </section>
  );
}
