"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowRight,
    CheckCircle2,
    Globe,
    MonitorSmartphone,
    Rocket,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: 1,
        title: "Sistema digital para tu negocio",
        description:
            "Integra gestión, página web y menú o catálogo digital en una sola solución para vender mejor y operar con más orden.",
        points: [
            "Sistema + web + menú/catálogo",
            "WhatsApp, pedidos o citas integrados",
            "Ideal para negocios que quieren crecer",
        ],
        buttonLabel: "Quiero este servicio",
        whatsappNumber: "5210000000000",
        whatsappMessage:
            "Hola, me interesa el sistema digital con página web y menú o catálogo para mi negocio. Quiero más información.",
        featured: true,
    },
    {
        id: 2,
        title: "Página web para atraer clientes",
        description:
            "Una web profesional pensada para transmitir confianza, mostrar tus servicios y convertir visitas en mensajes o ventas.",
        points: [
            "Diseño moderno y responsive",
            "Enfoque en conversión",
            "WhatsApp y formularios visibles",
        ],
        buttonLabel: "Cotizar página web",
        whatsappNumber: "5210000000000",
        whatsappMessage:
            "Hola, quiero una página web profesional para mi negocio. Me gustaría cotizar.",
    },
    {
        id: 3,
        title: "Rediseño y optimización web",
        description:
            "Si tu sitio se ve antiguo, lento o no convence, lo renovamos para que se vea mejor y funcione a favor de tu negocio.",
        points: [
            "Mejor diseño y estructura",
            "Optimización mobile y velocidad",
            "Más claridad y mejor impacto",
        ],
        buttonLabel: "Mejorar mi sitio",
        whatsappNumber: "5210000000000",
        whatsappMessage:
            "Hola, quiero mejorar o rediseñar mi página web actual. Me interesa una cotización.",
    },
];

export function ServicesSection() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            if (!prefersReducedMotion) {
                gsap.fromTo(
                    ".services-header",
                    { y: 32, opacity: 0 },
                    {
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top 85%",
                        },
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                    }
                );

                gsap.fromTo(
                    ".service-row",
                    { y: 28, opacity: 0 },
                    {
                        scrollTrigger: {
                            trigger: ".services-list",
                            start: "top 88%",
                        },
                        y: 0,
                        opacity: 1,
                        duration: 0.65,
                        stagger: 0.1,
                        ease: "power3.out",
                    }
                );
            }
        },
        { scope: containerRef }
    );

    return (
        <section
            id="services"
            ref={containerRef}
            className="relative z-10 overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-10 lg:px-12"
        >
            {/* Background accents */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#D4500A]/[0.05] blur-3xl" />
                <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-[#D4500A]/[0.04] blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl">
                {/* Header */}
                <div className="services-header mx-auto mb-8 text-center sm:mb-10 md:mb-12">
                    <h2 className="w-full text-base font-semibold leading-tight tracking-tight text-[#D4500A] sm:text-lg md:text-xl">
                        Desde una página web profesional hasta una solución más completa con sistema, menú o catálogo digital para tu negocio.
                    </h2>
                </div>

                {/* Compact services list */}
                <div className="services-list space-y-4">
                    {services.map((service) => {
                        const whatsappLink = `https://wa.me/${service.whatsappNumber}?text=${encodeURIComponent(
                            service.whatsappMessage
                        )}`;

                        return (
                            <article
                                key={service.id}
                                className={`service-row group relative overflow-hidden rounded-[1.5rem] border p-4 sm:p-5 md:p-6 transition-all duration-300 ${service.featured
                                    ? "border-[#D4500A]/15 bg-gradient-to-r from-[#FFF8F3] via-white to-[#FFFDFB] shadow-[0_12px_40px_rgba(212,80,10,0.06)]"
                                    : "border-black/6 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[#D4500A]/15"
                                    }`}
                            >
                                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.3fr_0.9fr_0.8fr] lg:items-center">
                                    {/* Left */}
                                    <div className="min-w-0">
                                        <h3 className="text-lg font-bold leading-tight text-[#1F2937] sm:text-xl md:text-2xl">
                                            {service.title}
                                        </h3>

                                        <p className="mt-2 text-sm leading-relaxed text-[#6B7280] sm:text-[15px]">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Middle */}
                                    <div className="rounded-2xl bg-[#FAFAFA] p-4">
                                        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#D4500A] sm:text-xs">
                                            Incluye
                                        </p>

                                        <ul className="space-y-2">
                                            {service.points.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-start gap-2 text-sm text-[#374151]"
                                                >
                                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D4500A]" />
                                                    <span className="leading-snug">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Right */}
                                    <div className="flex flex-col gap-3">
                                        <a
                                            href={whatsappLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`group/btn inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300 sm:text-base ${service.featured
                                                ? "bg-[#D4500A] text-white hover:bg-[#B84308]"
                                                : "bg-[#1F2937] text-white hover:bg-[#111827]"
                                                }`}
                                        >
                                            {service.buttonLabel}
                                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                        </a>

                                        <p className="text-center text-xs leading-relaxed text-[#9CA3AF]">
                                            Respuesta rápida • Sin compromiso
                                        </p>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 rounded-[1.5rem] border border-[#D4500A]/10 bg-[#FFF8F3] p-4 sm:mt-10 sm:p-5">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-sm font-semibold text-[#1F2937] sm:text-base">
                                ¿No sabes cuál opción es la ideal para tu negocio?
                            </p>
                            <p className="mt-1 text-sm text-[#6B7280]">
                                Te orientamos según tu giro, tus objetivos y lo que realmente necesitas.
                            </p>
                        </div>

                        <a
                            href={`https://wa.me/5210000000000?text=${encodeURIComponent(
                                "Hola, quiero que me orienten sobre cuál servicio es el más adecuado para mi negocio."
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl border border-[#D4500A]/15 bg-white px-5 py-3 text-sm font-semibold text-[#D4500A] transition-all duration-300 hover:border-[#D4500A]/30 hover:bg-[#FFFDFB]"
                        >
                            Ayúdenme a elegir
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}