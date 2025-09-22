"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface SubscribeSectionProps {
  className?: string;
}

export function SubscribeSection({ className }: SubscribeSectionProps) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Here you would typically send the email to your backend
      console.log("Subscribed with email:", email);
    }
  };

  return (
    <div className={cn("relative z-30 bg-white shadow-2xl abs", className)}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 absolute bottom-0 left-0 right-0">
        <form
          onSubmit={handleSubmit}
          className="flex gap-0 max-w-2xl mx-auto shadow-lg"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="أدخل بريدك الإلكتروني"
            className="flex-1 px-6 py-4 text-lg border-0 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-colors duration-200 font-arabic"
            required
            dir="rtl"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-accent text-accent-foreground font-semibold text-lg hover:bg-accent/90 transition-colors duration-200 font-arabic"
          >
            {isSubscribed ? "تم الاشتراك!" : "اشترك الآن"}
          </button>
        </form>
      </div>
    </div>
  );
}
