import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/linkedin_profile.png";
import { heroActions, portfolioProfile } from "@/features/portfolio/content/portfolio-data";
import { ActionLinks } from "@/features/portfolio/components/ui/ActionLinks";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="h-screen flex items-center justify-center relative overflow-hidden px-6"
    >
      {/* Background elegant gradient blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div
          className="absolute bottom-1/4 -left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          {/* Floating and glowing profile container */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative group cursor-pointer"
          >
            {/* Outer soft glowing halo */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-indigo-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-background bg-card shadow-2xl">
              <img src={profilePhoto} alt="Nahuel Lemes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-3 bg-gradient-to-r from-foreground via-primary to-indigo-600 bg-clip-text text-transparent tracking-tight"
          style={{
            fontSize: "clamp(2.25rem, 6vw, 3.75rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            fontFamily: "Inter, sans-serif",
          }}
        >
          {portfolioProfile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-primary mb-5"
          style={{
            fontSize: "clamp(0.95rem, 2.5vw, 1.25rem)",
            fontWeight: 600,
            fontFamily: "JetBrains Mono, monospace",
          }}
        >
          {portfolioProfile.heroRole}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-muted-foreground max-w-xl mx-auto mb-10"
          style={{ fontSize: "1.05rem", lineHeight: 1.75 }}
        >
          {portfolioProfile.heroDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center"
        >
          <ActionLinks items={heroActions} variant="pill" className="items-center justify-center gap-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16"
        >
          <button
            onClick={() => document.querySelector("#sobre-mi")?.scrollIntoView({ behavior: "smooth" })}
            className="text-muted-foreground hover:text-primary transition-colors animate-bounce p-2 rounded-full hover:bg-primary/5 cursor-pointer"
            aria-label="Ver más"
          >
            <ChevronDown size={28} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
