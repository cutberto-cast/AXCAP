"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import Spline from "@splinetool/react-spline";

export function HeroSection() {
    const containerRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

            if (!prefersReducedMotion) {
                const tl = gsap.timeline();

                // Animación de entrada de textos
                tl.fromTo(".hero-headline .line",
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power3.out",
                        delay: 0.1,
                    }
                );

                tl.fromTo(".hero-subheadline",
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
                    "-=0.4"
                );

                tl.fromTo(".hero-cta",
                    { scale: 0.9, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" },
                    "-=0.3"
                );

                tl.fromTo(".social-login-icons",
                    { scale: 0.9, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.5)" },
                    "-=0.4"
                );

                // Animación de imagen / Modelo 3D
                tl.fromTo(imgRef.current,
                    { x: 50, opacity: 0, rotation: 2 },
                    { x: 0, opacity: 1, rotation: 0, duration: 1, ease: "power3.out" },
                    "-=0.8"
                );

            } else {
                // Fallback accesible
                gsap.fromTo(containerRef.current,
                    { opacity: 0 },
                    { opacity: 1, duration: 0.5 }
                );
            }
        },
        { scope: containerRef }
    );

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-[min(90svh,900px)] pt-24 md:pt-32 pb-16 bg-[#D4500A] overflow-hidden flex items-center justify-center rounded-b-[40px] md:rounded-b-[80px]"
        >
            {/* Fluid Background Blobs */}
            <div className="absolute inset-0 w-full h-full pointer-events-none opacity-90">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full blob-1 animate-blob-1" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full blob-2 animate-blob-2" />
                <div className="absolute top-[20%] left-[40%] w-[50%] h-[50%] rounded-full blob-3 animate-blob-3" />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 lg:gap-12 w-full pointer-events-none">

                {/* Columna Izquierda: Textos Glass Card */}
                <div ref={textRef} className="w-full md:w-1/2 text-left z-30 pointer-events-auto">
                    <div className="relative p-6 lg:p-8 rounded-[2rem] bg-white/10 backdrop-blur-3xl border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.1),_inset_0_2px_10px_rgba(255,255,255,0.3)] overflow-hidden">

                        {/* Soft glow behind the card content */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

                        <div className="relative z-10">
                            {/* Badge */}

                            <h1 className="text-3xl md:text-5xl lg:text-[3.25rem] font-medium text-white leading-[1.1] tracking-tight hero-headline mb-4 drop-shadow-sm">
                                <div className="overflow-hidden"><span className="block line">Lleva Tu Negocio</span></div>
                                <div className="overflow-hidden"><span className="block line text-white/90">Al Siguiente Nivel</span></div>
                            </h1>

                            {/* Divider Line brillante */}
                            <div className="w-full max-w-[80%] h-[1px] bg-gradient-to-r from-white/50 via-white/10 to-transparent my-6 relative flex items-center">
                                {/* Glow element on the line */}
                                <div className="absolute left-0 w-1/4 h-[2px] bg-white rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,0.8)]" />
                            </div>

                            <p className="hero-subheadline text-base md:text-lg text-white/90 font-light max-w-lg mb-6 leading-relaxed">
                                Desarrollamos soluciones digitales, sistemas de venta y sitios web profesionales que conectan con tus clientes y multiplican tus ingresos. Hoy Mismo.
                            </p>

                            <div className="flex flex-col xl:flex-row gap-8 items-center justify-start mt-8 w-full">
                                <div className="hero-cta">
                                    {/* Nuevo Botón Uiverse Gradient Glow - Stack Seguro */}
                                    <Link href="/portafolio" className="btn-glow-uiverse text-lg shadow-2xl">
                                        <span className="btn-glow-inner">Ver Servicios</span>
                                    </Link>
                                </div>

                                {/* Divider on larger screens */}
                                <div className="hidden xl:block w-px h-16 bg-white/20"></div>

                                {/* Íconos sociales Interactivos (Tailwind Original) */}
                                <div className="flex items-center gap-4 social-login-icons xl:pl-2">
                                    {/* X */}
                                    <a href="#" onClick={(e) => e.preventDefault()} className="group relative w-12 h-12 rounded-full overflow-hidden flex flex-col cursor-pointer shadow-lg backdrop-blur-md bg-white/10 hover:shadow-[0_4px_30px_rgba(0,0,0,0.2)] transition-all duration-300">
                                        <div className="w-12 h-[200%] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.46,-0.78,0.5,1.56)] group-hover:-translate-y-1/2">
                                            <div className="w-12 h-12 flex items-center justify-center">
                                                <svg viewBox="0 0 512 512" className="w-[1.2rem] h-[1.2rem] fill-white transition-opacity duration-300 group-hover:opacity-0 delay-200">
                                                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                                                </svg>
                                            </div>
                                            <div className="w-12 h-12 flex items-center justify-center bg-black">
                                                <svg viewBox="0 0 512 512" className="w-[1.2rem] h-[1.2rem] fill-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </a>

                                    {/* Instagram */}
                                    <a href="#" onClick={(e) => e.preventDefault()} className="group relative w-12 h-12 rounded-full overflow-hidden flex flex-col cursor-pointer shadow-lg backdrop-blur-md bg-white/10 hover:shadow-[0_4px_30px_rgba(255,1,105,0.4)] transition-all duration-300">
                                        <div className="w-12 h-[200%] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.46,-0.78,0.5,1.56)] group-hover:-translate-y-1/2">
                                            <div className="w-12 h-12 flex items-center justify-center">
                                                <svg viewBox="0 0 448 512" className="w-[1.2rem] h-[1.2rem] fill-white transition-opacity duration-300 group-hover:opacity-0 delay-200">
                                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                                </svg>
                                            </div>
                                            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-tr from-[#ff7a00] via-[#ff0169] to-[#d300c5]">
                                                <svg viewBox="0 0 448 512" className="w-[1.2rem] h-[1.2rem] fill-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                    {/* Facebook */}
                                    <a href="https://www.facebook.com/profile.php?id=61583469279335" target="_blank" rel="noopener noreferrer" className="group relative w-12 h-12 rounded-full overflow-hidden flex flex-col cursor-pointer shadow-lg backdrop-blur-md bg-white/10 hover:shadow-[0_4px_30px_rgba(49,111,246,0.4)] transition-all duration-300">
                                        <div className="w-12 h-[200%] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.46,-0.78,0.5,1.56)] group-hover:-translate-y-1/2">
                                            <div className="w-12 h-12 flex items-center justify-center">
                                                <svg viewBox="0 0 384 512" className="w-[1rem] h-[1rem] fill-white transition-opacity duration-300 group-hover:opacity-0 delay-200">
                                                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                                                </svg>
                                            </div>
                                            <div className="w-12 h-12 flex items-center justify-center bg-[#316ff6]">
                                                <svg viewBox="0 0 384 512" className="w-[1rem] h-[1rem] fill-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </a>

                                    {/* TikTok */}
                                    <a href="https://www.tiktok.com/@axcapdesing?_r=1&_t=ZS-95BdEQ7N9A0" target="_blank" rel="noopener noreferrer" className="group relative w-12 h-12 rounded-full overflow-hidden flex flex-col cursor-pointer shadow-lg backdrop-blur-md bg-white/10 hover:shadow-[0_4px_30px_rgba(129,34,144,0.4)] transition-all duration-300">
                                        <div className="w-12 h-[200%] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.46,-0.78,0.5,1.56)] group-hover:-translate-y-1/2">
                                            <div className="w-12 h-12 flex items-center justify-center">
                                                <svg viewBox="0 0 448 512" className="w-[1.2rem] h-[1.2rem] fill-white transition-opacity duration-300 group-hover:opacity-0 delay-200">
                                                    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                                                </svg>
                                            </div>
                                            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-b from-[#812290] to-[#4d227c]">
                                                <svg viewBox="0 0 448 512" className="w-[1.2rem] h-[1.2rem] fill-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Columna Derecha Dinámica: Modelo 3D */}
            <div ref={imgRef} className="absolute right-[-15%] md:right-[-10%] top-0 bottom-0 w-full md:w-[60%] z-10 flex items-center justify-center pointer-events-none">
                <div className="relative w-[110%] h-[110%] pointer-events-auto">
                    <Spline
                        scene="https://prod.spline.design/6OIW6ytVzNDQVyBu/scene.splinecode"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

