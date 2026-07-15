import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "@components/layout/Navbar";
import Footer from "@components/layout/Footer";
import HeroSection from "@components/sections/HeroSection";
import SEOMeta from "@components/common/SEOMeta";
import ScrollProgress from "@components/common/ScrollProgress";
import BackToTop from "@components/common/BackToTop";
import CustomCursor from "@components/common/CustomCursor";

const AboutSection = lazy(() => import("@components/sections/AboutSection"));
const SkillsSection = lazy(() => import("@components/sections/SkillsSection"));
const ExperienceSection = lazy(() => import("@components/sections/ExperienceSection"));
const ProjectsSection = lazy(() => import("@components/sections/ProjectsSection"));
const HackathonSection = lazy(() => import("@components/sections/HackathonSection"));
const MLProjectsSection = lazy(() => import("@components/sections/MLProjectsSection"));
const DSAProjectsSection = lazy(() => import("@components/sections/DSAProjectsSection"));
const AchievementsSection = lazy(() => import("@components/sections/AchievementsSection"));
const CertificatesSection = lazy(() => import("@components/sections/CertificatesSection"));
const CompetitiveProgramming = lazy(() => import("@components/sections/CompetitiveProgrammingSection"));
const ContactSection = lazy(() => import("@components/sections/ContactSection"));

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 rounded-full border-2" style={{ borderColor: "rgba(59,130,246,0.15)" }} />
        <div className="absolute inset-0 rounded-full border-t-2 animate-spin"
          style={{ borderTopColor: "#60a5fa", borderColor: "transparent" }} />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <HelmetProvider>
      <SEOMeta />
      <ScrollProgress />
      <CustomCursor />
      <div className="relative min-h-screen w-full overflow-x-hidden">
        <Navbar />
        <main id="main-content" role="main">
          <HeroSection />
          <Suspense fallback={<SectionLoader />}><AboutSection /></Suspense>
          <Suspense fallback={<SectionLoader />}><SkillsSection /></Suspense>
          <Suspense fallback={<SectionLoader />}><ExperienceSection /></Suspense>
          <Suspense fallback={<SectionLoader />}><ProjectsSection /></Suspense>
          <Suspense fallback={<SectionLoader />}><HackathonSection /></Suspense>
          <Suspense fallback={<SectionLoader />}><MLProjectsSection /></Suspense>
          <Suspense fallback={<SectionLoader />}><DSAProjectsSection /></Suspense>
          <Suspense fallback={<SectionLoader />}><AchievementsSection /></Suspense>
          <Suspense fallback={<SectionLoader />}><CertificatesSection /></Suspense>
          <Suspense fallback={<SectionLoader />}><CompetitiveProgramming /></Suspense>
          <Suspense fallback={<SectionLoader />}><ContactSection /></Suspense>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </HelmetProvider>
  );
}
