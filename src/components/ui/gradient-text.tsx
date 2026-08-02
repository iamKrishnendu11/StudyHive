import React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "primary" | "purple-cyan" | "purple-pink" | "amber-red";
  className?: string;
  animate?: boolean;
}

export function GradientText({
  children,
  variant = "primary",
  className,
  animate = false,
  ...props
}: GradientTextProps) {
  const variantStyles = {
    primary: "bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400",
    "purple-cyan": "bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400",
    "purple-pink": "bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400",
    "amber-red": "bg-gradient-to-r from-amber-400 via-orange-400 to-red-400",
  };

  return (
    <span
      className={cn(
        "inline-block bg-clip-text text-transparent bg-300%",
        variantStyles[variant],
        animate && "animate-gradient-x",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
