import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils"; // or use basic class merge if unavailable

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export const Button = ({ children, className, variant = "primary", ...props }: ButtonProps) => {
  const baseStyles =
    "rounded-full px-6 py-2 font-semibold transition-all duration-300 shadow-md";

  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-500 text-white",
    secondary: "bg-white/10 hover:bg-white/20 text-white border border-white/30",
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};
