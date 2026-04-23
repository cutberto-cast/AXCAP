"use client";

import { useState } from "react";
import { X, ArrowRight, ArrowLeft, CheckCircle2, AlertTriangle, Sparkles } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface QuizAnswers {
    q1_1: string | null;
    q1_2: string | null;
    q2_1: string | null;
    q2_1_other: string;
    q2_2_ecommerce: string[];
    q2_2_reservas: string | null;
    q3_1: string | null;
    q3_2: string | null;
    q4_1: string | null;
    q4_2: string | null;
    q4_3: string[];
    q5_1: string | null;
    q5_2: string | null;
    q5_3: string | null;
    nombre: string;
    email: string;
    telefono: string;
    negocio: string;
    sitioActual: string;
    comentarios: string;
    privacidad: boolean;
}

interface Recommendation {
    solucion: string;
    precioMin: number;
    precioMax: number;
    tiempoSemanas: string;
    incluye: string[];
    alertas: string[];
    descripcion: string;
    presupuestoAlineacion: "alineado" | "bajo" | "alto";
}

// ─── Initial State ────────────────────────────────────────────────────────────

const INITIAL: QuizAnswers = {
    q1_1: null, q1_2: null,
    q2_1: null, q2_1_other: "",
    q2_2_ecommerce: [], q2_2_reservas: null,
    q3_1: null, q3_2: null,
    q4_1: null, q4_2: null, q4_3: [],
    q5_1: null, q5_2: null, q5_3: null,
    nombre: "", email: "", telefono: "", negocio: "",
    sitioActual: "", comentarios: "", privacidad: false,
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmtPrice(n: number): string {
    return "$" + n.toLocaleString("es-MX") + " MXN";
}

// ─── Recommendation Engine ────────────────────────────────────────────────────

function getTipoProyecto(q: string | null): string {
    const m: Record<string, string> = {
        A3: "sitio_servicios", B3: "ecommerce_fisico", C3: "ecommerce_digital",
        D3: "portafolio", E3: "reservas", F3: "landing_leads",
        G3: "institucional", H3: "personalizado",
    };
    return q ? (m[q] ?? "personalizado") : "sitio_servicios";
}

function getNivelDiseno(q: string | null): string {
    const m: Record<string, string> = {
        A6: "premium", B6: "personalizado", C6: "plantilla", D6: "indefinido",
    };
    return q ? (m[q] ?? "indefinido") : "indefinido";
}

function getVolumen(q: string | null): string {
    if (!q) return "medio";
    const c = q[0];
    if (c === "A") return "bajo";
    if (c === "B") return "medio";
    if (c === "C") return "alto";
    return "muy_alto";
}

function getComplejidadEcommerce(feats: string[]): string {
    const n = feats.filter((x) => x !== "G4").length;
    if (n <= 1) return "básica";
    if (n <= 3) return "intermedia";
    return "avanzada";
}

function getBudgetMax(q: string | null): number {
    const m: Record<string, number> = {
        A13: 15000, B13: 35000, C13: 70000, D13: 150000, E13: Infinity, F13: Infinity,
    };
    return q ? (m[q] ?? Infinity) : Infinity;
}

function computeRecommendation(a: QuizAnswers): Recommendation {
    const tipo = getTipoProyecto(a.q2_1);
    const diseno = getNivelDiseno(a.q3_1);
    const volumen = getVolumen(a.q4_1);
    const compEcom = getComplejidadEcommerce(a.q2_2_ecommerce);
    const nInteg = a.q4_3.filter((x) => x !== "H12").length;
    const budgetMax = getBudgetMax(a.q5_1);

    const alertas: string[] = [];
    if (a.q5_2 === "A14" && a.q3_1 === "A6") alertas.push("urgencia_diseno");
    if (a.q4_3.includes("F12")) alertas.push("requiere_llamada_tecnica");
    if (tipo === "personalizado" && a.q3_2 === "C7") alertas.push("requiere_consultoria");
    if (a.q1_2 === "A2" && a.q1_1 === "C1") alertas.push("alerta_inconsistencia");

    let sol: string, pMin: number, pMax: number, tiempo: string, incluye: string[], desc: string;

    if (a.q4_2 === "C11" || nInteg >= 4 || a.q4_3.includes("F12")) {
        sol = "Solución Enterprise"; pMin = 100000; pMax = 250000; tiempo = "10-16 semanas";
        incluye = ["Arquitectura a medida", "Multi-idioma (3+ idiomas)", "Integraciones ERP/CRM complejas", "SEO avanzado", "Soporte dedicado post-lanzamiento"];
        desc = "Para proyectos de alto alcance con integraciones complejas, múltiples idiomas o necesidades enterprise.";
    } else if (["ecommerce_fisico", "ecommerce_digital"].includes(tipo)) {
        if (volumen === "alto" || volumen === "muy_alto" || compEcom === "avanzada") {
            let p = 75000;
            if (a.q2_2_ecommerce.includes("F4")) p += 18000;
            if (a.q4_3.includes("A12")) p += 12000;
            if (volumen === "muy_alto") p += 20000;
            sol = "E-commerce Avanzado"; pMin = 60000; pMax = Math.max(120000, p + 10000); tiempo = "6-10 semanas";
            incluye = ["Catálogo de productos ilimitado", "Múltiples métodos de pago", "Panel de administración avanzado", "Integraciones con plataformas externas", "SEO y velocidad optimizados"];
            desc = "Tienda online robusta con funcionalidades avanzadas y capacidad de escala para negocios en crecimiento.";
        } else {
            let p = 42000;
            if (a.q2_2_ecommerce.includes("B4")) p += 6000;
            if (a.q2_2_ecommerce.includes("D4")) p += 12000;
            sol = "E-commerce Básico"; pMin = 35000; pMax = Math.max(55000, p + 8000); tiempo = "4-6 semanas";
            incluye = ["Hasta 50 productos", "Carrito y checkout optimizado", "Métodos de pago básicos", "Panel fácil de usar"];
            desc = "Tienda online lista para vender con todo lo esencial para comenzar a operar de inmediato.";
        }
    } else if (tipo === "portafolio") {
        sol = "Portafolio Premium"; pMin = 25000; pMax = 50000; tiempo = "3-5 semanas";
        incluye = ["Diseño único y visual", "Galería de trabajos optimizada", "Animaciones y transiciones premium", "Formulario de contacto integrado", "Optimizado para SEO"];
        desc = "Sitio de exhibición con diseño que destaca tu identidad creativa y atrae a tus clientes ideales.";
    } else if (tipo === "reservas") {
        sol = "Sistema de Reservas"; pMin = 40000; pMax = 80000; tiempo = "5-8 semanas";
        incluye = ["Calendario interactivo", "Sistema de citas o reservas", "Notificaciones automáticas por email/SMS", "Pasarela de pagos integrada", "Panel de gestión"];
        desc = "Plataforma completa para gestionar reservas, citas o eventos con automatización y pagos integrados.";
    } else if (tipo === "landing_leads" && volumen === "bajo" && diseno === "plantilla") {
        sol = "Landing Page Express"; pMin = 8000; pMax = 15000; tiempo = "1-2 semanas";
        incluye = ["1 página optimizada para conversión", "Formulario de captura de leads", "Diseño mobile-first", "Integración con WhatsApp"];
        desc = "Página de aterrizaje efectiva para capturar leads y generar conversiones en el menor tiempo posible.";
    } else {
        const esCorp = tipo === "institucional" || diseno === "premium" || volumen === "alto" || volumen === "muy_alto";
        if (esCorp) {
            let p = 45000;
            if (a.q4_2 === "B11") p += 8000;
            if (a.q5_3 === "C15") p += 10000;
            sol = "Sitio Corporativo"; pMin = 30000; pMax = Math.max(60000, p + 10000); tiempo = "4-7 semanas";
            incluye = ["8-15 páginas con diseño personalizado", "SEO técnico básico incluido", "Blog o sección de noticias", "Optimización de conversión"];
            desc = "Presencia digital robusta para empresas que buscan transmitir autoridad y atraer clientes de calidad.";
        } else {
            let p = 22000;
            if (a.q4_2 === "B11") p += 8000;
            if (a.q5_3 === "C15") p += 10000;
            sol = "Sitio Catálogo"; pMin = 15000; pMax = Math.max(30000, p + 5000); tiempo = "2-4 semanas";
            incluye = ["5-8 páginas bien estructuradas", "Diseño semi-personalizado", "Formularios de contacto", "SEO básico y velocidad optimizada"];
            desc = "Sitio web profesional para mostrar tus servicios y atraer clientes con diseño moderno y funcional.";
        }
    }

    if (a.q5_3 === "C15" && !incluye.some((i) => i.toLowerCase().includes("contenido"))) {
        incluye.push("Creación de contenido incluida");
    }

    let presupuestoAlineacion: "alineado" | "bajo" | "alto" = "alineado";
    if (budgetMax < pMin) {
        presupuestoAlineacion = "bajo";
        alertas.push("presupuesto_ajustado");
    } else if (budgetMax > pMax * 1.5 && a.q5_1 !== "F13") {
        presupuestoAlineacion = "alto";
    }

    if (a.q5_2 === "A14" && pMin > 50000) alertas.push("urgencia_critica_precio_alto");

    return { solucion: sol, precioMin: pMin, precioMax: pMax, tiempoSemanas: tiempo, incluye, alertas, descripcion: desc, presupuestoAlineacion };
}

// ─── Visible Steps Logic ──────────────────────────────────────────────────────

function getVisibleSteps(a: QuizAnswers): number[] {
    const steps = [0, 1, 2];
    if (a.q2_1 === "B3" || a.q2_1 === "C3" || a.q2_1 === "E3") steps.push(3);
    steps.push(4, 5, 6, 7, 8, 9, 10, 11);
    return steps;
}

const CONTACT_STEP = 999;

// ─── Option Card ──────────────────────────────────────────────────────────────

function OptionCard({
    selected,
    onClick,
    children,
    multi = false,
}: {
    selected: boolean;
    onClick: () => void;
    children: React.ReactNode;
    multi?: boolean;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm font-medium flex items-center gap-3 group
        ${selected
                    ? "border-[#D4500A] bg-[#FFF5F0] text-[#D4500A]"
                    : "border-gray-200 bg-white text-gray-700 hover:border-[#D4500A]/40 hover:bg-[#FFFAF8]"
                }`}
        >
            <span className={`flex-shrink-0 w-5 h-5 rounded-${multi ? "md" : "full"} border-2 flex items-center justify-center transition-colors duration-200
        ${selected ? "border-[#D4500A] bg-[#D4500A]" : "border-gray-300 group-hover:border-[#D4500A]/50"}`}>
                {selected && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>}
            </span>
            <span>{children}</span>
        </button>
    );
}

// ─── Question Step ────────────────────────────────────────────────────────────

function QuestionStep({
    step,
    answers,
    setAnswer,
    toggleMulti,
    onNext,
    onBack,
    canGoBack,
}: {
    step: number;
    answers: QuizAnswers;
    setAnswer: <K extends keyof QuizAnswers>(k: K, v: QuizAnswers[K]) => void;
    toggleMulti: (k: "q2_2_ecommerce" | "q4_3", v: string) => void;
    onNext: () => void;
    onBack: () => void;
    canGoBack: boolean;
}) {
    const tipo = getTipoProyecto(answers.q2_1);

    let canProceed = false;
    let blockLabel = "";
    let question = "";
    let hint = "";
    let content: React.ReactNode = null;

    if (step === 0) {
        blockLabel = "Bloque 1 · Tu negocio";
        question = "¿Ya cuentas con identidad visual definida?";
        hint = "Logo, colores y tipografía";
        canProceed = !!answers.q1_1;
        content = (
            <div className="flex flex-col gap-2">
                {([["A1", "Sí, tengo todo definido (logo, colores, tipografía)"], ["B1", "Tengo logo pero nada más"], ["C1", "No tengo nada todavía"]] as [string, string][]).map(([k, v]) => (
                    <OptionCard key={k} selected={answers.q1_1 === k} onClick={() => setAnswer("q1_1", k)}>{v}</OptionCard>
                ))}
            </div>
        );
    } else if (step === 1) {
        blockLabel = "Bloque 1 · Tu negocio";
        question = "¿En qué etapa se encuentra tu negocio?";
        canProceed = !!answers.q1_2;
        content = (
            <div className="flex flex-col gap-2">
                {([
                    ["A2", "Ya estoy vendiendo / operando activamente"],
                    ["B2", "Estoy por lanzar en las próximas semanas"],
                    ["C2", "Apenas estoy iniciando (más de 1 mes)"],
                    ["D2", "Es solo una idea por ahora"],
                ] as [string, string][]).map(([k, v]) => (
                    <OptionCard key={k} selected={answers.q1_2 === k} onClick={() => setAnswer("q1_2", k)}>{v}</OptionCard>
                ))}
                {answers.q1_2 === "D2" && (
                    <p className="text-xs text-[#D4500A] bg-[#FFF5F0] border border-[#D4500A]/20 rounded-lg px-3 py-2 mt-1">
                        Perfecto. Te ayudaremos a sentar bases sólidas desde el inicio.
                    </p>
                )}
            </div>
        );
    } else if (step === 2) {
        blockLabel = "Bloque 2 · Tu proyecto";
        question = "¿Cuál es tu objetivo principal con el sitio web?";
        canProceed = !!answers.q2_1 && (answers.q2_1 !== "H3" || answers.q2_1_other.trim().length >= 20);
        content = (
            <div className="flex flex-col gap-2">
                {([
                    ["A3", "Mostrar mis servicios profesionales"],
                    ["B3", "Vender productos físicos (tienda online)"],
                    ["C3", "Vender productos digitales / servicios online"],
                    ["D3", "Mostrar mi portafolio o trabajos"],
                    ["E3", "Recibir reservas o citas"],
                    ["F3", "Generar leads y contactos"],
                    ["G3", "Informar sobre mi empresa u organización"],
                    ["H3", "Otro"],
                ] as [string, string][]).map(([k, v]) => (
                    <OptionCard key={k} selected={answers.q2_1 === k} onClick={() => setAnswer("q2_1", k)}>{v}</OptionCard>
                ))}
                {answers.q2_1 === "H3" && (
                    <textarea
                        className="w-full mt-1 px-3 py-2 rounded-xl border-2 border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-[#D4500A] resize-none"
                        rows={3}
                        placeholder="Describe tu objetivo (mínimo 20 caracteres)..."
                        value={answers.q2_1_other}
                        onChange={(e) => setAnswer("q2_1_other", e.target.value)}
                    />
                )}
            </div>
        );
    } else if (step === 3) {
        if (answers.q2_1 === "B3" || answers.q2_1 === "C3") {
            blockLabel = "Bloque 2 · Tu proyecto";
            question = "¿Necesitas alguna de estas funcionalidades?";
            hint = "Puedes seleccionar varias";
            canProceed = answers.q2_2_ecommerce.length > 0;
            content = (
                <div className="flex flex-col gap-2">
                    {([
                        ["A4", "Gestión de inventario"],
                        ["B4", "Envíos con paqueterías"],
                        ["C4", "Múltiples métodos de pago"],
                        ["D4", "Membresías o suscripciones"],
                        ["E4", "Cupones y descuentos"],
                        ["F4", "Panel de afiliados"],
                        ["G4", "Ninguna de estas"],
                    ] as [string, string][]).map(([k, v]) => (
                        <OptionCard key={k} selected={answers.q2_2_ecommerce.includes(k)} onClick={() => toggleMulti("q2_2_ecommerce", k)} multi>{v}</OptionCard>
                    ))}
                </div>
            );
        } else if (answers.q2_1 === "E3") {
            blockLabel = "Bloque 2 · Tu proyecto";
            question = "¿Qué tipo de reservas necesitas gestionar?";
            canProceed = !!answers.q2_2_reservas;
            content = (
                <div className="flex flex-col gap-2">
                    {([
                        ["A5", "Citas individuales (consultorio, salón de belleza, etc.)"],
                        ["B5", "Reservas de espacios o salas"],
                        ["C5", "Eventos o experiencias grupales"],
                        ["D5", "Alquiler de productos o equipos"],
                    ] as [string, string][]).map(([k, v]) => (
                        <OptionCard key={k} selected={answers.q2_2_reservas === k} onClick={() => setAnswer("q2_2_reservas", k)}>{v}</OptionCard>
                    ))}
                </div>
            );
        }
    } else if (step === 4) {
        blockLabel = "Bloque 3 · Diseño";
        question = "¿Qué tan importante es que el diseño sea 100% único y personalizado?";
        canProceed = !!answers.q3_1;
        content = (
            <div className="flex flex-col gap-2">
                {([
                    ["A6", "Muy importante — quiero algo totalmente original"],
                    ["B6", "Importante, pero puede partir de referencias existentes"],
                    ["C6", "No es prioritario — prefiero rapidez y menor costo"],
                    ["D6", "No estoy seguro todavía"],
                ] as [string, string][]).map(([k, v]) => (
                    <OptionCard key={k} selected={answers.q3_1 === k} onClick={() => setAnswer("q3_1", k)}>{v}</OptionCard>
                ))}
            </div>
        );
    } else if (step === 5) {
        blockLabel = "Bloque 3 · Diseño";
        question = "¿Tienes ejemplos de sitios que te gusten?";
        canProceed = !!answers.q3_2;
        content = (
            <div className="flex flex-col gap-2">
                {([
                    ["A7", "Sí, tengo 2-3 referencias claras"],
                    ["B7", "Tengo ideas pero no ejemplos concretos"],
                    ["C7", "Confío en que me asesoren"],
                ] as [string, string][]).map(([k, v]) => (
                    <OptionCard key={k} selected={answers.q3_2 === k} onClick={() => setAnswer("q3_2", k)}>{v}</OptionCard>
                ))}
            </div>
        );
    } else if (step === 6) {
        blockLabel = "Bloque 4 · Alcance";
        canProceed = !!answers.q4_1;
        if (["sitio_servicios", "institucional"].includes(tipo)) {
            question = "¿Cuántos servicios o secciones aproximadamente mostrarás?";
            content = (
                <div className="flex flex-col gap-2">
                    {([["A8", "1-3 servicios"], ["B8", "4-8 servicios"], ["C8", "9-15 servicios"], ["D8", "Más de 15"]] as [string, string][]).map(([k, v]) => (
                        <OptionCard key={k} selected={answers.q4_1 === k} onClick={() => setAnswer("q4_1", k)}>{v}</OptionCard>
                    ))}
                </div>
            );
        } else if (["ecommerce_fisico", "ecommerce_digital"].includes(tipo)) {
            question = "¿Cuántos productos planeas tener inicialmente?";
            content = (
                <div className="flex flex-col gap-2">
                    {([["A9", "Menos de 20 productos"], ["B9", "20-50 productos"], ["C9", "50-200 productos"], ["D9", "Más de 200 productos"]] as [string, string][]).map(([k, v]) => (
                        <OptionCard key={k} selected={answers.q4_1 === k} onClick={() => setAnswer("q4_1", k)}>{v}</OptionCard>
                    ))}
                </div>
            );
        } else if (tipo === "portafolio") {
            question = "¿Cuántos proyectos o trabajos mostrarás?";
            content = (
                <div className="flex flex-col gap-2">
                    {([["A10", "Menos de 10 trabajos"], ["B10", "10-30 trabajos"], ["C10", "Más de 30 trabajos"]] as [string, string][]).map(([k, v]) => (
                        <OptionCard key={k} selected={answers.q4_1 === k} onClick={() => setAnswer("q4_1", k)}>{v}</OptionCard>
                    ))}
                </div>
            );
        } else {
            question = "¿Cuántas páginas o secciones necesitas aproximadamente?";
            content = (
                <div className="flex flex-col gap-2">
                    {([["A8", "1-3 páginas"], ["B8", "4-8 páginas"], ["C8", "9-15 páginas"], ["D8", "Más de 15"]] as [string, string][]).map(([k, v]) => (
                        <OptionCard key={k} selected={answers.q4_1 === k} onClick={() => setAnswer("q4_1", k)}>{v}</OptionCard>
                    ))}
                </div>
            );
        }
    } else if (step === 7) {
        blockLabel = "Bloque 4 · Alcance";
        question = "¿El sitio necesita estar en varios idiomas?";
        canProceed = !!answers.q4_2;
        content = (
            <div className="flex flex-col gap-2">
                {([
                    ["A11", "Solo español"],
                    ["B11", "Español e inglés"],
                    ["C11", "3 o más idiomas"],
                ] as [string, string][]).map(([k, v]) => (
                    <OptionCard key={k} selected={answers.q4_2 === k} onClick={() => setAnswer("q4_2", k)}>{v}</OptionCard>
                ))}
            </div>
        );
    } else if (step === 8) {
        blockLabel = "Bloque 4 · Alcance";
        question = "¿Necesitas conectar tu sitio con otras herramientas?";
        hint = "Puedes seleccionar varias";
        canProceed = answers.q4_3.length > 0;
        content = (
            <div className="flex flex-col gap-2">
                {([
                    ["A12", "CRM (HubSpot, Salesforce, etc.)"],
                    ["B12", "Email marketing (Mailchimp, etc.)"],
                    ["C12", "WhatsApp Business"],
                    ["D12", "Redes sociales"],
                    ["E12", "Pasarelas de pago"],
                    ["F12", "ERP o sistema interno"],
                    ["G12", "Google Analytics / Facebook Pixel"],
                    ["H12", "Ninguna por ahora"],
                ] as [string, string][]).map(([k, v]) => (
                    <OptionCard key={k} selected={answers.q4_3.includes(k)} onClick={() => toggleMulti("q4_3", k)} multi>{v}</OptionCard>
                ))}
            </div>
        );
    } else if (step === 9) {
        blockLabel = "Bloque 5 · Expectativas";
        question = "¿Qué rango de inversión tienes contemplado?";
        hint = "Esto nos ayuda a recomendarte la mejor opción. No es un compromiso.";
        canProceed = !!answers.q5_1;
        content = (
            <div className="flex flex-col gap-2">
                {([
                    ["A13", "Menos de $15,000 MXN"],
                    ["B13", "$15,000 - $35,000 MXN"],
                    ["C13", "$35,000 - $70,000 MXN"],
                    ["D13", "$70,000 - $150,000 MXN"],
                    ["E13", "Más de $150,000 MXN"],
                    ["F13", "Prefiero no especificar"],
                ] as [string, string][]).map(([k, v]) => (
                    <OptionCard key={k} selected={answers.q5_1 === k} onClick={() => setAnswer("q5_1", k)}>{v}</OptionCard>
                ))}
            </div>
        );
    } else if (step === 10) {
        blockLabel = "Bloque 5 · Expectativas";
        question = "¿En cuánto tiempo necesitas el sitio?";
        canProceed = !!answers.q5_2;
        content = (
            <div className="flex flex-col gap-2">
                {([
                    ["A14", "Lo antes posible (menos de 2 semanas)"],
                    ["B14", "En 3-4 semanas"],
                    ["C14", "En 1-2 meses"],
                    ["D14", "Tengo flexibilidad (más de 2 meses)"],
                ] as [string, string][]).map(([k, v]) => (
                    <OptionCard key={k} selected={answers.q5_2 === k} onClick={() => setAnswer("q5_2", k)}>{v}</OptionCard>
                ))}
                {answers.q5_2 === "A14" && answers.q3_1 === "A6" && (
                    <div className="flex items-start gap-2 mt-2 px-3 py-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs">
                        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>Un diseño 100% personalizado requiere más tiempo. Considera ajustar el tiempo estimado o la complejidad del diseño.</span>
                    </div>
                )}
            </div>
        );
    } else if (step === 11) {
        blockLabel = "Bloque 5 · Expectativas";
        question = "¿Quién creará el contenido del sitio?";
        hint = "Textos, fotos y videos";
        canProceed = !!answers.q5_3;
        content = (
            <div className="flex flex-col gap-2">
                {([
                    ["A15", "Ya tengo todo el contenido listo"],
                    ["B15", "Tengo parte, necesito ayuda con el resto"],
                    ["C15", "Necesito que me ayuden con todo"],
                    ["D15", "No estoy seguro todavía"],
                ] as [string, string][]).map(([k, v]) => (
                    <OptionCard key={k} selected={answers.q5_3 === k} onClick={() => setAnswer("q5_3", k)}>{v}</OptionCard>
                ))}
            </div>
        );
    }

    return (
        <div>
            {blockLabel && (
                <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#D4500A] mb-2">{blockLabel}</p>
            )}
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">{question}</h3>
            {hint && <p className="text-xs text-gray-500 mb-4">{hint}</p>}
            {!hint && <div className="mb-4" />}
            {content}
            <div className="flex items-center justify-between mt-6">
                <button
                    type="button"
                    onClick={onBack}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${canGoBack ? "text-gray-600 hover:bg-gray-100" : "text-gray-300 pointer-events-none"}`}
                >
                    <ArrowLeft className="w-4 h-4" /> Atrás
                </button>
                <button
                    type="button"
                    onClick={onNext}
                    disabled={!canProceed}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D4500A] text-white text-sm font-semibold transition-all hover:bg-[#B84308] disabled:opacity-40 disabled:pointer-events-none"
                >
                    Continuar <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

function ContactForm({
    answers,
    setAnswer,
    errors,
    onSubmit,
    isSubmitting,
    onBack,
}: {
    answers: QuizAnswers;
    setAnswer: <K extends keyof QuizAnswers>(k: K, v: QuizAnswers[K]) => void;
    errors: Record<string, string>;
    onSubmit: (e: React.FormEvent) => void;
    isSubmitting: boolean;
    onBack: () => void;
}) {
    return (
        <form onSubmit={onSubmit} noValidate>
            <div className="mb-5">
                <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-[#D4500A]" />
                    <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#D4500A]">¡Casi listo!</p>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Déjanos tus datos</h3>
                <p className="text-sm text-gray-500">Basado en tus respuestas, tenemos una recomendación lista. Te la enviamos junto con una propuesta personalizada.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Nombre completo *</label>
                    <input
                        type="text"
                        value={answers.nombre}
                        onChange={(e) => setAnswer("nombre", e.target.value)}
                        className={`w-full px-3 py-2.5 rounded-xl border-2 text-sm transition-colors focus:outline-none ${errors.nombre ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#D4500A]"}`}
                        placeholder="Tu nombre"
                    />
                    {errors.nombre && <p className="text-xs text-red-500 mt-1">{errors.nombre}</p>}
                </div>
                <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Correo electrónico *</label>
                    <input
                        type="email"
                        value={answers.email}
                        onChange={(e) => setAnswer("email", e.target.value)}
                        className={`w-full px-3 py-2.5 rounded-xl border-2 text-sm transition-colors focus:outline-none ${errors.email ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#D4500A]"}`}
                        placeholder="correo@ejemplo.com"
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
                <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Teléfono *</label>
                    <input
                        type="tel"
                        value={answers.telefono}
                        onChange={(e) => setAnswer("telefono", e.target.value)}
                        className={`w-full px-3 py-2.5 rounded-xl border-2 text-sm transition-colors focus:outline-none ${errors.telefono ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#D4500A]"}`}
                        placeholder="+52 55 1234 5678"
                    />
                    {errors.telefono && <p className="text-xs text-red-500 mt-1">{errors.telefono}</p>}
                </div>
                <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Nombre del negocio *</label>
                    <input
                        type="text"
                        value={answers.negocio}
                        onChange={(e) => setAnswer("negocio", e.target.value)}
                        className={`w-full px-3 py-2.5 rounded-xl border-2 text-sm transition-colors focus:outline-none ${errors.negocio ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#D4500A]"}`}
                        placeholder="Nombre de tu empresa"
                    />
                    {errors.negocio && <p className="text-xs text-red-500 mt-1">{errors.negocio}</p>}
                </div>
                <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Sitio web actual <span className="text-gray-400 font-normal">(opcional)</span></label>
                    <input
                        type="url"
                        value={answers.sitioActual}
                        onChange={(e) => setAnswer("sitioActual", e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border-2 border-gray-200 text-sm transition-colors focus:outline-none focus:border-[#D4500A]"
                        placeholder="https://tu-sitio.com"
                    />
                </div>
                <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Comentarios adicionales <span className="text-gray-400 font-normal">(opcional)</span></label>
                    <textarea
                        value={answers.comentarios}
                        onChange={(e) => setAnswer("comentarios", e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border-2 border-gray-200 text-sm transition-colors focus:outline-none focus:border-[#D4500A] resize-none"
                        rows={3}
                        placeholder="¿Algo más que quieras contarnos sobre tu proyecto?"
                    />
                </div>
            </div>

            <div className="mt-3">
                <label className={`flex items-start gap-3 cursor-pointer ${errors.privacidad ? "text-red-500" : "text-gray-600"}`}>
                    <div
                        onClick={() => setAnswer("privacidad", !answers.privacidad)}
                        className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${answers.privacidad ? "border-[#D4500A] bg-[#D4500A]" : "border-gray-300"}`}
                    >
                        {answers.privacidad && <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>}
                    </div>
                    <span className="text-xs leading-relaxed">
                        Acepto el aviso de privacidad y los términos de servicio. Entiendo que mis datos serán usados únicamente para enviarme la propuesta personalizada.
                    </span>
                </label>
                {errors.privacidad && <p className="text-xs text-red-500 mt-1 ml-7">{errors.privacidad}</p>}
            </div>

            <div className="flex items-center justify-between mt-6">
                <button
                    type="button"
                    onClick={onBack}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 transition-all"
                >
                    <ArrowLeft className="w-4 h-4" /> Atrás
                </button>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#D4500A] text-white text-sm font-semibold transition-all hover:bg-[#B84308] disabled:opacity-60"
                >
                    {isSubmitting ? "Procesando..." : "Ver mi recomendación"}
                    {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                </button>
            </div>
        </form>
    );
}

// ─── Result Screen ────────────────────────────────────────────────────────────

function ResultScreen({
    recommendation: rec,
    answers,
    onClose,
}: {
    recommendation: Recommendation;
    answers: QuizAnswers;
    onClose: () => void;
}) {
    const tipo = getTipoProyecto(answers.q2_1);
    const tipoLabel: Record<string, string> = {
        sitio_servicios: "Sitio de servicios", ecommerce_fisico: "Tienda online (productos físicos)",
        ecommerce_digital: "Tienda online (productos digitales)", portafolio: "Portafolio creativo",
        reservas: "Sistema de reservas", landing_leads: "Landing page de captación",
        institucional: "Sitio corporativo", personalizado: "Solución personalizada",
    };
    const complejidad = (() => {
        const v = getVolumen(answers.q4_1);
        if (v === "bajo") return "Básica";
        if (v === "medio") return "Media";
        return "Alta";
    })();

    const whatsappMsg = encodeURIComponent(
        `Hola, acabo de completar el asistente de cotización en su sitio web. Mi recomendación fue: ${rec.solucion}. Me gustaría recibir una propuesta formal para ${answers.negocio}.`
    );

    return (
        <div className="space-y-5">
            {/* Summary */}
            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-4">
                <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-3">Resumen de tu proyecto</p>
                <div className="grid grid-cols-3 gap-3">
                    <div>
                        <p className="text-[10px] text-gray-500 mb-0.5">Tipo</p>
                        <p className="text-xs font-semibold text-gray-800">{tipoLabel[tipo] ?? tipo}</p>
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-500 mb-0.5">Complejidad</p>
                        <p className="text-xs font-semibold text-gray-800">{complejidad}</p>
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-500 mb-0.5">Tiempo est.</p>
                        <p className="text-xs font-semibold text-gray-800">{rec.tiempoSemanas}</p>
                    </div>
                </div>
            </div>

            {/* Recommendation */}
            <div className="rounded-2xl border-2 border-[#D4500A]/20 bg-[#FFF5F0] p-4">
                <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                        <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#D4500A] mb-1">Recomendación</p>
                        <h3 className="text-xl font-bold text-gray-900">{rec.solucion}</h3>
                    </div>
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-[#D4500A] flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                    </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{rec.descripcion}</p>
                <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-2">Incluye</p>
                <ul className="space-y-1.5">
                    {rec.incluye.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 shrink-0 text-[#D4500A]" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Investment */}
            <div className="rounded-2xl bg-white border border-gray-200 p-4">
                <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-2">Inversión estimada</p>
                <p className="text-2xl font-bold text-gray-900">
                    {fmtPrice(rec.precioMin)} <span className="text-gray-400 font-normal text-lg">-</span> {fmtPrice(rec.precioMax)}
                </p>
                {rec.presupuestoAlineacion === "alineado" && (
                    <div className="flex items-center gap-2 mt-2 text-xs text-emerald-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        Tu presupuesto está alineado con el alcance del proyecto.
                    </div>
                )}
                {rec.presupuestoAlineacion === "bajo" && (
                    <div className="flex items-start gap-2 mt-2 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
                        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-amber-500" />
                        <span>El alcance de tu proyecto requiere una inversión mayor. Te recomendamos iniciar con una versión MVP con las funcionalidades esenciales y expandir en fases.</span>
                    </div>
                )}
                {rec.presupuestoAlineacion === "alto" && (
                    <div className="flex items-start gap-2 mt-2 text-xs text-[#D4500A] bg-[#FFF5F0] border border-[#D4500A]/20 rounded-xl px-3 py-2">
                        <Sparkles className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>Con tu presupuesto podemos agregar funcionalidades premium, SEO avanzado, soporte extendido u otras mejoras. Lo detallaremos en la propuesta.</span>
                    </div>
                )}
            </div>

            {/* Alerts */}
            {rec.alertas.includes("urgencia_diseno") && (
                <div className="flex items-start gap-2 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>Un diseño 100% personalizado requiere tiempo. En la propuesta te presentaremos un plan de fases realista.</span>
                </div>
            )}
            {rec.alertas.includes("requiere_llamada_tecnica") && (
                <div className="flex items-start gap-2 text-xs text-blue-700 bg-blue-50 border border-blue-200 rounded-xl px-3 py-2">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>La integración con ERP o sistemas internos requiere una sesión técnica. La incluiremos en los próximos pasos.</span>
                </div>
            )}
            {rec.alertas.includes("requiere_consultoria") && (
                <div className="flex items-start gap-2 text-xs text-blue-700 bg-blue-50 border border-blue-200 rounded-xl px-3 py-2">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>Tu proyecto es único. Te recomendamos una sesión de consultoría estratégica (sin costo) para definir el alcance antes de cotizar.</span>
                </div>
            )}

            {/* Next Steps */}
            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-4">
                <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-3">Próximos pasos</p>
                <ol className="space-y-2">
                    {["Revisaremos tu información detallada", "Te enviaremos una propuesta formal en 24-48 horas", "Agendaremos una videollamada para resolver dudas"].map((s, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D4500A] text-white text-[10px] font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                            {s}
                        </li>
                    ))}
                </ol>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
                <a
                    href={`https://wa.me/5210000000000?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#D4500A] text-white text-sm font-semibold hover:bg-[#B84308] transition-all"
                >
                    Solicitar propuesta formal <ArrowRight className="w-4 h-4" />
                </a>
                <button
                    onClick={onClose}
                    className="flex-1 flex items-center justify-center px-5 py-3 rounded-xl border-2 border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 transition-all"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export function QuoteWizard({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<QuizAnswers>(INITIAL);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const visibleSteps = getVisibleSteps(answers);
    const isOnContactStep = step === CONTACT_STEP;
    const isOnResult = submitted && recommendation !== null;
    const totalProgress = visibleSteps.length + 1;
    const currentProgress = isOnContactStep ? visibleSteps.length : Math.max(0, visibleSteps.indexOf(step));
    const progressPct = Math.round((currentProgress / totalProgress) * 100);

    function handleClose() {
        setStep(0);
        setAnswers(INITIAL);
        setIsSubmitting(false);
        setSubmitted(false);
        setRecommendation(null);
        setErrors({});
        onClose();
    }

    function goNext() {
        const idx = visibleSteps.indexOf(step);
        if (idx < visibleSteps.length - 1) {
            setStep(visibleSteps[idx + 1]);
        } else {
            setStep(CONTACT_STEP);
        }
    }

    function goPrev() {
        if (step === CONTACT_STEP) {
            setStep(visibleSteps[visibleSteps.length - 1]);
            return;
        }
        const idx = visibleSteps.indexOf(step);
        if (idx > 0) setStep(visibleSteps[idx - 1]);
    }

    function setAnswer<K extends keyof QuizAnswers>(key: K, value: QuizAnswers[K]) {
        setAnswers((prev) => ({ ...prev, [key]: value }));
    }

    function toggleMulti(key: "q2_2_ecommerce" | "q4_3", value: string) {
        setAnswers((prev) => {
            const arr = prev[key] as string[];
            if (arr.includes(value)) return { ...prev, [key]: arr.filter((x) => x !== value) };
            if (value === "G4") return { ...prev, [key]: ["G4"] };
            if (value === "H12") return { ...prev, [key]: ["H12"] };
            return { ...prev, [key]: arr.filter((x) => x !== "G4" && x !== "H12").concat(value) };
        });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const errs: Record<string, string> = {};
        if (!answers.nombre.trim()) errs.nombre = "Requerido";
        if (!answers.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email)) errs.email = "Email inválido";
        if (!answers.telefono.trim()) errs.telefono = "Requerido";
        if (!answers.negocio.trim()) errs.negocio = "Requerido";
        if (!answers.privacidad) errs.privacidad = "Debes aceptar el aviso de privacidad";

        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }

        setIsSubmitting(true);
        const rec = computeRecommendation(answers);

        try {
            await fetch("/api/quote", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ answers, recommendation: rec }),
            });
        } catch {
            // fail silently — still show result
        }

        setRecommendation(rec);
        setSubmitted(true);
        setIsSubmitting(false);
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-[2rem] shadow-2xl flex flex-col">

                {/* Header */}
                <div className="sticky top-0 z-10 bg-white px-5 sm:px-6 pt-5 pb-4 border-b border-gray-100 rounded-t-[2rem]">
                    <div className="flex items-center justify-between mb-3">
                        <div>
                            <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#D4500A] mb-0.5">
                                Asistente de Cotización
                            </p>
                            <h2 className="text-base sm:text-lg font-bold text-gray-900">
                                {isOnResult ? "¡Tu recomendación está lista!" : "Cuéntanos sobre tu proyecto"}
                            </h2>
                        </div>
                        <button
                            onClick={handleClose}
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    {!isOnResult && (
                        <div className="flex items-center gap-3">
                            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-[#D4500A] rounded-full transition-all duration-500"
                                    style={{ width: `${progressPct}%` }}
                                />
                            </div>
                            <span className="text-xs text-gray-400 font-medium shrink-0">
                                {currentProgress + 1}/{totalProgress}
                            </span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="flex-1 px-5 sm:px-6 py-5">
                    {isOnResult && recommendation ? (
                        <ResultScreen recommendation={recommendation} answers={answers} onClose={handleClose} />
                    ) : isOnContactStep ? (
                        <ContactForm
                            answers={answers}
                            setAnswer={setAnswer}
                            errors={errors}
                            onSubmit={handleSubmit}
                            isSubmitting={isSubmitting}
                            onBack={goPrev}
                        />
                    ) : (
                        <QuestionStep
                            step={step}
                            answers={answers}
                            setAnswer={setAnswer}
                            toggleMulti={toggleMulti}
                            onNext={goNext}
                            onBack={goPrev}
                            canGoBack={visibleSteps.indexOf(step) > 0}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
