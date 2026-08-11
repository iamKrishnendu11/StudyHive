"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  GraduationCap,
  Sliders,
  Cpu,
  Link2,
  Save,
  Check,
  Plus,
  Trash2,
  Sparkles
} from "lucide-react";
import { StudentProfile } from "@/types/profile";

interface EditProfileDialogProps {
  isOpen: boolean;
  onClose: () => void;
  profile: StudentProfile;
  onSave: (updatedProfile: StudentProfile) => void;
}

export function EditProfileDialog({
  isOpen,
  onClose,
  profile,
  onSave,
}: EditProfileDialogProps) {
  const [formData, setFormData] = useState<StudentProfile>(profile);
  const [activeTab, setActiveTab] = useState<"general" | "education" | "preferences" | "skills" | "socials">("general");
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Sync state when dialog opens
  React.useEffect(() => {
    if (isOpen) {
      setFormData(profile);
      setSavedSuccess(false);
    }
  }, [isOpen, profile]);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 800);
  };

  const updateNestedField = (path: string[], value: any) => {
    setFormData((prev: any) => {
      const next = { ...prev };
      let curr = next;
      for (let i = 0; i < path.length - 1; i++) {
        curr[path[i]] = { ...curr[path[i]] };
        curr = curr[path[i]];
      }
      curr[path[path.length - 1]] = value;
      return next;
    });
  };

  const handleAddSkill = () => {
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, { name: "New Skill", level: 75, category: "Core" }],
    }));
  };

  const handleRemoveSkill = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        {/* Backdrop Click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0"
          onClick={onClose}
        />

        {/* Dialog Body */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-white">Edit Student Profile</h2>
                <p className="text-xs text-slate-400">Update your academic identity & study match parameters</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 px-6 pt-3 border-b border-slate-800 overflow-x-auto custom-scrollbar shrink-0 bg-slate-950/30">
            {[
              { id: "general", label: "General", icon: <User className="w-4 h-4" /> },
              { id: "education", label: "Education", icon: <GraduationCap className="w-4 h-4" /> },
              { id: "preferences", label: "Preferences", icon: <Sliders className="w-4 h-4" /> },
              { id: "skills", label: "Skills", icon: <Cpu className="w-4 h-4" /> },
              { id: "socials", label: "Social Links", icon: <Link2 className="w-4 h-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all border-b-2 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-indigo-400 border-indigo-500 bg-indigo-500/10"
                    : "text-slate-400 border-transparent hover:text-white"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Form Content */}
          <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
            {activeTab === "general" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">Username</label>
                    <input
                      type="text"
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">Role / Headline</label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">Location</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">Tagline Highlight</label>
                  <input
                    type="text"
                    value={formData.tagline}
                    onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">About Me Bio</label>
                  <textarea
                    rows={3}
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500 leading-relaxed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">Avatar Image URL</label>
                  <input
                    type="text"
                    value={formData.avatar}
                    onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
            )}

            {activeTab === "education" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">College / Institute</label>
                    <input
                      type="text"
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">University</label>
                    <input
                      type="text"
                      value={formData.university}
                      onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">Degree & Program</label>
                    <input
                      type="text"
                      value={formData.degree}
                      onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">Department / Branch</label>
                    <input
                      type="text"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">Current Year</label>
                    <input
                      type="text"
                      value={formData.currentYear}
                      onChange={(e) => setFormData({ ...formData, currentYear: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">Current Semester</label>
                    <input
                      type="text"
                      value={formData.currentSemester}
                      onChange={(e) => setFormData({ ...formData, currentSemester: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">Graduation Target</label>
                    <input
                      type="text"
                      value={formData.expectedGraduation}
                      onChange={(e) => setFormData({ ...formData, expectedGraduation: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">CGPA Score (Optional)</label>
                    <input
                      type="text"
                      value={formData.cgpa || ""}
                      onChange={(e) => setFormData({ ...formData, cgpa: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">Roll / Reg Number (Optional)</label>
                    <input
                      type="text"
                      value={formData.rollNumber || ""}
                      onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "preferences" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">Preferred Subjects (Comma separated)</label>
                  <input
                    type="text"
                    value={formData.preferences.subjects.join(", ")}
                    onChange={(e) =>
                      updateNestedField(
                        ["preferences", "subjects"],
                        e.target.value.split(",").map((s) => s.trim()).filter(Boolean)
                      )
                    }
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">Spoken Languages (Comma separated)</label>
                  <input
                    type="text"
                    value={formData.preferences.languages.join(", ")}
                    onChange={(e) =>
                      updateNestedField(
                        ["preferences", "languages"],
                        e.target.value.split(",").map((s) => s.trim()).filter(Boolean)
                      )
                    }
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">Availability Window</label>
                    <input
                      type="text"
                      value={formData.preferences.availabilityTimes}
                      onChange={(e) => updateNestedField(["preferences", "availabilityTimes"], e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">Timezone</label>
                    <input
                      type="text"
                      value={formData.preferences.timezone}
                      onChange={(e) => updateNestedField(["preferences", "timezone"], e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "skills" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-300">Technical Skills & Progress %</h4>
                  <button
                    type="button"
                    onClick={handleAddSkill}
                    className="flex items-center gap-1 px-3 py-1 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 text-xs font-bold hover:bg-indigo-600/30 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Skill
                  </button>
                </div>

                <div className="space-y-3">
                  {formData.skills.map((skill, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                      <input
                        type="text"
                        value={skill.name}
                        onChange={(e) => {
                          const updated = [...formData.skills];
                          updated[idx].name = e.target.value;
                          setFormData({ ...formData, skills: updated });
                        }}
                        className="flex-1 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500"
                        placeholder="Skill Name"
                      />

                      <div className="flex items-center gap-2 w-32">
                        <input
                          type="number"
                          min={0}
                          max={100}
                          value={skill.level}
                          onChange={(e) => {
                            const updated = [...formData.skills];
                            updated[idx].level = Number(e.target.value);
                            setFormData({ ...formData, skills: updated });
                          }}
                          className="w-16 px-2 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-center text-indigo-400 font-mono font-bold focus:outline-none"
                        />
                        <span className="text-xs font-mono text-slate-400">%</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(idx)}
                        className="p-2 rounded-xl bg-slate-900 text-rose-400 hover:bg-rose-500/10 border border-slate-800 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "socials" && (
              <div className="space-y-4">
                {[
                  { key: "github", label: "GitHub Profile" },
                  { key: "linkedin", label: "LinkedIn Profile" },
                  { key: "portfolio", label: "Portfolio Website" },
                  { key: "resume", label: "CV / Resume Link" },
                  { key: "leetcode", label: "LeetCode Profile" },
                  { key: "codeforces", label: "Codeforces Profile" },
                  { key: "codechef", label: "CodeChef Profile" },
                  { key: "hackerrank", label: "HackerRank Profile" },
                ].map((s) => (
                  <div key={s.key}>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">{s.label}</label>
                    <input
                      type="text"
                      value={(formData.socials as any)[s.key] || ""}
                      onChange={(e) => updateNestedField(["socials", s.key], e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                ))}
              </div>
            )}
          </form>

          {/* Footer CTAs */}
          <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-800 bg-slate-950/80 shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white transition-colors"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-xs font-bold text-white shadow-lg shadow-indigo-500/25 hover:from-indigo-500 hover:to-purple-500 transition-all"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Profile Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Profile</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
