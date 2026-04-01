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
        // Simular envío a API Route
        setTimeout(() => {
            setFormStatus("success");
            // Reseteo visual tras unos segundos
            setTimeout(() => setFormStatus("idle"), 5000);
        }, 1500);
    };

    return (
        <section id="contact" ref={sectionRef} className="py-24 md:py-32 px-4 relative z-10 w-full overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-[#1a0000] -z-10" />

            <div className="max-w-5xl mx-auto flex flex-col items-center">

                <div className="text-center mb-12 cta-content">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-brand-red uppercase mb-4">
                        ¿Listo para empezar?
                    </h2>
                    <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
                        Llevemos tu <br /> negocio a <span className="text-brand-red">internet.</span>
                    </h3>
                    <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto">
                        Completa el formulario y te contactaremos en menos de 24 horas para platicar de tu negocio y cómo podemos ayudarte a vender más.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-10 cta-content">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm font-bold text-white/80 tracking-wide">Nombre Completo</label>
                            <input id="name" required type="text" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors" placeholder="John Doe" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-bold text-white/80 tracking-wide">Email Corporativo</label>
                            <input id="email" required type="email" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors" placeholder="john@empresa.com" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 mb-6">
                        <label htmlFor="service" className="text-sm font-bold text-white/80 tracking-wide">Servicio de Interés</label>
                        <select id="service" required className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white/80 focus:outline-none focus:border-brand-red transition-colors appearance-none">
                            <option value="">Selecciona un servicio</option>
                            <option value="web">Página Web Profesional</option>
                            <option value="menu">Menú Digital / Tienda</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2 mb-8">
                        <label htmlFor="message" className="text-sm font-bold text-white/80 tracking-wide">Detalles del Proyecto</label>
                        <textarea id="message" required rows={4} className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors resize-none" placeholder="Cuéntanos de qué es tu negocio y qué te gustaría lograr..." />
                    </div>

                    <button
                        type="submit"
                        disabled={formStatus !== "idle"}
                        className="w-full px-8 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-bold tracking-widest uppercase rounded-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                    >
                        {formStatus === "idle" && "Enviar Mensaje"}
                        {formStatus === "submitting" && "Enviando..."}
                        {formStatus === "success" && "¡Enviado Exitosamente!"}

                        {formStatus === "idle" && (
                            <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:left-[200%] transition-all duration-1000 ease-in-out" />
                        )}
                    </button>
                </form>

            </div>
        </section>
    );
}
