import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Cpu, Globe } from "lucide-react";
import { DSA_PROJECTS } from "@data/projects";
import { useTheme } from "@context/ThemeContext";

export default function DSAProjectsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { isDark } = useTheme();

  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.85)";
  const cardBorder = isDark
    ? "1px solid rgba(255,255,255,0.08)"
    : "1px solid rgba(0,0,0,0.09)";
  const headBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.09)";
  const rowBorder = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)";
  const thColor = isDark ? "#cbd5e1" : "#334155";
  const titleColor = isDark ? "#f1f5f9" : "#0f172a";
  const tdColor = isDark ? "#94a3b8" : "#475569";

  return (
    <section id="dsa-projects" className="section-container pt-0" ref={ref}>
      {/* Header */}
      <div className="text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-4"
        >
          <span className="section-tag">
            <Cpu size={14} />
            DSA &amp; Core
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          DSA &amp; Core Projects
        </motion.h2>
        <div className="gradient-divider" />
      </div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.15 }}
        className="rounded-2xl overflow-hidden"
        style={{ background: cardBg, border: cardBorder }}
      >
        <div className="overflow-x-auto -mx-2 sm:mx-0">
          <div className="inline-block min-w-full align-middle">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: `1px solid ${headBorder}` }}>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "12px 16px",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: thColor,
                      minWidth: "120px",
                    }}
                  >
                    <span className="mr-1.5">📂</span> Project
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "12px 16px",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: thColor,
                      minWidth: "100px",
                    }}
                  >
                    <span className="mr-1.5">🔧</span> Tech Stack
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "12px 16px",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: thColor,
                      minWidth: "200px",
                    }}
                  >
                    <span className="mr-1.5">📝</span> Description
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "12px 16px",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: thColor,
                      minWidth: "80px",
                    }}
                  >
                    <span className="mr-1.5">🔗</span> Link
                  </th>
                </tr>
              </thead>
              <tbody>
                {DSA_PROJECTS.map((project, i) => (
                  <motion.tr
                    key={project.title}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    style={{ borderBottom: `1px solid ${rowBorder}` }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = isDark
                        ? "rgba(255,255,255,0.02)"
                        : "rgba(0,0,0,0.02)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <td
                      style={{
                        padding: "10px 16px",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: titleColor,
                      }}
                    >
                      {project.title}
                    </td>
                    <td
                      style={{
                        padding: "10px 16px",
                        fontSize: "0.8rem",
                        color: tdColor,
                      }}
                    >
                      {project.techStack}
                    </td>
                    <td
                      style={{
                        padding: "10px 16px",
                        fontSize: "0.8rem",
                        color: tdColor,
                      }}
                    >
                      {project.description}
                    </td>
                    <td style={{ padding: "10px 16px" }}>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg transition-all hover:scale-105"
                          style={{
                            padding: "6px 12px",
                            fontSize: "0.78rem",
                            fontWeight: 500,
                            border: "1px solid rgba(16,185,129,0.3)",
                            background: "rgba(16,185,129,0.1)",
                            color: "#34d399",
                          }}
                        >
                          <Globe size={11} />
                          <span className="hidden sm:inline">Live</span>
                        </a>
                      ) : (
                        <span
                          style={{
                            fontSize: "0.875rem",
                            color: "var(--text-muted)",
                          }}
                        >
                          —
                        </span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
