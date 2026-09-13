import React from "react";
import { ArrowUp, Mail, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import { PERSONAL_INFO } from "../../data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)] py-12 text-[var(--text-secondary)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand and Copyright */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[var(--text-primary)] font-bold text-lg">
              <span className="font-mono">{PERSONAL_INFO.handle}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--badge-bg)] text-[var(--badge-text)] font-mono">
                v2026.1
              </span>
            </div>
            <p className="text-sm">
              Designed & Built with precision by {PERSONAL_INFO.name}
            </p>
            <p className="font-mono text-xs text-[var(--text-muted)]">
              Tangerang Selatan, Banten, Indonesia 🇮🇩 • © {new Date().getFullYear()}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-highlight)] text-[var(--text-primary)] transition-all hover:scale-110"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-highlight)] text-[var(--text-primary)] transition-all hover:scale-110"
              title="Send Email"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4 text-[var(--primary)]" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-highlight)] text-[var(--text-primary)] transition-all hover:scale-110"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4 text-[var(--text-primary)]" />
            </a>
            <a
              href="https://anggaphi.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-highlight)] text-[var(--text-primary)] transition-all hover:scale-110"
              title="GitHub Pages Live Mockup"
              aria-label="GitHub Pages Live Mockup"
            >
              <Globe className="w-4 h-4 text-[var(--primary-accent)]" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-highlight)] text-[var(--text-primary)] transition-all hover:scale-105"
            aria-label="Scroll Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
