import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SurfaceCardProps {
  children: ReactNode;
  className?: string;
}

export function SurfaceCard({ children, className }: SurfaceCardProps) {
  return (
    <div className={cn("rounded-2xl bg-card border border-border/60 shadow-sm transition-all duration-300 hover:shadow-md", className)}>
      {children}
    </div>
  );
}
