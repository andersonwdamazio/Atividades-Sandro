import type { Handler, HandlerEvent } from "@netlify/functions";
import nodemailer from "nodemailer";

interface ContactPayload {
  email: string;
  message: string;
}

const allowedOrigins = (process.env.ALLOWED_ORIGIN ?? "")
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getOrigin(event: HandlerEvent): string {
  return event.headers.origin ?? event.headers.Origin ?? "";
}

function isAllowedOrigin(origin: string): boolean {
  if (!origin || allowedOrigins.includes(origin)) return true;
  return /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
}

function corsHeaders(origin: string) {
  return {
    ...(origin && isAllowedOrigin(origin)
      ? { "Access-Control-Allow-Origin": origin }
      : {}),
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
    "Content-Type": "application/json; charset=utf-8",
  };
}

function jsonResponse(
  statusCode: number,
  origin: string,
  body: Record<string, string>,
) {
  return {
    statusCode,
    headers: corsHeaders(origin),
    body: JSON.stringify(body),
  };
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

const handler: Handler = async (event: HandlerEvent) => {
  const origin = getOrigin(event);

  if (!isAllowedOrigin(origin)) {
    return jsonResponse(403, "", { error: "Origem não autorizada." });
  }

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders(origin), body: "" };
  }

  if (event.httpMethod !== "POST") {
    return jsonResponse(405, origin, { error: "Método não permitido." });
  }

  let payload: ContactPayload;
  try {
    const parsed: unknown = JSON.parse(event.body ?? "{}");
    if (typeof parsed !== "object" || parsed === null) {
      return jsonResponse(400, origin, { error: "Body inválido." });
    }
    payload = parsed as ContactPayload;
  } catch {
    return jsonResponse(400, origin, { error: "Body inválido." });
  }

  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (!email || !message) {
    return jsonResponse(422, origin, {
      error: "Preencha seu e-mail e sua mensagem.",
    });
  }
  if (email.length > 254 || !emailRegex.test(email)) {
    return jsonResponse(422, origin, { error: "Informe um e-mail válido." });
  }
  if (message.length > 5000) {
    return jsonResponse(422, origin, {
      error: "A mensagem deve ter no máximo 5.000 caracteres.",
    });
  }

  const { SMTP_HOST, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } = process.env;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const secure = process.env.SMTP_SECURE === "true";
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_EMAIL || !Number.isFinite(port)) {
    console.error("Configuração SMTP incompleta nas variáveis de ambiente.");
    return jsonResponse(503, origin, {
      error: "O envio de mensagens está temporariamente indisponível.",
    });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br>");
    await transporter.sendMail({
      from: SMTP_USER,
      replyTo: email,
      to: CONTACT_EMAIL,
      subject: "Nova mensagem de contato - Lo-fi Flow",
      text: `E-mail: ${email}\n\nMensagem:\n${message}`,
      html: `<h2>Nova mensagem de contato</h2><p><strong>E-mail:</strong> ${safeEmail}</p><p><strong>Mensagem:</strong></p><p>${safeMessage}</p>`,
    });

    return jsonResponse(200, origin, {
      message: "Mensagem enviada com sucesso. Obrigado pelo contato!",
    });
  } catch (error) {
    console.error("Falha ao enviar e-mail de contato:", error);
    return jsonResponse(500, origin, {
      error: "Não foi possível enviar sua mensagem. Tente novamente mais tarde.",
    });
  }
};

export { handler };
