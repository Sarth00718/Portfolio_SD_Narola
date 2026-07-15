import { useInView } from "react-intersection-observer";

// ─── Spring configs (consistent physics) ──────────────────────
export const spring = {
  gentle: { type: "spring", stiffness: 120, damping: 14, mass: 0.8 },
  snappy: { type: "spring", stiffness: 200, damping: 20, mass: 0.5 },
  bouncy: { type: "spring", stiffness: 180, damping: 10, mass: 0.6 },
  slow: { type: "spring", stiffness: 80, damping: 18, mass: 1 },
};

// ─── Transition easings ───────────────────────────────────────
export const ease = {
  outExpo: [0.16, 1, 0.3, 1],
  spring: [0.22, 1, 0.36, 1],
  inOutExpo: [0.87, 0, 0.13, 1],
  outBack: [0.34, 1.56, 0.64, 1],
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

// ─── Hook: scroll-triggered inView ────────────────────────────
export function useSectionInView(threshold = 0.06) {
  return useInView({ triggerOnce: true, threshold });
}

// ─── Hook: reduced motion check ──────────────────────────────
export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
