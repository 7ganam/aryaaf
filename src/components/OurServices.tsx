"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { SECTION_IDS } from "@/lib/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  {
    id: 4,
    title: "مزارع نخيل وزيتون",
    description:
      "تصميم وبناء مزارع نخيل وزيتون ومحاصيل متنوعة، بخطط متكاملة من البداية للإنتاج، لضمان أعلى جودة واستدامة.",
    image: "/images/services/zaytoon.jpg",
  },
  {
    id: 5,
    title: "متابعة مستمرة",
    description:
      "متابعة مستمرة وتقديم حلول مبتكرة تضمن نجاح مشروعاتك الزراعية واستدامتها.",
    image: "/images/services/investors.jpg",
  },
];

export function OurServices({ className }: OurServicesProps) {
  return (
    <div
      id={SECTION_IDS.SERVICES}
      className={cn("py-20 bg-gray-50", className)}
    >
      <style jsx global>{`
        .services-swiper .swiper-pagination {
          position: relative;
          margin-top: 2rem;
        }
        .services-swiper .swiper-pagination-bullet {
          background-color: #d1d5db;
          opacity: 1;
          width: 12px;
          height: 12px;
        }
        .services-swiper .swiper-pagination-bullet-active {
          background-color: #059669;
        }
      `}</style>
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

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            className="services-swiper"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="text-center group relative">
                  <div className="relative mb-6 overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button className="swiper-button-prev p-2 rounded-full bg-primary text-white hover:bg-primary/80 transition-colors duration-200">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button className="swiper-button-next p-2 rounded-full bg-primary text-white hover:bg-primary/80 transition-colors duration-200">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
        </div>

        {/* Desktop Grid - First 3 services */}
        <div className="hidden md:grid grid-cols-3 gap-8 mb-16">
          {services.slice(0, 3).map((service) => (
            <div key={service.id} className="text-center group relative">
              <div className="relative mb-6 overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
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

        {/* Desktop Grid - Bottom 2 services (larger) */}
        <div className="hidden md:grid grid-cols-2 gap-8">
          {services.slice(3, 5).map((service) => (
            <div key={service.id} className="text-center group relative">
              <div className="relative mb-6 overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="bg-white p-6 shadow-sm w-[90%] mx-auto absolute bottom-[-40px] left-0 right-0 z-10">
                <h3 className="text-3xl font-bold text-primary mb-4 font-arabic">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-arabic text-lg">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
