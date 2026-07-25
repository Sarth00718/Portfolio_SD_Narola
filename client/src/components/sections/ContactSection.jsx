import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import {
  Mail, Github, Linkedin, MapPin, Send, CheckCircle, Loader2, AlertCircle, ArrowUpRight, Sparkles
} from "lucide-react";
import { PROFILE } from "@data/achievements";
import { useTheme } from "@context/ThemeContext";
import { cinematicSlideUp } from "@components/common/AnimationVariants";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const SOCIAL_LINKS = [
  { icon: Github, label: "GitHub", value: "github.com/Sarth00718", href: PROFILE.github },
  { icon: Linkedin, label: "LinkedIn", value: "sarth-narola-223002323", href: PROFILE.linkedin },
  { icon: Mail, label: "Gmail", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: MapPin, label: "Location", value: "Surat, Gujarat, India", href: null },
];

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim() || form.name.length < 2) errors.name = "Name must be at least 2 characters";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Enter a valid email address";
  if (!form.subject.trim() || form.subject.length < 5) errors.subject = "Subject is too short";
  if (!form.message.trim() || form.message.length < 20) errors.message = "Message must be at least 20 characters";
  return errors;
}

const inputStyle = (isDark, error) => ({
  width: "100%",
  padding: "0.85rem 1rem",
  fontSize: "0.875rem",
  background: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
  border: `1px solid ${error ? "rgba(244,63,94,0.5)" : isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
  borderRadius: "12px",
  color: isDark ? "#e2e8f0" : "#1e293b",
  outline: "none",
  transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
});

const labelStyle = {
  display: "block",
  fontSize: "0.8rem",
  fontWeight: 600,
  color: "var(--text-secondary)",
  marginBottom: "6px",
  letterSpacing: "0.01em",
};

export default function ContactSection() {
  const formRef = useRef(null);
  const { isDark } = useTheme();
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setStatus("sending");
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: form.name, from_email: form.email, subject: form.subject,
        message: form.message, reply_to: form.email, to_name: "Sarth",
      }, EMAILJS_PUBLIC_KEY);
      setStatus("success");
      setForm(INITIAL_FORM);
      setTimeout(() => setStatus("idle"), 7000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  return (
    <section id="contact" className="section-container" ref={ref}>
      <motion.div
        variants={cinematicSlideUp} custom={0} initial="hidden" animate={inView ? "visible" : "hidden"}
        className="text-center mb-12 sm:mb-16"
      >
        <motion.div
          variants={cinematicSlideUp} custom={0} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4"
          style={{
            color: "#60a5fa",
            background: isDark ? "rgba(59,130,246,0.1)" : "rgba(59,130,246,0.08)",
            border: "1px solid rgba(59,130,246,0.15)",
          }}
        >
          <Sparkles size={12} /> Contact
        </motion.div>

        <motion.h2
          variants={cinematicSlideUp} custom={1} initial="hidden" animate={inView ? "visible" : "hidden"}
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            color: isDark ? "#e8ecf4" : "#0f0f1a",
            marginBottom: "0.75rem",
          }}
        >
          Let's{" "}
          <span className="neon-text" style={{
            backgroundImage: "linear-gradient(135deg, #60a5fa, #3b82f6, #22d3ee)",
            backgroundSize: "200% 100%",
            animation: "text-shimmer 3s linear infinite",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}>
            Connect
          </span>
        </motion.h2>

        <motion.p
          variants={cinematicSlideUp} custom={2} initial="hidden" animate={inView ? "visible" : "hidden"}
          style={{
            fontSize: "clamp(0.875rem, 2vw, 1.05rem)",
            color: "var(--text-secondary)",
            maxWidth: "520px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Currently looking for <strong style={{ color: isDark ? "#e2e8f0" : "#0f172a" }}>SDE full-time roles</strong> starting mid-2027 — feel free to reach out!
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 w-full">
        {/* Left — Info Panel */}
        <motion.div
          variants={cinematicSlideUp} custom={3} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="lg:col-span-2 space-y-3 w-full"
        >
          <div
            className="glass-card rounded-2xl p-5 sm:p-6 overflow-hidden relative"
            style={{
              background: isDark ? "rgba(59,130,246,0.04)" : "rgba(59,130,246,0.03)",
              borderColor: isDark ? "rgba(59,130,246,0.1)" : "rgba(59,130,246,0.1)",
            }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.06] rounded-full -translate-y-1/2 translate-x-1/2"
              style={{ background: "radial-gradient(circle, #60a5fa, transparent)" }} />
            <div className="flex items-start gap-3 relative z-[1]">
              <div className="relative flex-shrink-0 mt-1">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" style={{ boxShadow: "0 0 8px rgba(52,211,153,0.8)" }} />
                </span>
              </div>
              <div>
                <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#34d399", marginBottom: "4px" }}>
                  Available for Opportunities
                </div>
                <p style={{ fontSize: "clamp(0.8rem,1.8vw,0.88rem)", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  Open to full-time SDE roles, internships, and interesting collaborations.
                </p>
              </div>
            </div>
          </div>

          {SOCIAL_LINKS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group glass-card flex items-center gap-3.5 p-3.5 rounded-xl"
                    style={{ transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(59,130,246,0.25)";
                      e.currentTarget.style.background = "rgba(59,130,246,0.06)";
                      e.currentTarget.style.boxShadow = "0 4px 20px rgba(59,130,246,0.1)";
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.07)" : "rgba(59,130,246,0.08)";
                      e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.85)";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: isDark ? "rgba(59,130,246,0.08)" : "rgba(59,130,246,0.06)",
                        color: "#60a5fa",
                      }}
                    >
                      <Icon size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "2px" }}>
                        {item.label}
                      </div>
                      <div style={{ fontSize: "0.85rem", fontWeight: 500, color: isDark ? "#cbd5e1" : "#334155", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {item.value}
                      </div>
                    </div>
                    <ArrowUpRight size={14} style={{ color: "var(--text-muted)", opacity: 0, transform: "translateX(-4px)", transition: "all 0.25s", flexShrink: 0 }}
                      className="group-hover:opacity-100 group-hover:translate-x-0" />
                  </a>
                ) : (
                  <div className="glass-card flex items-center gap-3.5 p-3.5 rounded-xl">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: isDark ? "rgba(59,130,246,0.08)" : "rgba(59,130,246,0.06)", color: "#60a5fa" }}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "2px" }}>{item.label}</div>
                      <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{item.value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Right — Form */}
        <motion.div
          variants={cinematicSlideUp} custom={4} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="lg:col-span-3 w-full"
        >
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <div className="mb-6">
              <h3 style={{
                fontWeight: 700,
                fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
                color: isDark ? "#e8ecf4" : "#0f0f1a",
                marginBottom: "4px",
              }}>
                Send a Message
              </h3>
              <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                Powered by <span className="neon-text" style={{ color: "#60a5fa", fontWeight: 600 }}>EmailJS</span> — delivered straight to my inbox.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-16 gap-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      background: isDark ? "rgba(52,211,153,0.1)" : "rgba(52,211,153,0.08)",
                      boxShadow: "0 0 24px rgba(52,211,153,0.2)",
                    }}
                  >
                    <CheckCircle size={36} style={{ color: "#34d399" }} />
                  </motion.div>
                  <div className="text-center">
                    <div style={{ fontWeight: 700, fontSize: "1.2rem", color: isDark ? "#e8ecf4" : "#0f0f1a", marginBottom: "4px" }}>
                      Message Sent!
                    </div>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
                      Thanks for reaching out — I'll get back to you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form key="form" ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {["name", "email"].map((field) => (
                      <div key={field}>
                        <label htmlFor={`contact-${field}`} style={labelStyle}>
                          {field === "name" ? "Your Name" : "Email"} <span style={{ color: "#f87171" }}>*</span>
                        </label>
                        <input
                          id={`contact-${field}`}
                          type={field === "email" ? "email" : "text"}
                          name={field}
                          value={form[field]}
                          onChange={handleChange}
                          placeholder={field === "name" ? "John Doe" : "john@example.com"}
                          style={inputStyle(isDark, errors[field])}
                          disabled={status === "sending"}
                          aria-required="true"
                          aria-invalid={!!errors[field]}
                          onFocus={(e) => {
                            e.target.style.borderColor = "#60a5fa";
                            e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.08), 0 0 16px rgba(59,130,246,0.1)";
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = errors[field]
                              ? "rgba(244,63,94,0.5)"
                              : isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
                            e.target.style.boxShadow = "none";
                          }}
                        />
                        {errors[field] && (
                          <p className="mt-1.5 text-xs flex items-center gap-1" style={{ color: "#f87171" }} role="alert">
                            <AlertCircle size={10} /> {errors[field]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div>
                    <label htmlFor="contact-subject" style={labelStyle}>
                      Subject <span style={{ color: "#f87171" }}>*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Job Opportunity / Internship / Collaboration"
                      style={inputStyle(isDark, errors.subject)}
                      disabled={status === "sending"}
                      aria-required="true"
                      aria-invalid={!!errors.subject}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#60a5fa";
                        e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.08), 0 0 16px rgba(59,130,246,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = errors.subject
                          ? "rgba(244,63,94,0.5)"
                          : isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                    {errors.subject && (
                      <p className="mt-1.5 text-xs flex items-center gap-1" style={{ color: "#f87171" }} role="alert">
                        <AlertCircle size={10} /> {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-message" style={labelStyle}>
                      Message <span style={{ color: "#f87171" }}>*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about the role, project, or collaboration..."
                      style={{ ...inputStyle(isDark, errors.message), resize: "none" }}
                      disabled={status === "sending"}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#60a5fa";
                        e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.08), 0 0 16px rgba(59,130,246,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = errors.message
                          ? "rgba(244,63,94,0.5)"
                          : isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs flex items-center gap-1" style={{ color: "#f87171" }} role="alert">
                        <AlertCircle size={10} /> {errors.message}
                      </p>
                    )}
                  </div>

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm flex items-start gap-2 p-3 rounded-xl border"
                      style={{
                        color: "#f87171",
                        borderColor: "rgba(244,63,94,0.15)",
                        background: isDark ? "rgba(244,63,94,0.06)" : "rgba(244,63,94,0.04)",
                      }}
                    >
                      <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
                      <span>
                        Failed to send. Please email me directly at{" "}
                        <a href={`mailto:${PROFILE.email}`} className="underline font-medium" style={{ color: "#60a5fa" }}>{PROFILE.email}</a>.
                      </span>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01, boxShadow: "0 8px 32px rgba(59,130,246,0.4), 0 0 20px rgba(59,130,246,0.15)" }}
                    whileTap={{ scale: 0.98, y: 2 }}
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold border-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed relative overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, #60a5fa, #3b82f6, #2563eb)",
                      color: "#fff",
                      boxShadow: "0 4px 20px rgba(59,130,246,0.3)",
                      transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    {/* Shimmer overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                        backgroundSize: "200% 100%",
                        animation: "text-shimmer 3s linear infinite",
                      }}
                    />
                    {status === "sending" ? (
                      <><Loader2 size={16} className="animate-spin" /> Sending...</>
                    ) : (
                      <><Send size={16} /> Send Message</>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
