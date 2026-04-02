"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        id: 1,
        name: "Carlos Mendoza",
        role: "Dueño, Taller Mecánico",
        quote: "Desde que AXCAP nos hizo la página web, llegan clientes nuevos todas las semanas preguntando por servicios que antes ni sabían que dábamos. Nos vemos mucho más grandes de lo que somos.",
    },
    {
        id: 2,
        name: "Javier Véliz",
        role: "Fundador, Burger Station",
        quote: "El menú digital nos salvó. Dejamos de pagar el 30% a las apps de envío, y ahora los clientes piden directo a nuestro WhatsApp sin que perdamos tiempo contestando mensajes.",
    },
    {
        id: 3,
        name: "Elena Torres",
        role: "Directora, Clínica Estética",
        quote: "Nos diseñaron una página hermosa que refleja exactamente la calidad de nuestra clínica. La gente llega con mucha más confianza a sus tratamientos y agendan más fácil.",
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

    useEffect(() => {
        const interval = setInterval(nextSlide, 8000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <section id="testimonials" className="py-20 px-4 sm:px-6 bg-white relative z-10 w-full overflow-hidden flex flex-col items-center">
            <div className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto relative z-20">
                <h2 className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#D4500A] uppercase mb-3">
                    Testimonios
                </h2>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#2D3748] leading-[1.15] tracking-tight">
                    Nuestros clientes como principal aval.
                </h3>
            </div>

            {/* Testimonial Card — simple fade approach, works perfectly on mobile */}
            <div className="relative w-full max-w-2xl mx-auto z-20">
                {testimonials.map((testimonio, index) => (
                    <div
                        key={testimonio.id}
                        className={cn(
                            "transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
                            index === currentIndex
                                ? "relative opacity-100 translate-y-0"
                                : "absolute inset-0 opacity-0 translate-y-4 pointer-events-none"
                        )}
                    >
                        <div className="p-6 sm:p-10 md:p-12 rounded-[1.5rem] sm:rounded-[2rem] bg-[#FFF8F3] border border-[#D4500A]/10 text-center shadow-[0_8px_32px_-12px_rgba(212,80,10,0.1)]">
                            {/* Quote Mark */}
                            <div className="text-[#D4500A]/20 text-6xl sm:text-7xl leading-none font-serif mb-4 select-none">"</div>

                            <p className="text-lg sm:text-xl md:text-2xl text-[#2D3748] font-medium leading-relaxed mb-8 italic">
                                {testimonio.quote}
                            </p>

                            {/* Separator */}
                            <div className="w-10 h-[3px] bg-[#D4500A] rounded-full mx-auto mb-5" />

                            <h4 className="text-[#2D3748] font-bold text-base sm:text-lg mb-1">{testimonio.name}</h4>
                            <p className="text-[#D4500A] text-xs sm:text-sm font-semibold tracking-widest uppercase">{testimonio.role}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Controls */}
            <div className="flex gap-4 sm:gap-6 mt-8 sm:mt-12 z-40 items-center justify-center">
                <button
                    onClick={prevSlide}
                    aria-label="Testimonio anterior"
                    className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#FFF8F3] border border-[#D4500A]/15 hover:bg-[#D4500A] hover:border-[#D4500A] text-[#D4500A] hover:text-white transition-all duration-300 group"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-0.5 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div className="flex gap-2 mx-2">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            aria-label={`Ir al testimonio ${idx + 1}`}
                            className={cn(
                                "h-2 rounded-full transition-all duration-500",
                                idx === currentIndex ? "bg-[#D4500A] w-8 sm:w-10" : "w-2 bg-[#D4500A]/20 hover:bg-[#D4500A]/40"
                            )}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    aria-label="Siguiente testimonio"
                    className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#FFF8F3] border border-[#D4500A]/15 hover:bg-[#D4500A] hover:border-[#D4500A] text-[#D4500A] hover:text-white transition-all duration-300 group"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </section>
    );
}
