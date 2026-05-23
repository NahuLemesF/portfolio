import { motion } from "motion/react";
import { Calendar } from "lucide-react";
import { educationItems } from "@/features/portfolio/content/portfolio-data";
import { SectionHeader } from "@/features/portfolio/components/ui/SectionHeader";
import { SectionShell } from "@/features/portfolio/components/ui/SectionShell";
import { SurfaceCard } from "@/features/portfolio/components/ui/SurfaceCard";
import { TagList } from "@/features/portfolio/components/ui/TagList";

export function EducationSection() {
  return (
    <SectionShell id="experiencia" size="5xl" className="py-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader eyebrow="// formación" title="Experiencia Académica" className="mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <SurfaceCard className="group p-6 bg-card/65 backdrop-blur-xl border-border/50 hover:border-primary/25 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 shrink-0">
                        <item.icon size={18} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-foreground font-semibold" style={{ fontSize: "1rem", lineHeight: 1.35 }}>
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-1.5 text-muted-foreground shrink-0 bg-muted/40 px-2.5 py-1 rounded-lg"
                      style={{ fontSize: "0.75rem", fontWeight: 500 }}
                    >
                      <Calendar size={12} className="text-primary/70" />
                      {item.period}
                    </div>
                  </div>

                  <p
                    className="text-primary/90 mb-3"
                    style={{ fontSize: "0.825rem", fontFamily: "JetBrains Mono, monospace", fontWeight: 500 }}
                  >
                    {item.institution}
                  </p>
                  <p className="text-muted-foreground mb-5" style={{ fontSize: "0.875rem", lineHeight: 1.65 }}>
                    {item.description}
                  </p>
                </div>

                <TagList
                  tags={item.tags}
                  className="gap-2"
                  tagClassName="px-2.5 py-0.5 bg-primary/5 border-primary/15"
                />
              </SurfaceCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
