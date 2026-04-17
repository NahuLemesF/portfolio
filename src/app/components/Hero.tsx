import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/linkedin_profile.png";
import { heroActions, portfolioProfile } from "@/features/portfolio/content/portfolio-data";

export function Hero() {
  return (
    <section
      id="inicio"
      className="h-screen flex items-center justify-center relative overflow-hidden px-6"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mb-6"
        >
          <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl shadow-primary/20">
            <img src={profilePhoto} alt="Nahuel Lemes" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-foreground mb-2"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            fontFamily: "Inter, sans-serif",
          }}
        >
          {portfolioProfile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-primary mb-4"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
            fontWeight: 500,
            fontFamily: "JetBrains Mono, monospace",
          }}
        >
          {portfolioProfile.heroRole}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-muted-foreground max-w-xl mx-auto mb-10"
          style={{ fontSize: "1.05rem", lineHeight: 1.7 }}
        >
          {portfolioProfile.heroDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {heroActions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noopener noreferrer" : undefined}
              className={
                action.variant === "primary"
                  ? "inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-2xl hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25"
                  : "inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-2xl hover:border-primary/40 transition-all duration-300"
              }
            >
              <action.icon size={18} />
              {action.label}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16"
        >
          <button
            onClick={() => document.querySelector("#sobre-mi")?.scrollIntoView({ behavior: "smooth" })}
            className="text-muted-foreground hover:text-primary transition-colors animate-bounce"
          >
            <ChevronDown size={28} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
