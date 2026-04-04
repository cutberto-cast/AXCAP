"use client";

import { useRef, useState } from "react";
import Image from "next/image";

// Definición de datos de proyectos estáticos
const showcaseProjects = [
    {
        id: "formed-wood",
        title: "Formed Wood",
        categoryGroup: "Páginas Web",
        category: "E-Commerce / Branding",
        tech: ["Next.js", "Tailwind", "Vercel"],
        // TODO: Asegúrate de reemplazar esta ruta en cuanto agregues la imagen original a public/image
        images: ["/image/cafecito.png"],
        shortDescription: "Plataforma inmersiva diseñada para maximizar el tiempo de retención y la conversión de clientes premium. Cuenta con una arquitectura ultrarrápida que minimiza la tasa de rebote desde el primer segundo de carga.",
        features: ["Carga sub-segundo", "Optimización SEO Técnica", "Catálogo ágil"],
        url: "https://formed-wood.vercel.app/"
    },
    {
        id: "clinica-dental",
        title: "Clínica Dental",
        categoryGroup: "Páginas Web",
        category: "Landing Page Corporativa",
        tech: ["Next.js", "React", "Tailwind"],
        images: ["/image/dental-clinic.png"],
        shortDescription: "Un embudo de ventas digital disfrazado de sitio web elegante. Cada sección está estructurada para fomentar confianza instantánea, impulsando llamados a la acción claros que multiplican orgánicamente las citas mensuales.",
        features: ["Integración de contacto directo", "Estética de alta confianza local", "Conversión dirigida"],
        url: "https://clinica-dental-landing-one.vercel.app/"
    },
    {
        id: "black-ritual",
        title: "Black Ritual Studio",
        categoryGroup: "Páginas Web",
        category: "Portafolio Híbrido",
        tech: ["Next.js", "Tailwind"],
        images: ["/image/studio-tattoo.png"],
        shortDescription: "Galería de altísimo impacto visual para estudio de tatuajes. Se construyó en dark-mode para proyectar la estética de marca, atrapando visualmente al prospecto y guiándolo eficientemente a la reservación.",
        features: ["Visor inmersivo", "Flujo de conversión corto", "Dark Mode UI premium"],
        url: "https://nocturne-tattoo.vercel.app/"
    },
    {
        id: "admin-cafe",
        title: "Admin Cafetería",
        categoryGroup: "Sistemas de Gestión",
        category: "Panel de Control Inteligente",
        tech: ["Next.js", "PostgreSQL", "Tailwind"],
        images: ["/image/admin-cafe.png"],
        shortDescription: "Sistema centralizado de administración, inventario y finanzas en tiempo real. Diseñado para aplastar el margen de error humano en cortes de caja, automatizando tareas pesadas para devolver decenas de horas productivas.",
        features: ["Monitoreo en tiempo real", "Métricas de negocio integradas", "Punto de Venta Web"],
    }
];

export function PortfolioSection() {
    const sectionRef = useRef<HTMLElement>(null);

    // Obtenemos los grupos únicos
    const groups = Array.from(new Set(showcaseProjects.map(p => p.categoryGroup)));

    return (
        <section id="portfolio" ref={sectionRef} className="py-24 bg-[#D4500A] relative w-full overflow-hidden">
            {/* Background Blobs for consistency if needed, but keeping it simpler to match hero transition */}
            <div className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-[#FF8C3A] blur-[100px]" />
                <div className="absolute top-[10%] left-[-10%] w-[35%] h-[35%] rounded-full bg-black/20 blur-[100px]" />
            </div>

            <div className="max-w-[90rem] 2xl:max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20 relative z-20">

                <div className="mb-6">
                    <h2 className="text-xs sm:text-sm font-bold tracking-[0.2em] text-white/80 uppercase mb-3 drop-shadow-sm">
                        Casos de Éxito
                    </h2>

                </div>

                <div className="flex flex-col gap-24">
                    {groups.map((groupTitle) => {
                        const projectsInGroup = showcaseProjects.filter(p => p.categoryGroup === groupTitle);

                        return (
                            <div key={groupTitle} className="flex flex-col">
                                {/* Group Title / Disociación visual */}
                                <div className="flex items-center gap-6 mb-10 opacity-90">
                                    <h4 className="text-2xl md:text-3xl font-semibold text-white uppercase tracking-tight">
                                        {groupTitle}
                                    </h4>
                                    <div className="flex-1 h-[1px] bg-gradient-to-r from-white/30 to-transparent" />
                                </div>

                                <div className="flex flex-col gap-16">
                                    {projectsInGroup.map((project) => (
                                        <ProjectShowcase key={project.id} project={project} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function ProjectShowcase({ project }: { project: typeof showcaseProjects[0] }) {
    const [currentImg, setCurrentImg] = useState(0);

    const nextImg = () => setCurrentImg((prev) => (prev + 1) % project.images.length);
    const prevImg = () => setCurrentImg((prev) => (prev - 1 + project.images.length) % project.images.length);

    return (
        <div className="flex flex-col lg:flex-row items-center gap-6 xl:gap-10 w-full p-5 sm:p-6 lg:p-8 rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/20 shadow-[0_16px_40px_0_rgba(0,0,0,0.1),_inset_0_2px_10px_rgba(255,255,255,0.1)] transition-transform duration-500 hover:bg-white/10">

            {/* Izquierda: Carrusel Estático de Imágenes */}
            <div className="w-full lg:w-1/2 xl:w-[45%] shrink-0">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black/40 border border-white/10 group shadow-inner">
                    <Image
                        src={project.images[currentImg]}
                        alt={`Captura interface ${project.title}`}
                        fill
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                        unoptimized
                    />

                    {/* Dark gradient overlap at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                    {/* Controles del Carrusel (Solo visibles si en el futuro agregas > 1 imagen) */}
                    {project.images.length > 1 && (
                        <>
                            <button onClick={prevImg} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xl hover:bg-black/80 hover:scale-110 active:scale-95 duration-200">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                            </button>
                            <button onClick={nextImg} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xl hover:bg-black/80 hover:scale-110 active:scale-95 duration-200">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                            </button>

                            {/* Paginación */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {project.images.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentImg ? "bg-white w-5" : "bg-white/40"}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Derecha: Descripción Analítica */}
            <div className="w-full lg:w-1/2 xl:w-[55%] flex flex-col justify-center">
                
                {/* Header (Título y Categoría inline) */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <h3 className="text-2xl lg:text-3xl font-semibold text-white tracking-tight">
                        {project.title}
                    </h3>
                    <div className="px-3 py-1 rounded-md bg-[#dd5c1c]/90 border border-white/20 text-white text-[10px] font-bold tracking-[0.15em] uppercase shadow-sm">
                        {project.category}
                    </div>
                </div>
                
                <p className="text-white/85 font-light text-sm md:text-base mb-6 leading-relaxed">
                    {project.shortDescription}
                </p>

                <div className="mb-6">
                    <h4 className="text-xs font-bold text-white/70 mb-4 tracking-[0.15em] uppercase">Puntos de Valor</h4>
                    <ul className="flex flex-col gap-3">
                        {project.features.map(feat => (
                            <li key={feat} className="flex items-center text-white/90 font-medium text-sm md:text-base">
                                <span className="mr-3 text-[#111827] bg-white rounded-full p-0.5 shadow-sm">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </span>
                                {feat}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Footer de Tarjeta Integrado */}
                <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
                    {project.url ? (
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-[0_4px_16px_rgba(255,255,255,0.1)] active:scale-[0.98] text-[13px] md:text-sm"
                        >
                            Ver Proyecto
                        </a>
                    ) : (
                        <span className="text-white/40 italic text-xs md:text-sm">Proyecto Interno / En Desarrollo</span>
                    )}

                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                            <span key={tech} className="text-[10px] md:text-xs font-medium tracking-wide px-3 py-1.5 rounded-lg bg-black/30 text-white/80 border border-white/10 backdrop-blur-md">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
