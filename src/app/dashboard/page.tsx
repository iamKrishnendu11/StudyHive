"use client";

import React from "react";
import { DashboardHero } from "@/components/dashboard/DashboardHero";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { ContinueStudying } from "@/components/dashboard/ContinueStudying";
import { UpcomingSessions } from "@/components/dashboard/UpcomingSessions";
import { AITutorWidget } from "@/components/dashboard/AITutorWidget";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { RightSidebar } from "@/components/dashboard/RightSidebar";

interface DashboardPageProps {
  onOpenModuleModal?: (title: string, desc?: string) => void;
}

export default function DashboardPage({ onOpenModuleModal }: DashboardPageProps) {
  const handleOpenModal = (title: string, desc?: string) => {
    if (onOpenModuleModal) {
      onOpenModuleModal(title, desc);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12">
      {/* 1. Hero Greeting Banner */}
      <DashboardHero onOpenModuleModal={handleOpenModal} />

      {/* 2. Stats Metrics Grid */}
      <StatsCards />

      {/* 3. Main Dashboard Grid (Left Content + Right Auxiliary Sidebar) */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Main Content Area */}
        <div className="flex-1 w-full space-y-8 min-w-0">
          {/* Active Continue Studying Cards */}
          <ContinueStudying onOpenModuleModal={handleOpenModal} />

          {/* Featured AI Assistant Card */}
          <AITutorWidget onOpenModuleModal={handleOpenModal} />

          {/* Upcoming Sessions Timeline */}
          <UpcomingSessions onOpenModuleModal={handleOpenModal} />

          {/* Recent Activity Timeline */}
          <RecentActivity />
        </div>

        {/* Right Auxiliary Sidebar (Leaderboard, Friends, Goals, Calendar) */}
        <RightSidebar onOpenModuleModal={handleOpenModal} />
      </div>
    </div>
  );
}
