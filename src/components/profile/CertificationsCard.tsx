"use client";

import React from "react";
import { Award, CheckCircle2 } from "lucide-react";
import { StudentProfile } from "@/types/profile";

interface CertificationsCardProps {
  profile: StudentProfile;
}

export function CertificationsCard({ profile }: CertificationsCardProps) {
  return (
    <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 backdrop-blur-xl space-y-4 shadow-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-400" />
          Verified Certifications
        </h3>
        <span className="text-xs text-slate-500 font-mono">
          {profile.certifications.length} Verified
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {profile.certifications.map((cert) => (
          <div
            key={cert.id}
            className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-amber-500/40 transition-colors flex items-center gap-3"
          >
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>

            <div className="space-y-0.5 min-w-0">
              <div className="text-xs font-bold text-white truncate flex items-center gap-1">
                <span>{cert.name}</span>
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
              </div>
              <div className="text-[11px] text-slate-400">{cert.issuer}</div>
              <div className="text-[10px] text-slate-500 font-mono">Issued: {cert.issuedDate}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
