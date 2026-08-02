"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, DoorOpen, CheckCircle, Award, Target, Flame } from "lucide-react";

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      title: "Joined 'Machine Learning & Neural Nets' Room",
      type: "room_join",
      time: "15 minutes ago",
      icon: <DoorOpen className="w-4 h-4 text-cyan-400" />,
      badge: "Study Room",
      color: "border-cyan-500/30 bg-cyan-500/10",
    },
    {
      id: 2,
      title: "Solved 5 Practice Questions on Backpropagation",
      type: "quiz",
      time: "1 hour ago",
      icon: <CheckCircle className="w-4 h-4 text-emerald-400" />,
      badge: "+150 XP",
      color: "border-emerald-500/30 bg-emerald-500/10",
    },
    {
      id: 3,
      title: "Earned '7-Day Streak' Scholar Badge 🔥",
      type: "badge",
      time: "3 hours ago",
      icon: <Award className="w-4 h-4 text-amber-400" />,
      badge: "Achievement",
      color: "border-amber-500/30 bg-amber-500/10",
    },
    {
      id: 4,
      title: "Completed Daily Math Target (2.5 hrs)",
      type: "goal",
      time: "5 hours ago",
      icon: <Target className="w-4 h-4 text-purple-400" />,
      badge: "Goal Reached",
      color: "border-purple-500/30 bg-purple-500/10",
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-white flex items-center gap-2">
        <Activity className="w-5 h-5 text-cyan-400" />
        Recent Activity Timeline
      </h3>

      <div className="relative pl-6 space-y-4 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
        {activities.map((act) => (
          <motion.div
            key={act.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md hover:border-slate-700 transition-colors"
          >
            {/* Timeline Dot Icon */}
            <div className={`absolute -left-6 p-1.5 rounded-full border ${act.color} ring-4 ring-slate-950`}>
              {act.icon}
            </div>

            <div>
              <h4 className="text-xs font-bold text-white">{act.title}</h4>
              <span className="text-[10px] text-slate-500">{act.time}</span>
            </div>

            <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              {act.badge}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
