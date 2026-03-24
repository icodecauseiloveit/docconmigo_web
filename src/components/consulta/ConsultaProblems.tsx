"use client";

import { useEffect, useRef, useState } from "react";

const problems = [
  { icon: "😴", title: "Fatiga que no se va", desc: "Duermes 8 horas y te levantas destruido(a). El café ya no funciona. Te dicen que 'es estrés' pero tú sabes que algo más está pasando." },
  { icon: "🫄", title: "Tu digestión es un caos", desc: "Hinchazón después de cada comida, gases, estreñimiento o diarrea. Ya no sabes qué comer sin que te caiga mal." },
  { icon: "⚖️", title: "Hormonas descontroladas", desc: "Irregularidades menstruales, tiroides inestable, cambios de ánimo extremos o peso que sube sin razón aparente." },
  { icon: "🧠", title: "Niebla mental constante", desc: "No puedes concentrarte, se te olvidan cosas, sientes que tu cabeza no rinde como antes. Y la ansiedad no ayuda." },
  { icon: "🔬", title: "Condiciones autoinmunes", desc: "Te diagnosticaron una enfermedad autoinmune y solo te ofrecen medicamentos de por vida, pero nunca te explican el porqué." },
  { icon: "🌱", title: "Quieres prevenir, no esperar", desc: "No estás 'enfermo(a)' pero tampoco te sientes bien. Quieres tomar el control de tu salud antes de que algo falle." }
];

export default function ConsultaProblems() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          <div className="text-[12px] font-bold tracking-[2px] uppercase text-[#5a7a64] mb-3">¿Esto Te Suena Familiar?</div>
          <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-semibold text-[#2c4333] mb-3 leading-[1.2]">
            Llevas meses (o años) así y nadie te da respuestas claras
          </h2>
          <p className="text-[#6b6b6b] text-[17px] max-w-[550px] mx-auto font-light leading-[1.6]">
            Si ya fuiste a varios médicos, te hicieron exámenes "normales" y sigues sintiéndote mal... no estás loco(a). Solo necesitas un enfoque diferente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <ProblemCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemCard({ icon, title, desc }: { icon: string, title: string, desc: string }) {
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
      className={`bg-[#faf8f4] rounded-[16px] p-7 transition-all duration-600 ease-out border border-transparent hover:border-[#a3bfab] hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
      <div className="w-12 h-12 bg-[#e8f0ea] rounded-[12px] flex items-center justify-center text-[24px] mb-4">
        {icon}
      </div>
      <h3 className="text-[17px] font-serif font-semibold mb-2 text-[#2c4333]">{title}</h3>
      <p className="text-[14px] text-[#6b6b6b] leading-[1.6] font-light">{desc}</p>
    </div>
  );
}
