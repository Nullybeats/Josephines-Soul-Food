'use client';

import { useState, useRef } from 'react';

export function NewsFeature() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  return (
    <section className="relative pt-0 pb-16 lg:pt-0 lg:pb-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Toledo Book - Left decorative element */}
        <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2">
          <img
            src="/images/branding/toledo-book.jpg"
            alt="100 Things to Do in Toledo Before You Die"
            className="w-44 h-auto rounded-lg shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
            style={{
              transform: 'rotate(-6deg)',
              filter: 'drop-shadow(4px 6px 12px rgba(0,0,0,0.3))',
            }}
          />
          <p className="text-center text-xs text-gray-500 mt-3 font-medium max-w-[176px]">
            We're on the list!
          </p>
        </div>

        {/* Ohio State Logo - Right decorative element */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
          <img
            src="/images/branding/ohio-state-logo.png"
            alt="Ohio State"
            className="w-44 h-auto transition-all duration-300 hover:scale-110 cursor-pointer"
            style={{
              transform: 'rotate(6deg)',
              filter: 'drop-shadow(4px 6px 12px rgba(0,0,0,0.2))',
              opacity: 0.85,
            }}
          />
          <p className="text-center text-xs text-gray-500 mt-3 font-medium">
            Ohio Pride
          </p>
        </div>

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-block px-5 py-2.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-bold uppercase tracking-wider rounded-full mb-6">
            In The News
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Featured on Local News
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl text-center leading-relaxed">
            See why Toledo loves Josephine's Soul Food — watch our feature story and discover
            what makes us a community favorite.
          </p>
        </div>

        {/* Video Container - Centered with enhanced styling */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900 ring-1 ring-gray-200">
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full aspect-video"
              onEnded={handleVideoEnded}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              controls={isPlaying}
              playsInline
            >
              <source src="/videos/media-news.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play Button Overlay (shows when not playing) */}
            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-black/30 to-black/10 cursor-pointer transition-all duration-300 group"
                onClick={handlePlayClick}
              >
                {/* Play button with glow effect */}
                <div className="relative">
                  <div className="absolute inset-0 bg-[var(--color-primary)] rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 scale-150" />
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(129,107,59,0.4)]">
                    <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[24px] border-l-[var(--color-primary)] border-b-[14px] border-b-transparent ml-2" />
                  </div>
                </div>

                {/* Watch Now text */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                  <span className="text-white font-semibold text-lg tracking-wide opacity-90 group-hover:opacity-100 transition-opacity">
                    Watch Now
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Caption */}
          <p className="text-center text-gray-500 mt-6 text-base font-medium">
            Local news coverage featuring Josephine's Soul Food
          </p>
        </div>

      </div>
    </section>
  );
}
