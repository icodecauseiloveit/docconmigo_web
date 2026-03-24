"use client";

import { useState } from "react";

const faqs = [
  { 
    q: "¿Qué es la medicina funcional?", 
    a: "Es un enfoque médico que en vez de darte un medicamento para cada síntoma, investiga por qué te sientes así en primer lugar. Analizo tu alimentación, estilo de vida, genética y entorno para armar un plan que ataque la causa real — no solo el síntoma." 
  },
  { 
    q: "¿Cómo es una consulta virtual?", 
    a: "Nos conectamos por videollamada (Zoom, Google Meet o lo que prefieras). Antes de la cita te envío un formulario detallado de historia clínica para que en la consulta vayamos directo a lo importante. No es una consulta de 10 minutos — me tomo el tiempo necesario para entender tu caso a fondo." 
  },
  { 
    q: "¿Cuánto cuesta la consulta?", 
    a: "[CONTENIDO PERSONALIZADO: Incluye aquí tu tarifa real. Ej: 'La primera valoración tiene un costo de $XXX.XXX COP e incluye evaluación completa + plan personalizado. Los controles de seguimiento son de $XXX.XXX COP.' — Hormozi dice: muestra el valor, no solo el precio.]" 
  },
  { 
    q: "¿Necesito exámenes previos?", 
    a: "No necesariamente. Si tienes exámenes recientes, envíamelos antes de la cita para revisarlos. Si no tienes, no pasa nada — en la consulta evaluamos si necesitas análisis específicos de laboratorio funcional." 
  },
  { 
    q: "¿Atienden desde fuera de Colombia?", 
    a: "Sí. Al ser 100% virtual, atiendo pacientes en cualquier país. Solo necesitas conexión a internet y ganas de tomar el control de tu salud." 
  },
  { 
    q: "¿Cuánto tiempo tarda en verse resultados?", 
    a: "Muchos pacientes notan cambios en las primeras 2-4 semanas cuando se comprometen con el plan. Condiciones más crónicas requieren más tiempo, pero lo importante es que no vas a estar solo(a): te acompaño con seguimiento constante y ajustes según tu evolución." 
  }
];

export default function ConsultaFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          <div className="text-[12px] font-bold tracking-[2px] uppercase text-[#5a7a64] mb-3">Antes De Decidir</div>
          <h2 className="font-['Playfair_Display',serif] text-[clamp(28px,4vw,40px)] font-semibold text-[#2c4333] mb-3 leading-[1.2]">
            Preguntas que probablemente tienes
          </h2>
        </div>
        
        <div className="max-w-[700px] mx-auto">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-[#e8e5df] last:border-0 py-5">
              <button 
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center text-left hover:text-[#5a7a64] transition-colors group"
              >
                <span className="font-semibold text-[#2c4333] tracking-wide">{f.q}</span>
                <span 
                  className={`w-7 h-7 bg-[#e8f0ea] text-[#5a7a64] rounded-full flex items-center justify-center text-[18px] transition-transform duration-300 ${activeIndex === i ? 'rotate-45' : ''}`}
                >
                  +
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-400 ease-in-out ${activeIndex === i ? 'max-h-[200px] pt-3.5' : 'max-h-0'}`}
              >
                <p className="text-[14px] text-[#6b6b6b] leading-[1.7] font-light">
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
