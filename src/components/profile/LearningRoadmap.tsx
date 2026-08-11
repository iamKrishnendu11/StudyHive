"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, CheckCircle2, Clock, Play } from "lucide-react";
import { StudentProfile } from "@/types/profile";

interface LearningRoadmapProps {
  profile: StudentProfile;
}

export function LearningRoadmap({ profile }: LearningRoadmapProps) {
  return (
    <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 backdrop-blur-xl space-y-5 shadow-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Compass className="w-5 h-5 text-cyan-400" />
          Active Learning Roadmap
        </h3>
        <span className="text-xs text-slate-500 font-mono">Curriculum Track</span>
      </div>

      <div className="space-y-4">
        {profile.roadmap.map((item, idx) => (
          <div key={idx} className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">{item.subject}</span>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                  item.status === "Completed"
                    ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                    : item.status === "In Progress"
                    ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
                    : "bg-slate-800 text-slate-400 border-slate-700"
                }`}>
                  {item.status}
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-cyan-400">{item.progress}%</span>
            </div>

            <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.1 }}
                className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"
              />
            </div>

            <div className="text-[11px] text-slate-500 font-mono text-right">Target Completion: {item.targetDate}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
