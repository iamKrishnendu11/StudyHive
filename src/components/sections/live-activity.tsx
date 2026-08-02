"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Sparkles, CheckCircle2, Award, Users, Video, Zap } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";

interface ActivityItem {
  id: number;
  user: string;
  avatar: string;
  action: string;
  target: string;
  badge: string;
  time: string;
  icon: any;
  color: string;
}

export function LiveActivity() {
  const initialFeed: ActivityItem[] = [
    {
      id: 1,
      user: "Rahul Sharma",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80",
      action: "joined live study room",
      target: "Java Masterclass #04",
      badge: "Voice Active",
      time: "Just now",
      icon: Video,
      color: "border-indigo-500 text-indigo-400 bg-indigo-500/10",
    },
    {
      id: 2,
      user: "Priya Mehta",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
      action: "completed 100% score in",
      target: "DSA Graph Challenge",
      badge: "Perfect Score",
      time: "2s ago",
      icon: CheckCircle2,
      color: "border-emerald-500 text-emerald-400 bg-emerald-500/10",
    },
    {
      id: 3,
      user: "Akash Verma",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
      action: "was awarded badge",
      target: "Top Community Mentor (50+ Doubts)",
      badge: "Level Up",
      time: "5s ago",
      icon: Award,
      color: "border-amber-500 text-amber-400 bg-amber-500/10",
    },
    {
      id: 4,
      user: "Sophia Chen",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&q=80",
      action: "launched study room",
      target: "MIT Physics Problem Solving #24",
      badge: "Host",
      time: "10s ago",
      icon: Zap,
      color: "border-cyan-500 text-cyan-400 bg-cyan-500/10",
    },
  ];

  const [feed, setFeed] = useState<ActivityItem[]>(initialFeed);

  // Dynamic live event generation simulation
  useEffect(() => {
    const mockUsers = [
      { name: "Devansh K.", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&q=80" },
      { name: "Ananya R.", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=80&q=80" },
      { name: "Marcus V.", img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=80&q=80" },
    ];

    const mockActions = [
      { action: "solved doubt in", target: "System Design Room", badge: "Doubt Solved", icon: CheckCircle2, color: "border-emerald-500 text-emerald-400 bg-emerald-500/10" },
      { action: "created flashcard deck", target: "React 19 & Next.js App Router", badge: "AI Flashcards", icon: Sparkles, color: "border-purple-500 text-purple-400 bg-purple-500/10" },
      { action: "started 25-min Pomodoro", target: "GATE Algorithm Room", badge: "Focus Mode", icon: Zap, color: "border-indigo-500 text-indigo-400 bg-indigo-500/10" },
    ];

    const interval = setInterval(() => {
      const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];
      const randomAct = mockActions[Math.floor(Math.random() * mockActions.length)];
      const newItem: ActivityItem = {
        id: Date.now(),
        user: randomUser.name,
        avatar: randomUser.img,
        action: randomAct.action,
        target: randomAct.target,
        badge: randomAct.badge,
        time: "Just now",
        icon: randomAct.icon,
        color: randomAct.color,
      };

      setFeed((prev) => [newItem, ...prev.slice(0, 4)]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative bg-slate-950/40 border-y border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Live Platform Pulse
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Real-Time <GradientText variant="primary">Study Activity Feed</GradientText>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            See what students are learning, building, and mastering right now across the global hive.
          </p>
        </div>

        {/* Live Stream Container */}
        <div className="rounded-3xl glass-panel border border-slate-800 p-4 sm:p-6 space-y-3 shadow-xl">
          <AnimatePresence initial={false}>
            {feed.map((item) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -20, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/30 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.user}
                      className="w-9 h-9 rounded-full object-cover border border-slate-700"
                    />
                    <div className="text-xs">
                      <span className="font-bold text-white">{item.user}</span>{" "}
                      <span className="text-slate-400">{item.action}</span>{" "}
                      <span className="font-semibold text-indigo-300">{item.target}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border flex items-center gap-1 ${item.color}`}>
                      <IconComp className="w-3 h-3" />
                      {item.badge}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">{item.time}</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
