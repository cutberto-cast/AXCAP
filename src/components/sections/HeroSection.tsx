"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

// --- Animación 3D ---
function ParticleSystem() {
    const ref = useRef<any>(null);
    // Posiciones pre-calculadas en una esfera
    const sphere = random.inSphere(new Float32Array(5000), { radius: 10 });

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#FF1E1E"
                    size={0.05}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

function WireframeSphere() {
    const meshRef = useRef<any>(null);

    useFrame((_state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <Sphere ref={meshRef} args={[2.5, 32, 32]}>
            <meshBasicMaterial color="#E10600" wireframe transparent opacity={0.4} />
        </Sphere>
    );
}

// --- Componente de Interfaz ---
export function HeroSection() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            // Verificar accesibilidad (prefers-reduced-motion)
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

            if (!prefersReducedMotion) {
                // Animaciones complejas de entrada
                const tl = gsap.timeline();

                tl.fromTo(".hero-headline .line",
                    { y: 100, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        stagger: 0.15,
                        ease: "power4.out",
                        delay: 0.2,
                    }
                );

                tl.fromTo(".hero-subheadline",
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
                    "-=0.5"
                );

                tl.fromTo(".hero-cta",
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
                    "-=0.4"
                );
            } else {
                // Fallback accesible
                gsap.fromTo(".hero-content",
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
            className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black"
        >
            {/* Fondo 3D */}
            <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
                <Canvas camera={{ position: [0, 0, 8], fov: 60 }} style={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0 }}>
                    <ambientLight intensity={0.5} />
                    <ParticleSystem />
                    <WireframeSphere />
                </Canvas>
            </div>

            {/* Overlay gradiente inferior para transición fluida */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent z-10" />

            {/* Contenido HTML */}
            <div className="relative z-20 max-w-5xl mx-auto px-4 text-center hero-content pointer-events-none mt-16">
                <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black uppercase text-white leading-[1.1] tracking-tight hero-headline">
                    <div className="overflow-hidden"><span className="block line">Construimos</span></div>
                    <div className="overflow-hidden"><span className="block line">Experiencias Digitales</span></div>
                    <div className="overflow-hidden"><span className="block text-brand-red line">De Alto Impacto</span></div>
                </h1>



                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 pointer-events-auto">
                    <button className="hero-cta w-full sm:w-auto px-8 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-bold tracking-wide rounded-full transition-all duration-300 shadow-lg shadow-brand-red/20 transform hover:-translate-y-1">
                        Ver Portafolio
                    </button>
                    <a
                        href="https://wa.me/5212722974528?text=Hola%20AXCAP,%20tengo%20un%20proyecto%20y%20me%20gustar%C3%ADa%20escribirles."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-cta w-full sm:w-auto px-8 py-4 bg-[#0B0B0F] hover:bg-[#111116] border border-[#25D366] text-white font-bold tracking-wide rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.15)] hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] transform hover:-translate-y-1"
                    >
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366]">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                        </svg>
                        <span>Tienes un proyecto, escríbenos</span>
                    </a>
                </div>
            </div>


        </section>
    );
}
