import { Activity, Apple, Stethoscope, HeartPulse } from 'lucide-react';
import Image from 'next/image';

export default function PainPointsSection() {
  const services = [
    {
      title: "Fatiga que no se va",
      description: "Duermes 8 horas y te levantas destruido(a). El café ya no funciona. Te dicen que \"es estrés\" pero tú sabes que algo más está pasando.",
      icon: "😴",
      image: "/dolor1.png"
    },
    {
      title: "Tu digestión es un caos",
      description: "Hinchazón después de cada comida, gases, estreñimiento o diarrea. Ya no sabes qué comer sin que te caiga mal.",
      icon: "🫄",
      image: "/dolor2.png"
    },
    {
      title: "Hormonas descontroladas",
      description: "Irregularidades menstruales, tiroides inestable, cambios de ánimo extremos o peso que sube sin razón aparente.",
      icon: "⚖️",
      image: "/dolor3.png"
    },
    {
      title: "Niebla mental constante",
      description: "No puedes concentrarte, se te olvidan cosas, sientes que tu cabeza no rinde como antes. Y la ansiedad no ayuda.",
      icon: "🧠",
      image: "/dolor4.png"
    },
    {
      title: "Condiciones autoinmunes",
      description: "Te diagnosticaron una enfermedad autoinmune y solo te ofrecen medicamentos de por vida, pero nunca te explican el porqué.",
      icon: "🔬",
      image: "/dolor5.png"
    },
    {
      title: "Quieres prevenir, no esperar",
      description: "No estás \"enfermo(a)\" pero tampoco te sientes bien. Quieres tomar el control de tu salud antes de que algo falle.",
      icon: "🌱",
      image: "/dolor6.png"
    }
  ];

  return (
    <section id="pain-points" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-accent uppercase mb-2">¿Esto Te Suena Familiar?</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-secondary mb-4">Llevas meses (o años) así y nadie te da respuestas claras</h3>
          <p className="text-gray-600">Si ya fuiste a varios médicos, te hicieron exámenes "normales" y sigues sintiéndote mal... no estás loco(a). Solo necesitas un enfoque diferente.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#faf8f4] rounded-2xl border-2 border-transparent shadow-sm hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              {/* Image Section */}
              <div className="w-full aspect-video bg-gradient-to-br from-[#e8f0ea] to-[#f5f0e8] flex items-center justify-center border-b border-gray-100 overflow-hidden relative">
                {service.image ? (
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <span className="text-3xl opacity-60">{service.icon}</span>
                )}
              </div>
              
              <div className="p-8">
                <h4 className="text-xl font-bold text-secondary mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
