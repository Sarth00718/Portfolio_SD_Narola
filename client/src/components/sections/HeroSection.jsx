import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Github, Linkedin, Mail, Download, ChevronRight } from 'lucide-react';
import NeuralCanvas from '@components/common/NeuralCanvas';
import { PROFILE } from '@data/achievements';

const STATS = [
  { value: '10+', label: 'Projects Built' },
  { value: '9.10', label: 'CGPA' },
  { value: '50+', label: 'APIs Designed' },
  { value: '3', label: 'CP Platforms' },
];

const SOCIAL = [
  { icon: Github, href: PROFILE.github, label: 'GitHub', hoverColor: '#e2e8f0' },
  { icon: Linkedin, href: PROFILE.linkedin, label: 'LinkedIn', hoverColor: '#60a5fa' },
  { icon: Mail, href: `mailto:${PROFILE.email}`, label: 'Email', hoverColor: '#93c5fd' },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#0a0f1e 0%,#111827 60%,#0a0f1e 100%)' }}
    >
      {/* Neural network background */}
      <NeuralCanvas />

      {/* Ambient glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent 70%)', filter: 'blur(80px)' }} />
      <div className="absolute bottom-1/3 left-1/5 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.06), transparent 70%)', filter: 'blur(60px)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 w-full">
        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 items-center">

          {/* Left — Text */}
          <div className="lg:col-span-3">
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-display font-black leading-tight mb-2">
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white block">Hi, I'm</span>
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl block"
                  style={{ background: 'linear-gradient(135deg,#60a5fa 0%,#38bdf8 50%,#0ea5e9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Sarth Narola
                </span>
              </h1>
            </motion.div>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="h-8 sm:h-10 mb-4 sm:mb-5"
            >
              <TypeAnimation
                sequence={[
                  '> Full Stack Developer', 2000,
                  '> AI / ML Enthusiast', 2000,
                  '> MERN Stack Developer', 2000,
                  '> LangChain + RAG Builder', 2000,
                  '> Final Year Engineer', 2000,
                ]}
                wrapper="span"
                speed={55}
                repeat={Infinity}
                className="text-sm sm:text-base md:text-lg font-mono text-blue-300"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 max-w-lg"
            >
              {PROFILE.tagline}. Specialized in building <span className="text-slate-300">production-ready MERN applications</span> and <span className="text-slate-300">AI-integrated pipelines</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(37,99,235,0.5)' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3"
                aria-label="View Projects"
              >
                View Projects
                <ChevronRight size={14} className="sm:w-4 sm:h-4" />
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="btn-secondary flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3"
                aria-label="Download Resume"
              >
                <Download size={13} className="sm:w-3.5 sm:h-3.5" />
                Resume
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3"
                aria-label="Contact Me"
              >
                <Mail size={13} className="sm:w-3.5 sm:h-3.5" />
                Contact
              </motion.button>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <span className="text-xs text-slate-600 uppercase tracking-widest">Find me on</span>
              <div className="flex gap-2">
                {SOCIAL.map(({ icon: Icon, href, label, hoverColor }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    className="w-9 h-9 flex items-center justify-center rounded-xl text-slate-400 hover:text-white transition-all border"
                    style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)' }}
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Stats + Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="rounded-2xl p-4 text-center border transition-all"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div className="font-display font-black text-2xl text-white mb-0.5"
                    style={{ background: 'linear-gradient(135deg,#60a5fa,#0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* University card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ y: -3 }}
              className="rounded-2xl p-5 border transition-all"
              style={{ background: 'rgba(37,99,235,0.07)', border: '1px solid rgba(37,99,235,0.18)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: 'linear-gradient(135deg,#1d4ed8,#2563eb)' }}>
                  🎓
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Nirma University</div>
                  <div className="text-xs text-slate-500">B.Tech CSE · 2022–2026</div>
                </div>
                <div className="ml-auto">
                  <span className="text-xs font-bold text-blue-400 px-2 py-0.5 rounded-lg"
                    style={{ background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.25)' }}>
                    CGPA: 9.10
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['React', 'Node.js', 'MongoDB', 'LangChain', 'FastAPI', 'FAISS'].map(t => (
                  <span key={t} className="px-2.5 py-1 rounded-lg text-xs text-slate-400 border"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Amazon ML badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              whileHover={{ y: -3 }}
              className="rounded-2xl p-4 border flex items-center gap-3 transition-all"
              style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.18)' }}
            >
              <span className="text-2xl">🏅</span>
              <div>
                <div className="text-sm font-bold text-amber-400">Amazon ML Summer School 2025</div>
                <div className="text-xs text-slate-500">Selected from national pool of top engineering students</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs text-slate-600 uppercase tracking-widest">Scroll</span>
        <ArrowDown size={14} className="text-slate-600" />
      </motion.div>
    </section>
  );
}
