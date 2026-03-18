// ContactSection.tsx
"use client";

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'docconmigo@gmail.com';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

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

          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
              Da el primer paso <br className="hidden md:block" /> hacia tu bienestar
            </h2>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Descubre cómo nuestro enfoque integral optimiza tu salud y te permite enfocarte en lo que realmente importa.
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

          <div className="mt-20 max-w-2xl mx-auto">
            <div className="bg-[#03112b]/40 backdrop-blur-2xl border border-white/20 p-10 md:p-14 rounded-[2rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] relative overflow-hidden group hover:border-white/30 transition-all duration-500">
              
              {isSubmitted ? (
                <div className="py-16 flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/10">
                    <CheckCircle2 className="w-12 h-12 text-blue-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold">¡Mensaje enviado!</h3>
                    <p className="text-white/60 max-w-sm">Te contactaremos lo más pronto posible para coordinar tu cita.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-sm font-semibold text-white/60 uppercase tracking-wider px-1">Nombre</label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        className="w-full bg-black/20 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-black/40 transition-all text-white placeholder:text-white/20"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-sm font-semibold text-white/60 uppercase tracking-wider px-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        className="w-full bg-black/20 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-black/40 transition-all text-white placeholder:text-white/20"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label htmlFor="phone" className="text-sm font-semibold text-white/60 uppercase tracking-wider px-1">Teléfono o WhatsApp</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required 
                      className="w-full bg-black/20 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-black/40 transition-all text-white placeholder:text-white/20"
                      placeholder="+57 300 000 0000"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label htmlFor="message" className="text-sm font-semibold text-white/60 uppercase tracking-wider px-1">Mensaje breve (opcional)</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full bg-black/20 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-black/40 transition-all text-white placeholder:text-white/20 resize-none"
                      placeholder="Cuéntanos un poco por qué nos contactas..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-blue-900/40 relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10 uppercase tracking-widest text-sm">Enviar solicitud</span>
                    <Send className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                  </button>
                  <p className="text-[10px] text-white/30 text-center italic mt-6 uppercase tracking-widest">
                    Seguridad y privacidad garantizada
                  </p>
                </form>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
