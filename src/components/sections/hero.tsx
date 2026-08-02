"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  Sparkles,
  Play,
  ArrowRight,
  Star,
  Users,
  Brain,
  Zap,
  Mic,
  MessageSquare,
  Trophy,
  CheckCircle2,
  Volume2,
  Code2,
  BookOpen,
} from "lucide-react";
import { GlowButton } from "@/components/ui/glow-button";
import { GradientText } from "@/components/ui/gradient-text";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);

  // Mouse tilt animation values for 3D depth
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-8 text-left">
            {/* Top Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold backdrop-blur-md"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 -ml-4" />
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Next-Gen Collaborative Learning Platform</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Study Better.{" "}
              <span className="block mt-1">
                <GradientText variant="primary" animate>
                  Together.
                </GradientText>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 max-w-xl font-normal leading-relaxed"
            >
              The AI-powered peer learning ecosystem where students match with compatible study partners, join live interactive rooms, solve doubts instantly, and master subjects together.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link href="/signup">
                <GlowButton
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Start Learning Free
                </GlowButton>
              </Link>

              <GlowButton
                variant="secondary"
                size="lg"
                onClick={() => setIsPlayingDemo(true)}
                icon={<Play className="w-4 h-4 fill-slate-200" />}
              >
                Watch Interactive Demo
              </GlowButton>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center gap-6 border-t border-slate-800/80"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5 overflow-hidden">
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-slate-900 object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    alt="Student User"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-slate-900 object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="Student User"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-slate-900 object-cover"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                    alt="Student User"
                  />
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 ring-2 ring-slate-900 text-xs font-bold text-white">
                    +40k
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-white ml-1">4.9/5</span>
                  </div>
                  <span className="text-xs text-slate-400">
                    Trusted by 50,000+ students worldwide
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Floating Futuristic Dashboard Mockup */}
          <div className="lg:col-span-6 relative perspective-1000">
            <motion.div
              style={{ rotateX, rotateY }}
              className="relative w-full max-w-lg mx-auto lg:max-w-none"
            >
              {/* Outer Glowing Border Backdrop */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-20 blur-xl animate-pulse-glow" />

              {/* Main Central Dashboard Glass Card */}
              <div className="relative rounded-3xl glass-panel p-5 sm:p-6 border border-white/10 shadow-2xl shadow-indigo-950/50 space-y-4">
                
                {/* Header Mock Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs font-mono text-slate-400 ml-2">
                      studyhive.app/room/dsa-masters
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      LIVE (14 Active)
                    </span>
                  </div>
                </div>

                {/* Hero Room Content Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  {/* Live Study Room Card */}
                  <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
                          <Mic className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-white">Voice Room #04</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">25:00 Pomodoro</span>
                    </div>

                    {/* Audio Waveform Simulation */}
                    <div className="flex items-center justify-center gap-1 py-1 h-6 bg-slate-950/60 rounded-lg">
                      {[40, 75, 30, 90, 50, 85, 35, 60, 100, 45, 70, 30].map((h, i) => (
                        <motion.div
                          key={i}
                          animate={{ height: [`${h * 0.4}%`, `${h}%`, `${h * 0.3}%`] }}
                          transition={{
                            duration: 0.8 + (i % 3) * 0.2,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                          className="w-1 bg-indigo-400 rounded-full"
                        />
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
                      <div className="flex items-center gap-1">
                        <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Aarav speaking...</span>
                      </div>
                    </div>
                  </div>

                  {/* AI Tutor Instant Widget */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-purple-950/30 border border-purple-500/20 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400">
                        <Brain className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-white">AI Tutor Assistant</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-950/80 text-[11px] text-purple-200 border border-purple-500/20">
                      <p className="font-semibold text-indigo-300">Q: What is O(log n)?</p>
                      <p className="text-slate-300 mt-1">Binary search halves search space each step!</p>
                    </div>
                  </div>

                </div>

                {/* Shared Collaborative Note Snippet */}
                <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">Dynamic Programming Notes</h4>
                      <p className="text-[10px] text-slate-400">3 students editing simultaneously</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded-lg text-[10px] bg-slate-800 text-indigo-300 font-mono">
                    Updated 2s ago
                  </span>
                </div>

              </div>

              {/* Floating Orbiting Glass Badge 1: Leaderboard */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 hidden sm:flex items-center gap-3 p-3 rounded-2xl glass-panel border border-amber-500/30 shadow-xl z-20 backdrop-blur-xl"
              >
                <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Top Scholar</div>
                  <div className="text-[11px] text-amber-300 font-mono">Priya Sharma • 2,450 XP</div>
                </div>
              </motion.div>

              {/* Floating Orbiting Glass Badge 2: Doubt Solved */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3 rounded-2xl glass-panel border border-emerald-500/30 shadow-xl z-20 backdrop-blur-xl"
              >
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Doubt Solved!</div>
                  <div className="text-[11px] text-emerald-300">Peer verified answer</div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Video Modal Trigger simulation */}
      {isPlayingDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl border border-slate-800 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                StudyHive Platform Walkthrough
              </h3>
              <button
                onClick={() => setIsPlayingDemo(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video w-full rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center space-y-3 p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-600/30 flex items-center justify-center border border-indigo-500/50 animate-pulse">
                <Play className="w-8 h-8 text-indigo-400 ml-1" />
              </div>
              <h4 className="text-xl font-bold text-white">Interactive Demo Playing...</h4>
              <p className="text-sm text-slate-400 max-w-md">
                Experience real-time study matching, collaborative notes, voice chat, and instant AI tutor doubt resolution.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
