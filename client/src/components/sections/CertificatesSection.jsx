import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Award,
  ExternalLink,
  Calendar,
  Tag,
  Download,
  FileText,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { CERTIFICATES } from "@data/certificates";

/* ─── Floating orb background ────────────────────────────────── */
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 100 + i * 60,
            height: 100 + i * 60,
            left: `${15 + i * 18}%`,
            top: `${10 + (i % 3) * 30}%`,
            background: `radial-gradient(circle, ${
              [
                "rgba(37,99,235,0.06)",
                "rgba(139,92,246,0.05)",
                "rgba(16,185,129,0.05)",
                "rgba(245,158,11,0.05)",
                "rgba(14,165,233,0.06)",
              ][i]
            }, transparent 70%)`,
            filter: "blur(40px)",
          }}
          animate={{
            y: [0, -20 - i * 5, 0],
            x: [0, 10 + i * 3, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ─── PDF Preview Modal ──────────────────────────────────────── */
function PdfModal({ cert, onClose }) {
  if (!cert) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        {/* Modal content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
          className="relative w-full max-w-4xl rounded-2xl border overflow-hidden z-10"
          style={{
            background: "rgba(15,23,42,0.98)",
            border: `1px solid ${cert.border}`,
            boxShadow: `0 0 60px ${cert.color}20, 0 25px 50px rgba(0,0,0,0.5)`,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-6 py-4 border-b"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{cert.icon}</span>
              <div>
                <h3 className="text-sm font-bold text-white font-display">
                  {cert.title}
                </h3>
                <p className="text-xs mt-0.5" style={{ color: cert.color }}>
                  {cert.issuer}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={cert.pdfUrl}
                download
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:scale-105"
                style={{
                  background: `${cert.color}20`,
                  border: `1px solid ${cert.color}40`,
                  color: cert.color,
                }}
              >
                <Download size={12} />
                Download
              </a>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-lg border transition-all hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
              >
                <X size={14} className="text-white" />
              </button>
            </div>
          </div>

          {/* PDF Embed */}
          <div className="w-full aspect-[4/3] bg-black/40">
            <iframe
              src={cert.pdfUrl}
              title={cert.title}
              className="w-full h-full"
              style={{ border: "none" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── 3D Tilt Card ───────────────────────────────────────────── */
function CertCard({ cert, index, onViewPdf }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);

  function handleMouse(e) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function resetMouse() {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetMouse}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="relative rounded-2xl border overflow-hidden transition-all duration-300 h-full"
        {...(isHovered && {
          style: {
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            background: cert.bg,
            borderColor: cert.border,
            boxShadow: `0 0 40px ${cert.color}15, 0 20px 40px rgba(0,0,0,0.3)`,
          },
        })}
        {...(!isHovered && {
          style: {
            transformStyle: "preserve-3d",
            background: "var(--bg-card)",
            borderColor: "var(--border-glass)",
            boxShadow: "var(--shadow-sm, 0 4px 20px rgba(0,0,0,0.1))",
          },
        })}
      >
        {/* Shine effect on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: isHovered
              ? `linear-gradient(135deg, ${cert.color}08 0%, transparent 50%, ${cert.color}05 100%)`
              : "transparent",
          }}
        />

        {/* Top accent bar with shimmer */}
        <div className="relative h-1 w-full flex-shrink-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ background: cert.color }}
          />
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)`,
            }}
            animate={isHovered ? { x: ["-100%", "200%"] } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-20 flex-1 p-5 flex flex-col gap-3">
          {/* Icon + Category + Featured badge */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <motion.span
                className="text-2xl leading-none"
                animate={
                  isHovered
                    ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }
                    : {}
                }
                transition={{ duration: 0.6 }}
              >
                {cert.icon}
              </motion.span>
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{
                  background: `${cert.color}18`,
                  border: `1px solid ${cert.color}30`,
                  color: cert.color,
                }}
              >
                {cert.category}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              {cert.featured && (
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Sparkles size={14} style={{ color: cert.color }} />
                </motion.div>
              )}
              {cert.credentialUrl && (
                <motion.a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  className="text-slate-500 hover:text-blue-400 transition-colors"
                  title="View credential"
                >
                  <ExternalLink size={14} />
                </motion.a>
              )}
            </div>
          </div>

          {/* Title */}
          <h3
            className="font-display font-bold text-sm leading-snug transition-colors duration-300"
            style={{ color: isHovered ? "#ffffff" : "var(--text-primary)" }}
          >
            {cert.title}
          </h3>

          {/* Issuer + Date */}
          <div
            className="flex items-center gap-3 text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            <div className="flex items-center gap-1.5">
              <Award size={11} />
              <span className="font-semibold" style={{ color: cert.color }}>
                {cert.issuer}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={10} />
              {cert.date}
            </div>
          </div>

          {/* Description */}
          <p
            className="text-xs leading-relaxed line-clamp-3"
            style={{ color: "var(--text-secondary)" }}
          >
            {cert.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {cert.skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1 px-2 py-1 rounded-md text-xs border transition-all duration-200"
                style={{
                  background: isHovered ? `${cert.color}10` : "var(--bg-card)",
                  borderColor: isHovered
                    ? `${cert.color}25`
                    : "var(--border-glass)",
                  color: isHovered ? cert.color : "var(--text-secondary)",
                }}
              >
                <Tag size={9} />
                {skill}
              </motion.span>
            ))}
          </div>

          {/* PDF Download / View button */}
          {cert.pdfUrl && (
            <motion.button
              onClick={() => onViewPdf(cert)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 mt-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all border"
              style={{
                background: `${cert.color}12`,
                borderColor: `${cert.color}30`,
                color: cert.color,
              }}
            >
              <FileText size={13} />
              View Certificate
              <Download size={11} />
            </motion.button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Stats counter ─────────────────────────────────────────── */
function CertStats({ inView }) {
  const stats = [
    { value: CERTIFICATES.length, label: "Certificates", icon: "🏆" },
    {
      value: CERTIFICATES.filter((c) => c.featured).length,
      label: "Featured",
      icon: "⭐",
    },
    {
      value: new Set(CERTIFICATES.map((c) => c.category)).size,
      label: "Categories",
      icon: "📂",
    },
    {
      value: CERTIFICATES.filter((c) => c.pdfUrl).length,
      label: "Verified PDFs",
      icon: "📄",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-10 sm:mb-12">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 + i * 0.08 }}
          whileHover={{ y: -3, scale: 1.02 }}
          className="relative rounded-xl sm:rounded-2xl p-3 sm:p-4 border text-center overflow-hidden group"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-glass)",
          }}
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(37,99,235,0.08), transparent 70%)",
            }}
          />
          <span className="text-lg sm:text-xl mb-1 block">{stat.icon}</span>
          <motion.span
            className="text-xl sm:text-2xl font-black font-display block"
            style={{
              background: "linear-gradient(135deg, #60a5fa, #0ea5e9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {inView ? stat.value : 0}
          </motion.span>
          <span className="text-[10px] sm:text-xs text-slate-500">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Category filter pills ──────────────────────────────────── */
function CategoryFilters({ categories, active, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-wrap gap-2 justify-center mb-10"
    >
      {categories.map((cat) => (
        <motion.button
          key={cat}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(cat)}
          className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 border"
          style={{
            background:
              active === cat ? "rgba(37,99,235,0.15)" : "var(--bg-card)",
            borderColor:
              active === cat ? "rgba(37,99,235,0.4)" : "var(--border-glass)",
            color: active === cat ? "#93c5fd" : "var(--text-secondary)",
            boxShadow:
              active === cat ? "0 0 15px rgba(37,99,235,0.15)" : "none",
          }}
        >
          {cat}
        </motion.button>
      ))}
    </motion.div>
  );
}

/* ─── Main Section ──────────────────────────────────────────── */
export default function CertificatesSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewingPdf, setViewingPdf] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const categories = ["All", ...new Set(CERTIFICATES.map((c) => c.category))];
  const filtered =
    activeCategory === "All"
      ? CERTIFICATES
      : CERTIFICATES.filter((c) => c.category === activeCategory);

  return (
    <>
      <section
        id="certificates"
        className="section-container pt-0 relative"
        ref={ref}
      >
        <FloatingOrbs />

        {/* Header */}
        <div className="relative z-10 text-center mb-14">
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
            style={{ color: "var(--text-secondary)" }}
          >
            Industry-recognised certifications, national hackathon
            participations, and specialized courses completed alongside my
            B.Tech degree.
          </motion.p>
        </div>

        {/* Stats */}
        <CertStats inView={inView} />

        {/* Category Filters */}
        <CategoryFilters
          categories={categories}
          active={activeCategory}
          onSelect={setActiveCategory}
        />

        {/* Grid - 1 col mobile, 2 col tablet, 3 col desktop */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 relative z-10"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((cert, i) => (
              <CertCard
                key={cert.id}
                cert={cert}
                index={i}
                onViewPdf={setViewingPdf}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* PDF Modal */}
      {viewingPdf && (
        <PdfModal cert={viewingPdf} onClose={() => setViewingPdf(null)} />
      )}
    </>
  );
}
