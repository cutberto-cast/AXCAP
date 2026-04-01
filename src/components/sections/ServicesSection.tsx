"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { servicesData } from "@/data/services";

gsap.registerPlugin(ScrollTrigger);

export function ServicesSection() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (!prefersReducedMotion) {
            // Títulos Reveal
            gsap.from(".service-header", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            });

            // Cards stagger reveal
            gsap.from(".service-card", {
                scrollTrigger: {
                    trigger: ".services-grid",
                    start: "top 75%",
                },
                y: 60,
                opacity: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: "back.out(1.2)",
            });
        } else {
            gsap.from([".service-header", ".service-card"], {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                opacity: 0,
                duration: 0.5,
                stagger: 0.1
            });
        }
    }, { scope: containerRef });

    return (
        <section
            id="services"
            ref={containerRef}
            className="py-16 xl:py-24 px-4 md:px-12 bg-[#FFFDF8] relative z-10"
        >
            <div className="max-w-7xl mx-auto service-header mb-12 xl:mb-16 text-center">
                <h2 className="text-sm font-bold tracking-[0.2em] text-brand-primary uppercase mb-4">
                    Nuestras Soluciones
                </h2>
                <h3 className="text-4xl md:text-5xl lg:text-5xl font-black text-[#2D3748] max-w-4xl mx-auto leading-tight">
                    Herramientas digitales diseñadas para <span className="text-brand-primary">que tu negocio crezca.</span>
                </h3>
            </div>

            <div className="services-grid max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {servicesData.map((service) => (
                    <Link
                        href={`/servicios/${service.slug}`}
                        key={service.id}
                        className="service-card group bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(255,159,10,0.15)] transition-all duration-500 overflow-hidden relative flex flex-col items-center text-center transform hover:-translate-y-2 border border-gray-100"
                    >
                        {/* Blob decorativo de fondo */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-primary/10 transition-colors duration-500"></div>

                        <div className="relative z-10 flex flex-col items-center h-full w-full">
                            {/* Icon Container */}
                            <div className="w-20 h-20 mb-8 rounded-full bg-orange-50 flex items-center justify-center text-brand-primary group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 relative">
                                {/* SVG Generico basado en ID (Simplificado) */}
                                {service.id === "01" ? (
                                    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ) : (
                                    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                )}
                            </div>

                            <div className="mt-auto flex-grow flex flex-col justify-center">
                                <h4 className="text-2xl font-bold text-[#2D3748] mb-4 group-hover:text-brand-primary transition-colors duration-300">
                                    {service.title}
                                </h4>

                                <p className="text-[#718096] text-lg leading-relaxed max-w-sm mx-auto">
                                    {service.shortDescription}
                                </p>
                            </div>

                            <div className="mt-8 font-semibold text-brand-primary flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                                Descubrir más 
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
