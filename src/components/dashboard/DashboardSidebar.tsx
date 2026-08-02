"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Bot,
  Users,
  Calendar,
  FileText,
  Target,
  Trophy,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Flame
} from "lucide-react";

interface DashboardSidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onOpenModuleModal: (title: string, desc?: string) => void;
}

export function DashboardSidebar({
  isCollapsed,
  onToggleCollapse,
  onOpenModuleModal,
}: DashboardSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    router.replace("/");
  };

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: "My Study Rooms", href: "/study-rooms", icon: <BookOpen className="w-5 h-5" />, modal: "My Study Rooms" },
    { name: "AI Tutor", href: "/ai-tutor", icon: <Bot className="w-5 h-5" />, modal: "AI Peer Assistant 2.0" },
    { name: "Communities", href: "/communities", icon: <Users className="w-5 h-5" />, modal: "Study Communities" },
    { name: "Schedule", href: "/schedule", icon: <Calendar className="w-5 h-5" />, modal: "Smart Study Calendar" },
    { name: "Notes", href: "/notes", icon: <FileText className="w-5 h-5" />, modal: "AI Synthesized Notes" },
    { name: "Goals", href: "/goals", icon: <Target className="w-5 h-5" />, modal: "Learning Goals & Achievements" },
    { name: "Leaderboard", href: "/leaderboard", icon: <Trophy className="w-5 h-5" />, modal: "Global Peer Leaderboard" },
  ];

  return (
    <aside
      className={`fixed top-16 left-0 bottom-0 bg-slate-950/90 border-r border-slate-800/80 backdrop-blur-xl transition-all duration-300 z-30 flex flex-col shrink-0 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Collapse/Expand Toggle Pill Button */}
      <button
        onClick={onToggleCollapse}
        className="absolute -right-3.5 top-6 z-40 flex items-center justify-center w-7 h-7 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-indigo-500 shadow-md transition-all"
        title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
      >
        {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>

      {/* Top Banner Widget inside Sidebar when expanded */}
      {!isCollapsed && (
        <div className="p-4 m-3 mb-2 rounded-2xl bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-slate-900 border border-indigo-500/20 relative overflow-hidden shrink-0">
          <div className="flex items-center gap-2 mb-1">
            <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
            <span className="text-xs font-bold text-white">Daily Streak</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-snug">
            7 Days Active! Keep study sessions going today.
          </p>
          <div className="mt-2 w-full bg-slate-900 rounded-full h-1.5 overflow-hidden border border-slate-800">
            <div className="bg-gradient-to-r from-amber-400 to-indigo-500 h-full w-[85%]" />
          </div>
        </div>
      )}

      {/* Nav List */}
      <div className="flex-1 px-3 py-3 space-y-1.5 overflow-y-auto custom-scrollbar">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <button
              key={item.name}
              onClick={() => {
                if (item.modal) {
                  onOpenModuleModal(item.name, `Manage your ${item.name} and track your real-time academic progress.`);
                } else {
                  router.push(item.href);
                }
              }}
              className={`relative flex items-center gap-3.5 w-full px-3.5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 group ${
                isActive
                  ? "text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/25 border border-indigo-400/30"
                  : "text-slate-400 hover:text-white hover:bg-slate-900/80 border border-transparent"
              }`}
              title={isCollapsed ? item.name : undefined}
            >
              <div
                className={`transition-transform duration-200 ${
                  isActive ? "scale-110 text-white" : "group-hover:scale-110 text-slate-400 group-hover:text-indigo-400"
                }`}
              >
                {item.icon}
              </div>

              {!isCollapsed && <span className="truncate">{item.name}</span>}

              {/* Glowing Indicator for active tab */}
              {isActive && !isCollapsed && (
                <div className="ml-auto w-2 h-2 rounded-full bg-cyan-400 shadow-md shadow-cyan-400" />
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom Logout Button */}
      <div className="p-3 border-t border-slate-800/80 shrink-0">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3.5 w-full px-3.5 py-3 rounded-xl text-sm font-semibold text-rose-400 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 transition-all duration-200 group"
          title={isCollapsed ? "Log Out" : undefined}
        >
          <LogOut className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
          {!isCollapsed && <span>Log Out</span>}
        </button>
      </div>
    </aside>
  );
}
