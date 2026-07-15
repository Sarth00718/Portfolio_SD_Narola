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
  { icon: Github,   href: PROFILE.github,           label: "GitHub" },
  { icon: Linkedin, href: PROFILE.linkedin,          label: "LinkedIn" },
  { icon: Mail,     href: `mailto:${PROFILE.email}`, label: "Email" },
];

export default function Footer() {
  const { isDark } = useTheme();

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="border-t"
      style={{
        background: isDark ? "rgba(5,8,15,0.97)" : "rgba(250,251,253,0.97)",
        borderColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(59,130,246,0.08)",
      }}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto py-12 sm:py-14" style={{ padding: "3rem clamp(1rem,4vw,2rem)" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center font-display font-black text-sm"
                style={{ background: "linear-gradient(135deg, #3b82f6, #2563eb)", color: "#fff", boxShadow: "0 4px 12px rgba(59,130,246,0.3)" }}>
                SN
              </div>
              <span className="font-display font-bold" style={{ fontSize: "1.05rem", letterSpacing: "-0.03em", color: isDark ? "#e8ecf4" : "#0f0f1a" }}>
                Sarth Narola
              </span>
            </div>
            <p style={{ fontSize: "0.85rem", color: isDark ? "#64748b" : "#9ca3af", lineHeight: 1.65, maxWidth: "240px" }}>
              Full Stack Developer & AI Engineer building production-ready systems.
            </p>
            <div className="flex gap-2">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer" aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 flex items-center justify-center rounded-xl no-min-size"
                  style={{
                    background: isDark ? "rgba(255,255,255,0.035)" : "rgba(59,130,246,0.04)",
                    border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(59,130,246,0.1)"}`,
                    color: isDark ? "#64748b" : "#9ca3af",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#60a5fa"; e.currentTarget.style.borderColor = "rgba(59,130,246,0.25)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = isDark ? "#64748b" : "#9ca3af"; e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.06)" : "rgba(59,130,246,0.1)"; }}
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: isDark ? "#475569" : "#9ca3af", marginBottom: "1rem", fontFamily: "'JetBrains Mono', monospace" }}>
              Navigate
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {QUICK_LINKS.map((link) => (
                <button key={link.label} onClick={() => scrollTo(link.href)}
                  className="text-left no-min-size group flex items-center gap-1"
                  style={{
                    fontSize: "0.85rem", color: isDark ? "#64748b" : "#9ca3af",
                    background: "none", border: "none", cursor: "pointer",
                    padding: "0.15rem 0", minHeight: "auto",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#60a5fa"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = isDark ? "#64748b" : "#9ca3af"; }}
                >
                  <ArrowUpRight size={11} style={{ opacity: 0, transition: "opacity 0.2s" }} className="group-hover:opacity-100" />
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Status */}
          <div>
            <h4 style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: isDark ? "#475569" : "#9ca3af", marginBottom: "1rem", fontFamily: "'JetBrains Mono', monospace" }}>
              Status
            </h4>
            <div className="rounded-2xl p-4 border"
              style={{ background: isDark ? "rgba(59,130,246,0.04)" : "rgba(59,130,246,0.03)", borderColor: isDark ? "rgba(59,130,246,0.12)" : "rgba(59,130,246,0.1)" }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full" style={{ background: "#34d399", boxShadow: "0 0 6px rgba(52,211,153,0.8)" }} />
                <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#34d399" }}>Available for Opportunities</span>
              </div>
              <p style={{ fontSize: "0.78rem", color: isDark ? "#64748b" : "#9ca3af" }}>
                Open to SDE, Full Stack, and AI/ML roles. Remote, hybrid, or on-site.
              </p>
            </div>
          </div>
        </div>

        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.15), transparent)" }} />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
          <p style={{ fontSize: "0.78rem", color: isDark ? "#475569" : "#9ca3af" }}>
            &copy; {YEAR} Sarth Narola. Built with{" "}
            <Heart size={11} style={{ display: "inline", color: "#2563eb", verticalAlign: "middle" }} />{" "}
            using React + Vite + Tailwind.
          </p>
          <p style={{ fontSize: "0.72rem", color: isDark ? "#475569" : "#9ca3af", fontFamily: "'JetBrains Mono', monospace" }}>
            Roll No. {PROFILE.rollNo}
          </p>
        </div>
      </div>
    </footer>
  );
}
