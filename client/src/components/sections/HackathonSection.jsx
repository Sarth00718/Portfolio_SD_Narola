import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Globe, Rocket } from "lucide-react";
import { HACKATHON_PROJECTS } from "@data/projects";
import { useTheme } from "@context/ThemeContext";

function SmartBiteCard({ project, isDark }) {
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.85)";
  const cardBorder = isDark
    ? "1px solid rgba(255,255,255,0.08)"
    : "1px solid rgba(0,0,0,0.09)";
  const headBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const rowBorder = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)";
  const titleColor = isDark ? "#f1f5f9" : "#0f172a";
  const thColor = isDark ? "#cbd5e1" : "#334155";
  const tdColor = isDark ? "#94a3b8" : "#475569";
  const tdBold = isDark ? "#e2e8f0" : "#1e293b";
  const ghColor = isDark ? "#94a3b8" : "#475569";
  const ghBorder = isDark
    ? "1px solid rgba(255,255,255,0.1)"
    : "1px solid rgba(0,0,0,0.1)";
  const ghBg = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl overflow-hidden"
      style={{ background: cardBg, border: cardBorder }}
    >
      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start gap-3 mb-2">
          <span className="text-2xl">{project.emoji}</span>
          <div>
            <h3
              style={{
                fontFamily: "'Outfit','Inter',sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1rem,2.5vw,1.2rem)",
                color: titleColor,
                lineHeight: 1.3,
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontSize: "0.8rem",
                color: isDark ? "#64748b" : "#64748b",
                marginTop: "3px",
              }}
              className="flex items-center gap-1.5"
            >
              <span className="text-base">🏆</span>
              <em>{project.subtitle}</em>
            </p>
          </div>
        </div>

        {/* Feature Table */}
        <div className="mt-6 overflow-x-auto -mx-2 sm:mx-0">
          <div className="inline-block min-w-full align-middle">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: `1px solid ${headBorder}` }}>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "10px 8px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: thColor,
                      minWidth: "100px",
                      width: "34%",
                    }}
                  >
                    Feature
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "10px 8px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: thColor,
                      minWidth: "200px",
                    }}
                  >
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {project.features.map((feat, i) => (
                  <tr
                    key={i}
                    style={{ borderBottom: `1px solid ${rowBorder}` }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = isDark
                        ? "rgba(255,255,255,0.02)"
                        : "rgba(0,0,0,0.02)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <td
                      style={{
                        padding: "10px 8px",
                        fontSize: "0.8rem",
                        color: tdBold,
                        fontWeight: 600,
                      }}
                    >
                      <span className="mr-1.5">{feat.icon}</span>
                      <span className="whitespace-normal sm:whitespace-nowrap">
                        {feat.label}
                      </span>
                    </td>
                    <td
                      style={{
                        padding: "10px 8px",
                        fontSize: "0.8rem",
                        color: tdColor,
                      }}
                    >
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
            className="inline-flex items-center gap-1.5 rounded-lg transition-all"
            style={{
              padding: "7px 14px",
              fontSize: "0.8rem",
              fontWeight: 500,
              color: ghColor,
              border: ghBorder,
              background: ghBg,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = isDark ? "#f1f5f9" : "#0f172a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = ghColor;
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

function HackathonCard({ project, index, isDark }) {
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.85)";
  const cardBorder = isDark
    ? "1px solid rgba(255,255,255,0.08)"
    : "1px solid rgba(0,0,0,0.09)";
  const titleColor = isDark ? "#f1f5f9" : "#0f172a";
  const subColor = isDark ? "#64748b" : "#64748b";
  const tagColor = isDark ? "#94a3b8" : "#64748b";
  const featColor = isDark ? "#94a3b8" : "#475569";
  const featBold = isDark
    ? `<strong style="color:#e2e8f0;font-weight:600;">`
    : `<strong style="color:#0f172a;font-weight:600;">`;
  const divBorder = isDark
    ? "1px solid rgba(255,255,255,0.05)"
    : "1px solid rgba(0,0,0,0.06)";
  const ghBorder = isDark
    ? "1px solid rgba(255,255,255,0.1)"
    : "1px solid rgba(0,0,0,0.1)";
  const ghBg = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)";
  const ghColor = isDark ? "#94a3b8" : "#475569";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{ background: cardBg, border: cardBorder }}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-3 mb-1">
          <span className="text-2xl">{project.emoji}</span>
          <div>
            <h3
              style={{
                fontFamily: "'Outfit','Inter',sans-serif",
                fontWeight: 700,
                fontSize: "clamp(0.95rem,2.2vw,1.1rem)",
                color: titleColor,
                lineHeight: 1.3,
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontSize: "0.8rem",
                color: subColor,
                fontWeight: 600,
                marginTop: "3px",
              }}
            >
              {project.subtitle}
            </p>
          </div>
        </div>

        {project.tagline && (
          <p
            style={{
              fontSize: "0.78rem",
              color: tagColor,
              fontStyle: "italic",
              marginTop: "8px",
              marginLeft: "44px",
            }}
          >
            {project.tagline}
          </p>
        )}

        {/* Features */}
        <ul className="space-y-2.5 mt-4 ml-1">
          {project.features.map((feat, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.3,
                  flexShrink: 0,
                  marginTop: "1px",
                }}
              >
                {feat.icon}
              </span>
              <span
                style={{
                  fontSize: "clamp(0.8rem,1.8vw,0.875rem)",
                  color: featColor,
                  lineHeight: 1.6,
                }}
                dangerouslySetInnerHTML={{
                  __html: feat.text.replace(
                    /\b(PostgreSQL|RBAC|Socket\.io|Redux Toolkit|JWT|OCR)\b/g,
                    `${featBold}$1</strong>`,
                  ),
                }}
              />
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex gap-2 mt-5 pt-4" style={{ borderTop: divBorder }}>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-1.5 rounded-lg transition-all"
            style={{
              padding: "7px 14px",
              fontSize: "0.8rem",
              fontWeight: 500,
              color: ghColor,
              border: ghBorder,
              background: ghBg,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = isDark ? "#f1f5f9" : "#0f172a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = ghColor;
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
              className="inline-flex items-center gap-1.5 rounded-lg transition-all"
              style={{
                padding: "7px 14px",
                fontSize: "0.8rem",
                fontWeight: 500,
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
  const { isDark } = useTheme();
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
            <Rocket size={14} />
            Hackathons
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          Hackathon &amp; Innovation Projects
        </motion.h2>
        <div className="gradient-divider" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          style={{
            color: "var(--text-secondary)",
            maxWidth: "520px",
            margin: "1rem auto 0",
            fontSize: "clamp(0.875rem,2vw,1rem)",
            lineHeight: 1.7,
          }}
        >
          Award-winning projects built at competitive hackathons and innovation
          challenges.
        </motion.p>
      </div>

      {/* SmartBite — full width */}
      {smartBite && <SmartBiteCard project={smartBite} isDark={isDark} />}

      {/* FleetFlow + ExeMan — 1 col mobile, 2 col tablet+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mt-4 sm:mt-5">
        {others.map((project, i) => (
          <HackathonCard
            key={project.id}
            project={project}
            index={i}
            isDark={isDark}
          />
        ))}
      </div>
    </section>
  );
}
