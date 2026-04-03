import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        const { name, email, service, message } = await request.json();

        // Validar que se recibieron los datos principales
        if (!name || !email) {
            return NextResponse.json(
                { error: 'El nombre y el email son obligatorios.' },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>', // Por defecto en Resend hasta que verifiques tu propio dominio
            to: 'axcapweb@gmail.com', // Tu correo de recepción
            subject: `Nuevo mensaje de ${name} desde la web AXCAP`,
            html: `
        <h2>Tienes un nuevo contacto de tu sitio web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Servicio de interés:</strong> ${service}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `
        });

        if (error) {
            console.error('Error enviando el email (Resend):', error);
            return NextResponse.json({ error: 'Hubo un error al enviar el mensaje' }, { status: 500 });
        }

        return NextResponse.json({ success: true, data }, { status: 200 });
    } catch (error) {
        console.error('Error enviando el email:', error);
        return NextResponse.json({ error: 'Hubo un error al enviar el mensaje' }, { status: 500 });
    }
}
