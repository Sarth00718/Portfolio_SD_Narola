import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Award,
  ChevronDown,
  ChevronUp,
  Download,
  FileText,
} from "lucide-react";
import { ACHIEVEMENTS } from "@data/achievements";

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
function AchievementCard({ ach, index, isExpanded, onToggle }) {
  const isEven = index % 2 === 0;

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
      {/* Card */}
      <motion.div
        whileHover={{ y: -4 }}
        onClick={onToggle}
        className="group relative rounded-2xl border overflow-hidden transition-all duration-500 cursor-pointer"
        style={{
          background: isExpanded
            ? `linear-gradient(135deg, ${ach.accentColor}08, ${ach.accentColor}03)`
            : "rgba(255,255,255,0.03)",
          borderColor: isExpanded
            ? `${ach.accentColor}30`
            : "rgba(255,255,255,0.08)",
          boxShadow: isExpanded
            ? `0 0 40px ${ach.accentColor}15, 0 20px 40px rgba(0,0,0,0.2)`
            : "0 4px 20px rgba(0,0,0,0.15)",
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
                  <h3 className="font-display font-bold text-white text-sm sm:text-base leading-snug">
                    {ach.title}
                  </h3>
                  <p
                    className="text-xs mt-1 font-medium"
                    style={{ color: ach.accentColor }}
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
                  className="px-2.5 py-1 rounded-md text-xs font-semibold"
                  style={{
                    background: `${ach.accentColor}15`,
                    border: `1px solid ${ach.accentColor}25`,
                    color: ach.accentColor,
                  }}
                >
                  {ach.badge}
                </span>
                <span
                  className="px-2 py-0.5 rounded-md text-xs capitalize"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#94a3b8",
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
                  <p className="text-xs text-slate-400 leading-relaxed">
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
function JourneyBanner({ inView }) {
  const highlights = [
    { icon: "🏅", label: "Amazon ML School", value: "Selected" },
    { icon: "🎓", label: "CGPA", value: "9.10" },
    { icon: "⚡", label: "Hackathons", value: "3+" },
    { icon: "🇮🇳", label: "SIH Participant", value: "2024" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-12">
      {highlights.map((h, i) => (
        <motion.div
          key={h.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.15 + i * 0.08, type: "spring", damping: 15 }}
          whileHover={{ y: -3, scale: 1.03 }}
          className="rounded-2xl p-4 border text-center group"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <span className="text-xl block mb-1">{h.icon}</span>
          <div
            className="text-lg font-black font-display"
            style={{
              background: "linear-gradient(135deg, #60a5fa, #0ea5e9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {h.value}
          </div>
          <span className="text-xs text-slate-500">{h.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Main Section ──────────────────────────────────────────── */
export default function AchievementsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [expandedId, setExpandedId] = useState(null);

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
      <JourneyBanner inView={inView} />

      {/* Timeline Cards */}
      <div className="max-w-3xl mx-auto space-y-4">
        {ACHIEVEMENTS.map((ach, i) => (
          <AchievementCard
            key={ach.id}
            ach={ach}
            index={i}
            isExpanded={expandedId === ach.id}
            onToggle={() => toggle(ach.id)}
          />
        ))}
      </div>
    </section>
  );
}
