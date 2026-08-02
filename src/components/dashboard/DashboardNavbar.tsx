"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Search,
  Bell,
  Settings,
  LogOut,
  User as UserIcon,
  Menu,
  Command,
} from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";

interface DashboardNavbarProps {
  onOpenModuleModal?: (title: string, desc?: string) => void;
  onToggleMobileSidebar?: () => void;
}

export function DashboardNavbar({
  onOpenModuleModal,
  onToggleMobileSidebar,
}: DashboardNavbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [unreadCount, setUnreadCount] = useState(3);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (e) {
      console.error("Failed to parse user state", e);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    setUser(null);
    router.replace("/");
  };

  const notificationsList = [
    { id: 1, title: "New Peer Join", desc: "Alex Rivera joined your Quantum Physics room.", time: "5m ago", read: false },
    { id: 2, title: "AI Tutor Note Ready", desc: "Generated summary for Backpropagation in Neural Networks.", time: "25m ago", read: false },
    { id: 3, title: "Streak Milestone", desc: "You unlocked the '7-Day Streak' achievement badge! 🔥", time: "2h ago", read: false },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-indigo-950/20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* LEFT: Logo & Search */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Mobile Sidebar Toggle Button */}
            <button
              onClick={onToggleMobileSidebar}
              className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link href="/dashboard" className="flex items-center gap-2 group shrink-0">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 p-0.5 shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all duration-300">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center group-hover:bg-slate-950/60 transition-colors">
                  <Sparkles className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-1">
                Study<GradientText variant="primary">Hive</GradientText>
              </span>
            </Link>

            {/* Glass Search Bar */}
            <div className="relative hidden sm:flex items-center w-48 md:w-64 lg:w-72">
              <Search className="absolute left-3 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search rooms, notes, peers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-12 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all"
              />
              <div className="absolute right-2 flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 font-mono border border-slate-700 pointer-events-none">
                <Command className="w-2.5 h-2.5" /> K
              </div>
            </div>
          </div>

          {/* RIGHT: User Controls */}
          <div className="flex items-center gap-3">
            
            {/* Notification Bell Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
              >
                <Bell className="w-4.5 h-4.5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white shadow-lg animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </button>

              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-80 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-4 z-50"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                      <h4 className="text-xs font-bold text-white flex items-center gap-2">
                        Notifications
                        <span className="px-1.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px]">
                          {unreadCount} New
                        </span>
                      </h4>
                      <button
                        onClick={() => setUnreadCount(0)}
                        className="text-[10px] text-indigo-400 hover:underline"
                      >
                        Mark all as read
                      </button>
                    </div>

                    <div className="space-y-2">
                      {notificationsList.map((n) => (
                        <div
                          key={n.id}
                          className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-indigo-500/30 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-white">{n.title}</span>
                            <span className="text-[10px] text-slate-500">{n.time}</span>
                          </div>
                          <p className="text-[11px] text-slate-400 mt-1 leading-snug">{n.desc}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Settings Trigger */}
            <button
              onClick={() =>
                onOpenModuleModal &&
                onOpenModuleModal("Account Settings", "Configure security preferences, profile customization, and notification triggers.")
              }
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all hidden sm:block"
            >
              <Settings className="w-4.5 h-4.5" />
            </button>

            {/* User Profile Card Badge */}
            {user && (
              <div className="flex items-center gap-2.5 bg-slate-900/90 border border-slate-800 rounded-full p-1 pl-3">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    {user.profileImage ? (
                      <img
                        src={user.profileImage}
                        alt={user.name || "User"}
                        className="w-7 h-7 rounded-full object-cover border border-indigo-500/40"
                      />
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
                        <UserIcon className="w-4 h-4" />
                      </div>
                    )}
                    <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-slate-950" />
                  </div>
                  <span className="text-xs font-bold text-white max-w-[100px] truncate hidden md:block">
                    {user.name || "Scholar"}
                  </span>
                </div>

                <button
                  onClick={handleLogout}
                  title="Log Out"
                  className="p-1.5 rounded-full bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

          </div>

        </div>
      </div>
    </header>
  );
}
