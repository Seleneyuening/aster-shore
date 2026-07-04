import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.astershore.com"),
  title: {
    default: "Aster Shore",
    template: "%s · Aster Shore"
  },
  description: "A quiet future for beautiful living.",
  openGraph: {
    siteName: "Aster Shore",
    title: "Aster Shore",
    description: "A quiet future for beautiful living.",
    url: "https://www.astershore.com",
    type: "website",
    images: [{ url: "/images/aster-shore-hero.webp", width: 1672, height: 941 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aster Shore",
    description: "A quiet future for beautiful living."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
