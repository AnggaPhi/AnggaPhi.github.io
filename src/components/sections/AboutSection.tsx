import React from "react";
import { PERSONAL_INFO } from "../../data/portfolioData";
import { 
  Printer, 
  ShoppingBag, 
  Terminal, 
  Sparkles, 
  FileDown 
} from "lucide-react";

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-20 border-t border-[var(--border)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--border)] text-xs font-semibold text-[var(--badge-text)] font-mono">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Crafting Across Physical & Digital Real-Worlds
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base">
            Bridging 3D mesh modeling, organic sculpting, marketplace revenue operations, and autonomous AI tooling.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            <p>
              I'm <strong className="text-[var(--text-primary)]">{PERSONAL_INFO.name}</strong>, a multidisciplinary maker, e-commerce operator, and IT consultant based in <span className="text-[var(--primary)] font-semibold">Tangerang Selatan, Banten, Indonesia 🇮🇩</span>.
            </p>

            <p>
              My background sits at the unique intersection of hardware and digital software. In 3D creation, I specialize in <strong>3D modeling and 3D sculpting</strong> using Blender v3.8+ and slicing with Ultimaker Cura, printing functional prototypes on my Anycubic Kobra Go with tight <strong className="font-mono text-[var(--text-primary)]">±0.15mm</strong> tolerances measured via digital calipers.
            </p>

            <p>
              In digital commerce, I architect multi-channel growth systems across <strong className="text-[var(--text-primary)]">Shopee, Tokopedia, and TikTok Shop</strong>. At Rumah Tanah Liat Citra, I combined physical packaging innovation (interactive QR tutorial cards) with storefront SEO to enhance conversion rates and customer satisfaction.
            </p>

            <p>
              In modern computing, I engineer structured prompt architectures with Claude and LLMs to automate cataloging workflows, while drawing upon years of hands-on institutional IT infrastructure administration and ICT teaching experience.
            </p>

            <div className="pt-3">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--primary)] text-white font-semibold text-xs transition-all hover:scale-105 shadow-sm"
              >
                <FileDown className="w-4 h-4" />
                <span>View Formal CV / Credentials</span>
              </button>
            </div>
          </div>

          {/* Cards & Stats Column */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Core Pillars Card */}
            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] shadow-sm space-y-4">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
                Core Competency Pillars
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[var(--bg-secondary)] text-[var(--primary)] shrink-0">
                    <Printer className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-primary)]">3D Modeling & Sculpting</h4>
                    <p className="text-xs text-[var(--text-secondary)]">Blender v3.8+ polygon modeling & mesh sculpting, Cura slicing, Anycubic Kobra Go FDM, caliper tolerances.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[var(--bg-secondary)] text-[var(--primary)] shrink-0">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-primary)]">E-Commerce & CRO</h4>
                    <p className="text-xs text-[var(--text-secondary)]">Shopee, Tokopedia, TikTok Shop, multi-channel cataloging, Meta Ads.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[var(--bg-secondary)] text-[var(--primary)] shrink-0">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-primary)]">AI Prompt Engineering</h4>
                    <p className="text-xs text-[var(--text-secondary)]">Zero-shot, few-shot pipelines, structured schema generation, Claude workflows.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[var(--bg-secondary)] text-[var(--primary)] shrink-0">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-primary)]">IT Infrastructure</h4>
                    <p className="text-xs text-[var(--text-secondary)]">Network administration, hardware repairs, lab maintenance, 99.8% uptime.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Fast Facts */}
            <div className="grid grid-cols-2 gap-3 font-mono text-center">
              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)]/50 space-y-1">
                <div className="text-2xl font-bold text-[var(--primary)]">±0.15mm</div>
                <div className="text-[10px] text-[var(--text-muted)] uppercase">Tolerance Standard</div>
              </div>
              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)]/50 space-y-1">
                <div className="text-2xl font-bold text-[var(--primary)]">+35%</div>
                <div className="text-[10px] text-[var(--text-muted)] uppercase">Storefront Conversion</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
