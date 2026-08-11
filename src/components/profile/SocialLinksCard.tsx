"use client";

import React from "react";
import { Link2, Globe, FileText, Code2, Terminal } from "lucide-react";
import { StudentProfile } from "@/types/profile";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

interface SocialLinksCardProps {
  profile: StudentProfile;
}

export function SocialLinksCard({ profile }: SocialLinksCardProps) {
  const { socials } = profile;

  const links = [
    { label: "GitHub", url: socials.github, icon: <GithubIcon className="w-4 h-4 text-white" /> },
    { label: "LinkedIn", url: socials.linkedin, icon: <LinkedinIcon className="w-4 h-4 text-blue-400" /> },
    { label: "Portfolio Website", url: socials.portfolio, icon: <Globe className="w-4 h-4 text-cyan-400" /> },
    { label: "CV / Resume", url: socials.resume, icon: <FileText className="w-4 h-4 text-rose-400" /> },
    { label: "LeetCode", url: socials.leetcode, icon: <Code2 className="w-4 h-4 text-amber-400" /> },
    { label: "Codeforces", url: socials.codeforces, icon: <Terminal className="w-4 h-4 text-red-400" /> },
    { label: "CodeChef", url: socials.codechef, icon: <Terminal className="w-4 h-4 text-amber-600" /> },
    { label: "HackerRank", url: socials.hackerrank, icon: <Code2 className="w-4 h-4 text-emerald-400" /> },
  ].filter((l) => Boolean(l.url));

  return (
    <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 backdrop-blur-xl space-y-4 shadow-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Link2 className="w-5 h-5 text-indigo-400" />
          Social & Coding Profiles
        </h3>
        <span className="text-xs text-slate-500 font-mono">
          {links.length} Connected
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-indigo-500/40 transition-all flex items-center gap-2.5 group"
          >
            <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
              {link.icon}
            </div>
            <span className="text-xs font-bold text-slate-300 group-hover:text-white truncate">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
