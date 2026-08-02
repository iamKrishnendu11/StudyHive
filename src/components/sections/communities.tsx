"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code,
  Globe,
  BrainCircuit,
  BookOpen,
  Award,
  Stethoscope,
  Atom,
  Users,
  Video,
  Calendar,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { GradientText } from "@/components/ui/gradient-text";

export function Communities() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Engineering", "Medical", "Competitive", "Tech"];

  const communities = [
    {
      id: "dsa",
      title: "Data Structures & Algorithms",
      category: "Tech",
      description: "LeetCode daily challenges, pattern recognition, mock technical interviews, and system design.",
      icon: Code,
      members: "14,200+",
      activeRooms: "18 Rooms Live",
      weeklyEvent: "Mock Interviews every Saturday 7 PM",
      color: "from-indigo-500/20 to-purple-600/20",
      badge: "Popular",
    },
    {
      id: "webdev",
      title: "Web Development & Frontend",
      category: "Tech",
      description: "Full-stack projects, React/Next.js pair programming, design feedback, and open-source sprints.",
      icon: Globe,
      members: "11,800+",
      activeRooms: "12 Rooms Live",
      weeklyEvent: "UI Hackathon every Sunday",
      color: "from-cyan-500/20 to-blue-600/20",
      badge: "Active",
    },
    {
      id: "aiml",
      title: "AI, Machine Learning & Data",
      category: "Tech",
      description: "PyTorch paper walkthroughs, Kaggle competitions, math foundations, and LLM fine-tuning study groups.",
      icon: BrainCircuit,
      members: "9,400+",
      activeRooms: "10 Rooms Live",
      weeklyEvent: "Paper Reading Group (Thursdays)",
      color: "from-purple-500/20 to-pink-600/20",
      badge: "Trending",
    },
    {
      id: "gate",
      title: "GATE Examination Prep",
      category: "Engineering",
      description: "CS, EC, ME problem solving, past year question marathons, and doubt clearing sessions.",
      icon: BookOpen,
      members: "8,600+",
      activeRooms: "8 Rooms Live",
      weeklyEvent: "Weekly Full Syllabus Test",
      color: "from-amber-500/20 to-orange-600/20",
      badge: "Exam Focused",
    },
    {
      id: "upsc",
      title: "UPSC Civil Services Guild",
      category: "Competitive",
      description: "Answer writing practice, current affairs breakdown, optional subject discussion circles.",
      icon: Award,
      members: "7,300+",
      activeRooms: "6 Rooms Live",
      weeklyEvent: "Mains Answer Evaluation",
      color: "from-emerald-500/20 to-teal-600/20",
      badge: "Mentored",
    },
    {
      id: "neet",
      title: "NEET Medical Aspirants",
      category: "Medical",
      description: "NCERT Biology line-by-line breakdown, Chemistry numericals, and Physics problem marathons.",
      icon: Stethoscope,
      members: "16,500+",
      activeRooms: "22 Rooms Live",
      weeklyEvent: "Biology Speed Diagnostic Quiz",
      color: "from-rose-500/20 to-red-600/20",
      badge: "High Activity",
    },
    {
      id: "jee",
      title: "JEE Advanced Physics & Math",
      category: "Engineering",
      description: "Irodov physics problem circles, calculus problem sets, and JEE Main & Advanced mock reviews.",
      icon: Atom,
      members: "18,900+",
      activeRooms: "24 Rooms Live",
      weeklyEvent: "Advanced Problem Set Challenge",
      color: "from-blue-500/20 to-indigo-600/20",
      badge: "Top Ranked",
    },
  ];

  const filtered = selectedCategory === "All"
    ? communities
    : communities.filter((c) => c.category === selectedCategory);

  return (
    <section id="communities" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Vibrant Peer Learning Networks
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Find Your <GradientText variant="purple-cyan">Study Community</GradientText>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            Join active study hubs tailored to your specific field, university exams, or competitive goals.
          </motion.p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                    : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Communities Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <SpotlightCard tilt={true} className="h-full p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-800 text-indigo-300 border border-slate-700">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover Revealed Stats */}
                  <div className="pt-6 mt-6 border-t border-slate-800 space-y-2.5 text-xs text-slate-300">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <Users className="w-3.5 h-3.5 text-indigo-400" /> Active Members
                      </span>
                      <span className="font-bold text-white font-mono">{item.members}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <Video className="w-3.5 h-3.5 text-emerald-400" /> Live Rooms
                      </span>
                      <span className="font-bold text-emerald-400 font-mono">{item.activeRooms}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] text-purple-300 pt-1">
                      <Calendar className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span className="truncate">{item.weeklyEvent}</span>
                    </div>
                  </div>

                  <Link href="/signup" className="pt-4 flex items-center justify-between text-xs font-bold text-indigo-400 group-hover:text-indigo-300">
                    <span>Join Community</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
