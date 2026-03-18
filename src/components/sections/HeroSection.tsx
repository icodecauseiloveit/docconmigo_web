import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden min-h-[60vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/hero.png" 
          alt="DocConmigo Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#e0f0f5]/90 via-white/80 to-white/70"></div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-10">
        <div className="w-[600px] h-[600px] rounded-full bg-primary blur-3xl mix-blend-multiply"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary tracking-tight mb-6 relative">
            Recupera tu salud <br className="hidden md:block"/>desde la raíz
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-highlight rounded-full"></div>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 font-medium mb-10 leading-relaxed mt-10">
            En DocConmigo entendemos tu historia completa para ayudarte a transformar tu salud. No solo tratamos síntomas, buscamos el origen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/#contacto" 
              className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              Agendar cita
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/#servicios" 
              className="bg-white hover:bg-gray-50 text-secondary border border-gray-200 px-8 py-4 rounded-full text-base font-semibold shadow-sm transition-all w-full sm:w-auto justify-center flex"
            >
              Conoce más
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
