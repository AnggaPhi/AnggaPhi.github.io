import React from "react";
import type { Project } from "../../data/portfolioData";
import { X, ExternalLink, CheckCircle2, Wrench, ArrowRight } from "lucide-react";
import { GithubIcon } from "../ui/Icons";

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] shadow-2xl z-10 animate-in zoom-in-95 duration-150 space-y-6">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-[var(--border)] bg-[var(--bg-card)]/90 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-full bg-[var(--badge-bg)] text-[var(--badge-text)] font-semibold border border-[var(--border)]">
              {project.category}
            </span>
            <span className="text-xs font-mono text-[var(--text-muted)] hidden sm:inline">
              Case Study & Technical Specs
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-[var(--border)] hover:bg-[var(--bg-secondary)] text-[var(--text-secondary)] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-6 pb-6 space-y-6">
          
          {/* Title & Short Description */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              {project.fullDesc}
            </p>
          </div>

          {/* Tools Badge List */}
          <div className="space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
              Tooling & Technology Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border)]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Specifications Table / Grid */}
          <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)]/50 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
              <Wrench className="w-3.5 h-3.5 text-[var(--primary)]" />
              <span>Engineering Specifications</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-mono">
              {Object.entries(project.specifications).map(([key, val], idx) => (
                <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border)]">
                  <span className="text-[var(--text-muted)]">{key}:</span>
                  <span className="font-bold text-[var(--text-primary)]">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverables / Highlights */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
              Highlights & Production Results
            </div>
            <div className="space-y-2">
              {project.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-4 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-3">
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--primary)] text-white font-semibold text-xs transition-all hover:scale-105"
            >
              <span>Inquire About Similar Work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-highlight)] text-xs font-semibold text-[var(--text-primary)] transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-highlight)] text-xs font-semibold text-[var(--text-primary)] transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
