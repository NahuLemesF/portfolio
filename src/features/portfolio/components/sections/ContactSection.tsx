import { useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";
import { portfolioProfile, socialLinks } from "@/features/portfolio/content/portfolio-data";
import { ActionLinks } from "@/features/portfolio/components/ui/ActionLinks";
import { FormField } from "@/features/portfolio/components/ui/FormField";
import { SectionHeader } from "@/features/portfolio/components/ui/SectionHeader";
import { SectionShell } from "@/features/portfolio/components/ui/SectionShell";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto Portfolio — ${form.name}`);
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`
    );
    window.location.href = `mailto:${portfolioProfile.email}?subject=${subject}&body=${body}`;
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
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg p-6 rounded-2xl bg-card/60 backdrop-blur-xl border border-border space-y-4"
        >
          <FormField label="Nombre">
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground/50 focus:border-primary/50 focus:outline-none transition-colors"
              placeholder="Tu nombre"
            />
          </FormField>
          <FormField label="Email">
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground/50 focus:border-primary/50 focus:outline-none transition-colors"
              placeholder="tu@email.com"
            />
          </FormField>
          <FormField label="Mensaje">
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={3}
              className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground/50 focus:border-primary/50 focus:outline-none transition-colors resize-none"
              placeholder="Cuéntame sobre tu proyecto..."
            />
          </FormField>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20"
          >
            <Send size={16} />
            Enviar Mensaje
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
