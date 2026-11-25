import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";

const estedad = localFont({
  src: "./fonts/Estedad-Variable.woff2",
  variable: "--font-estedad",
  weight: "100 900",
  display: "swap",
  fallback: ["Tahoma", "Segoe UI", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://armandental.ir"),
  title: {
    default: "کلینیک دندانپزشکی آرمان | ایمپلنت، لمینت و زیبایی دندان",
    template: "%s | کلینیک دندانپزشکی آرمان",
  },
  description: site.description,
  keywords: [
    "کلینیک دندانپزشکی",
    "ایمپلنت دیجیتال",
    "لمینت سرامیکی",
    "ارتودنسی نامرئی",
    "بلیچینگ دندان",
    "دندانپزشکی سعادت‌آباد",
    "نوبت‌دهی آنلاین دندانپزشکی",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: site.name,
    title: "کلینیک دندانپزشکی آرمان | ایمپلنت، لمینت و زیبایی دندان",
    description: site.description,
    url: "/",
    images: ["/images/hero-teeth.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "کلینیک دندانپزشکی آرمان",
    description: site.description,
    images: ["/images/hero-teeth.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f2f7fc",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      data-scroll-behavior="smooth"
      className={`${estedad.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:right-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          پرش به محتوای اصلی
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
