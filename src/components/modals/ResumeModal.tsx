import React, { useState } from "react";
import { X, Copy, Check, Printer } from "lucide-react";
import { PERSONAL_INFO, EXPERIENCES_DATA, EDUCATION_DATA } from "../../data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const rawResumeText = `=======================================================
${PERSONAL_INFO.name.toUpperCase()} - CURRICULUM VITAE
=======================================================
Location: ${PERSONAL_INFO.location}
Phone   : ${PERSONAL_INFO.phone}
Email   : ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin}

-------------------------------------------------------
PROFESSIONAL SUMMARY
-------------------------------------------------------
${PERSONAL_INFO.bioHeadline}

-------------------------------------------------------
EXPERIENCE
-------------------------------------------------------
${EXPERIENCES_DATA.map(
  (exp, idx) => `${idx + 1}. ${exp.company} (${exp.period})
   Role: ${exp.role} [${exp.type}]
   Location: ${exp.location}
   ${exp.achievements.map((a) => `* ${a}`).join("\n   ")}
`
).join("\n")}
-------------------------------------------------------
EDUCATION & CERTIFICATIONS
-------------------------------------------------------
${EDUCATION_DATA.map(
  (edu, idx) => `${idx + 1}. ${edu.title} - ${edu.provider} (${edu.period})
   Type: ${edu.type}
   ${edu.certUrl ? `Credential Link: ${edu.certUrl}\n   ` : ""}Description: ${edu.description}
`
).join("\n")}
=======================================================`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(rawResumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] shadow-2xl z-10 flex flex-col animate-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-[var(--border)] bg-[var(--bg-card)]/90 backdrop-blur-md">
          <div className="flex items-center gap-2 font-mono text-sm font-bold text-[var(--text-primary)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary)]"></span>
            <span>{PERSONAL_INFO.name} - Curriculum Vitae</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyToClipboard}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[var(--border-highlight)] text-xs font-semibold text-[var(--text-primary)]"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied" : "Copy Text"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[var(--border-highlight)] text-xs font-semibold text-[var(--text-primary)]"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-[var(--border)] hover:bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm text-[var(--text-secondary)] space-y-6 leading-relaxed">
          
          {/* Header info */}
          <div className="border-b border-[var(--border)] pb-6 space-y-2 text-center sm:text-left">
            <h1 className="text-2xl font-bold text-[var(--text-primary)] font-sans">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-[var(--primary)] font-semibold text-xs sm:text-sm">
              {PERSONAL_INFO.role}
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-[var(--text-muted)] pt-1">
              <span>📍 {PERSONAL_INFO.location}</span>
              <span>📞 {PERSONAL_INFO.phone}</span>
              <span>✉️ {PERSONAL_INFO.email}</span>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--primary)] border-b border-[var(--border)] pb-1">
              Professional Summary
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[var(--text-secondary)]">
              {PERSONAL_INFO.bioHeadline} {PERSONAL_INFO.bioSummary}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--primary)] border-b border-[var(--border)] pb-1">
              Career Experience
            </h2>
            <div className="space-y-4">
              {EXPERIENCES_DATA.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold text-[var(--text-primary)]">{exp.role}</span>
                    <span className="text-[var(--text-muted)] text-xs">{exp.period}</span>
                  </div>
                  <div className="text-xs text-[var(--primary)] font-semibold">
                    {exp.company} • {exp.location}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-[var(--text-secondary)] font-sans pt-1">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--primary)] border-b border-[var(--border)] pb-1">
              Education & Certifications
            </h2>
            <div className="space-y-3">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="text-xs space-y-1">
                  <div className="flex items-center justify-between font-bold text-[var(--text-primary)]">
                    <span>{edu.title}</span>
                    <span className="text-[var(--text-muted)]">{edu.period}</span>
                  </div>
                  <div className="text-[var(--primary)]">{edu.provider} • {edu.type}</div>
                  <div className="text-[var(--text-muted)] font-sans">{edu.description}</div>
                  {edu.certUrl && (
                    <div className="pt-0.5">
                      <a
                        href={edu.certUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[var(--primary)] hover:underline font-semibold font-mono text-[11px]"
                      >
                        <span>[{edu.linkText || (edu.type === "Formal" ? "View Diploma" : "View Certificate")}]</span>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
