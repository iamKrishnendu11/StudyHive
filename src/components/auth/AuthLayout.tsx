"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Brain,
  Mic,
  Trophy,
  Layers,
  CheckCircle2,
  Users,
  Volume2,
} from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#070B14] relative overflow-hidden text-slate-100 p-4 sm:p-6 lg:p-0">
      
      {/* Background Tech Grid & Aurora Blobs */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[150px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] rounded-full bg-purple-700/15 blur-[160px] pointer-events-none animate-float-slow" />
      <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full bg-cyan-600/15 blur-[140px] pointer-events-none animate-pulse-glow" />

      {/* Main Split Screen Container */}
      <div className="w-full max-w-7xl mx-auto min-h-screen lg:min-h-[850px] grid grid-cols-1 lg:grid-cols-12 relative z-10 my-auto lg:my-0">
        
        {/* Left Branding Panel (40% Desktop) */}
        <div className="hidden lg:flex lg:col-span-5 flex-col justify-between p-12 relative overflow-hidden border-r border-slate-800/80 bg-slate-950/40 backdrop-blur-xl">
          
          {/* Top Logo */}
          <div className="space-y-8">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 p-0.5 shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-indigo-400" />
                </div>
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Study<GradientText variant="primary">Hive</GradientText>
              </span>
            </Link>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Live Collaborative Learning
              </div>

              <h1 className="text-4xl font-extrabold text-white tracking-tight leading-tight">
                Learn Better.{" "}
                <span className="block mt-1">
                  <GradientText variant="primary">Together.</GradientText>
                </span>
              </h1>

              <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
                The AI-powered peer learning network. Join live study rooms, match with top scholars, and master subjects faster.
              </p>
            </div>
          </div>

          {/* Floating Glass Mockup Cards */}
          <div className="space-y-3.5 my-8 relative">
            
            {/* Card 1: AI Tutor */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="p-3.5 rounded-2xl glass-panel border border-indigo-500/30 shadow-xl flex items-center gap-3 backdrop-blur-xl"
            >
              <div className="p-2.5 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30 shrink-0">
                <Brain className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-white block">AI Tutor Assistant</span>
                <span className="text-slate-400 font-mono text-[11px]">
                  "Binary search divides intervals in O(log n)"
                </span>
              </div>
            </motion.div>

            {/* Card 2: Voice Room */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="p-3.5 rounded-2xl glass-panel border border-emerald-500/30 shadow-xl flex items-center justify-between backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
                  <Mic className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-white block">DSA Study Room #04</span>
                  <span className="text-emerald-400 font-mono text-[11px] flex items-center gap-1">
                    <Volume2 className="w-3 h-3 animate-pulse" /> 14 Active Members
                  </span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/20 text-emerald-300 font-mono font-bold">
                LIVE
              </span>
            </motion.div>

            {/* Card 3: Top Scholar Leaderboard */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="p-3.5 rounded-2xl glass-panel border border-amber-500/30 shadow-xl flex items-center gap-3 backdrop-blur-xl"
            >
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-white block">Top Ranker Badge</span>
                <span className="text-amber-300 font-mono text-[11px]">Priya M. • 2,450 XP</span>
              </div>
            </motion.div>

          </div>

          {/* Bottom Trust Note */}
          <div className="pt-6 border-t border-slate-800/80 flex items-center gap-3 text-xs text-slate-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Trusted by 250,000+ students across Stanford, MIT & IITs</span>
          </div>
        </div>

        {/* Right Authentication Card Container (60% Desktop / Full Mobile) */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 sm:p-8 lg:p-12 relative z-10 w-full">
          
          {/* Mobile Header Logo */}
          <div className="lg:hidden mb-6 text-center">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 flex items-center justify-center text-white shadow-lg">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Study<GradientText variant="primary">Hive</GradientText>
              </span>
            </Link>
          </div>

          {/* Auth Card Children */}
          <div className="w-full">{children}</div>

        </div>

      </div>
    </div>
  );
}
