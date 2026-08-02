"use client";

import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Video, MessageSquare, ThumbsUp } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";

export function Stats() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const metrics = [
    {
      id: "students",
      value: 250,
      suffix: "K+",
      label: "Active Students",
      description: "Learning together globally",
      icon: Users,
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: "rooms",
      value: 12,
      suffix: "K+",
      label: "Study Rooms Created",
      description: "24/7 active voice & video hubs",
      icon: Video,
      color: "from-purple-500 to-cyan-500",
    },
    {
      id: "messages",
      value: 4,
      suffix: "M+",
      label: "Collaborative Messages",
      description: "Doubts solved & notes shared",
      icon: MessageSquare,
      color: "from-cyan-500 to-emerald-400",
    },
    {
      id: "satisfaction",
      value: 98,
      suffix: "%",
      label: "Satisfaction Rate",
      description: "Measured by exam score increases",
      icon: ThumbsUp,
      color: "from-emerald-400 to-amber-400",
    },
  ];

  return (
    <section ref={ref} className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => {
            const IconComp = metric.icon;
            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl glass-card border border-slate-800 text-center space-y-3 relative overflow-hidden group hover:border-indigo-500/40 transition-all duration-300"
              >
                <div className="mx-auto w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <IconComp className="w-6 h-6" />
                </div>

                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
                  {isInView ? (
                    <Counter target={metric.value} suffix={metric.suffix} />
                  ) : (
                    <span>0{metric.suffix}</span>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-200">
                    {metric.label}
                  </h3>
                  <p className="text-xs text-slate-400">{metric.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Simple Count-up animation component
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <GradientText variant="primary">
      {count}
      {suffix}
    </GradientText>
  );
}
