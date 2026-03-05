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
                y: 40,
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
                y: 50,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
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
            className="py-32 px-4 md:px-12 bg-[#050508] relative z-10"
        >
            <div className="max-w-7xl mx-auto service-header mb-16 md:mb-24">
                <h2 className="text-sm font-bold tracking-[0.2em] text-brand-red uppercase mb-4">
                    Nuestras Áreas de Práctica
                </h2>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white max-w-3xl leading-tight">
                    Ingeniería de software para la próxima generación.
                </h3>
            </div>

            <div className="services-grid max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {servicesData.map((service) => (
                    <Link
                        href={`/servicios/${service.slug}`}
                        key={service.id}
                        className="service-card group relative border border-white/5 rounded-2xl p-8 transition-colors overflow-hidden block min-h-[400px]"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0">
                            <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/80 to-transparent" />
                        </div>

                        {/* Glow effect on hover */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red-dark to-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-12">
                                <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red group-hover:scale-110 transition-transform duration-500 backdrop-blur-sm">
                                    <div className="w-4 h-4 bg-brand-red rounded-sm rotate-45" />
                                </div>
                                <span className="text-5xl font-black text-white/20 group-hover:text-white/40 transition-colors duration-500">
                                    {service.id}
                                </span>
                            </div>

                            <div className="mt-auto">
                                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-red transition-colors duration-300">
                                    {service.title}
                                </h4>

                                <p className="text-muted leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                                    {service.shortDescription}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
