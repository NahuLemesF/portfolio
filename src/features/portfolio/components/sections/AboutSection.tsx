import { motion } from "motion/react";
import { aboutHighlights, portfolioProfile } from "@/features/portfolio/content/portfolio-data";
import { SectionHeader } from "@/features/portfolio/components/ui/SectionHeader";
import { SectionShell } from "@/features/portfolio/components/ui/SectionShell";
import { SurfaceCard } from "@/features/portfolio/components/ui/SurfaceCard";

export function AboutSection() {
  return (
    <SectionShell id="sobre-mi" size="4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader eyebrow="// sobre mí" title="Quién soy" className="mb-16" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="p-2 md:p-0"
      >
        <p className="text-foreground mb-5" style={{ lineHeight: 1.8, fontSize: "1.05rem" }}>
          Soy <strong>{portfolioProfile.name}</strong>,{" "}
          {portfolioProfile.aboutParagraphs[0].replace(`Soy ${portfolioProfile.name}, `, "")}
        </p>

        <p className="text-muted-foreground mb-8" style={{ lineHeight: 1.8 }}>
          {portfolioProfile.aboutParagraphs[1]}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {aboutHighlights.map((item, i) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
            >
              <SurfaceCard className="p-5 bg-card border-border/40 text-center hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3.5 transition-transform duration-300 group-hover:scale-110">
                  <item.icon size={20} />
                </div>
                <p className="text-foreground mb-1" style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                  {item.label}
                </p>
                <p className="text-muted-foreground" style={{ fontSize: "0.8rem", lineHeight: 1.4 }}>
                  {item.description}
                </p>
              </SurfaceCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionShell>
  );
}
