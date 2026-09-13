import React from "react";
import { PROJECTS_DATA } from "../../data/portfolioData";
import type { Project } from "../../data/portfolioData";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "../ui/Icons";

interface ProjectsSectionProps {
  selectedCategory: "All" | "3D Work" | "2D Work" | "Tech & AI";
  onSelectCategory: (category: "All" | "3D Work" | "2D Work" | "Tech & AI") => void;
  onOpenProjectDetail: (projectId: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenProjectDetail,
}) => {
  const categories: ("All" | "3D Work" | "2D Work" | "Tech & AI")[] = [
    "All",
    "3D Work",
    "2D Work",
    "Tech & AI",
  ];

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  // Render high-fidelity SVG 3D preview graphics for project cards
  const renderProjectGraphic = (project: Project) => {
    switch (project.imageType) {
      case "bracket":
        return (
          <div className="w-full h-44 bg-[#0A1612] border-b border-[var(--border)] flex items-center justify-center p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b3d2d_1px,transparent_1px),linear-gradient(to_bottom,#1b3d2d_1px,transparent_1px)] bg-[size:16px_16px] opacity-30" />
            <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 text-emerald-400">
              <path d="M15 15 H65 V45 H105 V75 H15 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
              <circle cx="35" cy="30" r="6" fill="#0A1612" stroke="currentColor" strokeWidth="2" />
              <circle cx="85" cy="60" r="6" fill="#0A1612" stroke="currentColor" strokeWidth="2" />
              <line x1="15" y1="85" x2="105" y2="85" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
              <text x="45" y="83" fill="currentColor" fontSize="8" fontFamily="monospace">120 mm</text>
            </svg>
            <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 font-mono text-[10px] text-emerald-300 border border-emerald-500/30">
              Blender 3D • ±0.1mm
            </div>
          </div>
        );
      case "enclosure":
        return (
          <div className="w-full h-44 bg-[#081519] border-b border-[var(--border)] flex items-center justify-center p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#153a42_1px,transparent_1px),linear-gradient(to_bottom,#153a42_1px,transparent_1px)] bg-[size:16px_16px] opacity-30" />
            <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 text-teal-400">
              <rect x="20" y="15" width="80" height="60" rx="8" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
              <path d="M15 35 L20 35 M15 55 L20 55 M100 35 L105 35 M100 55 L105 55" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <line x1="35" y1="25" x2="85" y2="25" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
              <line x1="35" y1="35" x2="85" y2="35" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
            </svg>
            <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 font-mono text-[10px] text-teal-300 border border-teal-500/30">
              Snap-Fit Latches • ±0.15mm
            </div>
          </div>
        );
      case "fixture":
        return (
          <div className="w-full h-44 bg-[#141208] border-b border-[var(--border)] flex items-center justify-center p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#3d3515_1px,transparent_1px),linear-gradient(to_bottom,#3d3515_1px,transparent_1px)] bg-[size:16px_16px] opacity-30" />
            <svg width="110" height="90" viewBox="0 0 110 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 text-amber-400">
              <ellipse cx="55" cy="45" rx="45" ry="30" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
              <ellipse cx="55" cy="45" rx="25" ry="16" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
              <circle cx="55" cy="45" r="4" fill="currentColor" />
              <path d="M55 15 L55 75 M10 45 L100 45" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
            </svg>
            <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 font-mono text-[10px] text-amber-300 border border-amber-500/30">
              Pottery Centering Guide
            </div>
          </div>
        );
      case "qr-insert":
        return (
          <div className="w-full h-44 bg-[#0c1913] border-b border-[var(--border)] flex items-center justify-center p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <svg width="100" height="90" viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 text-emerald-400">
              <rect x="15" y="10" width="70" height="70" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
              <rect x="25" y="20" width="16" height="16" fill="currentColor" />
              <rect x="59" y="20" width="16" height="16" fill="currentColor" />
              <rect x="25" y="54" width="16" height="16" fill="currentColor" />
              <rect x="50" y="45" width="10" height="10" fill="currentColor" />
              <rect x="65" y="60" width="10" height="10" fill="currentColor" />
            </svg>
            <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 font-mono text-[10px] text-emerald-300 border border-emerald-500/30">
              Interactive Packaging
            </div>
          </div>
        );
      case "storefront":
        return (
          <div className="w-full h-44 bg-[#0f1f18] border-b border-[var(--border)] flex items-center justify-center p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 text-green-400">
              <rect x="10" y="15" width="100" height="60" rx="6" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
              <rect x="18" y="23" width="84" height="20" rx="3" fill="currentColor" fillOpacity="0.3" />
              <rect x="18" y="48" width="25" height="20" rx="2" fill="currentColor" fillOpacity="0.2" />
              <rect x="47" y="48" width="25" height="20" rx="2" fill="currentColor" fillOpacity="0.2" />
              <rect x="76" y="48" width="26" height="20" rx="2" fill="currentColor" fillOpacity="0.2" />
            </svg>
            <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 font-mono text-[10px] text-green-300 border border-green-500/30">
              Shopee • Tokopedia • TikTok
            </div>
          </div>
        );
      case "marketing":
        return (
          <div className="w-full h-44 bg-[#142111] border-b border-[var(--border)] flex items-center justify-center p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 text-lime-400">
              <rect x="25" y="10" width="70" height="70" rx="8" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
              <path d="M35 60 L50 40 L65 52 L85 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="85" cy="30" r="4" fill="currentColor" />
            </svg>
            <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 font-mono text-[10px] text-lime-300 border border-lime-500/30">
              Meta Ads • +45% CTR
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full h-44 bg-[#0a1c15] border-b border-[var(--border)] flex items-center justify-center p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 text-emerald-400">
              <rect x="15" y="15" width="90" height="60" rx="6" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
              <polyline points="35 45 45 35 35 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="52" y1="45" x2="65" y2="45" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 font-mono text-[10px] text-emerald-300 border border-emerald-500/30">
              Full-Stack Application
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-16 border-t border-[var(--border)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--border)] text-xs font-semibold text-[var(--badge-text)] font-mono">
            <span>04. PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Featured Engineering & Creative Works
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base">
            From precision caliper-calibrated 3D prototypes and high-conversion e-commerce assets to AI agent toolkits.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const count = cat === "All"
              ? PROJECTS_DATA.length
              : PROJECTS_DATA.filter((p) => p.category === cat).length;
            const isActive = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-[var(--primary)] text-white shadow-md scale-105"
                    : "bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-highlight)]"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border)]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-highlight)] transition-all hover:-translate-y-1.5 hover:shadow-xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visual Preview Graphic */}
                {renderProjectGraphic(project)}

                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--border)] font-semibold">
                      {project.category}
                    </span>
                    <span className="font-mono text-[11px] text-[var(--text-muted)]">
                      {Object.keys(project.specifications)[0]}: {Object.values(project.specifications)[0]}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Tools Badges */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.tools.slice(0, 3).map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border)]"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 text-[var(--text-muted)]">
                        +{project.tools.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-[var(--border)]/60 bg-[var(--bg-secondary)]/20">
                <button
                  onClick={() => onOpenProjectDetail(project.id)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[var(--primary)] hover:underline"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                      title="Source Code"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
