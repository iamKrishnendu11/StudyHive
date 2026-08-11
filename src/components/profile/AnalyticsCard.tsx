"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Flame, Zap, DoorOpen, HelpCircle, Users, Activity, BarChart3 } from "lucide-react";
import { StudentProfile } from "@/types/profile";

interface AnalyticsCardProps {
  profile: StudentProfile;
}

export function AnalyticsCard({ profile }: AnalyticsCardProps) {
  const { analytics } = profile;

  const items = [
    { label: "Study Hours", value: `${analytics.studyHours} hrs`, icon: <Clock className="w-4 h-4 text-indigo-400" /> },
    { label: "Current Streak", value: `${analytics.streakDays} Days 🔥`, icon: <Flame className="w-4 h-4 text-amber-400" /> },
    { label: "Scholar XP", value: `${analytics.scholarXp} XP`, icon: <Zap className="w-4 h-4 text-purple-400" /> },
    { label: "Rooms Joined", value: `${analytics.roomsJoined} Rooms`, icon: <DoorOpen className="w-4 h-4 text-cyan-400" /> },
    { label: "Questions Solved", value: `${analytics.questionsSolved} Solved`, icon: <HelpCircle className="w-4 h-4 text-emerald-400" /> },
    { label: "Communities", value: `${analytics.communitiesCount} Joined`, icon: <Users className="w-4 h-4 text-rose-400" /> },
    { label: "Avg Focus Time", value: `${analytics.avgFocusTimeMinutes} mins`, icon: <Activity className="w-4 h-4 text-indigo-400" /> },
    { label: "Consistency Rate", value: `${analytics.consistencyScore}%`, icon: <BarChart3 className="w-4 h-4 text-cyan-400" /> },
  ];

  return (
    <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 backdrop-blur-xl space-y-5 shadow-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-indigo-400" />
          Learning Analytics & Performance
        </h3>
        <span className="text-xs text-slate-500 font-mono">Live Stats</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1"
          >
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              {item.icon}
              <span className="truncate">{item.label}</span>
            </div>
            <div className="text-base font-black text-white pl-5">{item.value}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
