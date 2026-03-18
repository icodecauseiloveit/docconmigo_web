"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-white/30 backdrop-blur-lg border-b border-white/20'
    }`}>
      <div className="container mx-auto px-4 h-32 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-docconmigo-web.png" alt="docconmigo Logo" className="h-20 w-auto object-contain" />
        </Link>
        
        {/* Desktop Navigation (Screen > 1024px) */}
        <nav className="hidden lg:flex gap-10 items-center">
          <Link href="/" className="text-lg font-normal hover:text-primary transition-colors">Inicio</Link>
          <Link href="/#servicios" className="text-lg font-normal hover:text-primary transition-colors">Servicios</Link>
          <Link href="/#beneficios" className="text-lg font-normal hover:text-primary transition-colors">Beneficios</Link>
          <Link href="/#contacto" className="text-lg font-normal hover:text-primary transition-colors">Contacto</Link>
          
          <Link 
            href="/#contacto" 
            className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-xl text-lg font-bold transition-all shadow-md hover:scale-105"
          >
            Agendar cita
          </Link>
        </nav>

        {/* Partial Mobile/Tablet Nav (Screen > 768px & < 1024px) - Logo + Button only */}
        <div className="hidden md:flex lg:hidden gap-4 items-center">
           <Link 
            href="/#contacto" 
            className="bg-primary hover:bg-secondary text-white px-6 py-2.5 rounded-xl text-md font-bold transition-all shadow-sm"
          >
            Agendar cita
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-secondary" aria-label="Menu">
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {/* Full Mobile Nav Toggle (Screen < 768px) */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-secondary" aria-label="Menu">
          {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-32 left-0 w-full bg-white border-b shadow-2xl animate-in slide-in-from-top duration-300 z-40">
          <nav className="flex flex-col p-6 space-y-4">
            <Link onClick={() => setIsOpen(false)} href="/" className="text-xl font-medium py-2 border-b border-gray-50">Inicio</Link>
            <Link onClick={() => setIsOpen(false)} href="/#servicios" className="text-xl font-medium py-2 border-b border-gray-50">Servicios</Link>
            <Link onClick={() => setIsOpen(false)} href="/#beneficios" className="text-xl font-medium py-2 border-b border-gray-50">Beneficios</Link>
            <Link onClick={() => setIsOpen(false)} href="/#contacto" className="text-xl font-medium py-2 border-b border-gray-50">Contacto</Link>
            <Link 
              onClick={() => setIsOpen(false)}
              href="/#contacto" 
              className="bg-primary text-white px-6 py-4 rounded-xl text-center text-xl font-bold shadow-lg"
            >
              Agendar cita
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
