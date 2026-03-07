import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Cpu, Globe } from "lucide-react";
import { DSA_PROJECTS } from "@data/projects";

export default function DSAProjectsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="dsa-projects" className="section-container pt-0" ref={ref}>
      {/* Header */}
      <div className="text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-4"
        >
          <span className="section-tag">
            <Cpu size={12} />
            DSA & Core
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          DSA & Core Projects
        </motion.h2>
        <div className="gradient-divider" />
      </div>

      {/* Table - Responsive with horizontal scroll */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.15 }}
        className="rounded-2xl border overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="overflow-x-auto -mx-2 sm:mx-0">
          <div className="inline-block min-w-full align-middle">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 sm:py-3.5 px-3 sm:px-5 text-xs font-bold text-slate-300 min-w-[120px]">
                    <span className="mr-1.5">📂</span> Project
                  </th>
                  <th className="text-left py-3 sm:py-3.5 px-3 sm:px-5 text-xs font-bold text-slate-300 min-w-[100px]">
                    <span className="mr-1.5">🔧</span> Tech Stack
                  </th>
                  <th className="text-left py-3 sm:py-3.5 px-3 sm:px-5 text-xs font-bold text-slate-300 min-w-[200px]">
                    <span className="mr-1.5">📝</span> Description
                  </th>
                  <th className="text-left py-3 sm:py-3.5 px-3 sm:px-5 text-xs font-bold text-slate-300 min-w-[80px]">
                    <span className="mr-1.5">🔗</span> Link
                  </th>
                </tr>
              </thead>
              <tbody>
                {DSA_PROJECTS.map((project, i) => (
                  <motion.tr
                    key={project.title}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-2.5 sm:py-3 px-3 sm:px-5 text-xs sm:text-sm font-semibold text-white">
                      {project.title}
                    </td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-5 text-xs text-slate-400">
                      {project.techStack}
                    </td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-5 text-xs text-slate-400">
                      {project.description}
                    </td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-5">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all hover:scale-105"
                          style={{
                            border: "1px solid rgba(16,185,129,0.3)",
                            background: "rgba(16,185,129,0.1)",
                            color: "#34d399",
                          }}
                        >
                          <Globe size={11} />
                          <span className="hidden sm:inline">Live</span>
                        </a>
                      ) : (
                        <span className="text-xs text-slate-600">—</span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
