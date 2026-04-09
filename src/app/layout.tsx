import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Fakhri Danial",
  description:
    "Software engineer based in Jakarta. Building scalable web applications and exploring Web3.",
  keywords: [
    "Fakhri Danial",
    "Software Engineer",
    "Full Stack Developer",
    "Web3",
    "Jakarta",
  ],
  authors: [{ name: "Fakhri Danial" }],
  creator: "Fakhri Danial",
  openGraph: {
    title: "Fakhri Danial",
    description:
      "Software engineer based in Jakarta. Building scalable web applications and exploring Web3.",
    url: "https://fdaniall.dev",
    siteName: "Fakhri Danial",
    locale: "en_US",
    type: "website",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
