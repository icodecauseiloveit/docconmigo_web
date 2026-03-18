import Link from 'next/link';

export default function PoliticaPrivacidad() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'docconmigo@gmail.com';

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen flex justify-center">
      <div className="container mx-auto px-4 max-w-4xl bg-white p-8 md:p-14 shadow-sm border border-gray-100 rounded-3xl">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#000917] mb-2 tracking-tight">Política de Privacidad</h1>
        <p className="text-sm md:text-base text-gray-500 mb-10 pb-8 border-b border-gray-100">
          <strong>Última actualización:</strong> 2026<br/>
          <strong>Empresa:</strong> DocConmigo<br/>
          <strong>País:</strong> Colombia
        </p>
        
        <div className="prose prose-blue max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">1. Introducción y Marco Normativo</h2>
            <p>
              En <strong>DocConmigo</strong> valoramos y respetamos la privacidad de nuestros usuarios y pacientes. Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos, circulamos y protegemos la información personal que los usuarios proporcionan al utilizar nuestro sitio web, plataformas digitales o servicios asociados en consulta.
            </p>
            <p className="mt-4">
              Esta política ha sido elaborada en estricto cumplimiento de la normativa colombiana vigente en materia de protección de datos personales, especialmente la <strong>Ley Estatutaria 1581 de 2012 (Habeas Data)</strong>, el <strong>Decreto 1377 de 2013</strong> (compilado en el Decreto 1074 de 2015), la Ley 1266 de 2008 y la normativa relacionada con la protección de historias clínicas (Resolución 1995 de 1999 y Resolución 839 de 2017 del Ministerio de Salud).
            </p>
            <p className="mt-4 text-sm italic border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/50">
              Al utilizar nuestros servicios y proporcionarnos sus datos, el usuario acepta de manera previa, expresa e informada el tratamiento de sus datos personales conforme a las prácticas descritas en esta política.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">2. Información que recopilamos</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Información proporcionada voluntariamente (Datos Públicos, Semiprivados, Privados y Sensibles)</h3>
            <p>
              Cuando los usuarios interactúan con nuestros servicios, completan formularios o asisten a consulta, podemos recopilar información como:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 marker:text-blue-500">
              <li>Nombre y apellidos</li>
              <li>Tipo y número de identificación (Cédula de ciudadanía, extranjería, pasaporte, etc.)</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono (fijo y móvil, incluyendo WhatsApp)</li>
              <li>Información de contacto adicional (domicilio)</li>
              <li>Contenido de mensajes o consultas enviadas</li>
              <li><strong>Datos Sensibles (Información de Salud):</strong> Antecedentes médicos, diagnósticos, tratamientos, resultados de laboratorio e historial clínico en general. <em>El tratamiento de esta información está bajo estricta confidencialidad médica y profesional.</em></li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-8">Información recopilada automáticamente</h3>
            <p>
              Cuando los usuarios visitan nuestro sitio web, podemos recopilar cierta información técnica automáticamente mediante protocolos regulares de internet:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 marker:text-blue-500">
              <li>Dirección IP (Internet Protocol)</li>
              <li>Tipo de navegador y versión</li>
              <li>Sistema operativo y tipo de dispositivo móvil u ordenador</li>
              <li>Páginas visitadas dentro del portal y tiempo de estadía</li>
              <li>Datos de navegación y comportamiento general de cara a la analítica web</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">3. Finalidad del tratamiento de los datos</h2>
            <p>
              La información personal recolectada será tratada para las siguientes finalidades explícitas y legítimas:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 marker:text-blue-500">
              <li>Proporcionar y mejorar la integralidad y calidad de nuestros servicios médicos de medicina funcional.</li>
              <li>Gestionar el agendamiento, confirmación, recordatorio, modificación o cancelación de citas médicas.</li>
              <li>Conformación, gestión segura, actualización y conservación del <strong>historial clínico</strong> de los pacientes.</li>
              <li>Responder consultas directas o solicitudes derivadas mediante formularios de contacto.</li>
              <li>Enviar información sobre nuevos tratamientos, recomendaciones de salud y bienestar integral, avisos de promociones y boletines que el paciente pueda considerar relevantes (Marketing).</li>
              <li>Brindar soporte al paciente y trazabilidad a nuestro sistema de Peticiones, Quejas, Reclamos y Sugerencias (PQRS).</li>
              <li>Realizar análisis estadísticos y mejorar el desempeño y la experiencia de usuario (UX) en el sitio web.</li>
              <li>Cumplir con perentorias obligaciones legales, reportes o requerimientos exigidos por autoridades judiciales o entes de control como el Ministerio de Salud o la Superintendencia de Salud en Colombia.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">4. Comunicaciones y mensajería</h2>
            <p>
              Podemos utilizar herramientas e integraciones oficiales de comunicación digital como <strong>correo electrónico, WhatsApp, SMS o llamadas telefónicas</strong> para responder consultas en forma ágil, mandar formatos y confirmaciones antes y post atención de citas, enviar contenido valioso de salud o brindar el soporte general.
            </p>
            <p className="mt-4">
              Bajo las libertades enmarcadas en la Ley, los usuarios podrán solicitar en cualquier momento (ejerciendo la opción de "Opt-Out") que cesen los envíos y la comunicación no asistencial o de tipo promocional/marketing, escribiendo directamente a nuestro correo: {contactEmail}.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">5. Uso de Cookies</h2>
            <p>
              Nuestro sitio web puede utilizar cookies propias o de terceros, web beacons y tecnologías de seguimiento similares con el propósito principal de mejorar sustancialmente el servicio prestado o medir el comportamiento anónimo de audiencia:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 marker:text-blue-500">
              <li>Recordar de forma persistente o temporal (sesión) preferencias o la configuración visual del usuario.</li>
              <li>Analizar el tráfico web, su origen demográfico general y la recurrencia de las páginas para optimizar funcionalidades técnicas.</li>
              <li>Personalizar los eventuales contenidos, de acuerdo con el patrón de navegación.</li>
            </ul>
            <p className="mt-4 text-sm font-medium">
              El usuario es completamente libre y capacitado de desactivar, bloquear o depurar estas cookies explorando y aplicando bloqueos directamente desde la configuración de su navegador en uso (Chrome, Safari, Edge, Firefox, etc.).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">6. Compartir información con terceros</h2>
            <p>
              <strong>En DocConmigo nunca vendemos ni alquilamos su base de información personal a terceros.</strong> Nuestra política estipula que la información puede ser compartida exclusiva y excepcionalmente en estos panoramas:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 marker:text-blue-500">
              <li>Cuando sea indispensablemente necesario para la ejecución o prestación de los servicios tecnológicos o comerciales subcontratados que soportan la actividad de nuestra Entidad de Salud (como software de Historias Clínicas Electrónicas (EHR), proveedores de hosting en la nube, softwares de correo, o procesadores de pasarelas de pago transaccionales). Todas estas empresas terceras fungen exclusivamente como "Encargados" bajo juramente de proteger estas bases de datos en nombre nuestro.</li>
              <li>Atendiendo un marco imperativo ante un requerimiento legal justificado, o resolución expedida por una autoridad penal o la rama judicial competente de Colombia.</li>
              <li>Cuando sea considerado un hecho excepcional para la protección urgente de la vida o la salud del paciente (Emergencia médica).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">7. Seguridad de la información</h2>
            <p>
              Damos extrema importancia al compromiso que tenemos en asegurar la confidencialidad de todo dato sensible mediante protocolos criptográficos en el sistema. Implementamos medidas técnicas, administrativas y de ciberseguridad rigurosas bajo normativas y guías orientadoras (del MINTIC/SIC) para proteger eficazmente la información que cursa y recae sobre nuestro portal contra cualquier conato de acceso ilícito, hackeo, extravío o divulgación indeseada, alteraciones y supresión parcial/total (ataque cibernético).
            </p>
            <p className="mt-4">
              Lógicamente, por la propia naturaleza del entorno intrínseco de Internet y sus servidores en nube, adviértase que ningún sistema del planeta es inherentemente perfecto e inquebrantable de forma infalible, por lo que nunca podremos prever, asegurar o certificar al 100% que datos robados bajo interceptaciones indebidas por actores tercenos escapen de nuestras acciones y sistemas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">8. Conservación de los datos e Historias Clínicas</h2>
            <p>
              Se conservará el ciclo de vida de los datos del paciente todo aquel tiempo y en las formas como se disponga necesario para cumplir con los fines para los cuales originariamente tal grupo de datos fue capturado en concordancia a directivas enmarcadas desde Colombia.
            </p>
            <p className="mt-4">
              <strong>Consideración de exclusividad legal sobre Historias Clínicas:</strong> Por mandato general dictado a través del <strong>Ministerio de Salud en su Resolución 839 del 2017</strong> en adición a complementarias, en las instituciones autorizadas que acaudalen prestación de salud y expidan consulta (telemedicina y/o de escritorio), las historias clínicas (expedientes) en su conjunto reposan bajo el precepto de tener un tiempo mínimo innegociable de retención archivística cifrado hoy en no menos de <strong>quince (15) años a partir del cierre o el día posterior a la última actividad prestada en cita por dicho paciente</strong> antes de cualquier disposición final de depuración de registros en el disco duro o servidor nube.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">9. Derechos fundamentales del usuario (Derechos ARCO)</h2>
            <p>
              De conformidad con las amplias facultades de resguardo que consagra el Artículo 8 de la mencionada Ley 1581 (Habeas Data) del 2012, todo usuario tiene derecho indeclinable, en carácter de Titular libre, a:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 marker:text-blue-500">
              <li><strong>Conocer, actualizar y rectificar integralmente</strong> sus datos de carácter personal y filiatorios en nuestros archivos. Resulta importante notificarlo a sus proveedores si se percata de inexactitudes en la plataforma.</li>
              <li>Exigir y comprobar el origen o solicitud originaria donde obra o consta prueba inequívoca de aceptación del titular validando el consentimiento.</li>
              <li>Resultar explícitamente y verbalmente enterado, siempre a ruego expreso por parte de este titular particular, del cómo es que estamos enarbolando el uso, cesión o manipulación en tiempo cronológico bajo sus credenciales o datos recolectados propios.</li>
              <li>Desistir o <strong>Revocar tajantemente la autorización a la circulación y de contera pedir la total y terminante "supresión"</strong> informática del individuo como registro (Esta vía tiene el enorme asterisco o excepción al respecto si colisiona de frente frente a responsabilidades contractuales u obligaciones vigentes por mandato o mandato fiscal superior al paciente).</li>
              <li>Tener la libertad de acudir con reclamos sustanciados por presuntas infracciones bajo el marco técnico del caso o al Titulo de protección de Datos de la Delegatura en la Superintendencia de Industria y Comercio de Colombia.</li>
              <li>Tener acceso gratis sobre cualquiera de los datos consultados, sea por correo institucional o copias físicas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">10. Privacidad de menores</h2>
            <p>
              Las comunicaciones abiertas de nuestro dominio y formulario digital en sí mismas no son apuntadas o diseñadas en dirección y seducción de infantes o menores de dieciocho (18) años. Para que a un paciente menor de este rango civil se le admita con derecho legal formal a nuestra prestación (consulta infanto-juvenil del doctor), o por ejemplo el rellenado digital y llenado del diagnóstico por formulario previo general para valoración y admisión del preconsulta; de modo excluyente todo ese ecosistema debe y se encuentra sujeto perentoriamente de la observancia, ratificación directa en pantalla o aprobación final certificada e ininterrumplida por padres tutores, cuidadores, adultos legímitamente representantes legales que porten su certificación civil demostrable y firmada con nuestra empresa previo a los honorarios o servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">11. Enlaces a sitios externos o foráneos</h2>
            <p>
              Nuestros desarrollos frontales u orgánicos, artículos en perfiles informativos de interés público, así como el propio espacio corporativo en redes (Facebook, IG, etc.) pueden disponer accesos URL ajenos a la propiedad del consorcio de DocConmigo. Al respecto, el paciente navega abandonando nuestra propiedad raíz y la salvaguardia inherente de este Tratamiento y por lo expuesto se aconseja consultar, de mano propia, toda la Declaración, cookies, metadatos y uso comercial sobre tales plataformas donde nuestra jurisprudencia, alcance de enmiendas de garantía general u opiniones se extinguen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">12. Modificaciones o Cambio Estructural del Mandato</h2>
            <p>
              Se estipula a todos los involucrados nuestra condición facultativa de generar arreglos y enmiendas sobre estos numerales del mandato de la Política por actualización formal en Ley, rediseños a estatutos societarios o migración digital. Para cualquier variación significativa informada y trascendental (ejemplo de cesión de bases, o reventa no contemplada de empresas o variaciones del responsable del manejo), su acuse oficial deberá surtirse preferencialmente informando dentro del dominio general corporativo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">13. Contacto con el Responsable</h2>
            <p>
              Si requiere instaurar o formular dudas directas desde una condición formal al servicio para conocer en que le impacta de forma unánime un área del Tratamiento aquí dispuesta; puede remitirse a la gerencia de bases de datos mediante el remitido digital autorizado en jornada hábil:
            </p>
            <div className="bg-[#e0f0f5]/40 p-8 rounded-2xl border border-blue-100 mt-6 shadow-sm">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="font-bold text-gray-900 w-24">Entidad:</div>
                  <div className="text-gray-700">DocConmigo (Representación Medica)</div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="font-bold text-gray-900 w-24">Email (PQR):</div>
                  <div className="text-gray-700"><a href={`mailto:${contactEmail}`} className="text-blue-600 font-semibold hover:underline">{contactEmail}</a></div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="font-bold text-gray-900 w-24">Jurisdicción:</div>
                  <div className="text-gray-700">Colombia</div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
