import { Github, Linkedin, Mail, MapPin, Code2 } from "lucide-react";
import { PROFILE } from "@data/achievements";
import { useTheme } from "@context/ThemeContext";

const YEAR = new Date().getFullYear();

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Hackathons", href: "#hackathon" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certificates", href: "#certificates" },
  { label: "Competitive Programming", href: "#competitive-programming" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL = [
  {
    icon: Github,
    href: PROFILE.github,
    label: "GitHub",
    hoverColor: "#f1f5f9",
  },
  {
    icon: Linkedin,
    href: PROFILE.linkedin,
    label: "LinkedIn",
    hoverColor: "#60a5fa",
  },
  {
    icon: Mail,
    href: `mailto:${PROFILE.email}`,
    label: "Email",
    hoverColor: "#93c5fd",
  },
];

export default function Footer() {
  const { isDark } = useTheme();

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const footerBg = isDark ? "rgba(8,12,25,0.97)" : "rgba(241,245,249,0.97)";
  const footerBorder = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)";
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.7)";
  const cardBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";

  return (
    <footer
      className="border-t"
      style={{ background: footerBg, borderColor: footerBorder }}
      role="contentinfo"
      aria-label="Footer"
    >
      <div
        className="max-w-7xl mx-auto py-12 sm:py-14"
        style={{
          paddingLeft: "clamp(1rem, 4vw, 2rem)",
          paddingRight: "clamp(1rem, 4vw, 2rem)",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 text-center">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center justify-center mb-4 mx-auto hover:opacity-80 transition-opacity"
              aria-label="Scroll to top"
            >
              <div>
                <div
                  style={{
                    fontFamily: "'Outfit','Inter',sans-serif",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    color: isDark ? "#f1f5f9" : "#0f172a",
                  }}
                >
                  {PROFILE.name}
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  {PROFILE.title}
                </div>
              </div>
            </button>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-muted)",
                lineHeight: 1.7,
                maxWidth: "28rem",
                margin: "0 auto 1.25rem",
              }}
            >
              Final-year B.Tech CSE student at Nirma University. Building
              production-ready web &amp; AI systems. Open to full-time SDE roles
              in 2027.
            </p>
            {/* Social Icons */}
            <div className="flex items-center justify-center gap-2.5">
              {SOCIAL.map((social) => {
                const SocialIcon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center rounded-xl border transition-all hover:scale-110"
                    style={{
                      borderColor: cardBorder,
                      background: cardBg,
                      color: "var(--text-muted)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = social.hoverColor;
                      e.currentTarget.style.borderColor = isDark
                        ? "rgba(255,255,255,0.2)"
                        : "rgba(37,99,235,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-muted)";
                      e.currentTarget.style.borderColor = cardBorder;
                    }}
                  >
                    <SocialIcon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <h4
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: isDark ? "#cbd5e1" : "#334155",
                marginBottom: "1.25rem",
              }}
            >
              Navigate
            </h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: isDark ? "#cbd5e1" : "#334155",
                marginBottom: "1.25rem",
              }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center justify-center gap-2 hover:text-blue-400 transition-colors"
                  style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}
                >
                  <Mail size={13} />
                  {PROFILE.email}
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 transition-colors hover:text-blue-400"
                  style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}
                >
                  <Github size={13} />
                  github.com/Sarth00718
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 hover:text-blue-400 transition-colors"
                  style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}
                >
                  <Linkedin size={13} />
                  sarth-narola-223002323
                </a>
              </li>
              <li
                className="flex items-center justify-center gap-2"
                style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}
              >
                <MapPin size={13} />
                Surat, Gujarat, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-center gap-3 text-center"
          style={{ borderColor: footerBorder }}
        >
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            © {YEAR} {PROFILE.name} · All rights reserved
          </p>
          <p
            className="flex items-center justify-center gap-1.5"
            style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}
          >
            Built with <Code2 size={12} className="text-blue-500 inline" />{" "}
            React + Vite + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
