import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SKILL_CATEGORIES } from "@data/skills";
import { SKILL_PROFICIENCY } from "@data/achievements";
import { Layers, CheckCircle, TrendingUp } from "lucide-react";
import { useTheme } from "@context/ThemeContext";
import { fadeUp, scaleIn, spring } from "@components/common/AnimationVariants";

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "99,102,241";
  return `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`;
}

function ProficiencyBar({ skill, level, color, delay }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span style={{ fontSize: "0.78rem", color: "var(--text-secondary)", fontWeight: 500 }}>{skill}</span>
        <span style={{ fontSize: "0.72rem", color, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            boxShadow: `0 0 8px ${color}40`,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("categories");
  const [activeId, setActiveId] = useState(null);
  const { isDark } = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.06 });

  const categories = Object.entries(SKILL_PROFICIENCY);

  return (
    <section id="skills" className="section-container" ref={ref}>
      {/* Header */}
      <div className="text-center mb-12 sm:mb-14">
        <motion.div variants={fadeUp} custom={0} initial="hidden" animate={inView ? "visible" : "hidden"} className="mb-4">
          <span className="section-tag"><Layers size={12} />Technical Skills</span>
        </motion.div>
        <motion.h2 variants={fadeUp} custom={1} initial="hidden" animate={inView ? "visible" : "hidden"} className="section-title">
          Skills & Technologies
        </motion.h2>
        <div className="section-divider" />
      </div>

      {/* Tab toggle */}
      <div className="flex justify-center mb-10">
        <div
          className="inline-flex p-1 rounded-xl border"
          style={{
            background: isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.8)",
            borderColor: isDark ? "rgba(255,255,255,0.07)" : "rgba(59,130,246,0.1)",
          }}
        >
          {[
            { id: "categories", label: "Grid View", icon: Layers },
            { id: "proficiency", label: "Proficiency", icon: TrendingUp },
          ].map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold no-min-size transition-all"
                style={{
                  background: isActive ? (isDark ? "rgba(59,130,246,0.12)" : "rgba(59,130,246,0.08)") : "transparent",
                  color: isActive ? "#60a5fa" : isDark ? "#8892a4" : "#6b7280",
                  border: isActive ? "1px solid rgba(59,130,246,0.2)" : "1px solid transparent",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                <TabIcon size={13} />
                {tab.label}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Grid View */}
      {activeTab === "categories" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SKILL_CATEGORIES.map((cat, i) => {
            const isActive = activeId === cat.id;
            const rgb = hexToRgb(cat.color);
            return (
              <motion.div
                key={cat.id}
                variants={scaleIn}
                custom={i + 3}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover={{ y: -4, scale: 1.01 }}
                onClick={() => setActiveId(isActive ? null : cat.id)}
                className="rounded-2xl p-5 border cursor-pointer"
                style={{
                  background: isActive
                    ? `rgba(${rgb},0.07)`
                    : isDark ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.88)",
                  borderColor: isActive
                    ? `rgba(${rgb},0.35)`
                    : isDark ? "rgba(255,255,255,0.07)" : "rgba(59,130,246,0.08)",
                  transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style={{
                        background: `rgba(${rgb},0.1)`,
                        border: `1px solid rgba(${rgb},0.22)`,
                      }}
                    >
                      {cat.icon}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.9rem", color: isDark ? "#e8ecf4" : "#0f0f1a" }}>
                        {cat.label}
                      </div>
                      <div style={{ fontSize: "0.7rem", color: isDark ? "#475569" : "#9ca3af", marginTop: "1px" }}>
                        {cat.skills.length} technologies
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: isActive ? cat.color : isDark ? "#334155" : "#d1d5db",
                      boxShadow: isActive ? `0 0 8px ${cat.color}` : "none",
                    }}
                  />
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        background: isActive ? `rgba(${rgb},0.1)` : isDark ? "rgba(255,255,255,0.035)" : "rgba(0,0,0,0.04)",
                        border: isActive ? `1px solid rgba(${rgb},0.25)` : isDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.07)",
                        color: isActive ? cat.color : isDark ? "#94a3b8" : "#6b7280",
                      }}
                    >
                      {isActive && <CheckCircle size={8} />}
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Proficiency View */}
      {activeTab === "proficiency" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {categories.map(([category, skills], catIdx) => {
            const color = ["#60a5fa", "#2563eb", "#22d3ee", "#10b981", "#3b82f6"][catIdx % 5];
            return (
              <div
                key={category}
                className="rounded-2xl p-5 border"
                style={{
                  background: isDark ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.85)",
                  borderColor: isDark ? "rgba(255,255,255,0.07)" : "rgba(59,130,246,0.08)",
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: color, boxShadow: `0 0 6px ${color}60` }}
                  />
                  <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: isDark ? "#e8ecf4" : "#0f0f1a" }}>
                    {category}
                  </h3>
                </div>
                <div className="space-y-3">
                  {Object.entries(skills).map(([skill, level], i) => (
                    <ProficiencyBar key={skill} skill={skill} level={level} color={color} delay={i * 0.08} />
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      )}
    </section>
  );
}
