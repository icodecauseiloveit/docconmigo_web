"use client";

import Image from "next/image";

export default function ConsultaDoctor() {
  return (
    <section className="py-20 px-6 bg-[#faf8f4]">
      <div className="max-w-[1100px] mx-auto">
        <div className="md:grid md:grid-cols-[280px_1fr] md:gap-12 items-center">
          <div className="flex justify-center mb-8 md:mb-0">
            <div className="w-[280px] h-[340px] bg-gradient-to-br from-[#e8f0ea] to-[#f5f0e8] rounded-[20px] flex items-center justify-center text-[14px] text-[#5a7a64] font-medium text-center p-5 border-2 border-dashed border-[#a3bfab]">
              <Image 
                src="/logo-docconmigo-web.png" 
                alt="Logo" 
                layout="intrisic"
                width={200}
                height={50}
                className="opacity-5 grayscale contrast-125"
              />
              <span className="absolute">📷 Tu foto profesional aquí<br/>(280×340px)</span>
            </div>
          </div>
          
          <div className="doctor-info">
            <div className="text-[12px] font-bold tracking-[2px] uppercase text-[#5a7a64] mb-3 text-left">Tu Médica</div>
            <h2 className="font-['Playfair_Display',serif] text-[32px] font-semibold text-[#2c4333] mb-4">
              Dra. Luci Cortez
            </h2>
            <div className="space-y-3 mb-5">
              <p className="text-[15px] text-[#6b6b6b] leading-[1.7] font-light">
                Después de 16 años en el sistema hospitalario, entendí algo que cambió mi carrera: la mayoría de los pacientes no necesitan más medicamentos — necesitan que alguien se tome el tiempo de escucharlos, investigar a fondo y trabajar en lo que realmente está fallando.
              </p>
              <p className="text-[15px] text-[#6b6b6b] leading-[1.7] font-light">
                Soy médica de la Universidad de Cartagena con un Máster en Nutrición de Precisión y Epigenética (UNIR). Llevo 6 años dedicada a la medicina funcional, donde mi enfoque es claro: transformar tu salud a través del cambio de hábitos, especialmente tu alimentación. No te veo como un síntoma que resolver — te veo como una persona completa, y así te trato.
              </p>
              <p className="text-[15px] text-[#3d5a45] font-semibold leading-[1.7]">
                Mi compromiso es ser cercana, honesta y acompañarte en cada paso. Porque cuando entiendes tu cuerpo y cambias lo que comes, los resultados llegan — y se quedan.
              </p>
            </div>
            
            <div className="flex flex-col gap-2.5">
              {[
                { icon: "🎓", text: "Médica — Universidad de Cartagena" },
                { icon: "📜", text: "Máster en Nutrición de Precisión y Epigenética — UNIR" },
                { icon: "⏱️", text: "16 años de experiencia clínica · 6 en medicina funcional" },
                { icon: "🏥", text: "Registro médico: 9724" }
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-2.5 text-[14px] font-medium text-[#2a2a2a]">
                  <div className="w-7 h-7 bg-[#e8f0ea] rounded-lg flex items-center justify-center text-[14px]">
                    {c.icon}
                  </div>
                  {c.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
