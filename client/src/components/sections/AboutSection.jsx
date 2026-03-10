import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  GraduationCap,
  MapPin,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  User,
} from "lucide-react";
import { PROFILE } from "@data/achievements";
import { useTheme } from "@context/ThemeContext";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

export default function AboutSection() {
  const { isDark } = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.75)";
  const cardBorder = isDark
    ? "1px solid rgba(255,255,255,0.08)"
    : "1px solid rgba(0,0,0,0.08)";

  return (
    <section id="about" className="section-container" ref={ref}>
      {/* Header */}
      <div className="text-center mb-14 sm:mb-16">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-4"
        >
          <span className="section-tag">
            <User size={14} />
            About Me
          </span>
        </motion.div>
        <motion.h2
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="section-title"
        >
          Who I Am
        </motion.h2>
        <div className="gradient-divider" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 items-start">
        {/* Left — Bio */}
        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="lg:col-span-3 space-y-5"
        >
          {/* Bio card */}
          <div
            className="rounded-2xl p-5 sm:p-7 border"
            style={{ background: cardBg, border: cardBorder }}
          >
            <p
              style={{
                color: isDark ? "#cbd5e1" : "#334155",
                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                lineHeight: 1.8,
                marginBottom: "1rem",
              }}
            >
              I'm{" "}
              <span
                style={{
                  color: isDark ? "#f1f5f9" : "#0f172a",
                  fontWeight: 700,
                }}
              >
                Sarth Narola
              </span>{" "}
              ({PROFILE.rollNo}), a final-year B.Tech CSE student at{" "}
              <span style={{ color: "#60a5fa", fontWeight: 600 }}>
                Nirma University
              </span>{" "}
              with a CGPA of{" "}
              <span style={{ color: "#60a5fa", fontWeight: 700 }}>9.10</span>. I
              am passionate about building production-ready web applications and
              AI-integrated systems.
            </p>
            <p
              style={{
                color: isDark ? "#94a3b8" : "#475569",
                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                lineHeight: 1.8,
                marginBottom: "1rem",
              }}
            >
              I've built multiple full-stack projects including an{" "}
              <span style={{ color: "#38bdf8", fontWeight: 600 }}>
                AI Financial Document Chatbot
              </span>{" "}
              using RAG + LangChain + FAISS, a{" "}
              <span style={{ color: "#38bdf8", fontWeight: 600 }}>
                Smart Expense Tracker
              </span>{" "}
              live in production, and an enterprise Fleet Management System.
            </p>
            <p
              style={{
                color: isDark ? "#94a3b8" : "#475569",
                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                lineHeight: 1.8,
              }}
            >
              I was selected for{" "}
              <span style={{ color: "#fbbf24", fontWeight: 600 }}>
                Amazon ML Summer School 2025
              </span>{" "}
              and have participated in national hackathons including Smart India
              Hackathon. I actively practice competitive programming on
              LeetCode, Codeforces, and CodeChef.
            </p>
          </div>

          {/* Contact info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                icon: Mail,
                label: "Email",
                value: PROFILE.email,
                href: `mailto:${PROFILE.email}`,
              },
              {
                icon: MapPin,
                label: "Location",
                value: PROFILE.location,
                href: null,
              },
              {
                icon: Github,
                label: "GitHub",
                value: "github.com/Sarth00718",
                href: PROFILE.github,
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "sarth-narola-223002323",
                href: PROFILE.linkedin,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 p-3.5 rounded-xl border"
                style={{
                  background: isDark
                    ? "rgba(255,255,255,0.02)"
                    : "rgba(255,255,255,0.7)",
                  border: cardBorder,
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(37,99,235,0.12)",
                    border: "1px solid rgba(37,99,235,0.2)",
                  }}
                >
                  <item.icon size={15} className="text-blue-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      marginBottom: "2px",
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors truncate block"
                      style={{
                        fontSize: "0.875rem",
                        color: isDark ? "#cbd5e1" : "#334155",
                        fontWeight: 500,
                      }}
                      aria-label={`${item.label}: ${item.value}`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: isDark ? "#cbd5e1" : "#334155",
                        fontWeight: 500,
                      }}
                      className="truncate"
                    >
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Education + Links */}
        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="lg:col-span-2 space-y-4"
        >
          {/* Education */}
          <div
            className="rounded-2xl p-5 sm:p-6 border"
            style={{
              background: isDark
                ? "rgba(37,99,235,0.05)"
                : "rgba(37,99,235,0.04)",
              border: isDark
                ? "1px solid rgba(37,99,235,0.15)"
                : "1px solid rgba(37,99,235,0.2)",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg,#1d4ed8,#2563eb)",
                }}
              >
                <GraduationCap size={20} className="text-white" />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontFamily: "'Outfit',sans-serif",
                    fontWeight: 700,
                    color: isDark ? "#f1f5f9" : "#0f172a",
                  }}
                >
                  Education
                </h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  Academic Background
                </p>
              </div>
            </div>

            <div>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: isDark ? "#f1f5f9" : "#0f172a",
                  marginBottom: "4px",
                }}
              >
                Nirma University
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  marginBottom: "3px",
                }}
              >
                B.Tech Computer Science &amp; Engineering
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  marginBottom: "1.25rem",
                }}
              >
                2022 – 2027 · Ahmedabad, Gujarat
              </p>

              <div className="flex items-center justify-between mb-2">
                <span
                  style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}
                >
                  CGPA
                </span>
                <span
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "#60a5fa",
                  }}
                >
                  9.10 / 10.0
                </span>
              </div>
              <div
                className="h-2 rounded-full overflow-hidden"
                style={{
                  background: isDark
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(0,0,0,0.08)",
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: "91%" } : { width: 0 }}
                  transition={{ duration: 1.4, delay: 0.7, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg,#1d4ed8,#2563eb)",
                  }}
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {["DSA", "DBMS", "OS", "Networks", "ML", "Math"].map((c) => (
                  <span key={c} className="tech-badge">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div
            className="rounded-2xl p-5 sm:p-6 border"
            style={{ background: cardBg, border: cardBorder }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontFamily: "'Outfit',sans-serif",
                fontWeight: 700,
                color: isDark ? "#f1f5f9" : "#0f172a",
                marginBottom: "1rem",
              }}
            >
              Connect With Me
            </h3>
            <div className="space-y-2.5">
              {[
                {
                  href: PROFILE.github,
                  icon: Github,
                  label: "GitHub",
                  sub: "github.com/Sarth00718",
                  borderH: "rgba(148,163,184,0.3)",
                },
                {
                  href: PROFILE.linkedin,
                  icon: Linkedin,
                  label: "LinkedIn",
                  sub: "sarth-narola-223002323",
                  borderH: "rgba(59,130,246,0.4)",
                },
                {
                  href: `mailto:${PROFILE.email}`,
                  icon: Mail,
                  label: "Email",
                  sub: PROFILE.email,
                  borderH: "rgba(37,99,235,0.4)",
                },
              ].map((link) => {
                const LinkIcon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 p-3 rounded-xl border transition-all group"
                    style={{
                      border: isDark
                        ? "1px solid rgba(255,255,255,0.08)"
                        : "1px solid rgba(0,0,0,0.07)",
                      background: isDark
                        ? "rgba(255,255,255,0.03)"
                        : "rgba(255,255,255,0.6)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = link.borderH;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = isDark
                        ? "rgba(255,255,255,0.08)"
                        : "rgba(0,0,0,0.07)";
                    }}
                  >
                    <LinkIcon
                      size={18}
                      style={{ color: "#60a5fa", flexShrink: 0 }}
                    />
                    <div className="flex-1 min-w-0">
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: isDark ? "#cbd5e1" : "#334155",
                          fontWeight: 600,
                        }}
                      >
                        {link.label}
                      </p>
                      <p
                        style={{
                          fontSize: "0.775rem",
                          color: "var(--text-muted)",
                        }}
                        className="truncate"
                      >
                        {link.sub}
                      </p>
                    </div>
                    <ExternalLink
                      size={13}
                      style={{ color: "var(--text-muted)", flexShrink: 0 }}
                      className="group-hover:text-blue-400 transition-colors"
                    />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
