import React, { useState } from "react";
import { EXPERIENCES_DATA } from "../../data/portfolioData";
import { ChevronDown, ChevronUp, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    "exp-1": true, // First item expanded by default
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="experience" className="py-16 border-t border-[var(--border)] transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--border)] text-xs font-semibold text-[var(--badge-text)] font-mono">
            <span>02. CAREER JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Professional Experience
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base">
            Proven track record across e-commerce commercial growth, additive manufacturing tooling, and institutional IT support.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[var(--border)] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {EXPERIENCES_DATA.map((exp) => {
            const isExpanded = expandedIds[exp.id];

            return (
              <div key={exp.id} className="relative group">
                
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[var(--primary)] border-4 border-[var(--bg-primary)] shadow-sm group-hover:scale-125 transition-transform" />

                {/* Main Card */}
                <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-highlight)] transition-all shadow-sm space-y-4">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                          {exp.role}
                        </h3>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--border)]">
                          {exp.type}
                        </span>
                      </div>

                      <div className="text-sm font-semibold text-[var(--primary)]">
                        {exp.company}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)] pt-1">
                        <span className="flex items-center gap-1 font-mono">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Accordion Toggle Button */}
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="self-start inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[var(--border-highlight)] text-xs font-semibold text-[var(--text-primary)] transition-all"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? "Hide Details" : "Show Details"}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Expandable Details */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-[var(--border)] space-y-4 animate-in fade-in slide-in-from-top-1 duration-200">
                      
                      {/* Achievements List */}
                      <div className="space-y-2">
                        <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
                          Key Deliverables & Impact
                        </div>
                        <ul className="space-y-2">
                          {exp.achievements.map((item, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills Tags */}
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border)]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
