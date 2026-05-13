import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, Heart } from "lucide-react";
import { PROFILE } from "@data/achievements";
import { useTheme } from "@context/ThemeContext";

const YEAR = new Date().getFullYear();

const QUICK_LINKS = [
  { label: "About",       href: "#about" },
  { label: "Projects",    href: "#projects" },
  { label: "Hackathons",  href: "#hackathon" },
  { label: "Skills",      href: "#skills" },
  { label: "Achievements",href: "#achievements" },
  { label: "Certificates",href: "#certificates" },
  { label: "CP",          href: "#competitive-programming" },
  { label: "Contact",     href: "#contact" },
];

const SOCIAL = [
  { icon: Github,   href: PROFILE.github,           label: "GitHub",   hoverColor: "#f0f4ff" },
  { icon: Linkedin, href: PROFILE.linkedin,          label: "LinkedIn", hoverColor: "#60a5fa" },
  { icon: Mail,     href: `mailto:${PROFILE.email}`, label: "Email",    hoverColor: "#93c5fd" },
];

export default function Footer() {
  const { isDark } = useTheme();

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer
      className="border-t"
      style={{
        background: isDark ? "rgba(5,8,16,0.97)" : "rgba(250,251,255,0.97)",
        borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(99,102,241,0.1)",
      }}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto py-12 sm:py-14" style={{ padding: "3rem clamp(1rem,4vw,2rem)" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-display font-black text-sm"
                style={{
                  background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                  color: "#fff",
                  boxShadow: "0 4px 12px rgba(99,102,241,0.35)",
                }}
              >
                SN
              </div>
              <span
                className="font-display font-bold"
                style={{
                  fontSize: "1.1rem",
                  letterSpacing: "-0.03em",
                  color: isDark ? "#f0f4ff" : "#0f0f23",
                }}
              >
                Sarth Narola
              </span>
            </div>
            <p style={{ fontSize: "0.875rem", color: isDark ? "#64748b" : "#9ca3af", lineHeight: 1.65, maxWidth: "240px" }}>
              Full Stack Developer & AI Engineer building production-ready systems.
            </p>
            <div className="flex gap-2">
              {SOCIAL.map(({ icon: Icon, href, label, hoverColor }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 flex items-center justify-center rounded-xl no-min-size transition-all"
                  style={{
                    background: isDark ? "rgba(255,255,255,0.04)" : "rgba(99,102,241,0.05)",
                    border: `1px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(99,102,241,0.1)"}`,
                    color: isDark ? "#64748b" : "#9ca3af",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = hoverColor;
                    e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isDark ? "#64748b" : "#9ca3af";
                    e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.07)" : "rgba(99,102,241,0.1)";
                  }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: isDark ? "#475569" : "#9ca3af",
                marginBottom: "1rem",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Navigate
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {QUICK_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left no-min-size group flex items-center gap-1 transition-colors"
                  style={{
                    fontSize: "0.875rem",
                    color: isDark ? "#64748b" : "#9ca3af",
                    fontFamily: "'DM Sans', sans-serif",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "0.15rem 0",
                    minHeight: "auto",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = isDark ? "#60a5fa" : "#1d4ed8"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = isDark ? "#64748b" : "#9ca3af"; }}
                >
                  <ArrowUpRight size={12} style={{ opacity: 0, transition: "opacity 0.2s" }}
                    className="group-hover:opacity-100"
                  />
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Status */}
          <div>
            <h4
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: isDark ? "#475569" : "#9ca3af",
                marginBottom: "1rem",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Status
            </h4>
            <div
              className="rounded-2xl p-4 border"
              style={{
                background: isDark ? "rgba(99,102,241,0.06)" : "rgba(99,102,241,0.04)",
                border: isDark ? "1px solid rgba(99,102,241,0.18)" : "1px solid rgba(99,102,241,0.12)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="w-2 h-2 rounded-full bg-emerald-400"
                  style={{ boxShadow: "0 0 6px rgba(52,211,153,0.8)" }}
                />
                <span style={{ fontSize: "0.825rem", fontWeight: 700, color: "#34d399" }}>
                  Available for Opportunities
                </span>
              </div>
              <p style={{ fontSize: "0.8rem", color: isDark ? "#64748b" : "#9ca3af" }}>
                Open to SDE, Full Stack, and AI/ML roles. Remote, hybrid, or on-site.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)" }} />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
          <p style={{ fontSize: "0.8rem", color: isDark ? "#475569" : "#9ca3af" }}>
            © {YEAR} Sarth Narola. Built with{" "}
            <Heart size={12} style={{ display: "inline", color: "#f87171", verticalAlign: "middle" }} />{" "}
            using React + Vite + Tailwind.
          </p>
          <p
            style={{
              fontSize: "0.75rem",
              color: isDark ? "#475569" : "#9ca3af",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Roll No. {PROFILE.rollNo}
          </p>
        </div>
      </div>
    </footer>
  );
}
