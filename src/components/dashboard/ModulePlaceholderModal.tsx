"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Bell, Check, Zap, Layers } from "lucide-react";
import { GlowButton } from "@/components/ui/glow-button";

interface ModulePlaceholderModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

export function ModulePlaceholderModal({
  isOpen,
  onClose,
  title,
  description = "We're currently building this state-of-the-art module for the StudyHive ecosystem. Stay tuned for early beta access!",
  icon,
}: ModulePlaceholderModalProps) {
  const [notified, setNotified] = useState(false);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl shadow-indigo-950/50"
        >
          {/* Top Decorative Radial Glow */}
          <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800/60 hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Icon Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 p-0.5 shadow-lg shadow-indigo-500/30">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-indigo-400">
                {icon || <Sparkles className="w-7 h-7" />}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Future Module
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  v2.5 Roadmap
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mt-1">{title}</h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            {description}
          </p>

          {/* Preview Teaser Bullets */}
          <div className="space-y-2.5 mb-8 bg-slate-950/60 border border-slate-800/80 rounded-xl p-4">
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <Zap className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>Real-time WebSocket multiplayer integration</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <Layers className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Deep AI Assistant contextual awareness</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>End-to-end encrypted peer collaboration</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              Close
            </button>

            <GlowButton
              variant={notified ? "secondary" : "primary"}
              size="sm"
              onClick={() => setNotified(!notified)}
              icon={notified ? <Check className="w-4 h-4 text-emerald-400" /> : <Bell className="w-4 h-4" />}
            >
              {notified ? "Notification Saved!" : "Notify Me On Release"}
            </GlowButton>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
