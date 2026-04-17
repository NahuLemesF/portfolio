import { motion } from "motion/react";
import { aboutHighlights, portfolioProfile } from "@/features/portfolio/content/portfolio-data";

export function AboutMe() {
  return (
    <section id="sobre-mi" className="h-full flex flex-col items-center justify-center py-6 px-6">
      <div className="max-w-4xl mx-auto w-full">
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
            {"// sobre mí"}
          </span>
          <h2 className="text-foreground mt-2" style={{ fontSize: "2rem", fontWeight: 700 }}>
            Quién soy
          </h2>
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
              <div
                key={item.label}
                className="p-4 rounded-xl bg-muted/30 border border-border/50 text-center"
              >
                <item.icon size={20} className="mx-auto text-primary mb-2" />
                <p className="text-foreground" style={{ fontSize: "0.85rem", fontWeight: 500 }}>
                  {item.label}
                </p>
                <p className="text-muted-foreground" style={{ fontSize: "0.75rem" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
