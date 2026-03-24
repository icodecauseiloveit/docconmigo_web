import type { Metadata } from "next";
import ConsultaNavbar from "@/components/consulta/ConsultaNavbar";
import ConsultaHero from "@/components/consulta/ConsultaHero";
import ConsultaProblems from "@/components/consulta/ConsultaProblems";
import ConsultaHowItWorks from "@/components/consulta/ConsultaHowItWorks";
import ConsultaBenefits from "@/components/consulta/ConsultaBenefits";
import ConsultaTestimonials from "@/components/consulta/ConsultaTestimonials";
import ConsultaDoctor from "@/components/consulta/ConsultaDoctor";
import ConsultaFAQ from "@/components/consulta/ConsultaFAQ";
import ConsultaFinalCTA from "@/components/consulta/ConsultaFinalCTA";

export const metadata: Metadata = {
  title: "Consulta de Medicina Funcional — Dra. Luci Cortez",
  description: "Consulta 100% virtual de medicina funcional para encontrar la causa real de lo que sientes. 16 años de experiencia médica.",
};

export default function ConsultaPage() {
  return (
    <div className="font-['Outfit',sans-serif] selection:bg-[#5a7a64] selection:text-white">
      <ConsultaNavbar />
      <main>
        <ConsultaHero />
        <ConsultaProblems />
        <ConsultaHowItWorks />
        <ConsultaBenefits />
        <ConsultaTestimonials />
        <ConsultaDoctor />
        <ConsultaFAQ />
        <ConsultaFinalCTA />
      </main>
    </div>
  );
}
