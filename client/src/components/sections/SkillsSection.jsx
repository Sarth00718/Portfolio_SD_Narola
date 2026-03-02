import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SKILL_CATEGORIES } from '@data/skills';
import { Layers } from 'lucide-react';

export default function SkillsSection() {
  const [activeId, setActiveId] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="skills" className="section-container" ref={ref}>
      {/* Header */}
      <div className="text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-4"
        >
          <span className="section-tag">
            <Layers size={12} />
            Technical Skills
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          Skills & Technologies
        </motion.h2>
        <div className="gradient-divider" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-400 max-w-xl mx-auto mt-4 text-sm leading-relaxed"
        >
          Technologies I work with across full-stack development, AI/ML, and software engineering.
        </motion.p>
      </div>

      {/* Category Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILL_CATEGORIES.map((cat, catIdx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: catIdx * 0.08 }}
            whileHover={{ y: -4 }}
            onHoverStart={() => setActiveId(cat.id)}
            onHoverEnd={() => setActiveId(null)}
            className="relative rounded-2xl p-6 border transition-all duration-300 cursor-default group"
            style={{
              background: activeId === cat.id ? cat.bg : 'rgba(255,255,255,0.03)',
              border: `1px solid ${activeId === cat.id ? cat.border : 'rgba(255,255,255,0.08)'}`,
              boxShadow: activeId === cat.id
                ? `0 0 30px ${cat.color}18, 0 8px 24px rgba(0,0,0,0.3)`
                : '0 4px 16px rgba(0,0,0,0.2)',
            }}
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 transition-all duration-300"
                style={{
                  background: cat.bg,
                  border: `1px solid ${cat.border}`,
                }}
              >
                {cat.icon}
              </div>
              <div>
                <h3
                  className="font-display font-bold text-sm tracking-wide transition-colors duration-300"
                  style={{ color: activeId === cat.id ? cat.color : '#f1f5f9' }}
                >
                  {cat.label}
                </h3>
                <p className="text-xs text-slate-500">{cat.skills.length} technologies</p>
              </div>
              {/* Accent dot */}
              <motion.div
                animate={{ scale: activeId === cat.id ? [1, 1.4, 1] : 1 }}
                transition={{ duration: 0.6, repeat: activeId === cat.id ? Infinity : 0 }}
                className="ml-auto w-2 h-2 rounded-full"
                style={{ background: cat.color, opacity: activeId === cat.id ? 1 : 0.3 }}
              />
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: catIdx * 0.06 + i * 0.04, duration: 0.3 }}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
                  style={{
                    background: activeId === cat.id ? cat.bg : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${activeId === cat.id ? cat.border : 'rgba(255,255,255,0.08)'}`,
                    color: activeId === cat.id ? cat.color : '#94a3b8',
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
