import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Le damos a tu salud el tiempo, la atención y la profundidad que realmente merece",
  description: "No nos enfocamos solo en tus síntomas; exploramos también tu entorno, hábitos y estilo de vida. Por eso nos tomamos el tiempo necesario para conocerte a profundidad y llegar a la raíz de tu condición.",
  icons: { icon: '/dcm.ico' },
  openGraph: {
    title: "Le damos a tu salud el tiempo, la atención y la profundidad que realmente merece",
    description: "No nos enfocamos solo en tus síntomas; exploramos también tu entorno, hábitos y estilo de vida. Por eso nos tomamos el tiempo necesario para conocerte a profundidad y llegar a la raíz de tu condición.",
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
    title: "Le damos a tu salud el tiempo, la atención y la profundidad que realmente merece",
    description: "No nos enfocamos solo en tus síntomas; exploramos también tu entorno, hábitos y estilo de vida. Por eso nos tomamos el tiempo necesario para conocerte a profundidad y llegar a la raíz de tu condición.",
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
