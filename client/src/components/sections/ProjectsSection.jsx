import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Globe, ExternalLink, FolderOpen } from 'lucide-react';
import { CORE_PROJECTS } from '@data/projects';

function CoreCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
      whileHover={{ y: -5 }}
      className="group rounded-2xl border overflow-hidden transition-all duration-300"
      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-3 mb-1">
          <span className="text-2xl leading-none">{project.emoji}</span>
          <div className="flex-1">
            <h3 className="font-display font-bold text-white text-lg leading-snug">{project.title}</h3>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">{project.subtitle}</p>
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mt-4 mb-5">
          {project.techStack.map(tech => (
            <span
              key={tech.label}
              className="px-2.5 py-1 rounded-md text-xs font-semibold"
              style={{ background: tech.bg, color: tech.color, border: `1px solid ${tech.color}25` }}
            >
              {tech.label}
            </span>
          ))}
        </div>

        {/* Features */}
        <ul className="space-y-2.5">
          {project.features.map((feat, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
              <span className="text-base leading-none mt-0.5 flex-shrink-0">{feat.icon}</span>
              <span
                className="text-xs leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: feat.text.replace(
                    /\b(LangChain|FAISS|Groq|Google Gemini|Socket\.io|Redux Toolkit|JWT|MongoDB Atlas|Razorpay|Firebase|Render|smartexptrack\.me)\b/g,
                    '<strong class="text-white">$1</strong>'
                  ),
                }}
              />
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex gap-2 mt-5 pt-4 border-t border-white/5">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white border transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)' }}
            >
              <Github size={13} />
              GitHub
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition-all"
              style={{ border: '1px solid rgba(16,185,129,0.3)', background: 'rgba(16,185,129,0.1)', color: '#34d399' }}
            >
              <Globe size={13} />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="section-container" ref={ref}>
      {/* Header */}
      <div className="text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-4"
        >
          <span className="section-tag">
            <FolderOpen size={12} />
            Projects
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          Core Full-Stack & AI Projects
        </motion.h2>
        <div className="gradient-divider" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-400 max-w-xl mx-auto mt-4 text-sm leading-relaxed"
        >
          Production-ready applications built with modern full-stack and AI technologies.
        </motion.p>
      </div>

      {/* Responsive grid: 1 col mobile, 2 col tablet, 2 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
        {CORE_PROJECTS.map((project, i) => (
          <CoreCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
