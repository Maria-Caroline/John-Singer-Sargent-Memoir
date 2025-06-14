'use client';

import { useState } from "react";

type Photo = {
  src: string;
  caption: string;
};

type PhotoCarouselProps = {
  photos: Photo[];
};

export default function PhotoCarousel({ photos }: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-2xl shadow-lg">
      <img
        src={photos[currentIndex].src}
        alt={photos[currentIndex].caption}
        className="w-full h-64 object-cover transition duration-500"
      />
      <div className="absolute bottom-0 bg-black/50 w-full text-white text-center py-2">
        {photos[currentIndex].caption}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black px-3 py-1 rounded-full shadow"
      >
        ◀
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black px-3 py-1 rounded-full shadow"
      >
        ▶
      </button>
    </div>
  );
}
