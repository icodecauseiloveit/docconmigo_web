"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Send, CheckCircle2, Flame } from 'lucide-react';

type Question = {
  id: number;
  type: 'text' | 'radio' | 'contact' | 'textarea';
  question: string;
  description?: string;
  key: string;
  options?: string[];
  fields?: { label: string; key: string; type: string }[];
};

const questions: Question[] = [
  {
    id: 1,
    type: 'textarea',
    question: "¿Qué te gustaría mejorar en tu salud en este momento?",
    description: "Cuéntanos brevemente qué te preocupa o qué dolor estás sintiendo.",
    key: 'objetivo_salud'
  },
  {
    id: 2,
    type: 'radio',
    question: "¿Desde hace cuánto presentas este problema?",
    key: 'tiempo_problema',
    options: ["Menos de 1 mes", "1 a 6 meses", "Más de 6 meses", "Años"]
  },
  {
    id: 3,
    type: 'radio',
    question: "¿Has intentado alguna solución antes?",
    key: 'intentos_previos',
    options: ["Sí, varias y no me han funcionado", "Sí, pero sin resultados claros", "No, sería mi primera vez"]
  },
  {
    id: 4,
    type: 'radio',
    question: "¿Qué tan comprometido estás en mejorar tu salud?",
    key: 'compromiso',
    options: ["Muy comprometido, quiero empezar ya", "Interesado, pero quiero más información", "Solo estoy explorando opciones"]
  },
  {
    id: 5,
    type: 'radio',
    question: "La consulta se enfoca en cambios de hábitos y nutrición, no solo medicamentos. ¿Estás dispuesto(a) a hacer cambios en tu estilo de vida?",
    key: 'disposicion_cambio',
    options: ["Sí, totalmente", "Depende de lo que implique", "No mucho"]
  },
  {
    id: 6,
    type: 'radio',
    question: "¿Qué tan importante es para ti resolver esto ahora?",
    key: 'urgencia',
    options: ["Es una prioridad urgente", "Importante, pero puede esperar", "Solo estoy evaluando"]
  },
  {
    id: 7,
    type: 'radio',
    question: "¿Estás dispuesto(a) a invertir en tu salud si el enfoque es adecuado para ti?",
    key: 'inversion',
    options: ["Sí", "Tal vez", "No"]
  },
  {
    id: 8,
    type: 'radio',
    question: "¿Prefieres consulta virtual o presencial?",
    key: 'preferencia_modalidad',
    options: ["Virtual", "Presencial", "Indiferente"]
  },
  {
    id: 9,
    type: 'contact',
    question: "Déjanos tus datos para contactarte:",
    key: 'datos_contacto',
    fields: [
      { label: "Nombre", key: 'nombre', type: 'text' },
      { label: "WhatsApp", key: 'whatsapp', type: 'tel' },
      { label: "Email", key: 'email', type: 'email' }
    ]
  },
  {
    id: 10,
    type: 'textarea',
    question: "¿Qué te motivó a buscar ayuda en este momento?",
    description: "(Opcional) Cuéntanos qué fue ese 'click' que te trajo aquí hoy.",
    key: 'motivacion_extra'
  }
];

export default function FormularioTypeform() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [isHotLead, setIsHotLead] = useState(false);

  const totalSteps = questions.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      finishForm();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const finishForm = () => {
    // Lógica Lead Caliente 🔥
    const hotCompromiso = answers['compromiso'] === "Muy comprometido, quiero empezar ya";
    const hotUrgencia = answers['urgencia'] === "Es una prioridad urgente";
    const hotInversion = answers['inversion'] === "Sí";

    if (hotCompromiso && hotUrgencia && hotInversion) {
      setIsHotLead(true);
    }
    
    setIsCompleted(true);
  };

  const handleWhatsApp = () => {
    const phone = "573025261619";
    const nombre = answers['nombre'] || "Paciente";
    
    let message = `Hola docconmigo, soy *${nombre}*. Acabo de completar el formulario en la web:\n\n`;
    message += `*Problema:* ${answers['objetivo_salud']}\n`;
    message += `*Tiempo:* ${answers['tiempo_problema']}\n`;
    message += `*Compromiso:* ${answers['compromiso']}\n`;
    message += `*Prioridad:* ${answers['urgencia']}\n`;
    message += `*Inversión:* ${answers['inversion']}\n`;
    message += `*Modalidad:* ${answers['preferencia_modalidad']}\n`;
    
    if (answers['motivacion_extra']) {
      message += `\n*Motivación:* ${answers['motivacion_extra']}`;
    }

    if (isHotLead) {
      message += `\n\n🔥 *Lead de Alta Prioridad*`;
    }

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  if (isCompleted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-10 text-center border border-gray-100"
        >
          {isHotLead ? (
            <div className="mb-6 flex justify-center">
              <div className="bg-orange-100 p-4 rounded-full animate-pulse">
                <Flame className="h-12 w-12 text-orange-600" />
              </div>
            </div>
          ) : (
            <div className="mb-6 flex justify-center">
              <CheckCircle2 className="h-16 w-16 text-primary" />
            </div>
          )}
          
          <h2 className="text-3xl font-bold text-secondary mb-4">
            {isHotLead ? "¡Eres el paciente ideal para nosotros!" : "¡Gracias por compartir tu historia!"}
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            {isHotLead 
              ? "Tu compromiso y urgencia nos indican que estás listo para un cambio real. Queremos atenderte de forma prioritaria."
              : "Hemos recibido tus respuestas. Ahora el paso final es conectar por WhatsApp para agendar tu espacio."}
          </p>
          
          <button
            onClick={handleWhatsApp}
            className="w-full bg-primary hover:bg-secondary text-white font-bold py-5 rounded-2xl text-xl shadow-xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3"
          >
            Hablar por WhatsApp
            <Send className="h-6 w-6" />
          </button>
        </motion.div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <div className="min-h-screen pt-32 pb-12 bg-gray-50 flex flex-col items-center">
      {/* ProgressBar */}
      <div className="fixed top-0 left-0 w-full h-2 bg-gray-200 z-[60]">
        <motion.div 
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>

      <div className="container max-w-2xl px-6 flex-grow flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-primary font-bold text-lg">Pregunta {currentStep + 1} de {totalSteps}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary leading-tight">
                {currentQuestion.question}
              </h2>
              {currentQuestion.description && (
                <p className="text-gray-500 text-lg italic">{currentQuestion.description}</p>
              )}
            </div>

            <div className="pt-4">
              {currentQuestion.type === 'radio' && (
                <div className="space-y-3">
                  {currentQuestion.options?.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setAnswers({ ...answers, [currentQuestion.key]: option });
                        setTimeout(handleNext, 400);
                      }}
                      className={`w-full text-left p-5 rounded-2xl border-2 transition-all text-lg flex justify-between items-center group
                        ${answers[currentQuestion.key] === option 
                          ? 'border-primary bg-primary/5 text-secondary font-semibold shadow-md' 
                          : 'border-gray-200 bg-white hover:border-primary/50 text-gray-700'}`}
                    >
                      {option}
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
                        ${answers[currentQuestion.key] === option ? 'border-primary bg-primary' : 'border-gray-300'}`}>
                        {answers[currentQuestion.key] === option && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {currentQuestion.type === 'textarea' && (
                <div className="space-y-6">
                  <textarea
                    autoFocus
                    className="w-full p-6 bg-white border-2 border-gray-200 rounded-3xl text-xl focus:border-primary outline-none transition-all min-h-[180px] shadow-sm"
                    placeholder="Escribe aquí tu respuesta..."
                    value={answers[currentQuestion.key] || ''}
                    onChange={(e) => setAnswers({ ...answers, [currentQuestion.key]: e.target.value })}
                  />
                  <button 
                    disabled={!answers[currentQuestion.key] && currentStep !== 9}
                    onClick={handleNext}
                    className="bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-secondary transition-all flex items-center gap-2 float-right disabled:opacity-50"
                  >
                    Siguiente
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              )}

              {currentQuestion.type === 'contact' && (
                <div className="space-y-4">
                  {currentQuestion.fields?.map((field) => (
                    <div key={field.key} className="space-y-1">
                      <label className="text-sm font-semibold text-gray-500 ml-2">{field.label}</label>
                      <input
                        type={field.type}
                        className="w-full p-5 bg-white border-2 border-gray-200 rounded-2xl text-lg focus:border-primary outline-none transition-all"
                        placeholder={`Tu ${field.label.toLowerCase()}...`}
                        value={answers[field.key] || ''}
                        onChange={(e) => setAnswers({ ...answers, [field.key]: e.target.value })}
                      />
                    </div>
                  ))}
                  <button 
                    disabled={!answers['nombre'] || !answers['whatsapp']}
                    onClick={handleNext}
                    className="bg-primary text-white w-full py-5 rounded-2xl font-bold text-xl shadow-lg hover:bg-secondary mt-4 transition-all"
                  >
                    Continuar
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="container max-w-2xl px-6 py-8 flex justify-between items-center">
        <button
          onClick={handlePrev}
          className={`flex items-center gap-1 text-gray-400 hover:text-secondary font-medium transition-all ${currentStep === 0 ? 'invisible' : ''}`}
        >
          <ChevronLeft className="h-5 w-5" />
          Anterior
        </button>
        {currentQuestion.type !== 'radio' && currentQuestion.type !== 'contact' && currentQuestion.type !== 'textarea' && (
           <button
           onClick={handleNext}
           className="flex items-center gap-1 text-primary hover:text-secondary font-bold text-lg transition-all"
         >
           Siguiente
           <ChevronRight className="h-5 w-5" />
         </button>
        )}
      </div>
    </div>
  );
}
