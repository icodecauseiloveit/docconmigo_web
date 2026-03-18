export default function PoliticaPrivacidad() {
  return (
    <div className="py-24 bg-gray-50 min-h-[calc(100vh-16rem)] flex justify-center">
      <div className="container mx-auto px-4 max-w-3xl bg-white p-8 md:p-12 shadow-sm border border-gray-100 rounded-2xl">
        <h1 className="text-3xl font-bold text-secondary mb-8">Política de Privacidad</h1>
        
        <div className="prose prose-sm md:prose-base text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">Tratamiento de datos personales</h2>
            <p>
              En DocConmigo, cumplimos estrictamente con la normativa vigente en Colombia respecto a la protección de datos personales (Ley 1581 de 2012 y el Habeas Data). Sus datos médicos y personales están protegidos por el secreto profesional y protocolos de seguridad robustos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">Finalidad de los datos</h2>
            <p>
              La información recolectada a través de formularios o en consulta será utilizada exclusivamente para:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Contactarlo para agendar, confirmar o modificar citas médicas.</li>
              <li>Gestionar su diagnóstico, tratamiento e historia clínica.</li>
              <li>Envío de material educativo e informativo relacionado con su salud (siempre y cuando usted lo autorice).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">Derechos del usuario</h2>
            <p>
              Como titular de la información, usted tiene derecho a conocer, actualizar, rectificar y solicitar la supresión de sus datos personales. Para ejercer estos derechos, puede escribirnos a {process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'docconmigo@gmail.com'}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
