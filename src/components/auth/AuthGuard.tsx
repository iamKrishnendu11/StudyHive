"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

interface AuthGuardProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireGuest?: boolean;
}

export function AuthGuard({
  children,
  requireAuth = false,
  requireGuest = false,
}: AuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const userStr = localStorage.getItem("user");
    const hasAuth = Boolean(token || userStr);

    setIsAuthenticated(hasAuth);

    if (requireAuth && !hasAuth) {
      router.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
    } else if (requireGuest && hasAuth) {
      router.replace("/dashboard");
    } else {
      setIsChecking(false);
    }
  }, [pathname, requireAuth, requireGuest, router]);

  if (isChecking && (requireAuth || requireGuest)) {
    return (
      <div className="min-h-screen bg-[#070B14] flex flex-col items-center justify-center text-slate-100">
        <div className="relative flex items-center justify-center">
          <div className="w-14 h-14 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 animate-spin" />
          <div className="absolute w-8 h-8 rounded-full border-2 border-purple-500/20 border-b-purple-500 animate-spin-reverse" />
        </div>
        <p className="mt-4 text-xs tracking-wider uppercase text-indigo-400/80 font-mono animate-pulse">
          Verifying StudyHive Session...
        </p>
      </div>
    );
  }

  return <>{children}</>;
}
