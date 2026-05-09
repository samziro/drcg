import type { Metadata } from "next";
import {  Sue_Ellen_Francisco, Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next"

const sueEllenFrancisco = Sue_Ellen_Francisco({
  variable: "--font-sue-ellen-francisco",
  subsets: ["latin"],
  weight: "400",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

export const metadata: Metadata = {
  title: "Dabaso Rock Conservation Group — Protecting Mida Creek",
  description: "Community-based conservation organization protecting mangrove ecosystems at Mida Creek, Kenya. Eco-tourism, sustainable livelihoods, and environmental education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sueEllenFrancisco.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[url('/bg.jpg')]">
      <Navbar />
      {children}
      <Footer />
      <Analytics/> 
      </body>
    </html>
  );
}
