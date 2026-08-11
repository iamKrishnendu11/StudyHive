"use client";

import React from "react";
import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Star } from "lucide-react";
import { StudentProfile } from "@/types/profile";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

interface ProjectsSectionProps {
  profile: StudentProfile;
}

export function ProjectsSection({ profile }: ProjectsSectionProps) {
  return (
    <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 backdrop-blur-xl space-y-4 shadow-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <FolderGit2 className="w-5 h-5 text-indigo-400" />
          Featured Projects Showcase
        </h3>
        <span className="text-xs text-slate-500 font-mono">
          {profile.projects.length} Projects
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {profile.projects.map((proj) => (
          <motion.div
            key={proj.id}
            whileHover={{ y: -3 }}
            className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between space-y-4 shadow-lg group"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {proj.title}
                </h4>
                {proj.stars && (
                  <span className="text-xs font-mono font-bold text-amber-400 flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400" /> {proj.stars}
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                {proj.description}
              </p>
            </div>

            <div className="space-y-3 pt-2 border-t border-slate-800/80">
              <div className="flex flex-wrap gap-1.5">
                {proj.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-900 text-indigo-300 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 text-xs">
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Repository</span>
                  </a>
                )}

                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
