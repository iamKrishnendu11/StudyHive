import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleProvider } from "@/components/providers/GoogleProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StudyHive — The Future of Collaborative AI Peer Learning",
  description:
    "AI-powered peer-to-peer learning platform. Find study partners, join live interactive rooms, collaborate on markdown notes, solve doubts instantly, and master subjects together.",
  keywords: [
    "Collaborative Learning",
    "AI Tutor",
    "Study Rooms",
    "Peer Matching",
    "Pomodoro Timer",
    "Shared Notes",
    "GATE Prep",
    "DSA Study Group",
    "LeetCode Partner",
  ],
  authors: [{ name: "StudyHive Inc." }],
  openGraph: {
    title: "StudyHive — Learn Together. Grow Together.",
    description:
      "Join live study rooms, match with top peers, and leverage 24/7 AI tutor assistance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#070B14] text-slate-100 selection:bg-indigo-500 selection:text-white">
        <GoogleProvider>{children}</GoogleProvider>
      </body>
    </html>
  );
}
