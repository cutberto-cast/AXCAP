import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#2D3748] px-4 sm:px-6 md:px-12 py-5 sm:py-6 md:py-8">
            <div className="max-w-6xl mx-auto">
                {/* Top Section */}
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    {/* Brand + Contact */}
                    <div className="flex flex-col gap-3 md:max-w-sm">
                        <div className="flex flex-col gap-1">
                            <Link
                                href="/"
                                className="text-lg sm:text-xl font-bold tracking-[0.2em] text-white leading-none"
                            >
                                AXCAP
                            </Link>
                            <p className="text-white/50 text-[11px] sm:text-xs leading-relaxed">
                                Llevamos a los negocios tradicionales al futuro digital.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <a
                                href="mailto:hello@axcap.dev"
                                className="text-white/50 hover:text-[#FF9F0A] transition-colors text-[11px] sm:text-xs"
                            >
                                hello@axcap.dev
                            </a>

                            <div className="flex gap-2">
                                <a
                                    href="https://www.facebook.com/profile.php?id=61583469279335"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#D4500A] hover:text-white transition-all duration-300"
                                >
                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                    </svg>
                                </a>

                                <a
                                    href="https://www.tiktok.com/@axcapdesing?_r=1&_t=ZS-95BdEQ7N9A0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#D4500A] hover:text-white transition-all duration-300"
                                >
                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 448 512">
                                        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:gap-x-12 md:gap-x-16">
                        {/* Navigation */}
                        <div className="flex flex-col gap-1.5">
                            <h4 className="text-white/80 font-semibold tracking-wide text-[10px] uppercase mb-1">
                                Navegación
                            </h4>
                            <ul className="flex flex-col gap-1">
                                <li>
                                    <Link href="#home" className="text-white/50 hover:text-[#FF9F0A] transition-colors text-[11px] sm:text-xs">
                                        Inicio
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#services" className="text-white/50 hover:text-[#FF9F0A] transition-colors text-[11px] sm:text-xs">
                                        Soluciones
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#process" className="text-white/50 hover:text-[#FF9F0A] transition-colors text-[11px] sm:text-xs">
                                        Proceso
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#portfolio" className="text-white/50 hover:text-[#FF9F0A] transition-colors text-[11px] sm:text-xs">
                                        Portafolio
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="flex flex-col gap-1.5">
                            <h4 className="text-white/80 font-semibold tracking-wide text-[10px] uppercase mb-1">
                                Servicios
                            </h4>
                            <ul className="flex flex-col">
                                <li>
                                    <Link href="#services" className="text-white/50 hover:text-[#FF9F0A] transition-colors text-[11px] sm:text-xs">
                                        Páginas Web
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#services" className="text-white/50 hover:text-[#FF9F0A] transition-colors text-[11px] sm:text-xs">
                                        Menú Digital
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#services" className="text-white/50 hover:text-[#FF9F0A] transition-colors text-[11px] sm:text-xs">
                                        Reservas
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#services" className="text-white/50 hover:text-[#FF9F0A] transition-colors text-[11px] sm:text-xs">
                                        Consultoría
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-5 sm:mt-6 pt-3 border-t border-white/10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-white/40 text-[10px] sm:text-[11px]">
                        © {currentYear} AXCAP. Todos los derechos reservados.
                    </p>

                    <div className="flex gap-4">
                        <Link
                            href="/privacy"
                            className="text-white/40 hover:text-white/70 text-[10px] sm:text-[11px] transition-colors"
                        >
                            Privacidad
                        </Link>
                        <Link
                            href="/terms"
                            className="text-white/40 hover:text-white/70 text-[10px] sm:text-[11px] transition-colors"
                        >
                            Términos
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}