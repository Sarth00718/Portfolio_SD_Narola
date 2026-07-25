import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  GraduationCap, MapPin, Mail, Github, Linkedin, ExternalLink, User,
} from "lucide-react";
import { PROFILE } from "@data/achievements";
import { useTheme } from "@context/ThemeContext";
import { cinematicSlideUp, stagger3D, stagger3DItem } from "@components/common/AnimationVariants";

export default function AboutSection() {
  const { isDark } = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  const handleSpotlight = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <section id="about" className="section-container" ref={ref}>
      {/* Header */}
      <div className="text-center mb-14 sm:mb-16">
        <motion.div
          variants={cinematicSlideUp} custom={0} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="mb-4"
        >
          <span className="section-tag"><User size={12} />About Me</span>
        </motion.div>
        <motion.h2
          variants={cinematicSlideUp} custom={1} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="section-title"
        >
          Who I Am
        </motion.h2>
        <div className="section-divider" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
        {/* Left — Bio */}
        <motion.div
          variants={cinematicSlideUp} custom={2} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="lg:col-span-7 space-y-5"
        >
          {/* Bio card */}
          <div
            className="glass-card spotlight-card rounded-2xl p-6 sm:p-8 relative overflow-hidden"
            onMouseMove={handleSpotlight}
          >
            {/* Decorative accent */}
            <motion.div
              className="absolute top-0 left-0 w-1 rounded-r-full"
              style={{
                background: "linear-gradient(180deg, #3b82f6, #22d3ee, #2563eb)",
              }}
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="pl-4">
              <p className="mb-4" style={{ color: isDark ? "#cbd5e1" : "#334155", lineHeight: 1.8 }}>
                I'm{" "}
                <span style={{ color: isDark ? "#e8ecf4" : "#0f0f1a", fontWeight: 700 }}>
                  Sarth Narola
                </span>{" "}
                ({PROFILE.rollNo}), a final-year B.Tech CSE student at{" "}
                <span className="neon-text" style={{ color: "#60a5fa", fontWeight: 600 }}>Nirma University</span>{" "}
                with a CGPA of <span className="neon-text" style={{ color: "#60a5fa", fontWeight: 700 }}>9.11</span>.
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
          <motion.div
            variants={stagger3D}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {[
              { icon: Mail, label: "Personal Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
              { icon: Mail, label: "Nirma Email", value: PROFILE.nirmaEmail, href: `mailto:${PROFILE.nirmaEmail}` },
              { icon: MapPin, label: "Location", value: PROFILE.location, href: null },
              { icon: Github, label: "GitHub", value: "github.com/Sarth00718", href: PROFILE.github },
              { icon: Linkedin, label: "LinkedIn", value: "sarth-narola-223002323", href: PROFILE.linkedin },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={stagger3DItem}
                whileHover={{ y: -3, scale: 1.02 }}
                className="glass-card flex items-center gap-3 p-3.5 rounded-xl"
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
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Education + Links */}
        <motion.div
          variants={cinematicSlideUp} custom={3} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="lg:col-span-5 space-y-4"
          style={{ perspective: "1000px" }}
        >
          {/* Education */}
          <motion.div
            whileHover={{ rotateY: 3, rotateX: -2, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="glass-card gradient-border rounded-2xl p-5 sm:p-6"
            style={{
              background: isDark ? "rgba(59,130,246,0.04)" : "rgba(59,130,246,0.03)",
              borderColor: isDark ? "rgba(59,130,246,0.12)" : "rgba(59,130,246,0.1)",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <motion.div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                  boxShadow: "0 4px 16px rgba(59,130,246,0.35)",
                }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <GraduationCap size={18} className="text-white" />
              </motion.div>
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
                <span className="neon-text" style={{ fontSize: "0.85rem", fontWeight: 700, color: "#60a5fa" }}>9.11 / 10.0</span>
              </div>
              <div
                className="h-2 rounded-full overflow-hidden"
                style={{ background: isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)" }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: "91%" } : { width: 0 }}
                  transition={{ duration: 1.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full neon-bar"
                  style={{
                    background: "linear-gradient(90deg, #3b82f6, #22d3ee, #2563eb)",
                    boxShadow: "0 0 12px rgba(59,130,246,0.4)",
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <div className="glass-card rounded-2xl p-5 sm:p-6">
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: isDark ? "#e8ecf4" : "#0f0f1a", marginBottom: "1rem" }}>
              Connect With Me
            </h3>
            <div className="space-y-2.5">
              {[
                { href: PROFILE.github, icon: Github, label: "GitHub", sub: "github.com/Sarth00718" },
                { href: PROFILE.linkedin, icon: Linkedin, label: "LinkedIn", sub: "sarth-narola-223002323" },
                { href: `mailto:${PROFILE.email}`, icon: Mail, label: "Gmail", sub: PROFILE.email },
                { href: `mailto:${PROFILE.nirmaEmail}`, icon: Mail, label: "Nirma Email", sub: PROFILE.nirmaEmail },
              ].map((link, i) => {
                const LinkIcon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -15 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    whileHover={{ x: 6, scale: 1.01 }}
                    className="flex items-center gap-3 p-3 rounded-xl border group"
                    style={{
                      borderColor: isDark ? "rgba(255,255,255,0.07)" : "rgba(59,130,246,0.08)",
                      background: isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.6)",
                      transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(59,130,246,0.25)";
                      e.currentTarget.style.background = "rgba(59,130,246,0.04)";
                      e.currentTarget.style.boxShadow = "0 4px 16px rgba(59,130,246,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.07)" : "rgba(59,130,246,0.08)";
                      e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.6)";
                      e.currentTarget.style.boxShadow = "none";
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
                    <ExternalLink size={12} style={{ color: "var(--text-muted)", flexShrink: 0, transition: "transform 0.3s" }} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
