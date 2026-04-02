"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
    { id: "01", title: "Entendemos tu Negocio", desc: "Platicamos contigo para entender qué vendes, a quién le vendes y qué imagen quieres dar." },
    { id: "02", title: "Propuesta Visual", desc: "Te presentamos un diseño profesional adaptado a los colores y estilo de tu marca." },
    { id: "03", title: "Construcción", desc: "Armamos tu sistema o web para que funcione perfecto y rápido en cualquier celular." },
    { id: "04", title: "Revisión Final", desc: "Nos aseguramos de que los botones de WhatsApp, formularios y catálogos funcionen sin fallas." },
    { id: "05", title: "Entrega y Capacitación", desc: "Te damos las llaves de tu nuevo portal y te enseñamos a usarlo si es autoadministrable." },
    { id: "06", title: "Resultados", desc: "Tu negocio ya está en internet, listo para atrapar nuevos clientes todos los días." },
];

export function ProcessSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (!prefersReducedMotion && sectionRef.current) {
            gsap.from(".process-header", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            gsap.from(".process-card", {
                scrollTrigger: {
                    trigger: ".process-grid",
                    start: "top 80%",
                },
                y: 40,
                opacity: 0,
                duration: 0.7,
                stagger: 0.12,
                ease: "power3.out",
            });
        }
    }, { scope: sectionRef });

    return (
        <section
            id="process"
            ref={sectionRef}
            className="py-20 px-4 sm:px-6 md:px-12 bg-white relative z-10 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto relative z-20">
                {/* Header */}
                <div className="process-header mb-12 sm:mb-16 text-center">
                    <h2 className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#D4500A] uppercase mb-3">
                        Cómo Trabajamos
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#2D3748] max-w-3xl mx-auto leading-[1.15] tracking-tight">
                        Sin tecnicismos. Así de fácil es lanzar tu portal.
                    </h3>
                </div>

                {/* Vertical Timeline for Mobile, Grid for Desktop */}
                <div className="process-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {processSteps.map((step, index) => (
                        <div
                            key={step.id}
                            className="process-card group relative"
                        >
                            <div className="relative p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-[#FFF8F3] border border-[#D4500A]/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_48px_-12px_rgba(212,80,10,0.15)] hover:border-[#D4500A]/25 h-full flex flex-col">
                                {/* Connecting Line (desktop only) */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-gradient-to-r from-[#D4500A]/30 to-[#D4500A]/10 z-0" />
                                )}

                                {/* Step Number */}
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#D4500A] flex items-center justify-center text-white font-bold text-sm sm:text-base mb-5 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#D4500A]/20">
                                    {step.id}
                                </div>

                                <h4 className="text-lg sm:text-xl font-semibold text-[#2D3748] mb-3 leading-tight">
                                    {step.title}
                                </h4>

                                <p className="text-[#718096] text-sm sm:text-base leading-relaxed flex-grow">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
