import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "docconmigo | Recupera tu salud desde la raíz",
  description: "docconmigo es un consultorio de medicina funcional y acompañamiento nutricional que se enfoca en comprender la salud de cada persona de manera integral, dedicando el tiempo necesario para conocer su historia completa y no solo sus síntomas. A través de una evaluación profunda de factores como la alimentación, los hábitos de vida, el descanso, el estrés y el entorno personal, se busca identificar la causa raíz de los problemas de salud. El enfoque prioriza la transformación de hábitos y la nutrición como pilares fundamentales para lograr un bienestar sostenible, ofreciendo un acompañamiento cercano, personalizado y orientado a ayudar a cada paciente a recuperar su equilibrio y mejorar su calidad de vida desde la raíz.",
  icons: { icon: '/dcm.ico' },
  openGraph: {
    title: "docconmigo | Recupera tu salud desde la raíz",
    description: "docconmigo es un consultorio de medicina funcional y acompañamiento nutricional que se enfoca en comprender la salud de cada persona de manera integral, dedicando el tiempo necesario para conocer su historia completa y no solo sus síntomas.",
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
    description: "Recupera tu salud desde la raíz con un enfoque integral y personalizado.",
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
