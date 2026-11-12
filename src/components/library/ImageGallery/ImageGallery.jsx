/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';

const sampleImages = [
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    alt: 'Coastal sunset panorama',
    caption: 'Golden hour reflection along the Pacific shoreline.',
  },
  {
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
    alt: 'Alpine mountain peaks under stars',
    caption: 'Starlit night sky above snowy mountain ridgeline.',
  },
  {
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
    alt: 'Foggy forest morning',
    caption: 'Morning mist descending over dense evergreen forest.',
  },
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
    alt: 'Sunlit canyon landscape',
    caption: 'Warm morning light sweeping across deep red rock canyons.',
  },
];

export default function ImageGallery({
  images = sampleImages,
  className = '',
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  const current = images[activeIndex] || images[0];

  return (
    <div className={`w-full max-w-2xl mx-auto space-y-3 ${className}`}>
      {/* Main Feature Image Container */}
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md group">
        <img
          src={current.src}
          alt={current.alt}
          className="h-full w-full object-cover transition-opacity duration-300"
        />

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-black/50 text-white backdrop-blur-xs transition-transform hover:scale-110 hover:bg-black/75 cursor-pointer opacity-90 group-hover:opacity-100"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="absolute right-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-black/50 text-white backdrop-blur-xs transition-transform hover:scale-110 hover:bg-black/75 cursor-pointer opacity-90 group-hover:opacity-100"
        >
          ›
        </button>

        {/* Caption Overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
          <p className="text-sm font-semibold">{current.alt}</p>
          {current.caption && <p className="text-xs text-slate-300 mt-0.5">{current.caption}</p>}
        </div>
      </div>

      {/* Thumbnails Row */}
      <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Gallery thumbnails">
        {images.map((img, idx) => (
          <button
            key={img.src}
            type="button"
            role="tab"
            aria-selected={idx === activeIndex}
            onClick={() => setActiveIndex(idx)}
            className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-all cursor-pointer ${
              idx === activeIndex
                ? 'border-indigo-600 scale-95 shadow-xs'
                : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <img src={img.src} alt={`Thumbnail ${idx + 1}`} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

