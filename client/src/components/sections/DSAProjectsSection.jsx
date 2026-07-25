import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Cpu, Globe } from "lucide-react";
import { DSA_PROJECTS } from "@data/projects";
import { useTheme } from "@context/ThemeContext";
import { cinematicSlideUp, staggerItem } from "@components/common/AnimationVariants";

export default function DSAProjectsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { isDark } = useTheme();

  return (
    <section id="dsa-projects" className="section-container pt-0" ref={ref}>
      <div className="text-center mb-14">
        <motion.div variants={cinematicSlideUp} custom={0} initial="hidden" animate={inView ? "visible" : "hidden"} className="mb-4">
          <span className="section-tag"><Cpu size={12} />DSA & Core</span>
        </motion.div>
        <motion.h2 variants={cinematicSlideUp} custom={1} initial="hidden" animate={inView ? "visible" : "hidden"} className="section-title">
          DSA & Core Projects
        </motion.h2>
        <div className="section-divider" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {DSA_PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            variants={i < 2 ? staggerItem : undefined}
            initial={i < 2 ? "hidden" : undefined}
            animate={inView && i < 2 ? "visible" : undefined}
            whileHover={{ y: -5, scale: 1.02, boxShadow: isDark ? "0 20px 40px rgba(0,0,0,0.3), 0 0 20px rgba(59,130,246,0.08)" : "0 12px 30px rgba(59,130,246,0.1)" }}
            className="glass-card holographic rounded-2xl border p-5 sm:p-6"
            style={{
              background: isDark ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.85)",
              borderColor: isDark ? "rgba(255,255,255,0.07)" : "rgba(59,130,246,0.08)",
              transition: "all 0.3s ease",
            }}
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="text-2xl">{project.icon}</span>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: "clamp(0.9rem,2.2vw,1.05rem)", color: isDark ? "#e8ecf4" : "#0f0f1a" }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: "0.75rem", color: isDark ? "#94a3b8" : "#64748b", marginTop: "3px", fontFamily: "'JetBrains Mono', monospace" }}>
                  {project.techStack}
                </p>
              </div>
            </div>
            <p style={{ fontSize: "0.82rem", color: isDark ? "#94a3b8" : "#475569", lineHeight: 1.7, marginBottom: "14px" }}>
              {project.description}
            </p>
            <div className="flex gap-2">
              {project.githubUrl && (
                <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="inline-flex items-center gap-1.5 rounded-lg text-xs font-medium px-3 py-1.5"
                  style={{
                    border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
                    background: isDark ? "rgba(255,255,255,0.035)" : "rgba(0,0,0,0.04)",
                    color: isDark ? "#94a3b8" : "#475569",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#60a5fa"; e.currentTarget.style.boxShadow = "0 0 10px rgba(59,130,246,0.2)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = isDark ? "#94a3b8" : "#475569"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </motion.a>
              )}
              {project.liveUrl && (
                <motion.a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  className="inline-flex items-center gap-1.5 rounded-lg text-xs font-medium px-3 py-1.5"
                  style={{
                    border: "1px solid rgba(59,130,246,0.25)",
                    background: "rgba(59,130,246,0.08)",
                    color: "#60a5fa",
                  }}
                >
                  <Globe size={11} /> Live
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
