import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, ChevronDown } from "lucide-react";
import { ACHIEVEMENTS } from "@data/achievements";
import { useTheme } from "@context/ThemeContext";
import { fadeUp, scaleIn } from "@components/common/AnimationVariants";

function AchievementCard({ ach, index, isExpanded, onToggle, isDark }) {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <motion.div
        whileHover={{ y: -3 }}
        onClick={onToggle}
        className="group relative rounded-2xl border overflow-hidden cursor-pointer"
        style={{
          background: isExpanded
            ? `linear-gradient(135deg, ${ach.color}10, ${ach.color}04)`
            : isDark ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.85)",
          borderColor: isExpanded ? `${ach.color}30` : isDark ? "rgba(255,255,255,0.07)" : "rgba(59,130,246,0.08)",
          transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
              style={{
                background: `${ach.color}12`,
                border: `1px solid ${ach.color}25`,
              }}
            >
              {ach.icon}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: "clamp(0.85rem,2.5vw,1.05rem)", color: isDark ? "#e8ecf4" : "#0f0f1a", lineHeight: 1.3 }}>
                    {ach.title}
                  </h3>
                  <p style={{ fontSize: "0.78rem", marginTop: "2px", fontWeight: 600, color: ach.color }}>
                    {ach.subtitle || ach.organization}
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span style={{
                    fontSize: "0.7rem", fontWeight: 700, padding: "3px 9px", borderRadius: "6px",
                    background: `${ach.color}15`, border: `1px solid ${ach.color}25`, color: ach.color,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}>
                    {ach.date || ach.year}
                  </span>
                  <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown size={14} style={{ color: isDark ? "#64748b" : "#9ca3af" }} />
                  </motion.div>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-2.5">
                <span style={{
                  padding: "3px 9px", borderRadius: "6px", fontSize: "0.72rem", fontWeight: 600,
                  background: `${ach.color}15`, border: `1px solid ${ach.color}25`, color: ach.color,
                }}>
                  {ach.type || ach.badge}
                </span>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {isExpanded && ach.description && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-4 mt-4 border-t" style={{ borderColor: `${ach.color}15` }}>
                  <p style={{ fontSize: "clamp(0.78rem,1.8vw,0.85rem)", color: isDark ? "#94a3b8" : "#475569", lineHeight: 1.7 }}>
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function AchievementsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [expandedId, setExpandedId] = useState(null);
  const { isDark } = useTheme();

  const toggle = (id) => setExpandedId((prev) => (prev === id ? null : id));

  return (
    <section id="achievements" className="section-container pt-0" ref={ref}>
      <div className="text-center mb-14">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-4">
          <span className="section-tag"><Award size={12} />Achievements</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="section-title">
          Achievements & Milestones
        </motion.h2>
        <div className="section-divider" />
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {ACHIEVEMENTS.map((ach, i) => (
          <AchievementCard
            key={ach.id} ach={ach} index={i}
            isExpanded={expandedId === ach.id}
            onToggle={() => toggle(ach.id)}
            isDark={isDark}
          />
        ))}
      </div>
    </section>
  );
}
