import React from "react";
import { AuthCard } from "@/components/auth/AuthCard";
import { LoginForm } from "@/components/auth/LoginForm";
import { AuthGuard } from "@/components/auth/AuthGuard";

export default function LoginPage() {
  return (
    <AuthGuard requireGuest={true}>
      <AuthCard>
        <LoginForm />
      </AuthCard>
    </AuthGuard>
  );
}
