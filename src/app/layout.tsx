import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "docconmigo | Recupera tu salud desde la raíz",
  description: "Deja de tratar síntomas: descubre la causa real y recupera tu salud desde la raíz",
  icons: { icon: '/dcm.ico' },
  openGraph: {
    title: "docconmigo | Recupera tu salud desde la raíz",
    description: "Deja de tratar síntomas: descubre la causa real y recupera tu salud desde la raíz",
    url: "https://docconmigo.com",
    siteName: "docconmigo",
    images: [
      {
        url: "https://docconmigo.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "docconmigo - Medicina Funcional",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "docconmigo | Recupera tu salud desde la raíz",
    description: "Deja de tratar síntomas: descubre la causa real y recupera tu salud desde la raíz",
    images: ["https://docconmigo.com/og-image.png"],
  },
  verification: {
    other: {
      'facebook-domain-verification': ['suogd5blktws0v8crwhnllg2kz748f'],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`} suppressHydrationWarning={true}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
