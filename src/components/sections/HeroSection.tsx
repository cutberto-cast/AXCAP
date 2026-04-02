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

                tl.fromTo(".hero-headline .line",
                    { y: 60, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.1 }
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

                tl.fromTo(imgRef.current,
                    { x: 50, opacity: 0, rotation: 2 },
                    { x: 0, opacity: 1, rotation: 0, duration: 1, ease: "power3.out" },
                    "-=0.8"
                );

            } else {
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
            className="relative w-full min-h-svh md:min-h-[min(90svh,900px)] pt-24 md:pt-32 pb-8 md:pb-16 bg-[#D4500A] overflow-hidden flex items-center justify-center rounded-b-[40px] md:rounded-b-[80px]"
        >
            {/* Fluid Background Blobs */}
            <div className="absolute inset-0 w-full h-full pointer-events-none opacity-90">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full blob-1 animate-blob-1" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full blob-2 animate-blob-2" />
                <div className="absolute top-[20%] left-[40%] w-[50%] h-[50%] rounded-full blob-3 animate-blob-3" />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-6 md:gap-10 lg:gap-12 w-full pointer-events-none">

                {/* MOBILE ONLY: Modelo 3D encima del texto */}
                <div className="block md:hidden order-first w-full h-[320px] sm:h-[400px] overflow-hidden -mt-4 mb-2 z-10 pointer-events-none">
                    <div className="relative w-[130%] h-[130%] -translate-x-[11.5%] translate-y-[-8%] pointer-events-auto">
                        <Spline
                            scene="https://prod.spline.design/6OIW6ytVzNDQVyBu/scene.splinecode"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Columna Izquierda: Textos Glass Card */}
                <div ref={textRef} className="w-full md:w-1/2 text-left z-30 pointer-events-auto">
                    <div className="relative p-5 sm:p-6 lg:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-white/10 backdrop-blur-3xl border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.1),_inset_0_2px_10px_rgba(255,255,255,0.3)] overflow-hidden">

                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

                        <div className="relative z-10">
                            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[3.25rem] font-medium text-white leading-[1.1] tracking-tight hero-headline mb-3 sm:mb-4 drop-shadow-sm">
                                <div className="overflow-hidden"><span className="block line">Lleva Tu Negocio</span></div>
                                <div className="overflow-hidden"><span className="block line text-white/90">Al Siguiente Nivel</span></div>
                            </h1>

                            <p className="hero-subheadline text-sm sm:text-base md:text-lg text-white/90 font-light max-w-lg mb-4 sm:mb-6 leading-relaxed">
                                Desarrollamos soluciones digitales, sistemas de venta y sitios web profesionales que conectan con tus clientes y multiplican tus ingresos. Hoy Mismo.
                            </p>

                            <div className="flex flex-col sm:flex-row xl:flex-row gap-2 sm:gap-3 items-center justify-start mt-5 sm:mt-8 w-full">
                                <div className="hero-cta">
                                    <Link href="/portafolio" className="btn-glow-uiverse text-lg shadow-2xl">
                                        <span className="btn-glow-inner">Ver Servicios</span>
                                    </Link>
                                </div>

                                <div className="flex items-center gap-3 sm:gap-4 social-login-icons xl:pl-2">
                                    {/* WhatsApp */}
                                    <a href="https://wa.me/522722974528?text=Hola%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto" target="_blank" rel="noopener noreferrer" className="group relative h-10 sm:h-12 rounded-full overflow-hidden flex flex-col cursor-pointer shadow-lg backdrop-blur-md bg-white/10 hover:shadow-[0_4px_30px_rgba(37,211,102,0.5)] transition-all duration-300" style={{ width: 'auto' }}>
                                        <div className="h-[200%] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.46,-0.78,0.5,1.56)] group-hover:-translate-y-1/2">
                                            <div className="h-10 sm:h-12 flex items-center justify-center gap-2 px-4 sm:px-5">
                                                <svg viewBox="0 0 448 512" className="w-[1.1rem] h-[1.1rem] fill-white shrink-0 transition-opacity duration-300 group-hover:opacity-0 delay-200">
                                                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.3-5.1-3.7-10.6-6.5z" />
                                                </svg>
                                                <span className="text-white text-[11px] sm:text-xs font-semibold tracking-wide whitespace-nowrap transition-opacity duration-300 group-hover:opacity-0 delay-200">Contáctanos</span>
                                            </div>
                                            <div className="h-10 sm:h-12 flex items-center justify-center gap-2 px-4 sm:px-5 bg-[#25D366]">
                                                <svg viewBox="0 0 448 512" className="w-[1.1rem] h-[1.1rem] fill-white shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.3-5.1-3.7-10.6-6.5z" />
                                                </svg>
                                                <span className="text-white text-[11px] sm:text-xs font-semibold tracking-wide whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100">Contáctanos</span>
                                            </div>
                                        </div>
                                    </a>

                                    {/* Instagram */}
                                    <a href="#" onClick={(e) => e.preventDefault()} className="group relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex flex-col cursor-pointer shadow-lg backdrop-blur-md bg-white/10 hover:shadow-[0_4px_30px_rgba(255,1,105,0.4)] transition-all duration-300">
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
                                    <a href="https://www.facebook.com/profile.php?id=61583469279335" target="_blank" rel="noopener noreferrer" className="group relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex flex-col cursor-pointer shadow-lg backdrop-blur-md bg-white/10 hover:shadow-[0_4px_30px_rgba(49,111,246,0.4)] transition-all duration-300">
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
                                    <a href="https://www.tiktok.com/@axcapdesing?_r=1&_t=ZS-95BdEQ7N9A0" target="_blank" rel="noopener noreferrer" className="group relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex flex-col cursor-pointer shadow-lg backdrop-blur-md bg-white/10 hover:shadow-[0_4px_30px_rgba(129,34,144,0.4)] transition-all duration-300">
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

            {/* DESKTOP ONLY: Modelo 3D — absolute overlay lado derecho */}
            <div
                ref={imgRef}
                className="hidden md:flex relative w-full h-[280px] sm:h-[350px] md:absolute md:right-[-10%] md:top-0 md:bottom-0 md:w-[60%] md:h-auto z-10 items-center justify-center pointer-events-none"
            >
                <div className="relative w-full h-full md:w-[110%] md:h-[100%] pointer-events-auto">
                    <Spline
                        scene="https://prod.spline.design/6OIW6ytVzNDQVyBu/scene.splinecode"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}