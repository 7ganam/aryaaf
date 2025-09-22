"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

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
    title: "الاستشارات الزراعية",
    description:
      "نقدم استشارات متخصصة في مجال الزراعة لمساعدتك في تحسين إنتاجيتك الزراعية",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "التدريب والتطوير",
    description: "برامج تدريبية متقدمة لتطوير مهارات المزارعين وتحديث تقنياتهم",
    image:
      "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "البحوث والتطوير",
    description: "إجراء بحوث علمية متطورة لتطوير تقنيات زراعية حديثة ومستدامة",
    image:
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export function OurServices({ className }: OurServicesProps) {
  return (
    <div className={cn("py-20 bg-gray-50", className)}>
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
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="الزراعة العضوية"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="bg-white p-4 shadow-sm w-[90%] mx-auto absolute bottom-[-40px] left-0 right-0 z-10">
              <h3 className="text-2xl font-bold text-primary mb-4 font-arabic">
                الزراعة العضوية
              </h3>
              <p className="text-gray-600 leading-relaxed font-arabic">
                تطوير أساليب الزراعة العضوية المستدامة للحفاظ على البيئة
              </p>
            </div>
          </div>

          <div className="text-center group relative">
            <div className="relative mb-6 overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <Image
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="الري الذكي"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="bg-white p-4 shadow-sm w-[90%] mx-auto absolute bottom-[-40px] left-0 right-0 z-10">
              <h3 className="text-2xl font-bold text-primary mb-4 font-arabic">
                الري الذكي
              </h3>
              <p className="text-gray-600 leading-relaxed font-arabic">
                أنظمة ري متطورة تعتمد على التكنولوجيا لتوفير المياه
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
