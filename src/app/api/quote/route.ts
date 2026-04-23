import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const { answers, recommendation } = await request.json();

        if (!answers?.nombre || !answers?.email) {
            return NextResponse.json({ error: "Datos incompletos." }, { status: 400 });
        }

        const tipoLabel: Record<string, string> = {
            A3: "Mostrar servicios profesionales",
            B3: "Vender productos físicos",
            C3: "Vender productos digitales",
            D3: "Portafolio / trabajos",
            E3: "Reservas / citas",
            F3: "Generar leads",
            G3: "Sitio institucional",
            H3: "Otro",
        };

        const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="font-family:sans-serif;max-width:640px;margin:0 auto;color:#1F2937;">
  <div style="background:#D4500A;padding:24px 32px;border-radius:12px 12px 0 0;">
    <h1 style="color:white;margin:0;font-size:20px;">🎯 Nueva cotización guiada</h1>
    <p style="color:rgba(255,255,255,0.8);margin:4px 0 0;font-size:14px;">Asistente AxCapital · ${new Date().toLocaleDateString("es-MX", { dateStyle: "full" })}</p>
  </div>

  <div style="border:1px solid #E5E7EB;border-top:none;border-radius:0 0 12px 12px;padding:24px 32px;">

    <h2 style="font-size:16px;color:#D4500A;margin-bottom:12px;">📋 Datos de contacto</h2>
    <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:24px;">
      <tr><td style="padding:6px 0;color:#6B7280;width:40%;">Nombre</td><td style="padding:6px 0;font-weight:600;">${answers.nombre}</td></tr>
      <tr><td style="padding:6px 0;color:#6B7280;">Email</td><td style="padding:6px 0;font-weight:600;">${answers.email}</td></tr>
      <tr><td style="padding:6px 0;color:#6B7280;">Teléfono</td><td style="padding:6px 0;font-weight:600;">${answers.telefono}</td></tr>
      <tr><td style="padding:6px 0;color:#6B7280;">Negocio</td><td style="padding:6px 0;font-weight:600;">${answers.negocio}</td></tr>
      ${answers.sitioActual ? `<tr><td style="padding:6px 0;color:#6B7280;">Sitio actual</td><td style="padding:6px 0;font-weight:600;">${answers.sitioActual}</td></tr>` : ""}
    </table>

    <h2 style="font-size:16px;color:#D4500A;margin-bottom:12px;">💡 Recomendación generada</h2>
    <div style="background:#FFF5F0;border:2px solid #D4500A;border-radius:10px;padding:16px;margin-bottom:24px;">
      <h3 style="margin:0 0 8px;font-size:18px;color:#D4500A;">${recommendation?.solucion ?? "—"}</h3>
      <p style="margin:0 0 8px;font-size:13px;color:#6B7280;">${recommendation?.descripcion ?? ""}</p>
      <p style="margin:0;font-size:15px;font-weight:700;color:#1F2937;">
        Inversión: $${recommendation?.precioMin?.toLocaleString("es-MX")} – $${recommendation?.precioMax?.toLocaleString("es-MX")} MXN
      </p>
      <p style="margin:4px 0 0;font-size:13px;color:#6B7280;">Tiempo estimado: ${recommendation?.tiempoSemanas ?? "—"}</p>
    </div>

    <h2 style="font-size:16px;color:#D4500A;margin-bottom:12px;">📝 Respuestas del cuestionario</h2>
    <table style="width:100%;border-collapse:collapse;font-size:13px;">
      <tr style="background:#F9FAFB;"><th style="text-align:left;padding:8px;color:#6B7280;font-weight:600;">Bloque</th><th style="text-align:left;padding:8px;color:#6B7280;font-weight:600;">Respuesta</th></tr>
      <tr><td style="padding:7px 8px;border-bottom:1px solid #F3F4F6;color:#6B7280;">Identidad visual</td><td style="padding:7px 8px;border-bottom:1px solid #F3F4F6;">${answers.q1_1 ?? "—"}</td></tr>
      <tr><td style="padding:7px 8px;border-bottom:1px solid #F3F4F6;color:#6B7280;">Etapa del negocio</td><td style="padding:7px 8px;border-bottom:1px solid #F3F4F6;">${answers.q1_2 ?? "—"}</td></tr>
      <tr><td style="padding:7px 8px;border-bottom:1px solid #F3F4F6;color:#6B7280;">Objetivo</td><td style="padding:7px 8px;border-bottom:1px solid #F3F4F6;">${tipoLabel[answers.q2_1 ?? ""] ?? answers.q2_1_other ?? "—"}</td></tr>
      ${answers.q2_2_ecommerce?.length > 0 ? `<tr><td style="padding:7px 8px;border-bottom:1px solid #F3F4F6;color:#6B7280;">Funcionalidades ecommerce</td><td style="padding:7px 8px;border-bottom:1px solid #F3F4F6;">${answers.q2_2_ecommerce.join(", ")}</td></tr>` : ""}
      ${answers.q2_2_reservas ? `<tr><td style="padding:7px 8px;border-bottom:1px solid #F3F4F6;color:#6B7280;">Tipo de reservas</td><td style="padding:7px 8px;border-bottom:1px solid #F3F4F6;">${answers.q2_2_reservas}</td></tr>` : ""}
      <tr><td style="padding:7px 8px;border-bottom:1px solid #F3F4F6;color:#6B7280;">Preferencia diseño</td><td style="padding:7px 8px;border-bottom:1px solid #F3F4F6;">${answers.q3_1 ?? "—"}</td></tr>
      <tr><td style="padding:7px 8px;border-bottom:1px solid #F3F4F6;color:#6B7280;">Referencias visuales</td><td style="padding:7px 8px;border-bottom:1px solid #F3F4F6;">${answers.q3_2 ?? "—"}</td></tr>
      <tr><td style="padding:7px 8px;border-bottom:1px solid #F3F4F6;color:#6B7280;">Volumen contenido</td><td style="padding:7px 8px;border-bottom:1px solid #F3F4F6;">${answers.q4_1 ?? "—"}</td></tr>
      <tr><td style="padding:7px 8px;border-bottom:1px solid #F3F4F6;color:#6B7280;">Idiomas</td><td style="padding:7px 8px;border-bottom:1px solid #F3F4F6;">${answers.q4_2 ?? "—"}</td></tr>
      <tr><td style="padding:7px 8px;border-bottom:1px solid #F3F4F6;color:#6B7280;">Integraciones</td><td style="padding:7px 8px;border-bottom:1px solid #F3F4F6;">${answers.q4_3?.join(", ") || "—"}</td></tr>
      <tr><td style="padding:7px 8px;border-bottom:1px solid #F3F4F6;color:#6B7280;">Presupuesto</td><td style="padding:7px 8px;border-bottom:1px solid #F3F4F6;">${answers.q5_1 ?? "—"}</td></tr>
      <tr><td style="padding:7px 8px;border-bottom:1px solid #F3F4F6;color:#6B7280;">Tiempo esperado</td><td style="padding:7px 8px;border-bottom:1px solid #F3F4F6;">${answers.q5_2 ?? "—"}</td></tr>
      <tr><td style="padding:7px 8px;color:#6B7280;">Gestión de contenido</td><td style="padding:7px 8px;">${answers.q5_3 ?? "—"}</td></tr>
    </table>

    ${answers.comentarios ? `
    <div style="margin-top:20px;padding:14px;background:#F9FAFB;border-radius:8px;">
      <p style="font-size:12px;font-weight:600;color:#6B7280;margin:0 0 6px;">COMENTARIOS ADICIONALES</p>
      <p style="font-size:14px;color:#1F2937;margin:0;">${answers.comentarios}</p>
    </div>` : ""}

    ${recommendation?.alertas?.length > 0 ? `
    <div style="margin-top:20px;padding:14px;background:#FFF8E1;border:1px solid #F59E0B;border-radius:8px;">
      <p style="font-size:12px;font-weight:600;color:#92400E;margin:0 0 6px;">⚠️ FLAGS DEL SISTEMA</p>
      <p style="font-size:13px;color:#78350F;margin:0;">${recommendation.alertas.join(" · ")}</p>
    </div>` : ""}

    <div style="margin-top:24px;padding-top:16px;border-top:1px solid #F3F4F6;text-align:center;">
      <p style="font-size:12px;color:#9CA3AF;margin:0;">Generado por el Asistente de Cotización · AxCapital</p>
    </div>
  </div>
</body>
</html>`;

        const { error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: "axcapweb@gmail.com",
            subject: `Nueva cotización: ${recommendation?.solucion ?? "—"} · ${answers.negocio}`,
            html,
        });

        if (error) {
            console.error("Error Resend:", error);
            return NextResponse.json({ error: "Error al enviar el email." }, { status: 500 });
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (err) {
        console.error("Error en /api/quote:", err);
        return NextResponse.json({ error: "Error interno." }, { status: 500 });
    }
}
