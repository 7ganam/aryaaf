"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface AnimalFarmingSectionProps {
  className?: string;
}

const farmingPoints = [
  "تطوير تقنيات حديثة لتربية الماشية والدواجن",
  "إدارة متكاملة لمزارع الأسماك والأحياء المائية",
  "برامج التغذية المتوازنة للحيوانات",
  "نظم الرعاية الصحية والوقائية المتقدمة",
  "تطوير سلالات محسنة عالية الإنتاجية",
  "إدارة المخلفات والاستدامة البيئية",
];

export function AnimalFarmingSection({ className }: AnimalFarmingSectionProps) {
  return (
    <div className={cn("py-20 bg-white", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6 font-arabic">
                الثروة الحيوانية وتربية الأسماك
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-arabic">
                نعمل على تطوير وتحديث قطاع الثروة الحيوانية وتربية الأسماك من
                خلال تقنيات متقدمة وبرامج تدريبية شاملة لضمان الاستدامة والربحية
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6 font-arabic">
                مجالات عملنا الرئيسية
              </h3>
              <ul className="space-y-4">
                {farmingPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start space-x-3 space-x-reverse "
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1 mx-2">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-arabic leading-relaxed mr-3">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <button
                type="button"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors duration-200 font-arabic"
              >
                تعرف على المزيد
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="مزرعة حيوانية حديثة"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
