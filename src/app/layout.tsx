import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/compononents/Navbar";
import Footer from "@/compononents/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MS Trading",
  description: "Servicios de comercio internacional",
  icons: {
  icon: [
    { url: "/icon/logo.ico", type: "image/png" }
  ],
},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* 🔝 NAVBAR */}
        <Navbar />

        {/* 📄 CONTENIDO */}
        <main className="flex-1 pt-20">
          {children}
        </main>

        {/* 🔻 FOOTER */}
        <Footer />

      </body>
    </html>
  );
}