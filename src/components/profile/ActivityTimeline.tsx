"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, DoorOpen, FileText, CheckCircle2, Award, Clock } from "lucide-react";
import { StudentProfile } from "@/types/profile";

interface ActivityTimelineProps {
  profile: StudentProfile;
}

export function ActivityTimeline({ profile }: ActivityTimelineProps) {
  const { activities } = profile;

  const getIcon = (type: string) => {
    switch (type) {
      case "room":
        return <DoorOpen className="w-4 h-4 text-cyan-400" />;
      case "note":
        return <FileText className="w-4 h-4 text-purple-400" />;
      case "quiz":
        return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      case "badge":
        return <Award className="w-4 h-4 text-amber-400" />;
      default:
        return <Clock className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 backdrop-blur-xl space-y-5 shadow-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Activity className="w-5 h-5 text-indigo-400" />
          Recent Activity Timeline
        </h3>
        <span className="text-xs text-slate-500 font-mono">Real-time Log</span>
      </div>

      <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
        {activities.map((act, idx) => (
          <motion.div
            key={act.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
            className="relative space-y-1"
          >
            {/* Timeline Dot Icon */}
            <div className="absolute -left-6 top-0.5 p-1.5 rounded-full bg-slate-950 border border-slate-700 shadow-md">
              {getIcon(act.type)}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white">{act.action}</span>
              <span className="text-[10px] font-mono text-slate-500">{act.timestamp}</span>
            </div>

            <p className="text-xs text-slate-300 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
              {act.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
