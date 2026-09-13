import React, { useState } from "react";
import { 
  ArrowRight, 
  Mail, 
  Copy, 
  Check, 
  FileDown, 
  Printer, 
  ShoppingBag, 
  Bot, 
  Wrench 
} from "lucide-react";
import { PERSONAL_INFO, CODE_SNIPPET } from "../../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    const codeString = `const ${CODE_SNIPPET.variable} = {\n${CODE_SNIPPET.properties
      .map((p) => `  ${p.key}: ${p.value},`)
      .join("\n")}\n};`;
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content & Bio */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Welcome Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--border)] text-xs font-semibold text-[var(--badge-text)]">
              <span>👋 Welcome to my portfolio</span>
            </div>

            {/* Title & Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-accent)] bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <p className="font-mono text-sm sm:text-base text-[var(--primary-dark)] dark:text-[var(--primary-light)] font-semibold">
                {PERSONAL_INFO.role}
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              {PERSONAL_INFO.bioHeadline}
            </p>

            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-w-2xl">
              {PERSONAL_INFO.bioSummary}
            </p>

            {/* Quick Pillars Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)]">
                <Printer className="w-3.5 h-3.5 text-[var(--primary)]" />
                <span>Blender 3D Modeling & Sculpting</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)]">
                <ShoppingBag className="w-3.5 h-3.5 text-[var(--primary)]" />
                <span>Marketplace Operations</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)]">
                <Bot className="w-3.5 h-3.5 text-[var(--primary)]" />
                <span>AI Prompt Engineering</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)]">
                <Wrench className="w-3.5 h-3.5 text-[var(--primary)]" />
                <span>IT Infrastructure</span>
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--primary)] text-white font-semibold text-sm shadow-md hover:opacity-95 transition-all hover:scale-105"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--border-highlight)] font-semibold text-sm transition-all hover:scale-105"
              >
                <span>View My Work</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--border-highlight)] text-sm font-semibold transition-all hover:scale-105"
              >
                <FileDown className="w-4 h-4 text-[var(--primary)]" />
                <span>CV / Resume</span>
              </button>
            </div>

            {/* Socials & Location */}
            <div className="flex items-center gap-4 pt-2 text-[var(--text-muted)] text-sm">
              <span className="font-mono text-xs">📍 {PERSONAL_INFO.location}</span>
              <span className="text-[var(--border)]">|</span>
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:text-[var(--primary)] hover:bg-[var(--bg-secondary)] transition-colors"
                  title="LinkedIn"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2 rounded-lg hover:text-[var(--primary)] hover:bg-[var(--bg-secondary)] transition-colors"
                  title="Email"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:text-[var(--primary)] hover:bg-[var(--bg-secondary)] transition-colors"
                  title="GitHub"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Code Window Mockup */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--code-bg)] shadow-2xl overflow-hidden">
              
              {/* Terminal Window Header with macOS Dots */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/30">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>

                <div className="font-mono text-xs text-white/50">
                  angga.ts
                </div>

                <button
                  onClick={copyCode}
                  className="p-1 rounded text-white/60 hover:text-white transition-colors"
                  title="Copy snippet"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Code Content */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed text-[var(--code-text)] overflow-x-auto">
                <div className="text-white/40">// Multi-disciplinary Professional Profile</div>
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-yellow-300">{CODE_SNIPPET.variable}</span> = {"{"}
                </div>
                {CODE_SNIPPET.properties.map((prop, idx) => (
                  <div key={idx} className="pl-4">
                    <span className="text-emerald-300">{prop.key}</span>:{" "}
                    <span className="text-teal-200">{prop.value}</span>,
                  </div>
                ))}
                <div>{"};"}</div>
                <div className="pt-3 text-white/40">
                  // Focused on 3D modeling, sculpting, and digital systems.
                </div>
              </div>

              {/* Terminal Footer status bar */}
              <div className="px-4 py-2.5 border-t border-white/10 bg-black/20 flex items-center justify-between text-xs font-mono text-white/70">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  System Online
                </span>

                <span className="text-[11px] text-white/50">
                  Tangerang Selatan, Indonesia 🇮🇩
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
