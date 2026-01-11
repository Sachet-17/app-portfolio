"use client";

// app/page.tsx
import { useEffect } from "react";
import { Navigation } from "./components/nav";
import { HeroSection } from "./components/sections/hero-section";
import { AboutSection } from "./components/sections/about-section";
import { SkillsSection } from "./components/sections/skills-section";
import { EducationSection } from "./components/sections/education-section";
import { ExperienceSection } from "./components/sections/experience-section";
import { ProjectsSection } from "./components/sections/projects-section";
import { ResumeSection } from "./components/sections/resume-section";
import { ContactSection } from "./components/sections/contact-section";
import { handleHashOnLoad } from "../util/scroll";

export default function Home() {
  useEffect(() => {
    handleHashOnLoad();
  }, []);

  return (
    <div className="relative min-h-screen bg-black">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Education Section */}
      <EducationSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Resume Section */}
      <ResumeSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
