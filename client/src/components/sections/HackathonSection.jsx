import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Globe, Rocket } from "lucide-react";
import { HACKATHON_PROJECTS } from "@data/projects";
import { useTheme } from "@context/ThemeContext";
import { cinematicSlideUp, staggerContainer, staggerItem } from "@components/common/AnimationVariants";

function HackathonCard({ project, index, isDark }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-4, 4]);

  function handleMouse(e) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    cardRef.current.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
  }

  function resetMouse() {
    mouseX.set(0); mouseY.set(0); setIsHovered(false);
  }

  return (
    <motion.div
      ref={cardRef}
      variants={staggerItem}
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
          boxShadow: isHovered ? "0 20px 60px rgba(0,0,0,0.3), 0 0 20px rgba(59,130,246,0.08)" : "0 4px 20px rgba(0,0,0,0.1)",
          borderColor: isHovered
            ? "rgba(59,130,246,0.25)"
            : isDark ? "rgba(255,255,255,0.07)" : "rgba(59,130,246,0.08)",
        }}
        transition={{ type: "spring", damping: 18, stiffness: 250 }}
        className="group rounded-2xl border overflow-hidden spotlight-card relative holographic"
      >
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
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)" }}
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          )}
        </div>

        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{ background: `radial-gradient(circle 300px at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(59,130,246,0.08), transparent 60%)` }}
          />
        )}

        <div className="p-6" style={{ transformStyle: "preserve-3d" }}>
          <div className="flex items-start gap-3 mb-1">
            <span className="text-2xl" style={{ transform: "translateZ(25px)" }}>{project.emoji}</span>
            <div style={{ transform: "translateZ(15px)" }}>
              <h3 style={{ fontWeight: 700, fontSize: "clamp(0.95rem,2.2vw,1.1rem)", color: isDark ? "#e8ecf4" : "#0f0f1a", lineHeight: 1.3 }}>
                {project.title}
              </h3>
              <p style={{ fontSize: "0.78rem", color: isDark ? "#64748b" : "#64748b", fontWeight: 600, marginTop: "2px" }}>
                {project.subtitle}
              </p>
            </div>
          </div>

          {project.tagline && (
            <p style={{ fontSize: "0.75rem", color: isDark ? "#94a3b8" : "#64748b", fontStyle: "italic", marginTop: "6px", marginLeft: "44px", transform: "translateZ(18px)" }}>
              {project.tagline}
            </p>
          )}

          <ul className="space-y-2 mt-4 ml-1" style={{ transform: "translateZ(8px)" }}>
            {project.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span style={{ fontSize: "0.85rem", lineHeight: 1.3, flexShrink: 0, marginTop: "1px" }}>{feat.icon}</span>
                <span style={{ fontSize: "clamp(0.78rem,1.8vw,0.85rem)", color: isDark ? "#94a3b8" : "#475569", lineHeight: 1.6 }}
                  dangerouslySetInnerHTML={{
                    __html: (feat.text || (feat.label ? `<span style="color:${isDark ? "#e2e8f0" : "#1e293b"};font-weight:600;">${feat.label}</span> <br/> ${feat.description}` : '')).replace(
                      /\b(PostgreSQL|RBAC|Socket\.io|Redux Toolkit|JWT|OCR)\b/g,
                      `<strong style="color:${isDark ? "#e2e8f0" : "#0f172a"};font-weight:600;">$1</strong>`,
                    ),
                  }}
                />
              </li>
            ))}
          </ul>

          <div className="flex gap-2 mt-5 pt-4" style={{ borderTop: isDark ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(59,130,246,0.08)", transform: "translateZ(25px)" }}>
            <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
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
            {project.liveUrl && (
              <motion.a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-1.5 rounded-lg text-xs font-medium px-3.5 py-2"
                style={{
                  border: "1px solid rgba(59,130,246,0.25)",
                  background: "rgba(59,130,246,0.08)",
                  color: "#60a5fa",
                }}
              >
                <Globe size={12} /> Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HackathonSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const { isDark } = useTheme();

  return (
    <section id="hackathon" className="section-container pt-0" ref={ref}>
      <div className="text-center mb-14">
        <motion.div variants={cinematicSlideUp} custom={0} initial="hidden" animate={inView ? "visible" : "hidden"} className="mb-4">
          <span className="section-tag"><Rocket size={12} />Hackathons</span>
        </motion.div>
        <motion.h2 variants={cinematicSlideUp} custom={1} initial="hidden" animate={inView ? "visible" : "hidden"} className="section-title">
          Hackathon & Innovation Projects
        </motion.h2>
        <div className="section-divider" />
      </div>

      <motion.div variants={staggerContainer} initial="hidden" animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
      >
        {HACKATHON_PROJECTS.map((project, i) => (
          <HackathonCard key={project.id} project={project} index={i} isDark={isDark} />
        ))}
      </motion.div>
    </section>
  );
}
