"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";
import {
  siInstagram,
  siYoutube,
  siFacebook,
  siX,
  siTiktok,
  siWhatsapp,
} from "simple-icons";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    <footer className={cn("bg-accent text-white", className)}>
      {/* Main Content with Icons */}
      <div className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo and Company Name */}
          <div className="text-center mb-12 md:mb-16">
            <div className="mb-8 flex justify-center">
              <Image
                src="/ARYAF.png"
                alt="أرياف للزراعات الحديثة"
                width={180}
                height={180}
                className="object-contain"
              />
            </div>
            <p className="text-3xl md:text-4xl text-white/90 font-arabic">
              شركة أرياف للزراعات الحديثة
            </p>
          </div>

          {/* Social Media and Phone Numbers - Side by Side */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 max-w-4xl mx-auto mb-8">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <a
                href="https://www.tiktok.com/@aryaf.egy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-200"
                aria-label="تابعنا على تيك توك"
              >
                <SimpleIcon icon={siTiktok} size={24} className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/AryafEgy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-200"
                aria-label="تابعنا على X"
              >
                <SimpleIcon icon={siX} size={24} className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/people/ARYAF-%D8%A3%D8%B1%D9%8A%D8%A7%D9%81/61579916394431/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-200"
                aria-label="تابعنا على فيسبوك"
              >
                <SimpleIcon icon={siFacebook} size={24} className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/@user-xg9ir6zi6s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-200"
                aria-label="تابعنا على يوتيوب"
              >
                <SimpleIcon icon={siYoutube} size={24} className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/aryaf.egy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-200"
                aria-label="تابعنا على إنستغرام"
              >
                <SimpleIcon icon={siInstagram} size={24} className="h-6 w-6" />
              </a>
              <a
                href="https://wa.me/201222802203"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-200 mr-4"
                aria-label="تواصل معنا على واتساب"
              >
                <SimpleIcon icon={siWhatsapp} size={24} className="h-6 w-6" />
              </a>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <a
                href="tel:01222802203"
                className="text-lg text-white/80 hover:text-white transition-colors duration-200 font-arabic"
              >
                01222802203
              </a>
              <span className="text-white/50">|</span>
              <a
                href="tel:01222802207"
                className="text-lg text-white/80 hover:text-white transition-colors duration-200 font-arabic mr-4"
              >
                01222802207
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="bg-amber-50/30 py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-sm md:text-base">
            <a
              href="#من-نحن"
              className="text-white/90 hover:text-white transition-colors duration-200 font-arabic"
            >
              من نحن
            </a>
            <span className="text-white/50 hidden sm:inline">|</span>
            <a
              href="#خدماتنا"
              className="text-white/90 hover:text-white transition-colors duration-200 font-arabic"
            >
              خدماتنا
            </a>
            <span className="text-white/50 hidden sm:inline">|</span>
            <a
              href="#تواصل-معنا"
              className="text-white/90 hover:text-white transition-colors duration-200 font-arabic"
            >
              تواصل معنا
            </a>
            <span className="text-white/50 hidden sm:inline">|</span>
            <a
              href="#موقعنا"
              className="text-white/90 hover:text-white transition-colors duration-200 font-arabic"
            >
              موقعنا
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Scroll to Top */}
      <div className="bg-accent py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-white/80 text-sm font-arabic">
              © 2024 أرياف. جميع الحقوق محفوظة.
            </div>
            <button
              onClick={scrollToTop}
              className="bg-accent/20 hover:bg-accent/30 text-white p-2 rounded transition-colors duration-200"
              aria-label="العودة إلى الأعلى"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
