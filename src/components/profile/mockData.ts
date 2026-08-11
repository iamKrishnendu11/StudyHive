import { StudentProfile } from "@/types/profile";

export const defaultProfileData: StudentProfile = {
  name: "Krishnendu Mandal",
  username: "@krishnendu",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
  coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
  isVerified: true,
  role: "Senior Student & Peer Mentor",
  college: "Narula Institute of Technology",
  university: "MAKAUT",
  degree: "B.Tech Computer Science & Engineering",
  department: "Computer Science",
  currentYear: "3rd Year",
  currentSemester: "Semester 5",
  expectedGraduation: "June 2026",
  location: "Kolkata, India",
  cgpa: "9.2 / 10",
  rollNumber: "16900121045",
  bio: "Passionate Full Stack Developer and DSA enthusiast. Looking for Java and Spring Boot study partners. Currently grinding LeetCode 150 & building scalable microservices.",
  tagline: "⚡ Tech Lead @ StudyHive Club • 500+ Problems Solved",
  
  partnerScore: 95,
  partnerRating: 4.9,
  scoreBreakdown: {
    consistency: 96,
    communication: 94,
    helpfulness: 98,
    attendance: 92,
  },

  interests: [
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    "Node.js",
    "Operating Systems",
    "DBMS",
    "Computer Networks",
    "DSA",
    "LeetCode",
    "Machine Learning",
    "Artificial Intelligence",
    "Cloud Computing",
    "Cyber Security",
  ],

  skills: [
    { name: "Java & Spring Boot", level: 92, category: "Backend" },
    { name: "React & Next.js", level: 88, category: "Frontend" },
    { name: "Data Structures & Algorithms", level: 95, category: "Core" },
    { name: "SQL & PostgreSQL", level: 84, category: "Database" },
    { name: "Docker & Kubernetes", level: 76, category: "DevOps" },
    { name: "Linux Administration", level: 82, category: "System" },
    { name: "Git & GitHub Workflow", level: 90, category: "Tools" },
    { name: "System Design & Problem Solving", level: 85, category: "Architecture" },
  ],

  preferences: {
    subjects: ["Java Backend", "DSA & LeetCode", "Spring Microservices", "DBMS"],
    languages: ["English", "Bengali", "Hindi"],
    modes: ["Voice", "Video", "Chat"],
    sessionLength: "2 - 3 Hours",
    availabilityTimes: "8 PM – 12 AM IST",
    timezone: "IST (UTC+5:30)",
  },

  weeklyAvailability: [
    { day: "MON", slots: "7 PM - 11 PM", isAvailable: true },
    { day: "TUE", slots: "8 PM - 10 PM", isAvailable: true },
    { day: "WED", slots: "Unavailable", isAvailable: false },
    { day: "THU", slots: "8 PM - 12 AM", isAvailable: true },
    { day: "FRI", slots: "6 PM - 10 PM", isAvailable: true },
    { day: "SAT", slots: "2 PM - 8 PM", isAvailable: true },
    { day: "SUN", slots: "10 AM - 6 PM", isAvailable: true },
  ],

  analytics: {
    studyHours: 142,
    streakDays: 24,
    scholarXp: 4850,
    roomsJoined: 18,
    questionsSolved: 128,
    communitiesCount: 6,
    avgFocusTimeMinutes: 45,
    consistencyScore: 96,
  },

  badges: [
    { id: "b1", icon: "🔥", title: "100 Day Streak", description: "Maintained active study streak for 100 consecutive days", earnedDate: "2026-05-10", rarity: "Legendary" },
    { id: "b2", icon: "🏆", title: "Top DSA Student", description: "Ranked Top 5 in Campus DSA Speed Solving Contest", earnedDate: "2026-06-15", rarity: "Epic" },
    { id: "b3", icon: "🤖", title: "AI Power User", description: "Utilized StudyHive AI Tutor for over 50+ deep concept breakdowns", earnedDate: "2026-07-01", rarity: "Rare" },
    { id: "b4", icon: "💎", title: "Peer Mentor", description: "Helped 30+ students debug Java & Spring code in live rooms", earnedDate: "2026-07-18", rarity: "Epic" },
    { id: "b5", icon: "🎯", title: "Consistency King", description: "Attended all scheduled group study sessions without missing", earnedDate: "2026-07-25", rarity: "Rare" },
  ],

  roadmap: [
    { subject: "Java Core & Multithreading", progress: 90, status: "Completed", targetDate: "Completed" },
    { subject: "Spring Boot & RESTful APIs", progress: 72, status: "In Progress", targetDate: "Aug 2026" },
    { subject: "System Design & Distributed Caching", progress: 45, status: "In Progress", targetDate: "Sep 2026" },
    { subject: "Operating Systems & Kernel Basics", progress: 80, status: "In Progress", targetDate: "Oct 2026" },
  ],

  projects: [
    {
      id: "p1",
      title: "StudyHive — Collaborative Peer Platform",
      description: "AI-powered study room matcher with markdown sync, real-time audio rooms, and microservices backend.",
      techStack: ["Next.js", "Spring Boot", "TailwindCSS", "WebSockets"],
      githubUrl: "https://github.com/krishnendu/studyhive",
      liveUrl: "https://studyhive.dev",
      stars: 42,
    },
    {
      id: "p2",
      title: "Distributed Task Scheduler",
      description: "High-throughput Java cron-style task scheduler with Redis lock manager and quartz persistence.",
      techStack: ["Java 21", "Spring Cloud", "Redis", "PostgreSQL"],
      githubUrl: "https://github.com/krishnendu/task-scheduler",
      stars: 28,
    },
  ],

  certifications: [
    { id: "c1", name: "Oracle Certified Professional: Java SE 17", issuer: "Oracle University", issuedDate: "Mar 2025", credentialId: "OCP-99201" },
    { id: "c2", name: "Google Cloud Associate Cloud Engineer", issuer: "Google Cloud", issuedDate: "Nov 2025", credentialId: "GCP-ACE-4412" },
    { id: "c3", name: "AWS Certified Developer Associate", issuer: "Amazon Web Services", issuedDate: "Jan 2026", credentialId: "AWS-DEV-771" },
  ],

  socials: {
    github: "https://github.com/krishnendu",
    linkedin: "https://linkedin.com/in/krishnendu-mandal",
    portfolio: "https://krishnendu.dev",
    resume: "https://krishnendu.dev/resume.pdf",
    leetcode: "https://leetcode.com/u/krishnendu",
    codeforces: "https://codeforces.com/profile/krishnendu",
    codechef: "https://codechef.com/users/krishnendu",
    hackerrank: "https://hackerrank.com/krishnendu",
  },

  studyRooms: {
    recent: [
      { name: "Java Backend & Spring Boot Deep Dive", category: "Backend Engineering", peers: 6 },
      { name: "LeetCode 75 Blind Grind", category: "Algorithms", peers: 12 },
      { name: "DBMS & SQL Query Optimization", category: "Database", peers: 4 },
    ],
    created: [
      { name: "MAKAUT Semester 5 CSE Prep Group", members: 24 },
      { name: "Spring Microservices Architecture", members: 15 },
    ],
    pinned: [
      { name: "Java Backend & Spring Boot Deep Dive", category: "Backend" },
      { name: "LeetCode 75 Blind Grind", category: "Algorithms" },
    ],
  },

  activities: [
    { id: "a1", action: "Joined Study Room", detail: "Entered 'Java Backend & Spring Boot Deep Dive'", timestamp: "2 hours ago", type: "room" },
    { id: "a2", action: "Uploaded Notes", detail: "Shared 'Binary Search Tree & Red-Black Tree Notes.md'", timestamp: "5 hours ago", type: "note" },
    { id: "a3", action: "Solved Problems", detail: "Completed 5 LeetCode Hard Dynamic Programming problems", timestamp: "1 day ago", type: "quiz" },
    { id: "a4", action: "Earned Badge", detail: "Unlocked 'Peer Mentor 💎' achievement badge", timestamp: "2 days ago", type: "badge" },
    { id: "a5", action: "Completed Study Session", detail: "3-Hour Deep Focus session in System Design Room", timestamp: "3 days ago", type: "session" },
  ],

  privacy: {
    profileVisibility: "Public",
    showEducation: "Public",
    showScores: "Public",
    showActivity: "Public",
  },
};
