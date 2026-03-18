import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#000917] text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 w-fit">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-docconmigo-web.png" alt="DocConmigo Logo" className="h-14 w-auto brightness-0 invert" />
          </div>
        </div>
        
        <div>
          <h3 className="font-bold mb-4 text-lg">Navegación</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><Link href="/" className="hover:text-accent transition-colors">Inicio</Link></li>
            <li><Link href="/#servicios" className="hover:text-accent transition-colors">Servicios</Link></li>
            <li><Link href="/#contacto" className="hover:text-accent transition-colors">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-lg">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><Link href="/aviso-legal" className="hover:text-accent transition-colors">Aviso legal</Link></li>
            <li><Link href="/politica-privacidad" className="hover:text-accent transition-colors">Política de privacidad</Link></li>
            <li><Link href="/politica-cookies" className="hover:text-accent transition-colors">Cookies</Link></li>
            <li><Link href="/condiciones-contratacion" className="hover:text-accent transition-colors">Condiciones</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold mb-4 text-lg">Redes sociales</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-white/20 text-sm text-center text-gray-300">
        &copy; {new Date().getFullYear()} DocConmigo. Todos los derechos reservados.
      </div>
    </footer>
  );
}
