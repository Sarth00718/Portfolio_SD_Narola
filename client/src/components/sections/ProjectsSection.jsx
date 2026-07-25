import { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Globe, FolderOpen } from "lucide-react";
import { CORE_PROJECTS } from "@data/projects";
import { useTheme } from "@context/ThemeContext";
import { cinematicSlideUp } from "@components/common/AnimationVariants";

function TiltCard({ project, index, isDark }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

  function handleMouse(e) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    // Spotlight effect
    cardRef.current.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
  }

  function resetMouse() {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetMouse}
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
          background: isDark ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.85)",
          borderColor: isHovered
            ? "rgba(59,130,246,0.3)"
            : isDark ? "rgba(255,255,255,0.07)" : "rgba(59,130,246,0.08)",
          boxShadow: isHovered
            ? "0 20px 60px rgba(0,0,0,0.3), 0 0 30px rgba(59,130,246,0.1)"
            : "0 4px 20px rgba(0,0,0,0.1)",
        }}
        transition={{ type: "spring", damping: 18, stiffness: 250 }}
        className="group rounded-2xl border overflow-hidden spotlight-card relative"
      >
        {/* Top accent bar with animated shimmer */}
        <div className="h-0.5 w-full relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, #3b82f6, #2563eb, #22d3ee)",
              opacity: isHovered ? 1 : 0.4,
              transition: "opacity 0.3s",
            }}
          />
          {isHovered && (
            <motion.div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
              }}
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          )}
        </div>

        {/* Holographic overlay */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: `radial-gradient(circle 300px at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(59,130,246,0.08), transparent 60%)`,
            }}
          />
        )}

        <div className="p-5 sm:p-6" style={{ transformStyle: "preserve-3d" }}>
          {/* Header */}
          <div className="flex items-start gap-3 mb-3">
            <motion.span
              className="text-2xl leading-none"
              style={{ transform: "translateZ(25px)" }}
              animate={isHovered ? { scale: 1.2, rotate: [0, 10, -10, 0] } : { scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              {project.emoji}
            </motion.span>
            <div style={{ transform: "translateZ(15px)" }}>
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

          {/* Tech stack with spring bounce */}
          <div className="flex flex-wrap gap-1.5 mb-4" style={{ transform: "translateZ(18px)" }}>
            {project.techStack.map((tech, ti) => (
              <motion.span
                key={tech.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: ti * 0.04, type: "spring", stiffness: 300, damping: 15 }}
                style={{
                  padding: "3px 9px", borderRadius: "6px", fontSize: "0.72rem", fontWeight: 600,
                  background: tech.bg, color: tech.color, border: `1px solid ${tech.color}25`,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {tech.label}
              </motion.span>
            ))}
          </div>

          {/* Features */}
          <ul className="space-y-2" style={{ transform: "translateZ(8px)" }}>
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
            transform: "translateZ(25px)",
          }}>
            {project.githubUrl && (
              <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 rounded-lg text-xs font-medium"
                style={{
                  padding: "7px 14px", border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
                  background: isDark ? "rgba(255,255,255,0.035)" : "rgba(0,0,0,0.04)",
                  color: isDark ? "#94a3b8" : "#475569",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#60a5fa"; e.currentTarget.style.boxShadow = "0 0 12px rgba(59,130,246,0.15)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = isDark ? "#94a3b8" : "#475569"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <Github size={13} /> GitHub
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 rounded-lg text-xs font-medium"
                style={{
                  padding: "7px 14px",
                  border: "1px solid rgba(59,130,246,0.25)",
                  background: "rgba(59,130,246,0.08)",
                  color: "#60a5fa",
                  boxShadow: "0 0 8px rgba(59,130,246,0.1)",
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
        <motion.div variants={cinematicSlideUp} custom={0} initial="hidden" animate={inView ? "visible" : "hidden"} className="mb-4">
          <span className="section-tag"><FolderOpen size={12} />Projects</span>
        </motion.div>
        <motion.h2 variants={cinematicSlideUp} custom={1} initial="hidden" animate={inView ? "visible" : "hidden"} className="section-title">
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
