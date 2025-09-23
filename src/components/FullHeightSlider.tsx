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
      className={cn(
        "relative w-full overflow-hidden mt-[70px] md:mt-0",
        className
      )}
      dir="ltr"
    >
      {/* Mobile: Show only first image */}
      <div className="md:hidden w-full">
        {slides.length > 0 && (
          <div
            className="w-full flex items-center justify-center relative rounded-lg overflow-hidden"
            style={{ backgroundColor: slides[0].backgroundColor }}
          >
            <div
              className="w-full bg-contain bg-top bg-no-repeat bg-red-50"
              style={{
                backgroundImage: `url(${slides[2].image})`,
                aspectRatio: "16/9",
                minHeight: "200px",
              }}
            />
          </div>
        )}
      </div>

      {/* Desktop: Show carousel */}
      <div className="hidden md:block embla" ref={emblaRef}>
        <div className="embla__container flex">
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
                  className="w-full bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    aspectRatio: "16/9",
                    minHeight: "400px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Desktop only */}
      <button
        type="button"
        className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
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
        className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
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
