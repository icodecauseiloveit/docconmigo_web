import Image from 'next/image';
import { GraduationCap, ScrollText, Timer, IdCard } from 'lucide-react';

export default function DoctorSection() {
  return (
    <section id="sobre-mi" className="py-24 bg-[#faf8f4]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Image */}
          <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden">
            <Image 
              src="/draluciapng.png" 
              alt="Dra. Luci Cortez" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center min-h-full py-2">
            <div className="space-y-4 mb-6">
              <h2 className="text-xs font-bold tracking-[0.2em] text-[#5c7c6c] uppercase">TU MÉDICA</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-[#2c3e34] leading-[1.1]">
                Dra. Luci Cortez
              </h3>
              
              <div className="space-y-4 text-[#2c3e34]/80 text-base md:text-lg leading-relaxed">
                <p>
                  Después de 16 años en el sistema hospitalario, entendí algo que cambió mi carrera: la mayoría de los pacientes no necesitan más medicamentos — necesitan que alguien se tome el tiempo de escucharlos e investigar a fondo.
                </p>
                <p>
                  Soy médica de la Universidad de Cartagena con un Máster en Nutrición de Precisión y Epigenética (UNIR). Llevo 6 años dedicada a la medicina funcional, transformando la salud a través del cambio de hábitos.
                </p>
                <p className="font-bold text-[#2c3e34] border-l-4 border-[#a3bfab]/50 pl-5 py-1 italic text-lg lg:text-xl">
                  Mi compromiso es ser cercana, honesta y acompañarte en cada paso.
                </p>
              </div>
            </div>

            <div className="space-y-1">
              {[
                { icon: <GraduationCap className="w-4 h-4" />, text: "Médica — Universidad de Cartagena" },
                { icon: <ScrollText className="w-4 h-4" />, text: "Máster en Nutrición de Precisión y Epigenética — UNIR" },
                { icon: <Timer className="w-4 h-4" />, text: "16 años de experiencia clínica · 6 en medicina funcional" },
                { icon: <IdCard className="w-4 h-4" />, text: "Registro médico: 9724" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[#2c3e34] bg-white/40 py-1.5 px-3 rounded-lg border border-white/60">
                  <div className="w-7 h-7 rounded bg-[#e8f0ea] flex items-center justify-center text-[#5c7c6c] flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-[12px] md:text-[13px] font-medium leading-none">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
