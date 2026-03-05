"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const technologies = [
    { name: "Next.js", label: "Framework" },
    { name: "React", label: "UI Library" },
    { name: "TypeScript", label: "Language" },
    { name: "Supabase", label: "Backend" },
    { name: "Tailwind CSS", label: "Styling" },
    { name: "GSAP", label: "Animation" },
    { name: "Three.js", label: "3D Graphics" },
    { name: "Vercel", label: "Deployment" },
    { name: "Node.js", label: "Runtime" },
    { name: "Python", label: "Data/AI" },
];

export function TechStackSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        // Animación de entrada de los items
        gsap.fromTo(".tech-item",
            {
                y: 30,
                opacity: 0
            },
            {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: !prefersReducedMotion ? "back.out(1.7)" : "power2.out",
            }
        );

    }, { scope: sectionRef });

    return (
        <section id="tech-stack" ref={sectionRef} className="py-24 md:py-32 px-4 md:px-12 bg-black relative z-10 w-full overflow-hidden border-t border-white/5 border-b">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-24">

                <div className="w-full md:w-1/3 text-center md:text-left">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-brand-red uppercase mb-4">
                        Tecnologías Base
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                        Ingeniería sobre el mejor stack del mercado.
                    </h3>
                </div>

                <div className="w-full md:w-2/3">
                    {/* Grid adaptativo para logos/badges */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                        {technologies.map((tech) => (
                            <div
                                key={tech.name}
                                className="tech-item group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-red/50 transition-all duration-300"
                            >
                                {/* Glow sutil rojo en hover */}
                                <div className="absolute inset-0 rounded-2xl bg-brand-red/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                                {/* Placeholder visual del logo (se reemplazaría por SVG/Image real) */}
                                <span className="text-2xl md:text-3xl font-black text-white/40 group-hover:text-white transition-colors duration-300 mb-2">
                                    {tech.name[0]}
                                </span>

                                <span className="text-white font-bold text-sm text-center group-hover:text-brand-red transition-colors duration-300">
                                    {tech.name}
                                </span>
                                <span className="text-muted text-[10px] tracking-wider uppercase mt-1">
                                    {tech.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
