"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Flame, CheckCheck } from 'lucide-react';
import { saveFormSubmission } from '@/app/formulario/actions';

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

type Question = {
  id: number;
  type: 'text' | 'radio' | 'contact' | 'textarea';
  question: string;
  description?: string;
  key: string;
  options?: string[];
  fields?: { label: string; key: string; type: string; placeholder: string }[];
};

const questions: Question[] = [
  {
    id: 1,
    type: 'textarea',
    question: "¿Qué te gustaría mejorar en tu salud en este momento?",
    description: "Cuéntanos brevemente qué te preocupa.",
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
    question: "¿Estás dispuesto(a) a hacer cambios en tu estilo de vida?",
    description: "La consulta se enfoca en hábitos y nutrición, no solo medicamentos.",
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
    question: "La consulta se realiza de forma 100% virtual. ¿Puedes atender la videollamada por Google Meet?",
    key: 'preferencia_modalidad',
    options: ["Sí, no tengo problema con que sea virtual", "Preferiría que fuera presencial"]
  },
  {
    id: 9,
    type: 'contact',
    question: "Déjanos tus datos para contactarte:",
    key: 'datos_contacto',
    fields: [
      { label: "Nombre", key: 'nombre', type: 'text', placeholder: 'Tu nombre completo' },
      { label: "WhatsApp", key: 'whatsapp', type: 'tel', placeholder: 'Ej: 3001234567' },
      { label: "Email", key: 'email', type: 'email', placeholder: 'tu@correo.com' }
    ]
  },
  {
    id: 10,
    type: 'textarea',
    question: "¿Qué te motivó a buscar ayuda en este momento?",
    description: "Opcional — cuéntanos ese 'click' que te trajo aquí.",
    key: 'motivacion_extra'
  }
];

export default function FormularioTypeform() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [isHotLead, setIsHotLead] = useState(false);

  const totalSteps = questions.length;

  const goNext = () => {
    if (currentStep < totalSteps - 1) {
      setDirection(1);
      setCurrentStep(s => s + 1);
    } else {
      const hot =
        answers['compromiso'] === "Muy comprometido, quiero empezar ya" &&
        answers['urgencia'] === "Es una prioridad urgente" &&
        answers['inversion'] === "Sí";
      setIsHotLead(hot);
      setIsCompleted(true);
      // Save to Supabase
      saveFormSubmission(answers, hot).then((res: { success: boolean; error?: string }) => {
        if (!res.success) {
          console.error("Failed to save submission:", res.error);
        } else {
          console.log("Form saved to Supabase successfully.");
        }
      });
    }
  };

  const goPrev = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(s => s - 1);
    }
  };

  const handleRadioSelect = (option: string, key: string) => {
    setAnswers(prev => ({ ...prev, [key]: option }));
    setTimeout(goNext, 350);
  };

  const handleWhatsApp = () => {
    const phone = "573025261619";
    const nombre = answers['nombre'] || "Paciente";
    let msg = `Hola docconmigo, soy *${nombre}*. Completé el formulario en la web:\n\n`;
    msg += `*WhatsApp:* ${answers['whatsapp'] || '—'}\n`;
    msg += `*Email:* ${answers['email'] || '—'}\n`;
    msg += `*Problema:* ${answers['objetivo_salud'] || '—'}\n`;
    msg += `*Tiempo:* ${answers['tiempo_problema'] || '—'}\n`;
    msg += `*Compromiso:* ${answers['compromiso'] || '—'}\n`;
    msg += `*Urgencia:* ${answers['urgencia'] || '—'}\n`;
    msg += `*Inversión:* ${answers['inversion'] || '—'}\n`;
    msg += `*Modalidad:* ${answers['preferencia_modalidad'] || '—'}\n`;
    if (answers['motivacion_extra']) msg += `\n*Motivación:* ${answers['motivacion_extra']}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  // ─── Completion Screen ───────────────────────────────────────────────────────
  if (isCompleted) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg w-full text-center"
        >
          <div className="mb-8 flex justify-center">
            {isHotLead ? (
              <div className="bg-orange-500/20 rounded-full p-5">
                <Flame className="h-14 w-14 text-orange-400" />
              </div>
            ) : (
              <div className="bg-white/10 rounded-full p-5">
                <CheckCheck className="h-14 w-14 text-white" />
              </div>
            )}
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            {isHotLead ? "¡Eres el paciente ideal para docconmigo!" : "¡Gracias por compartir tu historia!"}
          </h2>
          <p className="text-white/60 text-xl mb-10">
            {isHotLead
              ? "Tu compromiso indica que estás listo para un cambio real. Queremos atenderte de forma prioritaria."
              : "Hemos recibido tus respuestas. El siguiente paso es hablar por WhatsApp."}
          </p>
          <button
            onClick={handleWhatsApp}
            className="w-full bg-white text-[#1a1a1a] font-bold py-5 rounded-2xl text-xl shadow-xl transition-all hover:bg-white/90 flex items-center justify-center gap-3"
          >
            Hablar por WhatsApp
            <Send className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    );
  }

  const q = questions[currentStep];
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const variants = {
    enter: (d: number) => ({ opacity: 0, y: d > 0 ? 40 : -40 }),
    center: { opacity: 1, y: 0 },
    exit: (d: number) => ({ opacity: 0, y: d > 0 ? -40 : 40 }),
  };

  // ─── Main Form ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-[60]">
        <motion.div
          className="h-full bg-white/60"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Logo Header */}
      <div className="fixed top-1 left-0 w-full z-50 px-6 py-3 flex justify-center md:justify-start">
        <a href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-docconmigo-web.png" alt="docconmigo" className="h-14 w-auto object-contain" />
        </a>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-8 pt-40">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="space-y-8"
            >
              {/* Question Header */}
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex-shrink-0 bg-white/20 text-white text-sm font-bold rounded px-2 py-0.5">
                    {currentStep + 1}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    {q.question}
                  </h2>
                </div>
                {q.description && (
                  <p className="text-white/50 text-lg ml-10">{q.description}</p>
                )}
              </div>

              {/* Radio Options */}
              {q.type === 'radio' && (
                <div className="space-y-3 ml-10">
                  {q.options?.map((option, i) => (
                    <button
                      key={option}
                      onClick={() => handleRadioSelect(option, q.key)}
                      className={`w-full text-left flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all text-lg
                        ${answers[q.key] === option
                          ? 'border-white/70 bg-white/15 text-white'
                          : 'border-white/20 bg-white/5 text-white/80 hover:bg-white/10 hover:border-white/40'}`}
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-sm font-bold text-white/60">
                        {LETTERS[i]}
                      </span>
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {/* Textarea */}
              {q.type === 'textarea' && (
                <div className="ml-10 space-y-5">
                  <textarea
                    autoFocus
                    className="w-full bg-transparent border-b-2 border-white/30 text-white text-xl focus:border-white/70 outline-none transition-all min-h-[120px] resize-none placeholder:text-white/30"
                    placeholder="Escribe aquí tu respuesta..."
                    value={answers[q.key] || ''}
                    onChange={(e) => setAnswers(prev => ({ ...prev, [q.key]: e.target.value }))}
                  />
                  <button
                    onClick={goNext}
                    disabled={currentStep !== 9 && !answers[q.key]}
                    className="bg-white text-[#1a1a1a] px-8 py-3 rounded-xl font-bold text-lg transition-all hover:bg-white/90 disabled:opacity-30"
                  >
                    OK ✓
                  </button>
                  <p className="text-white/30 text-sm">o presiona <kbd className="bg-white/10 px-2 py-0.5 rounded">Enter ↵</kbd></p>
                </div>
              )}

              {/* Contact Fields */}
              {q.type === 'contact' && (
                <div className="ml-10 space-y-6">
                  {q.fields?.map((field) => (
                    <div key={field.key} className="space-y-1">
                      <label className="text-white/50 text-sm font-semibold uppercase tracking-widest">{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full bg-transparent border-b-2 border-white/30 text-white text-xl focus:border-white/70 outline-none transition-all py-2 placeholder:text-white/20"
                        value={answers[field.key] || ''}
                        onChange={(e) => setAnswers(prev => ({ ...prev, [field.key]: e.target.value }))}
                      />
                    </div>
                  ))}
                  <button
                    onClick={goNext}
                    disabled={!answers['nombre'] || !answers['whatsapp']}
                    className="bg-white text-[#1a1a1a] px-8 py-3 rounded-xl font-bold text-lg mt-4 transition-all hover:bg-white/90 disabled:opacity-30"
                  >
                    Continuar →
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="p-8 flex justify-between items-center max-w-2xl mx-auto w-full">
        <button
          onClick={goPrev}
          className={`text-white/40 hover:text-white/70 font-medium transition-all text-sm ${currentStep === 0 ? 'invisible' : ''}`}
        >
          ↑ Anterior
        </button>
        <span className="text-white/30 text-sm">{currentStep + 1} / {totalSteps}</span>
        {q.type === 'radio' && (
          <span className="text-white/30 text-sm invisible">ok</span>
        )}
      </div>
    </div>
  );
}
