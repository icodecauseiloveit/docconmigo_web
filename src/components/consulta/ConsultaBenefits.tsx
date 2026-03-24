"use client";

const benefits = [
  { icon: "🏠", title: "Cero desplazamientos", desc: "Desde tu casa, tu oficina o donde estés. Solo necesitas internet. Atiendo pacientes de toda Colombia y el exterior." },
  { icon: "🔍", title: "Voy a la raíz, no al parche", desc: "No te voy a dar otra pastilla para callar los síntomas. Investigo qué los está causando para resolverlos de verdad." },
  { icon: "🍽️", title: "Tu alimentación como medicina", desc: "Mi énfasis es transformar tu salud a través de lo que comes. Cambios de hábitos reales, sostenibles y adaptados a tu vida." },
  { icon: "🤝", title: "Una doctora que te escucha", desc: "Mantengo una relación cercana con cada paciente. No eres un número: te veo como una persona completa, no como un síntoma." }
];

export default function ConsultaBenefits() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#2c4333] to-[#3d5a45] text-white overflow-hidden relative">
      {/* Decorative radial gradient */}
      <div 
        className="absolute -top-[100px] -right-[100px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)' }}
      ></div>

      <div className="max-w-[1100px] mx-auto text-center mb-12">
        <div className="text-[12px] font-bold tracking-[2px] uppercase text-[#a3bfab] mb-3">Lo Que Te Llevas</div>
        <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-semibold text-white mb-3">
          No es solo una consulta. Es un antes y un después.
        </h2>
        <p className="text-white/70 text-[17px] max-w-[550px] mx-auto font-light">
          Esto es lo que mis pacientes valoran más del proceso conmigo.
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b, i) => (
          <div 
            key={i} 
            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[16px] p-7 transition-all hover:bg-white/15 hover:-translate-y-1"
          >
            <div className="text-[28px] mb-3.5">{b.icon}</div>
            <h3 className="text-[16px] font-serif font-semibold mb-2">{b.title}</h3>
            <p className="text-[14px] opacity-75 leading-[1.6] font-light">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
