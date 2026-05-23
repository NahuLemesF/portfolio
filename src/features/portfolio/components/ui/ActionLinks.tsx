import type { HeroAction, SocialLink } from "@/features/portfolio/types/portfolio";
import { cn } from "@/lib/utils";

type ActionLinkItem =
  | Pick<HeroAction, "href" | "label" | "icon" | "external" | "variant">
  | SocialLink;

interface ActionLinksProps {
  items: ActionLinkItem[];
  variant?: "pill" | "icon";
  className?: string;
}

export function ActionLinks({
  items,
  variant = "pill",
  className,
}: ActionLinksProps) {
  return (
    <div className={cn("flex flex-wrap gap-4", className)}>
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={"external" in item && item.external ? "_blank" : undefined}
          rel={"external" in item && item.external ? "noopener noreferrer" : undefined}
          aria-label={item.label}
          className={cn(
            "transition-all duration-300 transform",
            variant === "icon"
              ? "p-3 rounded-xl border border-border bg-card/60 backdrop-blur-sm text-muted-foreground hover:text-primary hover:bg-primary/5 hover:border-primary/30 hover:scale-105 active:scale-95 shadow-sm"
              : "inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl font-medium text-sm active:scale-98 cursor-pointer shadow-md hover:shadow-lg",
            variant === "pill" &&
              ("variant" in item && item.variant === "secondary"
                ? "bg-card border border-border text-foreground hover:bg-muted/40 hover:border-primary/30 hover:-translate-y-0.5"
                : "bg-primary text-primary-foreground hover:opacity-95 hover:-translate-y-0.5 hover:shadow-primary/25 shadow-primary/15")
          )}
        >
          <item.icon size={18} className="transition-transform group-hover:scale-110" />
          {variant === "pill" ? <span>{item.label}</span> : null}
        </a>
      ))}
    </div>
  );
}
