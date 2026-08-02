"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mic,
  MicOff,
  Video,
  Volume2,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  MessageSquare,
  FileText,
  PenTool,
  Clock,
  Users,
  Smile,
  Send,
  MoreVertical,
  CheckCircle,
} from "lucide-react";
import { GlowButton } from "@/components/ui/glow-button";
import { GradientText } from "@/components/ui/gradient-text";

export function StudyRoomPreview() {
  const [activeTab, setActiveTab] = useState<"notes" | "whiteboard">("notes");
  const [isMuted, setIsMuted] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
  const [reactions, setReactions] = useState<{ id: number; emoji: string; x: number }[]>([]);

  // Functional Pomodoro Timer Countdown
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTimerRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleTriggerEmoji = (emoji: string) => {
    const newReaction = {
      id: Date.now(),
      emoji,
      x: Math.random() * 80 + 10,
    };
    setReactions((prev) => [...prev, newReaction]);
    setTimeout(() => {
      setReactions((prev) => prev.filter((r) => r.id !== newReaction.id));
    }, 2500);
  };

  const participants = [
    { name: "Rahul S.", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80", status: "Speaking...", color: "border-emerald-500" },
    { name: "Priya M.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80", status: "Muted", color: "border-indigo-500" },
    { name: "Alex Chen", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80", status: "Sharing notes", color: "border-cyan-500" },
    { name: "Sophia K.", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80", status: "Active", color: "border-purple-500" },
  ];

  return (
    <section id="study-room" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Live Collaborative Sandbox
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Interactive <GradientText variant="purple-cyan">Study Room Preview</GradientText>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            The seamless fusion of Discord voice channels, Notion collaborative notes, and Zoom focus tools. Try out the controls below!
          </motion.p>
        </div>

        {/* Main Mockup Sandbox */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl glass-panel border border-slate-700/80 shadow-2xl shadow-purple-950/40 overflow-hidden"
        >
          {/* Floating Reaction Animations Overlay */}
          <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
            {reactions.map((r) => (
              <motion.div
                key={r.id}
                initial={{ y: "80%", opacity: 1, scale: 0.8 }}
                animate={{ y: "20%", opacity: 0, scale: 1.5 }}
                transition={{ duration: 2.2, ease: "easeOut" }}
                style={{ left: `${r.x}%` }}
                className="absolute text-3xl select-none"
              >
                {r.emoji}
              </motion.div>
            ))}
          </div>

          {/* Top Control Bar */}
          <div className="px-6 py-4 bg-slate-950/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="font-extrabold text-sm text-white ml-2 flex items-center gap-2">
                🚀 Data Structures & Algorithms Masters Room
              </span>
            </div>

            {/* Pomodoro Timer Controls */}
            <div className="flex items-center gap-3 bg-slate-900/90 px-4 py-1.5 rounded-full border border-slate-800">
              <Clock className="w-4 h-4 text-indigo-400" />
              <span className="font-mono text-base font-bold text-indigo-300">
                {formatTime(timeLeft)}
              </span>
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="p-1 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 transition-colors"
                title={isTimerRunning ? "Pause Timer" : "Start Timer"}
              >
                {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => {
                  setIsTimerRunning(false);
                  setTimeLeft(25 * 60);
                }}
                className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 transition-colors"
                title="Reset Timer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mic / Voice Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                  isMuted
                    ? "bg-rose-500/20 text-rose-300 border-rose-500/40"
                    : "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                }`}
              >
                {isMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                {isMuted ? "Microphone Muted" : "Voice Connected"}
              </button>
            </div>
          </div>

          {/* Body Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
            
            {/* Left Sidebar: Active Voice Participants */}
            <div className="lg:col-span-3 p-4 bg-slate-950/60 border-r border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-indigo-400" /> Active Members (4)
                </span>
              </div>

              <div className="space-y-2.5">
                {participants.map((p, i) => (
                  <div
                    key={p.name}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img
                          src={p.avatar}
                          alt={p.name}
                          className={`w-9 h-9 rounded-full object-cover border-2 ${p.color}`}
                        />
                        {i === 0 && (
                          <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-950 rounded-full" />
                        )}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">{p.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono">{p.status}</div>
                      </div>
                    </div>
                    {i === 0 && (
                      <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
                    )}
                  </div>
                ))}
              </div>

              {/* Floating Emoji Bar */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                <span className="text-[11px] font-semibold text-slate-400 block">
                  Send Live Reaction:
                </span>
                <div className="flex items-center justify-between bg-slate-900/80 p-2 rounded-xl border border-slate-800">
                  {["🔥", "💡", "👏", "🤯", "❤️"].map((emoji) => (
                    <button
                      key={emoji}
                      onClick={() => handleTriggerEmoji(emoji)}
                      className="p-1.5 hover:bg-slate-800 rounded-lg text-lg transition-transform hover:scale-125"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Center Area: Notes & Whiteboard */}
            <div className="lg:col-span-9 p-6 bg-slate-900/40 space-y-4 flex flex-col justify-between">
              
              {/* Tab Switcher */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab("notes")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      activeTab === "notes"
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                        : "bg-slate-800/60 text-slate-400 hover:text-white"
                    }`}
                  >
                    <FileText className="w-4 h-4" />
                    Shared Markdown Notes
                  </button>
                  <button
                    onClick={() => setActiveTab("whiteboard")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      activeTab === "whiteboard"
                        ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20"
                        : "bg-slate-800/60 text-slate-400 hover:text-white"
                    }`}
                  >
                    <PenTool className="w-4 h-4" />
                    Interactive Whiteboard
                  </button>
                </div>

                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Synced via WebSockets
                </div>
              </div>

              {/* Tab Content 1: Collaborative Notes */}
              {activeTab === "notes" ? (
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-4 font-mono text-xs text-slate-300">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 text-indigo-300">
                    <span># Topic: Graph Traversal Algorithms (BFS vs DFS)</span>
                    <span className="text-[10px] text-slate-500">Edited by Alex 5s ago</span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-slate-200">
                      <span className="text-purple-400 font-bold">BFS:</span> Uses Queue (FIFO). Ideal for finding shortest path in unweighted graphs. Time: O(V + E).
                    </p>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-300 text-[11px]">
                      <code>{`const bfs = (graph, start) => {
  const visited = new Set([start]);
  const queue = [start];
  while (queue.length > 0) {
    const node = queue.shift();
    console.log("Visited:", node);
  }
};`}</code>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-emerald-400 text-[11px] pt-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Rahul added flashcard deck target for this note block.</span>
                  </div>
                </div>
              ) : (
                /* Tab Content 2: Whiteboard Mockup */
                <div className="h-64 rounded-2xl bg-slate-950/90 border border-slate-800 flex flex-col items-center justify-center space-y-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                  <PenTool className="w-10 h-10 text-purple-400 relative z-10 animate-bounce" />
                  <span className="text-sm font-bold text-white relative z-10">
                    Live Shared Canvas Active
                  </span>
                  <p className="text-xs text-slate-400 max-w-sm text-center relative z-10">
                    Draw flowcharts, system design diagrams, and math formulas together with real-time cursor sync.
                  </p>
                </div>
              )}

              {/* Bottom Quick Chat Bar */}
              <div className="flex items-center gap-3 pt-2">
                <input
                  type="text"
                  placeholder="Type doubt or message to room..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
                <button className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
