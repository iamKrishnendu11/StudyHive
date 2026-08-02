"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Users,
  Video,
  FileText,
  Layers,
  HelpCircle,
  Mic,
  Code2,
  BarChart3,
  Target,
  Award,
  Share2,
  Sparkles,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { GradientText } from "@/components/ui/gradient-text";

export function BentoFeatures() {
  const features = [
    {
      id: "ai-assistant",
      title: "AI Study Assistant",
      description: "Get instant step-by-step explanations, summarize complex papers, and generate custom study roadmaps 24/7.",
      icon: Brain,
      size: "lg:col-span-8",
      color: "from-indigo-500/20 via-purple-500/20 to-transparent",
      iconColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
      badge: "Powered by AI 2.0",
    },
    {
      id: "peer-matching",
      title: "Smart Peer Matching",
      description: "Algorithmically pairs you with study partners based on course, skill level, timezone, and learning goals.",
      icon: Users,
      size: "lg:col-span-4",
      color: "from-purple-500/20 via-pink-500/20 to-transparent",
      iconColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
      badge: "99.4% Match Rate",
    },
    {
      id: "live-rooms",
      title: "Live Study Rooms",
      description: "Immersive virtual study spaces equipped with Pomodoro timers, soundscapes, and focus accountability meters.",
      icon: Video,
      size: "lg:col-span-4",
      color: "from-cyan-500/20 via-blue-500/20 to-transparent",
      iconColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
      badge: "HD Spatial Audio",
    },
    {
      id: "shared-notes",
      title: "Real-Time Shared Notes",
      description: "Collaborative markdown canvas with bi-directional linking, inline math LaTeX, and real-time multiplayer cursors.",
      icon: FileText,
      size: "lg:col-span-4",
      color: "from-emerald-500/20 via-teal-500/20 to-transparent",
      iconColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      badge: "Notion-Style UX",
    },
    {
      id: "coding-rooms",
      title: "Interactive Coding Rooms",
      description: "Collaborative IDE with live code execution for 20+ languages, LeetCode sync, and pair programming tools.",
      icon: Code2,
      size: "lg:col-span-4",
      color: "from-amber-500/20 via-orange-500/20 to-transparent",
      iconColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      badge: "Multi-Language REPL",
    },
    {
      id: "smart-doubt",
      title: "Smart Doubt Routing",
      description: "Post a query and StudyHive routes it to active top-ranking mentors or AI for answers under 3 minutes.",
      icon: Share2,
      size: "lg:col-span-6",
      color: "from-indigo-500/20 via-cyan-500/20 to-transparent",
      iconColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
      badge: "< 3 Min Response",
    },
    {
      id: "study-analytics",
      title: "Deep Study Analytics",
      description: "Track focus hours, retention rates, weak topic heatmaps, and weekly growth charts automatically.",
      icon: BarChart3,
      size: "lg:col-span-6",
      color: "from-purple-500/20 via-indigo-500/20 to-transparent",
      iconColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
      badge: "Real-Time Insights",
    },
    {
      id: "flashcards",
      title: "AI Flashcards & Spaced Repetition",
      description: "Automatically turn lecture notes or PDFs into flashcard decks backed by Anki-style spaced repetition.",
      icon: Layers,
      size: "lg:col-span-3 sm:col-span-6",
      color: "from-fuchsia-500/20 to-transparent",
      iconColor: "text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/30",
    },
    {
      id: "quizzes",
      title: "Dynamic Quiz Generator",
      description: "Test your comprehension with auto-generated multiple choice & coding diagnostic quizzes.",
      icon: HelpCircle,
      size: "lg:col-span-3 sm:col-span-6",
      color: "from-sky-500/20 to-transparent",
      iconColor: "text-sky-400 bg-sky-500/10 border-sky-500/30",
    },
    {
      id: "daily-goals",
      title: "Daily Goals & Streaks",
      description: "Build consistent daily study habits with gamified streak rewards, badges, and accountability partners.",
      icon: Target,
      size: "lg:col-span-3 sm:col-span-6",
      color: "from-rose-500/20 to-transparent",
      iconColor: "text-rose-400 bg-rose-500/10 border-rose-500/30",
    },
    {
      id: "reputation",
      title: "Reputation & Badges",
      description: "Earn XP, mentor badges, and university leaderboard ranks by helping peers solve complex doubts.",
      icon: Award,
      size: "lg:col-span-3 sm:col-span-6",
      color: "from-amber-500/20 to-transparent",
      iconColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    },
  ];

  return (
    <section id="features" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Comprehensive Feature Ecosystem
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Everything You Need to{" "}
            <GradientText variant="primary">Dominate Your Studies</GradientText>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 font-normal"
          >
            StudyHive integrates AI assistance, peer matching, live rooms, shared notes, and gamified analytics into one seamless platform.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-5">
          {features.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={item.size}
              >
                <SpotlightCard
                  tilt={true}
                  className="h-full p-6 sm:p-7 flex flex-col justify-between"
                >
                  {/* Subtle Background Gradient Blob */}
                  <div
                    className={`absolute top-0 right-0 w-48 h-48 rounded-full bg-gradient-to-br ${item.color} blur-2xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity`}
                  />

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div
                        className={`p-3 rounded-2xl border ${item.iconColor} transition-transform duration-300 group-hover:scale-110`}
                      >
                        <IconComp className="w-6 h-6" />
                      </div>
                      {item.badge && (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-800/90 text-indigo-300 border border-indigo-500/30">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                    <span>Explore capability</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
