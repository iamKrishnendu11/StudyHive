import React from "react";
import { AuthCard } from "@/components/auth/AuthCard";
import { SignupForm } from "@/components/auth/SignupForm";
import { AuthGuard } from "@/components/auth/AuthGuard";

export default function SignupPage() {
  return (
    <AuthGuard requireGuest={true}>
      <AuthCard>
        <SignupForm />
      </AuthCard>
    </AuthGuard>
  );
}
