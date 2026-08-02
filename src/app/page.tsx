import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { AnimatedBackground } from "@/components/layout/animated-bg";
import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { BentoFeatures } from "@/components/sections/bento-features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { StudyRoomPreview } from "@/components/sections/study-room-preview";
import { AITutor } from "@/components/sections/ai-tutor";
import { Communities } from "@/components/sections/communities";
import { LiveActivity } from "@/components/sections/live-activity";
import { Testimonials } from "@/components/sections/testimonials";
import { Stats } from "@/components/sections/stats";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/layout/footer";
import { AuthGuard } from "@/components/auth/AuthGuard";

export default function Home() {
  return (
    <AuthGuard requireGuest={true}>
      <main className="relative min-h-screen bg-[#070B14] text-slate-100 overflow-x-hidden selection:bg-indigo-500 selection:text-white">
        {/* Background Animated Aurora & Grid */}
        <AnimatedBackground />

        {/* Glass Sticky Navigation */}
        <Navbar />

        {/* Landing Page Content Sections */}
        <div className="relative z-10">
          <Hero />
          <TrustedBy />
          <BentoFeatures />
          <HowItWorks />
          <StudyRoomPreview />
          <AITutor />
          <Communities />
          <LiveActivity />
          <Testimonials />
          <Stats />
          <Pricing />
          <FAQ />
          <CTA />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </AuthGuard>
  );
}
