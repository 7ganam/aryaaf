"use client";

import { cn } from "@/lib/utils";

interface GoogleMapsSectionProps {
  className?: string;
}

export function GoogleMapsSection({ className }: GoogleMapsSectionProps) {
  return (
    <div className={cn("py-20 bg-gray-50", className)}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4 font-arabic">
            موقعنا
          </h2>
          <p className="text-xl text-gray-600 font-arabic">
            أبوحمص وميدان السلام، محافظة البحيرة
          </p>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-sm border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.123456789!2d31.123456789!3d30.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA3JzI0LjQiTiAzMcKwMDcnMjQuNCJF!5e0!3m2!1sen!2seg!4v1234567890123!5m2!1sen!2seg"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع أرياف - أبوحمص وميدان السلام"
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
