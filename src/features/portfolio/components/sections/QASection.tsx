import { motion } from "motion/react";
import { Search, BoltIcon } from "lucide-react";
import {
  automationQaItems,
  manualQaItems,
} from "@/features/portfolio/content/portfolio-data";
import { SectionHeader } from "@/features/portfolio/components/ui/SectionHeader";
import { SectionShell } from "@/features/portfolio/components/ui/SectionShell";
import { SurfaceCard } from "@/features/portfolio/components/ui/SurfaceCard";

export function QASection() {
  return (
    <SectionShell id="qa" size="5xl" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />

      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="// quality assurance"
            title="QA & Testing"
            description="Garantizo la calidad del software con pruebas manuales rigurosas y automatización end-to-end."
            className="mb-16"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SurfaceCard className="p-8">
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
            </SurfaceCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SurfaceCard className="p-8 border-primary/20 relative overflow-hidden">
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
            </SurfaceCard>
          </motion.div>
        </div>
      </div>
    </SectionShell>
  );
}
