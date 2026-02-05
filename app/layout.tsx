import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sree Krishna Housing Projects | Premium Real Estate in Tirupati",
  description: "Trusted real estate and construction experts in Tirupati. 12+ years of experience in residential, commercial, and land development.",
};

import { Header } from "@/components/layout/Header/Header";
import { MobileBottomCTA } from "@/components/layout/MobileBottomCTA/MobileBottomCTA";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <Header />
        <main style={{ paddingTop: 'var(--header-height)' }}>
          {children}
        </main>
        <MobileBottomCTA />
      </body>
    </html>
  );
}
