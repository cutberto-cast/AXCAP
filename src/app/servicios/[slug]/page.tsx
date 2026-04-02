import { servicesData } from "@/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: PageProps) {
    const resolvedParams = await params;
    const service = servicesData.find((s) => s.slug === resolvedParams.slug);

    if (!service) {
        notFound();
    }

    const whatsappLink = `https://wa.me/${service.whatsappNumber}?text=${encodeURIComponent(service.whatsappMessage)}`;

    return (
        <>
            <Header />
            <main className="min-h-screen bg-[#0A0A0E] text-white w-full overflow-x-hidden">

                {/* SECCIÓN 1 – HERO DE SERVICIO */}
                <section className="relative pt-40 md:pt-56 pb-24 md:pb-32 px-4 md:px-12 w-full bg-[#D4500A] overflow-hidden rounded-b-[40px] md:rounded-b-[80px]">
                    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-90 z-0">
                        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full blob-1 animate-blob-1" />
                        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full blob-2 animate-blob-2" />
                        <div className="absolute top-[20%] left-[40%] w-[50%] h-[50%] rounded-full blob-3 animate-blob-3" />
                    </div>

                    <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
                        <div className="w-full justify-start flex mb-8">
                            <Link
                                href="/"
                                className="text-white text-xs sm:text-sm font-bold tracking-widest inline-flex items-center hover:text-white/80 transition-colors bg-white/10 px-5 py-2.5 rounded-full border border-white/20 backdrop-blur-md"
                            >
                                <span className="mr-2">←</span> Regresar al inicio
                            </Link>
                        </div>
                        
                        <div className="p-6 sm:p-12 rounded-[2rem] bg-white/10 backdrop-blur-3xl border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.1),_inset_0_2px_10px_rgba(255,255,255,0.3)] text-center relative overflow-hidden w-full">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                            <div className="relative z-10">
                                <h1 className="text-3xl md:text-5xl lg:text-[4.5rem] font-medium tracking-tight leading-[1.1] mb-6 drop-shadow-sm text-white">
                                    {service.title}
                                </h1>

                                <p className="text-lg md:text-2xl font-bold text-white/90 mb-8 italic drop-shadow-md">
                                    "{service.tagline}"
                                </p>

                                <p className="text-sm sm:text-base md:text-xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto mb-10">
                                    {service.heroDescription}
                                </p>

                                <div className="flex justify-center w-full">
                                    <Link href="#precios" className="btn-glow-uiverse shadow-2xl">
                                        <span className="btn-glow-inner w-full px-4 text-center">Ver paquetes</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECCIÓN 2 – PROBLEMA QUE RESUELVE */}
                <section className="py-24 px-4 md:px-12">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-sm font-bold tracking-[0.2em] text-muted uppercase mb-4 text-center">
                            ¿Tu negocio enfrenta estos retos?
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-black text-center mb-16 max-w-4xl mx-auto text-white">
                            {service.problemStatement}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                            {service.solutions.map((sol, idx) => (
                                <div key={idx} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
                                    <div className="text-5xl mb-6">{sol.icon}</div>
                                    <h4 className="text-2xl font-bold mb-4">{sol.title}</h4>
                                    <p className="text-white/80 leading-relaxed text-lg">{sol.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECCIÓN 3 – BENEFICIOS */}
                <section className="py-24 px-4 md:px-12">
                    <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                                Lo que obtienes con <span className="text-brand-red">AXCAP</span>
                            </h2>
                            <div className="w-20 h-2 bg-brand-red mb-10" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <ul className="flex flex-col gap-6">
                                {service.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex gap-4 items-start">
                                        <div className="w-8 h-8 rounded-full bg-brand-red/20 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-brand-red font-bold">✓</span>
                                        </div>
                                        <p className="text-xl text-white/90 font-medium">{benefit}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* SECCIÓN 4 & 5 – IDEAL PARA Y ENTREGABLES */}
                <section className="py-24 px-4 md:px-12">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Ideal Para */}
                        <div>
                            <h3 className="text-sm font-bold tracking-[0.2em] text-brand-red uppercase mb-8">
                                Ideal Para
                            </h3>
                            <div className="flex flex-col gap-4">
                                {service.idealFor.map((profile, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex items-center gap-4">
                                        <div className="w-2 h-2 rounded-full bg-white/50 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                                        <span className="text-lg font-medium text-white/90">{profile}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Entregables */}
                        <div>
                            <h3 className="text-sm font-bold tracking-[0.2em] text-brand-red uppercase mb-8">
                                Entregables Clave
                            </h3>
                            <div className="relative pl-8 border-l border-white/10 flex flex-col gap-10">
                                {service.deliverables.map((item, idx) => (
                                    <div key={idx} className="relative">
                                        <div className="absolute -left-[41px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black border-2 border-brand-red" />
                                        <p className="text-xl text-white/90">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>

                {/* SECCIÓN 6 – PRECIOS */}
                <section id="precios" className="py-32 px-4 md:px-12 relative">
                    <div className="max-w-7xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Inversión Transparente</h2>
                        <p className="text-xl text-muted max-w-2xl mx-auto">
                            Selecciona el alcance que mejor se adapte al momento de tu empresa.
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        {service.pricing.map((plan, idx) => (
                            <div
                                key={idx}
                                className={cn(
                                    "relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center justify-start text-center border transition-all duration-300",
                                    plan.highlighted
                                        ? "border-[#FF8C3A] scale-100 md:scale-105 z-10 bg-gradient-to-b from-[#FF8C3A]/20 to-transparent shadow-[0_0_40px_rgba(255,140,58,0.2)]"
                                        : "border-white/20 hover:border-white/40"
                                )}
                            >
                                {plan.highlighted && (
                                    <div className="absolute -top-4 bg-gradient-to-r from-[#FF9F0A] to-[#D4500A] text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                                        Más Popular
                                    </div>
                                )}

                                <h4 className="text-2xl font-bold mb-2">{plan.plan}</h4>
                                <p className="text-muted text-sm mb-6 h-10">{plan.description}</p>
                                <div className="text-4xl font-black mb-8">{plan.price}</div>

                                <ul className="flex flex-col gap-4 text-left w-full mb-10 flex-grow">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex gap-3 text-sm text-white/80 items-start">
                                            <span className="text-brand-red mt-0.5">●</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(
                                        "w-full py-4 rounded-full font-bold tracking-wide transition-all mt-auto",
                                        plan.highlighted
                                            ? "bg-gradient-to-r from-[#FF9F0A] to-[#D4500A] hover:opacity-90 text-white shadow-xl"
                                            : "bg-white/10 hover:bg-white/20 text-white backdrop-blur-md"
                                    )}
                                >
                                    Agendar consulta →
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECCIÓN 7 – CTA FINAL */}
                <section className="py-32 px-4 text-center mt-auto border-t border-[#FF8C3A]/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#7A2000]/40 to-transparent z-0" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black mb-8 text-white">
                            ¿Listo para empezar?
                        </h2>
                        <p className="text-xl text-white/70 mb-12">
                            La ingeniería de élite hace la diferencia entre una empresa que sobrevive y una que domina el mercado.
                        </p>
                        <Link
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] hover:bg-[#1ebd5a] text-white text-xl font-bold tracking-wide rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                            </svg>
                            {service.ctaText}
                        </Link>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
