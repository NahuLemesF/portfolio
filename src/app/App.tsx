import { useRef, useEffect, useCallback } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { TechStack } from "./components/TechStack";
import { QASection } from "./components/QASection";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScrollTo(element: HTMLDivElement, target: number, duration: number) {
  const start = element.scrollTop;
  const distance = target - start;
  let startTime: number | null = null;

  function step(currentTime: number) {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    element.scrollTop = start + distance * easeInOutCubic(progress);
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export default function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const snapTargets = useRef<number[]>([]);

  const updateSnapTargets = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const children = container.querySelectorAll<HTMLDivElement>("[data-snap]");
    snapTargets.current = Array.from(children).map((el) => el.offsetTop);
  }, []);

  useEffect(() => {
    updateSnapTargets();
    window.addEventListener("resize", updateSnapTargets);
    return () => window.removeEventListener("resize", updateSnapTargets);
  }, [updateSnapTargets]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrolling.current) return;

      updateSnapTargets();
      const targets = snapTargets.current;
      if (targets.length === 0) return;

      const currentScroll = container.scrollTop;
      const direction = e.deltaY > 0 ? 1 : -1;

      let currentIndex = 0;
      for (let i = 0; i < targets.length; i++) {
        if (currentScroll >= targets[i] - 50) {
          currentIndex = i;
        }
      }

      const nextIndex = Math.max(0, Math.min(currentIndex + direction, targets.length - 1));

      if (nextIndex === currentIndex) return;

      isScrolling.current = true;
      container.style.scrollSnapType = "none";

      smoothScrollTo(container, targets[nextIndex], 900);

      setTimeout(() => {
        container.style.scrollSnapType = "y mandatory";
        isScrolling.current = false;
      }, 950);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [updateSnapTargets]);

  return (
    <div
      ref={scrollContainerRef}
      className="h-screen overflow-y-auto bg-background text-foreground"
      style={{
        fontFamily: "Inter, sans-serif",
        scrollSnapType: "y mandatory",
      }}
    >
      <Navbar scrollContainerRef={scrollContainerRef} />

      <div className="h-screen" data-snap style={{ scrollSnapAlign: "start" }}>
        <Hero />
      </div>

      <div className="h-screen pt-[72px]" data-snap style={{ scrollSnapAlign: "start" }}>
        <AboutMe />
      </div>
      <div className="h-screen pt-[72px]" data-snap style={{ scrollSnapAlign: "start" }}>
        <Projects />
      </div>
      <div className="h-screen pt-[72px]" data-snap style={{ scrollSnapAlign: "start" }}>
        <TechStack />
      </div>
      <div className="h-screen pt-[72px]" data-snap style={{ scrollSnapAlign: "start" }}>
        <QASection />
      </div>
      <div className="h-screen pt-[72px]" data-snap style={{ scrollSnapAlign: "start" }}>
        <Education />
      </div>

      <div className="h-screen pt-[72px] flex flex-col" data-snap style={{ scrollSnapAlign: "start" }}>
        <div className="flex-1 min-h-0 flex items-center">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}
