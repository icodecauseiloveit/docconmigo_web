// ContactSection.tsx
"use client";

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'docconmigo@gmail.com';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contacto" className="py-24 bg-secondary text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 bg-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm border border-white/20">
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Da el primer paso hacia tu bienestar</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Completa el formulario y nos pondremos en contacto contigo para agendar tu consulta de valoración. 
            </p>
            <div className="space-y-4 text-gray-300">
              <p>Email: {contactEmail}</p>
              <p>Atención: Lunes a Viernes, 8am - 6pm</p>
            </div>
          </div>

          <div className="md:w-1/2 bg-white rounded-2xl p-8 text-gray-800 shadow-xl">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-accent" />
                <h3 className="text-2xl font-bold text-secondary">¡Mensaje enviado!</h3>
                <p className="text-gray-600">Te contactaremos lo más pronto posible para coordinar tu cita.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-secondary mb-6">Agendar consulta</h3>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono o WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="+57 300 000 0000"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje breve (opcional)</label>
                  <textarea 
                    id="message" 
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                    placeholder="Cuéntanos un poco por qué nos contactas..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-secondary text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors mt-2"
                >
                  <span>Enviar solicitud</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
