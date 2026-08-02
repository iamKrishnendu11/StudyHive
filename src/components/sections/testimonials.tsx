"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, CheckCircle2 } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { GradientText } from "@/components/ui/gradient-text";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Aarav Gupta",
      role: "Computer Science @ Stanford University",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
      rating: 5,
      quote:
        "StudyHive completely transformed my exam prep. I matched with a study group for Advanced Algorithms, and we solved 150+ LeetCode problems together. My GPA went from 3.4 to 3.95!",
      badge: "Verified Student",
    },
    {
      id: 2,
      name: "Emily Watson",
      role: "Pre-Med Scholar @ Harvard Medical School",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
      rating: 5,
      quote:
        "The AI Tutor combined with live Pomodoro voice rooms kept me accountable for 8 hours a day during MCAT prep. Asking doubts and getting instant explanations saved me hundreds of hours.",
      badge: "MCAT 524 Scorer",
    },
    {
      id: 3,
      name: "Rohan Kulkarni",
      role: "AIR 42 GATE CS Exam",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
      rating: 5,
      quote:
        "Finding serious study partners for GATE used to be impossible. On StudyHive, I joined a 5-member daily live room. We quizzed each other every evening—it was game-changing.",
      badge: "AIR 42 Ranker",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Student Success Stories
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Loved by Thousands of <GradientText variant="primary">Top Scholars</GradientText>
          </motion.h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <SpotlightCard className="p-8 sm:p-12 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {testimonials[currentIndex].badge}
                  </span>
                </div>

                <blockquote className="text-lg sm:text-2xl text-slate-200 font-medium leading-relaxed italic relative">
                  <Quote className="w-10 h-10 text-indigo-500/20 absolute -top-4 -left-6 -z-10" />
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500/40"
                  />
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === idx ? "w-8 bg-indigo-500" : "bg-slate-800 hover:bg-slate-700"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-2xl glass-card border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/40 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-2xl glass-card border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/40 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
