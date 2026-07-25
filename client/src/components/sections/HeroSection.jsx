import { useState, useEffect, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { PROFILE } from "@data/achievements";
import { useTheme } from "@context/ThemeContext";
import { letterStagger, letterVariant, cinematicSlideUp } from "@components/common/AnimationVariants";

import Scene3D from "@components/three/Scene3D";
import FloatingGeometry from "@components/three/FloatingGeometry";
import ParticleField from "@components/three/ParticleField";

const STATS = [
  { value: "15+", label: "Projects Built", icon: "🚀" },
  { value: "9.11", label: "CGPA", icon: "🎓" },
  { value: "3", label: "Hackathons", icon: "⚡" },
  { value: "500+", label: "GitHub Commits", icon: "💻" },
];

const SOCIAL = [
  { icon: Github, href: PROFILE.github, label: "GitHub" },
  { icon: Linkedin, href: PROFILE.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${PROFILE.email}`, label: "Email" },
];

const TECH_PILLS = [
  "React", "Node.js", "Python", "MongoDB", "LangChain", "FastAPI", "FAISS",
];

const NAME_LETTERS = "Sarth Narola".split("");

export default function HeroSection() {
  const { isDark } = useTheme();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouse = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const heroBg = isDark
    ? "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(59,130,246,0.1) 0%, transparent 60%), linear-gradient(160deg, #05080f 0%, #0a0e1a 60%, #05080f 100%)"
    : "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(59,130,246,0.06) 0%, transparent 60%), linear-gradient(160deg, #fafbfd 0%, #f0f2f8 60%, #fafbfd 100%)";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: heroBg }}
    >
      {/* 3D Three.js Background */}
      {mounted && (
        <Scene3D
          camera={{ position: [0, 0, 8], fov: 50 }}
          style={{ opacity: isDark ? 0.7 : 0.4 }}
        >
          <FloatingGeometry scale={3.5} position={[4, 0, -2]} />
          <ParticleField spread={12} size={0.015} color="#60a5fa" />
        </Scene3D>
      )}

      {/* Ambient glow orbs */}
      <motion.div
        className="absolute pointer-events-none"
        animate={{
          x: mousePos.x * 0.5,
          y: mousePos.y * 0.5,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 100 }}
        style={{
          top: "10%",
          right: "15%",
          width: "500px",
          height: "500px",
          background: isDark
            ? "radial-gradient(circle, rgba(59,130,246,0.08), transparent 70%)"
            : "radial-gradient(circle, rgba(59,130,246,0.05), transparent 70%)",
          filter: "blur(80px)",
          borderRadius: "50%",
        }}
      />
      <motion.div
        className="absolute pointer-events-none"
        animate={{
          x: mousePos.x * -0.3,
          y: mousePos.y * -0.3,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 100 }}
        style={{
          bottom: "20%",
          left: "10%",
          width: "350px",
          height: "350px",
          background: isDark
            ? "radial-gradient(circle, rgba(34,211,238,0.05), transparent 70%)"
            : "radial-gradient(circle, rgba(34,211,238,0.03), transparent 70%)",
          filter: "blur(60px)",
          borderRadius: "50%",
        }}
      />

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto"
        style={{
          padding: "8rem clamp(1rem, 4vw, 2rem) 4rem",
        }}
        animate={{
          x: mousePos.x * 0.02,
          y: mousePos.y * 0.02,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 100 }}
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left — Text content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.7rem] font-bold tracking-widest uppercase"
                style={{
                  background: isDark ? "rgba(59,130,246,0.08)" : "rgba(59,130,246,0.06)",
                  border: `1px solid ${isDark ? "rgba(59,130,246,0.2)" : "rgba(59,130,246,0.18)"}`,
                  color: "#60a5fa",
                  fontFamily: "'JetBrains Mono', monospace",
                  backdropFilter: "blur(12px)",
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" style={{ boxShadow: "0 0 8px rgba(52,211,153,0.8)" }} />
                </span>
                2027 Graduate · Open to Opportunities
              </span>
            </motion.div>

            {/* Greeting + Name with letter stagger */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="mb-2"
                style={{
                  fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)",
                  color: isDark ? "#64748b" : "#9ca3af",
                  fontWeight: 500,
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.05em",
                }}
              >
                Hi, I'm
              </motion.div>

              <motion.h1
                className="font-sans"
                style={{
                  fontFamily: '"Inter", system-ui, sans-serif',
                  fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
                  fontWeight: 900,
                  lineHeight: 0.95,
                  letterSpacing: "-0.05em",
                }}
                variants={letterStagger}
                initial="hidden"
                animate="visible"
              >
                {NAME_LETTERS.map((letter, i) => (
                  <motion.span
                    key={i}
                    variants={letterVariant}
                    style={{
                      display: "inline-block",
                      backgroundImage: "linear-gradient(135deg, #bfdbfe 0%, #3b82f6 40%, #22d3ee 80%, #60a5fa 100%)",
                      backgroundSize: "200% 100%",
                      animation: "text-shimmer 4s linear infinite",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            {/* Typewriter role */}
            <motion.div
              variants={cinematicSlideUp}
              custom={3}
              initial="hidden"
              animate="visible"
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
              variants={cinematicSlideUp}
              custom={4}
              initial="hidden"
              animate="visible"
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
              variants={cinematicSlideUp}
              custom={5}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3 pt-1"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(59,130,246,0.5), 0 0 20px rgba(59,130,246,0.2)" }}
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
              variants={cinematicSlideUp}
              custom={6}
              initial="hidden"
              animate="visible"
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
                {SOCIAL.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      whileHover={{ scale: 1.15, y: -3, rotate: 5 }}
                      className="w-9 h-9 flex items-center justify-center rounded-xl no-min-size"
                      style={{
                        border: `1px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(59,130,246,0.12)"}`,
                        background: isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.8)",
                        color: isDark ? "#64748b" : "#9ca3af",
                        transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                        backdropFilter: "blur(8px)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#60a5fa";
                        e.currentTarget.style.borderColor = "rgba(59,130,246,0.3)";
                        e.currentTarget.style.background = "rgba(59,130,246,0.07)";
                        e.currentTarget.style.boxShadow = "0 0 16px rgba(59,130,246,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = isDark ? "#64748b" : "#9ca3af";
                        e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.07)" : "rgba(59,130,246,0.12)";
                        e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.8)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <Icon size={15} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right — 3D Stats + Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -8 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-5 space-y-4"
            style={{ perspective: "1200px" }}
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.85, rotateX: 15 }}
                  animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                  transition={{
                    delay: 0.5 + i * 0.1,
                    duration: 0.6,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                    boxShadow: isDark
                      ? "0 12px 32px rgba(0,0,0,0.4), 0 0 20px rgba(59,130,246,0.1)"
                      : "0 12px 32px rgba(59,130,246,0.1)",
                  }}
                  className="glass-card holographic rounded-2xl p-4 text-center"
                >
                  <div className="text-lg mb-1">{stat.icon}</div>
                  <div
                    className="font-display font-black"
                    style={{
                      fontSize: "clamp(1.4rem, 3.5vw, 1.9rem)",
                      backgroundImage: "linear-gradient(135deg, #3b82f6, #2563eb, #22d3ee)",
                      backgroundSize: "200% 100%",
                      animation: "text-shimmer 3s linear infinite",
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
              initial={{ opacity: 0, y: 20, rotateX: 10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(59,130,246,0.15)" }}
              className="glass-card gradient-border rounded-2xl p-4"
              style={{
                background: isDark ? "rgba(59,130,246,0.04)" : "rgba(59,130,246,0.03)",
                border: `1px solid ${isDark ? "rgba(59,130,246,0.15)" : "rgba(59,130,246,0.12)"}`,
              }}
            >
              <div className="flex items-start gap-3 mb-3">
                <motion.div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-sm"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                    color: "#fff",
                    boxShadow: "0 4px 12px rgba(59,130,246,0.3)",
                  }}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  🎓
                </motion.div>
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
                  className="neon-text"
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
                {TECH_PILLS.map((t, i) => (
                  <motion.span
                    key={t}
                    className="tech-pill"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 1 + i * 0.05,
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Amazon ML badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotateX: 10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.95, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(245,158,11,0.1)" }}
              className="glass-card rounded-2xl p-4 flex items-start gap-3"
              style={{
                background: isDark ? "rgba(59,130,246,0.04)" : "rgba(59,130,246,0.03)",
                border: `1px solid ${isDark ? "rgba(59,130,246,0.15)" : "rgba(59,130,246,0.12)"}`,
              }}
            >
              <motion.span
                style={{ fontSize: "1.4rem", flexShrink: 0 }}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                🏅
              </motion.span>
              <div>
                <div
                  className="neon-text"
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
      </motion.div>
    </section>
  );
}
