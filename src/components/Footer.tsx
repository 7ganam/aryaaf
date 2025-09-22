"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("bg-accent text-white", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 space-x-reverse mb-6">
                <div className="flex-shrink-0">
                  <Image
                    src="/ARYAF.png"
                    alt="Aryaaf Logo"
                    width={60}
                    height={60}
                    className="h-15 w-auto object-contain"
                  />
                </div>
              </div>
              <p className="text-white/90 leading-relaxed mb-6 font-arabic max-w-md">
                نعمل على تطوير وتحديث قطاع الزراعة والثروة الحيوانية من خلال
                تقنيات متقدمة وبرامج تدريبية شاملة لضمان الاستدامة والربحية
              </p>
              <div className="flex space-x-4 ">
                <button
                  type="button"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                  aria-label="تابعنا على فيسبوك"
                >
                  <Facebook className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                  aria-label="تابعنا على تويتر"
                >
                  <Twitter className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                  aria-label="تابعنا على يوتيوب"
                >
                  <Youtube className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                  aria-label="تابعنا على إنستغرام"
                >
                  <Instagram className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 font-arabic">
                روابط سريعة
              </h3>
              <ul className="space-y-3">
                {[
                  "الموارد",
                  "السياسات",
                  "الأحداث",
                  "اللجان الفرعية",
                  "الأخبار",
                  "من نحن",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.replace(/\s+/g, "-").toLowerCase()}`}
                      className="text-white/90 hover:text-white transition-colors duration-200 font-arabic"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 font-arabic">
                تواصل معنا
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <svg
                    className="w-5 h-5 text-green-400 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-white/90 font-arabic text-sm">
                      أبوحمص وميدان السلام
                      <br />
                      محافظة البحيرة، مصر
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <svg
                    className="w-5 h-5 text-green-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href="tel:+201132454567"
                    className="text-white/90 hover:text-white transition-colors duration-200 font-arabic"
                  >
                    +201132454567
                  </a>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <svg
                    className="w-5 h-5 text-green-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:info@aryaaf.sa"
                    className="text-white/90 hover:text-white transition-colors duration-200 font-arabic"
                  >
                    info@aryaaf.sa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-sm font-arabic">
              © 2024 أرياف - لجنة الزراعة. جميع الحقوق محفوظة.
            </div>
            <div className="flex space-x-6 space-x-reverse text-sm">
              <a
                href="/privacy"
                className="text-white/80 hover:text-white transition-colors duration-200 font-arabic"
              >
                سياسة الخصوصية
              </a>
              <a
                href="/terms"
                className="text-white/80 hover:text-white transition-colors duration-200 font-arabic"
              >
                شروط الاستخدام
              </a>
              <a
                href="/sitemap"
                className="text-white/80 hover:text-white transition-colors duration-200 font-arabic"
              >
                خريطة الموقع
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
