import type { Metadata } from "next";
import FormularioTypeform from "@/components/sections/FormularioTypeform";

export const metadata: Metadata = {
  title: "Formulario de Evaluación | docconmigo",
  description: "Completa este rápido cuestionario para entender mejor tu caso y agendar una consulta personalizada de medicina funcional.",
};

export default function FormularioPage() {
  return (
    <main>
      <FormularioTypeform />
    </main>
  );
}
