import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-32 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-docconmigo-web.png" alt="DocConmigo Logo" className="h-20 w-auto" />
        </Link>
        
        <nav className="hidden md:flex gap-10 items-center">
          <Link href="/" className="text-lg font-semibold hover:text-primary transition-colors">Inicio</Link>
          <Link href="/#servicios" className="text-lg font-semibold hover:text-primary transition-colors">Servicios</Link>
          <Link href="/#beneficios" className="text-lg font-semibold hover:text-primary transition-colors">Beneficios</Link>
          <Link href="/#contacto" className="text-lg font-semibold hover:text-primary transition-colors">Contacto</Link>
          
          <Link 
            href="/#contacto" 
            className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-xl text-lg font-bold transition-all shadow-md hover:scale-105"
          >
            Agendar cita
          </Link>
        </nav>

        <button className="md:hidden p-2" aria-label="Menu">
          <Menu className="h-6 w-6 text-foreground" />
        </button>
      </div>
    </header>
  );
}
