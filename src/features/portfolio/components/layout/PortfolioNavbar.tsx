import { useState, type RefObject } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { navigationLinks, portfolioProfile } from "@/features/portfolio/content/portfolio-data";
import { usePortfolioNavigation } from "@/features/portfolio/hooks/usePortfolioNavigation";
import { useThemeMode } from "@/features/portfolio/hooks/useThemeMode";

interface NavbarProps {
  scrollContainerRef?: RefObject<HTMLDivElement | null>;
}

export function PortfolioNavbar({ scrollContainerRef }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useThemeMode();
  const { activeSection, scrolled, scrollToSection } = usePortfolioNavigation({
    links: navigationLinks,
    scrollContainerRef,
  });

  const handleClick = (href: string) => {
    setMobileOpen(false);
    scrollToSection(href);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => handleClick("#inicio")}
          className="text-primary tracking-tight"
          style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "1.1rem", fontWeight: 600 }}
        >
          {portfolioProfile.brandMark}
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navigationLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className={`transition-colors duration-300 ${
                activeSection === l.href
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-primary"
              }`}
              style={{ fontSize: "0.875rem" }}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-muted/50 hover:bg-muted text-foreground transition-all duration-300"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-muted/50 text-foreground"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-foreground">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navigationLinks.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleClick(l.href)}
                  className={`text-left transition-colors ${
                    activeSection === l.href
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
