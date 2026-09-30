import type { ReactNode } from "react";
import { Link } from "react-router";

interface ButtonProps {
  children: ReactNode;
  to?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
}

const variants = {
  primary:
    "bg-red-600 text-white hover:bg-red-500 shadow-[0_0_30px_rgba(239,47,37,0.28)]",
  secondary:
    "border border-white/15 bg-white/[0.04] text-white hover:border-white/35 hover:bg-white/[0.08]",
  ghost: "text-white/70 hover:text-white",
};

export function Button({
  children,
  to,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-black uppercase tracking-wide transition ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}