import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  color?: string;
}

export function Badge({ children, color = "#ef2f25" }: BadgeProps) {
  return (
    <span
      className="inline-flex rounded-full border px-3 py-1 text-xs font-black uppercase tracking-wide"
      style={{
        borderColor: `${color}88`,
        color,
        backgroundColor: `${color}14`,
      }}
    >
      {children}
    </span>
  );
}