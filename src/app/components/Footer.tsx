import { portfolioProfile } from "@/features/portfolio/content/portfolio-data";

export function Footer() {
  return (
    <footer className="px-6 pb-8 pt-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-muted-foreground" style={{ fontSize: "0.8rem" }}>
          {portfolioProfile.footerLabel}
        </p>
      </div>
    </footer>
  );
}
