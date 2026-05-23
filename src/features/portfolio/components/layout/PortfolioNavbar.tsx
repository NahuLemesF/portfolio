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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-4 left-0 right-0 z-50 px-4 transition-all duration-500`}
    >
      <div
        className={`mx-auto max-w-5xl rounded-2xl border transition-all duration-500 ${
          scrolled
            ? "bg-glass-bg backdrop-blur-xl shadow-xl shadow-primary/5 border-glass-border"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="px-6 py-3.5 flex items-center justify-between">
          <button
            onClick={() => handleClick("#inicio")}
            className="text-primary tracking-tight hover:opacity-85 transition-opacity"
            style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "1.05rem", fontWeight: 700 }}
          >
            {portfolioProfile.brandMark}
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navigationLinks.map((l) => {
              const isActive = activeSection === l.href;
              return (
                <button
                  key={l.href}
                  onClick={() => handleClick(l.href)}
                  className={`relative px-4 py-2 rounded-xl transition-colors duration-300 text-sm font-medium ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-primary/10 rounded-xl"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                  {l.label}
                </button>
              );
            })}
            <div className="w-px h-5 bg-border mx-2" />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-muted/40 hover:bg-muted text-foreground transition-all duration-300 flex items-center justify-center relative overflow-hidden"
              aria-label="Cambiar tema"
            >
              <motion.div
                key={isDark ? "dark" : "light"}
                initial={{ y: -10, opacity: 0, rotate: -90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-primary" />}
              </motion.div>
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-muted/40 text-foreground flex items-center justify-center relative overflow-hidden"
              aria-label="Cambiar tema"
            >
              <motion.div
                key={isDark ? "dark" : "light"}
                initial={{ y: -10, opacity: 0, rotate: -90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-primary" />}
              </motion.div>
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 text-foreground rounded-xl bg-muted/20 hover:bg-muted/40 transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 mx-auto max-w-full rounded-2xl bg-glass-bg backdrop-blur-xl border border-glass-border shadow-xl overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-3">
              {navigationLinks.map((l) => {
                const isActive = activeSection === l.href;
                return (
                  <button
                    key={l.href}
                    onClick={() => handleClick(l.href)}
                    className={`px-4 py-2.5 rounded-xl text-left text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted/30 hover:text-foreground"
                    }`}
                  >
                    {l.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
