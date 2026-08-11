"use client";

import React from "react";
import { Shield, Eye, Lock, Users, Globe } from "lucide-react";
import { StudentProfile } from "@/types/profile";

interface PrivacySettingsCardProps {
  profile: StudentProfile;
  onUpdatePrivacy?: (newPrivacy: StudentProfile["privacy"]) => void;
}

export function PrivacySettingsCard({ profile, onUpdatePrivacy }: PrivacySettingsCardProps) {
  const { privacy } = profile;

  const handleSelect = (key: keyof StudentProfile["privacy"], val: "Public" | "Friends" | "Private") => {
    if (onUpdatePrivacy) {
      onUpdatePrivacy({
        ...privacy,
        [key]: val,
      });
    }
  };

  const sections: Array<{ key: keyof StudentProfile["privacy"]; title: string; desc: string }> = [
    { key: "profileVisibility", title: "Profile Visibility", desc: "Controls who can search and view your main profile card." },
    { key: "showEducation", title: "Education & Institution", desc: "Controls visibility for college, CGPA, and registration details." },
    { key: "showScores", title: "Study Partner & Analytics", desc: "Controls visibility for ratings, consistency, and focus hours." },
    { key: "showActivity", title: "Live Activity Timeline", desc: "Controls visibility for study rooms joined and recent accomplishments." },
  ];

  return (
    <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 backdrop-blur-xl space-y-5 shadow-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Shield className="w-5 h-5 text-indigo-400" />
          Privacy & Visibility Settings
        </h3>
        <span className="text-xs text-slate-500 font-mono">UI Preference</span>
      </div>

      <div className="space-y-4">
        {sections.map((sec) => {
          const currentVal = privacy[sec.key];
          return (
            <div
              key={sec.key}
              className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="space-y-0.5">
                <div className="text-xs font-bold text-white">{sec.title}</div>
                <div className="text-[11px] text-slate-400 leading-snug">{sec.desc}</div>
              </div>

              {/* Selector Buttons */}
              <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-900 border border-slate-800 shrink-0 self-start sm:self-auto">
                {(["Public", "Friends", "Private"] as const).map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelect(sec.key, opt)}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                      currentVal === opt
                        ? "bg-indigo-600 text-white shadow-md"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {opt === "Public" && <Globe className="w-3 h-3" />}
                    {opt === "Friends" && <Users className="w-3 h-3" />}
                    {opt === "Private" && <Lock className="w-3 h-3" />}
                    <span>{opt}</span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
