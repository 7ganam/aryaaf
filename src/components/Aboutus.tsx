"use client";

import { SECTION_IDS } from "@/lib/constants";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

export function Aboutus({ className }: OurFuturePlansProps) {
  return (
    <div id={SECTION_IDS.ABOUT} className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* First Section - Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <Image
              src="/images/about/1.jpg"
              alt="من نحن "
              width={600}
              height={500}
              className="rounded-lg shadow-lg object-cover w-full h-96"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-primary font-arabic">
              من نحن
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed font-arabic">
              شركة أرياف للزراعات الحديثة هي شركة مشهرة بسجل تجاري رقم/ 268083،
              وهي اول شركة في مصر والوطني العربي تتبنى فكرة المجتمع الزراعي
              السكني بمفهوم مختلف وحديث وعصري لتصبح مدن زراعية سكنية خدمية بشكل
              كامل. ومستمر، بل ويزيد ويتضاعف مع مرور السنوات.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-arabic">
              نحن مجموعة شباب كانت بدايتنا في السعي لتحقيق حلم كل مستثمر معنا،
              الحلم الذي يتمثل في إيجاد مشروع التقاعد المناسب، المشروع الذي يصبر
              عليه صاحبه ويثابر حتى يكون بإذن الله مصدر دخل دائم ومستمر، بل
              ويزيد ويتضاعف مع مرور السنوات.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-arabic">
              خلال رحلتنا مررنا بالعديد من التجارب؛ منها ما كان جيدًا ومنها ما
              كان صعبًا، وتعرضنا للأرباح والخسائر، لكن هذه التجارب مجتمعة علمتنا
              الطريق الصحيح لتحقيق الحلم.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-arabic">
              نحن اليوم نمتلك ما يزيد عن 10 سنوات من الخبرة في مجالات الزراعة،
              ودراسة التربة، واختيار أفضل المشاريع، ولا سيما في واحة سيوة التي
              تعد واحدة من أجمل مناطق مصر وأكثرها سحرًا وجمالًا.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-arabic">
              كما أن لدينا بالفعل مشاريع ومزارع قائمة على أرض الواقع ما بين
              زراعة النخيل والزيتون والفواكه وغيرها، ونستغل خبراتنا لضمان نجاح
              المستثمرين الآخرين. ومن هنا، كان لابد من إقامة شركة أرياف للزراعات
              الحديثة لتكون اللبنة الأولى لتحقيق باقي الحلم.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
