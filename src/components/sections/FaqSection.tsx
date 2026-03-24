'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "¿Qué es la medicina funcional?",
    answer: "Es un enfoque médico que en vez de darte un medicamento para cada síntoma, investiga por qué te sientes así en primer lugar. Analizo tu alimentación, estilo de vida, genética y entorno para armar un plan que ataque la causa real — no solo el síntoma."
  },
  {
    question: "¿Cómo es una consulta virtual?",
    answer: "Nos conectamos por videollamada (Zoom, Google Meet o lo que prefieras). Antes de la cita te envío un formulario detallado de historia clínica para que en la consulta vayamos directo a lo importante. No es una consulta de 10 minutos — me tomo el tiempo necesario para entender tu caso a fondo."
  },
  {
    question: "¿Cuánto cuesta la consulta?",
    answer: "La primera valoración tiene un costo competitivo que incluye evaluación completa + plan personalizado. Al agendar por WhatsApp te enviaremos el tarifario vigente actualizado según el tipo de tratamiento que necesites."
  },
  {
    question: "¿Necesito exámenes previos?",
    answer: "No necesariamente. Si tienes exámenes recientes, envíamelos antes de la cita para revisarlos. Si no tienes, no pasa nada — en la consulta evaluamos si necesitas análisis específicos de laboratorio funcional."
  },
  {
    question: "¿Atienden desde fuera de Colombia?",
    answer: "Sí. Al ser 100% virtual, atiendo pacientes residentes en cualquier país. Solo necesitas una conexión a internet estable y ganas de iniciar tu proceso de sanación."
  },
  {
    question: "¿Cuánto tiempo tarda en verse resultados?",
    answer: "Muchos pacientes notan cambios en las primeras 2-4 semanas cuando se comprometen con el plan. Condiciones crónicas requieren más tiempo, pero lo importante es que te acompaño con seguimiento constante y ajustes según tu evolución."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#f4f7f5] rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[13px] font-bold tracking-[0.3em] text-[#5c7c6c] uppercase mb-4"
          >
            ANTES DE DECIDIR
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-[#004a7c] leading-tight"
          >
            Preguntas que probablemente tienes
          </motion.h3>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index} 
                initial={false}
                animate={{ backgroundColor: isOpen ? "rgba(232, 240, 234, 0.4)" : "rgba(255, 255, 255, 0)" }}
                className={`rounded-3xl border ${isOpen ? 'border-[#5c7c6c]/20' : 'border-gray-100'} overflow-hidden transition-all duration-300`}
              >
                <button
                  className="w-full py-7 px-8 flex items-center justify-between text-left focus:outline-none group"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`text-xl font-bold transition-all duration-300 pr-8 ${isOpen ? 'text-[#004a7c] translate-x-1' : 'text-[#2c3e34] group-hover:text-[#5c7c6c]'}`}>
                    {faq.question}
                  </span>
                  
                  <div className={`shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm ${isOpen ? 'bg-[#5c7c6c] text-white rotate-45' : 'bg-white text-[#5c7c6c] group-hover:bg-[#5c7c6c] group-hover:text-white'}`}>
                    <Plus className="w-6 h-6" />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-8 pb-8">
                        <motion.div 
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className="h-px bg-gradient-to-r from-[#5c7c6c]/30 to-transparent mb-6"
                        />
                        <p className="text-gray-600 leading-relaxed text-lg max-w-3xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
