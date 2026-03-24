import HeroSection from '@/components/sections/HeroSection';
import PainPointsSection from '@/components/sections/PainPointsSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import AboutSection from '@/components/sections/AboutSection';
import DoctorSection from '@/components/sections/DoctorSection';
import FaqSection from '@/components/sections/FaqSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  const mainSteps = [
    {
      number: "1",
      title: "Escríbeme por WhatsApp",
      description: "Me cuentas brevemente qué sientes, coordinamos un horario y te envío un formulario previo para no perder ni un minuto."
    },
    {
      number: "2",
      title: "Consulta a fondo por videollamada",
      description: "Revisamos tu historia clínica, alimentación, hábitos de sueño, estrés y todo lo que influye en tu salud. Esto no es una consulta de 10 minutos."
    },
    {
      number: "3",
      title: "Tu plan personalizado + seguimiento",
      description: "Recibes un protocolo concreto: qué comer, qué cambiar, qué suplementar. Y te acompaño para que realmente lo cumplas."
    }
  ];

  const testimonialSteps = [
    {
      initial: "M",
      image: "/testim-1.png",
      title: "Maria P.",
      subtitle: "Bogotá • Paciente desde 2023",
      description: "Después de años con problemas digestivos que nadie podía resolver, encontré respuestas reales. Mi plan personalizado cambió mi calidad de vida.",
      stars: 5,
      number: "“"
    },
    {
      initial: "C",
      image: "/testim-2.png",
      title: "Carlos R.",
      subtitle: "Medellín • Paciente desde 2022",
      description: "La consulta virtual fue súper cómoda y profesional. La Dra. Luci se tomó el tiempo de entender mi caso a fondo. Recomendado 100%.",
      stars: 5,
      number: "“"
    },
    {
      initial: "E",
      image: "/testim-3.png",
      title: "Elena M.",
      subtitle: "Cali • Paciente desde 2024",
      description: "Tenía fatiga crónica y desequilibrio hormonal. Con el enfoque funcional empecé a sentir cambios reales en pocas semanas.",
      stars: 5,
      number: "“"
    }
  ];

  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <BenefitsSection 
        subtitle="ASÍ DE SIMPLE"
        title="De 'no sé qué me pasa' a un plan claro en 3 pasos"
        description="Sin filas, sin desplazamientos, sin perder el día entero en una sala de espera."
        items={mainSteps}
      />
      <AboutSection />
      <BenefitsSection 
        id="social-proof"
        subtitle="No Me Creas A Mí — Escúchalos A Ellos"
        title="Resultados reales de personas que tomaron el control"
        description="Estas son algunas de las historias de transformación de mis pacientes."
        items={testimonialSteps}
        backgroundColor="bg-white"
        showArrow={true}
      />
      <DoctorSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
