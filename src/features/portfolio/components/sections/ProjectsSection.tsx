import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/features/portfolio/components/media/ImageWithFallback";
import { projectItems } from "@/features/portfolio/content/portfolio-data";
import { SectionHeader } from "@/features/portfolio/components/ui/SectionHeader";
import { SectionShell } from "@/features/portfolio/components/ui/SectionShell";
import { SurfaceCard } from "@/features/portfolio/components/ui/SurfaceCard";
import { TagList } from "@/features/portfolio/components/ui/TagList";

export function ProjectsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? projectItems.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === projectItems.length - 1 ? 0 : c + 1));

  return (
    <SectionShell id="proyectos">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader eyebrow="// proyectos" title="Trabajo Destacado" className="mb-16" />
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <SurfaceCard className="overflow-hidden">
                <ImageWithFallback
                  src={projectItems[current].image}
                  alt={projectItems[current].title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </SurfaceCard>
              <div className="space-y-5">
                <h3 className="text-foreground" style={{ fontSize: "1.5rem", fontWeight: 600 }}>
                  {projectItems[current].title}
                </h3>
                <p className="text-muted-foreground" style={{ lineHeight: 1.7 }}>
                  {projectItems[current].description}
                </p>
                <TagList tags={projectItems[current].tags} />
                <a
                  href={projectItems[current].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20"
                >
                  <ExternalLink size={16} />
                  Ver en GitHub
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              aria-label="Proyecto anterior"
              className="p-3 rounded-xl bg-card border border-border text-foreground hover:border-primary/40 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {projectItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-8" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Proyecto siguiente"
              className="p-3 rounded-xl bg-card border border-border text-foreground hover:border-primary/40 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
    </SectionShell>
  );
}
