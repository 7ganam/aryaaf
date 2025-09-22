"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { SECTION_IDS } from "@/lib/constants";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface OurServicesProps {
  className?: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "استصلاح الأراضي",
    description:
      "نساهم في رسم خريطة التنمية الزراعية والصناعية، مستلهمين جهود الخبراء في استكشاف أفضل المناطق الصالحة للاستصلاح",
    image: "/images/services/landfixing.jpg",
  },
  {
    id: 2,
    title: "اعداد شبكات",
    description:
      "حلول متكاملة لتصميم وتنفيذ شبكات ري حديثة وذكية، تضمن كفاءة استخدام المياه وزيادة الإنتاجية الزراعية.",
    image: "/images/services/shabkaat.jpg",
  },
  {
    id: 3,
    title: "تركيب انظمة طاقة شمسية",
    description:
      "تركيب أنظمة شمسية متكاملة لتوفير الطاقة النظيفة لمزارعك ومشروعاتك، بأعلى كفاءة وأقل تكلفة تشغيل.",
    image: "/images/services/energy.jpg",
  },
];

export function OurServices({ className }: OurServicesProps) {
  return (
    <div
      id={SECTION_IDS.SERVICES}
      className={cn("py-20 bg-gray-50", className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 font-arabic">
            خدماتنا
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic">
            نقدم مجموعة شاملة من الخدمات المتخصصة في مجال الزراعة لمساعدتك على
            تحقيق أقصى استفادة من مشروعك الزراعي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="text-center group relative">
              <div className="relative mb-6 overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300 ">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="bg-white p-4 shadow-sm w-[90%] mx-auto absolute bottom-[-40px] left-0 right-0 z-10">
                <h3 className="text-2xl font-bold text-primary mb-4 font-arabic">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-arabic">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center group relative">
            <div className="relative mb-6 overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/services/zaytoon.jpg"
                alt=""
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="bg-white p-4 shadow-sm w-[90%] mx-auto absolute bottom-[-40px] left-0 right-0 z-10">
              <h3 className="text-2xl font-bold text-primary mb-4 font-arabic">
                مزارع نخيل وزيتون
              </h3>
              <p className="text-gray-600 leading-relaxed font-arabic">
                تصميم وبناء مزارع نخيل وزيتون ومحاصيل متنوعة، بخطط متكاملة من
                البداية للإنتاج، لضمان أعلى جودة واستدامة.
              </p>
            </div>
          </div>

          <div className="text-center group relative">
            <div className="relative mb-6 overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/services/investors.jpg"
                alt=""
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="bg-white p-4 shadow-sm w-[90%] mx-auto absolute bottom-[-40px] left-0 right-0 z-10">
              <h3 className="text-2xl font-bold text-primary mb-4 font-arabic">
                متابعة مستمرة
              </h3>
              <p className="text-gray-600 leading-relaxed font-arabic">
                متابعة مستمرة وتقديم حلول مبتكرة تضمن نجاح مشروعاتك الزراعية
                واستدامتها.
              </p>
              <div className="h-6 w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
