"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Dynamic Mouse Cursor Ambient Light */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[140px] opacity-15 transition-all duration-700 ease-out bg-indigo-500"
        style={{
          left: `${mousePosition.x - 250}px`,
          top: `${mousePosition.y - 250}px`,
        }}
      />

      {/* Aurora Ambient Blobs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[150px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 w-[650px] h-[650px] rounded-full bg-purple-700/15 blur-[160px] animate-float-slow" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-600/15 blur-[140px] animate-pulse-glow" />
      <div className="absolute -bottom-20 right-10 w-[550px] h-[550px] rounded-full bg-fuchsia-600/15 blur-[150px] animate-float" />

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#070b14_85%)]" />

      {/* Floating Micro Light Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-indigo-400/50 blur-[0.5px]"
          style={{
            left: `${(i * 8.3 + 5) % 95}%`,
            top: `${(i * 14.2 + 10) % 90}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + (i % 4),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}
    </div>
  );
}
