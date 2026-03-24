"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isFormPage = pathname === '/formulario';
  const isConsultaPage = pathname === '/consulta';

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contacto');
      if (contactSection) {
        // El navbar mide aproximadamente 128px (h-32)
        const rect = contactSection.getBoundingClientRect();
        if (rect.top <= 128) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      } else {
        // Comportamiento base si no hay sección de contacto en la página
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isFormPage || isConsultaPage) return null;

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-white/30 backdrop-blur-lg border-b border-white/20'
    }`}>
      <div className={`container mx-auto px-4 h-32 flex items-center ${isFormPage ? 'justify-center' : 'justify-between'}`}>
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-docconmigo-web.png" alt="docconmigo Logo" className="h-20 w-auto object-contain" />
        </Link>
        
        {!isFormPage && (
          <div className="flex items-center">
            <Link 
              href="/formulario" 
              className="bg-primary hover:bg-secondary text-white px-6 py-3 md:px-8 md:py-4 rounded-xl text-base md:text-lg font-bold transition-all shadow-md hover:scale-105 flex-shrink-0"
            >
              Agendar cita
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
