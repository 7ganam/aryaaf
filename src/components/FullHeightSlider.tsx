"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { SECTION_IDS } from "@/lib/constants";

interface SlideData {
  id: number;
  title: string;
  description: string;
  image: string;
  backgroundColor: string;
}

interface FullHeightSliderProps {
  slides: SlideData[];
  className?: string;
}

export function FullHeightSlider({ slides, className }: FullHeightSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div
      id={SECTION_IDS.HOME}
      className={cn("relative h-screen w-full overflow-hidden ", className)}
      dir="ltr"
    >
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="embla__slide flex-[0_0_100%] min-w-0 relative"
            >
              <div
                className="h-full w-full flex items-center justify-center relative"
                style={{ backgroundColor: slide.backgroundColor }}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-right bg-no-repeat "
                  style={{ backgroundImage: `url(${slide.image})` }}
                />

                {/* Content Overlay */}
                {/* <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
                  <h1 className="text-5xl md:text-7xl font-bold text-accent mb-6 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-accent/90 drop-shadow-md">
                    {slide.description}
                  </p>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {scrollSnaps.map((snap, index) => (
          <button
            key={`dot-${snap}`}
            type="button"
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === selectedIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            )}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        onClick={() => emblaApi?.scrollPrev()}
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        type="button"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        onClick={() => emblaApi?.scrollNext()}
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
