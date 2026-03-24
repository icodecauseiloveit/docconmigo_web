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
      <div className="w-full max-w-7xl mx-auto px-4 h-24 md:h-32 flex items-center justify-center md:justify-between relative">
        <Link href="/" className="flex items-center flex-shrink-0 z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/logo-docconmigo-web.png" 
            alt="docconmigo Logo" 
            className="h-14 md:h-20 w-auto object-contain transition-all duration-300" 
          />
        </Link>
        
        {!isFormPage && (
          <div className="hidden md:flex items-center">
            <Link 
              href="/formulario" 
              className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-md hover:scale-105"
            >
              Agendar cita
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
