import { useState } from "react";
import { motion } from "motion/react";
import { Send, Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:nahulem@gmail.com", label: "Email" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto Portfolio — ${form.name}`);
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`
    );
    window.location.href = `mailto:nahulem@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="w-full px-6 py-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mb-6"
        >
          <span
            className="text-primary"
            style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.8rem" }}
          >
            {"// contacto"}
          </span>
          <h2 className="text-foreground mt-2" style={{ fontSize: "2rem", fontWeight: 700 }}>
            Hablemos
          </h2>
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
            <div>
              <label
                className="text-foreground mb-1.5 block"
                style={{ fontSize: "0.85rem", fontWeight: 500 }}
              >
                Nombre
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground/50 focus:border-primary/50 focus:outline-none transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label
                className="text-foreground mb-1.5 block"
                style={{ fontSize: "0.85rem", fontWeight: 500 }}
              >
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground/50 focus:border-primary/50 focus:outline-none transition-colors"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label
                className="text-foreground mb-1.5 block"
                style={{ fontSize: "0.85rem", fontWeight: 500 }}
              >
                Mensaje
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground/50 focus:border-primary/50 focus:outline-none transition-colors resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </div>
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
                  {`<Nahuel Lemes />`}
                </p>
                <p className="text-foreground" style={{ fontSize: "1rem", fontWeight: 600 }}>
                  Fullstack Developer & QA Engineer
                </p>
                <p className="text-muted-foreground mt-3" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
                  Diseño, desarrollo, pruebo y despliego software con foco en calidad y en una base
                  técnica sólida.
                </p>
              </div>

              <div className="mt-8">
                <p
                  className="text-muted-foreground mb-3"
                  style={{ fontSize: "0.8rem", fontFamily: "JetBrains Mono, monospace" }}
                >
                  {"// redes"}
                </p>
                <div className="flex flex-wrap gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                      aria-label={s.label}
                    >
                      <s.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
