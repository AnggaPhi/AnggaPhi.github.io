import React from "react";
import { EDUCATION_DATA } from "../../data/portfolioData";
import { Bot, ShieldCheck, GraduationCap, ExternalLink, Award } from "lucide-react";

export const EducationSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Bot":
        return <Bot className="w-6 h-6 text-emerald-500" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-teal-500" />;
      default:
        return <GraduationCap className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="education" className="py-16 border-t border-[var(--border)] bg-[var(--bg-secondary)]/30 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--border)] text-xs font-semibold text-[var(--badge-text)] font-mono">
            <span>03. EDUCATION & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Verified Education & Certifications
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base">
            Formal training and verified credentials spanning artificial intelligence, cybersecurity, and analytical disciplines.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION_DATA.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-highlight)] transition-all hover:-translate-y-1.5 hover:shadow-lg flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] flex items-center justify-center">
                  {getIcon(item.icon)}
                </div>

                <div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[var(--badge-bg)] text-[var(--badge-text)]">
                    {item.type}
                  </span>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] pt-1.5">
                    {item.title}
                  </h3>
                  <div className="text-sm font-semibold text-[var(--primary)]">
                    {item.provider}
                  </div>
                  <div className="font-mono text-xs text-[var(--text-muted)] pt-0.5">
                    {item.period}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.certUrl ? (
                <a
                  href={item.certUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[var(--border-highlight)] text-xs font-semibold text-[var(--text-primary)] transition-all hover:bg-[var(--primary)] hover:text-white"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>{item.linkText || (item.type === "Formal" ? "View Diploma" : "View Certificate")}</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              ) : (
                <div className="py-2 text-center text-xs font-mono text-[var(--text-muted)] border-t border-[var(--border)]">
                  Verified Completion
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Technical Pursuits & Interests Box (from anggaphi.github.io) */}
        <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] text-center space-y-4 shadow-sm">
          <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
            Technical Pursuits & Active Explorations
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--border-highlight)] transition-colors">
              🖨️ 3D Modeling (Blender) & Additive Manufacturing
            </span>
            <span className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--border-highlight)] transition-colors">
              🤖 AI Prompt Engineering & Autonomous Agent Frameworks
            </span>
            <span className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--border-highlight)] transition-colors">
              📦 Multi-Channel E-Commerce Architecture
            </span>
            <span className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--border-highlight)] transition-colors">
              📚 Technical Literature & Book Collecting
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
