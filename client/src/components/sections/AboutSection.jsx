import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  GraduationCap, MapPin, Mail, Github, Linkedin, ExternalLink, User,
} from "lucide-react";
import { PROFILE } from "@data/achievements";
import { useTheme } from "@context/ThemeContext";
import { fadeUp } from "@components/common/AnimationVariants";

export default function AboutSection() {
  const { isDark } = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="about" className="section-container" ref={ref}>
      {/* Header */}
      <div className="text-center mb-14 sm:mb-16">
        <motion.div
          variants={fadeUp} custom={0} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="mb-4"
        >
          <span className="section-tag"><User size={12} />About Me</span>
        </motion.div>
        <motion.h2
          variants={fadeUp} custom={1} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="section-title"
        >
          Who I Am
        </motion.h2>
        <div className="section-divider" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
        {/* Left — Bio (7 cols) */}
        <motion.div
          variants={fadeUp} custom={2} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="lg:col-span-7 space-y-5"
        >
          {/* Bio card — editorial style */}
          <div
            className="rounded-2xl p-6 sm:p-8 border relative overflow-hidden"
            style={{
              background: isDark ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.85)",
              borderColor: isDark ? "rgba(255,255,255,0.07)" : "rgba(59,130,246,0.08)",
            }}
          >
            {/* Decorative accent */}
            <div
              className="absolute top-0 left-0 w-1 h-full rounded-r-full"
              style={{
                background: "linear-gradient(180deg, #3b82f6, #2563eb)",
              }}
            />
            <div className="pl-4">
              <p className="mb-4" style={{ color: isDark ? "#cbd5e1" : "#334155", lineHeight: 1.8 }}>
                I'm{" "}
                <span style={{ color: isDark ? "#e8ecf4" : "#0f0f1a", fontWeight: 700 }}>
                  Sarth Narola
                </span>{" "}
                ({PROFILE.rollNo}), a final-year B.Tech CSE student at{" "}
                <span style={{ color: "#60a5fa", fontWeight: 600 }}>Nirma University</span>{" "}
                with a CGPA of <span style={{ color: "#60a5fa", fontWeight: 700 }}>9.11</span>.
                I am passionate about building production-ready web applications and
                AI-integrated systems.
              </p>
              <p className="mb-4" style={{ color: isDark ? "#94a3b8" : "#475569", lineHeight: 1.8 }}>
                I've built multiple full-stack projects including an{" "}
                <span style={{ color: "#22d3ee", fontWeight: 600 }}>AI Financial Document Chatbot</span>{" "}
                using RAG + LangChain + FAISS, a{" "}
                <span style={{ color: "#22d3ee", fontWeight: 600 }}>Smart Expense Tracker</span>{" "}
                live in production, and an enterprise Fleet Management System.
              </p>
              <p style={{ color: isDark ? "#94a3b8" : "#475569", lineHeight: 1.8 }}>
                I was selected for{" "}
                <span style={{ color: "#60a5fa", fontWeight: 600 }}>Amazon ML Summer School 2025</span>{" "}
                and have participated in national hackathons including Smart India Hackathon.
              </p>
            </div>
          </div>

          {/* Contact info grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: Mail, label: "Personal Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
              { icon: Mail, label: "Nirma Email", value: PROFILE.nirmaEmail, href: `mailto:${PROFILE.nirmaEmail}` },
              { icon: MapPin, label: "Location", value: PROFILE.location, href: null },
              { icon: Github, label: "GitHub", value: "github.com/Sarth00718", href: PROFILE.github },
              { icon: Linkedin, label: "LinkedIn", value: "sarth-narola-223002323", href: PROFILE.linkedin },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 p-3.5 rounded-xl border"
                style={{
                  background: isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.7)",
                  borderColor: isDark ? "rgba(255,255,255,0.07)" : "rgba(59,130,246,0.08)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(59,130,246,0.1)",
                    border: "1px solid rgba(59,130,246,0.18)",
                  }}
                >
                  <item.icon size={14} style={{ color: "#60a5fa" }} />
                </div>
                <div className="min-w-0 flex-1">
                  <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "2px", fontWeight: 500 }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="truncate block"
                      style={{
                        fontSize: "0.85rem",
                        color: isDark ? "#cbd5e1" : "#334155",
                        fontWeight: 500,
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "#60a5fa"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = isDark ? "#cbd5e1" : "#334155"; }}
                      aria-label={`${item.label}: ${item.value}`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ fontSize: "0.85rem", color: isDark ? "#cbd5e1" : "#334155", fontWeight: 500 }} className="truncate">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Education + Links (5 cols) */}
        <motion.div
          variants={fadeUp} custom={3} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="lg:col-span-5 space-y-4"
        >
          {/* Education */}
          <div
            className="rounded-2xl p-5 sm:p-6 border"
            style={{
              background: isDark ? "rgba(59,130,246,0.04)" : "rgba(59,130,246,0.03)",
              borderColor: isDark ? "rgba(59,130,246,0.12)" : "rgba(59,130,246,0.1)",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #3b82f6, #2563eb)" }}
              >
                <GraduationCap size={18} className="text-white" />
              </div>
              <div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: isDark ? "#e8ecf4" : "#0f0f1a" }}>
                  Education
                </h3>
                <p style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Academic Background</p>
              </div>
            </div>

            <div>
              <p style={{ fontSize: "1rem", fontWeight: 700, color: isDark ? "#e8ecf4" : "#0f0f1a", marginBottom: "4px" }}>
                Nirma University
              </p>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "3px" }}>
                B.Tech Computer Science & Engineering
              </p>
              <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "1.25rem" }}>
                2022 – 2027 · Ahmedabad, Gujarat
              </p>

              <div className="flex items-center justify-between mb-2">
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 500 }}>CGPA</span>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#60a5fa" }}>9.11 / 10.0</span>
              </div>
              <div
                className="h-1.5 rounded-full overflow-hidden"
                style={{ background: isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)" }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: "91%" } : { width: 0 }}
                  transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #3b82f6, #2563eb)" }}
                />
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div
            className="rounded-2xl p-5 sm:p-6 border"
            style={{
              background: isDark ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.85)",
              borderColor: isDark ? "rgba(255,255,255,0.07)" : "rgba(59,130,246,0.08)",
            }}
          >
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: isDark ? "#e8ecf4" : "#0f0f1a", marginBottom: "1rem" }}>
              Connect With Me
            </h3>
            <div className="space-y-2.5">
              {[
                { href: PROFILE.github, icon: Github, label: "GitHub", sub: "github.com/Sarth00718" },
                { href: PROFILE.linkedin, icon: Linkedin, label: "LinkedIn", sub: "sarth-narola-223002323" },
                { href: `mailto:${PROFILE.email}`, icon: Mail, label: "Gmail", sub: PROFILE.email },
                { href: `mailto:${PROFILE.nirmaEmail}`, icon: Mail, label: "Nirma Email", sub: PROFILE.nirmaEmail },
              ].map((link) => {
                const LinkIcon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 p-3 rounded-xl border group"
                    style={{
                      borderColor: isDark ? "rgba(255,255,255,0.07)" : "rgba(59,130,246,0.08)",
                      background: isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.6)",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(59,130,246,0.25)";
                      e.currentTarget.style.background = "rgba(59,130,246,0.04)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.07)" : "rgba(59,130,246,0.08)";
                      e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.6)";
                    }}
                  >
                    <LinkIcon size={16} style={{ color: "#60a5fa", flexShrink: 0 }} />
                    <div className="flex-1 min-w-0">
                      <p style={{ fontSize: "0.85rem", color: isDark ? "#cbd5e1" : "#334155", fontWeight: 600 }}>
                        {link.label}
                      </p>
                      <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }} className="truncate">
                        {link.sub}
                      </p>
                    </div>
                    <ExternalLink size={12} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
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
