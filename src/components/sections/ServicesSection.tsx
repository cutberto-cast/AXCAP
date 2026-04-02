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
            gsap.from(".service-header", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            gsap.from(".service-card", {
                scrollTrigger: {
                    trigger: ".services-grid",
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
            });
        }
    }, { scope: containerRef });

    return (
        <section
            id="services"
            ref={containerRef}
            className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-white relative z-10 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto relative z-20">
                {/* Header */}
                <div className="service-header mb-10 sm:mb-14 text-center">
                    <h2 className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#D4500A] uppercase mb-3">
                        Nuestras Soluciones
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#2D3748] max-w-3xl mx-auto leading-[1.15] tracking-tight">
                        Herramientas digitales diseñadas para que tu negocio crezca.
                    </h3>
                </div>

                {/* Cards Grid */}
                <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {servicesData.map((service) => (
                        <Link
                            href={`/servicios/${service.slug}`}
                            key={service.id}
                            className="service-card group relative p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] bg-[#FFF8F3] border border-[#D4500A]/10 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_48px_-12px_rgba(212,80,10,0.15)] hover:border-[#D4500A]/25 flex flex-col"
                        >
                            <div className="relative z-10 flex flex-col h-full">
                                {/* Icon */}
                                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-5 rounded-xl bg-[#D4500A] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#D4500A]/20">
                                    {service.id === "01" ? (
                                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    )}
                                </div>

                                <h4 className="text-lg sm:text-xl font-semibold text-[#2D3748] mb-2 leading-tight">
                                    {service.title}
                                </h4>

                                <p className="text-[#718096] text-sm sm:text-base leading-relaxed mb-5 flex-grow">
                                    {service.shortDescription}
                                </p>

                                <div className="font-semibold text-[#D4500A] flex items-center gap-2 group-hover:gap-3 transition-all duration-300 text-sm">
                                    Descubrir más
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

