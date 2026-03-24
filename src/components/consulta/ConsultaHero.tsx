"use client";

import { useEffect, useState } from "react";

export default function ConsultaHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-30 pb-20 px-6 relative overflow-hidden bg-[#faf8f4]">
      {/* Decorative Gradients */}
      <div 
        className="absolute -top-[30%] -right-[15%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(90,122,100,0.08) 0%, transparent 70%)' }}
      ></div>
      <div 
        className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,162,101,0.06) 0%, transparent 70%)' }}
      ></div>

      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-15 items-center w-full">
        <div className="hero-content">
          <div className={`hero-badge flex items-center gap-2 bg-[#e8f0ea] text-[#3d5a45] px-4.5 py-2 rounded-full text-[13px] font-semibold tracking-wider mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}>
            <span className="w-2 h-2 bg-[#5a7a64] rounded-full animate-pulse"></span>
            CONSULTA 100% VIRTUAL — DESDE CUALQUIER CIUDAD
          </div>
          
          <h1 className={`font-serif text-[clamp(36px,5.5vw,56px)] font-black leading-[1.15] text-[#2c4333] mb-5 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}>
            16 años de experiencia médica para encontrar <em className="italic text-[#5a7a64] not-italic">la causa real</em> de lo que sientes.
          </h1>
          
          <p className={`text-[18px] text-[#6b6b6b] leading-[1.7] mb-8 max-w-[480px] font-light transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}>
            En lugar de darte otra receta que tapa síntomas, analizo tu alimentación, hábitos y estilo de vida para diseñar un plan que ataque el origen del problema. Todo por videollamada, sin filas, sin desplazamientos.
          </p>
          
          <div className={`flex flex-wrap gap-4 mb-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}>
            <a 
              href="https://wa.me/57XXXXXXXXXX?text=%20Dra.%20Luci%20quiero%20agendar%20una%20consulta%20de%20medicina%20funcional" 
              className="inline-flex items-center gap-2.5 bg-[#25d366] hover:bg-[#1fb855] text-white px-8 py-4 rounded-full font-semibold text-[16px] transition-all transform hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.4)]"
            >
              <svg className="w-5.5 h-5.5 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Escribir por WhatsApp →
            </a>
            <a href="#como-funciona" className="inline-flex items-center gap-2 bg-transparent text-[#3d5a45] px-7 py-4 rounded-full font-semibold text-[16px] border-2 border-[#a3bfab] hover:border-[#5a7a64] hover:bg-[#e8f0ea] transition-all">
              Ver cómo funciona ↓
            </a>
          </div>
          
          <div className={`flex flex-col gap-3 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}>
            {[
              "Médica certificada — Reg. 9724",
              "16 años de experiencia clínica",
              "6 años en medicina funcional"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2 text-[14px] text-[#6b6b6b]">
                <svg className="w-[18px] h-[18px] text-[#5a7a64]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className={`relative flex justify-center items-center py-7 px-12 transition-all duration-700 delay-300 order-first md:order-last ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}>
          <div className="bg-white rounded-[24px] p-10 shadow-[0_12px_40px_rgba(0,0,0,0.12)] relative w-full max-w-[400px] animate-[float_6s_ease-in-out_infinite]">
            <div className="w-full h-[260px] bg-gradient-to-br from-[#e8f0ea] to-[#f5f0e8] rounded-[16px] mb-5 flex items-center justify-center text-[14px] text-[#5a7a64] font-medium text-center p-5 border-2 border-dashed border-[#a3bfab]">
              <img 
                src="/logo-docconmigo-web.png" 
                alt="Logo" 
                className="opacity-50 grayscale contrast-125 transition-all hover:grayscale-0 hover:opacity-100"
              />
            </div>
            <h3 className="font-['Playfair_Display',serif] text-[20px] text-[#2c4333] mb-1">Dra. Luci Cortez</h3>
            <p className="text-[#6b6b6b] text-[14px] mb-3">Médica Funcional · Máster en Nutrición</p>
            <div className="flex flex-wrap gap-1.5">
              {["Medicina Funcional", "Nutrición y Epigenética", "Cambio de Hábitos"].map((tag, i) => (
                <span key={i} className="bg-[#e8f0ea] text-[#3d5a45] px-3 py-1 rounded-full text-[12px] font-medium whitespace-nowrap">
                  {tag}
                </span>
              ))}
            </div>

            {/* Floating Badges */}
            <div className={`absolute -top-5 -right-12 bg-white rounded-[14px] p-3 px-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center gap-2.5 text-[13px] font-medium transition-all duration-500 delay-800 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="w-9 h-9 bg-[#e8f0ea] rounded-[10px] flex items-center justify-center text-[18px]">🩺</div>
              <span>100% Virtual</span>
            </div>
            <div className={`absolute -bottom-4 -left-12 bg-white rounded-[14px] p-3 px-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center gap-2.5 text-[13px] font-medium transition-all duration-500 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="w-9 h-9 bg-[#f5eedf] rounded-[10px] flex items-center justify-center text-[18px]">⭐</div>
              <span>5.0 — Pacientes reales</span>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .hero-badge::before {
          content: '';
          width: 8px;
          height: 8px;
          background: #5a7a64;
          border-radius: 50%;
          animation: pulse 2s ease infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}
