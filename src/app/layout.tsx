import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AXCAP | Agencia de Desarrollo Digital Premium",
  description: "Construimos experiencias digitales de alto impacto con ingeniería de clase mundial. Especialistas en desarrollo web, Next.js, y diseño UI/UX.",
  keywords: "desarrollo web, Next.js, agencia digital, e-commerce, diseño UI/UX",
  openGraph: {
    title: "AXCAP | Agencia de Desarrollo Digital Premium",
    description: "Construimos experiencias digitales de alto impacto con ingeniería de clase mundial.",
    url: "https://axcap.dev", /* Reemplazar con dominio real */
    siteName: "AXCAP",
    images: [
      {
        url: "/og-image.jpg", /* Pendiente */
        width: 1200,
        height: 630,
        alt: "AXCAP Premium Digital Agency",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AXCAP | Agencia de Desarrollo Digital Premium",
    description: "Construimos experiencias digitales de alto impacto con ingeniería de clase mundial.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased selection:bg-brand-red selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
