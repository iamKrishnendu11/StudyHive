"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

// Types & Mock Data
import { StudentProfile } from "@/types/profile";
import { defaultProfileData } from "@/components/profile/mockData";

// Components
import { ProfileHero } from "@/components/profile/ProfileHero";
import { AboutCard } from "@/components/profile/AboutCard";
import { EducationCard } from "@/components/profile/EducationCard";
import { AcademicInterests } from "@/components/profile/AcademicInterests";
import { SkillsCard } from "@/components/profile/SkillsCard";
import { StudyPreferencesCard } from "@/components/profile/StudyPreferencesCard";
import { AvailabilityCalendar } from "@/components/profile/AvailabilityCalendar";
import { AnalyticsCard } from "@/components/profile/AnalyticsCard";
import { StudyPartnerScore } from "@/components/profile/StudyPartnerScore";
import { BadgesGrid } from "@/components/profile/BadgesGrid";
import { LearningRoadmap } from "@/components/profile/LearningRoadmap";
import { ProjectsSection } from "@/components/profile/ProjectsSection";
import { CertificationsCard } from "@/components/profile/CertificationsCard";
import { SocialLinksCard } from "@/components/profile/SocialLinksCard";
import { StudyRoomsCard } from "@/components/profile/StudyRoomsCard";
import { ActivityTimeline } from "@/components/profile/ActivityTimeline";
import { PrivacySettingsCard } from "@/components/profile/PrivacySettingsCard";
import { EditProfileDialog } from "@/components/profile/EditProfileDialog";

export default function ProfilePage() {
  const searchParams = useSearchParams();
  const [profile, setProfile] = useState<StudentProfile>(defaultProfileData);
  const [isEditOpen, setIsEditOpen] = useState(false);

  // Check URL query parameters for ?edit=true
  useEffect(() => {
    if (searchParams.get("edit") === "true") {
      setIsEditOpen(true);
    }
  }, [searchParams]);

  const handleSaveProfile = (updated: StudentProfile) => {
    setProfile(updated);
    try {
      localStorage.setItem("user_profile_data", JSON.stringify(updated));
    } catch (e) {
      console.error("Failed to save profile local state", e);
    }
  };

  const handleUpdatePrivacy = (newPrivacy: StudentProfile["privacy"]) => {
    setProfile((prev) => ({
      ...prev,
      privacy: newPrivacy,
    }));
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-16">
      {/* 1. Hero Cover Banner & Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <ProfileHero
          profile={profile}
          onEditClick={() => setIsEditOpen(true)}
        />
      </motion.div>

      {/* 2. Responsive Grid Container (2-Columns Desktop, 1-Column Mobile/Tablet) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN (Width: 5 cols on LG) */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-5 space-y-8"
        >
          {/* Unique Study Partner Score Component */}
          <StudyPartnerScore profile={profile} />

          {/* Education & Credentials */}
          <EducationCard profile={profile} />

          {/* Academic & Tech Interests Chips */}
          <AcademicInterests profile={profile} />

          {/* Technical Skills & Mastery Progress */}
          <SkillsCard profile={profile} />

          {/* Study Preferences for Peer Match */}
          <StudyPreferencesCard profile={profile} />

          {/* Weekly Availability Calendar */}
          <AvailabilityCalendar profile={profile} />

          {/* Privacy & Visibility Settings Card */}
          <PrivacySettingsCard
            profile={profile}
            onUpdatePrivacy={handleUpdatePrivacy}
          />
        </motion.div>

        {/* RIGHT COLUMN (Width: 7 cols on LG) */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="lg:col-span-7 space-y-8"
        >
          {/* About Me Glass Bio Card */}
          <AboutCard profile={profile} />

          {/* Learning Analytics & Metrics Grid */}
          <AnalyticsCard profile={profile} />

          {/* Badges & Achievements Grid */}
          <BadgesGrid profile={profile} />

          {/* Active Learning Roadmap Timeline */}
          <LearningRoadmap profile={profile} />

          {/* Featured Projects Showcase */}
          <ProjectsSection profile={profile} />

          {/* Verified Certifications */}
          <CertificationsCard profile={profile} />

          {/* Connected Study Rooms */}
          <StudyRoomsCard profile={profile} />

          {/* Real-Time Activity Timeline */}
          <ActivityTimeline profile={profile} />

          {/* Social & Coding Profiles Links */}
          <SocialLinksCard profile={profile} />
        </motion.div>

      </div>

      {/* Interactive Edit Profile Modal */}
      <EditProfileDialog
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        profile={profile}
        onSave={handleSaveProfile}
      />
    </div>
  );
}
