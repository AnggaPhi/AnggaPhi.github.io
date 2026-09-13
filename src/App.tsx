import { useState, useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import type { ThemeMode } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { SkillsMatrix } from "./components/sections/SkillsMatrix";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { EducationSection } from "./components/sections/EducationSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { DashboardSection } from "./components/sections/DashboardSection";
import { ContactSection } from "./components/sections/ContactSection";
import { ProjectDetailModal } from "./components/modals/ProjectDetailModal";
import { ResumeModal } from "./components/modals/ResumeModal";
import { PROJECTS_DATA } from "./data/portfolioData";
import type { Project } from "./data/portfolioData";

export function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem("anggaphi-theme");
    return (saved as ThemeMode) || "light";
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [projectCategory, setProjectCategory] = useState<"All" | "3D Work" | "2D Work" | "Tech & AI">("All");

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.remove("theme-dark", "theme-cyber", "theme-ramadan");
    if (theme !== "light") {
      document.documentElement.classList.add(`theme-${theme}`);
    }
    localStorage.setItem("anggaphi-theme", theme);
  }, [theme]);

  const selectedProject: Project | null = selectedProjectId
    ? PROJECTS_DATA.find((p) => p.id === selectedProjectId) || null
    : null;

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors selection:bg-[var(--primary)] selection:text-white">
      
      {/* Top Navigation Bar */}
      <Navbar
        currentTheme={theme}
        onThemeChange={setTheme}
        onSelectProjectCategory={(cat) => {
          setProjectCategory(cat);
          const el = document.getElementById("projects");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* Main Page Content */}
      <main>
        <HeroSection
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <AboutSection
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <SkillsMatrix />

        <ExperienceSection />

        <EducationSection />

        <ProjectsSection
          selectedCategory={projectCategory}
          onSelectCategory={setProjectCategory}
          onOpenProjectDetail={(id) => setSelectedProjectId(id)}
        />

        <DashboardSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProjectId}
        onClose={() => setSelectedProjectId(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
