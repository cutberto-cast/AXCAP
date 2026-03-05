import Link from "next/link";

export function Header() {
    const navLinks = [
        { name: "Inicio", href: "#home" },
        { name: "Servicios", href: "#services" },
        { name: "Proceso", href: "#process" },
        { name: "Portafolio", href: "#portfolio" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 py-6 px-4 md:px-12 backdrop-blur-md bg-black/50 border-b border-white/5">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-black tracking-widest text-white hover:text-brand-red transition-colors">
                    AXCAP
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-sm font-medium tracking-wide text-white/80 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button - Placeholder */}
                <button className="md:hidden text-white flex flex-col gap-1.5 p-2">
                    <span className="w-6 h-0.5 bg-white block"></span>
                    <span className="w-6 h-0.5 bg-white block"></span>
                    <span className="w-4 h-0.5 bg-white block ml-auto"></span>
                </button>
            </div>
        </header>
    );
}
