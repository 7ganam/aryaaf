"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface SubscribeSectionProps {
  className?: string;
}

export function SubscribeSection({ className }: SubscribeSectionProps) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true);
      try {
        const response = await fetch("/api/submit-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: "", // Newsletter signup doesn't have name
            email: email,
            phone: "",
            subject: "Newsletter Subscription",
            message: "User subscribed to newsletter",
            formType: "Newsletter",
          }),
        });

        const result = await response.json();

        if (result.success) {
          setIsSubscribed(true);
          setEmail("");
          // Reset success state after 3 seconds
          setTimeout(() => {
            setIsSubscribed(false);
          }, 3000);
        } else {
          throw new Error(result.error || "Subscription failed");
        }
      } catch (error) {
        console.error("Error subscribing:", error);
        alert("حدث خطأ في الاشتراك. يرجى المحاولة مرة أخرى.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className={cn("relative z-30 ", className)}>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 md:absolute md:top-1/2 md:-translate-y-1/2  w-full">
        {isSubscribed ? (
          // Success state with confetti-like animation
          <div className="max-w-2xl mx-auto shadow-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4 sm:p-8 text-center">
            <div className="relative">
              {/* Confetti animation */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                <div className="absolute top-2 right-1/3 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping animation-delay-100"></div>
                <div className="absolute top-4 left-1/2 w-1 h-1 bg-green-300 rounded-full animate-ping animation-delay-200"></div>
                <div className="absolute top-1 right-1/4 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-ping animation-delay-300"></div>
              </div>

              {/* Success content */}
              <div className="relative z-10">
                <div className="text-2xl sm:text-4xl mb-2 sm:mb-4">🎉</div>
                <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-1 sm:mb-2 font-arabic">
                  تم الاشتراك بنجاح!
                </h3>
                <p className="text-sm sm:text-base text-green-600 font-arabic">
                  شكراً لك على الاشتراك في نشرتنا الإخبارية
                </p>
              </div>
            </div>
          </div>
        ) : (
          // Normal form state
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-0 max-w-2xl mx-auto shadow-lg"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border-0 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-colors duration-200 font-arabic"
              required
              dir="rtl"
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-accent text-accent-foreground font-semibold text-base sm:text-lg hover:bg-accent/90 transition-colors duration-200 font-arabic disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[100px] sm:min-w-[120px]"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>جاري الإرسال...</span>
                </div>
              ) : (
                "اشترك الآن"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
