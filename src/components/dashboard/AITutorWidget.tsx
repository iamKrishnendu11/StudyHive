"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Sparkles, Send, MessageSquare, ArrowRight, Zap, RefreshCw } from "lucide-react";
import { GlowButton } from "@/components/ui/glow-button";

interface AITutorWidgetProps {
  onOpenModuleModal: (title: string, desc?: string) => void;
}

export function AITutorWidget({ onOpenModuleModal }: AITutorWidgetProps) {
  const [prompt, setPrompt] = useState("");

  const suggestedPrompts = [
    "Explain Backpropagation in simple terms",
    "Summarize Quantum Entanglement concept",
    "Generate 5 practice questions for Linear Algebra",
    "Review my study schedule for midterms",
  ];

  const handleAsk = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    onOpenModuleModal(
      `AI Tutor Question: "${prompt}"`,
      "Your 24/7 AI tutor co-pilot is processing your query with full syllabus context."
    );
    setPrompt("");
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-indigo-950/30"
    >
      {/* Decorative Radial Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Card Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 p-0.5 shadow-lg shadow-indigo-500/30">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-indigo-400">
                <Bot className="w-6 h-6" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">StudyHive AI Tutor</h3>
                <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-mono font-bold border border-indigo-500/30">
                  v2.0 Active
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Instant 24/7 concept explanations, practice quizzes, and code debugging co-pilot.
              </p>
            </div>
          </div>

          <GlowButton
            variant="ghost"
            size="sm"
            onClick={() =>
              onOpenModuleModal(
                "Full AI Tutor Workspace",
                "Access full chat threads, formula rendering, code compilers, and PDF document chat."
              )
            }
          >
            Open Full Chat
          </GlowButton>
        </div>

        {/* Ask Bar Input */}
        <form onSubmit={handleAsk} className="relative flex items-center">
          <div className="absolute left-4 text-indigo-400 pointer-events-none">
            <Sparkles className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask AI Tutor anything (e.g. 'Derive Navier-Stokes equation')..."
            className="w-full pl-11 pr-28 py-3.5 rounded-2xl bg-slate-950/80 border border-indigo-500/30 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all shadow-inner"
          />
          <div className="absolute right-2">
            <GlowButton variant="primary" size="sm" type="submit" icon={<Send className="w-3.5 h-3.5" />}>
              Ask AI
            </GlowButton>
          </div>
        </form>

        {/* Suggested Prompt Pills */}
        <div className="space-y-2">
          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Zap className="w-3 h-3 text-amber-400" />
            Suggested Quick Prompts
          </div>
          <div className="flex flex-wrap gap-2">
            {suggestedPrompts.map((p, i) => (
              <button
                key={i}
                onClick={() => {
                  setPrompt(p);
                }}
                className="text-xs px-3 py-1.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-indigo-500/50 text-slate-300 hover:text-white transition-all text-left flex items-center gap-1.5 group"
              >
                <MessageSquare className="w-3 h-3 text-indigo-400 group-hover:scale-110 transition-transform" />
                <span>{p}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
