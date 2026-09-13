import React, { useState, useEffect } from "react";
import { 
  Sun, 
  Moon, 
  Terminal, 
  Sparkles, 
  Menu, 
  X, 
  Briefcase, 
  GraduationCap, 
  Layers, 
  Activity, 
  Mail, 
  ChevronDown
} from "lucide-react";
import { PERSONAL_INFO } from "../../data/portfolioData";

export type ThemeMode = "light" | "dark" | "cyber" | "ramadan";

interface NavbarProps {
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  onSelectProjectCategory?: (cat: "All" | "3D Work" | "2D Work" | "Tech & AI") => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTheme,
  onThemeChange,
  onSelectProjectCategory,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPortfolioDropdownOpen, setIsPortfolioDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const themeIcons = {
    light: <Sun className="w-4 h-4 text-amber-600" />,
    dark: <Moon className="w-4 h-4 text-emerald-400" />,
    cyber: <Terminal className="w-4 h-4 text-[#00FF88]" />,
    ramadan: <Sparkles className="w-4 h-4 text-amber-400" />,
  };

  const cycleTheme = () => {
    const themes: ThemeMode[] = ["light", "dark", "cyber", "ramadan"];
    const nextIdx = (themes.indexOf(currentTheme) + 1) % themes.length;
    onThemeChange(themes[nextIdx]);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[var(--bg-overlay)] backdrop-blur-md shadow-sm border-b border-[var(--border)] py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo with Blinking Underscore */}
        <a 
          href="#home" 
          className="group flex items-center gap-2 text-xl font-bold tracking-tight text-[var(--text-primary)] hover:opacity-90 transition-opacity"
        >
          <div className="w-8 h-8 rounded-lg bg-[var(--primary)] flex items-center justify-center text-white font-mono shadow-sm group-hover:scale-105 transition-transform">
            AP
          </div>
          <span className="font-mono text-lg font-bold">
            {PERSONAL_INFO.handle}<span className="blink-cursor">_</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <a 
            href="#about" 
            className="px-3 py-1.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--bg-secondary)] rounded-lg transition-colors"
          >
            About
          </a>
          <a 
            href="#experience" 
            className="px-3 py-1.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--bg-secondary)] rounded-lg transition-colors"
          >
            Experience
          </a>
          <a 
            href="#education" 
            className="px-3 py-1.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--bg-secondary)] rounded-lg transition-colors"
          >
            Education
          </a>

          {/* Portfolio Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsPortfolioDropdownOpen(true)}
            onMouseLeave={() => setIsPortfolioDropdownOpen(false)}
          >
            <a 
              href="#projects" 
              className="px-3 py-1.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--bg-secondary)] rounded-lg transition-colors inline-flex items-center gap-1"
            >
              <span>Portfolio</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </a>

            {isPortfolioDropdownOpen && (
              <div className="absolute top-full left-0 w-48 py-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl shadow-xl z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <a 
                  href="#projects" 
                  onClick={() => onSelectProjectCategory && onSelectProjectCategory("All")}
                  className="block px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--bg-secondary)]"
                >
                  All Projects
                </a>
                <a 
                  href="#projects" 
                  onClick={() => onSelectProjectCategory && onSelectProjectCategory("3D Work")}
                  className="block px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--bg-secondary)]"
                >
                  🖨️ 3D Modeling & Print
                </a>
                <a 
                  href="#projects" 
                  onClick={() => onSelectProjectCategory && onSelectProjectCategory("2D Work")}
                  className="block px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--bg-secondary)]"
                >
                  📦 2D & E-Commerce
                </a>
                <a 
                  href="#projects" 
                  onClick={() => onSelectProjectCategory && onSelectProjectCategory("Tech & AI")}
                  className="block px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--bg-secondary)]"
                >
                  🤖 Tech & AI Tools
                </a>
              </div>
            )}
          </div>

          <a 
            href="#dashboard" 
            className="px-3 py-1.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--bg-secondary)] rounded-lg transition-colors"
          >
            Dashboard
          </a>
          <a 
            href="#contact" 
            className="px-3 py-1.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--bg-secondary)] rounded-lg transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right Actions Toolbar */}
        <div className="flex items-center gap-2.5">
          
          {/* Live Status Pill */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--border)] text-xs font-medium text-[var(--badge-text)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Work</span>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={cycleTheme}
            title={`Current Theme: ${currentTheme}. Click to switch theme.`}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-highlight)] transition-all hover:scale-105"
            aria-label="Toggle Theme"
          >
            {themeIcons[currentTheme]}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-primary)]"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg-overlay)] backdrop-blur-lg border-b border-[var(--border)] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-[var(--border)]">
            <span className="text-xs font-mono text-[var(--text-muted)]">Navigation</span>
            <div className="flex items-center gap-1.5 text-xs text-[var(--badge-text)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Work</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <a 
              href="#about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 text-sm rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)]"
            >
              <Briefcase className="w-4 h-4 text-[var(--primary)]" />
              <span>About</span>
            </a>
            <a 
              href="#experience" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 text-sm rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)]"
            >
              <Layers className="w-4 h-4 text-[var(--primary)]" />
              <span>Experience</span>
            </a>
            <a 
              href="#education" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 text-sm rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)]"
            >
              <GraduationCap className="w-4 h-4 text-[var(--primary)]" />
              <span>Education</span>
            </a>
            <a 
              href="#projects" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 text-sm rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)]"
            >
              <Layers className="w-4 h-4 text-[var(--primary)]" />
              <span>Projects</span>
            </a>
            <a 
              href="#dashboard" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 text-sm rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)]"
            >
              <Activity className="w-4 h-4 text-[var(--primary)]" />
              <span>Dashboard</span>
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 text-sm rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)]"
            >
              <Mail className="w-4 h-4 text-[var(--primary)]" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
