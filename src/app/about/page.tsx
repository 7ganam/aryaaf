import { NavigationBar } from "@/components/NavigationBar";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <div dir="rtl">
      <NavigationBar />

      {/* Header Image Section - Same as home page */}
      <div className="relative w-full overflow-hidden mt-[70px] md:mt-0">
        {/* Mobile: Show first image */}
        <div className="md:hidden w-full">
          <div
            className="w-full flex items-center justify-center relative rounded-lg overflow-hidden"
            style={{ backgroundColor: "#EFE9DE" }}
          >
            <div
              className="w-full bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
              style={{
                backgroundImage: `url(/images/about/header.jpg)`,
                aspectRatio: "16/9",
                minHeight: "150px",
              }}
            >
              <h1 className="text-4xl font-bold text-white text-center font-arabic drop-shadow-lg">
                من نحن
              </h1>
            </div>
          </div>
        </div>

        {/* Desktop: Show first image */}
        <div className="hidden md:block">
          <div
            className="h-full w-full flex items-center justify-center relative"
            style={{ backgroundColor: "#EFE9DE" }}
          >
            <div
              className="w-full bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
              style={{
                backgroundImage: `url(/images/about/header.jpg)`,
                aspectRatio: "16/9",
                minHeight: "300px",
              }}
            >
              <h1 className="text-6xl font-bold text-white text-center font-arabic drop-shadow-lg">
                من نحن
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* About Content Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* First Section - Our Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="relative order-1 lg:order-2">
              <Image
                src="/images/about/1.jpg"
                alt="قصتنا ورحلتنا"
                width={600}
                height={500}
                className="rounded-lg shadow-lg object-cover w-full h-96"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-primary font-arabic">
                قصتنا ورحلتنا
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-arabic">
                نحن مجموعة شباب كانت بدايتنا في السعي لتحقيق حلم كل مستثمر معنا،
                الحلم الذي يتمثل في إيجاد مشروع التقاعد المناسب، المشروع الذي
                يصبر عليه صاحبه ويثابر حتى يكون بإذن الله مصدر دخل دائم ومستمر،
                بل ويزيد ويتضاعف مع مرور السنوات.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-arabic">
                خلال رحلتنا مررنا بالعديد من التجارب؛ منها ما كان جيدًا ومنها ما
                كان صعبًا، وتعرضنا للأرباح والخسائر، لكن هذه التجارب مجتمعة
                علمتنا الطريق الصحيح لتحقيق الحلم.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-arabic">
                نحن اليوم نمتلك ما يزيد عن 10 سنوات من الخبرة في مجالات الزراعة،
                ودراسة التربة، واختيار أفضل المشاريع، ولا سيما في واحة سيوة التي
                تعد واحدة من أجمل مناطق مصر وأكثرها سحرًا وجمالًا.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-arabic">
                كما أن لدينا بالفعل مشاريع ومزارع قائمة على أرض الواقع ما بين
                زراعة النخيل والزيتون والفواكه وغيرها، ونستغل خبراتنا لضمان نجاح
                المستثمرين الآخرين. ومن هنا، كان لابد من إقامة شركة أرياف
                للزراعات الحديثة لتكون اللبنة الأولى لتحقيق باقي الحلم.
              </p>
            </div>
          </div>

          {/* Second Section - Vision & Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="relative order-1 lg:order-1">
              <Image
                src="/images/about/2.jpg"
                alt="رؤيتنا ورسالتنا"
                width={600}
                height={500}
                className="rounded-lg shadow-lg object-cover w-full h-96"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6 order-2 lg:order-2">
              <h2 className="text-3xl font-bold text-primary font-arabic">
                رؤيتنا وطموحنا
              </h2>

              {/* Vision Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary font-arabic">
                  رؤيتنا
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed font-arabic">
                  أن نكون مركز قوة وتحول في مسار الزراعة والثروة الحيوانية، نقدم
                  دعمًا حقيقيًا للمستثمرين حتى يصلوا إلى بر الأمان.
                </p>
              </div>

              {/* Ambitions Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary font-arabic">
                  طموحنا
                </h3>
                <ul className="space-y-3 text-lg text-gray-700 leading-relaxed font-arabic">
                  <li className="flex items-start">
                    <span className="text-accent ml-2 mt-1">•</span>
                    <span>تغيير مفهوم الزراعة التقليدية.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent ml-2 mt-1">•</span>
                    <span>
                      الجمع بين السكن والإنتاج والاكتفاء الذاتي والتصدير.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent ml-2 mt-1">•</span>
                    <span>إنشاء مصانع ومعاصر حديثة.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent ml-2 mt-1">•</span>
                    <span>تطوير الثروة الحيوانية والسمكية.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent ml-2 mt-1">•</span>
                    <span>إنتاج سلالات زراعية قوية.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Third Section - Our Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-primary font-arabic">
                خدماتنا
              </h2>
              <ul className="space-y-3 text-lg text-gray-700 leading-relaxed font-arabic">
                <li className="flex items-start">
                  <span className="text-accent ml-2 mt-1">•</span>
                  <span>استشارات زراعية.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent ml-2 mt-1">•</span>
                  <span>دراسات جدوى.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent ml-2 mt-1">•</span>
                  <span>شبكات ري.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent ml-2 mt-1">•</span>
                  <span>أنظمة طاقة شمسية.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent ml-2 mt-1">•</span>
                  <span>إنشاء مزارع نخيل وزيتون.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent ml-2 mt-1">•</span>
                  <span>إنشاء مجتمعات زراعية سكنية.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent ml-2 mt-1">•</span>
                  <span>تسويق المنتجات داخليًا وخارجيًا.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent ml-2 mt-1">•</span>
                  <span>تطوير الثروة الحيوانية (أبقار – أغنام – ماعز).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent ml-2 mt-1">•</span>
                  <span>مزارع سمكية حديثة.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent ml-2 mt-1">•</span>
                  <span>متابعة وحلول للمشكلات.</span>
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="relative order-1 lg:order-2">
              <Image
                src="/images/about/3.jpg"
                alt="خدماتنا"
                width={600}
                height={500}
                className="rounded-lg shadow-lg object-cover w-full h-96"
              />
            </div>
          </div>

          {/* Fourth Section - Future Plans */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="relative order-1 lg:order-1">
              <Image
                src="/images/about/4.jpg"
                alt="خطتنا المستقبلية"
                width={600}
                height={500}
                className="rounded-lg shadow-lg object-cover w-full h-96"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6 order-2 lg:order-2">
              <h2 className="text-3xl font-bold text-primary font-arabic">
                خطتنا المستقبلية (5 سنوات)
              </h2>
              <ul className="space-y-3 text-lg text-gray-700 leading-relaxed font-arabic">
                <li className="flex items-start">
                  <span className="text-accent ml-2 mt-1">•</span>
                  <span>استصلاح آلاف الأفدنة.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent ml-2 mt-1">•</span>
                  <span>إنشاء مصانع لمعالجة التمور والزيتون.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent ml-2 mt-1">•</span>
                  <span>أكبر مجمع للثروة الحيوانية والسمكية.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent ml-2 mt-1">•</span>
                  <span>مراكز تدريب وبحوث متخصصة.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent ml-2 mt-1">•</span>
                  <span>تصدير للأسواق العالمية.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent ml-2 mt-1">•</span>
                  <span>
                    أن تصبح أرياف علامة تجارية رائدة في الزراعة الحديثة.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
