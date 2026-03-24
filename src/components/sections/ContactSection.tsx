// ContactSection.tsx
"use client";

import { CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-[#0f1c3f] via-[#1f3b82] to-[#2563eb] text-white relative overflow-hidden">
      
      {/* Central lighting effect (Glow) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase backdrop-blur-md">
              <CheckCircle2 className="w-4 h-4 text-blue-300" />
              Solicita nuestros servicios
            </span>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif tracking-tight leading-tight">
              Da el primer paso <br className="hidden md:block" /> hacia tu bienestar
            </h2>
            <p className="text-white/80 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
              Cada día que pospones es un día más sintiéndote igual. <br className="hidden md:block" />
              No necesitas otro medicamento. Necesitas que alguien investigue de verdad qué está pasando en tu cuerpo. 
              <span className="block mt-4 text-blue-300 font-bold uppercase tracking-widest text-base">Escríbeme y empecemos.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                <CheckCircle2 className="w-6 h-6 text-blue-300" />
              </div>
              <span className="text-white/80 font-medium">Evaluación Integral</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                <CheckCircle2 className="w-6 h-6 text-blue-300" />
              </div>
              <span className="text-white/80 font-medium">Acompañamiento Cercano</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                <CheckCircle2 className="w-6 h-6 text-blue-300" />
              </div>
              <span className="text-white/80 font-medium">Enfoque en Causa Raíz</span>
            </div>
          </div>

          {/* High-End WhatsApp Button Section - NO GREEN VERSION */}
          <div className="mt-12 max-w-xl mx-auto pb-12 relative">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-20 bg-blue-400/20 blur-[60px] rounded-full -z-10 animate-pulse"></div>
            
            <a 
              href="https://wa.me/573000000000?text=Hola%20Dra.%20Luci%2C%20vengo%20de%20la%20página%20web%20y%20quiero%20agendar%20una%20consulta%20de%20medicina%20funcional"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between gap-6 bg-white p-4 pl-10 pr-4 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-white/20"
            >
              {/* Shimmer Effect Sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              
              <span className="text-[#0f1c3f] font-serif text-2xl md:text-3xl font-bold tracking-tight z-10">
                Agendar mi consulta
              </span>

              <div className="flex items-center gap-3 bg-[#004a7c] py-4 px-6 rounded-2xl text-white shadow-xl group-hover:bg-[#00365c] transition-colors duration-300 z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-white rounded-xl animate-ping opacity-25"></div>
                  <svg viewBox="0 0 24 24" className="w-9 h-9 fill-current relative z-10"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
              </div>
            </a>
            <p className="text-[11px] text-white/50 text-center italic mt-10 uppercase tracking-[0.4em] font-medium animate-pulse">
              * Agenda tu cita de valoración hoy mismo *
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
