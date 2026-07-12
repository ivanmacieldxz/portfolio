import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${portfolioData.personalInfo.name} | ${portfolioData.personalInfo.title}`,
  description: portfolioData.personalInfo.bio,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} dark scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
