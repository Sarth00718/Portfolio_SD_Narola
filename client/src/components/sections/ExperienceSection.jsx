import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin, CheckCircle, Code2 } from "lucide-react";
import { useTheme } from "@context/ThemeContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const EXPERIENCE_DATA = [
  {
    id: "unikwork-intern",
    role: "Full Stack Developer Intern",
    company: "UNIKWORK",
    duration: "May 2026 – June 2026",
    employmentType: "Summer Internship",
    location: "Surat, Gujarat, India",
    overview: "Worked as a Full Stack Developer Intern on the UNIKWORK Dashboard, contributing to the development of a production-level project used for project management, task tracking, and business workflow management. Collaborated closely with senior frontend and backend developers in an agile development environment to build scalable features, integrate APIs, improve UI/UX, and optimize application performance.",
    contributions: [
      "Developed and enhanced production-ready React.js and Next.js components following reusable and scalable architecture.",
      "Integrated multiple REST APIs into frontend modules for projects, clients, employees, assets, tasks, authentication, and dashboard functionality.",
      "Built dynamic task management features including board view, list view, task details, and task updates.",
      "Implemented advanced filtering, searching, sorting, pagination, and server-side data handling.",
      "Developed infinite scrolling and optimized large dataset rendering for better user experience.",
      "Fixed responsive design issues across desktop, tablet, and mobile devices while ensuring pixel-perfect layouts.",
      "Improved UI consistency by matching implementation with Figma designs and enhancing overall user experience.",
      "Worked on task timer integration, debounced search functionality, and interactive dashboard components.",
      "Debugged frontend and backend issues, resolved API integration problems, and optimized application performance.",
      "Collaborated daily with senior frontend and backend developers through code reviews, feature discussions, and debugging sessions.",
      "Used Git and GitHub for version control, feature branching, pull requests, and collaborative development.",
      "Participated in testing, bug fixing, feature enhancements, and continuous improvements throughout the development lifecycle."
    ],
    techStack: [
      "React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS",
      "Node.js", "Express.js", "REST APIs",
      "Git", "GitHub", "Postman", "VS Code", "Figma"
    ],
    coreSkills: [
      "Full Stack Development", "REST API Integration", "Component-Based Architecture", "Responsive Web Design",
      "State Management", "UI/UX Implementation", "Performance Optimization", "Agile Development"
    ]
  }
];

export default function ExperienceSection() {
  const { isDark } = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.8)";
  const cardBorder = isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)";
  
  return (
    <section id="experience" className="section-container" ref={ref}>
      {/* Header */}
      <div className="text-center mb-16 sm:mb-20">
        <motion.div
          variants={fadeUp} custom={0} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="mb-4"
        >
          <span className="section-tag" style={{ background: isDark ? "rgba(37,99,235,0.15)" : "rgba(37,99,235,0.1)", color: "#3b82f6", border: "1px solid rgba(37,99,235,0.3)" }}>
            <Briefcase size={14} /> Professional Experience
          </span>
        </motion.div>
        <motion.h2
          variants={fadeUp} custom={1} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="section-title text-transparent bg-clip-text"
          style={{ backgroundImage: isDark ? "linear-gradient(135deg, #fff 0%, #94a3b8 100%)" : "linear-gradient(135deg, #0f172a 0%, #334155 100%)" }}
        >
          Work Experience
        </motion.h2>
        <div className="gradient-divider" />
        <motion.p
          variants={fadeUp} custom={2} initial="hidden" animate={inView ? "visible" : "hidden"}
          style={{
            color: "var(--text-secondary)",
            maxWidth: "600px", margin: "1rem auto 0",
            fontSize: "clamp(0.9rem, 2vw, 1.05rem)", lineHeight: 1.75,
          }}
        >
          Building scalable, production-ready solutions through hands-on software development experience.
        </motion.p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto">
        {/* Timeline Line */}
        <div 
          className="absolute left-[20px] sm:left-[40px] top-0 bottom-0 w-[2px] rounded-full hidden sm:block" 
          style={{ 
            background: isDark 
              ? "linear-gradient(to bottom, transparent, rgba(59,130,246,0.3), rgba(139,92,246,0.3), transparent)" 
              : "linear-gradient(to bottom, transparent, rgba(59,130,246,0.2), rgba(139,92,246,0.2), transparent)" 
          }} 
        />

        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          animate={inView ? "visible" : "hidden"}
          className="space-y-12 md:space-y-24"
        >
          {EXPERIENCE_DATA.map((exp, index) => {
            return (
              <div key={exp.id} className="relative flex flex-col sm:flex-row items-center w-full">
                
                {/* Timeline Dot */}
                <div 
                  className="absolute left-[20px] sm:left-[40px] -translate-x-1/2 w-12 h-12 rounded-full border-4 flex items-center justify-center z-10 hidden sm:flex bg-white overflow-hidden"
                  style={{ 
                    borderColor: isDark ? "#1e293b" : "#f1f5f9",
                    boxShadow: "0 0 20px rgba(59,130,246,0.3)"
                  }}
                >
                  <img src="/unikwork.png" alt={`${exp.company} Logo`} className="w-full h-full object-contain p-1.5" />
                </div>

                {/* Content Card */}
                <motion.div 
                  variants={fadeUp}
                  className="w-full sm:w-[calc(100%-90px)] sm:ml-[90px] ml-0"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div 
                    className="p-6 md:p-8 rounded-3xl transition-all duration-300 relative overflow-hidden group"
                    style={{ 
                      background: cardBg, 
                      border: cardBorder,
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      boxShadow: hoveredIndex === index 
                        ? (isDark ? "0 20px 40px rgba(0,0,0,0.4)" : "0 20px 40px rgba(99,102,241,0.08)") 
                        : (isDark ? "0 4px 20px rgba(0,0,0,0.2)" : "0 4px 20px rgba(99,102,241,0.04)"),
                      transform: hoveredIndex === index ? "translateY(-5px)" : "translateY(0)"
                    }}
                  >
                    {/* Subtle Gradient Overlay */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: isDark 
                          ? "radial-gradient(circle at top right, rgba(59,130,246,0.1), transparent 50%)" 
                          : "radial-gradient(circle at top right, rgba(59,130,246,0.05), transparent 50%)"
                      }}
                    />

                    {/* Role & Company Header */}
                    <div className="flex flex-col gap-2 mb-6">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 
                          className="font-bold"
                          style={{ 
                            fontFamily: "'Outfit', 'Inter', sans-serif",
                            fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)",
                            color: isDark ? "#f1f5f9" : "#0f172a",
                            lineHeight: 1.2
                          }}
                        >
                          {exp.role}
                        </h3>
                        <span 
                          className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase"
                          style={{ 
                            background: isDark ? "rgba(59,130,246,0.15)" : "rgba(59,130,246,0.1)", 
                            color: "#3b82f6",
                            border: "1px solid rgba(59,130,246,0.3)"
                          }}
                        >
                          {exp.employmentType}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 mt-2">
                        <div className="w-12 h-12 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0 border" style={{ borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}>
                          <img src="/unikwork.png" alt={`${exp.company} Logo`} className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <div 
                            className="font-semibold text-lg"
                            style={{ color: isDark ? "#cbd5e1" : "#334155" }}
                          >
                            {exp.company}
                          </div>
                          <div className="flex flex-wrap gap-4 mt-1">
                            <div className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                              <Calendar size={14} /> {exp.duration}
                            </div>
                            <div className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                              <MapPin size={14} /> {exp.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p 
                      className="text-sm md:text-base leading-relaxed mb-6"
                      style={{ color: isDark ? "#94a3b8" : "#475569" }}
                    >
                      {exp.overview}
                    </p>

                    {/* Key Contributions Section */}
                    <div className="mb-6">
                      <h4 className="flex items-center gap-2 text-sm font-semibold mb-3 uppercase tracking-wider" style={{ color: isDark ? "#e2e8f0" : "#1e293b" }}>
                        <CheckCircle size={14} className="text-blue-500" /> Key Contributions
                      </h4>
                      <ul className="space-y-2.5">
                        {exp.contributions.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-2" />
                            <span 
                              className="text-sm leading-relaxed"
                              style={{ color: isDark ? "#cbd5e1" : "#475569" }}
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="pt-5 border-t" style={{ borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)" }}>
                      <h4 className="flex items-center gap-2 text-sm font-semibold mb-3 uppercase tracking-wider" style={{ color: isDark ? "#e2e8f0" : "#1e293b" }}>
                        <Code2 size={14} className="text-purple-500" /> Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-default"
                            style={{ 
                              background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                              border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.08)",
                              color: isDark ? "#cbd5e1" : "#334155",
                              fontFamily: "'JetBrains Mono', monospace"
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = isDark ? "rgba(59,130,246,0.15)" : "rgba(59,130,246,0.1)";
                              e.currentTarget.style.borderColor = "rgba(59,130,246,0.3)";
                              e.currentTarget.style.color = "#3b82f6";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)";
                              e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)";
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
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
