import Link from "next/link";

export function Header() {
    const navLinks = [
        { name: "Inicio", href: "#home" },
        { name: "Servicios", href: "#services" },
        { name: "Proceso", href: "#process" },
        { name: "Portafolio", href: "#portfolio" },
    ];

    return (
        <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-w-7xl z-50 py-3 sm:py-4 px-3 sm:px-6 md:px-8 bg-white/10 backdrop-blur-xl border border-white/40 shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),_0_8px_32px_rgba(0,0,0,0.15)] rounded-full transition-all duration-300">
            <div className="flex justify-between items-center w-full">
                <Link href="/" className="text-sm sm:text-xl md:text-2xl font-black tracking-widest text-white hover:text-white/80 transition-colors drop-shadow-md shrink-0">
                    AXCAP
                </Link>

                <nav className="flex items-center flex-1 ml-3 sm:ml-8">
                    <ul className="flex items-center justify-between sm:justify-end gap-1 sm:gap-5 md:gap-8 w-full">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-[9px] sm:text-xs md:text-sm font-semibold tracking-wide text-white/90 hover:text-white transition-colors whitespace-nowrap"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
