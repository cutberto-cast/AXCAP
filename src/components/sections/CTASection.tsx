"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    useGSAP(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (!prefersReducedMotion && sectionRef.current) {
            gsap.from(".cta-content", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
            });
        }
    }, { scope: sectionRef });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("submitting");
        setTimeout(() => {
            setFormStatus("success");
            setTimeout(() => setFormStatus("idle"), 5000);
        }, 1500);
    };

    return (
        <section id="contact" ref={sectionRef} className="py-20 px-4 sm:px-6 relative z-10 w-full overflow-hidden bg-[#D4500A]">
            {/* Background Blobs */}
            <div className="absolute inset-0 w-full h-full pointer-events-none opacity-60">
                <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#FF6B1A] blur-[80px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[55%] h-[55%] rounded-full bg-[#7A2000] blur-[80px]" />
            </div>

            <div className="max-w-5xl mx-auto flex flex-col items-center relative z-20">

                <div className="text-center mb-10 sm:mb-14 cta-content">
                    <h2 className="text-xs sm:text-sm font-bold tracking-[0.2em] text-white/70 uppercase mb-3">
                        ¿Listo para empezar?
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.15] tracking-tight mb-5">
                        Llevemos tu negocio a internet.
                    </h3>
                    <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed font-light">
                        Completa el formulario y te contactaremos en menos de 24 horas para platicar de tu negocio.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="w-full max-w-xl cta-content p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/25 shadow-[0_8px_32px_0_rgba(0,0,0,0.08),inset_0_1px_6px_rgba(255,255,255,0.2)]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-5">
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="name" className="text-xs sm:text-sm font-semibold text-white/80 tracking-wide">Nombre</label>
                            <input
                                id="name"
                                required
                                type="text"
                                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
                                placeholder="Tu nombre"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="email" className="text-xs sm:text-sm font-semibold text-white/80 tracking-wide">Email</label>
                            <input
                                id="email"
                                required
                                type="email"
                                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
                                placeholder="tu@email.com"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5 mb-5">
                        <label htmlFor="service" className="text-xs sm:text-sm font-semibold text-white/80 tracking-wide">Servicio</label>
                        <select
                            id="service"
                            required
                            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all appearance-none cursor-pointer"
                        >
                            <option value="" className="text-gray-900">Selecciona un servicio</option>
                            <option value="web" className="text-gray-900">Página Web Profesional</option>
                            <option value="menu" className="text-gray-900">Menú Digital / Tienda</option>
                            <option value="otro" className="text-gray-900">Otro</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1.5 mb-6">
                        <label htmlFor="message" className="text-xs sm:text-sm font-semibold text-white/80 tracking-wide">Cuéntanos</label>
                        <textarea
                            id="message"
                            required
                            rows={3}
                            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all resize-none"
                            placeholder="De qué es tu negocio y qué te gustaría lograr..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={formStatus !== "idle"}
                        className="btn-glow-uiverse w-full text-sm sm:text-base"
                    >
                        <span className="btn-glow-inner flex items-center justify-center gap-2">
                            {formStatus === "idle" && "Enviar Mensaje"}
                            {formStatus === "submitting" && "Enviando..."}
                            {formStatus === "success" && "¡Enviado!"}

                            {formStatus === "idle" && (
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            )}
                        </span>
                    </button>
                </form>
            </div>
        </section>
    );
}
