import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin, CheckCircle, Code2 } from "lucide-react";
import { useTheme } from "@context/ThemeContext";
import { fadeUp, staggerContainer, staggerItem } from "@components/common/AnimationVariants";

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
        <motion.div variants={fadeUp} custom={0} initial="hidden" animate={inView ? "visible" : "hidden"} className="mb-4">
          <span className="section-tag"><Briefcase size={12} />Professional Experience</span>
        </motion.div>
        <motion.h2 variants={fadeUp} custom={1} initial="hidden" animate={inView ? "visible" : "hidden"} className="section-title">
          Work Experience
        </motion.h2>
        <div className="section-divider" />
      </div>

      <div className="relative w-full max-w-4xl mx-auto">
        {/* Timeline line */}
        <div
          className="absolute left-[28px] top-0 bottom-0 w-[2px] rounded-full hidden sm:block"
          style={{
            background: isDark
              ? "linear-gradient(to bottom, transparent, rgba(59,130,246,0.25), rgba(37,99,235,0.25), transparent)"
              : "linear-gradient(to bottom, transparent, rgba(59,130,246,0.15), rgba(37,99,235,0.15), transparent)",
          }}
        />

        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? "visible" : "hidden"} className="space-y-16">
          {EXPERIENCE_DATA.map((exp) => (
            <div key={exp.id} className="relative flex flex-col sm:flex-row items-start w-full">
              {/* Timeline dot */}
              <div className="hidden sm:flex absolute left-[28px] -translate-x-1/2 w-14 h-14 rounded-full border-4 items-center justify-center z-10 overflow-hidden"
                style={{
                  borderColor: isDark ? "#0a0e1a" : "#f0f2f8",
                  background: isDark ? "rgba(59,130,246,0.1)" : "rgba(59,130,246,0.06)",
                  boxShadow: "0 0 20px rgba(59,130,246,0.2)",
                }}
              >
                <span style={{ fontSize: "1.3rem" }}>💼</span>
              </div>

              <motion.div variants={staggerItem} className="w-full sm:ml-20">
                <div
                  className="p-6 md:p-8 rounded-2xl border relative overflow-hidden group"
                  style={{
                    background: isDark ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.85)",
                    borderColor: isDark ? "rgba(255,255,255,0.07)" : "rgba(59,130,246,0.08)",
                    transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  {/* Role header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-4">
                      {exp.logo && (
                        <div 
                          className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex-shrink-0 flex items-center justify-center p-1.5 bg-white" 
                          style={{ 
                            border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}`,
                            boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
                          }}
                        >
                          <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain" />
                        </div>
                      )}
                      <div>
                        <h3 className="font-bold" style={{
                          fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
                          color: isDark ? "#e8ecf4" : "#0f0f1a",
                        }}>
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#60a5fa" }}>
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
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-1 h-1 rounded-full flex-shrink-0 mt-2" style={{ background: "#60a5fa" }} />
                          <span className="text-sm leading-relaxed" style={{ color: isDark ? "#cbd5e1" : "#475569" }}>
                            {item}
                          </span>
                        </li>
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
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
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
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)";
                            e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
                            e.currentTarget.style.color = isDark ? "#cbd5e1" : "#334155";
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
