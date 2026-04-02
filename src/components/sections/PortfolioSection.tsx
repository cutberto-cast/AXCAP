"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: "Cafecito Shop",
        category: "E-Commerce",
        tech: ["Next.js", "Tailwind"],
        image: "/image/cafecito.png",
        url: "https://cafecito.shop"
    },
    {
        id: 2,
        title: "Clínica Dental",
        category: "Landing Page",
        tech: ["Next.js", "React"],
        image: "/image/dental-clinic.png",
        url: "https://clinica-dental-landing-one.vercel.app/"
    },
    {
        id: 3,
        title: "Black Ritual Studio",
        category: "Tattoo Studio",
        tech: ["Next.js", "Tailwind"],
        image: "/image/studio-tattoo.png",
        url: "https://nocturne-tattoo.vercel.app/"
    },
    {
        id: 4,
        title: "Admin Cafetería",
        category: "Panel de Control",
        tech: ["Next.js", "Tailwind"],
        image: "/image/admin-cafe.png",
    }
];

interface PortfolioSectionProps {
    variant?: 'carousel' | 'grid';
}

export function PortfolioSection({ variant = 'carousel' }: PortfolioSectionProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (!prefersReducedMotion && sectionRef.current) {
            gsap.from(".portfolio-header", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            if (variant === 'carousel' && marqueeRef.current) {
                gsap.to(marqueeRef.current, {
                    xPercent: -50,
                    duration: 40,
                    ease: "none",
                    repeat: -1,
                });
            }
        }
    }, { scope: sectionRef, dependencies: [variant] });

    return (
        <section id="portfolio" ref={sectionRef} className="py-20 bg-[#D4500A] relative w-full overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
                <div className="absolute bottom-[-20%] right-[-5%] w-[45%] h-[45%] rounded-full bg-[#FF8C3A] blur-[80px]" />
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-[#7A2000] blur-[80px]" />
            </div>

            <div className="portfolio-header max-w-6xl mx-auto mb-10 sm:mb-14 px-4 sm:px-6 md:px-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6 relative z-20">
                <div>
                    <h2 className="text-xs sm:text-sm font-bold tracking-[0.2em] text-white/70 uppercase mb-3">
                        Casos de Éxito
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white max-w-xl leading-[1.15] tracking-tight">
                        Trabajo que define estándares.
                    </h3>
                </div>
                {variant === 'carousel' && (
                    <Link href="/portafolio" className="group px-6 py-3 bg-white/15 backdrop-blur-xl border border-white/30 text-white font-semibold tracking-wide rounded-full transition-all duration-300 hover:bg-white/25 hover:border-white/50 shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center justify-center gap-2 text-sm shrink-0">
                        Ver Todo
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                )}
            </div>

            {variant === 'carousel' ? (
                <div className="relative w-full overflow-hidden flex items-center">
                    {/* Fade edges matching section bg */}
                    <div className="absolute inset-y-0 left-0 w-8 sm:w-24 bg-gradient-to-r from-[#D4500A] to-transparent z-20 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-8 sm:w-24 bg-gradient-to-l from-[#D4500A] to-transparent z-20 pointer-events-none" />

                    <div
                        ref={marqueeRef}
                        className="flex w-max gap-4 sm:gap-6 md:gap-8 px-4 py-4"
                    >
                        {[...projects, ...projects].map((project, index) => (
                            <ProjectCard
                                key={`${project.id}-carousel-${index}`}
                                project={project}
                                className="w-[260px] sm:w-[340px] md:w-[500px] shrink-0"
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 relative z-20">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} className="w-full" />
                    ))}
                </div>
            )}
        </section>
    );
}

function ProjectCard({ project, className }: { project: any; className?: string }) {
    return (
        <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group block relative aspect-[16/10] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-white/10 backdrop-blur-xl border border-white/25 shadow-[0_8px_32px_0_rgba(0,0,0,0.08),inset_0_1px_6px_rgba(255,255,255,0.15)] transition-all duration-500 hover:border-white/40 hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.15)] ${className || ""}`}
        >
            {project.image && (
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                />
            )}

            {/* Bottom gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 md:p-8 flex flex-col justify-end text-left">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-white/80 font-bold mb-1">
                    {project.category}
                </span>
                <h4 className="text-lg sm:text-2xl md:text-3xl font-semibold text-white mb-2 drop-shadow-md">
                    {project.title}
                </h4>

                <ul className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                    {project.tech.map((tech: string) => (
                        <li key={tech} className="text-[10px] sm:text-xs font-medium bg-white/15 backdrop-blur-md border border-white/25 px-3 py-1 rounded-full text-white">
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
        </a>
    );
}
