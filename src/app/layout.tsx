import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Lily_Script_One } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/scroll-to-top";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const lilyScriptOne = Lily_Script_One({
  variable: "--font-lily-script-one",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arshadul Mokaddis | UI/UX Designer Portfolio",
  description: "Portfolio of Arshadul Mokaddis, a professional UI/UX Designer showcasing creative projects and design expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} ${lilyScriptOne.variable}`}>
      <body className="antialiased min-h-screen text-foreground bg-gradient-to-br from-[#6244c5] via-[#7351d7] to-[#8a63e8]">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}