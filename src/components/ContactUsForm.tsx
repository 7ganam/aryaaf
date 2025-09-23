"use client";

import { useState, useId } from "react";
import { cn } from "@/lib/utils";
import { SECTION_IDS } from "@/lib/constants";

interface ContactUsFormProps {
  className?: string;
}

export function ContactUsForm({ className }: ContactUsFormProps) {
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const subjectId = useId();
  const messageId = useId();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          formType: "Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        }, 3000);
      } else {
        throw new Error(result.error || "Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // You might want to show an error message to the user
      alert("حدث خطأ في إرسال النموذج. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={cn("py-20 bg-white", className)}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-accent/10 rounded-2xl p-12">
            <div className="text-6xl mb-6">✅</div>
            <h2 className="text-3xl font-bold text-primary mb-4 font-arabic">
              تم إرسال رسالتك بنجاح!
            </h2>
            <p className="text-xl text-gray-600 font-arabic">
              شكراً لك على تواصلك معنا. سنقوم بالرد عليك في أقرب وقت ممكن.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id={SECTION_IDS.CONTACT} className={cn("py-20 bg-white", className)}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 font-arabic">
            تواصل معنا
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-arabic">
            نحن هنا لمساعدتك. أرسل لنا رسالتك وسنقوم بالرد عليك في أقرب وقت ممكن
          </p>
        </div>

        <div className="grid grid-cols-1  gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 font-arabic">
                معلومات التواصل
              </h3>
            </div>

            <div className="space-y-6 flex gap-6 md:flex-row flex-col">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="mr-3">
                  <h4 className="font-semibold text-gray-900 mb-1 font-arabic">
                    العنوان
                  </h4>
                  <p className="text-gray-600 font-arabic">
                    ابوحمص و ميدان السلام
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="mr-3">
                  <h4 className="font-semibold text-gray-900 mb-1 font-arabic">
                    الهاتف
                  </h4>
                  <p className="text-gray-600 font-arabic">+201132454567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="mr-3">
                  <h4 className="font-semibold text-gray-900 mb-1 font-arabic">
                    البريد الإلكتروني
                  </h4>
                  <p className="text-gray-600 font-arabic">info@aryaaf.sa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor={nameId}
                    className="block text-sm font-medium text-gray-700 mb-2 font-arabic"
                  >
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    id={nameId}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-200 font-arabic"
                    placeholder="أدخل اسمك الكامل"
                    dir="rtl"
                  />
                </div>

                <div>
                  <label
                    htmlFor={emailId}
                    className="block text-sm font-medium text-gray-700 mb-2 font-arabic"
                  >
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    id={emailId}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-200 font-arabic"
                    placeholder="أدخل بريدك الإلكتروني"
                    dir="rtl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor={phoneId}
                    className="block text-sm font-medium text-gray-700 mb-2 font-arabic"
                  >
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id={phoneId}
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-200 font-arabic"
                    placeholder="أدخل رقم هاتفك"
                    dir="rtl"
                  />
                </div>

                <div>
                  <label
                    htmlFor={subjectId}
                    className="block text-sm font-medium text-gray-700 mb-2 font-arabic"
                  >
                    الموضوع *
                  </label>
                  <select
                    id={subjectId}
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-200 font-arabic"
                    dir="rtl"
                  >
                    <option value="">اختر الموضوع</option>
                    <option value="استشارة زراعية">استشارة زراعية</option>
                    <option value="تدريب">تدريب</option>
                    <option value="شراكة">شراكة</option>
                    <option value="شكوى">شكوى</option>
                    <option value="أخرى">أخرى</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor={messageId}
                  className="block text-sm font-medium text-gray-700 mb-2 font-arabic"
                >
                  الرسالة *
                </label>
                <textarea
                  id={messageId}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-200 font-arabic resize-none"
                  placeholder="اكتب رسالتك هنا..."
                  dir="rtl"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-4 px-6 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-arabic"
              >
                {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
