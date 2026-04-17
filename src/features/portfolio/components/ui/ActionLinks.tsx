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
    <div className={cn("flex flex-wrap gap-3", className)}>
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={"external" in item && item.external ? "_blank" : undefined}
          rel={"external" in item && item.external ? "noopener noreferrer" : undefined}
          aria-label={item.label}
          className={cn(
            variant === "icon"
              ? "p-3 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
              : "inline-flex items-center gap-2 px-6 py-3 rounded-2xl transition-all duration-300",
            variant === "pill" &&
              ("variant" in item && item.variant === "secondary"
                ? "bg-card border border-border text-foreground hover:border-primary/40"
                : "bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/25")
          )}
        >
          <item.icon size={18} />
          {variant === "pill" ? <span>{item.label}</span> : null}
        </a>
      ))}
    </div>
  );
}
