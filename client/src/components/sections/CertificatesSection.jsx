import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Calendar, Tag } from 'lucide-react';
import { CERTIFICATES } from '@data/certificates';

function CertCard({ cert, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300"
      style={{
        background: cert.bg,
        borderColor: cert.border,
      }}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full flex-shrink-0" style={{ background: cert.color }} />

      <div className="flex-1 p-5 flex flex-col gap-3">
        {/* Icon + Category */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl leading-none">{cert.icon}</span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{
                background: `${cert.color}18`,
                border: `1px solid ${cert.color}30`,
                color: cert.color,
              }}>
              {cert.category}
            </span>
          </div>
          {cert.credentialUrl && (
            <motion.a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-slate-500 hover:text-indigo-400 transition-colors"
              title="View credential"
            >
              <ExternalLink size={14} />
            </motion.a>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-sm leading-snug" style={{ color: 'var(--text-primary)' }}>
          {cert.title}
        </h3>

        {/* Issuer + Date */}
        <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--text-muted)' }}>
          <div className="flex items-center gap-1.5">
            <Award size={11} />
            <span className="font-semibold" style={{ color: cert.color }}>{cert.issuer}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={10} />
            {cert.date}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs leading-relaxed line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
          {cert.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {cert.skills.map(skill => (
            <span key={skill} className="flex items-center gap-1 px-2 py-1 rounded-md text-xs border"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border-glass)',
                color: 'var(--text-secondary)',
              }}>
              <Tag size={9} />
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function CertificatesSection() {
  const [showAll, setShowAll] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const visible = showAll ? CERTIFICATES : CERTIFICATES.slice(0, 3);

  return (
    <section id="certificates" className="section-container pt-0" ref={ref}>
      {/* Header */}
      <div className="text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-4"
        >
          <span className="section-tag">
            <Award size={12} />
            Certifications
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          Licenses & Certificates
        </motion.h2>
        <div className="gradient-divider" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-lg mx-auto mt-4 text-sm leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          Industry-recognised courses and certifications completed alongside my B.Tech degree.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map((cert, i) => (
          <CertCard key={cert.id} cert={cert} index={i} />
        ))}
      </div>

      {/* Show more toggle */}
      {CERTIFICATES.length > 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <button
            onClick={() => setShowAll(v => !v)}
            className="btn-secondary text-xs px-5 py-2.5"
          >
            {showAll ? 'Show Less' : `Show All ${CERTIFICATES.length} Certificates`}
          </button>
        </motion.div>
      )}
    </section>
  );
}
