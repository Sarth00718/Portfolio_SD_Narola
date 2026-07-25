import { motion } from 'framer-motion';
import { useTheme } from '@context/ThemeContext';

export default function SectionTransition({ variant = 'glow' }) {
  const { isDark } = useTheme();

  if (variant === 'glow') {
    return (
      <div className="relative w-full h-24 flex items-center justify-center overflow-hidden">
        {/* Animated center glow */}
        <motion.div
          className="absolute"
          style={{
            width: '200px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #3b82f6, #22d3ee, #3b82f6, transparent)',
            borderRadius: '99px',
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleX: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Side lines */}
        <div
          className="absolute w-full h-px"
          style={{
            background: isDark
              ? 'linear-gradient(90deg, transparent, rgba(59,130,246,0.1) 20%, rgba(59,130,246,0.1) 80%, transparent)'
              : 'linear-gradient(90deg, transparent, rgba(59,130,246,0.06) 20%, rgba(59,130,246,0.06) 80%, transparent)',
          }}
        />
        {/* Orbiting dot */}
        <motion.div
          className="absolute"
          style={{
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: '#60a5fa',
            boxShadow: '0 0 12px #60a5fa, 0 0 24px rgba(96,165,250,0.3)',
          }}
          animate={{
            x: [-100, 100, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    );
  }

  if (variant === 'particles') {
    return (
      <div className="relative w-full h-16 flex items-center justify-center overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: '3px',
              height: '3px',
              borderRadius: '50%',
              background: i % 2 === 0 ? '#3b82f6' : '#22d3ee',
              boxShadow: `0 0 8px ${i % 2 === 0 ? '#3b82f6' : '#22d3ee'}`,
            }}
            animate={{
              x: [(-50 + i * 25), (50 - i * 10), (-50 + i * 25)],
              y: [0, Math.sin(i) * 10, 0],
              opacity: [0.3, 0.9, 0.3],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
        <div
          className="absolute w-full h-px"
          style={{
            background: isDark
              ? 'linear-gradient(90deg, transparent, rgba(59,130,246,0.06), transparent)'
              : 'linear-gradient(90deg, transparent, rgba(59,130,246,0.04), transparent)',
          }}
        />
      </div>
    );
  }

  // Default: simple gradient line
  return (
    <div className="relative w-full h-12 flex items-center justify-center">
      <motion.div
        className="w-48 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)',
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
  );
}
