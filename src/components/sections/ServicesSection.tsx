"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CheckCircle2, Globe, LayoutDashboard, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: 1,
        icon: Globe,
        title: "Páginas web que sí generan clientes",
        badge: "Más solicitado",
        description:
            "Diseñadas para causar una gran primera impresión, transmitir confianza y convertir visitas en mensajes o ventas.",
        includes: [
            "Diseño premium y responsive",
            "Copy estratégico orientado a conversión",
            "WhatsApp, formularios y CTAs visibles",
            "Optimización de velocidad y mobile",
        ],
        result: "Tu negocio se ve profesional y listo para vender.",
        whatsappNumber: "5210000000000",
        whatsappMessage:
            "Hola, quiero una página web profesional para mi negocio. Me interesa recibir una cotización.",
    },
    {
        id: 2,
        icon: LayoutDashboard,
        title: "Landing pages para campañas y promociones",
        badge: "Alta conversión",
        description:
            "Perfectas para anuncios, lanzamientos o promociones específicas. Menos distracción, más conversiones.",
        includes: [
            "Estructura enfocada en resultados",
            "Secciones persuasivas y CTA directo",
            "Integración con WhatsApp o formularios",
            "Ideal para campañas en Facebook/Instagram",
        ],
        result: "Más mensajes, más leads, más oportunidades de venta.",
        whatsappNumber: "5210000000000",
        whatsappMessage:
            "Hola, quiero una landing page para promocionar un servicio o campaña. Me gustaría cotizar.",
    },
    {
        id: 3,
        icon: Rocket,
        title: "Optimización y rediseño de sitios web",
        badge: "Mejora inmediata",
        description:
            "Si tu web se ve vieja, lenta o no convierte, la renovamos para que se vea actual, clara y lista para vender.",
        includes: [
            "Rediseño visual y mejor UX",
            "Mejora de velocidad y estructura",
            "Reordenamiento de contenido",
            "Enfoque en confianza y conversión",
        ],
        result: "Convierte una web que estorba en una web que ayuda a vender.",
        whatsappNumber: "5210000000000",
        whatsappMessage:
            "Hola, quiero mejorar o rediseñar mi página web actual. ¿Me pueden cotizar?",
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
                    { y: 40, opacity: 0 },
                    {
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top 85%",
                        },
                        y: 0,
                        opacity: 1,
                        duration: 0.9,
                        ease: "power3.out",
                    }
                );

                gsap.fromTo(
                    ".service-card",
                    { y: 40, opacity: 0 },
                    {
                        scrollTrigger: {
                            trigger: ".services-grid",
                            start: "top 85%",
                        },
                        y: 0,
                        opacity: 1,
                        duration: 0.75,
                        stagger: 0.12,
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
            {/* Background decor */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#D4500A]/[0.05] blur-3xl" />
                <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#D4500A]/[0.04] blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Header */}
                <div className="services-header mx-auto mb-10 max-w-3xl text-center sm:mb-14 md:mb-16">
                    <p className="mb-3 inline-flex items-center rounded-full border border-[#D4500A]/15 bg-[#FFF7F2] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#D4500A] sm:text-xs">
                        Servicios diseñados para vender
                    </p>

                    <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#1F2937] sm:text-4xl md:text-5xl">
                        No solo hacemos páginas web.
                        <span className="block text-[#D4500A]">Creamos herramientas para atraer clientes.</span>
                    </h2>

                    <p className="mt-4 text-sm leading-relaxed text-[#6B7280] sm:mt-5 sm:text-base md:text-lg">
                        Cada servicio está pensado para ayudarte a verte profesional,
                        generar confianza y convertir visitas en mensajes, citas o ventas.
                    </p>
                </div>

                {/* Grid */}
                <div className="services-grid grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;
                        const whatsappLink = `https://wa.me/${service.whatsappNumber}?text=${encodeURIComponent(
                            service.whatsappMessage
                        )}`;

                        return (
                            <article
                                key={service.id}
                                className="service-card group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-black/6 bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-[#D4500A]/20 hover:shadow-[0_20px_60px_rgba(212,80,10,0.08)] sm:p-6"
                            >
                                {/* Top Accent */}
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#D4500A] via-[#F97316] to-[#D4500A]" />

                                {/* Icon + Badge */}
                                <div className="mb-5 flex items-start justify-between gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF7F2] text-[#D4500A] ring-1 ring-[#D4500A]/10">
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    <span className="rounded-full border border-[#D4500A]/10 bg-[#FFF8F3] px-3 py-1 text-[11px] font-semibold text-[#D4500A] sm:text-xs">
                                        {service.badge}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold leading-tight text-[#1F2937] sm:text-2xl">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-3 text-sm leading-relaxed text-[#6B7280] sm:text-[15px]">
                                    {service.description}
                                </p>

                                {/* Includes */}
                                <div className="mt-6 rounded-3xl border border-black/5 bg-[#FAFAFA] p-4">
                                    <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#D4500A] sm:text-xs">
                                        Qué incluye
                                    </p>

                                    <ul className="space-y-2.5">
                                        {service.includes.map((item, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start gap-2.5 text-sm text-[#374151]"
                                            >
                                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D4500A]" />
                                                <span className="leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Result */}
                                <div className="mt-5 rounded-2xl bg-[#FFF8F3] px-4 py-3">
                                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D4500A]">
                                        Resultado
                                    </p>
                                    <p className="mt-1 text-sm font-medium leading-relaxed text-[#2D3748]">
                                        {service.result}
                                    </p>
                                </div>

                                {/* CTA */}
                                <div className="mt-6 flex flex-col gap-3 pt-1">
                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#D4500A] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#B84308] sm:text-base"
                                    >
                                        Quiero cotizar este servicio
                                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                    </a>

                                    <p className="text-center text-xs leading-relaxed text-[#9CA3AF]">
                                        Respuesta rápida por WhatsApp • Sin compromiso
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Bottom trust strip */}
                <div className="mt-10 rounded-[1.75rem] border border-[#D4500A]/10 bg-[#FFF8F3] p-5 sm:mt-12 sm:p-6">
                    <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                        <div>
                            <p className="text-sm font-semibold text-[#1F2937] sm:text-base">
                                ¿No sabes qué tipo de página necesita tu negocio?
                            </p>
                            <p className="mt-1 text-sm text-[#6B7280]">
                                Te orientamos según tu objetivo: vender, captar clientes o mejorar tu presencia digital.
                            </p>
                        </div>

                        <a
                            href={`https://wa.me/5210000000000?text=${encodeURIComponent(
                                "Hola, quiero que me orienten sobre qué tipo de página web necesita mi negocio."
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex shrink-0 items-center gap-2 rounded-2xl border border-[#D4500A]/15 bg-white px-5 py-3 text-sm font-semibold text-[#D4500A] transition-all duration-300 hover:border-[#D4500A]/30 hover:bg-[#FFFDFB]"
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