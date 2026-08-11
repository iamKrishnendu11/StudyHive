"use client";

import React from "react";
import { Star, ShieldCheck, Heart, MessageCircle, CheckSquare, Clock } from "lucide-react";
import { StudentProfile } from "@/types/profile";

interface StudyPartnerScoreProps {
  profile: StudentProfile;
}

export function StudyPartnerScore({ profile }: StudyPartnerScoreProps) {
  const { partnerScore, partnerRating, scoreBreakdown } = profile;

  return (
    <div className="rounded-3xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-purple-950/40 border border-indigo-500/30 p-6 backdrop-blur-xl space-y-6 shadow-2xl relative overflow-hidden">
      {/* Decorative Radial Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-indigo-400" />
          Study Partner Score
        </h3>
        <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
          Highly Recommended
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-4 rounded-2xl bg-slate-950/70 border border-indigo-500/20">
        {/* Left Circular Ring Score */}
        <div className="flex items-center gap-5">
          <div className="relative w-24 h-24 flex items-center justify-center">
            {/* SVG Ring */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-slate-800"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-indigo-500"
                strokeDasharray={`${partnerScore}, 100`}
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-xl font-black text-white">{partnerScore}</span>
              <span className="text-[10px] text-slate-400 font-mono">/ 100</span>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-bold text-amber-400 ml-1">({partnerRating}.0)</span>
            </div>
            <div className="text-xs font-bold text-white">Peer Endorsed Partner</div>
            <p className="text-[11px] text-slate-400">Based on 48 collaborative study sessions</p>
          </div>
        </div>

        {/* Right Score Breakdown Pillars */}
        <div className="grid grid-cols-2 gap-3 w-full sm:w-auto text-xs">
          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <div className="text-slate-400 text-[10px] flex items-center gap-1">
              <Clock className="w-3 h-3 text-indigo-400" /> Consistency
            </div>
            <div className="font-mono font-bold text-indigo-400">{scoreBreakdown.consistency}%</div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <div className="text-slate-400 text-[10px] flex items-center gap-1">
              <MessageCircle className="w-3 h-3 text-cyan-400" /> Communication
            </div>
            <div className="font-mono font-bold text-cyan-400">{scoreBreakdown.communication}%</div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <div className="text-slate-400 text-[10px] flex items-center gap-1">
              <Heart className="w-3 h-3 text-rose-400" /> Helpfulness
            </div>
            <div className="font-mono font-bold text-rose-400">{scoreBreakdown.helpfulness}%</div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <div className="text-slate-400 text-[10px] flex items-center gap-1">
              <CheckSquare className="w-3 h-3 text-emerald-400" /> Attendance
            </div>
            <div className="font-mono font-bold text-emerald-400">{scoreBreakdown.attendance}%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
