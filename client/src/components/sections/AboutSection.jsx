import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Mail, Github, Linkedin, ExternalLink, User } from 'lucide-react';
import { PROFILE } from '@data/achievements';

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
};

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="about" className="section-container" ref={ref}>
      {/* Header */}
      <div className="text-center mb-16">
        <motion.div variants={fadeUp} custom={0} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="mb-4">
          <span className="section-tag">
            <User size={12} />
            About Me
          </span>
        </motion.div>
        <motion.h2 variants={fadeUp} custom={1} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="section-title">
          Who I Am
        </motion.h2>
        <div className="gradient-divider" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 items-start">
        {/* Left — Bio */}
        <motion.div
          variants={fadeUp} custom={2} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="lg:col-span-3 space-y-5 sm:space-y-6"
        >
          {/* Bio card */}
          <div
            className="rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 break-words">
              I'm <span className="text-white font-semibold">Sarth Narola</span> ({PROFILE.rollNo}), a final-year B.Tech CSE student at <span className="text-blue-400 font-medium">Nirma University</span> with a CGPA of <span className="text-blue-400 font-bold">9.10</span>. I am passionate about building production-ready web applications and AI-integrated systems.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 break-words">
              I've built multiple full-stack projects including an <span className="text-sky-400 font-medium">AI Financial Document Chatbot</span> using RAG + LangChain + FAISS, a <span className="text-sky-400 font-medium">Smart Expense Tracker</span> live in production, and an enterprise Fleet Management System. I follow clean architecture: Controllers → Services → Repositories.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed break-words">
              I was selected for <span className="text-amber-400 font-medium">Amazon ML Summer School 2025</span> and have participated in national hackathons including Smart India Hackathon. I actively practice competitive programming on LeetCode, Codeforces, and CodeChef.
            </p>
          </div>

          {/* Contact info row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {[
              { icon: Mail, label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
              { icon: MapPin, label: 'Location', value: PROFILE.location, href: null },
              { icon: Github, label: 'GitHub', value: 'github.com/Sarth00718', href: PROFILE.github },
              { icon: Linkedin, label: 'LinkedIn', value: 'sarth-narola', href: PROFILE.linkedin },
            ].map(item => (
              <div key={item.label}
                className="flex items-center gap-2 sm:gap-3 p-3 sm:p-3.5 rounded-xl border"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.2)' }}>
                  <item.icon size={13} className="sm:w-3.5 sm:h-3.5 text-blue-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] sm:text-xs text-slate-600 mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-[11px] sm:text-xs text-slate-300 hover:text-blue-400 transition-colors truncate block"
                      aria-label={`${item.label}: ${item.value}`}>
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[11px] sm:text-xs text-slate-300 truncate">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Education + Links */}
        <motion.div
          variants={fadeUp} custom={3} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="lg:col-span-2 space-y-4 sm:space-y-5"
        >
          {/* Education */}
          <div
            className="rounded-2xl p-6 border"
            style={{
              background: 'rgba(37,99,235,0.05)',
              border: '1px solid rgba(37,99,235,0.15)',
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg,#1d4ed8,#2563eb)' }}>
                <GraduationCap size={18} className="text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-sm">Education</h3>
                <p className="text-xs text-slate-500">Academic Background</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold text-white mb-1">Nirma University</p>
              <p className="text-xs text-slate-400 mb-1">B.Tech Computer Science & Engineering</p>
              <p className="text-xs text-slate-500 mb-4">2022 – 2027 · Ahmedabad, Gujarat</p>

              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-500">CGPA</span>
                <span className="text-xs font-bold text-blue-400">9.10 / 10.0</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: '91%' } : { width: 0 }}
                  transition={{ duration: 1.4, delay: 0.7, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg,#1d4ed8,#2563eb)' }}
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {['DSA', 'DBMS', 'OS', 'Networks', 'ML', 'Math'].map(c => (
                  <span key={c} className="tech-badge">{c}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div
            className="rounded-2xl p-6 border"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <h3 className="text-sm font-bold text-white mb-4 font-display">Connect With Me</h3>
            <div className="space-y-3">
              <motion.a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 p-3 rounded-xl border transition-all group"
                style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}
              >
                <Github size={18} className="text-slate-400 group-hover:text-white transition-colors flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-300 font-medium">GitHub</p>
                  <p className="text-xs text-slate-600 truncate">github.com/Sarth00718</p>
                </div>
                <ExternalLink size={12} className="text-slate-600 group-hover:text-blue-400 transition-colors flex-shrink-0" />
              </motion.a>

              <motion.a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 p-3 rounded-xl border transition-all group"
                style={{ border: '1px solid rgba(59,130,246,0.15)', background: 'rgba(59,130,246,0.05)' }}
              >
                <Linkedin size={18} className="text-blue-400 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-300 font-medium">LinkedIn</p>
                  <p className="text-xs text-slate-600 truncate">sarth-narola-223002323</p>
                </div>
                <ExternalLink size={12} className="text-slate-600 group-hover:text-blue-400 transition-colors flex-shrink-0" />
              </motion.a>

              <motion.a
                href={`mailto:${PROFILE.email}`}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 p-3 rounded-xl border transition-all group"
                style={{ border: '1px solid rgba(37,99,235,0.15)', background: 'rgba(37,99,235,0.05)' }}
              >
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-300 font-medium">Email</p>
                  <p className="text-xs text-slate-600 truncate">{PROFILE.email}</p>
                </div>
                <ExternalLink size={12} className="text-slate-600 group-hover:text-blue-400 transition-colors flex-shrink-0" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
