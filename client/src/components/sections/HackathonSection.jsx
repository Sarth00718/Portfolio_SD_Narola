import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Globe, Rocket } from "lucide-react";
import { HACKATHON_PROJECTS } from "@data/projects";

function SmartBiteCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start gap-3 mb-2">
          <span className="text-2xl">{project.emoji}</span>
          <div>
            <h3 className="font-display font-bold text-white text-lg">
              {project.title}
            </h3>
            <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
              <span className="text-base">🏆</span>
              <em>{project.subtitle}</em>
            </p>
          </div>
        </div>

        {/* Feature Table - Responsive */}
        <div className="mt-6 overflow-x-auto -mx-2 sm:mx-0">
          <div className="inline-block min-w-full align-middle">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2.5 px-2 sm:px-3 text-xs font-bold text-slate-300 w-1/3 min-w-[100px]">
                    Feature
                  </th>
                  <th className="text-left py-2.5 px-2 sm:px-3 text-xs font-bold text-slate-300 min-w-[200px]">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {project.features.map((feat, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-2.5 px-2 sm:px-3 text-xs text-slate-300 font-medium">
                      <span className="mr-1.5">{feat.icon}</span>
                      <span className="whitespace-normal sm:whitespace-nowrap">{feat.label}</span>
                    </td>
                    <td className="py-2.5 px-2 sm:px-3 text-xs text-slate-400">
                      {feat.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* GitHub link */}
        <div className="mt-5">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white border transition-all"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            <Github size={13} />
            View on GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

function HackathonCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="rounded-2xl border overflow-hidden transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-3 mb-1">
          <span className="text-2xl">{project.emoji}</span>
          <div>
            <h3 className="font-display font-bold text-white text-base">
              {project.title}
            </h3>
            <p className="text-xs text-slate-400 font-semibold mt-0.5">
              {project.subtitle}
            </p>
          </div>
        </div>

        {project.tagline && (
          <p className="text-xs text-slate-500 italic mt-2 ml-11">
            {project.tagline}
          </p>
        )}

        {/* Features */}
        <ul className="space-y-2.5 mt-4 ml-1">
          {project.features.map((feat, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-xs text-slate-300"
            >
              <span className="text-sm leading-none mt-0.5 flex-shrink-0">
                {feat.icon}
              </span>
              <span
                dangerouslySetInnerHTML={{
                  __html: feat.text.replace(
                    /\b(PostgreSQL|RBAC|Socket\.io|Redux Toolkit|JWT|OCR)\b/g,
                    '<strong class="text-white">$1</strong>',
                  ),
                }}
              />
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="mt-5 pt-4 border-t border-white/5 flex gap-2">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white border transition-all"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            <Github size={13} />
            GitHub
          </motion.a>
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition-all"
              style={{
                border: "1px solid rgba(16,185,129,0.3)",
                background: "rgba(16,185,129,0.1)",
                color: "#34d399",
              }}
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

export default function HackathonSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const smartBite = HACKATHON_PROJECTS.find((p) => p.isLarge);
  const others = HACKATHON_PROJECTS.filter((p) => !p.isLarge);

  return (
    <section id="hackathon" className="section-container pt-0" ref={ref}>
      {/* Header */}
      <div className="text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-4"
        >
          <span className="section-tag">
            <Rocket size={12} />
            Hackathons
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          Hackathon & Innovation Projects
        </motion.h2>
        <div className="gradient-divider" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-400 max-w-xl mx-auto mt-4 text-sm leading-relaxed"
        >
          Award-winning projects built at competitive hackathons and innovation
          challenges.
        </motion.p>
      </div>

      {/* SmartBite — full width */}
      {smartBite && <SmartBiteCard project={smartBite} />}

      {/* FleetFlow + ExeMan — 1 col mobile, 2 col tablet+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mt-4 sm:mt-5">
        {others.map((project, i) => (
          <HackathonCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
