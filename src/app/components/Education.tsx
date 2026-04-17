import { motion } from "motion/react";
import { GraduationCap, BookOpen, Award, Calendar } from "lucide-react";

const studies = [
  {
    title: "Ingeniería en Sistemas / Desarrollo de Software",
    institution: "Universidad / Instituto",
    period: "2020 - Presente",
    description:
      "Formación integral en ingeniería de software, algoritmos, estructuras de datos y arquitectura de sistemas.",
    icon: GraduationCap,
    tags: ["Algoritmos", "POO", "Bases de Datos"],
  },
  {
    title: "Fullstack Java Developer",
    institution: "Bootcamp / Certificación",
    period: "2022",
    description:
      "Desarrollo backend con Java, Spring Boot, frontend con React y despliegue con Docker.",
    icon: BookOpen,
    tags: ["Java", "Spring Boot", "React"],
  },
  {
    title: "QA Automation Engineer",
    institution: "Certificación profesional",
    period: "2023",
    description:
      "Automatización de pruebas con Karate DSL, Serenity BDD y pruebas de performance con k6.",
    icon: Award,
    tags: ["Karate DSL", "Serenity BDD", "k6"],
  },
  {
    title: "React & TypeScript Avanzado",
    institution: "Curso especializado",
    period: "2024",
    description:
      "Patrones avanzados de React, TypeScript, testing de componentes y performance optimization.",
    icon: BookOpen,
    tags: ["React", "TypeScript", "Testing"],
  },
];

export function Education() {
  return (
    <section id="experiencia" className="h-full flex flex-col items-center justify-center py-4 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span
            className="text-primary"
            style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.8rem" }}
          >
            {"// formación"}
          </span>
          <h2 className="text-foreground mt-2" style={{ fontSize: "2rem", fontWeight: 700 }}>
            Experiencia Académica
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {studies.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-5 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300"
            >
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

              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/15"
                    style={{ fontSize: "0.65rem", fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
