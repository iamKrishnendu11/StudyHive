"use client";

import React, { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export function PasswordInput({
  label,
  error,
  className,
  value,
  onChange,
  placeholder = "••••••••",
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-1.5 w-full text-left">
      {label && (
        <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
          <span>{label}</span>
        </label>
      )}

      <div className="relative flex items-center">
        <div className="absolute left-3.5 text-slate-400 pointer-events-none">
          <Lock className="w-4 h-4" />
        </div>

        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={cn(
            "w-full pl-10 pr-10 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-200",
            error && "border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/30",
            className
          )}
          {...props}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3.5 text-slate-400 hover:text-slate-200 transition-colors p-1 rounded-lg"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff className="w-4 h-4" />
          ) : (
            <Eye className="w-4 h-4" />
          )}
        </button>
      </div>

      {error && <p className="text-[11px] text-rose-400 font-medium pl-1">{error}</p>}
    </div>
  );
}
