import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, BrainCircuit } from "lucide-react";
import { ML_PROJECTS } from "@data/projects";
import { useTheme } from "@context/ThemeContext";

function MLCard({ project, index, isDark }) {
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.85)";
  const cardBorder = isDark
    ? "1px solid rgba(255,255,255,0.08)"
    : "1px solid rgba(0,0,0,0.09)";
  const titleColor = isDark ? "#f1f5f9" : "#0f172a";
  const subColor = isDark ? "#64748b" : "#64748b";
  const tagBg = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)";
  const tagBorder = isDark
    ? "1px solid rgba(255,255,255,0.08)"
    : "1px solid rgba(0,0,0,0.08)";
  const tagColor = isDark ? "#94a3b8" : "#475569";
  const metricColor = isDark ? "#cbd5e1" : "#334155";
  const divBorder = isDark
    ? "1px solid rgba(255,255,255,0.05)"
    : "1px solid rgba(0,0,0,0.07)";
  const ghBorder = isDark
    ? "1px solid rgba(255,255,255,0.1)"
    : "1px solid rgba(0,0,0,0.1)";
  const ghBg = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)";
  const ghColor = isDark ? "#94a3b8" : "#475569";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group rounded-2xl overflow-hidden text-center transition-all duration-300"
      style={{ background: cardBg, border: cardBorder }}
    >
      <div className="p-6">
        {/* Emoji */}
        <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>
          {project.emoji}
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Outfit','Inter',sans-serif",
            fontWeight: 700,
            fontSize: "clamp(0.95rem,2.2vw,1.1rem)",
            color: titleColor,
            marginBottom: "4px",
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: "0.8rem",
            color: subColor,
            fontWeight: 500,
            marginBottom: "16px",
          }}
        >
          {project.subtitle}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 justify-center mb-4">
          {project.techTags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "3px 10px",
                borderRadius: "6px",
                fontSize: "0.75rem",
                color: tagColor,
                fontWeight: 500,
                background: tagBg,
                border: tagBorder,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Metric */}
        <div
          className="flex items-center justify-center gap-2"
          style={{ fontSize: "0.85rem", color: metricColor, fontWeight: 600 }}
        >
          <span>{project.metricIcon}</span>
          <span>{project.metric}</span>
        </div>

        {/* GitHub */}
        <div className="mt-5 pt-4" style={{ borderTop: divBorder }}>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-1.5 rounded-lg transition-all"
            style={{
              padding: "7px 14px",
              fontSize: "0.8rem",
              fontWeight: 500,
              color: ghColor,
              border: ghBorder,
              background: ghBg,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = isDark ? "#f1f5f9" : "#0f172a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = ghColor;
            }}
          >
            <Github size={13} />
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function MLProjectsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { isDark } = useTheme();

  return (
    <section id="ml-projects" className="section-container pt-0" ref={ref}>
      {/* Header */}
      <div className="text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-4"
        >
          <span className="section-tag">
            <BrainCircuit size={14} />
            Machine Learning
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          Machine Learning Projects
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
            fontSize: "clamp(0.875rem,2vw,1rem)",
            lineHeight: 1.7,
          }}
        >
          End-to-end ML projects with real-world datasets and deployment-ready
          pipelines.
        </motion.p>
      </div>

      {/* 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {ML_PROJECTS.map((project, i) => (
          <MLCard
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
