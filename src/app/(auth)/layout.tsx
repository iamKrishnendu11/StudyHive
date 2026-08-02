import type { Metadata } from "next";
import React from "react";
import { AuthLayout } from "@/components/auth/AuthLayout";

export const metadata: Metadata = {
  title: "Authentication — StudyHive",
  description: "Sign in or create your StudyHive account to join live study rooms and learn with AI assistance.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}
