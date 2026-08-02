"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Flame, Zap, DoorOpen, Users, CheckCircle2, TrendingUp } from "lucide-react";

export function StatsCards() {
  const stats = [
    {
      id: "hours",
      title: "Study Hours",
      value: "28.5 hrs",
      change: "+12.4%",
      subtext: "vs last week",
      icon: <Clock className="w-5 h-5 text-indigo-400" />,
      color: "from-indigo-500/20 to-indigo-600/10",
      borderColor: "border-indigo-500/30",
    },
    {
      id: "streak",
      title: "Current Streak",
      value: "7 Days",
      change: "🔥 Hot",
      subtext: "Personal Record",
      icon: <Flame className="w-5 h-5 text-amber-400" />,
      color: "from-amber-500/20 to-amber-600/10",
      borderColor: "border-amber-500/30",
    },
    {
      id: "xp",
      title: "Scholar XP",
      value: "3,450 XP",
      change: "Lvl 12",
      subtext: "Top 5% Student",
      icon: <Zap className="w-5 h-5 text-purple-400" />,
      color: "from-purple-500/20 to-purple-600/10",
      borderColor: "border-purple-500/30",
    },
    {
      id: "rooms",
      title: "Rooms Joined",
      value: "14 Rooms",
      change: "Active",
      subtext: "3 Live Now",
      icon: <DoorOpen className="w-5 h-5 text-cyan-400" />,
      color: "from-cyan-500/20 to-cyan-600/10",
      borderColor: "border-cyan-500/30",
    },
    {
      id: "friends",
      title: "Friends Online",
      value: "8 Peers",
      change: "Live",
      subtext: "Studying right now",
      icon: <Users className="w-5 h-5 text-emerald-400" />,
      color: "from-emerald-500/20 to-emerald-600/10",
      borderColor: "border-emerald-500/30",
    },
    {
      id: "tasks",
      title: "Tasks Completed",
      value: "42 / 50",
      change: "84%",
      subtext: "Weekly Goal",
      icon: <CheckCircle2 className="w-5 h-5 text-rose-400" />,
      color: "from-rose-500/20 to-rose-600/10",
      borderColor: "border-rose-500/30",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          variants={itemVariants}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className={`relative overflow-hidden rounded-2xl bg-slate-900/80 border ${stat.borderColor} p-4 sm:p-5 backdrop-blur-md shadow-xl transition-all duration-300 group`}
        >
          {/* Background Gradient Blob */}
          <div
            className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500`}
          />

          <div className="relative z-10 space-y-3">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 group-hover:border-slate-700 transition-colors">
                {stat.icon}
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1">
                <TrendingUp className="w-2.5 h-2.5 text-emerald-400" />
                {stat.change}
              </span>
            </div>

            <div>
              <div className="text-2xl font-black text-white tracking-tight">{stat.value}</div>
              <div className="text-xs font-semibold text-slate-400 mt-0.5">{stat.title}</div>
            </div>

            <div className="text-[11px] text-slate-500 font-medium">{stat.subtext}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
