"use client";

import React from "react";
import { Sparkles, Code2 } from "lucide-react";
import { StudentProfile } from "@/types/profile";

interface AcademicInterestsProps {
  profile: StudentProfile;
}

export function AcademicInterests({ profile }: AcademicInterestsProps) {
  return (
    <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 backdrop-blur-xl space-y-4 shadow-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Code2 className="w-5 h-5 text-cyan-400" />
          Academic & Tech Interests
        </h3>
        <span className="text-xs text-slate-500 font-mono">
          {profile.interests.length} Topics
        </span>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {profile.interests.map((interest, i) => (
          <span
            key={i}
            className="px-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-semibold text-slate-200 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-600/10 transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3 h-3 text-indigo-400" />
            {interest}
          </span>
        ))}
      </div>
    </div>
  );
}
