"use client";

import React, { useState } from "react";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { DashboardNavbar } from "@/components/dashboard/DashboardNavbar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { ModulePlaceholderModal } from "@/components/dashboard/ModulePlaceholderModal";
import { AnimatedBackground } from "@/components/layout/animated-bg";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    description?: string;
  }>({
    isOpen: false,
    title: "",
  });

  const handleOpenModuleModal = (title: string, description?: string) => {
    setModalState({
      isOpen: true,
      title,
      description,
    });
  };

  const handleCloseModuleModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <AuthGuard requireAuth={true}>
      <div className="relative min-h-screen bg-[#070B14] text-slate-100 selection:bg-indigo-500 selection:text-white overflow-x-hidden">
        {/* Animated Background */}
        <AnimatedBackground />

        {/* Top Navigation */}
        <DashboardNavbar
          onOpenModuleModal={handleOpenModuleModal}
          onToggleMobileSidebar={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />

        {/* Main Body */}
        <div className="relative z-10 flex min-h-[calc(100vh-4rem)]">
          {/* Left Desktop Sidebar */}
          <div className="hidden lg:block">
            <DashboardSidebar
              isCollapsed={isSidebarCollapsed}
              onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              onOpenModuleModal={handleOpenModuleModal}
            />
          </div>

          {/* Mobile Overlay Sidebar */}
          {mobileSidebarOpen && (
            <div className="fixed inset-0 z-50 lg:hidden flex">
              <div
                className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
                onClick={() => setMobileSidebarOpen(false)}
              />
              <div className="relative z-50 w-64 h-full bg-slate-950 border-r border-slate-800">
                <DashboardSidebar
                  isCollapsed={false}
                  onToggleCollapse={() => setMobileSidebarOpen(false)}
                  onOpenModuleModal={(t, d) => {
                    setMobileSidebarOpen(false);
                    handleOpenModuleModal(t, d);
                  }}
                />
              </div>
            </div>
          )}

          {/* Main Scrollable Viewport */}
          <main
            className={`flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto transition-all duration-300 ${
              isSidebarCollapsed ? "lg:pl-20" : "lg:pl-64"
            }`}
          >
            {React.isValidElement(children)
              ? React.cloneElement(children as React.ReactElement<any>, {
                  onOpenModuleModal: handleOpenModuleModal,
                })
              : children}
          </main>
        </div>

        {/* Global Module Modal */}
        <ModulePlaceholderModal
          isOpen={modalState.isOpen}
          onClose={handleCloseModuleModal}
          title={modalState.title}
          description={modalState.description}
        />
      </div>
    </AuthGuard>
  );
}
