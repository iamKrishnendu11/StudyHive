"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, ArrowRight, Check, AlertCircle } from "lucide-react";
import { PasswordInput } from "./PasswordInput";
import { SocialLogin } from "./SocialLogin";
import { GlowButton } from "@/components/ui/glow-button";
import { apiRequest } from "@/lib/api";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await apiRequest("/auth/login", "POST", {
        email,
        password,
      });

      if (response.success && response.accessToken) {
        localStorage.setItem("accessToken", response.accessToken);
        if (response.refreshToken) {
          localStorage.setItem("refreshToken", response.refreshToken);
        }
        if (response.user) {
          localStorage.setItem("user", JSON.stringify(response.user));
        }

        router.push("/dashboard");
      } else {
        setErrorMessage(response.message || "Login failed. Please check your credentials.");
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to connect to authentication server.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6 w-full text-left">
      {/* Form Header */}
      <div className="space-y-2 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Welcome Back 👋
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Continue your collaborative learning journey on StudyHive.
        </p>
      </div>

      {/* Social Logins */}
      <SocialLogin onError={(msg) => setErrorMessage(msg)} />

      {/* Error Banner */}
      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Login Credentials Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Field */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">
            Email Address
          </label>
          <div className="relative flex items-center">
            <div className="absolute left-3.5 text-slate-400 pointer-events-none">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alex@university.edu"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-200"
            />
          </div>
        </div>

        {/* Password Field */}
        <PasswordInput
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between text-xs pt-1">
          <label className="flex items-center gap-2 cursor-pointer select-none text-slate-300 hover:text-white transition-colors">
            <div
              onClick={() => setRememberMe(!rememberMe)}
              className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                rememberMe
                  ? "bg-indigo-600 border-indigo-500 text-white"
                  : "bg-slate-900 border-slate-700 hover:border-slate-500"
              }`}
            >
              {rememberMe && <Check className="w-3 h-3 stroke-[3]" />}
            </div>
            <span>Remember me</span>
          </label>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setErrorMessage("Forgot Password OTP request endpoint available on backend.");
            }}
            className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Forgot password?
          </a>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <GlowButton
            type="submit"
            variant="primary"
            className="w-full"
            disabled={isLoading}
            icon={
              isLoading ? (
                <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
              ) : (
                <ArrowRight className="w-4 h-4" />
              )
            }
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </GlowButton>
        </div>
      </form>

      {/* Footer Navigation Link */}
      <div className="pt-4 border-t border-slate-800/80 text-center text-xs text-slate-400">
        Don't have an account?{" "}
        <Link
          href="/signup"
          className="font-bold text-indigo-400 hover:text-indigo-300 hover:underline transition-colors"
        >
          Sign Up Free
        </Link>
      </div>
    </div>
  );
}
