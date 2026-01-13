import "./globals.css";
import { Header } from "@/components/layout/Header";

export const metadata = {
  title: "Derive.ai - AI Interview Platform",
  description: "Advanced AI-powered interview and candidate assessment platform",
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
