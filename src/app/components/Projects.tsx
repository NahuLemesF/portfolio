import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    id: 1,
    title: "Dashboard Analytics",
    description:
      "Plataforma de analítica en tiempo real con gráficos interactivos, gestión de usuarios y reportes automatizados.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2Z0d2FyZSUyMGRhc2hib2FyZCUyMGRhcmt8ZW58MXx8fHwxNzc2MjgwOTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "TypeScript", "Spring Boot", "PostgreSQL"],
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Tienda en línea con carrito de compras, pasarela de pagos, panel de administración y API REST completa.",
    image:
      "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3NzYyODA5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Java", "React", "Docker", "MySQL"],
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description:
      "Aplicación móvil con autenticación biométrica, transferencias en tiempo real y notificaciones push.",
    image:
      "https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzc2MjY1OTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React Native", "Node.js", "MongoDB"],
  },
  {
    id: 4,
    title: "API Microservices",
    description:
      "Arquitectura de microservicios con gateway, service discovery, circuit breaker y testing automatizado.",
    image:
      "https://images.unsplash.com/photo-1667372335936-3dc4ff716017?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBUEklMjBtaWNyb3NlcnZpY2VzJTIwYXJjaGl0ZWN0dXJlJTIwZGlhZ3JhbXxlbnwxfHx8fDE3NzYyODA5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Spring Boot", "Docker", "Karate DSL", "k6"],
  },
];

export function Projects() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));

  return (
    <section id="proyectos" className="h-full flex flex-col items-center justify-center py-6 px-6">
      <div className="max-w-6xl mx-auto w-full">
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
            {"// proyectos"}
          </span>
          <h2 className="text-foreground mt-2" style={{ fontSize: "2rem", fontWeight: 700 }}>
            Trabajo Destacado
          </h2>
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
              <div className="rounded-2xl overflow-hidden border border-border bg-card">
                <ImageWithFallback
                  src={projects[current].image}
                  alt={projects[current].title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="space-y-5">
                <h3 className="text-foreground" style={{ fontSize: "1.5rem", fontWeight: 600 }}>
                  {projects[current].title}
                </h3>
                <p className="text-muted-foreground" style={{ lineHeight: 1.7 }}>
                  {projects[current].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {projects[current].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      style={{ fontSize: "0.75rem", fontFamily: "JetBrains Mono, monospace" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com"
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
              {projects.map((_, i) => (
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
      </div>
    </section>
  );
}
