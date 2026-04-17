import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        align === "center" ? "text-center mx-auto" : "text-left",
        className
      )}
    >
      <span
        className="text-primary"
        style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.8rem" }}
      >
        {eyebrow}
      </span>
      <h2 className="text-foreground mt-2" style={{ fontSize: "2rem", fontWeight: 700 }}>
        {title}
      </h2>
      {description ? (
        <p
          className={cn("text-muted-foreground mt-3 max-w-lg", align === "center" && "mx-auto")}
          style={{ lineHeight: 1.7 }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
