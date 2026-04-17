import { cn } from "@/lib/utils";

interface TagListProps {
  tags: string[];
  className?: string;
  tagClassName?: string;
}

export function TagList({ tags, className, tagClassName }: TagListProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((tag) => (
        <span
          key={tag}
          className={cn(
            "px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20",
            tagClassName
          )}
          style={{ fontSize: "0.75rem", fontFamily: "JetBrains Mono, monospace" }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
