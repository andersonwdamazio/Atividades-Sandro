import { useState, type FormEvent } from "react";
import "../styles/contact.css";

type SendState = "idle" | "sending" | "success" | "error";

interface ContactResponse {
  message?: string;
  error?: string;
}

export default function Contact() {
  const [sendState, setSendState] = useState<SendState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSendState("sending");
    setFeedback("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => ({}))) as ContactResponse;
      if (!response.ok) {
        throw new Error(result.error ?? "Não foi possível enviar sua mensagem.");
      }

      form.reset();
      setSendState("success");
      setFeedback(result.message ?? "Mensagem enviada com sucesso. Obrigado pelo contato!");
    } catch (error) {
      setSendState("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "O envio falhou. Tente novamente em alguns instantes.",
      );
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-content">
        <header className="contact-heading">
          <p>Vamos conversar</p>
          <h2>Entre em contato</h2>
          <span>
            Tem uma dúvida ou quer compartilhar sua opinião? Envie uma mensagem.
            Vamos responder no e-mail informado.
          </span>
        </header>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-email">Seu e-mail</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            placeholder="voce@exemplo.com"
            required
          />

          <label htmlFor="contact-message">Sua mensagem</label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            maxLength={5000}
            placeholder="Como podemos ajudar?"
            required
          />

          <button className="contact-submit" type="submit" disabled={sendState === "sending"}>
            {sendState === "sending" ? "Enviando…" : "Enviar mensagem"}
          </button>

          <p
            className={`contact-feedback ${sendState}`}
            role="status"
            aria-live="polite"
          >
            {feedback}
          </p>
        </form>
      </div>
    </section>
  );
}


