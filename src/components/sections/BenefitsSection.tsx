import { Clock, ShieldCheck, Pill, BatteryCharging, HeartHandshake } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Atención personalizada (45+ min)",
      description: "Tiempo de calidad en consulta para escucharte realmente.",
      icon: <Clock className="h-6 w-6 text-accent" />
    },
    {
      title: "Enfoque en causa raíz",
      description: "Soluciones de fondo, no simples parches momentáneos.",
      icon: <ShieldCheck className="h-6 w-6 text-accent" />
    },
    {
      title: "Menos medicamentos",
      description: "Priorizamos intervenciones naturales y cambios de estilo de vida.",
      icon: <Pill className="h-6 w-6 text-accent" />
    },
    {
      title: "Más energía",
      description: "Recupera tu vitalidad optimizando tu metabolismo.",
      icon: <BatteryCharging className="h-6 w-6 text-accent" />
    },
    {
      title: "Acompañamiento cercano",
      description: "Estamos contigo en cada paso de tu proceso de sanación.",
      icon: <HeartHandshake className="h-6 w-6 text-accent" />
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold tracking-wider text-accent uppercase mb-2">Por qué elegirnos</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Beneficios de nuestro enfoque</h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              La medicina convencional a menudo actúa como apagafuegos. Nosotros te enseñamos a construir un edificio resistente al fuego, dándote las herramientas para tomar el control de tu salud.
            </p>
            
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 bg-white p-2 rounded-full shadow-sm">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-lg">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform translate-x-4 translate-y-4"></div>
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-500 font-bold text-xl">VS</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800">Modelo Tradicional</h5>
                    <p className="text-sm text-gray-500">Consultas de 15 min, recetas rápidas, tratamiento de síntomas aislados.</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 pt-2">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 border-2 border-accent">
                    <HeartHandshake className="text-accent h-8 w-8" />
                  </div>
                  <div>
                    <h5 className="font-bold text-secondary">Modelo DocConmigo</h5>
                    <p className="text-sm text-gray-600 font-medium">Escucha activa profunda, intervenciones integrales, tratamiento del ecosistema corporal.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
