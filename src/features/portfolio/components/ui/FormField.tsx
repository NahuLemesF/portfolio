import type { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  children: ReactNode;
}

export function FormField({ label, children }: FormFieldProps) {
  return (
    <div>
      <label
        className="text-foreground mb-1.5 block"
        style={{ fontSize: "0.85rem", fontWeight: 500 }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}
