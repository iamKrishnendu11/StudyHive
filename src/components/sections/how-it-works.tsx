"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  UserPlus,
  Search,
  LogIn,
  Users2,
  TrendingUp,
  ArrowDown,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Profile",
      description: "Set your subjects, target exams (DSA, GATE, Web Dev, SAT), timezone, and study preferences.",
      icon: UserPlus,
      color: "from-indigo-500 to-purple-600",
      badge: "Step 1",
    },
    {
      number: "02",
      title: "Find Study Partners",
      description: "Our AI matches you with compatible peers based on learning speed, goals, and active availability.",
      icon: Search,
      color: "from-purple-600 to-fuchsia-600",
      badge: "Step 2",
    },
    {
      number: "03",
      title: "Join Live Study Room",
      description: "Enter audio/video study spaces equipped with shared markdown notes, Pomodoro timers, and whiteboards.",
      icon: LogIn,
      color: "from-fuchsia-600 to-cyan-500",
      badge: "Step 3",
    },
    {
      number: "04",
      title: "Learn Together",
      description: "Ask questions, tackle problem sets collaboratively, solve doubts instantly with AI or peer mentors.",
      icon: Users2,
      color: "from-cyan-500 to-teal-400",
      badge: "Step 4",
    },
    {
      number: "05",
      title: "Track Progress & Level Up",
      description: "Review automated study heatmaps, unlock achievement badges, and climb university leaderboards.",
      icon: TrendingUp,
      color: "from-emerald-400 to-indigo-500",
      badge: "Step 5",
    },
  ];

  return (
    <section className="py-24 relative bg-slate-950/60 border-y border-slate-800/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Simple 5-Step Workflow
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            How <GradientText variant="purple-cyan">StudyHive Works</GradientText>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg font-normal"
          >
            From creating your goal profile to mastering your target exams in five frictionless steps.
          </motion.p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 via-cyan-500 to-emerald-400 -translate-y-1/2 rounded-full opacity-30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center space-y-4 group"
                >
                  {/* Step Number Circle */}
                  <div className="relative flex items-center justify-center w-20 h-20 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl group-hover:border-indigo-500/50 group-hover:shadow-indigo-500/20 transition-all duration-300">
                    <div
                      className={`absolute inset-0.5 rounded-[22px] bg-gradient-to-br ${step.color} opacity-20 group-hover:opacity-40 transition-opacity`}
                    />
                    <IconComponent className="w-9 h-9 text-indigo-400 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                    <span className="absolute -bottom-2 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-950 text-indigo-300 border border-slate-800">
                      {step.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2 max-w-xs">
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
