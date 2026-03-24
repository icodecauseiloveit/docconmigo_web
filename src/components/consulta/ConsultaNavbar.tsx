"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ConsultaNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] px-6 py-4 transition-all duration-300 ${
        isScrolled
          ? "bg-[#faf8f4]/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.06)] py-3"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1100px] mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-docconmigo-web.png"
            alt="docconmigo Logo"
            width={160}
            height={40}
            className="h-14 w-auto object-contain"
          />
        </Link>
        <Link
          href="https://wa.me/57XXXXXXXXXX?text=Hola%2C%20quiero%20agendar%20una%20consulta%20de%20medicina%20funcional"
          className="bg-[#5a7a64] hover:bg-[#3d5a45] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:-translate-y-0.5 shadow-md"
        >
          Agendar Consulta
        </Link>
      </div>
    </nav>
  );
}
