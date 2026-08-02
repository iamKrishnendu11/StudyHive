"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  User,
  AtSign,
  Mail,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Briefcase,
  Check,
  AlertCircle,
  KeyRound,
  RefreshCw,
} from "lucide-react";
import { PasswordInput } from "./PasswordInput";
import { SocialLogin } from "./SocialLogin";
import { GlowButton } from "@/components/ui/glow-button";
import { apiRequest } from "@/lib/api";

export function SignupForm() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [role, setRole] = useState("STUDENT");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  // OTP Verification State
  const [step, setStep] = useState<"form" | "otp">("form");
  const [otpCode, setOtpCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Dynamic Password Validation Criteria
  const reqs = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const passwordsMatch = password.length > 0 && password === confirmPassword;

  // Step 1: Initiate Signup & Request OTP
  const handleInitiateSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) return;

    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const response = await apiRequest("/auth/signup", "POST", {
        name: fullName,
        username,
        email,
        password,
        university: college,
        role,
      });

      if (response.success) {
        setSuccessMessage(response.message || "OTP code sent to your email!");
        setStep("otp");
      } else {
        setErrorMessage(response.message || "Signup failed");
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to connect to backend server.");
    } finally {
      setIsLoading(false);
    }
  };

  // Step 2: Verify OTP & Create Account
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await apiRequest("/auth/verify-otp", "POST", {
        email,
        otp: otpCode,
        purpose: "SIGNUP",
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
        setErrorMessage(response.message || "Invalid OTP code.");
      }
    } catch (err: any) {
      setErrorMessage(err.message || "OTP verification failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-5 w-full text-left">
      {/* Form Header */}
      <div className="space-y-1.5 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {step === "form" ? "Create Your Account" : "Verify Email OTP"}
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          {step === "form"
            ? "Join 250,000+ students learning together on StudyHive."
            : `Enter the 6-digit verification code sent to ${email}.`}
        </p>
      </div>

      {/* Messages */}
      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {successMessage && (
        <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <span>{successMessage}</span>
        </div>
      )}

      {/* STEP 1: Registration Form */}
      {step === "form" ? (
        <>
          {/* Social Logins */}
          <SocialLogin onError={(msg) => setErrorMessage(msg)} />

          <form onSubmit={handleInitiateSignup} className="space-y-3.5">
            {/* Row 1: Full Name & Username */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Full Name</label>
                <div className="relative flex items-center">
                  <User className="w-4 h-4 absolute left-3.5 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Username</label>
                <div className="relative flex items-center">
                  <AtSign className="w-4 h-4 absolute left-3.5 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="alexmorgan"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50"
                  />
                </div>
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">Email Address</label>
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 absolute left-3.5 text-slate-400 pointer-events-none" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@university.edu"
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50"
                />
              </div>
            </div>

            {/* Row 2: University & Role */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">University (Optional)</label>
                <div className="relative flex items-center">
                  <GraduationCap className="w-4 h-4 absolute left-3.5 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    placeholder="Stanford / MIT"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Primary Role</label>
                <div className="relative flex items-center">
                  <Briefcase className="w-4 h-4 absolute left-3.5 text-slate-400 pointer-events-none" />
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500 appearance-none cursor-pointer"
                  >
                    <option value="STUDENT">Student / Scholar</option>
                    <option value="MENTOR">Peer Mentor</option>
                    <option value="EDUCATOR">Educator / Professor</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Password Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <PasswordInput
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <PasswordInput
                label="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={
                  confirmPassword && !passwordsMatch ? "Passwords do not match" : ""
                }
                required
              />
            </div>

            {/* Dynamic Password Requirements Panel */}
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1.5 text-[11px]">
              <span className="font-semibold text-slate-300 block mb-1">
                Password Requirements:
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { key: "length", label: "8+ characters", met: reqs.length },
                  { key: "uppercase", label: "Uppercase letter", met: reqs.uppercase },
                  { key: "number", label: "At least 1 number", met: reqs.number },
                  { key: "special", label: "Special character", met: reqs.special },
                ].map((rule) => (
                  <div
                    key={rule.key}
                    className={`flex items-center gap-1.5 transition-colors ${
                      rule.met ? "text-emerald-400 font-medium" : "text-slate-500"
                    }`}
                  >
                    {rule.met ? (
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    ) : (
                      <XCircle className="w-3.5 h-3.5 shrink-0 opacity-60" />
                    )}
                    <span>{rule.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Terms Checkbox */}
            <label className="flex items-center gap-2 cursor-pointer select-none text-xs text-slate-300 pt-1">
              <div
                onClick={() => setAgreeTerms(!agreeTerms)}
                className={`w-4 h-4 rounded border flex items-center justify-center transition-all shrink-0 ${
                  agreeTerms
                    ? "bg-indigo-600 border-indigo-500 text-white"
                    : "bg-slate-900 border-slate-700 hover:border-slate-500"
                }`}
              >
                {agreeTerms && <Check className="w-3 h-3 stroke-[3]" />}
              </div>
              <span>
                I agree to StudyHive's{" "}
                <a href="#" className="text-indigo-400 underline">Terms of Service</a> &{" "}
                <a href="#" className="text-indigo-400 underline">Privacy Policy</a>.
              </span>
            </label>

            {/* Submit Button */}
            <div className="pt-2">
              <GlowButton
                type="submit"
                variant="primary"
                className="w-full"
                disabled={!agreeTerms || isLoading}
                icon={
                  isLoading ? (
                    <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )
                }
              >
                {isLoading ? "Sending OTP Code..." : "Create Account & Send OTP"}
              </GlowButton>
            </div>
          </form>
        </>
      ) : (
        /* STEP 2: OTP Input Screen */
        <form onSubmit={handleVerifyOtp} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">
              6-Digit Verification Code
            </label>
            <div className="relative flex items-center">
              <KeyRound className="w-4 h-4 absolute left-3.5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                required
                maxLength={6}
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value.trim())}
                placeholder="123456"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center text-lg font-mono tracking-widest text-indigo-300 placeholder-slate-600 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <GlowButton
            type="submit"
            variant="primary"
            className="w-full"
            disabled={isLoading || otpCode.length !== 6}
            icon={
              isLoading ? (
                <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
              ) : (
                <CheckCircle2 className="w-4 h-4" />
              )
            }
          >
            {isLoading ? "Verifying OTP..." : "Verify OTP & Complete Registration"}
          </GlowButton>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
            <button
              type="button"
              onClick={() => setStep("form")}
              className="text-slate-400 hover:text-white underline"
            >
              ← Edit details
            </button>
            <button
              type="button"
              onClick={handleInitiateSignup}
              className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-semibold"
            >
              <RefreshCw className="w-3 h-3" /> Resend OTP
            </button>
          </div>
        </form>
      )}

      {/* Footer Link */}
      <div className="pt-3 border-t border-slate-800/80 text-center text-xs text-slate-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-bold text-indigo-400 hover:text-indigo-300 hover:underline transition-colors"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}
