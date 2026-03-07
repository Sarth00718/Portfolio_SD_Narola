import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Code2, Trophy } from 'lucide-react';
import { CP_PROFILES } from '@data/achievements';

const PLATFORM_LOGOS = {
  LeetCode: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" fill="#f59e0b"/>
    </svg>
  ),
  Codeforces: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9.75-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9.75 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" fill="#3b82f6"/>
    </svg>
  ),
  CodeChef: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.257.004C5.37-.128.24 4.837.009 10.723c-.105 2.607.61 5.034 1.999 7.026l-.148 4.662 4.458-1.354a10.686 10.686 0 0 0 4.93 1.937l.016.006h.033c.29.025.58.04.875.04 5.96 0 10.84-4.8 10.84-10.764C23.01 6.302 18.337 1.255 11.914.074c-.218-.04-.438-.063-.657-.07zm1.2 1.705c5.09.572 8.986 4.87 8.986 10.067 0 5.598-4.572 10.178-10.187 10.178-.254 0-.505-.01-.754-.031a9.027 9.027 0 0 1-4.402-1.665L5.59 20.38l-.114-3.663a9.18 9.18 0 0 1-1.909-5.57c0-4.985 3.94-9.096 8.89-9.438zm.054 2.78c-3.57 0-6.48 2.906-6.48 6.47 0 2.42 1.346 4.544 3.342 5.684.64.363 1.356.593 2.127.66l1.01.087V12.4h-2.19V10.81h2.19V9.37c0-1.78 1.088-2.722 2.692-2.722.544 0 1.134.04 1.678.1V8.58h-1.148c-.906 0-1.083.425-1.083 1.05v1.18h2.13l-.282 1.59h-1.848v4.852c2.32-.726 4.006-2.878 4.006-5.43 0-3.565-2.91-6.472-6.144-6.333z" fill="#a16207"/>
    </svg>
  ),
};

export default function CompetitiveProgrammingSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="competitive-programming" className="section-container pt-0" ref={ref}>
      {/* Header */}
      <div className="text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-4"
        >
          <span className="section-tag">
            <Trophy size={12} />
            Competitive Programming
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          Problem Solving Profiles
        </motion.h2>
        <div className="gradient-divider" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-400 max-w-xl mx-auto mt-4 text-sm leading-relaxed"
        >
          Actively practicing data structures, algorithms, and problem solving across competitive programming platforms.
        </motion.p>
      </div>

      {/* Platform Cards: 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-4xl mx-auto">
        {CP_PROFILES.map((cp, i) => (
          <motion.a
            key={cp.platform}
            href={cp.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="group relative rounded-2xl p-6 border transition-all duration-300 text-center overflow-hidden"
            style={{
              background: cp.bgColor,
              border: `1px solid ${cp.borderColor}`,
            }}
          >
            {/* Subtle background glow on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
              style={{ background: `radial-gradient(ellipse at 50% 0%, ${cp.color}15, transparent 70%)` }}
            />

            {/* Platform Logo */}
            <div className="flex justify-center mb-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                style={{
                  background: cp.bgColor,
                  border: `1px solid ${cp.borderColor}`,
                  boxShadow: `0 0 20px ${cp.color}20`,
                }}
              >
                {PLATFORM_LOGOS[cp.platform] || <Code2 size={24} style={{ color: cp.color }} />}
              </div>
            </div>

            {/* Platform Name */}
            <h3
              className="font-display font-bold text-lg mb-1 transition-colors duration-300"
              style={{ color: cp.color }}
            >
              {cp.platform}
            </h3>

            {/* Handle */}
            <p className="text-xs font-mono text-slate-400 mb-3">
              @{cp.handle}
            </p>

            {/* Status badge */}
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{
                background: `${cp.color}15`,
                border: `1px solid ${cp.color}30`,
                color: cp.color,
              }}
            >
              {cp.platform === 'CodeChef' && (
                <span>★★</span>
              )}
              {cp.status}
            </div>

            {/* Description */}
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              {cp.description}
            </p>

            {/* CTA */}
            <div
              className="flex items-center justify-center gap-1.5 text-xs font-semibold transition-all duration-300 group-hover:gap-2"
              style={{ color: cp.color }}
            >
              View Profile
              <ExternalLink size={11} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </motion.a>
        ))}
      </div>

      {/* Focus areas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5 }}
        className="mt-10 max-w-4xl mx-auto"
      >
        <div
          className="rounded-2xl p-6 border text-center"
          style={{
            background: 'rgba(37,99,235,0.05)',
            border: '1px solid rgba(37,99,235,0.15)',
          }}
        >
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">Practice Focus Areas</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              'Arrays & Strings', 'Dynamic Programming', 'Graph Algorithms',
              'Binary Search', 'Greedy Algorithms', 'Recursion & Backtracking',
              'Sorting & Searching', 'Tree Traversals', 'Number Theory',
            ].map(topic => (
              <span
                key={topic}
                className="px-3 py-1.5 rounded-lg text-xs text-slate-400 border"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
