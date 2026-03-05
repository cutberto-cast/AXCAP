"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        id: 1,
        name: "Carolina Mendoza",
        role: "CMO, Fintech Global",
        quote: "AXCAP transformó por completo nuestra plataforma base. Su dominio de Next.js y metodologías de ingeniería lograron optimizar nuestros tiempos de carga en un 40%.",
    },
    {
        id: 2,
        name: "Javier Véliz",
        role: "CEO, Retail Innovator",
        quote: "La atención al detalle en animaciones y la experiencia de usuario es simplemente de nivel mundial. Entendieron exactamente cómo posicionarnos como una marca premium.",
    },
    {
        id: 3,
        name: "Elena Torres",
        role: "VP de Producto",
        quote: "Un equipo de élite. La migración a una arquitectura moderna no solo mejoró el performance, sino que también nuestra tasa de conversión aumentó sustancialmente.",
    },
];

export function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-play (opcional)
    useEffect(() => {
        const interval = setInterval(nextSlide, 8000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <section id="testimonials" className="py-24 md:py-32 px-4 bg-[#0a0a0f] relative z-10 w-full overflow-hidden flex flex-col items-center">
            <div className="text-center mb-16 max-w-2xl mx-auto">
                <h2 className="text-sm font-bold tracking-[0.2em] text-brand-red uppercase mb-4">
                    Testimonios
                </h2>
                <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">
                    Nuestros clientes como principal aval.
                </h3>
            </div>

            <div className="relative w-full max-w-4xl min-h-[400px] flex items-center justify-center -mt-8 perspective-1000">
                {testimonials.map((testimonio, index) => {
                    // Determinar la posición relativa al índice actual para el efecto depth
                    const offset = index - currentIndex;
                    const isCurrent = offset === 0;
                    const isNext = offset === 1 || (currentIndex === testimonials.length - 1 && index === 0);
                    const isPrev = offset === -1 || (currentIndex === 0 && index === testimonials.length - 1);

                    let transformClass = "scale-75 opacity-0 z-0 translate-y-12"; // Default
                    if (isCurrent) {
                        transformClass = "scale-100 opacity-100 z-30 translate-y-0";
                    } else if (isNext) {
                        transformClass = "scale-90 opacity-40 z-20 translate-y-8 translate-x-12 md:translate-x-32";
                    } else if (isPrev) {
                        transformClass = "scale-90 opacity-40 z-20 translate-y-8 -translate-x-12 md:-translate-x-32";
                    }

                    return (
                        <div
                            key={testimonio.id}
                            className={cn(
                                "absolute transition-all duration-700 ease-in-out w-full max-w-lg md:max-w-2xl",
                                "bg-white/[0.03] backdrop-blur-md border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl",
                                "flex flex-col items-center text-center",
                                transformClass
                            )}
                        >
                            {/* Comillas decorativas rojas estilo glass */}
                            <div className="mb-6 opacity-80 mix-blend-screen text-brand-red text-6xl leading-none font-serif">"</div>

                            <p className="text-lg md:text-2xl text-white/90 font-medium leading-relaxed mb-8 italic">
                                {testimonio.quote}
                            </p>

                            <div className="mt-auto">
                                <h4 className="text-white font-bold text-lg mb-1">{testimonio.name}</h4>
                                <p className="text-brand-red text-sm font-semibold tracking-wide uppercase">{testimonio.role}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Controles de navegación responsivos y accesibles */}
            <div className="flex gap-4 mt-12 z-40 items-center justify-center">
                <button
                    onClick={prevSlide}
                    aria-label="Testimonio anterior"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-brand-red hover:border-brand-red text-white transition-all duration-300 transform hover:scale-110"
                >
                    {/* Arrow Left Icon placeholder */}
                    <span className="block w-3 h-3 border-t-2 border-l-2 rotate-[-45deg] ml-1"></span>
                </button>

                {/* Puntos Indicadores */}
                <div className="flex gap-2 mx-4">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            aria-label={`Ir al testimonio ${idx + 1}`}
                            className={cn(
                                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                                idx === currentIndex ? "bg-brand-red w-8" : "bg-white/20 hover:bg-white/40"
                            )}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    aria-label="Siguiente testimonio"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-brand-red hover:border-brand-red text-white transition-all duration-300 transform hover:scale-110"
                >
                    {/* Arrow Right Icon placeholder */}
                    <span className="block w-3 h-3 border-t-2 border-r-2 rotate-[45deg] mr-1"></span>
                </button>
            </div>
        </section>
    );
}
