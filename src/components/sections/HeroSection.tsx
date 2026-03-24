import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-40 pb-24 md:pt-48 md:pb-40 overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero.png" 
          alt="docconmigo Hero Background" 
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#e0f0f5]/85 via-white/75 to-white/60"></div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-10">
        <div className="w-[600px] h-[600px] rounded-full bg-primary blur-3xl mix-blend-multiply"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-primary tracking-tighter mb-8 relative leading-tight">
            Tu cuerpo te habla... <br />Yo te ayudo a entenderlo
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-highlight rounded-full"></div>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 font-medium mb-10 leading-relaxed mt-10 max-w-3xl mx-auto">
            En lugar de darte otra receta que tapa síntomas, analizo tu alimentación, hábitos y estilo de vida para diseñar un plan que ataque el origen del problema. Todo por videollamada, sin filas, sin desplazamientos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/formulario" 
              className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              Agendar cita
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/#pain-points" 
              className="bg-white hover:bg-gray-50 text-secondary border border-gray-200 px-8 py-4 rounded-full text-base font-semibold shadow-sm transition-all w-full sm:w-auto justify-center flex"
            >
              Conoce más
            </Link>
          </div>

          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8 text-gray-700">
            <div className="flex items-center gap-2 text-sm font-medium">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span>Médica certificada — Reg. 9724</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span>16 años de experiencia clínica</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span>6 años en medicina funcional</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
