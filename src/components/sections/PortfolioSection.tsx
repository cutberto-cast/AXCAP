"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: "Cafecito Shop",
        category: "E-Commerce",
        tech: ["Next.js", "Tailwind"],
        image: "/image/cafecito.png",
        url: "https://cafecito.shop"
    },
    {
        id: 2,
        title: "Clínica Dental",
        category: "Landing Page",
        tech: ["Next.js", "React"],
        image: "/image/dental-clinic.png",
        url: "https://clinica-dental-landing-one.vercel.app/"
    },
    {
        id: 3,
        title: "Black Ritual Studio",
        category: "Tattoo Studio",
        tech: ["Next.js", "Tailwind"],
        image: "/image/studio-tattoo.png",
        url: "https://nocturne-tattoo.vercel.app/"
    },
    {
        id: 4,
        title: "admin cafeteria",
        category: "admin",
        tech: ["Next.js", "Tailwind"],
        image: "/image/admin-cafe.png",
    }
];

interface PortfolioSectionProps {
    variant?: 'carousel' | 'grid';
}

export function PortfolioSection({ variant = 'carousel' }: PortfolioSectionProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (!prefersReducedMotion && sectionRef.current) {
            // Header animation
            gsap.from(".portfolio-header", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            });

            if (variant === 'carousel' && marqueeRef.current) {
                // Animación de marquesina infinita
                gsap.to(marqueeRef.current, {
                    xPercent: -50,
                    duration: 35,
                    ease: "none",
                    repeat: -1,
                });
            }
        }
    }, { scope: sectionRef, dependencies: [variant] });

    return (
        <section id="portfolio" ref={sectionRef} className="py-2 md:py-2 bg-[#0A0A0E] relative w-full overflow-hidden">
            <div className="portfolio-header max-w-7xl mx-auto mb-16 px-4 md:px-12 flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-20">
                <div>
                    <h2 className="text-sm font-bold tracking-[0.2em] text-brand-red uppercase mb-4">
                        Casos de Éxito
                    </h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white max-w-2xl leading-tight">
                        Trabajo que define estándares.
                    </h3>
                </div>
                {variant === 'carousel' && (
                    <Link href="/portafolio" className="group overflow-hidden relative px-8 py-3 bg-white/5 border border-white/10 text-white font-bold tracking-wide rounded-full transition-all duration-300 backdrop-blur-sm shrink-0 hover:border-brand-red/50 flex items-center justify-center min-w-[200px]">
                        <span className="relative z-20 transition-transform duration-300 group-hover:scale-105">Ver Portafolio</span>
                        <span className="absolute w-[150%] h-[200%] -top-8 -left-2 bg-brand-red/10 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left z-0"></span>
                        <span className="absolute w-[150%] h-[200%] -top-8 -left-2 bg-brand-red/40 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left z-0"></span>
                        <span className="absolute w-[150%] h-[200%] -top-8 -left-2 bg-brand-red rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left z-0"></span>
                    </Link>
                )}
            </div>

            {variant === 'carousel' ? (
                <div className="relative w-full mt-10 md:mt-16 overflow-hidden flex items-center">

                    {/* Bordes desvanecidos */}
                    <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-[#0A0A0E] to-transparent z-20 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-[#0A0A0E] to-transparent z-20 pointer-events-none" />

                    {/* Pista animada (Track) */}
                    <div
                        ref={marqueeRef}
                        className="flex w-max gap-6 md:gap-10 px-4"
                    >
                        {/* Duplicamos el arreglo para hacer el loop infinito (Seamless loop) */}
                        {[...projects, ...projects].map((project, index) => (
                            <ProjectCard
                                key={`${project.id}-carousel-${index}`}
                                project={project}
                                className="w-[280px] md:w-[600px] shrink-0"
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="max-w-7xl mx-auto px-4 md:px-12 mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-20">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} className="w-full" />
                    ))}
                </div>
            )}
        </section>
    );
}

function ProjectCard({ project, className }: { project: any, className?: string }) {
    return (
        <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group block relative aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#111116] shadow-2xl ${className || ""}`}
        >
            {project.image && (
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized // <-- Elimina por completo el procesado/compresión de Next.js, mostrando la calidad nativa
                />
            )}

            {/* Gradiente sutil solo en la parte inferior para que el texto sea visible sin opacar la imagen */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

            <div className="absolute inset-x-0 bottom-0 p-5 md:p-8 flex flex-col justify-end transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-brand-red font-bold mb-1 md:mb-2 text-shadow-sm">
                    {project.category}
                </span>
                <h4 className="text-xl md:text-3xl font-black text-white text-shadow-md">
                    {project.title}
                </h4>

                {/* Pill tags: visibles al pasar el mouse por encima */}
                <ul className="flex flex-wrap gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.tech.map((tech: string) => (
                        <li key={tech} className="text-[9px] md:text-[11px] font-mono bg-white/20 backdrop-blur-sm px-3 py-1 rounded-sm text-white/95">
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
        </a>
    )
}
