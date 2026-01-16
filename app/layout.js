import "./globals.css";
import { Header } from "@/components/layout/Header";

export const metadata = {
  title: "Derive.ai - AI Interview Platform",
  description: "Advanced AI-powered interview and candidate assessment platform",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes",
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
