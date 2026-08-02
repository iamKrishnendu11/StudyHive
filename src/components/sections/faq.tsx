"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, HelpCircle } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";

export function FAQ() {
  const faqs = [
    {
      question: "How does StudyHive match me with study partners?",
      answer:
        "StudyHive uses an AI matching engine that evaluates your target courses, learning goals, timezone, preferred study pace, and schedule to connect you with highly compatible peers.",
    },
    {
      question: "Is StudyHive suitable for high school or university students?",
      answer:
        "Yes! StudyHive caters to students across high school (SAT/AP), undergraduate computer science, pre-med, engineering, as well as competitive post-grad exams like GATE, UPSC, NEET, and JEE.",
    },
    {
      question: "How accurate is the AI Tutor?",
      answer:
        "Our AI Tutor is fine-tuned on verified academic textbooks, lecture notes, and peer-reviewed papers. It provides step-by-step Socratic breakdowns and includes source references when generating answers.",
    },
    {
      question: "Can I use StudyHive for free?",
      answer:
        "Absolutely. The Starter Free plan gives you access to live study rooms, community channels, shared notes, and 50 AI Tutor queries every month.",
    },
    {
      question: "Can I host a private study room for my club or university group?",
      answer:
        "Yes, with Pro Scholar or Campus plans, you can launch password-protected or invite-only study rooms with custom whiteboards and audio channels.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Got Questions? <GradientText variant="primary">We've Got Answers</GradientText>
          </motion.h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="rounded-2xl glass-card border border-slate-800 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-white text-base hover:text-indigo-300 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-indigo-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
