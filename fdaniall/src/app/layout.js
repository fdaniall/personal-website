import Header from "./Header";
import "./globals.css";

export const metadata = {
  title: "Fakhri Danial",
  description: "My Own Personal Website",
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
