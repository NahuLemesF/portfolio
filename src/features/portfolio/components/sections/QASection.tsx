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
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SurfaceCard className="p-8 bg-card/65 backdrop-blur-xl border-border/50 hover:border-primary/25 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
              <h3
                className="text-foreground mb-6 flex items-center gap-2.5 relative z-10"
                style={{ fontSize: "1.15rem", fontWeight: 650 }}
              >
                <Search size={20} className="text-primary" />
                Pruebas Manuales
              </h3>
              <div className="space-y-4 relative z-10">
                {manualQaItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-4 p-3.5 rounded-xl hover:bg-primary/5 hover:translate-x-1.5 transition-all duration-350 group cursor-default"
                  >
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-foreground font-medium transition-colors group-hover:text-primary" style={{ fontSize: "0.925rem" }}>
                        {item.name}
                      </p>
                      <p className="text-muted-foreground mt-0.5" style={{ fontSize: "0.8rem", lineHeight: 1.4 }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </SurfaceCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SurfaceCard className="p-8 bg-card/65 backdrop-blur-xl border-border/50 hover:border-primary/25 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
              <h3
                className="text-foreground mb-6 relative z-10 flex items-center gap-2.5"
                style={{ fontSize: "1.15rem", fontWeight: 655 }}
              >
                <BoltIcon size={20} className="text-primary" />
                Automatización
              </h3>
              <div className="space-y-4 relative z-10">
                {automationQaItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-4 p-3.5 rounded-xl hover:bg-primary/5 hover:translate-x-1.5 transition-all duration-350 group cursor-default"
                  >
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-foreground font-medium transition-colors group-hover:text-primary" style={{ fontSize: "0.925rem" }}>
                        {item.name}
                      </p>
                      <p className="text-muted-foreground mt-0.5" style={{ fontSize: "0.8rem", lineHeight: 1.4 }}>
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
