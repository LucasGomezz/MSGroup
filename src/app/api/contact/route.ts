import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Evita que un nombre/mensaje con HTML raro rompa el render del mail
function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: NextRequest) {
  try {
    const { name, company, email, service, message } = await request.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Web Maritima Group <onboarding@resend.dev>",
      to: ["mintheragroup@gmail.com"],
      replyTo: email,
      subject: `Nueva consulta de ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>Nueva consulta desde la web</h2>
          <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
          <p><strong>Empresa:</strong> ${escapeHtml(company || "-")}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Servicio:</strong> ${escapeHtml(service || "-")}</p>
          <p><strong>Consulta:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "No se pudo enviar el mail" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}