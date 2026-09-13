import React, { useState } from "react";
import { SKILLS_DATA } from "../../data/portfolioData";
import { 
  Box, 
  Layers, 
  Printer, 
  Ruler, 
  Cpu, 
  ShoppingBag, 
  Store, 
  Video, 
  Database, 
  TrendingUp, 
  Smile, 
  Sparkles, 
  Bot, 
  Workflow, 
  BrainCircuit, 
  Wrench, 
  Network, 
  Terminal, 
  Shield, 
  Code, 
  Palette, 
  FileCode, 
  GitBranch, 
  Target, 
  PenTool,
  CheckCircle2
} from "lucide-react";

type CategoryFilter = "All" | "3D Modeling & Sculpting" | "E-Commerce" | "AI & Agents" | "IT & Infra" | "Web & Code" | "Marketing";

export const SkillsMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  const categories: CategoryFilter[] = [
    "All",
    "3D Modeling & Sculpting",
    "E-Commerce",
    "AI & Agents",
    "IT & Infra",
    "Web & Code",
    "Marketing",
  ];

  const filteredSkills = activeCategory === "All"
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    const props = { className: "w-4 h-4 text-[var(--primary)]" };
    switch (iconName) {
      case "Box": return <Box {...props} />;
      case "Layers": return <Layers {...props} />;
      case "Printer": return <Printer {...props} />;
      case "Ruler": return <Ruler {...props} />;
      case "Cpu": return <Cpu {...props} />;
      case "ShoppingBag": return <ShoppingBag {...props} />;
      case "Store": return <Store {...props} />;
      case "Video": return <Video {...props} />;
      case "Database": return <Database {...props} />;
      case "TrendingUp": return <TrendingUp {...props} />;
      case "Smile": return <Smile {...props} />;
      case "Sparkles": return <Sparkles {...props} />;
      case "Bot": return <Bot {...props} />;
      case "Workflow": return <Workflow {...props} />;
      case "BrainCircuit": return <BrainCircuit {...props} />;
      case "Wrench": return <Wrench {...props} />;
      case "Network": return <Network {...props} />;
      case "Terminal": return <Terminal {...props} />;
      case "Shield": return <Shield {...props} />;
      case "Code": return <Code {...props} />;
      case "Palette": return <Palette {...props} />;
      case "FileCode": return <FileCode {...props} />;
      case "GitBranch": return <GitBranch {...props} />;
      case "Target": return <Target {...props} />;
      case "PenTool": return <PenTool {...props} />;
      default: return <CheckCircle2 {...props} />;
    }
  };

  return (
    <section id="skills" className="py-16 border-t border-[var(--border)] bg-[var(--bg-secondary)]/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--border)] text-xs font-semibold text-[var(--badge-text)] font-mono">
            <span>01. SKILLS & TOOLING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Technical & Practical Mastery
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base">
            From precision 3D modeling, mesh sculpting, and multi-channel e-commerce systems to AI agent architecture and IT infrastructure.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const count = cat === "All" 
              ? SKILLS_DATA.length 
              : SKILLS_DATA.filter((s) => s.category === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-[var(--primary)] text-white shadow-md scale-105"
                    : "bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-highlight)] hover:text-[var(--text-primary)]"
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

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-highlight)] transition-all hover:-translate-y-1 hover:shadow-lg space-y-2.5 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] group-hover:scale-110 transition-transform">
                    {getIcon(skill.iconName)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[var(--text-primary)]">
                      {skill.name}
                    </h3>
                    <span className="text-[11px] font-mono text-[var(--text-muted)]">
                      {skill.category}
                    </span>
                  </div>
                </div>

                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                    skill.level === "Specialist"
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-bold"
                      : skill.level === "Advanced"
                      ? "bg-teal-500/10 border-teal-500/30 text-teal-600 dark:text-teal-400 font-semibold"
                      : "bg-[var(--bg-secondary)] border-[var(--border)] text-[var(--text-muted)]"
                  }`}
                >
                  {skill.level}
                </span>
              </div>

              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
