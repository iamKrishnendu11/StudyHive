"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  MapPin,
  GraduationCap,
  Building,
  BookOpen,
  Calendar,
  Edit3,
  Share2,
  Check,
  Sparkles
} from "lucide-react";
import { StudentProfile } from "@/types/profile";
import { GlowButton } from "@/components/ui/glow-button";

interface ProfileHeroProps {
  profile: StudentProfile;
  onEditClick: () => void;
}

export function ProfileHero({ profile, onEditClick }: ProfileHeroProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-2xl">
      {/* 1. Animated Cover Banner */}
      <div className="relative h-48 sm:h-64 w-full bg-gradient-to-r from-indigo-900 via-purple-950 to-slate-900 overflow-hidden">
        {/* Animated Particles & Ambient Lighting */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e515_1px,transparent_1px),linear-gradient(to_bottom,#4f46e515_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />

        {/* Cover Tagline Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/60 border border-slate-800 text-xs font-semibold text-slate-300 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Active Scholar</span>
        </div>
      </div>

      {/* 2. Main Hero Content Container */}
      <div className="relative px-6 pb-6 pt-0 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between -mt-16 sm:-mt-20 gap-4 mb-6">
          
          {/* Avatar & Basic Identity */}
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 text-center sm:text-left">
            <div className="relative">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl object-cover border-4 border-slate-950 shadow-2xl ring-4 ring-indigo-500/30"
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-400 ring-4 ring-slate-950" />
            </div>

            <div className="space-y-1 mb-1">
              <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {profile.name}
                </h1>
                {profile.isVerified && (
                  <span title="Verified Peer Student">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                  </span>
                )}
                <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-mono font-bold border border-indigo-500/30">
                  {profile.role}
                </span>
              </div>
              
              <div className="text-sm font-medium text-slate-400 font-mono">
                {profile.username}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center justify-center sm:justify-end gap-3 w-full sm:w-auto">
            <GlowButton
              variant="primary"
              size="sm"
              icon={<Edit3 className="w-4 h-4" />}
              onClick={onEditClick}
            >
              Edit Profile
            </GlowButton>

            <GlowButton
              variant="secondary"
              size="sm"
              icon={copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              onClick={handleShare}
            >
              {copied ? "Link Copied!" : "Share Profile"}
            </GlowButton>
          </div>
        </div>

        {/* 3. Academic Details Chips Row */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-4 border-t border-slate-800/80 text-xs text-slate-300">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <GraduationCap className="w-4 h-4 text-indigo-400" />
            <span className="font-semibold text-white">{profile.degree}</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <Building className="w-4 h-4 text-purple-400" />
            <span>{profile.college}</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>{profile.university}</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>{profile.currentSemester}</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <MapPin className="w-4 h-4 text-rose-400" />
            <span>{profile.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
