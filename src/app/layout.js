import "./globals.css";

export const metadata = {
  title: "Fakhri Danial | Full Stack Developer",
  description: "Portfolio of Fakhri Danial, a Full Stack Developer specializing in Next.js, React, and Modern Web Technologies. Crafting premium digital experiences.",
  keywords: ["Fakhri Danial", "Full Stack Developer", "Next.js Developer", "React Developer", "Web Developer", "Indonesia", "Software Engineer"],
  authors: [{ name: "Fakhri Danial" }],
  creator: "Fakhri Danial",
  themeColor: "#0a0a0a",
  openGraph: {
    title: "Fakhri Danial | Full Stack Developer",
    description: "Crafting premium digital experiences with code and creativity. Explore my portfolio.",
    url: "https://fdaniall.dev", // Using a placeholder or actual URL if known, assuming generic for now
    siteName: "Fakhri Danial Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // We should probably mention to the user that they can add this file later
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
