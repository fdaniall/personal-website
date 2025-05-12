import Header from "./Header";
import "./globals.css";

export const metadata = {
  title: "Fakhri Danial",
  description: "Personal Website of Fakhri Danial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
