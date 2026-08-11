"use client";

import React from "react";
import { User, Sparkles, Quote } from "lucide-react";
import { StudentProfile } from "@/types/profile";

interface AboutCardProps {
  profile: StudentProfile;
}

export function AboutCard({ profile }: AboutCardProps) {
  return (
    <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 backdrop-blur-xl space-y-4 shadow-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <User className="w-5 h-5 text-indigo-400" />
          About Me
        </h3>
        <span className="text-xs text-slate-500 font-mono">Public Bio</span>
      </div>

      <div className="relative p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
        <Quote className="absolute top-3 right-3 w-6 h-6 text-indigo-500/20" />
        <p className="text-sm text-slate-300 leading-relaxed italic">
          "{profile.bio}"
        </p>
      </div>

      {profile.tagline && (
        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-300">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{profile.tagline}</span>
        </div>
      )}
    </div>
  );
}
