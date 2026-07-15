import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, ExternalLink, Calendar, Tag, Download, FileText, X, Sparkles } from "lucide-react";
import { CERTIFICATES } from "@data/certificates";

function CertCard({ cert, index, onViewPdf }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  function handleMouse(e) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function resetMouse() {
    mouseX.set(0); mouseY.set(0); setIsHovered(false);
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetMouse}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
          background: isHovered ? cert.bg : "var(--bg-card)",
          borderColor: isHovered ? cert.border : "var(--border-glass)",
          boxShadow: isHovered ? `0 0 40px ${cert.color}15, 0 20px 40px rgba(0,0,0,0.3)` : "var(--shadow-sm)",
        }}
        transition={{ type: "spring", damping: 18, stiffness: 250 }}
        className="relative rounded-2xl border overflow-hidden h-full"
      >
        {/* Shine */}
        <motion.div className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: isHovered ? `linear-gradient(135deg, ${cert.color}08 0%, transparent 50%, ${cert.color}05 100%)` : "transparent",
          }}
        />

        <div className="relative h-1 w-full overflow-hidden">
          <div className="absolute inset-0" style={{ background: cert.color }} />
          <motion.div className="absolute inset-0"
            style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)" }}
            animate={isHovered ? { x: ["-100%", "200%"] } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-20 p-5 flex flex-col gap-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <motion.span className="text-xl leading-none"
                animate={isHovered ? { scale: [1, 1.15, 1], rotate: [0, 8, -8, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                {cert.icon}
              </motion.span>
              <span className="text-[0.65rem] font-semibold px-2 py-1 rounded-full"
                style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}30`, color: cert.color, fontFamily: "'JetBrains Mono', monospace" }}
              >
                {cert.category}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              {cert.featured && (
                <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                  <Sparkles size={12} style={{ color: cert.color }} />
                </motion.div>
              )}
              {cert.credentialUrl && (
                <motion.a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.15 }}
                  className="transition-colors" style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#60a5fa"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; }}
                >
                  <ExternalLink size={12} />
                </motion.a>
              )}
            </div>
          </div>

          <h3 className="font-display font-bold text-sm leading-snug" style={{ color: isHovered ? "#ffffff" : "var(--text-primary)" }}>
            {cert.title}
          </h3>

          <div className="flex items-center gap-3" style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
            <div className="flex items-center gap-1">
              <Award size={10} />
              <span style={{ fontWeight: 600, color: cert.color }}>{cert.issuer}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={9} />
              {cert.date}
            </div>
          </div>

          <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "var(--text-secondary)" }}>
            {cert.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
            {cert.skills.map((skill) => (
              <span key={skill}
                className="flex items-center gap-1 px-2 py-1 rounded-md text-[0.65rem] border"
                style={{
                  background: isHovered ? `${cert.color}10` : "var(--bg-card)",
                  borderColor: isHovered ? `${cert.color}25` : "var(--border-glass)",
                  color: isHovered ? cert.color : "var(--text-secondary)",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                <Tag size={8} />
                {skill}
              </span>
            ))}
          </div>

          {cert.pdfUrl && (
            <motion.button onClick={() => onViewPdf(cert)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 mt-1 px-4 py-2 rounded-xl text-[0.7rem] font-semibold border"
              style={{ background: `${cert.color}12`, borderColor: `${cert.color}30`, color: cert.color }}
            >
              <FileText size={11} />
              View Certificate
              <Download size={10} />
            </motion.button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function PdfModal({ cert, onClose }) {
  if (!cert) return null;
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <motion.div initial={{ opacity: 0, scale: 0.85, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }} transition={{ type: "spring", damping: 25, stiffness: 350 }}
          className="relative w-full max-w-4xl rounded-2xl border overflow-hidden z-10"
          style={{ background: "rgba(10,14,26,0.98)", borderColor: cert.border, boxShadow: `0 0 60px ${cert.color}20` }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <div className="flex items-center gap-3">
              <span className="text-xl">{cert.icon}</span>
              <div>
                <h3 className="text-sm font-bold text-white">{cert.title}</h3>
                <p className="text-[0.7rem] mt-0.5" style={{ color: cert.color }}>{cert.issuer}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a href={cert.pdfUrl} download
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[0.7rem] font-semibold"
                style={{ background: `${cert.color}20`, border: `1px solid ${cert.color}40`, color: cert.color }}
              >
                <Download size={11} /> Download
              </a>
              <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-lg border"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                <X size={13} className="text-white" />
              </button>
            </div>
          </div>
          <div className="w-full aspect-[4/3] bg-black/40">
            <iframe src={cert.pdfUrl} title={cert.title} className="w-full h-full" style={{ border: "none" }} />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function CertificatesSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewingPdf, setViewingPdf] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const categories = ["All", ...new Set(CERTIFICATES.map((c) => c.category))];
  const filtered = activeCategory === "All" ? CERTIFICATES : CERTIFICATES.filter((c) => c.category === activeCategory);

  return (
    <>
      <section id="certificates" className="section-container pt-0 relative" ref={ref}>
        <div className="relative z-10 text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-4">
            <span className="section-tag"><Award size={12} />Certifications</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="section-title">
            Licenses & Certificates
          </motion.h2>
          <div className="section-divider" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <motion.button key={cat} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-[0.7rem] font-semibold border"
              style={{
                background: activeCategory === cat ? "rgba(59,130,246,0.12)" : "var(--bg-card)",
                borderColor: activeCategory === cat ? "rgba(59,130,246,0.35)" : "var(--border-glass)",
                color: activeCategory === cat ? "#60a5fa" : "var(--text-secondary)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 relative z-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((cert, i) => (
              <CertCard key={cert.id} cert={cert} index={i} onViewPdf={setViewingPdf} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {viewingPdf && <PdfModal cert={viewingPdf} onClose={() => setViewingPdf(null)} />}
    </>
  );
}
