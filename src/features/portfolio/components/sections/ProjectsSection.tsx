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
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <SurfaceCard className="overflow-hidden group relative aspect-[4/3] md:aspect-auto md:h-[360px] cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                <ImageWithFallback
                  src={projectItems[current].image}
                  alt={projectItems[current].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </SurfaceCard>
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-foreground tracking-tight" style={{ fontSize: "1.75rem", fontWeight: 700 }}>
                    {projectItems[current].title}
                  </h3>
                  <p className="text-muted-foreground" style={{ lineHeight: 1.8, fontSize: "0.975rem" }}>
                    {projectItems[current].description}
                  </p>
                </div>
                
                <TagList tags={projectItems[current].tags} tagClassName="bg-primary/5 border-primary/10" />
                
                <div className="pt-2">
                  <a
                    href={projectItems[current].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/25 cursor-pointer active:scale-98"
                  >
                    <ExternalLink size={16} />
                    Ver en GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-5 mt-12">
            <button
              onClick={prev}
              aria-label="Proyecto anterior"
              className="p-3 rounded-xl bg-card border border-border/60 text-foreground hover:text-primary hover:border-primary/30 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-sm hover:shadow-md"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2.5 items-center">
              {projectItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ir al proyecto ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === current ? "bg-primary w-8 shadow-sm shadow-primary/20" : "bg-muted-foreground/20 hover:bg-muted-foreground/45 w-2"
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              aria-label="Proyecto siguiente"
              className="p-3 rounded-xl bg-card border border-border/60 text-foreground hover:text-primary hover:border-primary/30 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-sm hover:shadow-md"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
    </SectionShell>
  );
}
