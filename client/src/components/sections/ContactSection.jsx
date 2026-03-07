import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import {
  Mail, Github, Linkedin, MapPin, Send, CheckCircle,
  Clock, MessageSquare, Loader2, AlertCircle
} from 'lucide-react';
import { PROFILE } from '@data/achievements';

// ─── EmailJS Configuration ───────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_3od29mt';
const EMAILJS_TEMPLATE_ID = 'template_whgvyum';
const EMAILJS_PUBLIC_KEY  = 'sLdPRBAhWQdct-OzF';
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_LINKS = [
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Sarth00718',
    href: PROFILE.github,
    hoverStyle: { borderColor: 'rgba(148,163,184,0.3)', color: '#e2e8f0' },
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'sarth-narola-223002323',
    href: PROFILE.linkedin,
    hoverStyle: { borderColor: 'rgba(59,130,246,0.4)', color: '#60a5fa' },
  },
  {
    icon: Mail,
    label: 'Email',
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
    hoverStyle: { borderColor: 'rgba(37,99,235,0.4)', color: '#93c5fd' },
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Surat, Gujarat, India',
    href: null,
    hoverStyle: {},
  },
];

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

function validate(form) {
  const errors = {};
  if (!form.name.trim() || form.name.length < 2)  errors.name    = 'Name must be at least 2 characters';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email address';
  if (!form.subject.trim() || form.subject.length < 5) errors.subject = 'Subject is too short';
  if (!form.message.trim() || form.message.length < 20) errors.message = 'Message must be at least 20 characters';
  return errors;
}

export default function ContactSection() {
  const formRef = useRef(null);
  const [form, setForm]     = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.name,
          from_email:   form.email,
          subject:      form.subject,
          message:      form.message,
          reply_to:     form.email,
          to_name:      'Sarth',
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setForm(INITIAL_FORM);
      setTimeout(() => setStatus('idle'), 7000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  return (
    <section id="contact" className="section-container" ref={ref}>
      {/* Header */}
      <div className="text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-4"
        >
          <span className="section-tag">
            <MessageSquare size={12} />
            Get In Touch
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          Let's Connect
        </motion.h2>
        <div className="gradient-divider" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-400 max-w-lg mx-auto mt-4 text-sm leading-relaxed"
        >
          Looking for full-time SDE opportunities for 2027. Open to internships and interesting project collaborations too.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 w-full">
        {/* Left — Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 space-y-3 sm:space-y-4 w-full"
        >
          {/* Availability */}
          <div
            className="rounded-2xl p-5 border flex items-start gap-4"
            style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.15)' }}
          >
            <div className="relative mt-0.5 flex-shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping opacity-50" />
            </div>
            <div>
              <div className="text-sm font-bold text-emerald-400 mb-1">Available for Opportunities</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Final-year student actively looking for <strong className="text-slate-300">SDE full-time roles</strong> starting mid-2027. Also open to internships.
              </p>
            </div>
          </div>

          {/* Response time */}
          <div
            className="rounded-2xl p-4 border flex items-center gap-3"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <Clock size={15} className="text-blue-400 flex-shrink-0" />
            <div>
              <div className="text-sm font-semibold text-white">Responds within 24 hrs</div>
              <div className="text-xs text-slate-500">Feel free to reach out anytime</div>
            </div>
          </div>

          {/* Social / Contact Links */}
          {SOCIAL_LINKS.map(({ icon: Icon, label, value, href, hoverStyle }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.07 }}
            >
              {href ? (
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 group"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
                  onMouseEnter={e => {
                    if (hoverStyle.borderColor) e.currentTarget.style.borderColor = hoverStyle.borderColor;
                    if (hoverStyle.color) e.currentTarget.style.color = hoverStyle.color;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                    e.currentTarget.style.color = '';
                  }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 flex-shrink-0">
                    <Icon size={16} className="text-slate-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">{label}</div>
                    <div className="text-sm font-medium text-slate-300">{value}</div>
                  </div>
                </a>
              ) : (
                <div className="flex items-center gap-4 p-4 rounded-2xl border"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 flex-shrink-0">
                    <Icon size={16} className="text-slate-500" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">{label}</div>
                    <div className="text-sm text-slate-400">{value}</div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="lg:col-span-3 w-full"
        >
          <div
            className="rounded-2xl p-5 sm:p-8 border"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <h3 className="font-display font-bold text-white text-xl mb-2">Send a Message</h3>
            <p className="text-xs text-slate-500 mb-6">
              Powered by <span className="text-blue-400">EmailJS</span> — your message lands directly in my inbox.
            </p>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-16 gap-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                  >
                    <CheckCircle size={52} className="text-emerald-400" />
                  </motion.div>
                  <div className="text-center">
                    <div className="font-display font-bold text-white text-xl mb-2">Message Sent! 🎉</div>
                    <p className="text-sm text-slate-400">Thanks for reaching out — I'll reply within 24 hours.</p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs text-slate-400 mb-2 font-medium">Your Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`form-input ${errors.name ? 'border-rose-500/50' : ''}`}
                        disabled={status === 'sending'}
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1" role="alert">
                          <AlertCircle size={10} /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs text-slate-400 mb-2 font-medium">Email *</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={`form-input ${errors.email ? 'border-rose-500/50' : ''}`}
                        disabled={status === 'sending'}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1" role="alert">
                          <AlertCircle size={10} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs text-slate-400 mb-2 font-medium">Subject *</label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Job Opportunity / Internship / Collaboration"
                      className={`form-input ${errors.subject ? 'border-rose-500/50' : ''}`}
                      disabled={status === 'sending'}
                      aria-required="true"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1" role="alert">
                        <AlertCircle size={10} /> {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs text-slate-400 mb-2 font-medium">Message *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about the role, project, or collaboration you have in mind..."
                      className={`form-input resize-none ${errors.message ? 'border-rose-500/50' : ''}`}
                      disabled={status === 'sending'}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1" role="alert">
                        <AlertCircle size={10} /> {errors.message}
                      </p>
                    )}
                  </div>

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm text-rose-400 flex items-start gap-2 p-3 rounded-xl border border-rose-500/20 bg-rose-500/5"
                    >
                      <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
                      <span>
                        Failed to send via EmailJS. Please email me directly at{' '}
                        <a href={`mailto:${PROFILE.email}`} className="underline font-medium">
                          {PROFILE.email}
                        </a>
                        {' '}or check your EmailJS credentials.
                      </span>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    disabled={status === 'sending'}
                    className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-sm disabled:opacity-70"
                  >
                    {status === 'sending' ? (
                      <><Loader2 size={16} className="animate-spin" />Sending via EmailJS...</>
                    ) : (
                      <><Send size={16} />Send Message</>
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
