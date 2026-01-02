import type { Metadata } from "next";
import { Geist_Mono, Sora } from "next/font/google";
import "./globals.css";

import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";

const soraSans = Sora({
  variable: "--font-sora-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avenierr Pharama",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${soraSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeroHeader />
        {children}
         <FooterSection />
      </body>
    </html>
  );
}
