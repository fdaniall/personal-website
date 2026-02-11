
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import SmoothScroll from "@/components/SmoothScroll";

const calsans = localFont({
  src: "./styles/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
  display: "swap",
});

const montserrat = localFont({
  src: "./styles/fonts/Montserrat-Regular.ttf",
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fakhri Danial | Full Stack Developer",
  description: "Portfolio of Fakhri Danial, a Full Stack Developer specializing in Next.js, React, and Modern Web Technologies. Crafting premium digital experiences.",
  keywords: ["Fakhri Danial", "Full Stack Developer", "Next.js Developer", "React Developer", "Web Developer", "Indonesia", "Software Engineer"],
  authors: [{ name: "Fakhri Danial" }],
  creator: "Fakhri Danial",
  themeColor: "#0a0a0a",
  openGraph: {
    title: "Fakhri Danial | Full Stack Developer",
    description: "Crafting premium digital experiences with code and creativity. Explore my portfolio.",
    url: "https://fdaniall.dev",
    siteName: "Fakhri Danial Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fakhri Danial Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fakhri Danial | Full Stack Developer",
    description: "Portfolio of Fakhri Danial, a Full Stack Developer specializing in Next.js, React, and Modern Web Technologies.",
    creator: "@fdaniall",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${calsans.variable} ${montserrat.variable} font-montserrat antialiased`}>
        <div className="noise-overlay" />
        <SmoothScroll>
          {children as any}
        </SmoothScroll>
      </body>
    </html>
  );
}
