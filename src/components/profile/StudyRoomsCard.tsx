"use client";

import React, { useState } from "react";
import { BookOpen, Users, Pin, PlusCircle, ArrowRight } from "lucide-react";
import { StudentProfile } from "@/types/profile";

interface StudyRoomsCardProps {
  profile: StudentProfile;
}

export function StudyRoomsCard({ profile }: StudyRoomsCardProps) {
  const [activeTab, setActiveTab] = useState<"recent" | "created" | "pinned">("recent");
  const { studyRooms } = profile;

  return (
    <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 backdrop-blur-xl space-y-5 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-indigo-400" />
          Active Study Rooms
        </h3>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-950/80 border border-slate-800 self-start sm:self-auto text-xs">
          <button
            onClick={() => setActiveTab("recent")}
            className={`px-3 py-1 rounded-lg font-semibold transition-all ${
              activeTab === "recent"
                ? "bg-indigo-600 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Recent ({studyRooms.recent.length})
          </button>

          <button
            onClick={() => setActiveTab("created")}
            className={`px-3 py-1 rounded-lg font-semibold transition-all ${
              activeTab === "created"
                ? "bg-indigo-600 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Created ({studyRooms.created.length})
          </button>

          <button
            onClick={() => setActiveTab("pinned")}
            className={`px-3 py-1 rounded-lg font-semibold transition-all ${
              activeTab === "pinned"
                ? "bg-indigo-600 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Pinned ({studyRooms.pinned.length})
          </button>
        </div>
      </div>

      {/* Tab Content List */}
      <div className="space-y-3">
        {activeTab === "recent" &&
          studyRooms.recent.map((room, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-indigo-500/30 transition-all flex items-center justify-between group"
            >
              <div className="space-y-1 min-w-0 pr-2">
                <div className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors truncate">
                  {room.name}
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-slate-900 text-[10px] font-mono border border-slate-800 text-slate-300">
                    {room.category}
                  </span>
                  <span className="flex items-center gap-1 text-indigo-400 font-medium">
                    <Users className="w-3 h-3" /> {room.peers} Active Peers
                  </span>
                </div>
              </div>

              <button className="p-2 rounded-xl bg-slate-900 text-slate-400 group-hover:text-white group-hover:bg-indigo-600 transition-all shrink-0">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}

        {activeTab === "created" &&
          studyRooms.created.map((room, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-purple-500/30 transition-all flex items-center justify-between group"
            >
              <div className="space-y-1 min-w-0 pr-2">
                <div className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors truncate">
                  {room.name}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <PlusCircle className="w-3.5 h-3.5 text-purple-400" />
                  <span>Created by you • {room.members} total members</span>
                </div>
              </div>

              <button className="p-2 rounded-xl bg-slate-900 text-slate-400 group-hover:text-white group-hover:bg-purple-600 transition-all shrink-0">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}

        {activeTab === "pinned" &&
          studyRooms.pinned.map((room, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-amber-500/30 transition-all flex items-center justify-between group"
            >
              <div className="space-y-1 min-w-0 pr-2">
                <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors truncate flex items-center gap-2">
                  <Pin className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
                  <span>{room.name}</span>
                </div>
                <div className="text-xs text-slate-400 pl-5">{room.category}</div>
              </div>

              <button className="p-2 rounded-xl bg-slate-900 text-slate-400 group-hover:text-white group-hover:bg-amber-600 transition-all shrink-0">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
