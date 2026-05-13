import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Github, Linkedin, Mail, Download, ChevronRight, Sparkles } from "lucide-react";
import NeuralCanvas from "@components/common/NeuralCanvas";
import { PROFILE } from "@data/achievements";
import { useTheme } from "@context/ThemeContext";

const STATS = [
  { value: "15+", label: "Projects Built",   icon: "🚀" },
  { value: "9.10", label: "CGPA",            icon: "🎓" },
  { value: "3",   label: "Hackathons",       icon: "🏆" },
  { value: "500+", label: "GitHub Commits",  icon: "💻" },
];

const SOCIAL = [
  { icon: Github,   href: PROFILE.github,            label: "GitHub"   },
  { icon: Linkedin, href: PROFILE.linkedin,           label: "LinkedIn" },
  { icon: Mail,     href: `mailto:${PROFILE.email}`,  label: "Email"    },
];

const TECH_PILLS = ["React", "Node.js", "Python", "MongoDB", "LangChain", "FastAPI", "FAISS"];

export default function HeroSection() {
  const { isDark } = useTheme();

  const heroBg = isDark
    ? "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.12) 0%, transparent 60%), linear-gradient(160deg, #050810 0%, #0c1120 60%, #050810 100%)"
    : "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.07) 0%, transparent 60%), linear-gradient(160deg, #fafbff 0%, #eef0ff 60%, #fafbff 100%)";

  const cardBg = isDark ? "rgba(255,255,255,0.035)" : "rgba(255,255,255,0.9)";
  const cardBorder = isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(99,102,241,0.12)";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: heroBg }}
    >
      {/* Neural network background */}
      <NeuralCanvas />

      {/* Ambient glow orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%", right: "15%",
          width: "480px", height: "480px",
          background: "radial-gradient(circle, rgba(99,102,241,0.07), transparent 70%)",
          filter: "blur(80px)",
          borderRadius: "50%",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "25%", left: "10%",
          width: "380px", height: "380px",
          background: "radial-gradient(circle, rgba(34,211,238,0.05), transparent 70%)",
          filter: "blur(60px)",
          borderRadius: "50%",
        }}
      />

      <div
        className="relative z-10 w-full max-w-7xl mx-auto py-28 sm:py-32 md:py-36"
        style={{ paddingLeft: "clamp(1rem, 4vw, 2rem)", paddingRight: "clamp(1rem, 4vw, 2rem)" }}
      >
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Left — Text content */}
          <div className="lg:col-span-3 space-y-6">

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
                style={{
                  background: "rgba(99,102,241,0.1)",
                  border: "1px solid rgba(99,102,241,0.25)",
                  color: isDark ? "#60a5fa" : "#1d4ed8",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"
                  style={{ boxShadow: "0 0 6px rgba(52,211,153,0.8)", animation: "pulse 2s infinite" }}
                />
                2027 Graduate · Open to Opportunities
              </span>
            </motion.div>

            {/* Name + headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div
                style={{
                  fontSize: "clamp(0.9rem, 2vw, 1rem)",
                  color: isDark ? "#64748b" : "#4b5563",
                  fontWeight: 500,
                  marginBottom: "0.5rem",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                Hi, I'm
              </div>
              <h1
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.0,
                  letterSpacing: "-0.04em",
                  marginBottom: "0.15em",
                }}
              >
                <span className="gradient-name">
                  Sarth Narola
                </span>
              </h1>
            </motion.div>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2"
              style={{ minHeight: "34px" }}
            >
              <span style={{ color: isDark ? "#2563eb" : "#1d4ed8", fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>
                ❯
              </span>
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",   2400,
                  "AI Systems Engineer",    2400,
                  "Final Year @ Nirma",     2000,
                  "Full-Stack + LangChain", 2200,
                ]}
                wrapper="span"
                speed={60}
                repeat={Infinity}
                style={{
                  fontSize: "clamp(0.9rem, 2.2vw, 1.15rem)",
                  fontFamily: "'JetBrains Mono', monospace",
                  color: isDark ? "#60a5fa" : "#1d4ed8",
                  fontWeight: 500,
                }}
              />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                color: isDark ? "#94a3b8" : "#6b7280",
                lineHeight: 1.8,
                maxWidth: "520px",
                fontSize: "clamp(0.9rem, 2vw, 1.025rem)",
              }}
            >
              Building scalable, production-ready systems at the intersection of{" "}
              <span style={{ color: isDark ? "#f0f4ff" : "#0f0f23", fontWeight: 600 }}>
                modern web
              </span>{" "}
              and{" "}
              <span style={{ color: isDark ? "#f0f4ff" : "#0f0f23", fontWeight: 600 }}>
                AI-integrated pipelines
              </span>
              . Selected for Amazon ML Summer School 2025.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 pt-1"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(99,102,241,0.6)" }}
                whileTap={{ scale: 0.96 }}
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
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
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
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
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3 pt-1"
            >
              <span
                style={{
                  fontSize: "0.7rem",
                  color: isDark ? "#475569" : "#9ca3af",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontWeight: 700,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                Find me
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
                      className="w-10 h-10 flex items-center justify-center rounded-xl no-min-size transition-all"
                      style={{
                        border: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(99,102,241,0.12)",
                        background: isDark ? "rgba(255,255,255,0.035)" : "rgba(255,255,255,0.8)",
                        color: isDark ? "#64748b" : "#9ca3af",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = s.label === "LinkedIn" ? "#60a5fa" : s.label === "GitHub" ? (isDark ? "#f0f4ff" : "#0f0f23") : "#60a5fa";
                        e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)";
                        e.currentTarget.style.background = "rgba(99,102,241,0.07)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = isDark ? "#64748b" : "#9ca3af";
                        e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.07)" : "rgba(99,102,241,0.12)";
                        e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.035)" : "rgba(255,255,255,0.8)";
                      }}
                    >
                      <Icon size={16} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right — Stats + cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.45 + i * 0.07 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="rounded-2xl p-4 text-center border transition-all"
                  style={{
                    background: cardBg,
                    border: cardBorder,
                    boxShadow: isDark ? "0 4px 24px rgba(0,0,0,0.3)" : "0 4px 24px rgba(99,102,241,0.06)",
                  }}
                >
                  <div style={{ fontSize: "1.4rem", marginBottom: "0.3rem" }}>{stat.icon}</div>
                  <div
                    className="font-display font-black"
                    style={{
                      fontSize: "clamp(1.4rem, 3.5vw, 1.9rem)",
                      background: "linear-gradient(135deg, #60a5fa, #22d3ee)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: isDark ? "#64748b" : "#9ca3af",
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                      marginTop: "2px",
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
              transition={{ delay: 0.7 }}
              whileHover={{ y: -3 }}
              className="rounded-2xl p-4 border transition-all"
              style={{
                background: isDark ? "rgba(99,102,241,0.06)" : "rgba(99,102,241,0.04)",
                border: isDark ? "1px solid rgba(99,102,241,0.18)" : "1px solid rgba(99,102,241,0.15)",
              }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-base"
                  style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}
                >
                  🎓
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    style={{
                      fontSize: "clamp(0.875rem, 2vw, 0.975rem)",
                      fontWeight: 700,
                      color: isDark ? "#f0f4ff" : "#0f0f23",
                      fontFamily: "'Syne', sans-serif",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Nirma University
                  </div>
                  <div style={{ fontSize: "0.78rem", color: isDark ? "#64748b" : "#9ca3af", marginTop: "2px" }}>
                    B.Tech CSE · 2022–2027
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    color: "#60a5fa",
                    padding: "3px 10px",
                    borderRadius: "8px",
                    background: "rgba(99,102,241,0.15)",
                    border: "1px solid rgba(99,102,241,0.3)",
                    whiteSpace: "nowrap",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  9.10
                </span>
              </div>

              {/* Tech stack pills */}
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
              transition={{ delay: 0.85 }}
              whileHover={{ y: -3 }}
              className="rounded-2xl p-4 border flex items-start gap-3 transition-all"
              style={{
                background: isDark ? "rgba(245,158,11,0.05)" : "rgba(245,158,11,0.04)",
                border: isDark ? "1px solid rgba(245,158,11,0.2)" : "1px solid rgba(245,158,11,0.22)",
              }}
            >
              <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>🏅</span>
              <div>
                <div
                  style={{
                    fontSize: "clamp(0.8rem, 2vw, 0.925rem)",
                    fontWeight: 700,
                    color: "#f59e0b",
                    letterSpacing: "-0.01em",
                    fontFamily: "'Syne', sans-serif",
                  }}
                >
                  Amazon ML Summer School 2025
                </div>
                <div style={{ fontSize: "0.78rem", color: isDark ? "#64748b" : "#9ca3af", marginTop: "3px" }}>
                  Selected from national pool of top engineering students
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 no-min-size hidden lg:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to About section"
      >
        <span
          style={{
            fontSize: "0.68rem",
            color: isDark ? "#475569" : "#9ca3af",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontWeight: 700,
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          Scroll
        </span>
        <ArrowDown size={14} style={{ color: isDark ? "#475569" : "#9ca3af" }} />
      </motion.button>
    </section>
  );
}
