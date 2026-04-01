"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import Spline from "@splinetool/react-spline";

// --- Formas Flotantes para Animación ---
const FloatingShape1 = () => (
    <div className="absolute top-1/4 left-[60%] w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center rotate-12 floating-shape shadow-xl border border-white/40">
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
    </div>
);

const FloatingShape2 = () => (
    <div className="absolute top-2/3 right-[5%] w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center -rotate-6 floating-shape shadow-lg border border-white/50">
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
    </div>
);

const FloatingShape3 = () => (
    <div className="absolute bottom-1/4 left-[50%] w-12 h-12 bg-orange-400/50 backdrop-blur-sm rounded-lg flex items-center justify-center rotate-45 floating-shape shadow-md">
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-5 h-5 -rotate-45">
             <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    </div>
);


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

                // Animación de imagen
                tl.fromTo(imgRef.current,
                    { x: 50, opacity: 0, rotation: 2 },
                    { x: 0, opacity: 1, rotation: 0, duration: 1, ease: "power3.out" },
                    "-=0.8"
                );

                // Elementos flotantes infinitos
                gsap.to(".floating-shape", {
                    y: "-=15",
                    rotation: "+=5",
                    duration: 2.5,
                    ease: "sine.inOut",
                    stagger: {
                        each: 0.4,
                        from: "random"
                    },
                    yoyo: true,
                    repeat: -1
                });

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
            className="relative w-full min-h-[min(90svh,900px)] pt-24 md:pt-32 pb-16 bg-gradient-to-br from-[#ffaf40] via-[#ff7300] to-[#cc2b00] overflow-hidden flex items-center justify-center rounded-b-[40px] md:rounded-b-[80px]"
        >
            {/* Decals background genéricos */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-10 left-10 text-white font-bold opacity-30 text-6xl">✕</div>
                <div className="absolute bottom-20 right-20 text-white font-bold opacity-30 text-8xl">○</div>
                <div className="absolute top-1/2 left-1/4 text-white opacity-20">
                    <svg width="40" height="40" viewBox="0 0 100 100">
                        <path d="M10 50 Q 50 10 90 50 T 90 90" fill="transparent" stroke="currentColor" strokeWidth="5"/>
                    </svg>
                </div>
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 lg:gap-12 w-full">
                
                {/* Columna Izquierda: Textos */}
                <div ref={textRef} className="w-full md:w-1/2 text-left z-30">
                    <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-black text-white leading-[1.1] tracking-tight hero-headline mb-6">
                        <div className="overflow-hidden"><span className="block line">Lleva Tu Negocio</span></div>
                        <div className="overflow-hidden"><span className="block line text-white/90">Al Siguiente Nivel,</span></div>
                        <div className="overflow-hidden"><span className="block line text-black bg-white inline-block px-3 py-1 rounded-xl mt-2">Hoy Mismo</span></div>
                    </h1>

                    <p className="hero-subheadline text-lg md:text-xl text-white/90 font-medium max-w-lg mb-10 leading-relaxed">
                        Desarrollamos soluciones digitales, sistemas de venta y sitios web profesionales que conectan con tus clientes y multiplican tus ingresos.
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
                            {/* Twitter */}
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="group relative w-12 h-12 rounded-full overflow-hidden flex flex-col cursor-pointer shadow-lg backdrop-blur-md bg-white/10 hover:shadow-[0_4px_30px_rgba(0,0,0,0.2)] transition-all duration-300">
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
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group relative w-12 h-12 rounded-full overflow-hidden flex flex-col cursor-pointer shadow-lg backdrop-blur-md bg-white/10 hover:shadow-[0_4px_30px_rgba(255,1,105,0.4)] transition-all duration-300">
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
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group relative w-12 h-12 rounded-full overflow-hidden flex flex-col cursor-pointer shadow-lg backdrop-blur-md bg-white/10 hover:shadow-[0_4px_30px_rgba(49,111,246,0.4)] transition-all duration-300">
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
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="group relative w-12 h-12 rounded-full overflow-hidden flex flex-col cursor-pointer shadow-lg backdrop-blur-md bg-white/10 hover:shadow-[0_4px_30px_rgba(129,34,144,0.4)] transition-all duration-300">
                            <div className="w-12 h-[200%] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.46,-0.78,0.5,1.56)] group-hover:-translate-y-1/2">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <svg viewBox="0 0 496 512" className="w-[1.2rem] h-[1.2rem] fill-white transition-opacity duration-300 group-hover:opacity-0 delay-200">
                                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                                    </svg>
                                </div>
                                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-b from-[#812290] to-[#4d227c]">
                                    <svg viewBox="0 0 496 512" className="w-[1.2rem] h-[1.2rem] fill-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                </div>

                {/* Columna Derecha: Modelo 3D con Flotantes */}
                <div ref={imgRef} className="w-full md:w-1/2 relative mt-12 md:mt-0 flex justify-center h-[45vh] min-h-[350px] max-h-[500px] xl:max-h-[600px] max-w-lg md:max-w-xl mx-auto align-middle">
                    <div className="relative w-full h-full z-10 overflow-visible flex items-center justify-center">
                        <Spline 
                            scene="https://prod.spline.design/6OIW6ytVzNDQVyBu/scene.splinecode" 
                            className="w-full h-full pointer-events-auto rounded-[2rem] shadow-2xl bg-white/5 backdrop-blur-sm"
                        />
                    </div>
                    
                    {/* Elementos Flotantes de UI */}
                    <FloatingShape1 />
                    <FloatingShape2 />
                    <FloatingShape3 />
                </div>
            </div>
        </section>
    );
}

