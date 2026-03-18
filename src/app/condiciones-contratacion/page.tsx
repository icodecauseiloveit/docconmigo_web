export default function CondicionesContratacion() {
  return (
    <div className="py-24 bg-gray-50 min-h-[calc(100vh-16rem)] flex justify-center">
      <div className="container mx-auto px-4 max-w-3xl bg-white p-8 md:p-12 shadow-sm border border-gray-100 rounded-2xl">
        <h1 className="text-3xl font-bold text-secondary mb-8">Condiciones de Contratación</h1>
        
        <div className="prose prose-sm md:prose-base text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">Naturaleza del servicio</h2>
            <p>
              docconmigo presta servicios de asesoría, evaluación y acompañamiento en medicina funcional. Al agendar y asistir a nuestras consultas, usted acepta que el enfoque puede diferir de las prácticas médicas convencionales y está centrado en abordar las causas subyacentes de los desequilibrios de salud mediante cambios de hábitos y nutrición.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">Responsabilidades</h2>
            <p>
              El paciente es responsable de proporcionar información completa y veraz sobre su historial médico y seguir las recomendaciones consensuadas. docconmigo se compromete a brindar orientación y acompañamiento personalizado basándose en la evidencia y el criterio clínico.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">Pagos y Cancelaciones</h2>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Los honorarios de consulta deben cancelarse en el momento o previo a la misma, según el método de pago elegido.</li>
              <li>Para modificaciones o cancelaciones, se ruega avisar con un mínimo de <strong>24 horas de antelación</strong> para permitir que otro paciente utilice el turno.
              En caso contrario, podrá aplicarse un cargo por cancelación.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">Limitación de responsabilidad</h2>
            <p>
              docconmigo garantiza la diligencia y profesionalidad en la prestación de sus servicios médicos. No obstante, al depender en gran medida del seguimiento del paciente y factores biológicos individuales, no se puede garantizar resultados específicos sobre tratamientos.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
