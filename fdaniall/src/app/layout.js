import Header from "./Header";
import "./globals.css";

export const metadata = {
  title: "Developer Page",
  description: "Hello",
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
