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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {aboutHighlights.map((item) => (
            <SurfaceCard
              key={item.label}
              className="p-4 bg-muted/30 border-border/50 text-center"
            >
              <item.icon size={20} className="mx-auto text-primary mb-2" />
              <p className="text-foreground" style={{ fontSize: "0.85rem", fontWeight: 500 }}>
                {item.label}
              </p>
              <p className="text-muted-foreground" style={{ fontSize: "0.75rem" }}>
                {item.description}
              </p>
            </SurfaceCard>
          ))}
        </div>
      </motion.div>
    </SectionShell>
  );
}
