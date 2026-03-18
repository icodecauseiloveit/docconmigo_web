export default function PoliticaCookies() {
  return (
    <div className="py-24 bg-gray-50 min-h-[calc(100vh-16rem)] flex justify-center">
      <div className="container mx-auto px-4 max-w-3xl bg-white p-8 md:p-12 shadow-sm border border-gray-100 rounded-2xl">
        <h1 className="text-3xl font-bold text-secondary mb-8">Política de Cookies</h1>
        
        <div className="prose prose-sm md:prose-base text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo (ordenador, tablet o móvil) cuando usted los visita. Sirven para recordar sus preferencias y mejorar su experiencia de navegación.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">Tipos de cookies que utilizamos</h2>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Cookies técnicas:</strong> Esenciales para el funcionamiento básico de nuestro sitio web y la navegación fluida.</li>
              <li><strong>Cookies de análisis:</strong> (Ej. Google Analytics) Nos permiten cuantificar el número de usuarios y entender cómo interactúan con la página, con el fin de mejorar nuestros servicios.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">¿Cómo desactivarlas?</h2>
            <p>
              Usted puede restringir, bloquear o borrar las cookies de este sitio web desde la configuración de su navegador en cualquier momento. Sin embargo, si desactiva las cookies, es posible que algunas funcionalidades dejen de funcionar correctamente.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
