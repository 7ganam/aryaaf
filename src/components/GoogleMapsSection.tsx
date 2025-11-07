"use client";

import { cn } from "@/lib/utils";
import { SECTION_IDS } from "@/lib/constants";

interface GoogleMapsSectionProps {
  className?: string;
}

export function GoogleMapsSection({ className }: GoogleMapsSectionProps) {
  return (
    <div
      id={SECTION_IDS.LOCATION}
      className={cn("py-20 bg-gray-50", className)}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4 font-arabic">
            موقعنا
          </h2>
          <p className="text-xl text-gray-600 font-arabic">
            مطروح- سيوه -شارع السوق -بجوار مطعم علي عليوه{" "}
          </p>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-sm border border-gray-200">
            <iframe
              src="https://www.google.com/maps?q=29.203022,25.515329&hl=ar&z=19&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع أرياف - سيوة، محافظة مرسى مطروح"
              className="w-full h-[500px]"
            />
          </div>

          {/* Map Overlay Info */}
          <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-sm font-semibold text-gray-800 font-arabic">
                موقعنا هنا
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
