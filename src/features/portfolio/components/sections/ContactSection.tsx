import { useState } from "react";
import { motion } from "motion/react";
import { Send, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";
import { toast } from "sonner";
import { portfolioProfile, socialLinks } from "@/features/portfolio/content/portfolio-data";
import { ActionLinks } from "@/features/portfolio/components/ui/ActionLinks";
import { FormField } from "@/features/portfolio/components/ui/FormField";
import { SectionHeader } from "@/features/portfolio/components/ui/SectionHeader";
import { SectionShell } from "@/features/portfolio/components/ui/SectionShell";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Launch beautiful confetti burst!
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.75 },
      colors: ["#6366f1", "#818cf8", "#4f46e5", "#c084fc"]
    });

    toast.success("¡Excelente!", {
      description: "Redirigiendo a tu aplicación de correo electrónico para enviar el mensaje...",
      duration: 4000,
    });

    setTimeout(() => {
      const subject = encodeURIComponent(`Contacto Portfolio — ${form.name}`);
      const body = encodeURIComponent(
        `Nombre: ${form.name}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`
      );
      window.location.href = `mailto:${portfolioProfile.email}?subject=${subject}&body=${body}`;
      
      // Clear inputs and reset state
      setForm({ name: "", email: "", message: "" });
      setIsSending(false);
    }, 1200);
  };

  return (
    <SectionShell id="contacto" className="w-full py-4" contentClassName="max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader
          eyebrow="// contacto"
          title="Hablemos"
          align="left"
          className="max-w-lg mb-6"
        />
      </motion.div>

      <div className="grid lg:grid-cols-[minmax(0,0.82fr)_minmax(17rem,0.58fr)] gap-8 lg:gap-10 items-start">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-lg p-7 rounded-2xl bg-card/65 backdrop-blur-xl border border-border/50 space-y-5 shadow-xl shadow-primary/2"
        >
          <FormField label="Nombre">
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              disabled={isSending}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border/80 text-foreground placeholder-muted-foreground/40 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all duration-300 shadow-sm disabled:opacity-50"
              placeholder="Tu nombre"
            />
          </FormField>
          <FormField label="Email">
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              disabled={isSending}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border/80 text-foreground placeholder-muted-foreground/40 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all duration-300 shadow-sm disabled:opacity-50"
              placeholder="tu@email.com"
            />
          </FormField>
          <FormField label="Mensaje">
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              disabled={isSending}
              rows={3}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border/80 text-foreground placeholder-muted-foreground/40 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all duration-300 shadow-sm resize-none disabled:opacity-50"
              placeholder="Cuéntame sobre tu proyecto..."
            />
          </FormField>
          <button
            type="submit"
            disabled={isSending}
            className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:-translate-y-0.5 active:scale-98 transition-all duration-300 shadow-lg shadow-primary/15 hover:shadow-primary/25 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          >
            {isSending ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Abriendo correo...
              </>
            ) : (
              <>
                <Send size={16} />
                Enviar Mensaje
              </>
            )}
          </button>
        </motion.form>

        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="w-full"
        >
          <div className="h-full lg:pl-8 lg:border-l border-border flex flex-col justify-center">
            <div>
              <p
                className="text-primary mb-2"
                style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "1.1rem", fontWeight: 600 }}
              >
                {portfolioProfile.brandMark}
              </p>
              <p className="text-foreground" style={{ fontSize: "1rem", fontWeight: 600 }}>
                {portfolioProfile.role}
              </p>
              <p className="text-muted-foreground mt-3" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
                {portfolioProfile.shortBio}
              </p>
            </div>

            <div className="mt-8">
              <p
                className="text-muted-foreground mb-3"
                style={{ fontSize: "0.8rem", fontFamily: "JetBrains Mono, monospace" }}
              >
                {"// redes"}
              </p>
              <ActionLinks items={socialLinks} variant="icon" />
            </div>
          </div>
        </motion.aside>
      </div>
    </SectionShell>
  );
}
