"use client";

import { cn } from "@/lib/utils";

interface FuturePlan {
  id: number;
  title: string;
  description: string;
  icon: string;
  timeline: string;
}

interface OurFuturePlansProps {
  className?: string;
}

const futurePlans: FuturePlan[] = [
  {
    id: 1,
    title: "مركز التميز الزراعي",
    description:
      "إنشاء مركز متخصص للبحث والتطوير في التقنيات الزراعية الحديثة والمستدامة",
    icon: "🌱",
    timeline: "2024 - 2026",
  },
  {
    id: 2,
    title: "مبادرة الشباب الزراعي",
    description:
      "برنامج شامل لتدريب وتأهيل الشباب في مجال الزراعة الذكية وريادة الأعمال الزراعية",
    icon: "🌴",
    timeline: "2025 - 2027",
  },
  {
    id: 3,
    title: "الزراعة الذكية المستدامة",
    description:
      "تطبيق تقنيات الذكاء الاصطناعي وإنترنت الأشياء في الزراعة لتحسين الإنتاجية",
    icon: "🌿",
    timeline: "2026 - 2028",
  },
];

export function OurFuturePlans({ className }: OurFuturePlansProps) {
  return (
    <div
      className={cn(
        "py-20 bg-gradient-to-br from-gray-50 to-gray-100",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 font-arabic">
            خططنا المستقبلية
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic">
            نسعى نحو مستقبل أفضل للزراعة من خلال رؤية طموحة ومبادرات مبتكرة تهدف
            إلى تطوير القطاع الزراعي وضمان استدامته
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {futurePlans.map((plan) => (
            <div
              key={plan.id}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {plan.icon}
                </div>
                <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold font-arabic">
                  {plan.timeline}
                </div>
              </div>

              {/* Card Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary font-arabic group-hover:text-accent transition-colors duration-300">
                  {plan.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-arabic">
                  {plan.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 font-arabic">
                    المرحلة {plan.id}
                  </span>
                  <div className="flex space-x-1 space-x-reverse">
                    {[1, 2, 3].map((dot) => (
                      <div
                        key={dot}
                        className={cn(
                          "w-2 h-2 rounded-full transition-colors duration-300",
                          dot <= plan.id ? "bg-accent" : "bg-gray-300"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4 font-arabic">
              كن جزءاً من رؤيتنا
            </h3>
            <p className="text-gray-600 mb-6 font-arabic">
              انضم إلينا في رحلة بناء مستقبل أفضل للزراعة والاستدامة
            </p>
            <button
              type="button"
              className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-primary/90 hover:to-accent/90 transition-all duration-300 transform hover:scale-105 font-arabic shadow-lg"
            >
              انضم إلينا الآن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
