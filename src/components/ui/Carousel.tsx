"use client";

import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

interface CarouselProps {
  images: string[];
}

const FullscreenLightbox = ({ images, initialIndex, onClose }: { images: string[], initialIndex: number, onClose: () => void }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    startIndex: initialIndex,
    align: "center",
    skipSnaps: false
  });
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 p-2 text-white/70 hover:text-white transition-colors z-[110]"
        aria-label="Close fullscreen"
      >
        <X size={32} />
      </button>

      <div className="w-full h-full flex items-center justify-center p-4 md:p-12 overflow-hidden" ref={emblaRef}>
        <div className="flex w-full h-full items-center gap-4 md:gap-8 cursor-grab active:cursor-grabbing">
          {images.map((img, index) => (
            <div
              className="flex-[0_0_85%] min-w-0 md:flex-[0_0_75%] lg:flex-[0_0_65%] xl:flex-[0_0_55%] h-full flex items-center justify-center cursor-pointer"
              key={index}
              onClick={() => {
                if (index !== selectedIndex) {
                  emblaApi?.scrollTo(index);
                }
              }}
            >
              <div className={`relative w-full h-full max-h-[85vh] transition-all duration-500 ease-out ${index === selectedIndex ? "opacity-100 scale-110" : "opacity-40 scale-95"
                }`}>
                <Image
                  src={img}
                  alt={`Screenshot fullscreen ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority={index === initialIndex}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[110]"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[110]"
            aria-label="Next image"
          >
            <ChevronRight size={32} className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-[110]">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all ${index === selectedIndex ? "bg-white w-6 md:w-8" : "bg-white/50 hover:bg-white/70"
                  }`}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export function Carousel({ images }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="relative group overflow-hidden rounded-xl bg-surface border border-surface-border">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((img, index) => (
              <div
                className="flex-[0_0_100%] min-w-0 relative aspect-video bg-black/20 cursor-pointer"
                key={index}
                onClick={() => setIsFullscreen(true)}
              >
                <Image
                  src={img}
                  alt={`Screenshot ${index + 1}`}
                  fill
                  className="object-cover rounded-t-xl hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>

        {images.length > 1 && (
          <>
            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); scrollPrev(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 backdrop-blur-sm z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); scrollNext(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 backdrop-blur-sm z-10"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${index === selectedIndex ? "bg-white w-4" : "bg-white/50"
                    }`}
                  onClick={(e) => { e.stopPropagation(); emblaApi?.scrollTo(index); }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {mounted && isFullscreen && createPortal(
        <FullscreenLightbox
          images={images}
          initialIndex={selectedIndex}
          onClose={() => setIsFullscreen(false)}
        />,
        document.body
      )}
    </>
  );
}
