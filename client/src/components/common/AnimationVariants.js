import { useInView } from "react-intersection-observer";

// ─── Spring configs (consistent physics) ──────────────────────
export const spring = {
  gentle: { type: "spring", stiffness: 120, damping: 14, mass: 0.8 },
  snappy: { type: "spring", stiffness: 200, damping: 20, mass: 0.5 },
  bouncy: { type: "spring", stiffness: 180, damping: 10, mass: 0.6 },
  slow: { type: "spring", stiffness: 80, damping: 18, mass: 1 },
  magnetic: { type: "spring", stiffness: 150, damping: 15, mass: 0.2 },
};

// ─── Transition easings ───────────────────────────────────────
export const ease = {
  outExpo: [0.16, 1, 0.3, 1],
  spring: [0.22, 1, 0.36, 1],
  inOutExpo: [0.87, 0, 0.13, 1],
  outBack: [0.34, 1.56, 0.64, 1],
  smooth: [0.4, 0, 0.2, 1],
};

// ─── Reusable section entrance variants ──────────────────────
export const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: ease.spring,
    },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: ease.spring },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: ease.spring },
  }),
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: ease.spring },
  }),
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: ease.spring },
  }),
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.08, ease: ease.spring },
  }),
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: ease.spring },
  },
};

export const clipReveal = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.8, ease: ease.outExpo },
  },
};

// ─── New 3D Animation Variants ────────────────────────────────

// 3D perspective reveal — rotates in from side
export const perspective3DReveal = {
  hidden: { opacity: 0, rotateY: -25, x: -30 },
  visible: (i = 0) => ({
    opacity: 1,
    rotateY: 0,
    x: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: ease.outBack },
  }),
};

// Cinematic slide up — blur to sharp with upward movement
export const cinematicSlideUp = {
  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay: i * 0.08, ease: ease.spring },
  }),
};

// Holographic entrance — scale + rotate with glow
export const holographicEntrance = {
  hidden: { opacity: 0, scale: 0.8, rotateX: 15 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: ease.outBack },
  }),
};

// Magnetic float — gentle continuous floating
export const magneticFloat = {
  float: {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Spring bounce for playful elements
export const springBounce = {
  hidden: { opacity: 0, scale: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 12,
      delay: i * 0.1,
    },
  }),
};

// 3D stagger container with depth-based staggering
export const stagger3D = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const stagger3DItem = {
  hidden: { opacity: 0, y: 30, rotateX: 10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { duration: 0.6, ease: ease.spring },
  },
};

// Letter stagger for text animations
export const letterStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03, delayChildren: 0.1 },
  },
};

export const letterVariant = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: ease.spring },
  },
};

// ─── Hook: scroll-triggered inView ────────────────────────────
export function useSectionInView(threshold = 0.06) {
  return useInView({ triggerOnce: true, threshold });
}

// ─── Hook: reduced motion check ──────────────────────────────
export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
