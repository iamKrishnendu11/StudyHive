"use client";

import React from "react";
import { Sliders, Mic, Video, MessageSquare, Clock, Globe, BookOpen, Languages } from "lucide-react";
import { StudentProfile } from "@/types/profile";

interface StudyPreferencesCardProps {
  profile: StudentProfile;
}

export function StudyPreferencesCard({ profile }: StudyPreferencesCardProps) {
  const { preferences } = profile;

  return (
    <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 backdrop-blur-xl space-y-5 shadow-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Sliders className="w-5 h-5 text-indigo-400" />
          Study Match Preferences
        </h3>
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
          Peer Match Engine Active
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Preferred Subjects */}
        <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <BookOpen className="w-4 h-4 text-purple-400" />
            <span>Preferred Subjects</span>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {preferences.subjects.map((sub, i) => (
              <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-bold text-white border border-slate-800">
                {sub}
              </span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Languages className="w-4 h-4 text-cyan-400" />
            <span>Spoken Languages</span>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {preferences.languages.map((lang, i) => (
              <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-bold text-white border border-slate-800">
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Study Mode */}
        <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Mic className="w-4 h-4 text-emerald-400" />
            <span>Preferred Study Mode</span>
          </div>
          <div className="flex items-center gap-2 pt-1">
            {preferences.modes.map((mode, i) => (
              <span key={i} className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
                {mode === "Voice" && <Mic className="w-3 h-3" />}
                {mode === "Video" && <Video className="w-3 h-3" />}
                {mode === "Chat" && <MessageSquare className="w-3 h-3" />}
                {mode}
              </span>
            ))}
          </div>
        </div>

        {/* Availability & Session Length */}
        <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Daily Availability Window</span>
          </div>
          <div className="text-xs font-bold text-white pt-1 flex items-center justify-between">
            <span>{preferences.availabilityTimes}</span>
            <span className="text-slate-500 font-mono text-[10px]">{preferences.timezone}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
