"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  { 
    num: 1, 
    title: "Escríbeme por WhatsApp", 
    desc: "Me cuentas brevemente qué sientes, coordinamos un horario y te envío un formulario previo para no perder ni un minuto." 
  },
  { 
    num: 2, 
    title: "Consulta a fondo por videollamada", 
    desc: "Revisamos tu historia clínica, alimentación, hábitos de sueño, estrés y todo lo que influye en tu salud. Esto no es una consulta de 10 minutos." 
  },
  { 
    num: 3, 
    title: "Tu plan personalizado + seguimiento", 
    desc: "Recibes un protocolo concreto: qué comer, qué cambiar, qué suplementar. Y te acompaño para que realmente lo cumplas." 
  }
];

export default function ConsultaHowItWorks() {
  return (
    <section id="como-funciona" className="py-20 px-6 bg-[#faf8f4]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          <div className="text-[12px] font-bold tracking-[2px] uppercase text-[#5a7a64] mb-3">Así De Simple</div>
          <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-semibold text-[#2c4333] mb-3 leading-[1.2]">
            De "no sé qué me pasa" a un plan claro en 3 pasos
          </h2>
          <p className="text-[#6b6b6b] text-[17px] max-w-[550px] mx-auto font-light leading-[1.6]">
            Sin filas, sin desplazamientos, sin perder el día entero en una sala de espera.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Decorative Line */}
          <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[#a3bfab] via-[#5a7a64] to-[#a3bfab] opacity-30 z-0"></div>
          
          {steps.map((s, i) => (
            <StepCard key={i} {...s} delay={i * 200} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ num, title, desc, delay }: { num: number, title: string, desc: string, delay: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`text-center relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
      <div className="w-16 h-16 bg-white border-3 border-[#5a7a64] rounded-full flex items-center justify-center mx-auto mb-5 font-['Playfair_Display',serif] text-[24px] font-semibold text-[#3d5a45]">
        {num}
      </div>
      <h3 className="text-[18px] font-serif font-semibold mb-2 text-[#2c4333]">{title}</h3>
      <p className="text-[14px] text-[#6b6b6b] max-w-[260px] mx-auto leading-[1.6] font-light">{desc}</p>
    </div>
  );
}
