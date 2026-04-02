import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PortfolioSection } from "@/components/sections/PortfolioSection";

export const metadata = {
  title: "Portafolio | AXCAP",
  description: "Explora nuestros casos de éxito.",
};

export default function PortafolioPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center pt-24 md:pt-32 bg-[#0A0A0E]">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 mb-4">
            <Link href="/" className="inline-flex items-center text-white/70 hover:text-white transition-colors text-sm font-semibold tracking-wide">
                <span className="mr-2">&larr;</span> Volver al inicio
            </Link>
        </div>
        <PortfolioSection variant="grid" />
      </main>
      <Footer />
    </>
  );
}
