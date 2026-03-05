import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-black py-12 md:py-20 px-4 md:px-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                {/* Brand Column */}
                <div className="flex flex-col gap-6">
                    <Link href="/" className="text-2xl font-black tracking-widest text-white">
                        AXCAP
                    </Link>
                    <p className="text-muted text-sm leading-relaxed max-w-xs">
                        Construimos experiencias digitales de alto impacto con ingeniería de clase mundial.
                    </p>
                </div>

                {/* Navigation Column */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-bold tracking-wide text-sm mb-2 uppercase">Navegación</h4>
                    <ul className="flex flex-col gap-3">
                        <li><Link href="#home" className="text-muted hover:text-white transition-colors text-sm">Inicio</Link></li>
                        <li><Link href="#services" className="text-muted hover:text-white transition-colors text-sm">Servicios</Link></li>
                        <li><Link href="#process" className="text-muted hover:text-white transition-colors text-sm">Proceso</Link></li>
                        <li><Link href="#portfolio" className="text-muted hover:text-white transition-colors text-sm">Portafolio</Link></li>
                    </ul>
                </div>

                {/* Services Column */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-bold tracking-wide text-sm mb-2 uppercase">Servicios</h4>
                    <ul className="flex flex-col gap-3">
                        <li><Link href="#services" className="text-muted hover:text-white transition-colors text-sm">Desarrollo Web Next.js</Link></li>
                        <li><Link href="#services" className="text-muted hover:text-white transition-colors text-sm">E-commerce</Link></li>
                        <li><Link href="#services" className="text-muted hover:text-white transition-colors text-sm">Diseño UI/UX</Link></li>
                        <li><Link href="#services" className="text-muted hover:text-white transition-colors text-sm">Soluciones IA</Link></li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-bold tracking-wide text-sm mb-2 uppercase">Contacto</h4>
                    <a href="mailto:hello@axcap.dev" className="text-muted hover:text-brand-red transition-colors text-sm">
                        hello@axcap.dev
                    </a>
                    <div className="flex gap-4 mt-2">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white">In</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white">Ig</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white">X</a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white">Gh</a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-muted text-xs">
                    © {currentYear} AXCAP. Todos los derechos reservados.
                </p>
                <div className="flex gap-6">
                    <Link href="/privacy" className="text-muted hover:text-white text-xs transition-colors">Política de Privacidad</Link>
                    <Link href="/terms" className="text-muted hover:text-white text-xs transition-colors">Términos de Servicio</Link>
                </div>
            </div>
        </footer>
    );
}
