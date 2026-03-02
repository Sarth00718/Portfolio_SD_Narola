import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, BrainCircuit } from "lucide-react";
import { ML_PROJECTS } from "@data/projects";

function MLCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group rounded-2xl border overflow-hidden text-center transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="p-6">
        {/* Emoji */}
        <div className="text-4xl mb-3">{project.emoji}</div>

        {/* Title */}
        <h3 className="font-display font-bold text-white text-base mb-1">
          {project.title}
        </h3>
        <p className="text-xs text-slate-400 font-medium mb-4">
          {project.subtitle}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 justify-center mb-4">
          {project.techTags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-xs text-slate-400 font-medium"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Metric */}
        <div className="flex items-center justify-center gap-2 text-xs text-slate-300 font-semibold">
          <span>{project.metricIcon}</span>
          <span>{project.metric}</span>
        </div>

        {/* GitHub */}
        <div className="mt-5 pt-4 border-t border-white/5">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white border transition-all"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            <Github size={13} />
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function MLProjectsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="ml-projects" className="section-container pt-0" ref={ref}>
      {/* Header */}
      <div className="text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-4"
        >
          <span className="section-tag">
            <BrainCircuit size={12} />
            Machine Learning
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          Machine Learning Projects
        </motion.h2>
        <div className="gradient-divider" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-400 max-w-xl mx-auto mt-4 text-sm leading-relaxed"
        >
          End-to-end ML projects with real-world datasets and deployment-ready
          pipelines.
        </motion.p>
      </div>

      {/* 3 column grid */}
      <div className="grid sm:grid-cols-3 gap-5">
        {ML_PROJECTS.map((project, i) => (
          <MLCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
