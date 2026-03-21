"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CalendarCheck } from 'lucide-react';

export default function WhatsAppButton() {
  const pathname = usePathname();
  if (pathname === '/formulario') return null;

  return (
    <Link
      href="/formulario"
      className="fixed bottom-6 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-secondary transition-colors hover:scale-110 active:scale-95 duration-200 cursor-pointer group flex items-center justify-center h-14 w-14"
      aria-label="Agendar consulta"
    >
      <CalendarCheck className="h-7 w-7" />
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-medium py-1 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Agendar consulta
      </span>
    </Link>
  );
}

