"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Globe, BookOpen, Layers, Cpu, ShieldCheck } from "lucide-react";

export function TrustedBy() {
  const organizations = [
    { name: "Stanford University", icon: GraduationCap, tag: "Top Institution" },
    { name: "MIT Tech Club", icon: Cpu, tag: "Tech Community" },
    { name: "Harvard Study Guild", icon: BookOpen, tag: "Student Network" },
    { name: "Oxford Scholars", icon: Award, tag: "Research Hub" },
    { name: "Google Developer Groups", icon: Globe, tag: "Global Club" },
    { name: "UC Berkeley CS", icon: Layers, tag: "Coding Chapter" },
    { name: "IIT Tech Council", icon: ShieldCheck, tag: "Engineering" },
  ];

  return (
    <section className="py-12 relative border-y border-slate-800/60 bg-slate-950/40 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs font-semibold text-slate-400 tracking-wider uppercase">
          Empowering students across 500+ top universities & tech communities
        </p>
      </div>

      {/* Ticker Continuous Infinite Slider */}
      <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-12 whitespace-nowrap min-w-max"
        >
          {[...organizations, ...organizations].map((org, index) => {
            const IconComponent = org.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-2.5 rounded-2xl glass-card border border-slate-800/80 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:border-indigo-500/40 hover:bg-slate-900/90 transition-all duration-300 group cursor-pointer"
              >
                <div className="p-2 rounded-xl bg-slate-800/80 group-hover:bg-indigo-600/20 text-slate-400 group-hover:text-indigo-400 transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
                    {org.name}
                  </span>
                  <span className="text-[10px] text-slate-500 group-hover:text-indigo-300 font-mono">
                    {org.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
