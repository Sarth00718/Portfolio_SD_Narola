import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, BrainCircuit } from "lucide-react";
import { ML_PROJECTS } from "@data/projects";
import { useTheme } from "@context/ThemeContext";
import { cinematicSlideUp, springBounce } from "@components/common/AnimationVariants";

export default function MLProjectsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { isDark } = useTheme();

  return (
    <section id="ml-projects" className="section-container pt-0" ref={ref}>
      <div className="text-center mb-14">
        <motion.div variants={cinematicSlideUp} custom={0} initial="hidden" animate={inView ? "visible" : "hidden"} className="mb-4">
          <span className="section-tag"><BrainCircuit size={12} />Machine Learning</span>
        </motion.div>
        <motion.h2 variants={cinematicSlideUp} custom={1} initial="hidden" animate={inView ? "visible" : "hidden"} className="section-title">
          Machine Learning Projects
        </motion.h2>
        <div className="section-divider" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {ML_PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            variants={springBounce}
            custom={i}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={{ y: -6, scale: 1.03, boxShadow: isDark ? "0 20px 40px rgba(0,0,0,0.3), 0 0 20px rgba(59,130,246,0.08)" : "0 12px 30px rgba(59,130,246,0.1)" }}
            className="glass-card holographic rounded-2xl overflow-hidden text-center"
          >
            <div className="p-6">
              <div style={{ fontSize: "2.2rem", marginBottom: "12px" }}>{project.emoji}</div>

              <h3 style={{ fontWeight: 700, fontSize: "clamp(0.9rem,2.2vw,1.05rem)", color: isDark ? "#e8ecf4" : "#0f0f1a", marginBottom: "4px", lineHeight: 1.3 }}>
                {project.title}
              </h3>
              <p style={{ fontSize: "0.78rem", color: isDark ? "#64748b" : "#64748b", fontWeight: 500, marginBottom: "14px" }}>
                {project.subtitle}
              </p>

              <div className="flex flex-wrap gap-1.5 justify-center mb-4">
                {project.techTags.map((tag) => (
                  <span key={tag}
                    style={{
                      padding: "3px 9px", borderRadius: "6px", fontSize: "0.72rem",
                      color: isDark ? "#94a3b8" : "#475569", fontWeight: 500,
                      background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
                      border: `1px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"}`,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ fontSize: "0.82rem", color: "#60a5fa", fontWeight: 600 }}>
                <span>{project.metricIcon} </span>
                <span>{project.metric}</span>
              </div>

              <div className="mt-5 pt-4" style={{ borderTop: isDark ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(59,130,246,0.08)" }}>
              <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="inline-flex items-center gap-1.5 rounded-lg text-xs font-medium px-3.5 py-2"
                  style={{
                    border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
                    background: isDark ? "rgba(255,255,255,0.035)" : "rgba(0,0,0,0.04)",
                    color: isDark ? "#94a3b8" : "#475569",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#60a5fa"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = isDark ? "#94a3b8" : "#475569"; }}
                >
                  <Github size={12} /> GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
