import { Globe, ShieldCheck, Apple, HeartHandshake } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="lo-que-te-llevas" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-wider text-accent uppercase mb-2">Lo Que Te Llevas</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-secondary mb-6">No es solo una consulta. Es un antes y un después.</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Esto es lo que mis pacientes valoran más del proceso conmigo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                icon: <Globe className="w-8 h-8 text-primary" />,
                title: "Cero desplazamientos",
                desc: "Desde tu casa, tu oficina o donde estés. Solo necesitas internet. Atiendo pacientes de toda Colombia y el exterior."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-primary" />,
                title: "Voy a la raíz, no al parche",
                desc: "No te voy a dar otra pastilla para callar los síntomas. Investigo qué los está causando para resolverlos de verdad."
              },
              {
                icon: <Apple className="w-8 h-8 text-primary" />,
                title: "Tu alimentación como medicina",
                desc: "Mi énfasis es transformar tu salud a través de lo que comes. Cambios de hábitos reales, sostenibles y adaptados a tu vida."
              },
              {
                icon: <HeartHandshake className="w-8 h-8 text-primary" />,
                title: "Una doctora que te escucha",
                desc: "Mantengo una relación cercana con cada paciente. No eres un número: te veo como una persona completa, no como un síntoma."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start bg-[#faf8f4] p-8 rounded-2xl border border-transparent hover:border-primary/20 hover:shadow-lg transition-all">
                <div className="mt-1 bg-white p-3 rounded-xl shadow-sm flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-3">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
