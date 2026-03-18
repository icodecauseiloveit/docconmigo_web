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
    <section id="contacto" className="py-24 bg-[#000917] text-white relative overflow-hidden">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(50,104,139,0.15)_0%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Solicita nuestros servicios
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Da el primer paso <br className="hidden md:block" /> hacia tu bienestar
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Descubre cómo nuestro enfoque integral optimiza tu salud y te permite enfocarte en lo que realmente importa: disfrutar tu vida.
          </p>

          <div className="pt-6">
            <h3 className="text-xl md:text-2xl font-bold relative inline-block">
              Líderes en Medicina Funcional
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500/40 rounded-full"></div>
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12 pt-4">
            <div className="flex items-center gap-2 text-gray-300 font-medium">
              <CheckCircle2 className="w-5 h-5 text-blue-500" />
              <span>Evaluación Integral</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 font-medium">
              <CheckCircle2 className="w-5 h-5 text-blue-500" />
              <span>Acompañamiento Cercano</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 font-medium">
              <CheckCircle2 className="w-5 h-5 text-blue-500" />
              <span>Enfoque en Causa Raíz</span>
            </div>
          </div>

          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-bold">¡Mensaje enviado!</h3>
                  <p className="text-gray-400 max-w-sm">Te contactaremos lo más pronto posible para coordinar tu cita.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-400 flex items-center gap-1">
                        Nombre <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        className="w-full bg-[#162234] border border-white/10 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-white placeholder:text-gray-600"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-400 flex items-center gap-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        className="w-full bg-[#162234] border border-white/10 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-white placeholder:text-gray-600"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-400 flex items-center gap-1">
                      Teléfono o WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required 
                      className="w-full bg-[#162234] border border-white/10 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-white placeholder:text-gray-600"
                      placeholder="+57 300 000 0000"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-400">Mensaje breve (opcional)</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full bg-[#162234] border border-white/10 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-white placeholder:text-gray-600 resize-none"
                      placeholder="Cuéntanos un poco por qué nos contactas..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-500/20 group"
                  >
                    <span>Enviar solicitud</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  <p className="text-[10px] text-gray-500 text-center italic mt-4">
                    Al enviar, aceptas que DocConmigo trate tus datos según nuestra política de privacidad.
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
