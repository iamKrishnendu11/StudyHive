"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, Users, BookOpen, Clock, ArrowRight } from "lucide-react";
import { GlowButton } from "@/components/ui/glow-button";

interface ContinueStudyingProps {
  onOpenModuleModal: (title: string, desc?: string) => void;
}

export function ContinueStudying({ onOpenModuleModal }: ContinueStudyingProps) {
  const rooms = [
    {
      id: 1,
      title: "Advanced Quantum Physics & Calculus",
      subject: "Physics",
      progress: 75,
      participants: 6,
      avatarImgs: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
      ],
      tag: "Live Room",
      color: "from-indigo-600 to-purple-600",
    },
    {
      id: 2,
      title: "Full-Stack System Architecture & Spring Boot",
      subject: "Computer Science",
      progress: 40,
      participants: 12,
      avatarImgs: [
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&q=80",
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&q=80",
      ],
      tag: "Pomodoro Session",
      color: "from-cyan-600 to-blue-600",
    },
    {
      id: 3,
      title: "Machine Learning & Neural Network Fundamentals",
      subject: "Data Science",
      progress: 90,
      participants: 4,
      avatarImgs: [
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=80&q=80",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
      ],
      tag: "Exam Prep",
      color: "from-purple-600 to-pink-600",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-indigo-400" />
          Continue Studying
        </h3>
        <button
          onClick={() =>
            onOpenModuleModal(
              "Study Rooms Directory",
              "Explore all 150+ live peer study rooms available across universities worldwide."
            )
          }
          className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
        >
          View All Rooms <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {rooms.map((room) => (
          <motion.div
            key={room.id}
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-2xl bg-slate-900/80 border border-slate-800 p-5 backdrop-blur-md flex flex-col justify-between shadow-xl transition-all duration-300 group hover:border-indigo-500/40"
          >
            {/* Top Tag & Subject */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                  {room.subject}
                </span>
                <span className="text-[10px] font-semibold text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  {room.tag}
                </span>
              </div>

              <h4 className="text-sm font-bold text-white line-clamp-2 leading-snug group-hover:text-indigo-300 transition-colors">
                {room.title}
              </h4>
            </div>

            {/* Middle Progress Bar */}
            <div className="my-4 space-y-1.5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-400 font-medium">Session Completion</span>
                <span className="text-indigo-400 font-bold">{room.progress}%</span>
              </div>
              <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
                <div
                  className={`h-full bg-gradient-to-r ${room.color} transition-all duration-500 rounded-full`}
                  style={{ width: `${room.progress}%` }}
                />
              </div>
            </div>

            {/* Bottom Footer: Participants & Play Button */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2 overflow-hidden">
                  {room.avatarImgs.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="Peer"
                      className="inline-block h-6 w-6 rounded-full ring-2 ring-slate-900 object-cover"
                    />
                  ))}
                </div>
                <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                  <Users className="w-3 h-3 text-slate-500" />
                  {room.participants} peers
                </span>
              </div>

              <GlowButton
                variant="primary"
                size="sm"
                icon={<Play className="w-3.5 h-3.5 fill-current" />}
                onClick={() =>
                  onOpenModuleModal(
                    room.title,
                    `Entering live study room with ${room.participants} active peers. Audio, whiteboard, and AI co-pilot enabled.`
                  )
                }
              >
                Continue
              </GlowButton>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
