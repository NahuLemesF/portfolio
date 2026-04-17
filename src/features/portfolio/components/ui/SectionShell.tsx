import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionShellProps {
  id: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  size?: "4xl" | "5xl" | "6xl";
}

const sizeClassNames = {
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
};

export function SectionShell({
  id,
  children,
  className,
  contentClassName,
  size = "6xl",
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("h-full flex flex-col items-center justify-center px-6 py-6", className)}
    >
      <div className={cn("mx-auto w-full", sizeClassNames[size], contentClassName)}>
        {children}
      </div>
    </section>
  );
}
