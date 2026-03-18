import { Activity, Apple, Stethoscope, HeartPulse } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: "Evaluación integral de salud",
      description: "Analizamos tu historial completo, estilo de vida, entorno y factores emocionales para entender el panorama total.",
      icon: <Activity className="h-8 w-8 text-white" />
    },
    {
      title: "Medicina funcional",
      description: "Abordaje científico que busca la causa raíz de las enfermedades, entendiendo el cuerpo como un sistema interconectado.",
      icon: <Stethoscope className="h-8 w-8 text-white" />
    },
    {
      title: "Acompañamiento nutricional",
      description: "La alimentación como medicina. Diseñamos planes personalizados que se adaptan a tu biología y objetivos.",
      icon: <Apple className="h-8 w-8 text-white" />
    },
    {
      title: "Planes de hábitos",
      description: "Optimización de sueño, manejo de estrés y movimiento consciente para mantener resultados a largo plazo.",
      icon: <HeartPulse className="h-8 w-8 text-white" />
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-accent uppercase mb-2">Lo que hacemos</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Nuestros Servicios</h3>
          <p className="text-gray-600">Integrando diferentes disciplinas para ofrecerte soluciones reales y duraderas para tu bienestar.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:rotate-6 transition-all duration-300 shadow-md">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-secondary mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
