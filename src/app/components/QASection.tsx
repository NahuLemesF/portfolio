import { motion } from "motion/react";
import { Search, BoltIcon } from "lucide-react";
import {
  automationQaItems,
  manualQaItems,
} from "@/features/portfolio/content/portfolio-data";

export function QASection() {
  return (
    <section id="qa" className="h-full flex flex-col items-center justify-center py-6 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-primary"
            style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.8rem" }}
          >
            {"// quality assurance"}
          </span>
          <h2 className="text-foreground mt-2" style={{ fontSize: "2rem", fontWeight: 700 }}>
            QA & Testing
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto" style={{ lineHeight: 1.7 }}>
            Garantizo la calidad del software con pruebas manuales rigurosas
            y automatización end-to-end.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-card border border-border"
          >
            <h3
              className="text-foreground mb-6 flex items-center gap-2"
              style={{ fontSize: "1.1rem", fontWeight: 600 }}
            >
              <Search size={18} className="text-primary" />
              Pruebas Manuales
            </h3>
            <div className="space-y-4">
              {manualQaItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-foreground" style={{ fontWeight: 500 }}>
                      {item.name}
                    </p>
                    <p className="text-muted-foreground" style={{ fontSize: "0.8rem" }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-card border border-primary/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            <h3
              className="text-foreground mb-6 relative flex items-center gap-2"
              style={{ fontSize: "1.1rem", fontWeight: 600 }}
            >
              <BoltIcon size={18} className="text-primary" />
              Automatización
            </h3>
            <div className="space-y-4 relative">
              {automationQaItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-foreground" style={{ fontWeight: 500 }}>
                      {item.name}
                    </p>
                    <p className="text-muted-foreground" style={{ fontSize: "0.8rem" }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
