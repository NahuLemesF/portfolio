import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SnapScreenProps {
  children: ReactNode;
  className?: string;
  padded?: boolean;
}

export function SnapScreen({
  children,
  className,
  padded = true,
}: SnapScreenProps) {
  return (
    <div
      data-snap
      className={cn("h-screen", padded && "pt-[72px]", className)}
      style={{ scrollSnapAlign: "start" }}
    >
      {children}
    </div>
  );
}
