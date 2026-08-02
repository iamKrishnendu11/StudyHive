"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Sparkles,
  Bot,
  User,
  CheckCircle2,
  HelpCircle,
  Layers,
  ArrowRight,
  RefreshCw,
  BookOpen,
} from "lucide-react";
import { GlowButton } from "@/components/ui/glow-button";
import { GradientText } from "@/components/ui/gradient-text";

export function AITutor() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [typedText, setTypedText] = useState("");
  const fullAnswer =
    "Binary Search is an efficient O(log n) algorithm for finding an element in a sorted array. It repeatedly divides the search interval in half by comparing the target value to the middle element.";

  // Typing effect simulation
  useEffect(() => {
    if (activeStep >= 1) {
      let currentLength = 0;
      const interval = setInterval(() => {
        if (currentLength <= fullAnswer.length) {
          setTypedText(fullAnswer.slice(0, currentLength));
          currentLength++;
        } else {
          clearInterval(interval);
          if (activeStep === 1) {
            setTimeout(() => setActiveStep(2), 1500);
          }
        }
      }, 25);
      return () => clearInterval(interval);
    } else {
      setTypedText("");
    }
  }, [activeStep]);

  const handleStartDemo = () => {
    setActiveStep(1);
  };

  const handleResetDemo = () => {
    setActiveStep(0);
    setTypedText("");
  };

  return (
    <section id="ai-tutor" className="py-24 relative bg-slate-950/80 border-t border-slate-800/80">
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
            24/7 AI Pedagogical Companion
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Learn Faster with Your Personal <GradientText variant="primary">AI Tutor</GradientText>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            Ask any question, get crystal-clear explanations, auto-generate diagnostic quizzes, and build flashcard decks instantly.
          </motion.p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: AI Capabilities */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl glass-card border border-indigo-500/30 space-y-6 relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
                <Brain className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold text-white">
                Socratic Learning Engine
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                StudyHive AI does not just give dry answers—it guides you through the underlying concepts, identifies your knowledge gaps, and creates tailored revision materials.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Instant Socratic doubt resolution",
                  "Auto-generated quizzes & diagnostics",
                  "PDF & lecture note summarization",
                  "Code debugging with line-by-line breakdown",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-xs font-semibold text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-3">
                {activeStep === 0 ? (
                  <GlowButton
                    variant="primary"
                    size="sm"
                    onClick={handleStartDemo}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Simulate AI Response
                  </GlowButton>
                ) : (
                  <GlowButton
                    variant="secondary"
                    size="sm"
                    onClick={handleResetDemo}
                    icon={<RefreshCw className="w-4 h-4" />}
                  >
                    Restart Conversation
                  </GlowButton>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Live Conversation UI */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-panel border border-slate-800 shadow-2xl p-6 space-y-4">
              
              {/* Top Chat Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">StudyHive AI Tutor</h4>
                    <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Online • Response time ~0.3s
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] bg-slate-900 text-slate-400 border border-slate-800">
                  GPT-4o Learning Model
                </span>
              </div>

              {/* Chat Log Window */}
              <div className="space-y-4 min-h-[360px] flex flex-col justify-start">
                
                {/* Student Query Bubble */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-300 shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="p-3.5 rounded-2xl rounded-tl-none bg-indigo-950/60 border border-indigo-500/30 text-xs text-indigo-100 max-w-lg">
                    <p className="font-semibold text-indigo-300 text-[11px] mb-1">Student</p>
                    Explain Binary Search and generate a quick quiz.
                  </div>
                </motion.div>

                {/* AI Explanation Typing Bubble */}
                {activeStep >= 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300 shrink-0 mt-1">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="p-4 rounded-2xl rounded-tr-none bg-slate-900 border border-slate-800 text-xs text-slate-200 max-w-lg space-y-2">
                      <p className="font-semibold text-purple-300 text-[11px]">AI Tutor Assistant</p>
                      <p className="leading-relaxed font-sans">{typedText}</p>
                    </div>
                  </motion.div>
                )}

                {/* AI Generated Quiz Box */}
                {activeStep >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="ml-11 p-4 rounded-2xl bg-slate-950 border border-cyan-500/30 space-y-3"
                  >
                    <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs">
                      <HelpCircle className="w-4 h-4" />
                      <span>Auto-Generated Diagnostic Quiz:</span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium">
                      What is the time complexity of Binary Search in a sorted array of size N?
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <button className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:border-slate-600 text-left">
                        A) O(N)
                      </button>
                      <button className="p-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-left font-bold">
                        B) O(log N) ✓
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* AI Flashcard Deck Generation Summary */}
                {activeStep >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="ml-11 p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-between text-xs text-purple-300"
                  >
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-purple-400" />
                      <span>Saved 3 new flashcards to your "Algorithms" deck.</span>
                    </div>
                    <span className="font-mono text-[10px] text-purple-400">View Deck →</span>
                  </motion.div>
                )}

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
