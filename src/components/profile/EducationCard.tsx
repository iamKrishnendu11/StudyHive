"use client";

import React from "react";
import { GraduationCap, Building, Award, Calendar, Hash, Globe, Lock, Shield } from "lucide-react";
import { StudentProfile } from "@/types/profile";

interface EducationCardProps {
  profile: StudentProfile;
}

export function EducationCard({ profile }: EducationCardProps) {
  const fields = [
    { label: "College / Institute", value: profile.college, icon: <Building className="w-4 h-4 text-indigo-400" /> },
    { label: "University", value: profile.university, icon: <GraduationCap className="w-4 h-4 text-purple-400" /> },
    { label: "Degree & Program", value: profile.degree, icon: <Award className="w-4 h-4 text-cyan-400" /> },
    { label: "Department / Branch", value: profile.department, icon: <GraduationCap className="w-4 h-4 text-emerald-400" /> },
    { label: "Current Progress", value: `${profile.currentYear} • ${profile.currentSemester}`, icon: <Calendar className="w-4 h-4 text-amber-400" /> },
    { label: "Graduation Target", value: profile.expectedGraduation, icon: <Calendar className="w-4 h-4 text-rose-400" /> },
    { label: "CGPA Score", value: profile.cgpa || "N/A", icon: <Award className="w-4 h-4 text-amber-400" /> },
    { label: "Roll / Registration No.", value: profile.rollNumber || "Private", icon: <Hash className="w-4 h-4 text-slate-400" /> },
  ];

  return (
    <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 backdrop-blur-xl space-y-5 shadow-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-purple-400" />
          Education & Credentials
        </h3>
        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1">
          <Shield className="w-3 h-3 text-indigo-400" />
          {profile.privacy.showEducation}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fields.map((f, i) => (
          <div
            key={i}
            className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-1"
          >
            <div className="flex items-center gap-2 text-xs text-slate-400">
              {f.icon}
              <span>{f.label}</span>
            </div>
            <div className="text-sm font-bold text-white truncate pl-6">{f.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
