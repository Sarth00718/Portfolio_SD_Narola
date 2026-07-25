import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin, CheckCircle, Code2 } from "lucide-react";
import { useTheme } from "@context/ThemeContext";
import { cinematicSlideUp, stagger3D, stagger3DItem } from "@components/common/AnimationVariants";

const EXPERIENCE_DATA = [
  {
    id: "unikwork-intern",
    role: "Full Stack Developer Intern",
    company: "UNIKWORK",
    logo: "/unikwork.png",
    duration: "May 2026 – June 2026",
    employmentType: "Summer Internship",
    location: "Surat, Gujarat, India",
    overview: "Worked as a Full Stack Developer Intern on the UNIKWORK Dashboard, contributing to the development of a production-level project used for project management, task tracking, and business workflow management. Collaborated closely with senior frontend and backend developers in an agile development environment.",
    contributions: [
      "Developed and enhanced production-ready React.js and Next.js components following reusable and scalable architecture",
      "Integrated multiple REST APIs into frontend modules for projects, clients, employees, assets, tasks, and authentication",
      "Built dynamic task management features including board view, list view, task details, and task updates",
      "Implemented advanced filtering, searching, sorting, pagination, and server-side data handling",
      "Fixed responsive design issues across desktop, tablet, and mobile devices with pixel-perfect layouts",
      "Debugged frontend and backend issues, resolved API integration problems, and optimized application performance",
      "Collaborated daily with senior developers through code reviews, feature discussions, and debugging sessions",
    ],
    techStack: [
      "React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS",
      "Node.js", "Express.js", "REST APIs", "Git", "Postman",
    ],
  },
];

export default function ExperienceSection() {
  const { isDark } = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="section-container" ref={ref}>
      <div className="text-center mb-16 sm:mb-20">
        <motion.div variants={cinematicSlideUp} custom={0} initial="hidden" animate={inView ? "visible" : "hidden"} className="mb-4">
          <span className="section-tag"><Briefcase size={12} />Professional Experience</span>
        </motion.div>
        <motion.h2 variants={cinematicSlideUp} custom={1} initial="hidden" animate={inView ? "visible" : "hidden"} className="section-title">
          Work Experience
        </motion.h2>
        <div className="section-divider" />
      </div>

      <div className="relative w-full max-w-4xl mx-auto">
        {/* Animated timeline line */}
        <motion.div
          className="absolute left-[28px] top-0 w-[2px] rounded-full hidden sm:block"
          style={{
            background: isDark
              ? "linear-gradient(to bottom, transparent, rgba(59,130,246,0.3), rgba(34,211,238,0.2), transparent)"
              : "linear-gradient(to bottom, transparent, rgba(59,130,246,0.15), rgba(37,99,235,0.15), transparent)",
          }}
          initial={{ height: 0 }}
          animate={inView ? { height: "100%" } : {}}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Glowing particle on timeline */}
        {inView && (
          <motion.div
            className="absolute left-[27px] w-[4px] h-[4px] rounded-full hidden sm:block"
            style={{
              background: "#60a5fa",
              boxShadow: "0 0 12px #60a5fa, 0 0 24px rgba(96,165,250,0.4)",
            }}
            animate={{
              top: ["0%", "100%", "0%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}

        <motion.div variants={stagger3D} initial="hidden" animate={inView ? "visible" : "hidden"} className="space-y-16">
          {EXPERIENCE_DATA.map((exp) => (
            <div key={exp.id} className="relative flex flex-col sm:flex-row items-start w-full">
              {/* Timeline dot */}
              <motion.div
                className="hidden sm:flex absolute left-[28px] -translate-x-1/2 w-14 h-14 rounded-full border-4 items-center justify-center z-10 overflow-hidden"
                style={{
                  borderColor: isDark ? "#0a0e1a" : "#f0f2f8",
                  background: isDark ? "rgba(59,130,246,0.1)" : "rgba(59,130,246,0.06)",
                }}
                whileHover={{ scale: 1.15 }}
                animate={{
                  boxShadow: [
                    "0 0 15px rgba(59,130,246,0.2)",
                    "0 0 30px rgba(59,130,246,0.4)",
                    "0 0 15px rgba(59,130,246,0.2)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span style={{ fontSize: "1.3rem" }}>💼</span>
              </motion.div>

              <motion.div variants={stagger3DItem} className="w-full sm:ml-20">
                <motion.div
                  className="glass-card spotlight-card p-6 md:p-8 rounded-2xl relative overflow-hidden group"
                  whileHover={{ y: -4, scale: 1.005 }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
                  }}
                >
                  {/* Role header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-4">
                      {exp.logo && (
                        <motion.div
                          className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex-shrink-0 flex items-center justify-center p-1.5 bg-white"
                          style={{
                            border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}`,
                            boxShadow: "0 4px 16px rgba(0,0,0,0.08)"
                          }}
                          whileHover={{ rotateY: 180 }}
                          transition={{ duration: 0.6 }}
                        >
                          <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain" style={{ backfaceVisibility: "hidden" }} />
                        </motion.div>
                      )}
                      <div>
                        <h3 className="font-bold" style={{
                          fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
                          color: isDark ? "#e8ecf4" : "#0f0f1a",
                        }}>
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="neon-text" style={{ fontSize: "0.9rem", fontWeight: 600, color: "#60a5fa" }}>
                            {exp.company}
                          </span>
                          <span className="px-2 py-0.5 rounded-full text-[0.65rem] font-semibold uppercase tracking-wider"
                            style={{
                              background: "rgba(59,130,246,0.1)",
                              border: "1px solid rgba(59,130,246,0.2)",
                              color: "#60a5fa",
                            }}
                          >
                            {exp.employmentType}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-5">
                    <div className="flex items-center gap-1.5" style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                      <Calendar size={13} /> {exp.duration}
                    </div>
                    <div className="flex items-center gap-1.5" style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                      <MapPin size={13} /> {exp.location}
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed mb-6" style={{ color: isDark ? "#94a3b8" : "#475569" }}>
                    {exp.overview}
                  </p>

                  {/* Contributions */}
                  <div className="mb-6">
                    <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-3"
                      style={{ color: isDark ? "#e2e8f0" : "#1e293b" }}>
                      <CheckCircle size={12} style={{ color: "#60a5fa" }} /> Key Contributions
                    </h4>
                    <ul className="space-y-2">
                      {exp.contributions.map((item, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2.5"
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.06 }}
                        >
                          <motion.span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                            style={{ background: "#60a5fa", boxShadow: "0 0 6px rgba(96,165,250,0.5)" }}
                          />
                          <span className="text-sm leading-relaxed" style={{ color: isDark ? "#cbd5e1" : "#475569" }}>
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="pt-4 border-t" style={{ borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(59,130,246,0.08)" }}>
                    <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-3"
                      style={{ color: isDark ? "#e2e8f0" : "#1e293b" }}>
                      <Code2 size={12} style={{ color: "#2563eb" }} /> Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech, ti) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: ti * 0.04, type: "spring", stiffness: 300, damping: 15 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium"
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
                            border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
                            color: isDark ? "#cbd5e1" : "#334155",
                            transition: "all 0.2s",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(59,130,246,0.12)";
                            e.currentTarget.style.borderColor = "rgba(59,130,246,0.25)";
                            e.currentTarget.style.color = "#60a5fa";
                            e.currentTarget.style.boxShadow = "0 0 10px rgba(59,130,246,0.15)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)";
                            e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
                            e.currentTarget.style.color = isDark ? "#cbd5e1" : "#334155";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
