import Link from "next/link";

export function Header() {
    const navLinks = [
        { name: "Inicio", href: "#home" },
        { name: "Servicios", href: "#services" },
        { name: "Proceso", href: "#process" },
        { name: "Portafolio", href: "#portfolio" },
    ];

    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50 py-4 px-6 md:px-8 bg-white/10 backdrop-blur-xl border border-white/40 shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),_0_8px_32px_rgba(0,0,0,0.15)] rounded-full transition-all duration-300">
            <div className="flex justify-between items-center">
                <Link href="/" className="text-2xl font-black tracking-widest text-white hover:text-white/80 transition-colors drop-shadow-md">
                    AXCAP
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-sm font-semibold tracking-wide text-white/90 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button - Placeholder */}
                <button className="md:hidden text-white flex flex-col gap-1.5 p-2 transition-transform hover:scale-110">
                    <span className="w-6 h-0.5 bg-current block rounded-full"></span>
                    <span className="w-6 h-0.5 bg-current block rounded-full"></span>
                    <span className="w-4 h-0.5 bg-current block ml-auto rounded-full shadow-sm"></span>
                </button>
            </div>
        </header>
    );
}
