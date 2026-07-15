import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { PROFILE } from "@data/achievements";
import { useTheme } from "@context/ThemeContext";

const STATS = [
  { value: "15+", label: "Projects Built" },
  { value: "9.11", label: "CGPA" },
  { value: "3", label: "Hackathons" },
  { value: "500+", label: "GitHub Commits" },
];

const SOCIAL = [
  { icon: Github, href: PROFILE.github, label: "GitHub" },
  { icon: Linkedin, href: PROFILE.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${PROFILE.email}`, label: "Email" },
];

const TECH_PILLS = [
  "React", "Node.js", "Python", "MongoDB", "LangChain", "FastAPI", "FAISS",
];

export default function HeroSection() {
  const { isDark } = useTheme();

  const heroBg = isDark
    ? "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(59,130,246,0.08) 0%, transparent 60%), linear-gradient(160deg, #05080f 0%, #0a0e1a 60%, #05080f 100%)"
    : "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(59,130,246,0.05) 0%, transparent 60%), linear-gradient(160deg, #fafbfd 0%, #f0f2f8 60%, #fafbfd 100%)";

  const pillBg = isDark ? "rgba(255,255,255,0.035)" : "rgba(255,255,255,0.88)";
  const pillBorder = isDark ? "rgba(255,255,255,0.07)" : "rgba(59,130,246,0.1)";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: heroBg }}
    >


      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "15%",
          right: "10%",
          width: "420px",
          height: "420px",
          background: isDark
            ? "radial-gradient(circle, rgba(59,130,246,0.06), transparent 70%)"
            : "radial-gradient(circle, rgba(59,130,246,0.04), transparent 70%)",
          filter: "blur(80px)",
          borderRadius: "50%",
        }}
      />

      <div
        className="relative z-10 w-full max-w-7xl mx-auto"
        style={{
          padding: "8rem clamp(1rem, 4vw, 2rem) 4rem",
        }}
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left — Text content (8 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.7rem] font-bold tracking-widest uppercase"
                style={{
                  background: isDark ? "rgba(59,130,246,0.08)" : "rgba(59,130,246,0.06)",
                  border: `1px solid ${isDark ? "rgba(59,130,246,0.2)" : "rgba(59,130,246,0.18)"}`,
                  color: "#60a5fa",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{
                    background: "#34d399",
                    boxShadow: "0 0 6px rgba(52,211,153,0.8)",
                  }}
                />
                2027 Graduate · Open to Opportunities
              </span>
            </motion.div>

            {/* Greeting + Name */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="mb-1"
                style={{
                  fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)",
                  color: isDark ? "#64748b" : "#9ca3af",
                  fontWeight: 500,
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.05em",
                }}
              >
                Hi, I'm
              </div>
              <h1
                className="font-sans"
                style={{
                  fontFamily: '"Inter", system-ui, sans-serif',
                  fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
                  fontWeight: 900,
                  lineHeight: 0.95,
                  letterSpacing: "-0.05em",
                }}
              >
                <span
                  style={{
                    backgroundImage: "linear-gradient(135deg, #bfdbfe 0%, #3b82f6 50%, #22d3ee 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Sarth Narola
                </span>
              </h1>
            </motion.div>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center gap-2"
              style={{ minHeight: "32px" }}
            >
              <span style={{ color: "#60a5fa", fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(0.8rem, 1.8vw, 0.95rem)" }}>
                ❯
              </span>
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  2400,
                  "AI Systems Engineer",
                  2400,
                  "Final Year @ Nirma",
                  2000,
                  "Full-Stack + LangChain",
                  2200,
                ]}
                wrapper="span"
                speed={60}
                repeat={Infinity}
                style={{
                  fontSize: "clamp(0.85rem, 2vw, 1.05rem)",
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#60a5fa",
                  fontWeight: 500,
                }}
              />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="max-w-lg"
              style={{
                color: isDark ? "#8892a4" : "#6b7280",
                lineHeight: 1.8,
                fontSize: "clamp(0.875rem, 2vw, 1rem)",
              }}
            >
              Building scalable, production-ready systems at the intersection of{" "}
              <span style={{ color: isDark ? "#e8ecf4" : "#0f0f1a", fontWeight: 600 }}>
                modern web
              </span>{" "}
              and{" "}
              <span style={{ color: isDark ? "#e8ecf4" : "#0f0f1a", fontWeight: 600 }}>
                AI-integrated pipelines
              </span>
              . Selected for Amazon ML Summer School 2025.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-3 pt-1"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(59,130,246,0.5)" }}
                whileTap={{ scale: 0.96 }}
                onClick={() =>
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary"
                aria-label="View Projects"
              >
                <Sparkles size={15} />
                View Projects
                <ChevronRight size={15} />
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary"
                aria-label="Download Resume"
              >
                <Download size={14} />
                Resume
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-outline"
                aria-label="Contact"
              >
                <Mail size={14} />
                Let's Talk
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center gap-3 pt-1"
            >
              <span
                style={{
                  fontSize: "0.65rem",
                  color: isDark ? "#475569" : "#9ca3af",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontWeight: 700,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                Connect
              </span>
              <div className="flex gap-2">
                {SOCIAL.map((s) => {
                  const Icon = s.icon;
                  return (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      whileHover={{ scale: 1.15, y: -2 }}
                      className="w-9 h-9 flex items-center justify-center rounded-xl no-min-size"
                      style={{
                        border: `1px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(59,130,246,0.12)"}`,
                        background: isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.8)",
                        color: isDark ? "#64748b" : "#9ca3af",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#60a5fa";
                        e.currentTarget.style.borderColor = "rgba(59,130,246,0.3)";
                        e.currentTarget.style.background = "rgba(59,130,246,0.07)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = isDark ? "#64748b" : "#9ca3af";
                        e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.07)" : "rgba(59,130,246,0.12)";
                        e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.8)";
                      }}
                    >
                      <Icon size={15} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right — Stats + cards (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.45 + i * 0.07,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-2xl p-4 text-center border"
                  style={{
                    background: pillBg,
                    border: `1px solid ${pillBorder}`,
                  }}
                >
                  <div
                    className="font-display font-black"
                    style={{
                      fontSize: "clamp(1.4rem, 3.5vw, 1.9rem)",
                      backgroundImage: "linear-gradient(135deg, #3b82f6, #2563eb)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      color: "transparent",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: isDark ? "#64748b" : "#9ca3af",
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                      marginTop: "2px",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* University card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
              className="rounded-2xl p-4 border"
              style={{
                background: isDark ? "rgba(59,130,246,0.04)" : "rgba(59,130,246,0.03)",
                border: `1px solid ${isDark ? "rgba(59,130,246,0.15)" : "rgba(59,130,246,0.12)"}`,
              }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-sm"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                    color: "#fff",
                  }}
                >
                  🎓
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    style={{
                      fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
                      fontWeight: 700,
                      color: isDark ? "#e8ecf4" : "#0f0f1a",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Nirma University
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: isDark ? "#64748b" : "#9ca3af",
                      marginTop: "2px",
                    }}
                  >
                    B.Tech CSE · 2022–2027
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 800,
                    color: "#60a5fa",
                    padding: "3px 10px",
                    borderRadius: "8px",
                    background: "rgba(59,130,246,0.12)",
                    border: "1px solid rgba(59,130,246,0.25)",
                    whiteSpace: "nowrap",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  9.11
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {TECH_PILLS.map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </motion.div>

            {/* Amazon ML badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
              className="rounded-2xl p-4 border flex items-start gap-3"
              style={{
                background: isDark ? "rgba(59,130,246,0.04)" : "rgba(59,130,246,0.03)",
                border: `1px solid ${isDark ? "rgba(59,130,246,0.15)" : "rgba(59,130,246,0.12)"}`,
              }}
            >
              <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>🏅</span>
              <div>
                <div
                  style={{
                    fontSize: "clamp(0.78rem, 2vw, 0.9rem)",
                    fontWeight: 700,
                    color: "#60a5fa",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Amazon ML Summer School 2025
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: isDark ? "#64748b" : "#9ca3af",
                    marginTop: "3px",
                  }}
                >
                  Selected from national pool of top engineering students
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
