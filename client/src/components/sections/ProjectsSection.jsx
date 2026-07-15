import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Globe, FolderOpen } from "lucide-react";
import { CORE_PROJECTS } from "@data/projects";
import { useTheme } from "@context/ThemeContext";
import { spring } from "@components/common/AnimationVariants";

function TiltCard({ project, index, isDark }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  function handleMouse(e) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function resetMouse() {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetMouse}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
          background: isDark ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.85)",
          borderColor: isHovered
            ? "rgba(59,130,246,0.25)"
            : isDark ? "rgba(255,255,255,0.07)" : "rgba(59,130,246,0.08)",
        }}
        transition={{ type: "spring", damping: 18, stiffness: 250 }}
        className="group rounded-2xl border overflow-hidden"
      >
        {/* Top accent bar */}
        <div
          className="h-0.5 w-full"
          style={{
            background: "linear-gradient(90deg, #3b82f6, #2563eb, #22d3ee)",
            opacity: isHovered ? 1 : 0.4,
            transition: "opacity 0.3s",
          }}
        />

        <div className="p-5 sm:p-6" style={{ transformStyle: "preserve-3d" }}>
          {/* Header */}
          <div className="flex items-start gap-3 mb-3">
            <span className="text-2xl leading-none" style={{ transform: "translateZ(20px)" }}>{project.emoji}</span>
            <div style={{ transform: "translateZ(10px)" }}>
              <h3 style={{
                fontWeight: 700,
                fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
                color: isDark ? "#e8ecf4" : "#0f0f1a",
                lineHeight: 1.3,
              }}>
                {project.title}
              </h3>
              <p style={{ fontSize: "0.78rem", color: isDark ? "#64748b" : "#64748b", marginTop: "2px", fontWeight: 500 }}>
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mb-4" style={{ transform: "translateZ(15px)" }}>
            {project.techStack.map((tech) => (
              <span key={tech.label}
                style={{
                  padding: "3px 9px", borderRadius: "6px", fontSize: "0.72rem", fontWeight: 600,
                  background: tech.bg, color: tech.color, border: `1px solid ${tech.color}25`,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {tech.label}
              </span>
            ))}
          </div>

          {/* Features */}
          <ul className="space-y-2" style={{ transform: "translateZ(5px)" }}>
            {project.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span style={{ fontSize: "0.9rem", lineHeight: 1.3, flexShrink: 0, marginTop: "1px" }}>
                  {feat.icon}
                </span>
                <span
                  style={{ fontSize: "clamp(0.78rem, 1.8vw, 0.85rem)", color: isDark ? "#94a3b8" : "#475569", lineHeight: 1.6 }}
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
          <div className="flex gap-2 mt-5 pt-4" style={{
            borderTop: isDark ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(59,130,246,0.08)",
            transform: "translateZ(20px)",
          }}>
            {project.githubUrl && (
              <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 rounded-lg text-xs font-medium"
                style={{
                  padding: "7px 14px", border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
                  background: isDark ? "rgba(255,255,255,0.035)" : "rgba(0,0,0,0.04)",
                  color: isDark ? "#94a3b8" : "#475569",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#60a5fa"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = isDark ? "#94a3b8" : "#475569"; }}
              >
                <Github size={13} /> GitHub
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 rounded-lg text-xs font-medium"
                style={{
                  padding: "7px 14px",
                  border: "1px solid rgba(59,130,246,0.25)",
                  background: "rgba(59,130,246,0.08)",
                  color: "#60a5fa",
                }}
              >
                <Globe size={13} /> Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { isDark } = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="section-container" ref={ref}>
      <div className="text-center mb-12 sm:mb-14">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-4">
          <span className="section-tag"><FolderOpen size={12} />Projects</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="section-title">
          Core Full-Stack & AI Projects
        </motion.h2>
        <div className="section-divider" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {CORE_PROJECTS.map((project, i) => (
          <TiltCard key={project.id} project={project} index={i} isDark={isDark} />
        ))}
      </div>
    </section>
  );
}
