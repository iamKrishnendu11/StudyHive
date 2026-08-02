"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Check, Sparkles, Zap, Shield, ArrowRight } from "lucide-react";
import { GlowButton } from "@/components/ui/glow-button";
import { GradientText } from "@/components/ui/gradient-text";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  const handleToggle = (yearly: boolean) => {
    setIsYearly(yearly);
    if (yearly) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
      });
    }
  };

  const plans = [
    {
      name: "Starter Free",
      description: "Ideal for individual students starting their peer learning journey.",
      priceMonthly: "$0",
      priceYearly: "$0",
      features: [
        "Join up to 3 Live Study Rooms",
        "Basic Peer Partner Matching",
        "50 AI Tutor Queries / month",
        "Shared Markdown Notes",
        "Community Access",
      ],
      cta: "Get Started Free",
      variant: "outline" as const,
      popular: false,
    },
    {
      name: "Pro Scholar",
      description: "For dedicated students aiming for top exam scores and deep mastery.",
      priceMonthly: "$12",
      priceYearly: "$9",
      features: [
        "Unlimited Live Voice & Video Rooms",
        "Priority AI Matching (Top 1% peers)",
        "Unlimited AI Tutor Assistance",
        "AI PDF & Lecture Summarizer",
        "Interactive Coding REPL & Whiteboards",
        "Deep Study Analytics & Heatmaps",
        "Priority Doubt Resolution (< 2 mins)",
      ],
      cta: "Start 14-Day Free Trial",
      variant: "primary" as const,
      popular: true,
    },
    {
      name: "Campus & Teams",
      description: "Designed for student clubs, university chapters, and study groups.",
      priceMonthly: "$29",
      priceYearly: "$24",
      features: [
        "Everything in Pro Scholar",
        "Dedicated Private Club Server",
        "Custom Leaderboards & Admin Tools",
        "Branded Room Links",
        "Bulk Member Discounts",
        "24/7 Dedicated Support",
      ],
      cta: "Contact Team Sales",
      variant: "cyan" as const,
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Transparent & Affordable Pricing
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Invest in Your <GradientText variant="purple-cyan">Academic Growth</GradientText>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            Choose the plan that matches your study routine. Cancel anytime.
          </motion.p>

          {/* Billing Cycle Toggle */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <span className={`text-xs font-bold ${!isYearly ? "text-white" : "text-slate-400"}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => handleToggle(!isYearly)}
              className="relative w-14 h-8 rounded-full bg-slate-800 border border-slate-700 p-1 transition-colors"
            >
              <motion.div
                animate={{ x: isYearly ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md"
              />
            </button>
            <span className={`text-xs font-bold flex items-center gap-1.5 ${isYearly ? "text-white" : "text-slate-400"}`}>
              Annual Billing
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Save 25%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-3xl flex flex-col justify-between p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-slate-900/90 border-2 border-indigo-500/80 shadow-2xl shadow-indigo-500/20 lg:-translate-y-4"
                  : "bg-slate-950/60 border border-slate-800 hover:border-slate-700"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  MOST POPULAR
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white font-mono">
                    {isYearly ? plan.priceYearly : plan.priceMonthly}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">/ month</span>
                  {isYearly && plan.priceYearly !== "$0" && (
                    <span className="text-[10px] text-emerald-400 font-mono ml-2">
                      (Billed annually)
                    </span>
                  )}
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-800">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-xs text-slate-200">
                      <div className="p-0.5 rounded-full bg-indigo-500/20 text-indigo-400 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <Link href="/signup">
                  <GlowButton
                    variant={plan.variant}
                    className="w-full"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    {plan.cta}
                  </GlowButton>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
