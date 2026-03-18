export default function AvisoLegal() {
  return (
    <div className="py-24 bg-gray-50 min-h-[calc(100vh-16rem)] flex justify-center">
      <div className="container mx-auto px-4 max-w-3xl bg-white p-8 md:p-12 shadow-sm border border-gray-100 rounded-2xl">
        <h1 className="text-3xl font-bold text-secondary mb-8">Aviso Legal</h1>
        
        <div className="prose prose-sm md:prose-base text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">1. Identificación del responsable</h2>
            <p>
              El titular y responsable de este sitio web es docconmigo, clínica especializada en medicina funcional. 
              Para cualquier consulta, puede contactarnos en {process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'docconmigo@gmail.com'}.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">2. Uso del sitio</h2>
            <p>
              La información proporcionada en <a href={process.env.NEXT_PUBLIC_SITE_URL || '/'}>docconmigo</a> tiene un propósito meramente informativo y educativo. 
              No sustituye el consejo o diagnóstico médico profesional. Todo usuario debe utilizar la información bajo su propia responsabilidad.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">3. Responsabilidad</h2>
            <p>
              docconmigo no se hace responsable de posibles decisiones tomadas por los usuarios basándose únicamente en la información de este sitio. 
              Para un diagnóstico y tratamiento adecuado, se requiere de una consulta médica formal.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
