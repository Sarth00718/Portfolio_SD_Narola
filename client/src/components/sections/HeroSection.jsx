import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronRight,
} from "lucide-react";
import NeuralCanvas from "@components/common/NeuralCanvas";
import { PROFILE } from "@data/achievements";
import { useTheme } from "@context/ThemeContext";

const STATS = [
  { value: "15+", label: "Projects Built", icon: "🚀" },
  { value: "9.10", label: "CGPA", icon: "🎓" },
  { value: "3", label: "Hackathons", icon: "🏆" },
  { value: "500+", label: "GitHub Commits", icon: "💻" },
];

const SOCIAL = [
  {
    icon: Github,
    href: PROFILE.github,
    label: "GitHub",
    hoverColor: "#e2e8f0",
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

export default function HeroSection() {
  const { isDark } = useTheme();

  const heroBg = isDark
    ? "linear-gradient(135deg,#0a0f1e 0%,#111827 60%,#0a0f1e 100%)"
    : "linear-gradient(135deg,#f0f4ff 0%,#e8effe 60%,#f0f4ff 100%)";

  const cardBg = isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.75)";
  const cardBorder = isDark
    ? "1px solid rgba(255,255,255,0.08)"
    : "1px solid rgba(37,99,235,0.12)";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: heroBg }}
    >
      {/* Neural network background */}
      <NeuralCanvas />

      {/* Ambient glows */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.08), transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-1/3 left-1/5 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,233,0.06), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div
        className="relative z-10 w-full max-w-7xl mx-auto py-24 sm:py-28 md:py-32"
        style={{
          paddingLeft: "clamp(1rem, 4vw, 2rem)",
          paddingRight: "clamp(1rem, 4vw, 2rem)",
        }}
      >
        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-14 items-start lg:items-center">
          {/* Left — Text */}
          <div className="lg:col-span-3 space-y-5 sm:space-y-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase"
                style={{
                  background: "rgba(37,99,235,0.12)",
                  border: "1px solid rgba(37,99,235,0.25)",
                  color: isDark ? "#93c5fd" : "#1d4ed8",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <span className="whitespace-nowrap">
                  2027 Graduate · Open to Opportunities
                </span>
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-display font-black leading-[1.05] break-words">
                <span
                  className="block mb-2"
                  style={{
                    fontSize: "clamp(1.25rem, 3.5vw, 2rem)",
                    color: isDark ? "rgba(241,245,249,0.8)" : "#334155",
                    fontWeight: 600,
                  }}
                >
                  Hi, I'm
                </span>
                <span
                  className="block"
                  style={{
                    fontSize: "clamp(2.5rem, 7vw, 5rem)",
                    background:
                      "linear-gradient(135deg,#60a5fa 0%,#38bdf8 50%,#0ea5e9 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Sarth Narola
                </span>
              </h1>
            </motion.div>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center"
              style={{ minHeight: "36px" }}
            >
              <TypeAnimation
                sequence={[
                  "❯ MERN Stack Developer",
                  2200,
                  "❯ AI Systems Engineer",
                  2200,
                  "❯ Final Year @ Nirma University",
                  2200,
                ]}
                wrapper="span"
                speed={55}
                repeat={Infinity}
                style={{
                  fontSize: "clamp(0.95rem, 2.5vw, 1.25rem)",
                  fontFamily: "'JetBrains Mono', monospace",
                  color: isDark ? "#93c5fd" : "#1d4ed8",
                  fontWeight: 500,
                }}
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
                color: isDark ? "#94a3b8" : "#475569",
                lineHeight: 1.75,
                maxWidth: "520px",
              }}
            >
              Building Scalable, Production-Ready Systems with Modern Web &amp;
              AI. Specialized in{" "}
              <span
                style={{
                  color: isDark ? "#e2e8f0" : "#0f172a",
                  fontWeight: 600,
                }}
              >
                MERN applications
              </span>{" "}
              and{" "}
              <span
                style={{
                  color: isDark ? "#e2e8f0" : "#0f172a",
                  fontWeight: 600,
                }}
              >
                AI-integrated pipelines
              </span>
              .
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 items-start pt-1"
            >
              <motion.button
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 30px rgba(37,99,235,0.5)",
                }}
                whileTap={{ scale: 0.96 }}
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary flex items-center gap-2"
                aria-label="View Projects Section"
              >
                View Projects
                <ChevronRight size={16} />
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="btn-secondary flex items-center gap-2"
                aria-label="Download Resume PDF"
              >
                <Download size={15} />
                Resume
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-outline flex items-center gap-2"
                aria-label="Navigate to Contact Section"
              >
                <Mail size={15} />
                Contact
              </motion.button>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1"
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  color: isDark ? "#475569" : "#94a3b8",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 600,
                }}
              >
                Find me on
              </span>
              <div className="flex gap-2.5">
                {SOCIAL.map((social) => {
                  const SocialIcon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={
                        social.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ scale: 1.15, y: -2 }}
                      className="w-10 h-10 flex items-center justify-center rounded-xl transition-all"
                      style={{
                        border: isDark
                          ? "1px solid rgba(255,255,255,0.08)"
                          : "1px solid rgba(37,99,235,0.15)",
                        background: isDark
                          ? "rgba(255,255,255,0.04)"
                          : "rgba(255,255,255,0.7)",
                        color: isDark ? "#94a3b8" : "#475569",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color =
                          social.label === "LinkedIn"
                            ? "#60a5fa"
                            : social.label === "GitHub"
                              ? isDark
                                ? "#fff"
                                : "#0f172a"
                              : "#93c5fd";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = isDark
                          ? "#94a3b8"
                          : "#475569";
                      }}
                    >
                      <SocialIcon size={17} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right — Stats + Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 space-y-3 sm:space-y-4 mt-6 lg:mt-0 w-full"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="rounded-xl p-4 text-center border transition-all"
                  style={{ background: cardBg, border: cardBorder }}
                >
                  <div
                    className="font-display font-black mb-1"
                    style={{
                      fontSize: "clamp(1.4rem, 4vw, 2rem)",
                      background: "linear-gradient(135deg,#60a5fa,#0ea5e9)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(0.7rem, 1.5vw, 0.8rem)",
                      color: isDark ? "#64748b" : "#64748b",
                      lineHeight: 1.3,
                      fontWeight: 500,
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
              className="rounded-xl p-4 border transition-all"
              style={{
                background: isDark
                  ? "rgba(37,99,235,0.07)"
                  : "rgba(37,99,235,0.05)",
                border: isDark
                  ? "1px solid rgba(37,99,235,0.18)"
                  : "1px solid rgba(37,99,235,0.2)",
              }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg,#1d4ed8,#2563eb)",
                    fontSize: "1rem",
                  }}
                >
                  🎓
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    style={{
                      fontSize: "clamp(0.875rem, 2vw, 1rem)",
                      fontWeight: 700,
                      color: isDark ? "#f1f5f9" : "#0f172a",
                      lineHeight: 1.3,
                    }}
                  >
                    Nirma University
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: isDark ? "#64748b" : "#64748b",
                      marginTop: "2px",
                    }}
                  >
                    B.Tech CSE · 2022–2027
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#60a5fa",
                    padding: "3px 10px",
                    borderRadius: "6px",
                    background: "rgba(37,99,235,0.15)",
                    border: "1px solid rgba(37,99,235,0.25)",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  9.10
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "React",
                  "Node.js",
                  "MongoDB",
                  "LangChain",
                  "FastAPI",
                  "FAISS",
                ].map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "3px 10px",
                      borderRadius: "6px",
                      fontSize: "0.75rem",
                      color: isDark ? "#94a3b8" : "#475569",
                      background: isDark
                        ? "rgba(255,255,255,0.04)"
                        : "rgba(0,0,0,0.04)",
                      border: isDark
                        ? "1px solid rgba(255,255,255,0.08)"
                        : "1px solid rgba(0,0,0,0.08)",
                      fontWeight: 500,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Amazon ML badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              whileHover={{ y: -3 }}
              className="rounded-xl p-4 border flex items-start gap-3 transition-all"
              style={{
                background: isDark
                  ? "rgba(245,158,11,0.06)"
                  : "rgba(245,158,11,0.05)",
                border: isDark
                  ? "1px solid rgba(245,158,11,0.18)"
                  : "1px solid rgba(245,158,11,0.25)",
              }}
            >
              <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>🏅</span>
              <div className="flex-1 min-w-0">
                <div
                  style={{
                    fontSize: "clamp(0.8rem, 2vw, 0.95rem)",
                    fontWeight: 700,
                    color: "#f59e0b",
                    lineHeight: 1.3,
                    marginBottom: "4px",
                  }}
                >
                  Amazon ML Summer School 2025
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: isDark ? "#64748b" : "#64748b",
                    lineHeight: 1.5,
                  }}
                >
                  Selected from national pool of top engineering students
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-fit flex flex-col items-center gap-2 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() =>
          document
            .querySelector("#about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span
          style={{
            fontSize: "0.7rem",
            color: isDark ? "#475569" : "#94a3b8",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
          }}
        >
          Scroll
        </span>
        <ArrowDown
          size={15}
          style={{ color: isDark ? "#475569" : "#94a3b8" }}
        />
      </motion.div>
    </section>
  );
}
