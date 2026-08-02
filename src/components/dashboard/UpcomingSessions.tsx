"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Bell, ArrowRight } from "lucide-react";
import { GlowButton } from "@/components/ui/glow-button";

interface UpcomingSessionsProps {
  onOpenModuleModal: (title: string, desc?: string) => void;
}

export function UpcomingSessions({ onOpenModuleModal }: UpcomingSessionsProps) {
  const sessions = [
    {
      id: 1,
      title: "Linear Algebra & Vector Spaces Workshop",
      time: "8:00 PM - 9:30 PM",
      countdown: "Starts in 25 mins",
      host: "Dr. Sarah Lin",
      subject: "Mathematics",
      isImminent: true,
    },
    {
      id: 2,
      title: "Distributed Systems & Kafka Peer Review",
      time: "Tomorrow, 10:00 AM",
      countdown: "Tomorrow",
      host: "Dev Study Group",
      subject: "Computer Science",
      isImminent: false,
    },
    {
      id: 3,
      title: "Organic Chemistry Synthesis Practice",
      time: "Tomorrow, 3:00 PM",
      countdown: "Tomorrow",
      host: "Chem Scholars",
      subject: "Chemistry",
      isImminent: false,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Calendar className="w-5 h-5 text-purple-400" />
          Upcoming Sessions
        </h3>
        <button
          onClick={() =>
            onOpenModuleModal(
              "Schedule Calendar",
              "View your full synchronized study schedule and sync with Google Calendar or Notion."
            )
          }
          className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
        >
          Full Schedule <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="space-y-3">
        {sessions.map((session) => (
          <motion.div
            key={session.id}
            whileHover={{ x: 4 }}
            className={`relative overflow-hidden rounded-2xl bg-slate-900/80 border p-4 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300 ${
              session.isImminent
                ? "border-purple-500/40 bg-gradient-to-r from-purple-950/40 via-slate-900 to-slate-900 shadow-lg shadow-purple-950/20"
                : "border-slate-800 hover:border-slate-700"
            }`}
          >
            <div className="flex items-start gap-3.5">
              <div
                className={`p-3 rounded-xl border shrink-0 ${
                  session.isImminent
                    ? "bg-purple-600/20 border-purple-500/30 text-purple-300"
                    : "bg-slate-800/80 border-slate-700 text-slate-400"
                }`}
              >
                <Clock className="w-5 h-5" />
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-white">{session.title}</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                    {session.subject}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span>{session.time}</span>
                  <span>•</span>
                  <span>Hosted by {session.host}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full border ${
                  session.isImminent
                    ? "bg-purple-500/20 text-purple-300 border-purple-500/40 animate-pulse"
                    : "bg-slate-800 text-slate-400 border-slate-700"
                }`}
              >
                {session.countdown}
              </span>

              <GlowButton
                variant={session.isImminent ? "primary" : "ghost"}
                size="sm"
                icon={<Bell className="w-3.5 h-3.5" />}
                onClick={() =>
                  onOpenModuleModal(
                    `Reminder set for ${session.title}`,
                    "You will receive a notification 10 minutes before the session begins."
                  )
                }
              >
                Remind Me
              </GlowButton>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
