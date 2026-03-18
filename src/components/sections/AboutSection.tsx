import { Leaf } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-wider text-accent uppercase mb-2">Sobre nuestro enfoque</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Medicina que te entiende</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              En DocConmigo creemos que la salud es más que la ausencia de enfermedad. Es un estado de vitalidad, claridad mental y equilibrio emocional que surge cuando le damos al cuerpo lo que necesita y quitamos lo que le hace daño.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 aspect-square flex flex-col items-center justify-center p-8 text-center border-4 border-white">
              <Leaf className="w-24 h-24 text-accent mb-6" strokeWidth={1.5} />
              <h4 className="text-2xl font-bold text-secondary mb-4">La salud es integral</h4>
              <p className="text-gray-600">
                Tu alimentación, tu descanso, tu nivel de estrés, tus emociones, tus relaciones y tu entorno: todo influye en cómo te sientes hoy. 
              </p>
            </div>

            <div className="order-1 md:order-2 space-y-8">
              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-blue-50 p-3 rounded-xl">
                  <span className="font-bold text-primary text-xl">01</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-2">Evaluación completa</h4>
                  <p className="text-gray-600">
                    No nos quedamos con el análisis de sangre básico. Exploramos tu historia desde el vientre materno hasta hoy.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-green-50 p-3 rounded-xl">
                  <span className="font-bold text-accent text-xl">02</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-2">Planes adaptables</h4>
                  <p className="text-gray-600">
                    Co-creamos un plan de acción que sí puedas mantener a largo plazo, adaptado a tu estilo de vida y posibilidades.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-blue-50 p-3 rounded-xl">
                  <span className="font-bold text-primary text-xl">03</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-2">Educación constante</h4>
                  <p className="text-gray-600">
                    Queremos que entiendas tu cuerpo. Un paciente educado es un paciente empoderado que toma mejores decisiones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
