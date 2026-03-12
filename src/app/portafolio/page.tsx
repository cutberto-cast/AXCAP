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
        <PortfolioSection variant="grid" />
      </main>
      <Footer />
    </>
  );
}
