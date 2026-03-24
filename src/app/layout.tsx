import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://docconmigo.com"),
  title: "Docconmigo - Medicina Funcional desde la raíz",
  description: "Enfoque médico integral que investiga la causa real de tus síntomas. Salud personalizada y hábitos sostenibles con la Dra. Luci Cortez.",
  keywords: ["medicina funcional", "causa raíz", "diagnóstico funcional", "nutrición de precisión", "salud integral", "bienestar sostenible", "Dra. Luci Cortez", "docconmigo", "hábitos saludables"],
  authors: [{ name: "docconmigo" }],
  creator: "docconmigo",
  publisher: "docconmigo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: { 
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: "Tu salud merece más que una consulta rápida",
    description: "No nos enfocamos solo en tus síntomas; exploramos también tu entorno, hábitos y estilo de vida. Por eso nos tomamos el tiempo necesario para conocerte a profundidad y llegar a la raíz de tu condición.",
    url: "https://docconmigo.com",
    siteName: "docconmigo",
    images: [
      {
        url: "/og-image.png",
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
    title: "Tu salud merece más que una consulta rápida",
    description: "No nos enfocamos solo en tus síntomas; exploramos también tu entorno, hábitos y estilo de vida. Por eso nos tomamos el tiempo necesario para conocerte a profundidad y llegar a la raíz de tu condición.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
