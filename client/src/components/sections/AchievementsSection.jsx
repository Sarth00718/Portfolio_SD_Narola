import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, ChevronDown } from "lucide-react";
import { ACHIEVEMENTS } from "@data/achievements";
import { useTheme } from "@context/ThemeContext";

/* ─── Animated number counter ───────────────────────────────── */
function AnimatedYear({ year, color }) {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      className="text-xs font-black font-mono px-3 py-1 rounded-full"
      style={{
        background: `${color}15`,
        border: `1px solid ${color}30`,
        color,
      }}
    >
      {year}
    </motion.div>
  );
}

/* ─── Timeline node (pulsing dot) ───────────────────────────── */
function TimelineDot({ color, isActive }) {
  return (
    <div className="relative flex-shrink-0">
      <motion.div
        animate={isActive ? { scale: [1, 1.4, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-4 h-4 rounded-full border-2"
        style={{
          background: color,
          borderColor: `${color}80`,
          boxShadow: `0 0 12px ${color}40`,
        }}
      />
      {isActive && (
        <div
          className="absolute inset-0 w-4 h-4 rounded-full animate-ping"
          style={{ background: color, opacity: 0.3 }}
        />
      )}
    </div>
  );
}

/* ─── Achievement Card ──────────────────────────────────────── */
function AchievementCard({ ach, index, isExpanded, onToggle, isDark }) {
  const isEven = index % 2 === 0;

  const defaultBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.8)";
  const defaultBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        type: "spring",
        damping: 20,
      }}
      className="relative"
    >
      <motion.div
        whileHover={{ y: -4 }}
        onClick={onToggle}
        className="group relative rounded-2xl border overflow-hidden transition-all duration-500 cursor-pointer"
        style={{
          background: isExpanded
            ? `linear-gradient(135deg, ${ach.accentColor}10, ${ach.accentColor}04)`
            : defaultBg,
          borderColor: isExpanded ? `${ach.accentColor}30` : defaultBorder,
          boxShadow: isExpanded
            ? `0 0 40px ${ach.accentColor}15, 0 20px 40px rgba(0,0,0,0.15)`
            : isDark
              ? "0 4px 20px rgba(0,0,0,0.15)"
              : "0 2px 12px rgba(0,0,0,0.06)",
        }}
      >
        {/* Accent top bar */}
        <div
          className="h-0.5 w-full"
          style={{
            background: `linear-gradient(90deg, ${ach.accentColor}, ${ach.accentColor}60)`,
          }}
        />

        <div className="p-5 sm:p-6">
          {/* Header row */}
          <div className="flex items-start gap-4">
            {/* Icon with glow */}
            <motion.div
              animate={isExpanded ? { rotate: [0, 10, -10, 0] } : {}}
              transition={{ duration: 0.6 }}
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{
                background: `${ach.accentColor}12`,
                border: `1px solid ${ach.accentColor}25`,
                boxShadow: isExpanded
                  ? `0 0 20px ${ach.accentColor}20`
                  : "none",
              }}
            >
              {ach.icon}
            </motion.div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3
                    style={{
                      fontFamily: "'Outfit','Inter',sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(0.9rem,2.5vw,1.1rem)",
                      color: isDark ? "#f1f5f9" : "#0f172a",
                      lineHeight: 1.3,
                    }}
                  >
                    {ach.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      marginTop: "3px",
                      fontWeight: 600,
                      color: ach.accentColor,
                    }}
                  >
                    {ach.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <AnimatedYear year={ach.year} color={ach.accentColor} />
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-slate-500"
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </div>
              </div>

              {/* Badge */}
              <div className="flex items-center gap-2 mt-2.5">
                <span
                  style={{
                    padding: "3px 10px",
                    borderRadius: "6px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    background: `${ach.accentColor}15`,
                    border: `1px solid ${ach.accentColor}25`,
                    color: ach.accentColor,
                  }}
                >
                  {ach.badge}
                </span>
                <span
                  style={{
                    padding: "3px 8px",
                    borderRadius: "6px",
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    background: isDark
                      ? "rgba(255,255,255,0.05)"
                      : "rgba(0,0,0,0.05)",
                    border: isDark
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "1px solid rgba(0,0,0,0.08)",
                    color: isDark ? "#94a3b8" : "#64748b",
                  }}
                >
                  {ach.type}
                </span>
              </div>
            </div>
          </div>

          {/* Expanded content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div
                  className="pt-4 mt-4 border-t"
                  style={{ borderColor: `${ach.accentColor}15` }}
                >
                  <p
                    style={{
                      fontSize: "clamp(0.8rem,1.8vw,0.875rem)",
                      color: isDark ? "#94a3b8" : "#475569",
                      lineHeight: 1.7,
                    }}
                  >
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

/* ─── Journey Stats Banner ──────────────────────────────────── */
function JourneyBanner({ inView, isDark }) {
  const highlights = [
    { icon: "🏅", label: "Amazon ML School", value: "Selected" },
    { icon: "🎓", label: "CGPA", value: "9.10" },
    { icon: "⚡", label: "Hackathons", value: "3+" },
    { icon: "🇮🇳", label: "SIH Participant", value: "2024" },
  ];

  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.8)";
  const cardBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
      {highlights.map((h, i) => (
        <motion.div
          key={h.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.15 + i * 0.08, type: "spring", damping: 15 }}
          whileHover={{ y: -3, scale: 1.03 }}
          className="rounded-2xl p-4 border text-center"
          style={{ background: cardBg, borderColor: cardBorder }}
        >
          <span style={{ fontSize: "1.4rem" }} className="block mb-1">
            {h.icon}
          </span>
          <div
            style={{
              fontFamily: "'Outfit','Inter',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.1rem,3vw,1.4rem)",
              background: "linear-gradient(135deg, #60a5fa, #0ea5e9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {h.value}
          </div>
          <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
            {h.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Main Section ──────────────────────────────────────────── */
export default function AchievementsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [expandedId, setExpandedId] = useState(null);
  const { isDark } = useTheme();

  const toggle = (id) => setExpandedId((prev) => (prev === id ? null : id));

  return (
    <section id="achievements" className="section-container pt-0" ref={ref}>
      {/* Header */}
      <div className="text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-4"
        >
          <span className="section-tag">
            <Award size={12} />
            Achievements
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          Achievements & Milestones
        </motion.h2>
        <div className="gradient-divider" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-lg mx-auto mt-4 text-sm leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Key milestones from my academic journey, competitive hackathons, and
          industry recognitions.
        </motion.p>
      </div>

      {/* Stats Banner */}
      <JourneyBanner inView={inView} isDark={isDark} />

      {/* Timeline Cards */}
      <div className="max-w-3xl mx-auto space-y-4">
        {ACHIEVEMENTS.map((ach, i) => (
          <AchievementCard
            key={ach.id}
            ach={ach}
            index={i}
            isExpanded={expandedId === ach.id}
            onToggle={() => toggle(ach.id)}
            isDark={isDark}
          />
        ))}
      </div>
    </section>
  );
}
