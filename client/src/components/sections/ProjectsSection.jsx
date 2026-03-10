import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Globe, FolderOpen } from "lucide-react";
import { CORE_PROJECTS } from "@data/projects";
import { useTheme } from "@context/ThemeContext";

function CoreCard({ project, index, isDark }) {
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.8)";
  const cardBorder = isDark
    ? "1px solid rgba(255,255,255,0.08)"
    : "1px solid rgba(0,0,0,0.08)";
  const linkBg = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)";
  const linkBorder = isDark
    ? "1px solid rgba(255,255,255,0.1)"
    : "1px solid rgba(0,0,0,0.1)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
      whileHover={{ y: -5 }}
      className="group rounded-2xl border overflow-hidden transition-all duration-300"
      style={{ background: cardBg, border: cardBorder }}
    >
      <div className="p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-start gap-3 mb-1">
          <span style={{ fontSize: "1.75rem", lineHeight: 1 }}>
            {project.emoji}
          </span>
          <div className="flex-1">
            <h3
              style={{
                fontFamily: "'Outfit','Inter',sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                color: isDark ? "#f1f5f9" : "#0f172a",
                lineHeight: 1.3,
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontSize: "0.8rem",
                color: isDark ? "#64748b" : "#64748b",
                marginTop: "3px",
                fontWeight: 500,
              }}
            >
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mt-4 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech.label}
              style={{
                padding: "3px 10px",
                borderRadius: "6px",
                fontSize: "0.75rem",
                fontWeight: 600,
                background: tech.bg,
                color: tech.color,
                border: `1px solid ${tech.color}25`,
              }}
            >
              {tech.label}
            </span>
          ))}
        </div>

        {/* Features */}
        <ul className="space-y-2">
          {project.features.map((feat, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.3,
                  flexShrink: 0,
                  marginTop: "1px",
                }}
              >
                {feat.icon}
              </span>
              <span
                style={{
                  fontSize: "clamp(0.8rem, 1.8vw, 0.875rem)",
                  color: isDark ? "#94a3b8" : "#475569",
                  lineHeight: 1.6,
                }}
                dangerouslySetInnerHTML={{
                  __html: feat.text.replace(
                    /\b(LangChain|FAISS|Groq|Google Gemini|Socket\.io|Redux Toolkit|JWT|MongoDB Atlas|Razorpay|Firebase|Render|smartexptrack\.me)\b/g,
                    `<strong style="color:${isDark ? "#e2e8f0" : "#0f172a"};font-weight:600;">$1</strong>`,
                  ),
                }}
              />
            </li>
          ))}
        </ul>

        {/* Links */}
        <div
          className="flex gap-2 mt-5 pt-4"
          style={{
            borderTop: isDark
              ? "1px solid rgba(255,255,255,0.05)"
              : "1px solid rgba(0,0,0,0.06)",
          }}
        >
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 rounded-lg text-sm font-medium transition-all"
              style={{
                padding: "7px 14px",
                border: linkBorder,
                background: linkBg,
                color: isDark ? "#94a3b8" : "#475569",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = isDark ? "#fff" : "#0f172a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isDark ? "#94a3b8" : "#475569";
              }}
            >
              <Github size={14} />
              GitHub
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 rounded-lg text-sm font-medium transition-all"
              style={{
                padding: "7px 14px",
                border: "1px solid rgba(16,185,129,0.3)",
                background: "rgba(16,185,129,0.08)",
                color: "#34d399",
              }}
            >
              <Globe size={14} />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { isDark } = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="section-container" ref={ref}>
      {/* Header */}
      <div className="text-center mb-12 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-4"
        >
          <span className="section-tag">
            <FolderOpen size={14} />
            Projects
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          Core Full-Stack &amp; AI Projects
        </motion.h2>
        <div className="gradient-divider" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          style={{
            color: "var(--text-secondary)",
            maxWidth: "520px",
            margin: "1rem auto 0",
            fontSize: "clamp(0.875rem, 2vw, 1rem)",
            lineHeight: 1.7,
          }}
        >
          Production-ready applications built with modern full-stack and AI
          technologies.
        </motion.p>
      </div>

      {/* 1 col mobile → 2 tablet → 3 desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 w-full">
        {CORE_PROJECTS.map((project, i) => (
          <CoreCard
            key={project.id}
            project={project}
            index={i}
            isDark={isDark}
          />
        ))}
      </div>
    </section>
  );
}
