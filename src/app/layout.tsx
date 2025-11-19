import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-sans-arabic",
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "أرياف للاستثمار الزراعي |  استصلاح أراضي، ري ذكي، طاقة شمسية، مزارع مستدامة",
  description:
    "اكتشف خدمات أرياف المتكاملة للاستثمار الزراعي: استصلاح الأراضي، تصميم شبكات ري حديثة، تركيب أنظمة طاقة شمسية، إنشاء مزارع نخيل وزيتون، تطوير الثروة الحيوانية وتربية الأسماك، مع متابعة مستمرة لضمان الإنتاجية والاستدامة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansArabic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
