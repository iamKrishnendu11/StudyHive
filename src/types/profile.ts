export interface StudentProfile {
  name: string;
  username: string;
  avatar: string;
  coverImage: string;
  isVerified: boolean;
  role: string;
  college: string;
  university: string;
  degree: string;
  department: string;
  currentYear: string;
  currentSemester: string;
  expectedGraduation: string;
  location: string;
  cgpa?: string;
  rollNumber?: string;
  bio: string;
  tagline: string;
  
  // Study Partner Score
  partnerScore: number;
  partnerRating: number;
  scoreBreakdown: {
    consistency: number;
    communication: number;
    helpfulness: number;
    attendance: number;
  };

  // Academic Interests
  interests: string[];

  // Skills
  skills: Array<{
    name: string;
    level: number; // 0 to 100
    category: string;
  }>;

  // Study Preferences
  preferences: {
    subjects: string[];
    languages: string[];
    modes: Array<"Voice" | "Video" | "Chat">;
    sessionLength: string;
    availabilityTimes: string;
    timezone: string;
  };

  // Availability Schedule
  weeklyAvailability: Array<{
    day: string;
    slots: string;
    isAvailable: boolean;
  }>;

  // Analytics
  analytics: {
    studyHours: number;
    streakDays: number;
    scholarXp: number;
    roomsJoined: number;
    questionsSolved: number;
    communitiesCount: number;
    avgFocusTimeMinutes: number;
    consistencyScore: number;
  };

  // Badges
  badges: Array<{
    id: string;
    icon: string;
    title: string;
    description: string;
    earnedDate: string;
    rarity: "Common" | "Rare" | "Epic" | "Legendary";
  }>;

  // Learning Roadmap
  roadmap: Array<{
    subject: string;
    progress: number;
    status: "Completed" | "In Progress" | "Planned";
    targetDate: string;
  }>;

  // Projects
  projects: Array<{
    id: string;
    title: string;
    description: string;
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
    stars?: number;
  }>;

  // Certifications
  certifications: Array<{
    id: string;
    name: string;
    issuer: string;
    issuedDate: string;
    credentialId?: string;
    icon?: string;
  }>;

  // Social Links
  socials: {
    github?: string;
    linkedin?: string;
    portfolio?: string;
    resume?: string;
    leetcode?: string;
    codeforces?: string;
    codechef?: string;
    hackerrank?: string;
  };

  // Study Rooms
  studyRooms: {
    recent: Array<{ name: string; category: string; peers: number }>;
    created: Array<{ name: string; members: number }>;
    pinned: Array<{ name: string; category: string }>;
  };

  // Activity Timeline
  activities: Array<{
    id: string;
    action: string;
    detail: string;
    timestamp: string;
    type: "room" | "note" | "quiz" | "badge" | "session";
  }>;

  // Privacy Settings
  privacy: {
    profileVisibility: "Public" | "Friends" | "Private";
    showEducation: "Public" | "Friends" | "Private";
    showScores: "Public" | "Friends" | "Private";
    showActivity: "Public" | "Friends" | "Private";
  };
}
