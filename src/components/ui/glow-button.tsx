"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  icon?: React.ReactNode;
  glowColor?: string;
}

export function GlowButton({
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  glowColor,
  onClick,
  ...props
}: GlowButtonProps) {
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);
  const [isRippling, setIsRippling] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setIsRippling(true);
    setTimeout(() => setIsRippling(false), 600);
    if (onClick) onClick(e);
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs font-medium rounded-lg gap-1.5",
    md: "px-5 py-2.5 text-sm font-semibold rounded-xl gap-2",
    lg: "px-7 py-3.5 text-base font-semibold rounded-2xl gap-2.5",
    xl: "px-9 py-4 text-lg font-bold rounded-2xl gap-3",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 border border-indigo-400/30",
    secondary:
      "bg-slate-800/80 hover:bg-slate-700/80 text-slate-100 border border-slate-700/60 shadow-md backdrop-blur-md",
    cyan:
      "bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-600 text-slate-950 font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 border border-cyan-300/40",
    outline:
      "bg-transparent hover:bg-slate-800/50 text-slate-200 border border-slate-700/80 hover:border-slate-500",
    ghost:
      "bg-transparent hover:bg-white/5 text-slate-300 hover:text-white border border-transparent",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      onClick={handleClick}
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden transition-all duration-300 cursor-pointer select-none group",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...(props as any)}
    >
      {/* Background Hover Glow */}
      <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Dynamic Ripple Effect */}
      {isRippling && coords && (
        <span
          className="absolute bg-white/30 rounded-full animate-ping pointer-events-none"
          style={{
            left: coords.x - 20,
            top: coords.y - 20,
            width: 40,
            height: 40,
          }}
        />
      )}

      {/* Button Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {icon && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>
    </motion.button>
  );
}
