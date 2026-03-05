"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
    { id: "01", title: "Discovery", desc: "Análisis inicial, investigación de mercado y definición de objetivos" },
    { id: "02", title: "Estrategia", desc: "Planificación técnica, arquitectura de información y roadmap" },
    { id: "03", title: "Diseño", desc: "Wireframes, prototipos y sistema de diseño visual" },
    { id: "04", title: "Desarrollo", desc: "Implementación técnica con el stack tecnológico seleccionado" },
    { id: "05", title: "Optimización", desc: "Testing, performance, SEO y ajustes pre-lanzamiento" },
    { id: "06", title: "Lanzamiento", desc: "Despliegue, monitoreo y soporte post-lanzamiento" },
];

export function ProcessSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const scrollWrapperRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (!prefersReducedMotion && scrollWrapperRef.current) {
            const sections = gsap.utils.toArray(".process-step");

            // Calculate total scroll distance based on number of items
            const totalWidth = scrollWrapperRef.current.scrollWidth;
            const amountToScroll = totalWidth - window.innerWidth;

            gsap.to(sections, {
                x: () => -amountToScroll,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    end: () => `+=${amountToScroll}`,
                }
            });
        }
    }, { scope: sectionRef });

    return (
        <section
            id="process"
            ref={sectionRef}
            className="bg-black text-white h-screen flex flex-col justify-center overflow-hidden relative w-full max-w-[100vw]"
        >
            <div className="absolute top-12 md:top-24 left-4 md:left-12 z-10 w-full pr-8 max-w-7xl mx-auto">
                <h2 className="text-sm font-bold tracking-[0.2em] text-brand-red uppercase mb-4">
                    Nuestro Método
                </h2>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black max-w-2xl leading-tight">
                    De la idea a la ejecución perfecta.
                </h3>
            </div>

            {/* Horizontal Scroll Wrapper */}
            <div
                ref={scrollWrapperRef}
                className="flex mt-32 md:mt-48 px-4 md:px-12 gap-8 md:gap-16 w-max flex-nowrap"
            >
                {processSteps.map((step) => (
                    <div
                        key={step.id}
                        className="process-step w-[85vw] md:w-[400px] flex-shrink-0 flex flex-col pt-12 relative"
                    >
                        {/* Timeline Line */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20">
                            <div className="h-full bg-brand-red w-full scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100" />
                        </div>

                        {/* Progress Node */}
                        <div className="absolute top-[-6px] left-0 w-3 h-3 rounded-full bg-brand-red shadow-[0_0_15px_rgba(225,6,0,0.5)]" />

                        <span className="text-brand-red font-bold text-xl mb-4">{step.id}</span>
                        <h4 className="text-3xl font-black mb-4">{step.title}</h4>
                        <p className="text-muted leading-relaxed text-lg">{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
