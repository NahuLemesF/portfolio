import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import type { NavLink } from "@/features/portfolio/types/portfolio";

interface UsePortfolioNavigationOptions {
  links: NavLink[];
  scrollContainerRef?: RefObject<HTMLDivElement | null>;
}

export function usePortfolioNavigation({
  links,
  scrollContainerRef,
}: UsePortfolioNavigationOptions) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(links[0]?.href ?? "#inicio");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef?.current;

    const handleScroll = () => {
      const scrollPosition = scrollContainer ? scrollContainer.scrollTop : window.scrollY;
      setScrolled(scrollPosition > 20);
    };

    handleScroll();

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollContainerRef]);

  useEffect(() => {
    const sections = links
      .map(({ href }) => document.getElementById(href.replace("#", "")))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length === 0) return;

        const bestMatch = visibleEntries.reduce((currentBest, candidate) =>
          currentBest.intersectionRatio > candidate.intersectionRatio
            ? currentBest
            : candidate
        );

        setActiveSection(`#${bestMatch.target.id}`);
      },
      {
        root: scrollContainerRef?.current || null,
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observerRef.current?.observe(section));

    return () => observerRef.current?.disconnect();
  }, [links, scrollContainerRef]);

  const scrollToSection = useCallback((href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return {
    activeSection,
    scrolled,
    scrollToSection,
  };
}
