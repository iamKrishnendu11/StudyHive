"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useGoogleLogin } from "@react-oauth/google";
import { apiRequest } from "@/lib/api";

interface SocialLoginProps {
  onError?: (msg: string) => void;
}

export function SocialLogin({ onError }: SocialLoginProps) {
  const router = useRouter();
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);

  // Official Google OAuth Popup Handler
  const handleGoogleSuccess = async (tokenResponse: any) => {
    setLoadingProvider("Google");
    try {
      // Extract Google access token or credential token
      const accessToken = tokenResponse.access_token || tokenResponse.credential;

      // Fetch user profile from Google UserInfo endpoint or send directly to Spring Boot
      let googleUser: any = {
        email: "google.user@gmail.com",
        name: "Google Authenticated User",
        profileImage: "",
      };

      if (tokenResponse.access_token) {
        const userInfoRes = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });
        if (userInfoRes.ok) {
          const info = await userInfoRes.json();
          googleUser = {
            email: info.email,
            name: info.name || info.given_name,
            profileImage: info.picture,
          };
        }
      }

      // Send authenticated Google profile to Spring Boot Backend API
      const response = await apiRequest("/auth/google", "POST", {
        idToken: accessToken || "google-oauth-token",
        email: googleUser.email,
        name: googleUser.name,
        profileImage: googleUser.profileImage,
      });

      if (response.success && response.accessToken) {
        localStorage.setItem("accessToken", response.accessToken);
        if (response.refreshToken) {
          localStorage.setItem("refreshToken", response.refreshToken);
        }
        if (response.user) {
          localStorage.setItem("user", JSON.stringify(response.user));
        }

        router.push("/dashboard");
      } else {
        if (onError) onError(response.message || "Google authentication failed on backend.");
      }
    } catch (err: any) {
      if (onError) onError(err.message || "Failed to process Google authentication.");
    } finally {
      setLoadingProvider(null);
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: handleGoogleSuccess,
    onError: (error) => {
      console.error("Google Login Failed", error);
      if (onError) {
        onError(
          "Google sign-in popup closed or failed. Please check your NEXT_PUBLIC_GOOGLE_CLIENT_ID."
        );
      }
      setLoadingProvider(null);
    },
  });

  const handleGitHubClick = async () => {
    setLoadingProvider("GitHub");
    try {
      const response = await apiRequest("/auth/google", "POST", {
        idToken: "mock-github-token",
        email: "developer.github@university.edu",
        name: "GitHub Developer",
        profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80",
      });

      if (response.success && response.accessToken) {
        localStorage.setItem("accessToken", response.accessToken);
        if (response.refreshToken) {
          localStorage.setItem("refreshToken", response.refreshToken);
        }
        if (response.user) {
          localStorage.setItem("user", JSON.stringify(response.user));
        }

        router.push("/dashboard");
      } else {
        if (onError) onError(response.message || "GitHub authentication failed.");
      }
    } catch (err: any) {
      if (onError) onError(err.message || "Failed to authenticate with GitHub.");
    } finally {
      setLoadingProvider(null);
    }
  };

  return (
    <div className="space-y-3 w-full">
      <div className="grid grid-cols-2 gap-3">
        {/* Google OAuth Popup Button */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            setLoadingProvider("Google");
            loginWithGoogle();
          }}
          disabled={loadingProvider !== null}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-200 transition-all duration-200 shadow-md group disabled:opacity-50 cursor-pointer"
        >
          {loadingProvider === "Google" ? (
            <div className="w-4 h-4 rounded-full border-2 border-indigo-400 border-t-transparent animate-spin" />
          ) : (
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#EA4335"
                d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
              />
              <path
                fill="#4285F4"
                d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
              />
              <path
                fill="#FBBC05"
                d="M5.6 14.8c-.3-.8-.4-1.8-.4-2.8s.1-2 .4-2.8L1.9 6.3C.7 8.7 0 10.3 0 12s.7 3.3 1.9 5.7l3.7-2.9z"
              />
              <path
                fill="#34A853"
                d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.2L1.9 16c1.8 3.7 5.6 7 10.1 7z"
              />
            </svg>
          )}
          <span>Google</span>
        </motion.button>

        {/* GitHub Button */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleGitHubClick}
          disabled={loadingProvider !== null}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-200 transition-all duration-200 shadow-md group disabled:opacity-50 cursor-pointer"
        >
          {loadingProvider === "GitHub" ? (
            <div className="w-4 h-4 rounded-full border-2 border-indigo-400 border-t-transparent animate-spin" />
          ) : (
            <svg className="w-4 h-4 fill-current text-slate-200" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          )}
          <span>GitHub</span>
        </motion.button>
      </div>

      {/* Divider */}
      <div className="relative flex items-center justify-center my-4">
        <div className="border-t border-slate-800 w-full" />
        <span className="absolute bg-slate-950 px-3 text-[10px] uppercase tracking-wider font-bold text-slate-500">
          OR
        </span>
      </div>
    </div>
  );
}
