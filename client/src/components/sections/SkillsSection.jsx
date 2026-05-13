import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SKILL_CATEGORIES } from "@data/skills";
import { Layers, CheckCircle } from "lucide-react";
import { useTheme } from "@context/ThemeContext";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function SkillsSection() {
  const [activeId, setActiveId] = useState(null);
  const { isDark } = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.06 });

  return (
    <section id="skills" className="section-container" ref={ref}>
      {/* Header */}
      <div className="text-center mb-12 sm:mb-14">
        <motion.div
          variants={fadeUp} custom={0} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="mb-4"
        >
          <span className="section-tag"><Layers size={14} />Technical Skills</span>
        </motion.div>
        <motion.h2
          variants={fadeUp} custom={1} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="section-title"
        >
          Skills & Technologies
        </motion.h2>
        <div className="gradient-divider" />
        <motion.p
          variants={fadeUp} custom={2} initial="hidden" animate={inView ? "visible" : "hidden"}
          style={{
            color: "var(--text-secondary)",
            maxWidth: "500px", margin: "1rem auto 0",
            fontSize: "clamp(0.875rem, 2vw, 1rem)", lineHeight: 1.75,
          }}
        >
          Technologies I work with across full-stack, AI/ML, and software engineering.
        </motion.p>
      </div>

      {/* Skill categories grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {SKILL_CATEGORIES.map((cat, i) => {
          const isActive = activeId === cat.id;
          return (
            <motion.div
              key={cat.id}
              variants={fadeUp} custom={i + 3} initial="hidden" animate={inView ? "visible" : "hidden"}
              whileHover={{ y: -4, scale: 1.01 }}
              onClick={() => setActiveId(isActive ? null : cat.id)}
              className="rounded-2xl p-5 border cursor-pointer transition-all"
              style={{
                background: isActive
                  ? isDark ? `rgba(${hexToRgb(cat.color)},0.08)` : `rgba(${hexToRgb(cat.color)},0.05)`
                  : isDark ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.88)",
                border: isActive
                  ? `1px solid rgba(${hexToRgb(cat.color)},0.35)`
                  : isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(99,102,241,0.1)",
                boxShadow: isActive
                  ? `0 8px 32px rgba(${hexToRgb(cat.color)},0.15)`
                  : isDark ? "0 2px 16px rgba(0,0,0,0.2)" : "0 2px 16px rgba(99,102,241,0.05)",
              }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                    style={{
                      background: `rgba(${hexToRgb(cat.color)},0.12)`,
                      border: `1px solid rgba(${hexToRgb(cat.color)},0.25)`,
                    }}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        letterSpacing: "-0.02em",
                        color: isDark ? "#f0f4ff" : "#0f0f23",
                      }}
                    >
                      {cat.label}
                    </div>
                    <div style={{ fontSize: "0.72rem", color: isDark ? "#475569" : "#9ca3af", marginTop: "1px" }}>
                      {cat.skills.length} technologies
                    </div>
                  </div>
                </div>
                <div
                  className="w-1.5 h-1.5 rounded-full transition-all"
                  style={{
                    background: isActive ? cat.color : isDark ? "#334155" : "#d1d5db",
                    boxShadow: isActive ? `0 0 8px ${cat.color}` : "none",
                  }}
                />
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      background: isActive
                        ? `rgba(${hexToRgb(cat.color)},0.1)`
                        : isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
                      border: isActive
                        ? `1px solid rgba(${hexToRgb(cat.color)},0.25)`
                        : isDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.07)",
                      color: isActive ? cat.color : isDark ? "#94a3b8" : "#6b7280",
                    }}
                  >
                    {isActive && <CheckCircle size={9} />}
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

// Helper: convert hex color to rgb string "r,g,b"
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "99,102,241";
  return `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`;
}
