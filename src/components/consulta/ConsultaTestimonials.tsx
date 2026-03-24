"use client";

const testimonials = [
  { 
    text: '"Después de años con problemas digestivos que nadie podía resolver, encontré respuestas reales. Mi plan personalizado cambió mi calidad de vida."',
    author: "M",
    name: "[Nombre del paciente]",
    detail: "[Ciudad] · Paciente desde [año]"
  },
  { 
    text: '"La consulta virtual fue súper cómoda y profesional. La doctora se tomó el tiempo de entender mi caso a fondo. Recomendado 100%."',
    author: "C",
    name: "[Nombre del paciente]",
    detail: "[Ciudad] · Paciente desde [año]"
  },
  { 
    text: '"Tenía fatiga crónica y desequilibrio hormonal. Con el enfoque funcional empecé a sentir cambios reales en pocas semanas."',
    author: "L",
    name: "[Nombre del paciente]",
    detail: "[Ciudad] · Paciente desde [año]"
  }
];

export default function ConsultaTestimonials() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          <div className="text-[12px] font-bold tracking-[2px] uppercase text-[#5a7a64] mb-3">No Me Creas A Mí — Escúchalos A Ellos</div>
          <h2 className="font-['Playfair_Display',serif] text-[clamp(28px,4vw,40px)] font-semibold text-[#2c4333] mb-3 leading-[1.2]">
            Pacientes reales, resultados reales
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#faf8f4] rounded-[16px] p-8 relative overflow-hidden group">
              <div 
                className="font-['Playfair_Display',serif] text-[72px] text-[#a3bfab] absolute top-4 left-6 leading-none opacity-40 select-none"
              >
                "
              </div>
              <p className="text-[15px] text-[#2a2a2a] italic leading-[1.7] mb-5 relative z-10 font-light">
                {t.text}
              </p>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-11 h-11 bg-[#e8f0ea] rounded-full flex items-center justify-center font-bold text-[#3d5a45] text-[16px]">
                  {t.author}
                </div>
                <div>
                  <div className="font-semibold text-[14px] text-[#2c4333]">{t.name}</div>
                  <div className="text-[13px] text-[#6b6b6b]">{t.detail}</div>
                  <div className="text-[#c4a265] text-[14px] tracking-[2px]">★★★★★</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
