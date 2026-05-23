import { useRef } from "react";
import { Toaster } from "sonner";
import { PortfolioNavbar } from "@/features/portfolio/components/layout/PortfolioNavbar";
import { PortfolioFooter } from "@/features/portfolio/components/layout/PortfolioFooter";
import { SnapScreen } from "@/features/portfolio/components/layout/SnapScreen";
import { AboutSection } from "@/features/portfolio/components/sections/AboutSection";
import { ContactSection } from "@/features/portfolio/components/sections/ContactSection";
import { EducationSection } from "@/features/portfolio/components/sections/EducationSection";
import { HeroSection } from "@/features/portfolio/components/sections/HeroSection";
import { ProjectsSection } from "@/features/portfolio/components/sections/ProjectsSection";
import { QASection } from "@/features/portfolio/components/sections/QASection";
import { TechStackSection } from "@/features/portfolio/components/sections/TechStackSection";
import { useScrollSnap } from "@/features/portfolio/hooks/useScrollSnap";

export default function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useScrollSnap(scrollContainerRef);

  return (
    <div
      ref={scrollContainerRef}
      className="h-screen overflow-y-auto bg-background text-foreground"
      style={{
        fontFamily: "Inter, sans-serif",
        scrollSnapType: "y mandatory",
      }}
    >
      <PortfolioNavbar scrollContainerRef={scrollContainerRef} />

      <SnapScreen padded={false}>
        <HeroSection />
      </SnapScreen>

      <SnapScreen>
        <AboutSection />
      </SnapScreen>
      <SnapScreen>
        <ProjectsSection />
      </SnapScreen>
      <SnapScreen>
        <TechStackSection />
      </SnapScreen>
      <SnapScreen>
        <QASection />
      </SnapScreen>
      <SnapScreen>
        <EducationSection />
      </SnapScreen>

      <SnapScreen className="flex flex-col">
        <div className="flex-1 min-h-0 flex items-center">
          <ContactSection />
        </div>
        <PortfolioFooter />
      </SnapScreen>

      <Toaster position="bottom-right" richColors toastOptions={{ style: { borderRadius: "12px" } }} />
    </div>
  );
}
