"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Plus, Bot, Zap, ArrowRight } from "lucide-react";
import { GlowButton } from "@/components/ui/glow-button";
import { GradientText } from "@/components/ui/gradient-text";

interface DashboardHeroProps {
  onOpenModuleModal: (title: string, desc?: string) => void;
}

export function DashboardHero({ onOpenModuleModal }: DashboardHeroProps) {
  const [userName, setUserName] = useState("Scholar");
  const [greeting, setGreeting] = useState("Good Evening");

  useEffect(() => {
    // Dynamic greeting based on time of day
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");

    // Dynamic user name from localStorage
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const u = JSON.parse(storedUser);
        if (u.name) setUserName(u.name.split(" ")[0]);
      }
    } catch (e) {
      console.error("Failed to parse user for hero", e);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-950/70 via-slate-900/90 to-purple-950/70 border border-indigo-500/20 p-6 sm:p-8 md:p-10 shadow-2xl shadow-indigo-950/30"
    >
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        {/* Left Text */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>AI-Powered Study Environment</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {greeting},{" "}
            <GradientText variant="primary">{userName}</GradientText> 👋
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Ready to continue learning? You have{" "}
            <span className="text-white font-semibold underline decoration-indigo-400 decoration-2">
              2 active sessions
            </span>{" "}
            and 1 pending AI tutor summary scheduled for today.
          </p>
        </div>

        {/* Right Quick Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          <GlowButton
            variant="primary"
            size="md"
            icon={<Plus className="w-4 h-4" />}
            onClick={() =>
              onOpenModuleModal(
                "Create Study Room",
                "Set up a live interactive study room with AI co-pilot, voice chat, and shared whiteboard."
              )
            }
          >
            Create Study Room
          </GlowButton>

          <GlowButton
            variant="secondary"
            size="md"
            icon={<Bot className="w-4 h-4 text-purple-400" />}
            onClick={() =>
              onOpenModuleModal(
                "AI Tutor Session",
                "Launch a 1-on-1 AI tutoring prompt session tailored to your exact subject syllabus."
              )
            }
          >
            Ask AI Tutor
          </GlowButton>
        </div>
      </div>
    </motion.div>
  );
}
