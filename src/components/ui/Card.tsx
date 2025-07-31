import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`rounded-2xl bg-white/10 backdrop-blur-sm p-6 shadow-xl border border-white/20 ${className}`}
    >
      {children}
    </div>
  );
};
