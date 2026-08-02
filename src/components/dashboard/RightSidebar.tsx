"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Users,
  Target,
  Calendar as CalendarIcon,
  Plus,
  Play,
  FileText,
  MessageSquare,
  Sparkles,
  ChevronRight,
  Flame
} from "lucide-react";
import { GlowButton } from "@/components/ui/glow-button";

interface RightSidebarProps {
  onOpenModuleModal: (title: string, desc?: string) => void;
}

export function RightSidebar({ onOpenModuleModal }: RightSidebarProps) {
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());

  const leaderboardTop = [
    { rank: "🥇", name: "Elena Rostova", xp: "4,920 XP", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80", tag: "MIT" },
    { rank: "🥈", name: "Marcus Vance", xp: "4,310 XP", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80", tag: "Stanford" },
    { rank: "🥉", name: "Sophia Chen", xp: "3,890 XP", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80", tag: "Cambridge" },
  ];

  const friendsOnline = [
    { id: 1, name: "David Kim", room: "Calculus III", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80" },
    { id: 2, name: "Aria Thorne", room: "AI Ethics", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=80&q=80" },
    { id: 3, name: "Liam O'Connor", room: "Quantum Lab", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&q=80" },
  ];

  const currentMonthDays = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="space-y-6 w-full lg:w-80 shrink-0">
      
      {/* 1. Quick Actions Card */}
      <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4 backdrop-blur-md space-y-3">
        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          Quick Actions
        </h4>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onOpenModuleModal("Create Study Room", "Start a live audio/video study room with AI assistant.")}
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-indigo-600/10 border border-indigo-500/30 hover:bg-indigo-600/20 text-indigo-300 hover:text-white transition-all text-center group"
          >
            <Plus className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
            <span className="text-[11px] font-bold">New Room</span>
          </button>
          
          <button
            onClick={() => onOpenModuleModal("Pomodoro Timer", "Launch a 25/5 interval focus timer with lo-fi beats.")}
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-purple-600/10 border border-purple-500/30 hover:bg-purple-600/20 text-purple-300 hover:text-white transition-all text-center group"
          >
            <Play className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
            <span className="text-[11px] font-bold">Pomodoro</span>
          </button>

          <button
            onClick={() => onOpenModuleModal("AI Note Synthesizer", "Convert raw study notes or lecture audio into structured flashcards.")}
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-cyan-600/10 border border-cyan-500/30 hover:bg-cyan-600/20 text-cyan-300 hover:text-white transition-all text-center group"
          >
            <FileText className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
            <span className="text-[11px] font-bold">AI Notes</span>
          </button>

          <button
            onClick={() => onOpenModuleModal("Peer Voice Lobby", "Drop into instant voice study lounges with active students.")}
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-emerald-600/10 border border-emerald-500/30 hover:bg-emerald-600/20 text-emerald-300 hover:text-white transition-all text-center group"
          >
            <MessageSquare className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
            <span className="text-[11px] font-bold">Voice Chat</span>
          </button>
        </div>
      </div>

      {/* 2. Today's Goal Progress */}
      <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 p-4 backdrop-blur-md space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5 text-rose-400" />
            Today's Target Goal
          </h4>
          <span className="text-xs font-bold text-rose-400">85%</span>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span>3 of 4 Modules Mastered</span>
            <span className="text-slate-500">2.5 / 3.0 hrs</span>
          </div>
          <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
            <div className="h-full bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 w-[85%]" />
          </div>
        </div>
      </div>

      {/* 3. Global Leaderboard Mini-Widget */}
      <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4 backdrop-blur-md space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            Study Leaderboard
          </h4>
          <button
            onClick={() => onOpenModuleModal("Global Leaderboard", "View global university rankings and weekly XP prizes.")}
            className="text-[10px] text-indigo-400 hover:underline flex items-center"
          >
            View All <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        <div className="space-y-2">
          {leaderboardTop.map((user, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-sm">{user.rank}</span>
                <img src={user.avatar} alt={user.name} className="w-7 h-7 rounded-full object-cover border border-slate-700" />
                <div>
                  <div className="text-xs font-bold text-white leading-none">{user.name}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{user.tag}</div>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-amber-400">{user.xp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Friends Online */}
      <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4 backdrop-blur-md space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-emerald-400" />
            Friends Online (3)
          </h4>
        </div>

        <div className="space-y-2">
          {friendsOnline.map((friend) => (
            <div
              key={friend.id}
              className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800/80"
            >
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <img src={friend.avatar} alt={friend.name} className="w-7 h-7 rounded-full object-cover border border-slate-700" />
                  <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-slate-950" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-none">{friend.name}</div>
                  <div className="text-[10px] text-indigo-400 mt-0.5">{friend.room}</div>
                </div>
              </div>

              <button
                onClick={() => onOpenModuleModal(`Join ${friend.name}'s Room`, `Connecting to ${friend.room} study lounge...`)}
                className="text-[10px] font-bold px-2 py-1 rounded-lg bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-600 hover:text-white transition-colors"
              >
                Join
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Mini Calendar */}
      <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4 backdrop-blur-md space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <CalendarIcon className="w-3.5 h-3.5 text-purple-400" />
            August 2026
          </h4>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-slate-500 font-mono font-bold">
          <span>SU</span><span>MO</span><span>TU</span><span>WE</span><span>TH</span><span>FR</span><span>SA</span>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-slate-400">
          {currentMonthDays.slice(0, 28).map((day) => {
            const isToday = day === selectedDate;
            const hasEvent = day === 2 || day === 5 || day === 12 || day === 18;
            return (
              <button
                key={day}
                onClick={() => setSelectedDate(day)}
                className={`p-1.5 rounded-lg transition-all relative ${
                  isToday
                    ? "bg-indigo-600 text-white font-bold shadow-md shadow-indigo-500/30"
                    : "hover:bg-slate-800 text-slate-300"
                }`}
              >
                {day}
                {hasEvent && !isToday && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-400" />
                )}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
