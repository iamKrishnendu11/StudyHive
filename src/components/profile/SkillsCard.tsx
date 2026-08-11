"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Zap } from "lucide-react";
import { StudentProfile } from "@/types/profile";

interface SkillsCardProps {
  profile: StudentProfile;
}

export function SkillsCard({ profile }: SkillsCardProps) {
  return (
    <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 backdrop-blur-xl space-y-5 shadow-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Cpu className="w-5 h-5 text-indigo-400" />
          Technical Skills & Mastery
        </h3>
        <span className="text-xs text-slate-500 font-mono">Animated Levels</span>
      </div>

      <div className="space-y-4">
        {profile.skills.map((skill, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-white flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                {skill.name}
              </span>
              <span className="text-indigo-400 font-mono font-bold">{skill.level}%</span>
            </div>

            <div className="w-full bg-slate-950 rounded-full h-2.5 overflow-hidden border border-slate-800">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.05 }}
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
