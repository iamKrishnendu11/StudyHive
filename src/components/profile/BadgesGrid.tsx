"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Flame, Trophy, Bot, Gem, Target, Sparkles } from "lucide-react";
import { StudentProfile } from "@/types/profile";

interface BadgesGridProps {
  profile: StudentProfile;
}

export function BadgesGrid({ profile }: BadgesGridProps) {
  return (
    <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 backdrop-blur-xl space-y-4 shadow-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-400" />
          Scholar Achievements & Badges
        </h3>
        <span className="text-xs text-slate-500 font-mono">
          {profile.badges.length} Unlocked
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {profile.badges.map((badge) => (
          <motion.div
            key={badge.id}
            whileHover={{ y: -4, scale: 1.03 }}
            className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-amber-500/40 text-center space-y-2 transition-all cursor-pointer group shadow-lg"
          >
            <div className="text-3xl transform group-hover:scale-125 transition-transform duration-300">
              {badge.icon}
            </div>

            <div>
              <div className="text-xs font-bold text-white line-clamp-1 group-hover:text-amber-300 transition-colors">
                {badge.title}
              </div>
              <div className="text-[10px] text-slate-400 line-clamp-2 mt-0.5 leading-tight">
                {badge.description}
              </div>
            </div>

            <div className="pt-1">
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-900 text-amber-400 border border-amber-500/30">
                {badge.rarity}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
