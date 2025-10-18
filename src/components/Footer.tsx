"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={cn("bg-accent text-white", className)}>
      {/* Main Content with Icons */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center mb-6">
            <Image
              src="/images/foote-image.svg"
              alt="Footer Icons"
              width={200}
              height={60}
              className="h-32 w-auto object-contain mt-10 "
            />
          </div>

          <div className="text-center">
            <h2 className="text-lg font-semibold text-white mb-2 font-arabic">
              ارياف
            </h2>
            <p className="text-sm text-white/80 font-arabic">
              تطوير القطاع الزراعي
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="bg-amber-50/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-6 space-x-reverse text-md">
            <a
              href="#من-نحن"
              className="text-white/90 hover:text-white transition-colors duration-200 font-arabic"
            >
              من نحن
            </a>
            <span className="text-white/50">|</span>
            <a
              href="#خدماتنا"
              className="text-white/90 hover:text-white transition-colors duration-200 font-arabic"
            >
              خدماتنا
            </a>
            <span className="text-white/50">|</span>
            <a
              href="#تواصل-معنا"
              className="text-white/90 hover:text-white transition-colors duration-200 font-arabic"
            >
              تواصل معنا
            </a>
            <span className="text-white/50">|</span>
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
