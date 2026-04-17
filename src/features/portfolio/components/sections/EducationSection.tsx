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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {educationItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <SurfaceCard className="p-5 hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-primary/10 text-primary">
                    <item.icon size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-foreground truncate" style={{ fontSize: "0.95rem", fontWeight: 600 }}>
                      {item.title}
                    </h3>
                  </div>
                  <div
                    className="flex items-center gap-1.5 text-muted-foreground shrink-0"
                    style={{ fontSize: "0.75rem" }}
                  >
                    <Calendar size={12} />
                    {item.period}
                  </div>
                </div>

                <p
                  className="text-primary/70 mb-2"
                  style={{ fontSize: "0.8rem", fontFamily: "JetBrains Mono, monospace" }}
                >
                  {item.institution}
                </p>
                <p className="text-muted-foreground mb-3" style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>
                  {item.description}
                </p>

                <TagList
                  tags={item.tags}
                  className="gap-1.5"
                  tagClassName="px-2 py-0.5 border-primary/15"
                />
              </SurfaceCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
