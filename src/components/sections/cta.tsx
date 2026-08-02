"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Play, Users, Zap } from "lucide-react";
import { GlowButton } from "@/components/ui/glow-button";
import { GradientText } from "@/components/ui/gradient-text";

export function CTA() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Massive Gradient Banner Box */}
        <div className="relative rounded-3xl p-10 sm:p-16 text-center space-y-8 overflow-hidden border border-indigo-500/40 shadow-2xl shadow-indigo-950/60 aurora-bg">
          
          {/* Decorative Floating Glowing Circles */}
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-indigo-500/30 blur-3xl animate-pulse-glow" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-purple-500/30 blur-3xl animate-float-slow" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold"
          >
            <Sparkles className="w-4 h-4 text-cyan-300" />
            Join 250,000+ Students Worldwide Today
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto"
          >
            Ready to Transform Your <GradientText variant="purple-cyan">Learning Journey?</GradientText>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Stop studying in isolation. Join live study rooms, connect with compatible peers, and master difficult subjects with AI assistance.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Link href="/signup">
              <GlowButton
                variant="cyan"
                size="xl"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Join StudyHive Free
              </GlowButton>
            </Link>

            <GlowButton
              variant="secondary"
              size="xl"
              icon={<Play className="w-4 h-4 fill-slate-200" />}
            >
              Watch Platform Walkthrough
            </GlowButton>
          </motion.div>

          {/* Bottom Micro Copy */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-emerald-400" /> No Credit Card Required
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-cyan-400" /> Free Forever Plan Available
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
