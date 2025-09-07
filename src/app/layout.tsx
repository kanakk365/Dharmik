import type { Metadata } from "next";
import { Abhaya_Libre, Urbanist } from "next/font/google";
import "./globals.css";

const abhayaLibre = Abhaya_Libre({
  variable: "--font-abhaya-libre",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dharmik Clothing - Complete Fashion Manufacturing Solutions",
  description: "Transform your fashion brand with Dharmik Clothing. From logo design to store setup, we provide comprehensive manufacturing solutions, fabric sourcing, and end-to-end fashion business support for brands worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${abhayaLibre.variable} ${urbanist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
