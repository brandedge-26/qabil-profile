import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-var",
});

export const metadata: Metadata = {
  title: "Qabil Engineering Works | Premium Sanitary Fittings Since 1975",
  description:
    "Since its establishment in 1975, Qabil Engineering Works has emerged as an industry trailblazer, pioneering innovation and setting a benchmark for manufacturing excellence in the field of sanitary fittings. Proudly manufacturing premium brass, stainless steel, and PVC sanitary products from Karachi, Pakistan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
