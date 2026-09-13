import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { LinkedinIcon } from "../ui/Icons";
import { PERSONAL_INFO } from "../../data/portfolioData";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#2E7D52", "#5BAA6F", "#A8E6B4", "#7FCD91"],
        });
      } catch (err) {
        // graceful fallback if canvas-confetti fails
      }
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 border-t border-[var(--border)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--border)] text-xs font-semibold text-[var(--badge-text)] font-mono">
            <span>06. GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Let's Collaborate & Build
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base">
            I am actively open to new career opportunities, freelance consulting, and technical collaborations in E-Commerce, 3D Prototype Engineering, AI Workflows, and IT Support.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Email */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-highlight)] transition-all hover:-translate-y-1 hover:shadow-lg text-center space-y-2 group block"
          >
            <div className="w-12 h-12 mx-auto rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-[var(--primary)]" />
            </div>
            <h3 className="text-sm font-bold text-[var(--text-primary)]">Email</h3>
            <p className="text-xs text-[var(--text-secondary)] truncate font-mono">
              {PERSONAL_INFO.email}
            </p>
          </a>

          {/* Card 2: Phone / WhatsApp */}
          <a
            href="https://wa.me/62859106689010"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-highlight)] transition-all hover:-translate-y-1 hover:shadow-lg text-center space-y-2 group block"
          >
            <div className="w-12 h-12 mx-auto rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 text-emerald-500" />
            </div>
            <h3 className="text-sm font-bold text-[var(--text-primary)]">WhatsApp / Phone</h3>
            <p className="text-xs text-[var(--text-secondary)] font-mono">
              {PERSONAL_INFO.phone}
            </p>
          </a>

          {/* Card 3: LinkedIn */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-highlight)] transition-all hover:-translate-y-1 hover:shadow-lg text-center space-y-2 group block"
          >
            <div className="w-12 h-12 mx-auto rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] flex items-center justify-center group-hover:scale-110 transition-transform">
              <LinkedinIcon className="w-5 h-5 text-[#0A66C2]" />
            </div>
            <h3 className="text-sm font-bold text-[var(--text-primary)]">LinkedIn</h3>
            <p className="text-xs text-[var(--text-secondary)] truncate font-mono">
              in/anggaprawira
            </p>
          </a>

          {/* Card 4: Location */}
          <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] text-center space-y-2">
            <div className="w-12 h-12 mx-auto rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] flex items-center justify-center">
              <MapPin className="w-5 h-5 text-amber-500" />
            </div>
            <h3 className="text-sm font-bold text-[var(--text-primary)]">Location</h3>
            <p className="text-xs text-[var(--text-secondary)]">
              Tangerang Selatan, Banten 🇮🇩
            </p>
          </div>
        </div>

        {/* Message Form */}
        <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] shadow-xl">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                Message Sent Successfully!
              </h3>
              <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
                Thank you for reaching out, <span className="font-semibold text-[var(--primary)]">{formData.name}</span>! I will review your message and reply via <span className="font-mono text-xs">{formData.email}</span> shortly.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[var(--border-highlight)] text-xs font-semibold text-[var(--text-primary)] transition-all hover:scale-105"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-center pb-2">
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  Feel free to inquire about 3D printing jobs, marketplace scaling, or IT consults.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[var(--text-secondary)] font-mono">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--primary)] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[var(--text-secondary)] font-mono">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--primary)] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[var(--text-secondary)] font-mono">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. 3D Prototype Inquiry / E-Commerce Consulting"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--primary)] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[var(--text-secondary)] font-mono">
                  Message Body *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, timeline, or question..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--primary)] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[var(--primary)] hover:opacity-95 text-white font-bold text-sm shadow-md transition-all hover:scale-[1.01] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
