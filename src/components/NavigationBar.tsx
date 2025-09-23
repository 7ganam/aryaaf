"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { Facebook, Twitter, Youtube, Instagram, Menu, X } from "lucide-react";

interface NavigationBarProps {
  className?: string;
}

export function NavigationBar({ className }: NavigationBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-300 font-arabic",
        isScrolled
          ? "top-0 bg-white shadow-lg py-2"
          : "top-0 md:top-4 md:bg-white/65 md:backdrop-blur-sm md:py-3",
        className
      )}
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Mobile menu button - Left side on mobile */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="p-2 rounded-md transition-colors duration-300 text-gray-700 hover:bg-gray-100"
              aria-label={isMobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>

          {/* Logo (Center) */}
          <div className="flex items-center space-x- space-x-4 mt-2">
            <div className="flex-shrink-0">
              <Image
                src="/ARYAF.png"
                alt="Aryaaf Logo"
                width={60}
                height={60}
                className="h-12 sm:h-16 lg:h-20 w-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Navigation Links (Center) - Desktop only */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x- space-x-8">
              {NAVIGATION_ITEMS.map((item) => (
                <a
                  key={item}
                  href={`#${item.replace(/\s+/g, "-").toLowerCase()}`}
                  className="text-primary hover:text-primary/80 font-medium text-lg transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media Icons and Search (Right Side) - Desktop only */}
          <div className="hidden lg:flex items-center space-x- space-x-4">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 ">
              <button
                type="button"
                className="text-accent hover:text-accent/80 transition-colors duration-200 0"
                aria-label="تابعنا على إنستغرام"
              >
                <Instagram className="h-6 w-6" />
              </button>
              <button
                type="button"
                className="text-accent hover:text-accent/80 transition-colors duration-200 0"
                aria-label="تابعنا على يوتيوب"
              >
                <Youtube className="h-6 w-6" />
              </button>
              <button
                type="button"
                className="text-accent hover:text-accent/80 transition-colors duration-200 0"
                aria-label="تابعنا على فيسبوك"
              >
                <Facebook className="h-6 w-6" />
              </button>
              <button
                type="button"
                className="text-accent hover:text-accent/80 transition-colors duration-200 0"
                aria-label="تابعنا على تويتر"
              >
                <Twitter className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Empty div for mobile to balance the layout */}
          <div className="lg:hidden w-10"></div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={closeMobileMenu}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && closeMobileMenu()}
        />

        {/* Drawer */}
        <div
          className={cn(
            "absolute left-0 top-0 h-full w-80 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50",
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
          dir="rtl"
        >
          <div className="flex flex-col h-full">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-6 pb-0 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 font-arabic">
                القائمة
              </h2>
              <button
                type="button"
                onClick={closeMobileMenu}
                className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                aria-label="إغلاق القائمة"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="flex-1 px-6 py-4 bg-white">
              <nav className="space-y-2">
                {NAVIGATION_ITEMS.map((item) => (
                  <a
                    key={item}
                    href={`#${item.replace(/\s+/g, "-").toLowerCase()}`}
                    onClick={closeMobileMenu}
                    className="block px-3 py-3 text-base font-medium text-primary hover:bg-primary/10 hover:text-primary/80 rounded-md transition-colors duration-200"
                  >
                    {item}
                  </a>
                ))}
              </nav>

              {/* Social Media Links in Mobile */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-900 mb-4 font-arabic">
                  تابعنا
                </h3>
                <div className="flex space-x- space-x-4">
                  <button
                    type="button"
                    className="text-accent hover:text-accent/80 transition-colors duration-200"
                    aria-label="تابعنا على تويتر"
                  >
                    <Twitter className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    className="text-accent hover:text-accent/80 transition-colors duration-200"
                    aria-label="تابعنا على فيسبوك"
                  >
                    <Facebook className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    className="text-accent hover:text-accent/80 transition-colors duration-200"
                    aria-label="تابعنا على يوتيوب"
                  >
                    <Youtube className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    className="text-accent hover:text-accent/80 transition-colors duration-200"
                    aria-label="تابعنا على إنستغرام"
                  >
                    <Instagram className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-6 border-t border-gray-200 bg-white">
              <button
                type="button"
                onClick={closeMobileMenu}
                className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200 font-arabic"
              >
                ابدأ الآن
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
