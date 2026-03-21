"use client";

import { usePathname } from 'next/navigation';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const pathname = usePathname();
  if (pathname === '/formulario') return null;

  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573024645050';
  const waLink = `https://wa.me/${phoneNumber}`;

  return (
    <a 
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors hover:scale-110 active:scale-95 duration-200 animate-bounce cursor-pointer group flex items-center justify-center h-14 w-14"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-medium py-1 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        ¡Hablemos!
      </span>
    </a>
  );
}

