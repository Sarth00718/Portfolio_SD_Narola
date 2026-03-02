import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Calendar } from 'lucide-react';
import { ACHIEVEMENTS } from '@data/achievements';

function AchievementCard({ achievement, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl p-7 border overflow-hidden transition-all duration-300 cursor-default"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* Hover background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />
      {/* Left accent */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b ${achievement.color} rounded-l-2xl`}
      />

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <motion.div
            whileHover={{ rotate: 8, scale: 1.1 }}
            className="text-4xl leading-none"
          >
            {achievement.icon}
          </motion.div>
          <div className="flex flex-col items-end gap-2">
            <span
              className="px-2.5 py-1 rounded-lg text-xs font-bold"
              style={{
                background: `${achievement.accentColor}15`,
                border: `1px solid ${achievement.accentColor}30`,
                color: achievement.accentColor,
              }}
            >
              {achievement.badge}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-600">
              <Calendar size={10} />
              {achievement.year}
            </span>
          </div>
        </div>

        {/* Text */}
        <h3 className="font-display font-bold text-white text-base leading-snug mb-1.5 group-hover:text-white transition-colors">
          {achievement.title}
        </h3>
        <p className="text-xs font-semibold mb-3" style={{ color: achievement.accentColor }}>
          {achievement.subtitle}
        </p>
        <p className="text-sm text-slate-400 leading-relaxed">
          {achievement.description}
        </p>

        {/* Type tag */}
        <div className="mt-5 pt-4 border-t border-white/5">
          <span className="text-xs text-slate-600 uppercase tracking-widest capitalize">
            {achievement.type}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function AchievementsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="achievements" className="section-container" ref={ref}>
      {/* Header */}
      <div className="text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-4"
        >
          <span className="section-tag">
            <Trophy size={12} />
            Recognition
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          Achievements & Highlights
        </motion.h2>
        <div className="gradient-divider" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-400 max-w-lg mx-auto mt-4 text-sm"
        >
          Academic excellence, industry recognition, and competitive accomplishments as a final-year engineer.
        </motion.p>
      </div>

      {/* Cards grid */}
      <div className="grid sm:grid-cols-2 gap-6">
        {ACHIEVEMENTS.map((ach, i) => (
          <AchievementCard key={ach.id} achievement={ach} index={i} />
        ))}
      </div>
    </section>
  );
}
