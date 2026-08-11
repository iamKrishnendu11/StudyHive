"use client";

import React from "react";
import { Calendar, Clock, CheckCircle2, XCircle } from "lucide-react";
import { StudentProfile } from "@/types/profile";

interface AvailabilityCalendarProps {
  profile: StudentProfile;
}

export function AvailabilityCalendar({ profile }: AvailabilityCalendarProps) {
  return (
    <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 backdrop-blur-xl space-y-4 shadow-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Calendar className="w-5 h-5 text-purple-400" />
          Weekly Study Schedule
        </h3>
        <span className="text-xs text-slate-500 font-mono">Live Slots</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2.5">
        {profile.weeklyAvailability.map((slot, i) => (
          <div
            key={i}
            className={`p-3 rounded-2xl border text-center space-y-1.5 transition-all ${
              slot.isAvailable
                ? "bg-slate-950/80 border-indigo-500/30 text-white"
                : "bg-slate-950/40 border-slate-850 opacity-60 text-slate-500"
            }`}
          >
            <div className="text-xs font-bold font-mono tracking-wider">{slot.day}</div>
            <div className="text-[11px] font-semibold flex items-center justify-center gap-1">
              {slot.isAvailable ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-emerald-300 text-[10px]">{slot.slots}</span>
                </>
              ) : (
                <>
                  <XCircle className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                  <span className="text-slate-500 text-[10px]">Off</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
