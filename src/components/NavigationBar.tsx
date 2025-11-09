"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import {
  siInstagram,
  siYoutube,
  siFacebook,
  siX,
  siTiktok,
  siWhatsapp,
} from "simple-icons";

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMobileMenu();
  };

  // Simple Icons component helper
  const SimpleIcon = ({
    icon,
    size = 24,
    className,
  }: {
    icon: typeof siInstagram;
    size?: number;
    className?: string;
  }) => {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{icon.title}</title>
        <path d={icon.path} />
      </svg>
    );
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
            <button
              onClick={scrollToTop}
              className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-200"
              aria-label="العودة إلى الصفحة الرئيسية"
            >
              <Image
                src="/ARYAF.png"
                alt="Aryaaf Logo"
                width={400}
                height={400}
                className="h-12 sm:h-12 lg:h-12 w-auto object-contain"
                priority
              />
            </button>
          </div>

          {/* Navigation Links (Center) - Desktop only */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x- space-x-8">
              {NAVIGATION_ITEMS.map((item) => (
                <a
                  key={item}
                  href={
                    item === "الرئيسية"
                      ? "/"
                      : `#${item.replace(/\s+/g, "-").toLowerCase()}`
                  }
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
              <a
                href="https://www.instagram.com/aryaf.egy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors duration-200"
                aria-label="تابعنا على إنستغرام"
              >
                <SimpleIcon icon={siInstagram} size={24} className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/@user-xg9ir6zi6s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors duration-200"
                aria-label="تابعنا على يوتيوب"
              >
                <SimpleIcon icon={siYoutube} size={24} className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/people/ARYAF-%D8%A3%D8%B1%D9%8A%D8%A7%D9%81/61579916394431/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors duration-200"
                aria-label="تابعنا على فيسبوك"
              >
                <SimpleIcon icon={siFacebook} size={24} className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/AryafEgy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors duration-200"
                aria-label="تابعنا على X"
              >
                <SimpleIcon icon={siX} size={24} className="h-6 w-6" />
              </a>
              <a
                href="https://www.tiktok.com/@aryaf.egy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors duration-200"
                aria-label="تابعنا على تيك توك"
              >
                <SimpleIcon icon={siTiktok} size={24} className="h-6 w-6" />
              </a>
              <a
                href="https://wa.me/201222802203"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors duration-200"
                aria-label="تواصل معنا على واتساب"
              >
                <SimpleIcon icon={siWhatsapp} size={24} className="h-6 w-6" />
              </a>
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
                    href={
                      item === "الرئيسية"
                        ? "/"
                        : `#${item.replace(/\s+/g, "-").toLowerCase()}`
                    }
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
                  <a
                    href="https://www.instagram.com/aryaf.egy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors duration-200"
                    aria-label="تابعنا على إنستغرام"
                  >
                    <SimpleIcon
                      icon={siInstagram}
                      size={24}
                      className="h-6 w-6"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/@user-xg9ir6zi6s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors duration-200"
                    aria-label="تابعنا على يوتيوب"
                  >
                    <SimpleIcon
                      icon={siYoutube}
                      size={24}
                      className="h-6 w-6"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/people/ARYAF-%D8%A3%D8%B1%D9%8A%D8%A7%D9%81/61579916394431/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors duration-200"
                    aria-label="تابعنا على فيسبوك"
                  >
                    <SimpleIcon
                      icon={siFacebook}
                      size={24}
                      className="h-6 w-6"
                    />
                  </a>
                  <a
                    href="https://x.com/AryafEgy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors duration-200"
                    aria-label="تابعنا على X"
                  >
                    <SimpleIcon icon={siX} size={24} className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@aryaf.egy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors duration-200"
                    aria-label="تابعنا على تيك توك"
                  >
                    <SimpleIcon icon={siTiktok} size={24} className="h-6 w-6" />
                  </a>
                  <a
                    href="https://wa.me/201222802203"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors duration-200"
                    aria-label="تواصل معنا على واتساب"
                  >
                    <SimpleIcon
                      icon={siWhatsapp}
                      size={24}
                      className="h-6 w-6"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
