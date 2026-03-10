import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SKILL_CATEGORIES } from "@data/skills";
import { Layers } from "lucide-react";
import { useTheme } from "@context/ThemeContext";

export default function SkillsSection() {
  const [activeId, setActiveId] = useState(null);
  const { isDark } = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  const defaultCardBg = isDark
    ? "rgba(255,255,255,0.03)"
    : "rgba(255,255,255,0.75)";
  const defaultCardBorder = isDark
    ? "rgba(255,255,255,0.08)"
    : "rgba(0,0,0,0.08)";

  return (
    <section id="skills" className="section-container" ref={ref}>
      {/* Header */}
      <div className="text-center mb-12 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-4"
        >
          <span className="section-tag">
            <Layers size={14} />
            Technical Skills
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          Skills &amp; Technologies
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
          Technologies I work with across full-stack development, AI/ML, and
          software engineering.
        </motion.p>
      </div>

      {/* 2 col mobile → 3 tablet → 4 desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 w-full">
        {SKILL_CATEGORIES.map((cat, catIdx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: catIdx * 0.08 }}
            whileHover={{ y: -4 }}
            onHoverStart={() => setActiveId(cat.id)}
            onHoverEnd={() => setActiveId(null)}
            className="relative rounded-2xl border transition-all duration-300 cursor-default"
            style={{
              padding: "clamp(1rem, 3vw, 1.5rem)",
              background: activeId === cat.id ? cat.bg : defaultCardBg,
              borderColor: activeId === cat.id ? cat.border : defaultCardBorder,
              boxShadow:
                activeId === cat.id
                  ? `0 0 30px ${cat.color}18, 0 8px 24px rgba(0,0,0,0.15)`
                  : isDark
                    ? "0 4px 16px rgba(0,0,0,0.2)"
                    : "0 2px 12px rgba(0,0,0,0.06)",
            }}
          >
            {/* Category header */}
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                style={{
                  fontSize: "1.1rem",
                  background: cat.bg,
                  border: `1px solid ${cat.border}`,
                }}
              >
                {cat.icon}
              </div>
              <div className="min-w-0">
                <h3
                  style={{
                    fontFamily: "'Outfit','Inter',sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(0.8rem, 2vw, 0.95rem)",
                    color:
                      activeId === cat.id
                        ? cat.color
                        : isDark
                          ? "#f1f5f9"
                          : "#0f172a",
                    lineHeight: 1.2,
                    transition: "color 0.3s",
                  }}
                >
                  {cat.label}
                </h3>
                <p
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--text-muted)",
                    marginTop: "1px",
                  }}
                >
                  {cat.skills.length} tech
                </p>
              </div>
              {/* Accent dot */}
              <motion.div
                animate={{ scale: activeId === cat.id ? [1, 1.4, 1] : 1 }}
                transition={{
                  duration: 0.6,
                  repeat: activeId === cat.id ? Infinity : 0,
                }}
                className="ml-auto w-2 h-2 rounded-full flex-shrink-0"
                style={{
                  background: cat.color,
                  opacity: activeId === cat.id ? 1 : 0.3,
                }}
              />
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: catIdx * 0.06 + i * 0.04,
                    duration: 0.3,
                  }}
                  style={{
                    padding: "3px 10px",
                    borderRadius: "6px",
                    fontSize: "clamp(0.65rem, 1.5vw, 0.75rem)",
                    fontWeight: 500,
                    background:
                      activeId === cat.id
                        ? cat.bg
                        : isDark
                          ? "rgba(255,255,255,0.05)"
                          : "rgba(0,0,0,0.04)",
                    border: `1px solid ${activeId === cat.id ? cat.border : isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
                    color:
                      activeId === cat.id
                        ? cat.color
                        : isDark
                          ? "#94a3b8"
                          : "#475569",
                    transition: "all 0.2s",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
